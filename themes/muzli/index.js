import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function MuzliHome(props) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
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
