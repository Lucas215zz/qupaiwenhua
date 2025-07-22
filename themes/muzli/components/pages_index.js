import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import Footer from '../components/Footer'

export default function Home() {
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
