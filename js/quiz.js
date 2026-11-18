import { h } from './ui.js';
import { icon } from './icons.js';
import { result } from './result.js';
import { store } from './store.js';

export function runQuiz(host, key, items) {
  let index = 0;
  let score = 0;

  function restart() {
    index = 0;
    score = 0;
    step();
  }

  function finish() {
    const previous = store.get().progress[key];
    if (!previous || score >= previous.score) {
      store.set({ progress: { ...store.get().progress, [key]: { score, total: items.length } } });
    }
    host.replaceChildren(result(score, items.length, restart));
  }

  function step() {
    if (index >= items.length) {
      finish();
      return;
    }

    const item = items[index];
    const [before, after = ''] = item.q.split('___');
    const blank = h('span', { class: 'blank' });
    let locked = false;

    const next = h('button', {
      class: 'btn',
      type: 'button',
      'aria-label': 'next',
      hidden: true,
      html: icon('chevron-right'),
      onclick: () => {
        index += 1;
        step();
      }
    });

    const buttons = item.options.map((label, choice) =>
      h(
        'button',
        {
          class: 'option',
          type: 'button',
          onclick: () => {
            if (locked) return;
            locked = true;
            if (choice === item.answer) score += 1;
            buttons.forEach((button, position) => {
              if (position === item.answer) {
                button.classList.add('right');
                button.firstChild.innerHTML = icon('check');
              } else if (position === choice) {
                button.classList.add('wrong');
                button.firstChild.innerHTML = icon('x');
              }
              button.disabled = true;
            });
            blank.textContent = item.options[item.answer];
            blank.classList.add('filled');
            next.hidden = false;
          }
        },
        h('span', { class: 'mark' }),
        label
      )
    );

    host.replaceChildren(
      h(
        'div',
        { class: 'dots' },
        ...items.map((_, position) => h('span', { class: position < index ? 'dot done' : position === index ? 'dot on' : 'dot' }))
      ),
      h('p', { class: 'q' }, before, blank, after),
      ...buttons,
      h('div', { class: 'next-row' }, next)
    );
  }

  step();
}
