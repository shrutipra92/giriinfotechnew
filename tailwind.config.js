/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: '#ec1b24',
        secondaryColor: '#ef484f',
        bannerButtonBackground: 'linear-gradient(0deg, rgba(255,151,0,1) 0%, rgba(251,75,2,1) 100%)',
        blueBackground: '#1a3785'
      },
      boxShadow: {
        bannerButton: '-7px -7px 20px 0px rgba(255,255,255,.9), -4px -4px 5px 0px rgba(255,255,255,.9), 7px 7px 20px 0px rgba(0,0,0,.2), 4px 4px 5px 0px rgba(0,0,0,.3)',
        companyServeShadow: '2px 2px 20px 0px rgba(0,0,0,0.75)'
      },
      screens: {
        '900px': '900px',
        '1000px': '1000px',
        '700px': '700px',
        '750px': '750px',
        '500px': '500px',
        '1600px': '1600px',
        '1200px': '1200px',
        '1400px': '1400px',
        '1300px': '1300px',
        '2000px': '2000px',
        '600px': '600px',
        '800px': '800px'
      },
    },
  },
  plugins: [],
};
