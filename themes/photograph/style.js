/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
export const styles = {
  photographTheme: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media (max-width: 1023px)': {
      maxWidth: '900px',
    },
    '@media (max-width: 639px)': {
      maxWidth: '100%',
      padding: '10px',
    },
  }
}

export default styles