const KEY = 'app:v1';
const fresh = () => ({ theme: 'auto', progress: {}, tabs: {}, words: {} });
const listeners = new Set();

function load() {
  try {
    return { ...fresh(), ...JSON.parse(localStorage.getItem(KEY) || '{}') };
  } catch {
    return fresh();
  }
}

let state = load();

function commit(next) {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {}
  listeners.forEach((listener) => listener(state));
}

export const store = {
  get: () => state,
  set: (patch) => commit({ ...state, ...patch }),
  reset: () => commit(fresh()),
  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }
};

export function isDone(entry) {
  return Boolean(entry) && entry.score / entry.total >= 0.6;
}

export function bookProgress(book, progress) {
  const total = book.modules.reduce((sum, module) => sum + module.units.length, 0);
  const done = Object.entries(progress).filter(([key, entry]) => key.startsWith(`${book.id}:`) && isDone(entry)).length;
  return { done, total };
}
