/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#fcf4ff',
        darkprimary:'#2a004a',
        darkTheme:'#11001F',
        'gradient-start': '#ff7e5f',
        'gradient-middle': '#feb47b',
        'gradient-end': '#fcb69f',

      },
      fontFamily:{
        Outfit:["Outfit","sans-serif"],
        Ovo:["Ovo","serif"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--gradient-start), var(--gradient-middle), var(--gradient-end))',
      }
    },
  },
  plugins: [],
};
