/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.wundplus.co.id',
            },
        ],
    },
};

export default nextConfig;
