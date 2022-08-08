module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '1rem',
      'base': '1.125rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      '2xl': '1.75rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {
      'primary' : '#ff4744',
      'white' : '#fff',
      'black' : '#1e1e28',
      'red' : '#ff4744',
      'green' : '#005e4d',
      'mint-green' : '#8ae8d9',
      'grey' : '#8a8a8a',
      'dark-grey' : '#5f5f60'
    },
    backgroundColor: {
      'primary' : '#ff4744',
      'aqua-blue' : '#8ae8d9',
      'dark-green' : '#005e4d',
      'black' : '#081a14',
      'dark' : '#000000',
      'white' : '#fff',
      'mint-green' : '#8ae8d9',
      'light-green' : '#d5fff7',
      'input-dark' : '#24342f',
      'light-white' : '#f9f9f9',
      'pale-white' : '#f7f7f7',
      'grey' : '#e5e5e5',
      'transparent' : 'transparent'
    },
    borderColor : {
      'green' : '#005e4d',
      'grey' : '#d5d5d5',
      'primary' : '#ff4744',
      'light-grey' : '#e1e1e1',
      'white' : '#ffffff',
    },
    decorationColor : {
      'green' : '#005e4d',
      'primary' : '#ff4744',
    },
    
    extend: {
      borderWidth: {
        '3': '3px'
      },
      height: {
        '128': '34rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
  ],
}
