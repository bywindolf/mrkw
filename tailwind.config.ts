// tailwind.config.ts
// eslint-disable-next-line import/no-anonymous-default-export

import fireCMSConfig from '@firecms/ui/tailwind.config.js'
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
    presets: [fireCMSConfig],
    content: [
        './app/**/*.{ts,tsx,js,jsx,mdx}',
        './pages/**/*.{ts,tsx,js,jsx}',
        './components/**/*.{ts,tsx,js,jsx,mdx}',
        './styles/**/*.{css}', // Make sure styles are included too
        './styles/components/*.{css}', // Make sure styles are included too
        './cms/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@firecms/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontSize: {
                ...defaultTheme.fontSize, // bring in all old font sizes
            },
            colors: {
                // Ensure this key exists
                // ...defaultTheme.colors,
            },
        },
    },
    plugins: [],
}
export default config
