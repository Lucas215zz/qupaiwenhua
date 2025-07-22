import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import Footer from './components/Footer'

function MuzliHome(props) {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureCards />
      {/* 你可以继续添加用户评价、下载按钮等区块 */}
      <Footer />
    </div>
  )
}

// 兼容主题系统的多种导出
export default MuzliHome
export const LayoutBase = MuzliHome
export const LayoutIndex = MuzliHome
export const LayoutPostList = MuzliHome
export const LayoutSlug = MuzliHome
export const Layout404 = MuzliHome
export const LayoutArchive = MuzliHome
export const LayoutCategoryIndex = MuzliHome
export const LayoutTagIndex = MuzliHome
export const LayoutSearch = MuzliHome
