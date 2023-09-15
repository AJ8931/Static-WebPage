/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    colors: {
      transparent: 'transparent',
      'lightBlack': '#202122',
      'white': '#e2dedc',
      'green': '#00e100',
      'lightgreen': '#4dd336',
      'darkgreen': '#27a323',
      'grey': '#6e7470',
      'blacko': '#161615',
      'moreblack': '#101010',
    },
    backgroundImage: {
      'hero-pattern': "url('/background.jpg')",
      'footer-pattern': "url('/background2.jpg')",
      'razer-snake-pattern': "url('/razer_snake.png')",
      'razer-bg-pattern': "url('/razer-bg.png')",
      'razer-war-pattern': "url('/bg-war.jpg')",
    },
    dropShadow: {
      '3xl': '0px 1px 0px  #3db54d ,0px 1px 0px  #3db54d inset',
    },
  },
  plugins: [],
}
