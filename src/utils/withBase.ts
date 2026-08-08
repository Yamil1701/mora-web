const rawBase = import.meta.env.BASE_URL || '/';
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export function withBase(path = '') {
  const normalized = path.replace(/^\/+/, '');
  return `${base}${normalized}`;
}
