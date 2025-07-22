export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 bg-gradient-to-b from-pink-50 to-white px-8">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">设计师的秘密来源</h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-6">
          最优质的设计灵感——为您精心策划。
        </p>
        <p className="text-base text-gray-500 mb-8">
          Muzli 是一个新标签页浏览器扩展，可即时提供与设计相关的资讯和灵感，让您随时掌握最新动态。
        </p>
        <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-pink-600 transition">
          获取 Muzli for Chrome
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img src="/images/muzli-hero.png" alt="Muzli Inspiration" className="w-96 rounded-xl shadow-lg" />
      </div>
    </section>
  )
}
