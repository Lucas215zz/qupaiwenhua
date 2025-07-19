/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
/* ===== NOISE BACKGROUND ===== */
const noiseBackground = 'url("data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch"></feTurbulence><feColorMatrix type="saturate" values="0"></feColorMatrix></filter><rect width="100%" height="100%" filter="url(%23noise)" opacity="0.1"></rect></svg>")';

export const styles = {
  photographTheme: {
    padding: '20px',
    maxWidth: '1400px',
    margin: '0 auto',
    backgroundColor: 'var(--BACKGROUND)',
    color: 'var(--TEXT)',
    position: 'relative',
    '::before': {
      content: '""',
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundImage: noiseBackground,
      pointerEvents: 'none',
      zIndex: '-1',
    },
    '@media (max-width: 992px)': {
      maxWidth: '90%',
    },
    '@media (max-width: 768px)': {
      maxWidth: '100%',
      padding: '10px',
    },
  }
}

export default styles