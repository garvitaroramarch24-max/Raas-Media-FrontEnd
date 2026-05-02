/**
 * When empty, use same-origin paths so Next.js rewrites can proxy to the backend.
 * Set NEXT_PUBLIC_API_URL when the API is on another origin (e.g. production).
 */
export function apiUrl(path: string): string {
  const base = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}
