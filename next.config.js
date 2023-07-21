/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["bcrypt", "prisma"],
        serverActions: true,
    },
};

module.exports = nextConfig;
