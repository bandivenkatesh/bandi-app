/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        appDir: true
    },
    async redirects() {
        return [
            {
                source: '/auth/callback',
                destination: '/',
                permanent: false,
            },
        ]
    }
}

module.exports = nextConfig
