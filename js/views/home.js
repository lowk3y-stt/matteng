import { h } from '../ui.js';
import { icon } from '../icons.js';
import { cover } from '../cover.js';
import { library } from '../data/library.js';
import { store, bookProgress } from '../store.js';

const tiles = [
  ['books', '/books', 'book', 'Учебники'],
  ['words', '/words', 'cards', 'Слова'],
  ['tests', '/tests', 'clipboard', 'Тесты'],
  ['games', '/games', 'gamepad', 'Мини-игры']
];

function tile([key, path, name, label], progress) {
  const lead =
    key === 'books'
      ? h(
          'div',
          { class: 'tile-art' },
          ...library.slice(0, 3).map((book, index) => {
            const { done, total } = bookProgress(book, progress);
            return cover(book, index, done / total, 'div');
          })
        )
      : h('span', { class: 'tile-badge', html: icon(name) });

  return h('a', { class: `tile t-${key}`, href: `#${path}`, 'aria-label': label }, lead, h('span', { class: 'tile-label' }, label));
}

export default function home(root) {
  const bento = h('div', { class: 'bento' });

  function render() {
    const { progress } = store.get();
    bento.replaceChildren(...tiles.map((item) => tile(item, progress)));
  }

  root.append(
    h(
      'div',
      { class: 'home' },
      h(
        'div',
        { class: 'home-top' },
        h('span', { class: 'brand' }, 'Matt', h('b', {}, 'Eng')),
        h('a', { class: 'icon-btn', href: '#/settings', 'aria-label': 'settings', html: icon('sliders') })
      ),
      bento
    )
  );

  render();
  return store.subscribe(render);
}
