/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Registry',
    description: 'Custom Kasm Workspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://a-h.github.io/kasm-registry/',
    contactUrl: 'https://github.com/a-h',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
