/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  transpilePackages: ["react-icons"],
  webpack: (config) => {

    config.module = {
      ...config.module,
      exprContextCritical: false,
    };

    return config
  }
}

module.exports = nextConfig
