/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
        satisfy: ["'Satisfy'", "cursive"],
        syncopate: ["'Syncopate'", "sans-serif"],
      },
      gridTemplateColumns: {
        layout: "4fr 1fr",
        mobile_layout: "1fr",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        qctheme: {
          primary: "#03396c",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
