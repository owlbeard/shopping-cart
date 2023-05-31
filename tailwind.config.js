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
        the: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;',
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
