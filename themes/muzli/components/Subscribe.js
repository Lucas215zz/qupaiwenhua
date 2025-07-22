export default function Subscribe() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/id/1048/1920/1080')] bg-cover bg-center"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold mb-6">获取最新设计灵感</h2>
          <p className="text-white/80 text-lg mb-8">订阅我们的周刊，每周获取精选设计作品、行业趋势和实用技巧</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="输入您的邮箱地址" className="flex-1 px-5 py-3 rounded-full text-dark focus:outline-none focus:ring-2 focus:ring-white" />
            <button className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
              立即订阅
            </button>
          </div>
          <p className="text-white/60 text-sm mt-4">我们尊重您的隐私，不会向第三方分享您的信息</p>
        </div>
      </div>
    </section>
  )
}
