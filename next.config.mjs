/** @type {import('next').NextConfig} */
// User Page (baongochuyn.github.io) = site at root → basePath rỗng. Project Page thì set NEXT_PUBLIC_BASE_PATH=/tên-repo
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  async headers() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/:path*',
          headers: [{ key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' }],
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
