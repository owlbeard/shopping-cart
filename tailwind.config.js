/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        responsive: 'repeat(auto-fit, minmax(15rem, 1fr))',
      },
      backgroundImage: {
        grad: 'linear-gradient(90deg,#ffc604,#5dcf98 50%,#019eff)',
      },
      backgroundColor: {
        blu: 'rgba(7,161,248,255)',
      },
      boxShadow: {
        the: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
        math: '0 50px 100px -20px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3), inset 0 -2px 6px 0 rgba(10,37,64,.35)',
      },
      borderRadius: {
        fifty: '50%',
      },
      minHeight: {
        cart: '20rem',
      },
    },
  },
  plugins: [],
};
