// const path = require('path');

// /** @type {import('next').NextConfig} */
// const backend =
//   process.env.BACKEND_URL ||
//   process.env.NEXT_PUBLIC_BACKEND_URL ||
//   'http://localhost:5000';

// const backendOrigin = backend.replace(/\/$/, '');

// const nextConfig = {
//   outputFileTracingRoot: path.join(__dirname),
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//       },
//     ],
//     unoptimized: true,
//   },
//   reactStrictMode: true,
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: `${backendOrigin}/api/:path*`,
//       },
//     ];
//   },
// };

// module.exports = nextConfig;
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),

  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    unoptimized: true,
  },

  /**
   * Proxy /api/* to the Express server so the browser can use same-origin `/api/...`
   * (needed on Vercel etc. where Next and API are different hosts).
   *
   * Set on the frontend host:
   * - BACKEND_URL = your API origin, e.g. https://your-api.railway.app (no trailing slash)
   *   OR use NEXT_PUBLIC_API_URL for direct client calls (then rewrites are a fallback).
   * Local dev defaults to http://127.0.0.1:5000 if neither is set.
   */
  async rewrites() {
    const raw =
      process.env.BACKEND_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      (process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:5000' : '');
    const base = String(raw).replace(/\/$/, '');
    if (!base) return [];

    return [
      {
        source: '/api/:path*',
        destination: `${base}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
