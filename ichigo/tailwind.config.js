const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
       fontFamily: {
         ms_sans: ["ms_sans_serif", "sans-serif"], 
       },
     },
     colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      "blue-gray": colors.blueGray,
      "cool-gray": colors.coolGray,
      gray: colors.gray,
      "true-gray": colors.trueGray,
      "warm-gray": colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
     },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {

      addVariant('firefox', ({ container, separator }) => {

        const isFirefoxRule = postcss.atRule({

          name: '-moz-document',

          params: 'url-prefix()',

        });

        isFirefoxRule.append(container.nodes);

        container.append(isFirefoxRule);

        isFirefoxRule.walkRules((rule) => {

          rule.selector = `.${e(

            `firefox${separator}${rule.selector.slice(1)}`

          )}`;

        });

      });

    }),
  ],
}

