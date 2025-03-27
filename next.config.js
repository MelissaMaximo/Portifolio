/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.graphassets.com']
  }
}

module.exports = nextConfig

export const eslint = {
  ignoreDuringBuilds: true
}
export const typescript = {
  ignoreBuildErrors: true
}
