/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "white",
        "secondary-color": "#1E1E1E",
        "text-color": "black",
      },
      backgroundImage: {
        "dark-theme": "url('/assets/Dark-theme-btn.svg')",
        "new" : "url('/assets/new.svg')",
      },
      backgroundSize: {
        '80%': "80%",
        '85%': "85%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
