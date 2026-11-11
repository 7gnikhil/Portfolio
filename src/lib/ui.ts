export const openPanel = (name: 'home' | 'originals' | 'about' | 'contact') =>
  window.dispatchEvent(new CustomEvent('ui', { detail: { type: 'panel', name } }));
export const openSeries = () =>
  window.dispatchEvent(new CustomEvent('ui', { detail: { type: 'series' } }));
