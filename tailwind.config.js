/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#050b14", // Deeper black/blue
                secondary: "#0f172a",
                accent: "#00f0ff", // Cyber Blue
                neon: {
                    purple: "#b026ff",
                    green: "#39ff14",
                    yellow: "#fcee0a",
                    red: "#ff003c",
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
                space: ['Space Grotesk', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
}
