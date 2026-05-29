/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        discord: {
          primary: '#313338',
          secondary: '#2b2d31',
          tertiary: '#1e1f22',
          header: '#f2f3f5',
          text: '#dbdee1',
          muted: '#949ba4',
          subtle: '#b5bac1',
          accent: '#5865f2',
          'accent-hover': '#4752c4',
          green: '#23a559',
          red: '#f23f43',
          border: '#3f4147',
          input: '#383a40',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out forwards',
        'slide-up': 'slideUp 0.3s ease-out forwards',
        'modal-in': 'modalIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.2s ease-out forwards',
      },
    },
  },
  plugins: [],
};
