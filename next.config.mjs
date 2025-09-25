/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wundplus.co.id',
            },
        ],
    },
};

export default nextConfig;
