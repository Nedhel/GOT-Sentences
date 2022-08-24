/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            gridTemplateRows: {
                // Simple 8 row grid
                8: "repeat(8, minmax())",

                // Complex site-specific row configuration
                layout: "50px 500px 100px",
            },
        },
    },
    plugins: [],
};
