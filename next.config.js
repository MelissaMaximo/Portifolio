/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['media.graphassets.com']
  },
  // Configurações experimentais atualizadas:
  experimental: {
    serverActions: true // Adicione apenas se estiver usando Server Actions
  },
  // Mover para fora do experimental:
  serverExternalPackages: ['@prisma/client'],
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

export default nextConfig
