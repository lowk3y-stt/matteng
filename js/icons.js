const paths = {
  utensils: '<path d="M7 4v6a2 2 0 0 0 2 2v8M11 4v6a2 2 0 0 1-2 2M17 20V4c-2 1-3 4-3 7h3"/>',
  heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  leaf: '<path d="M5 19c0-9 5-14 14-14 0 9-5 14-14 14zM5 19l8-8"/>',
  users: '<circle cx="9" cy="9" r="3.5"/><path d="M3 19c.6-3 3-4.5 6-4.5s5.4 1.5 6 4.5M16 6a3.2 3.2 0 0 1 0 6M18 14.8c1.6.6 2.7 1.9 3 4.2"/>',
  bolt: '<path d="M13 3L5 13.5h6L10 21l8-10.5h-6z"/>',
  star: '<path d="M12 4l2.4 5 5.6.7-4.1 3.8 1.1 5.5L12 16.3 7 19l1.1-5.5L4 9.7 9.6 9z"/>',
  building: '<rect x="5" y="4" width="14" height="16" rx="2.5"/><path d="M9 8.5h2M13 8.5h2M9 12h2M13 12h2M10 20v-3.5h4V20"/>',
  cap: '<path d="M2.5 9.5L12 5l9.5 4.5L12 14zM7 12v4.5c0 1.5 2.2 2.5 5 2.5s5-1 5-2.5V12M21.5 9.5v5"/>',
  gamepad: '<rect x="3" y="7.5" width="18" height="10" rx="5"/><path d="M8 10.5v4M6 12.5h4"/><circle cx="15.5" cy="11.5" r="0.9" fill="currentColor"/><circle cx="18" cy="13.5" r="0.9" fill="currentColor"/>',
  clipboard: '<rect x="5" y="4.5" width="14" height="16" rx="3"/><path d="M9.5 4.5h5v2.5h-5zM9 13l2.2 2.2L15.5 11"/>',
  clock: '<circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2"/>',
  map: '<path d="M4 6.5l5-2 6 2 5-2v13l-5 2-6-2-5 2zM9 4.5v13M15 6.5v13"/>',
  briefcase: '<rect x="4" y="7.5" width="16" height="11.5" rx="3"/><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M4 12.5h16"/>',
  home: '<path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',
  backspace: '<path d="M20 6H9l-5 6 5 6h11z"/><path d="M12.5 9.5l5 5M17.5 9.5l-5 5"/>',
  shuffle: '<path d="M4 7h3.5L16 17h4M4 17h3.5L10 14M14 10l2-3h4M17.5 4L20.5 7l-3 3M17.5 14l3 3-3 3"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  book: '<path d="M5 4h10a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h10"/>',
  cards: '<rect x="4" y="8" width="13" height="12" rx="2"/><path d="M8 4.5h10a2 2 0 0 1 2 2V16"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/>',
  chart: '<path d="M5 20v-8M12 20V5M19 20v-5"/>',
  sliders: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
  'chevron-left': '<path d="M15 5l-7 7 7 7"/>',
  'chevron-right': '<path d="M9 5l7 7-7 7"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 5v6h-6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6L7 7M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"/>',
  moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
  contrast: '<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/>',
  trash: '<path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13M10 11v6M14 11v6"/>'
};

export function icon(name) {
  return `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
}
