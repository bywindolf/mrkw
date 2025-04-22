import path from 'path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'standalone',

    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            },
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
            },
        ],
    },
    // webpack: (config) => {
    //     // Ensure alias works for both JS/TS and Webpack
    //     config.resolve.alias = {
    //         ...config.resolve.alias,
    //         '@components': path.resolve(__dirname, 'app/components'),
    //         '@common': path.resolve(__dirname, '../common'),
    //         '@lib': path.resolve(__dirname, 'lib'),
    //     }
    //     return config
    // },
}

export default nextConfig
