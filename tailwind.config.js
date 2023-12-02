/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: [],
    theme: {
        extend: {},
        fontFamily: {
            'kanit': ['Kanit', 'sans-serif'],
            'dosis': ['Dosis', 'sans-serif']
        }
    },
    plugins: [],
}

