// tailwind.config.ts
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    content: [
        './app/**/*.{ts,tsx,js,jsx}',
        './pages/**/*.{ts,tsx,js,jsx}',
        './components/**/*.{ts,tsx,js,jsx}',
        './styles/**/*.{css}', // Make sure styles are included too
        './styles/components/*.{css}', // Make sure styles are included too
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
