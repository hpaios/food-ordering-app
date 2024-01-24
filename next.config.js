/** @type {import('next').NextConfig} */

module.exports = nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc'
      }
    ]
  }
}
