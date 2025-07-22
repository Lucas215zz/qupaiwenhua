const testimonials = [
  {
    name: "Waqas Karim",
    text: "我非常喜欢这款应用，非常实用且有帮助。感谢 Muzli，优质内容让我的日常生活更轻松。",
    avatar: "/images/user1.png"
  },
  {
    name: "Anurag Tiwari",
    text: "你好 Muzli，你们团队的工作对设计师很有启发性。每天早上，一杯咖啡加 Muzli！",
    avatar: "/images/user2.png"
  },
  {
    name: "Hadi Golkarian",
    text: "这是替换 Chrome 新标签页的最佳选择，能及时了解最新设计资讯，而且没有恼人的广告，非常感谢！<3",
    avatar: "/images/user3.png"
  },
  {
    name: "Clay Pruzinsky",
    text: "我喜欢每次打开浏览器都能看到最新的设计资讯。时间紧时，也能在这里快速找到可以在社交媒体上分享的有趣内容。",
    avatar: "/images/user4.png"
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow flex items-center space-x-4">
            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full" />
            <div>
              <p className="text-gray-700 mb-2">"{t.text}"</p>
              <span className="text-sm text-gray-500">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
