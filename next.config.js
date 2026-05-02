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
};

module.exports = nextConfig;
