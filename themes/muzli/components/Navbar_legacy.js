import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-white shadow">
      <div className="flex items-center space-x-4">
        <span className="font-bold text-2xl text-pink-600">Muzli</span>
        <Link href="#"><span className="hover:text-pink-500">产品</span></Link>
        <Link href="#"><span className="hover:text-pink-500">博客</span></Link>
        <Link href="#"><span className="hover:text-pink-500">关于我们</span></Link>
        <Link href="#"><span className="hover:text-pink-500">联系我们</span></Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">获取 Muzli</button>
        <button className="text-gray-500 hover:text-pink-500">
          <i className="fas fa-search"></i>
        </button>
        <select className="border rounded px-2 py-1">
          <option>中文</option>
          <option>EN</option>
        </select>
      </div>
    </nav>
  )
}
