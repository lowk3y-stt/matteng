import { h, header } from '../ui.js';
import { cover } from '../cover.js';
import { library } from '../data/library.js';
import { store, bookProgress } from '../store.js';

export default function books(root) {
  const grid = h('div', { class: 'covers' });

  function render() {
    const { progress } = store.get();
    grid.replaceChildren(
      ...library.map((book, index) => {
        const { done, total } = bookProgress(book, progress);
        return cover(book, index, done / total);
      })
    );
  }

  root.append(header({ back: '/', title: 'Учебники' }), grid);
  render();
  return store.subscribe(render);
}
