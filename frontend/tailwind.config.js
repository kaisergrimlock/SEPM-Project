/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors:{
        darkBlue: "#0E465D",
        darkBlue2: "#10526D",
        cyan: "#39B7ED",
        lightBlue: "#EBF6FB",
        lightGreen: "#E9F8F6",
        lightGreen2: "#EEFFFC",
        lightRed: "#F6ECE9",
        lightOrange: "#FEEFEB",
        lightPurple: "#F2F3FF",
        yellow: "#DDB40A",
        navy: "#020D3B",
        gray:"#808080",
        lightGray:"#E7E5E5",
        lightBlue2:"#E9EEFF",
        lightBrown: "#737373",
      },
      fontFamily: {
        avenir: ["Avenir", "sans-serif"],
        nunitoSans: ["Nunito Sans", "sans-serif"],
        poppins:['Poppins', "sans-serif"],
        monsterat: ["Montserrat", "sans-serif"]
      },
    },
  },
  
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
