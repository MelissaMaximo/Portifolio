// next.config.js
// Remove appDir from experimental
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
    ],
  },
  // Remove experimental: { appDir: true } if present
}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
      },
      // Add other domains if needed
    ],
  },
  // ... rest of your config
}

module.exports = nextConfig
