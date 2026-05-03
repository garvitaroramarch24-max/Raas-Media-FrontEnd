/**
 * When empty, the browser calls same-origin `/api/...` and Next.js rewrites (see
 * `next.config.js`) forward to your Express `BACKEND_URL` (production) or
 * `http://127.0.0.1:5000` (local dev).
 *
 * Alternatively set `NEXT_PUBLIC_API_URL` to the API origin to call the backend
 * directly from the browser (CORS must allow your site on the Express server).
 */
export function apiUrl(path: string): string {
  const base = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}
