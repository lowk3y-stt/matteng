import { h, header } from '../ui.js';
import { result } from '../result.js';
import { wordSets } from '../data/words.js';
import { sample, shuffle } from '../util.js';

const ROUND = 5;
const pool = wordSets.flatMap((set) => set.words);

export default function match(root) {
  const page = h('div', { class: 'page' });
  root.append(header({ back: '/games', title: 'Пары' }), page);

  function start() {
    const picked = sample(pool, ROUND);
    let selected = null;
    let mistakes = 0;
    let matched = 0;

    function make(word, side, label) {
      const button = h('button', { class: 'pair', type: 'button', onclick: () => choose(button) }, label);
      button.dataset.en = word.en;
      button.dataset.side = side;
      return button;
    }

    function choose(button) {
      if (!selected) {
        selected = button;
        button.classList.add('on');
        return;
      }
      if (selected === button) {
        button.classList.remove('on');
        selected = null;
        return;
      }
      if (selected.dataset.side === button.dataset.side) {
        selected.classList.remove('on');
        selected = button;
        button.classList.add('on');
        return;
      }

      const first = selected;
      selected = null;
      first.classList.remove('on');

      if (first.dataset.en === button.dataset.en) {
        [first, button].forEach((item) => {
          item.classList.add('done');
          item.disabled = true;
        });
        matched += 1;
        if (matched === ROUND) setTimeout(() => page.replaceChildren(result(Math.max(0, ROUND - mistakes), ROUND, start)), 450);
      } else {
        mistakes += 1;
        [first, button].forEach((item) => {
          item.classList.add('miss');
          setTimeout(() => item.classList.remove('miss'), 400);
        });
      }
    }

    page.replaceChildren(
      h(
        'div',
        { class: 'pairs' },
        h('div', { class: 'pair-col' }, ...shuffle(picked).map((word) => make(word, 'en', word.en))),
        h('div', { class: 'pair-col' }, ...shuffle(picked).map((word) => make(word, 'ru', word.ru)))
      )
    );
  }

  start();
}
