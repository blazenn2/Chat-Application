module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      monstserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        "primary": "rgba(71, 41, 125, 1)",
        "secondary": "rgba(132, 114, 252, 1)",
        "text-box": "rgba(240, 240, 251, 1)",
        "text-primary": "rgba(144, 149, 164, 1)",
        "text-secondary": "rgba(255,255,255,1)",
        "text-normal": "rgba(73, 89, 105, 1)",
      }
    },
  },
  plugins: [],
}