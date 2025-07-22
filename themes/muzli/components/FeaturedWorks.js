export default function FeaturedWorks({ posts = [] }) {
  return (
    <section id="featured" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold mb-4">精选灵感作品</h2>
            <p className="text-gray-600 max-w-2xl text-lg">由我们的编辑精心挑选，展示最具创意和影响力的设计作品</p>
          </div>
          <a href="#" className="mt-4 md:mt-0 inline-flex items-center font-medium text-primary hover:text-primary/80 text-lg">
            查看全部作品 <i className="fa fa-long-arrow-right ml-2"></i>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.slice(0, 3).map((post, i) => (
            <div key={post.id || i} className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white hover-lift">
              <div className="relative overflow-hidden">
                <img src={post.pageCover || '/default.jpg'} alt={post.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">{post.category || '分类'}</span>
                </div>
                <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <i className="fa fa-heart-o text-gray-600"></i>
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-gray-600 mb-5 line-clamp-2">{post.summary}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={post.author?.avatar || '/default-avatar.png'} alt="设计师头像" className="w-10 h-10 rounded-full object-cover" />
                    <span className="ml-3 text-base font-medium">{post.author?.name || '匿名'}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center mr-4"><i className="fa fa-eye mr-1"></i> {post.views || 0}</span>
                    <span className="flex items-center"><i className="fa fa-heart mr-1"></i> {post.likes || 0}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-sm">
            加载更多作品 <i className="fa fa-refresh ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  )
}
