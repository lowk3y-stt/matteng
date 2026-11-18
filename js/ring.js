export function ring(fraction, size, stroke) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const f = Math.max(0, Math.min(1, fraction));
  const mid = size / 2;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true"><circle class="ring-track" cx="${mid}" cy="${mid}" r="${r}" fill="none" stroke-width="${stroke}"/><circle class="ring-arc" cx="${mid}" cy="${mid}" r="${r}" fill="none" stroke-width="${stroke}" stroke-linecap="round"${f === 0 ? ' stroke-opacity="0"' : ''} stroke-dasharray="${(c * f).toFixed(2)} ${c.toFixed(2)}" transform="rotate(-90 ${mid} ${mid})"/></svg>`;
}
