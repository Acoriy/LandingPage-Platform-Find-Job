/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BgColor: "#F9FDFB",
        Primary : "#FF8345"
      },
      container:{
        center:true,
        padding:'1rem',
        screens:{
          sm:"640px",
          md:"768px",
          lg:"1024",
          xl:"1280px",
          '2xl' : "1536px"
        }
      },
      fontFamily:{
        DmSans:['Poppins' , 'serif']
      }
    },
  },
  plugins: [],
};
