import Navbar from './components/Navbar'
import BannerCarousel from './components/BannerCarousel'
// 你可以继续添加其它区块组件

function MuzliHome() {
  return (
    <div className="font-sans bg-light text-dark antialiased">
      <Navbar />
      <main>
        <BannerCarousel />
        {/* 这里继续插入其它区块组件，如 <Categories /> <FeaturedWorks /> <Designers /> <Trends /> <Subscribe /> <Footer /> */}
      </main>
    </div>
  )
}

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
