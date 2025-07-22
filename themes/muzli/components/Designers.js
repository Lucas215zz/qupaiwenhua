export default function Designers({ designers = [] }) {
  return (
    <section id="designers" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold mb-4">顶尖设计师</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">关注这些才华横溢的设计师，获取最新创作灵感</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {designers.map((d, i) => (
            <div key={d.id || i} className="text-center hover-lift">
              <div className="relative mb-4">
                <img src={d.avatar || '/default-avatar.png'} alt="设计师头像" className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-white shadow-md" />
                <button className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm shadow-md hover:bg-primary/90 transition-colors">
                  <i className="fa fa-plus"></i>
                </button>
              </div>
              <h3 className="font-medium">{d.name}</h3>
              <p className="text-sm text-gray-500">{d.role}</p>
              <p className="text-xs text-gray-400 mt-1">{d.works} 作品</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center font-medium text-primary hover:text-primary/80">
            查看全部设计师 <i className="fa fa-long-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
