/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        feather: ["Feather", "sans-serif"],
        din: ["DIN", "sans-serif"],
      },
      colors: {
        featherGreen: "#58cc02",
        maskGreen: "#89e219",
        eel: "#4b4b4b",
        snow: "#ffffff",
        macaw: "#1cb0f6",
        cardinal: "#ff4b4b",
        bee: "#ffc800",
        fox: "#ff9600",
        beetle: "#ce82ff",
        humpback: "#2b70c9",
        wolf: "#777777",
        hare: "#AFAFAF",
        swan: "#e5e5e5",
        polar: "#f7f7f7"
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
        display: ["group-hover"],
    },
  },
  plugins: [],
  safelist: [{
          pattern: /(bg|text|border|hover:border)-(featherGreen|eel|snow|macaw|bee|humpback|beetle|fox|swan|cardinal)/
      }

  ]
}