/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],

    theme: {
        extend: {
            colors: {
                primary: "#1E40AF",
                red: {
                    500: "#F59E0B",
                },
                darkBlue: "#001f3f",
            },

            keyframes: {
                slideIn: {
                    "0%": { opacity: 0, transform: "translateX(50px)" },
                         "100%": { opacity: 1, transform: "translateX(0)" },
                },
            },
            animation: {
                slideIn: "slideIn 0.5s forwards",
            },
        },
    },

    plugins: [],
};
