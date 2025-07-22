import { useState, useEffect } from 'react'

export default function Navbar({ customMenu = [] }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 如果有Notion自定义菜单，则用自定义菜单，否则用默认
  const menu = customMenu.length > 0 ? customMenu : [
    { name: '首页', href: '#' },
    { name: '分类', href: '#categories' },
    { name: '精选', href: '#featured' },
    { name: '设计师', href: '#designers' },
    { name: '趋势', href: '#trending' }
  ]

  return (
    <header className={`fixed w-full bg-white/80 backdrop-blur-md z-50 transition-all duration-300 py-4 ${scrolled ? 'shadow-md bg-white' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <span className="text-primary text-2xl"><i className="fa fa-cube"></i></span>
          <span className="text-xl font-bold tracking-tight">Artistic</span>
        </a>
        {/* 桌面端导航 */}
        <nav className="hidden md:flex items-center space-x-8">
          {menu.map(item => (
            <a key={item.name || item.title} href={item.href} className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">{item.name || item.title}</a>
          ))}
        </nav>
        {/* 功能按钮 */}
        <div className="flex items-center space-x-4">
          <button className="hidden sm:flex items-center px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/5 transition-colors">
            <i className="fa fa-search mr-2"></i> 搜索
          </button>
          <button className="px-5 py-2 rounded-full bg-secondary text-white hover:bg-secondary/90 transition-colors shadow-md hover:shadow-lg">
            登录 / 注册
          </button>
          {/* 移动端菜单按钮 */}
          <button className="md:hidden text-xl" onClick={() => setMobileOpen(v => !v)}>
            <i className={`fa ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
      {/* 移动端菜单 */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t mt-4">
          <div className="container mx-auto px-4 py-3 space-y-3">
            {menu.map(item => (
              <a key={item.name || item.title} href={item.href} className="block py-2 font-medium hover:text-primary">{item.name || item.title}</a>
            ))}
            <div className="relative mt-2">
              <input type="text" placeholder="搜索设计灵感..." className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <i className="fa fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
