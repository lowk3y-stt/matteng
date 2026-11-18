import { initTheme } from './theme.js';
import { initRouter } from './router.js';

initTheme();
initRouter(document.getElementById('view'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
