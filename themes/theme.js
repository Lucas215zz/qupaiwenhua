// 只保留Muzli主题的导出，修复@theme-components报错
import MuzliHome from './muzli'

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
