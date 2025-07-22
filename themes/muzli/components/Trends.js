export default function Trends() {
  const trends = [
    {
      img: 'https://picsum.photos/id/1070/600/400',
      tag: '趋势分析', tagColor: 'bg-primary/10 text-primary',
      title: '2023年3D设计元素的崛起',
      desc: '从图标到界面，3D设计元素正在成为主流，为用户带来更具沉浸感的视觉体验...'
    },
    {
      img: 'https://picsum.photos/id/1069/600/400',
      tag: '设计理念', tagColor: 'bg-secondary/10 text-secondary',
      title: '极简主义的回归与创新',
      desc: '在信息过载的时代，极简设计通过"少即是多"的理念，帮助用户更高效地获取信息...'
    },
    {
      img: 'https://picsum.photos/id/1068/600/400',
      tag: '用户体验', tagColor: 'bg-green-100 text-green-600',
      title: '微交互如何提升用户体验',
      desc: '细节决定成败，精心设计的微交互能够在不经意间提升产品质感，增强用户粘性...'
    }
  ]
  return (
    <section id="trending" className="py-20 bg-gradient-to-b from-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold mb-4">设计趋势</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">了解最新的设计潮流和行业动态，把握创作方向</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trends.map((t, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover-lift">
              <img src={t.img} alt={t.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className={`inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full ${t.tagColor}`}>{t.tag}</span>
                <h3 className="font-bold text-xl mb-3">{t.title}</h3>
                <p className="text-gray-600 mb-5 line-clamp-3">{t.desc}</p>
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
