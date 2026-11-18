import { h, header, sheet } from '../ui.js';
import { icon } from '../icons.js';
import { store } from '../store.js';

const modes = [
  ['auto', 'contrast'],
  ['light', 'sun'],
  ['dark', 'moon']
];

function confirmReset() {
  const no = h('button', { class: 'btn ghost', type: 'button', 'aria-label': 'cancel', html: icon('x'), onclick: () => close() });
  const yes = h('button', {
    class: 'btn',
    type: 'button',
    'aria-label': 'confirm',
    html: icon('check'),
    onclick: () => {
      store.reset();
      close();
    }
  });
  const close = sheet(h('div', { class: 'sheet-actions' }, no, yes));
}

export default function settings(root) {
  const row = h('div', { class: 'theme-row', role: 'group', 'aria-label': 'theme' });
  const reset = h('button', {
    class: 'danger',
    type: 'button',
    'aria-label': 'reset',
    html: icon('trash'),
    onclick: confirmReset
  });

  function render() {
    const current = store.get().theme;
    row.replaceChildren(
      ...modes.map(([mode, name]) =>
        h('button', {
          class: 'round',
          type: 'button',
          'aria-label': mode,
          'aria-pressed': String(current === mode),
          html: icon(name),
          onclick: () => store.set({ theme: mode })
        })
      )
    );
  }

  root.append(header({ back: '/' }), h('div', { class: 'page' }, row, reset));
  render();
  return store.subscribe(render);
}
