/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/**'
                // pathname: '/uploads/**'
            }
        ],
        domains: ['fullstack-mernian-2204.onrender.com'],
    },
    env: {
    NEXT_PUBLIC_BASEURL: process.env.NEXT_PUBLIC_BASEURL,
    NEXT_PUBLIC_BASEURL_IMG: process.env.NEXT_PUBLIC_BASEURL_IMG,
  },
};

export default nextConfig;
// module.exports = nextConfig;