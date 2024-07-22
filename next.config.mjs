/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        // Exclude Node.js-specific modules from client-side compilation
        if (!isServer) {
            config.plugins.push(new webpack.IgnorePlugin({resourceRegExp: /^fs$/}));
        }

        return config;
    },
};

export default nextConfig;
