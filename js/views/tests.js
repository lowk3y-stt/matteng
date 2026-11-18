import { h, header } from '../ui.js';
import { icon } from '../icons.js';
import { tests } from '../data/tests.js';
import { store, isDone } from '../store.js';

export default function testsList(root) {
  const list = h('div', { class: 'units' });

  function render() {
    const { progress } = store.get();
    list.replaceChildren(
      ...tests.map((test) => {
        const best = progress[`test:${test.id}`];
        const finished = isDone(best);
        return h(
          'a',
          { class: finished ? 'unit done' : 'unit', href: `#/tests/${test.id}` },
          h('span', { class: 'unit-n', html: icon(finished ? 'check' : test.icon) }),
          h('span', { class: 'unit-t' }, test.title),
          h('span', { class: 'unit-meta' }, best ? `${best.score} / ${best.total}` : `${test.questions.length}`)
        );
      })
    );
  }

  root.append(header({ back: '/', title: 'Тесты' }), list);
  render();
  return store.subscribe(render);
}
