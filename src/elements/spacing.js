// if (typeof window !== `undefined`) {
//   const ww = window.innerWidth;
//   // const isMobile = ww < 768;
// }

// const spacing = {
//   sm: `16`,
//   md: `32`,
//   lg: `48`,
// };

const s = {
  sm: {
    mobile: '8',
    desktop: '16',
  },
  md: {
    mobile: '32',
    desktop: '48',
  },
  lg: {
    mobile: '64',
    desktop: '128',
  },
};

export const setPadding = (dir, size) => {
  // dir is array ['top', 'bottom' ... ] or string 'all'
  let style = '';
  if (typeof dir === 'object') {
    dir.forEach(pos => {
      style += `padding-${pos}: ${
        s[size || 'md'].mobile
      }px; @media (min-width: 768px) {padding-${pos}: ${
        s[size || 'md'].desktop
      }px;}`;
    });
  } else if (dir === 'all') {
    style = `padding: ${
      s[size || 'md'].mobile
    }px; @media (min-width: 768px) {padding: ${s[size || 'md'].desktop}px;}`;
  }

  return style;
};

export const setMargin = (dir, size) => {
  let style = '';
  if (typeof dir === 'object') {
    dir.forEach(pos => {
      style += `margin-${pos}: ${
        s[size || 'md'].mobile
      }px; @media (min-width: 768px) {margin-${pos}: ${
        s[size || 'md'].desktop
      }px;}`;
    });
  } else if (dir === 'all') {
    style = `margin: ${
      s[size || 'md'].mobile
    }px; @media (min-width: 768px) {margin: ${s[size || 'md'].desktop}px;}`;
  }

  return style;
};
