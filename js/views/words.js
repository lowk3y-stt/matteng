import { h, header } from '../ui.js';
import { icon } from '../icons.js';
import { wordSets } from '../data/words.js';
import { store } from '../store.js';

export default function words(root) {
  const list = h('div', { class: 'units' });

  function render() {
    const { words: known } = store.get();
    list.replaceChildren(
      ...wordSets.map((set) => {
        const count = (known[set.id] || []).length;
        const finished = count === set.words.length;
        return h(
          'a',
          { class: finished ? 'unit done' : 'unit', href: `#/words/${set.id}` },
          h('span', { class: 'unit-n', html: icon(finished ? 'check' : set.icon) }),
          h('span', { class: 'unit-t' }, set.title),
          h('span', { class: 'unit-meta' }, `${count} / ${set.words.length}`)
        );
      })
    );
  }

  root.append(header({ back: '/', title: 'Слова' }), list);
  render();
  return store.subscribe(render);
}
