import FooterLinks from './FooterLinks'

export default function Footer() {
  return (
    <footer>
      <FooterLinks />
      <div className="text-center text-gray-500 text-sm py-4 bg-gray-50">
        © 2025 Muzli X ltd. · 版权所有。<span className="mx-2">|</span>
        <a href="#" className="hover:text-pink-500">隐私政策</a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:text-pink-500">服务条款</a>
        <span className="mx-2">|</span>
        EN / 中文 / ES / FR / RU / DE / IT / PL / LT / हिन्दी
      </div>
    </footer>
  )
}
