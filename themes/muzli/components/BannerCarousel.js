import { useState, useEffect, useRef } from 'react'

const slides = [
  {
    bg: "https://picsum.photos/id/1076/1920/1080",
    tag: "2023设计趋势",
    title: "探索未来设计的\n无限可能",
    desc: "汇聚全球顶尖设计师的创新作品，为你的下一个项目注入灵感与活力。",
    btns: [
      { text: "开始探索", style: "bg-secondary", onClick: () => {} },
      { text: "查看热门分类", style: "bg-white/20 border border-white/40", onClick: () => {} }
    ]
  },
  {
    bg: "https://picsum.photos/id/1071/1920/1080",
    tag: "UI设计精选",
    title: "重新定义\n用户体验设计",
    desc: "发现那些改变行业标准的界面设计，学习如何打造令人难忘的用户体验。",
    btns: [
      { text: "浏览作品集", style: "bg-primary", onClick: () => {} },
      { text: "关注设计师", style: "bg-white/20 border border-white/40", onClick: () => {} }
    ]
  },
  {
    bg: "https://picsum.photos/id/1073/1920/1080",
    tag: "新手上路",
    title: "设计学习资源\n一站式获取",
    desc: "从入门到精通，精选设计教程、工具和社区，助你快速成长为专业设计师。",
    btns: [
      { text: "资源中心", style: "bg-green-500", onClick: () => {} },
      { text: "加入社区", style: "bg-white/20 border border-white/40", onClick: () => {} }
    ]
  }
]

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(timer.current)
  }, [])

  return (
    <section className="pt-16 relative h-[80vh] min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div key={i} className={`carousel-item absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 relative z-10' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.bg})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-dark/70 to-dark/30"></div>
          </div>
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-secondary/90 rounded-full">{slide.tag}</span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-shadow mb-6 whitespace-pre-line">{slide.title}</h1>
              <p className="text-lg text-white/90 mb-8 max-w-xl">{slide.desc}</p>
              <div className="flex flex-wrap gap-4">
                {slide.btns.map((btn, j) => (
                  <button key={j} className={`px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all ${btn.style}`}>{btn.text}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* 轮播控制和指示点略，可按需补充 */}
    </section>
  )
}
