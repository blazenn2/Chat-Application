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
        "primary-light": "rgba(71, 41, 125, 0.8)",
        "secondary": "rgba(132, 114, 252, 1)",
        "secondary-light": "rgba(132, 114, 252, 0.8)",
        "background": "rgba(246, 246, 253, 1)",
        "text-box": "rgba(240, 240, 251, 1)",
        "text-primary": "rgba(144, 149, 164, 1)",
        "text-secondary": "rgba(255,255,255,1)",
        "text-normal": "rgba(73, 89, 105, 1)",
        "offline": "rgba(182,185,959,1)"
      }
    },
  },
  plugins: [],
}