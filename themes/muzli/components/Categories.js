export default function Categories() {
  const categories = [
    { icon: 'fa-desktop', color: 'bg-primary/10 text-primary', name: '网页设计', count: 2784 },
    { icon: 'fa-mobile', color: 'bg-secondary/10 text-secondary', name: '移动应用', count: 2156 },
    { icon: 'fa-paint-brush', color: 'bg-green-100 text-green-600', name: 'UI/UX设计', count: 3572 },
    { icon: 'fa-bullhorn', color: 'bg-purple-100 text-purple-600', name: '品牌设计', count: 1248 },
    { icon: 'fa-camera', color: 'bg-red-100 text-red-600', name: '摄影', count: 1893 },
    { icon: 'fa-th-large', color: 'bg-blue-100 text-blue-600', name: '更多分类', count: '15+' }
  ]
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold mb-4">按分类浏览</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">从不同设计领域中寻找灵感，总有一款适合你的项目需求</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <a key={cat.name} href="#" className="bg-light rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all hover-lift">
              <div className={`w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center text-2xl ${cat.color}`}>
                <i className={`fa ${cat.icon}`}></i>
              </div>
              <h3 className="font-medium text-lg">{cat.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{cat.count} 作品</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
