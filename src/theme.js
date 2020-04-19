const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export default {
  colors: {
    main: '#37474f',
    dark: '#222222',
    light: ' #B1B1B1',
    lighter: '#E2E2E2',
    text: '#959191',
    link: '#A0A4B4',
    activeLink: '#05B9BA',
  },
  fontSize: {
    large: '3rem',
    medium: '2rem',
    paragraphs: '1.25rem',
    anchors: '0.875rem',
  },
  fontWeights: {
    light: '100',
    medium: '300',
    heavy: '600',
    black: '900',
  },
  devices: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
  },
};
