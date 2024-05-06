/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, context) {
        config.module.rules.push(
            {
                test: /\.graphql$/,
                use: 'raw-loader',
            }
        )
        return config
    }
};

export default nextConfig;
