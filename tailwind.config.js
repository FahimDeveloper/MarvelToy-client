/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f59e0b",

          "secondary": "#f4ce6a",

          "accent": "#181830",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "error": "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

