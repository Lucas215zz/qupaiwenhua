import { useState, useEffect } from 'react'

function renderMenu(menu, isMobile = false) {
  return menu.map(item => (
    <div key={item.id || item.name || item.title} className={isMobile ? '' : 'relative group'}>
      <a
        href={item.href}
        className={
          (isMobile
            ? 'block py-2 font-medium hover:text-primary'
            : 'font-medium hover:text-primary transition-colors flex items-center space-x-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300')
        }
        target={item.target || '_self'}
        rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {item.icon && <i className={`fa ${item.icon} mr-1`} />}
        <span>{item.name || item.title}</span>
        {item.subMenus && item.subMenus.length > 0 && !isMobile && (
          <i className="fa fa-chevron-down text-xs ml-1"></i>
        )}
      </a>
      {item.subMenus && item.subMenus.length > 0 && !isMobile && (
        <div className="absolute left-0 top-full mt-2 min-w-[160px] bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-50">
          {renderMenu(item.subMenus)}
        </div>
      )}
      {item.subMenus && item.subMenus.length > 0 && isMobile && (
        <div className="pl-4 border-l border-gray-100 mt-2">
          {renderMenu(item.subMenus, true)}
        </div>
      )}
    </div>
  ))
}

export default function Navbar({ customMenu = [] }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
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
        <a href="#" className="flex items-center space-x-2">
          <span className="text-primary text-2xl"><i className="fa fa-cube"></i></span>
          <span className="text-xl font-bold tracking-tight">Artistic</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {renderMenu(menu)}
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hidden sm:flex items-center px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/5 transition-colors">
            <i className="fa fa-search mr-2"></i> 搜索
          </button>
          <button className="px-5 py-2 rounded-full bg-secondary text-white hover:bg-secondary/90 transition-colors shadow-md hover:shadow-lg">
            登录 / 注册
          </button>
          <button className="md:hidden text-xl" onClick={() => setMobileOpen(v => !v)}>
            <i className={`fa ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t mt-4">
          <div className="container mx-auto px-4 py-3 space-y-3">
            {renderMenu(menu, true)}
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
