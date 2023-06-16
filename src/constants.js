export const COLORS = {
  // put hsl() in GlobalStyles is a better option.
  white: '0deg 0% 100%',
  gray: {
    100: '185deg 5% 95%',
    300: '190deg 5% 80%',
    500: '196deg 4% 60%',
    700: '220deg 5% 40%',
    900: '220deg 3% 20%',
  },
  primary: '340deg 65% 47%',
  secondary: '240deg 60% 63%',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const BREAKPOINTS = {
  mobileMax: 650,
  tabletMax: 900,
  laptopMax: 1300
};

export const QUERIES = {
  'mobileMax': `(max-width: ${BREAKPOINTS.mobileMax / 16}rem)`,
  'tabletMax': `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  'laptopMax': `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`
}