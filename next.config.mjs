/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "seroclinix.admin.souqdevsolutions.com",
            },
        ],
    },
};

export default nextConfig;
