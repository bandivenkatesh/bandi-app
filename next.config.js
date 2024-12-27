/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        appDir: true
    },
    // Add images domain for external images
    images: {
        domains: ['images.unsplash.com'],
    },
    // Disable static exports for dynamic routes
    async redirects() {
        return [
            {
                source: '/auth/callback',
                destination: '/',
                permanent: false,
            },
        ]
    },
    // Add custom webpack config to handle static files
    webpack: (config) => {
        return config;
    }
}

module.exports = nextConfig
