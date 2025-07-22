const features = [
  {
    title: "精心甄选的灵感",
    desc: "每天获取最新、专业策划的平面设计、科技、新闻、艺术、插画、排版、摄影、建筑、时尚等丰富灵感。",
    icon: "💡"
  },
  {
    title: "可定制与个性化",
    desc: "自由选择感兴趣的领域，我们为您筛选最优质内容并集中呈现。",
    icon: "🎨"
  },
  {
    title: "无限的灵感世界",
    desc: "体验前所未有的设计灵感，成为创意从业者的首选工具。",
    icon: "🌍"
  }
]

export default function FeatureCards() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-pink-50 rounded-xl p-8 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="font-bold text-xl mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
