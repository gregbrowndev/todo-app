/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
        }
        return config;
    },
    experimental: {
        instrumentationHook: true,
    },
};

export default nextConfig;
