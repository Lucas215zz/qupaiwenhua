export default function Trends({ posts = [] }) {
  // 假设趋势区块用最新的三篇文章
  return (
    <section id="trending" className="py-20 bg-gradient-to-b from-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold mb-4">设计趋势</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">了解最新的设计潮流和行业动态，把握创作方向</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((t, i) => (
            <div key={t.id || i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover-lift">
              <img src={t.pageCover || '/default.jpg'} alt={t.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary">{t.category || '趋势'}</span>
                <h3 className="font-bold text-xl mb-3">{t.title}</h3>
                <p className="text-gray-600 mb-5 line-clamp-3">{t.summary}</p>
                <a href="#" className="inline-flex items-center font-medium text-primary hover:text-primary/80">
                  阅读更多 <i className="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
