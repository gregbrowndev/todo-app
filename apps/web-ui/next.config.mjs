/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, {isServer}) => {
        if (!isServer) {
        }
        return config;
    },
    experimental: {
        instrumentationHook: true,
    },
    images: {
        // https://nextjs.org/docs/pages/api-reference/components/image#dangerouslyallowsvg
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                hostname: "tailwindui.com",
            }
        ]
    },
};

export default nextConfig;
