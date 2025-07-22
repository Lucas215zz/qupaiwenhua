import Link from 'next/link'

const menu = [
  { title: 'Muzli Me', url: '#' },
  { title: 'Search', url: '#' },
  { title: 'Colors', url: '#' },
  { title: 'Collections', url: '#' },
  { title: '博客', url: '#' },
  { title: '关于我们', url: '#' },
  { title: '联系我们', url: '#' },
  { title: '在 Muzli 上投放广告', url: '#' }
]

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-white shadow">
      <div className="flex items-center space-x-6">
        <span className="font-bold text-2xl text-pink-600">Muzli Inspiration</span>
        {menu.map(item => (
          <Link key={item.title} href={item.url}>
            <span className="hover:text-pink-500 cursor-pointer">{item.title}</span>
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">获取 Muzli</button>
        <select className="border rounded px-2 py-1">
          <option>中文</option>
          <option>EN</option>
        </select>
      </div>
    </nav>
  )
}
