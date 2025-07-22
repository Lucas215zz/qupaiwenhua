export default function Categories({ categories = [] }) {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold mb-4">按分类浏览</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">从不同设计领域中寻找灵感，总有一款适合你的项目需求</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <a key={cat.name || cat.id || i} href={cat.url || '#'} className="bg-light rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all hover-lift">
              <div className={`w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center text-2xl ${cat.color || 'bg-primary/10 text-primary'}`}>
                <i className={`fa ${cat.icon || 'fa-th-large'}`}></i>
              </div>
              <h3 className="font-medium text-lg">{cat.name || cat.label}</h3>
              <p className="text-sm text-gray-500 mt-2">{cat.count || 0} 作品</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
