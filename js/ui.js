import { icon } from './icons.js';

export function h(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'class') node.className = value;
    else if (key === 'html') node.innerHTML = value;
    else if (key.startsWith('on')) node.addEventListener(key.slice(2).toLowerCase(), value);
    else if (value !== false && value != null) node.setAttribute(key, value === true ? '' : value);
  }
  for (const child of children.flat()) {
    if (child == null || child === false) continue;
    node.append(child.nodeType ? child : document.createTextNode(child));
  }
  return node;
}

export function header({ back, title = '' } = {}) {
  return h(
    'div',
    { class: 'sticky' },
    h(
      'div',
      { class: 'top' },
      h('a', { class: 'icon-btn', href: `#${back}`, 'aria-label': 'back', html: icon('chevron-left') }),
      h('span', { class: 'top-title' }, title)
    )
  );
}

export function sheet(content) {
  const host = document.getElementById('app');
  const panel = h('div', { class: 'sheet', role: 'dialog', 'aria-modal': 'true' }, h('div', { class: 'grip' }), content);
  const overlay = h('div', { class: 'overlay' }, panel);

  function onKey(event) {
    if (event.key === 'Escape') close();
  }

  function close() {
    overlay.classList.remove('open');
    document.removeEventListener('keydown', onKey);
    setTimeout(() => overlay.remove(), 250);
  }

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) close();
  });
  document.addEventListener('keydown', onKey);
  host.append(overlay);
  requestAnimationFrame(() => overlay.classList.add('open'));
  return close;
}
