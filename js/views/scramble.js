import { h, header } from '../ui.js';
import { icon } from '../icons.js';
import { result } from '../result.js';
import { wordSets } from '../data/words.js';
import { sample, shuffle } from '../util.js';

const ROUNDS = 8;
const pool = wordSets
  .flatMap((set) => set.words)
  .filter((word) => word.en.length >= 4 && word.en.length <= 9 && !word.en.includes(' '));

export default function scramble(root) {
  const page = h('div', { class: 'page' });
  root.append(header({ back: '/games', title: 'Слова из букв' }), page);

  function start() {
    const rounds = sample(pool, ROUNDS);
    let round = 0;
    let score = 0;

    function play() {
      if (round >= rounds.length) {
        page.replaceChildren(result(score, rounds.length, start));
        return;
      }

      const word = rounds[round];
      const letters = word.en.split('');
      let order;
      do {
        order = shuffle(letters.map((_, position) => position));
      } while (order.map((position) => letters[position]).join('') === word.en);

      let placed = [];
      let failed = false;
      let locked = false;
      let state = '';

      function draw() {
        const slots = letters.map((_, k) =>
          h('span', { class: `slot ${state}` }, placed[k] === undefined ? '' : letters[order[placed[k]]])
        );
        const bank = order.map((letterIndex, position) =>
          h(
            'button',
            {
              class: 'tile-letter',
              type: 'button',
              disabled: locked || placed.includes(position),
              onclick: () => place(position)
            },
            letters[letterIndex]
          )
        );
        const undo = h('button', {
          class: 'btn ghost',
          type: 'button',
          'aria-label': 'undo',
          disabled: locked || placed.length === 0,
          html: icon('backspace'),
          onclick: () => {
            placed = placed.slice(0, -1);
            draw();
          }
        });

        page.replaceChildren(
          h(
            'div',
            { class: 'dots' },
            ...rounds.map((_, position) => h('span', { class: position < round ? 'dot done' : position === round ? 'dot on' : 'dot' }))
          ),
          h('p', { class: 'q center' }, word.ru),
          h('div', { class: 'slots' }, ...slots),
          h('div', { class: 'bank' }, ...bank),
          h('div', { class: 'back-row' }, undo)
        );
      }

      function place(position) {
        placed = [...placed, position];
        if (placed.length < letters.length) {
          draw();
          return;
        }

        locked = true;
        const guess = placed.map((p) => letters[order[p]]).join('');
        if (guess === word.en) {
          state = 'right';
          if (!failed) score += 1;
          draw();
          setTimeout(() => {
            round += 1;
            play();
          }, 700);
        } else {
          failed = true;
          state = 'wrong';
          draw();
          setTimeout(() => {
            placed = [];
            locked = false;
            state = '';
            draw();
          }, 650);
        }
      }

      draw();
    }

    play();
  }

  start();
}
