import Navbar from './components/Navbar'
import BannerCarousel from './components/BannerCarousel'
import Categories from './components/Categories'
import FeaturedWorks from './components/FeaturedWorks'
import Designers from './components/Designers'
import Trends from './components/Trends'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function MuzliHome(props) {
  return (
    <div className="font-sans bg-light text-dark antialiased">
      <Navbar />
      <main>
        <BannerCarousel siteInfo={props.siteInfo} />
        <Categories categories={props.categoryOptions || []} />
        <FeaturedWorks posts={props.latestPosts || []} />
        <Designers designers={props.designers || []} />
        <Trends posts={props.latestPosts || []} />
        <Subscribe />
      </main>
      <Footer siteInfo={props.siteInfo} />
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
