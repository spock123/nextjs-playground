module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      body: ['Rubik', 'sans-serif'],
      display: ['Rubik', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          50: '#E0F2FF',
          100: '#BDE3FF',
          200: '#7AC8FF',
          300: '#38ACFF',
          400: '#008FF5',
          500: '#0068B4',
          600: '#00538F',
          700: '#003E6B',
          800: '#002A47',
          900: '#001524'
        },
        accent: {
          50: '#E5F5E6',
          100: '#CFEDD0',
          200: '#9ADA9E',
          300: '#6AC86F',
          400: '#40AF46',
          500: '#2E7D32',
          600: '#256528',
          700: '#1B4B1E',
          800: '#123013',
          900: '#0A1A0A'
        },
        gray: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121'
        }
      }
    }
  },
  variants: {},
  plugins: []
};
