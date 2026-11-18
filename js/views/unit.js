import { h, header } from '../ui.js';
import { icon } from '../icons.js';
import { runQuiz } from '../quiz.js';
import { library } from '../data/library.js';
import lessons from '../data/lessons.js';

function theory(blocks) {
  return blocks.map((block) =>
    h(
      'section',
      { class: 'block' },
      block.form ? h('div', { class: 'formula' }, block.form) : null,
      block.text ? h('p', { class: 'text' }, block.text) : null,
      block.examples ? h('ul', { class: 'examples' }, ...block.examples.map((line) => h('li', {}, line))) : null
    )
  );
}

export default function unit(root, [bookId, number]) {
  const book = library.find((item) => item.id === bookId);
  const n = Number(number);
  const entry = book && book.modules.flatMap((module) => module.units).find((item) => item.n === n);
  if (!entry) {
    location.replace('#/');
    return;
  }

  const lesson = lessons[bookId] && lessons[bookId][n];
  const body = h('div', { class: 'page' });

  root.append(
    header({ back: `/book/${bookId}` }),
    h('div', { class: 'unit-head' }, h('div', { class: 'unit-no' }, n), h('h1', { class: 'unit-title' }, entry.title)),
    body
  );

  if (!lesson) {
    body.append(h('div', { class: 'empty', html: icon('book') }));
    return;
  }

  const modes = [
    ['theory', 'Теория'],
    ['quiz', 'Тест']
  ];
  let mode = 'theory';
  const tabs = h('div', { class: 'segment', role: 'tablist' });
  const panel = h('div', { class: 'panel' });
  body.append(tabs, panel);

  function draw() {
    tabs.replaceChildren(
      ...modes.map(([id, label]) =>
        h(
          'button',
          {
            class: 'segment-btn',
            type: 'button',
            role: 'tab',
            'aria-pressed': String(mode === id),
            onclick: () => {
              mode = id;
              draw();
            }
          },
          label
        )
      )
    );
    panel.replaceChildren();
    if (mode === 'theory') panel.append(...theory(lesson.theory));
    else runQuiz(panel, `${bookId}:${n}`, lesson.quiz);
  }

  draw();
}
