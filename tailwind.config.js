module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
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
}
