import { h, header } from '../ui.js';
import { runQuiz } from '../quiz.js';
import { tests } from '../data/tests.js';

export default function test(root, [id]) {
  const entry = tests.find((item) => item.id === id);
  if (!entry) {
    location.replace('#/tests');
    return;
  }

  const page = h('div', { class: 'page' });
  root.append(header({ back: '/tests', title: entry.title }), page);
  runQuiz(page, `test:${id}`, entry.questions);
}
