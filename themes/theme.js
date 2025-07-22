// 只保留Muzli主题的导出，修复@theme-components报错
import MuzliHome from './muzli'

// 主题组件导出
export const THEME_CONFIG = {
  LayoutBase: MuzliHome,
  LayoutIndex: MuzliHome,
  LayoutPostList: MuzliHome,
  LayoutSlug: MuzliHome,
  Layout404: MuzliHome,
  LayoutArchive: MuzliHome,
  LayoutCategoryIndex: MuzliHome,
  LayoutTagIndex: MuzliHome,
  LayoutSearch: MuzliHome
}

export const getThemeConfig = async () => THEME_CONFIG
export const getBaseLayoutByTheme = () => MuzliHome
export const DynamicLayout = props => <MuzliHome {...props} />
export const getLayoutByTheme = () => MuzliHome

// 兼容全局调用的暗色模式相关函数
export function initDarkMode(updateDarkMode, defaultDarkMode) {
  if (typeof updateDarkMode === 'function') {
    updateDarkMode(false)
  }
  if (typeof document !== 'undefined') {
    document.getElementsByTagName('html')[0].setAttribute('class', 'light')
  }
}
export function isPreferDark() {
  return false
}
export function loadDarkModeFromLocalStorage() {
  return null
}
export function saveDarkModeToLocalStorage(newTheme) {
  // do nothing
}
