/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evercodelab.com',
        port: '',
        pathname: '/ru/**',
      },
    ],
  },
}

export default nextConfig
