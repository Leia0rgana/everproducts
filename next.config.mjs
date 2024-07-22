/** @type {import('next').NextConfig} */
const nextConfig = {
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
