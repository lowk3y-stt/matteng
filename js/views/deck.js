import { h, header } from '../ui.js';
import { icon } from '../icons.js';
import { result } from '../result.js';
import { wordSets } from '../data/words.js';
import { store } from '../store.js';

export default function deck(root, [id]) {
  const set = wordSets.find((item) => item.id === id);
  if (!set) {
    location.replace('#/words');
    return;
  }

  const page = h('div', { class: 'page' });
  root.append(header({ back: '/words', title: set.title }), page);

  let queue = [];
  let index = 0;

  function known() {
    return store.get().words[id] || [];
  }

  function remember(word) {
    if (known().includes(word.en)) return;
    store.set({ words: { ...store.get().words, [id]: [...known(), word.en] } });
  }

  function start() {
    const rest = set.words.filter((word) => !known().includes(word.en));
    queue = rest.length ? rest : set.words;
    index = 0;
    step();
  }

  function advance() {
    index += 1;
    step();
  }

  function step() {
    if (index >= queue.length) {
      page.replaceChildren(result(known().length, set.words.length, start));
      return;
    }

    const word = queue[index];
    const card = h(
      'button',
      { class: 'flip', type: 'button', 'aria-label': 'flip', onclick: () => card.classList.toggle('on') },
      h(
        'div',
        { class: 'flip-inner' },
        h('div', { class: 'face face-front' }, h('span', { class: 'face-word' }, word.en)),
        h('div', { class: 'face face-back' }, h('span', { class: 'face-word' }, word.ru), h('span', { class: 'face-sub' }, word.en))
      )
    );

    page.replaceChildren(
      h('div', { class: 'bar' }, h('i', { style: `width:${(index / queue.length) * 100}%` })),
      card,
      h(
        'div',
        { class: 'deck-actions' },
        h('button', { class: 'btn ghost', type: 'button', 'aria-label': 'again', html: icon('refresh'), onclick: advance }),
        h('button', {
          class: 'btn',
          type: 'button',
          'aria-label': 'know',
          html: icon('check'),
          onclick: () => {
            remember(word);
            advance();
          }
        })
      )
    );
  }

  start();
}
