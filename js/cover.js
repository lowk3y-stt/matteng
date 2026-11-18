import { h } from './ui.js';
import { ring } from './ring.js';

const palettes = [
  { c1: '#0a3161', c2: '#1b4a96', c3: '#b31942', ink: '#ffffff' },
  { c1: '#b31942', c2: '#d9486a', c3: '#0a3161', ink: '#ffffff' },
  { c1: '#f2efe8', c2: '#e2dccf', c3: '#0a3161', ink: '#0a3161' }
];

function drawn(book, p) {
  const art = `<svg class="cover-art" viewBox="0 0 100 140" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><circle cx="82" cy="30" r="44" fill="${p.c2}"/><circle cx="20" cy="50" r="13" fill="${p.c3}"/><circle cx="56" cy="56" r="10" fill="none" stroke="${p.ink}" stroke-width="2" opacity="0.55"/><circle cx="56" cy="56" r="3" fill="${p.ink}" opacity="0.8"/></svg>`;
  return [
    h('span', { html: art }),
    h('span', { class: 'cover-text' }, h('div', { class: 'cover-title' }, book.title), h('div', { class: 'cover-author' }, book.author))
  ];
}

export function cover(book, index, fraction, tag = 'a') {
  const p = palettes[index % palettes.length];
  const body = book.cover ? [h('img', { class: 'cover-img', src: book.cover, alt: '' })] : drawn(book, p);
  const attrs = { class: 'cover', style: `--c1:${p.c1};--ink:${p.ink}` };
  if (tag === 'a') {
    attrs.href = `#/book/${book.id}`;
    attrs['aria-label'] = book.title;
  }
  return h(tag, attrs, ...body, h('span', { class: 'cover-ring', html: ring(fraction, 34, 4) }));
}
