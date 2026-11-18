import home from './views/home.js';
import books from './views/books.js';
import book from './views/book.js';
import unit from './views/unit.js';
import words from './views/words.js';
import deck from './views/deck.js';
import games from './views/games.js';
import match from './views/match.js';
import scramble from './views/scramble.js';
import tests from './views/tests.js';
import test from './views/test.js';
import settings from './views/settings.js';

const routes = [
  [/^\/$/, home],
  [/^\/books$/, books],
  [/^\/book\/([\w-]+)$/, book],
  [/^\/book\/([\w-]+)\/(\d+)$/, unit],
  [/^\/words$/, words],
  [/^\/words\/([\w-]+)$/, deck],
  [/^\/games$/, games],
  [/^\/games\/match$/, match],
  [/^\/games\/scramble$/, scramble],
  [/^\/tests$/, tests],
  [/^\/tests\/([\w-]+)$/, test],
  [/^\/settings$/, settings]
];

export function initRouter(outlet) {
  let dispose = null;

  function render() {
    const path = location.hash.slice(1) || '/';
    let view = null;
    let params = [];

    for (const [pattern, fn] of routes) {
      const found = path.match(pattern);
      if (found) {
        view = fn;
        params = found.slice(1);
        break;
      }
    }

    if (!view) {
      location.replace('#/');
      return;
    }

    if (dispose) dispose();
    outlet.replaceChildren();
    outlet.scrollTop = 0;
    outlet.classList.remove('enter');
    void outlet.offsetWidth;
    outlet.classList.add('enter');
    dispose = view(outlet, params) || null;
  }

  window.addEventListener('hashchange', render);
  render();
}
