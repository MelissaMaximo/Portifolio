/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['media.graphassets.com']
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@prisma/client']
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

// Use apenas UM dos exports abaixo (não ambos)
export default nextConfig
// OU module.exports = nextConfig (para CommonJS)
