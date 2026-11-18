import { store } from './store.js';

const media = window.matchMedia('(prefers-color-scheme: dark)');
const colors = { light: '#ffffff', dark: '#080e1c' };

function resolve(mode) {
  if (mode === 'auto') return media.matches ? 'dark' : 'light';
  return mode;
}

function apply() {
  const theme = resolve(store.get().theme);
  document.documentElement.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', colors[theme]);
}

export function initTheme() {
  apply();
  media.addEventListener('change', apply);
  store.subscribe(apply);
}
