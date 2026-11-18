import { h, header } from '../ui.js';
import { icon } from '../icons.js';
import { ring } from '../ring.js';
import { library } from '../data/library.js';
import { store, isDone, bookProgress } from '../store.js';

export default function book(root, [id]) {
  const data = library.find((item) => item.id === id);
  if (!data) {
    location.replace('#/');
    return;
  }

  const hero = h('div', { class: 'hero' });
  const chips = h('div', { class: 'chips', role: 'tablist' });
  const units = h('div', { class: 'units' });

  function render() {
    const { tabs, progress } = store.get();
    const active = data.modules.find((module) => module.id === tabs[id]) || data.modules[0];
    const { done, total } = bookProgress(data, progress);

    hero.replaceChildren(
      h(
        'div',
        { class: 'hero-ring' },
        h('span', { html: ring(done / total, 136, 12) }),
        h('div', { class: 'hero-in' }, h('div', { class: 'hero-count' }, done), h('div', { class: 'hero-total' }, `/ ${total}`))
      )
    );

    chips.replaceChildren(
      ...data.modules.map((module) =>
        h(
          'button',
          {
            class: 'chip',
            type: 'button',
            role: 'tab',
            'aria-selected': String(module === active),
            onclick: () => store.set({ tabs: { ...store.get().tabs, [id]: module.id } })
          },
          module.title
        )
      )
    );

    units.replaceChildren(
      ...active.units.map((unit) => {
        const finished = isDone(progress[`${id}:${unit.n}`]);
        return h(
          'a',
          { class: finished ? 'unit done' : 'unit', href: `#/book/${id}/${unit.n}` },
          h('span', { class: 'unit-n', html: finished ? icon('check') : String(unit.n) }),
          h('span', { class: 'unit-t' }, unit.title)
        );
      })
    );

    const current = chips.querySelector('[aria-selected="true"]');
    if (current) chips.scrollLeft = current.offsetLeft - (chips.clientWidth - current.offsetWidth) / 2;
  }

  root.append(header({ back: '/', title: data.title }), hero, chips, units);
  render();
  return store.subscribe(render);
}
