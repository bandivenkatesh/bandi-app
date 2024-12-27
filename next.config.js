/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['images.unsplash.com'],
        unoptimized: process.env.NODE_ENV === 'development',
    },
    // Enable static optimization where possible
    swcMinify: true,
    poweredByHeader: false,
}

module.exports = nextConfig
