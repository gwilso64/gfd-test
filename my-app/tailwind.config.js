export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...require('tailwindcss/defaultTheme').fontFamily.sans],
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};