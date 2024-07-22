/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
