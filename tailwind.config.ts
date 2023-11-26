import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Pretendard', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        top: '0 0 5px 0 rgb(0 0 0 / 16%);',
      },
      colors: {
        mainButton: '#D8483D',
        mainButtonHov: '#C55647',
        green: '#334D10',
        lightGreen: '#687E3D',
        brown: '#4E341D',
        navy: '#130402',
        lightGray: '#D9D9D9',
        mediumGray: '#B3B3B3',
        darkGray: '#595757',
        black: '#000000',
        red: '#FF0000',
        blue: '#0152CC',
        lightBlue: '#0075FF',
        skyBlue: '#ECF4FE',
        gray1: '#919191',
        gray2: '#CCCCCC',
        gray3: '#e6e6e6',
        gray4: '#616161',
      },
    },
  },
  plugins: [],
} satisfies Config;
