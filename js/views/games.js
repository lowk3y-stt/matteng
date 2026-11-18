import { h, header } from '../ui.js';
import { icon } from '../icons.js';

const games = [
  ['match', 'link', 'Пары', 't-tests'],
  ['scramble', 'shuffle', 'Слова из букв', 't-words']
];

export default function gamesHub(root) {
  root.append(
    header({ back: '/', title: 'Мини-игры' }),
    h(
      'div',
      { class: 'stack' },
      ...games.map(([path, name, label, tone]) =>
        h(
          'a',
          { class: `tile ${tone}`, href: `#/games/${path}`, 'aria-label': label },
          h('span', { class: 'tile-badge', html: icon(name) }),
          h('span', { class: 'tile-label' }, label)
        )
      )
    )
  );
}
