/** @type {import('next').NextConfig} */
// User Page (baongochuyn.github.io) = site at root → basePath rỗng. Project Page thì set NEXT_PUBLIC_BASE_PATH=/tên-repo
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  // Pas de headers() ici : avec output: 'export', Next ne les applique pas au build statique
  // et cela évite des avertissements / comportements étranges en dev.
};

export default nextConfig;
