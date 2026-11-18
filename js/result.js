import { h } from './ui.js';
import { icon } from './icons.js';
import { ring } from './ring.js';

export function result(score, total, onRetry) {
  return h(
    'div',
    { class: 'result' },
    h(
      'div',
      { class: 'result-ring' },
      h('span', { html: ring(score / total, 176, 14) }),
      h('div', { class: 'result-score' }, `${score} / ${total}`)
    ),
    h('button', { class: 'btn', type: 'button', 'aria-label': 'retry', html: icon('refresh'), onclick: onRetry })
  );
}
