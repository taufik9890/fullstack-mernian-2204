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
        ]
    }
};

export default nextConfig;
// module.exports = nextConfig;