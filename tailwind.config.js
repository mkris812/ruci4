module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryc: '#ffffff', // white
        secondaryc: '#33eaff',
        trdc: '#2a3eb1',
        paralc: '#00000049',
        //_color Adding the gradient color
        g_color: '#00b0ff', // Modify colors as needed
      },
      keyframes: {
        jumbo: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.4)' },
          '100%': { transform: 'scale(1)' },
        },
        bounceLeftRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-25%)' },
        },
        bounceTopBottom: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100%)' },
        },
        bounceBottomTop: {
          '0%,100%': { transform: 'translateY(100%)' },
          '50%': { transform: 'translateY(0)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        
      },
      animation: {
        'jumbo-slow': 'jumbo 4s ease-in-out infinite',
        'spin-slow': 'spin 6s linear infinite',
        'spin-slow2': 'spin 3s linear infinite',
        'bounce-top-bottom': 'bounceTopBottom 20s ease-in-out infinite',
        'bounce-bottom-top': 'bounceBottomTop 20s ease-in-out infinite',

        'spin-slow': 'spin 6s linear infinite',
        'bounce-left-right': 'bounceLeftRight 10s ease-in-out infinite',

      },
    },
  },
  plugins: [],
};
