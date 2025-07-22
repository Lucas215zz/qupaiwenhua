export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-pink-50 to-white">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6">设计师的秘密来源</h1>
      <p className="text-lg md:text-2xl text-gray-600 mb-8">
        最优质的设计灵感——为您精心策划。
      </p>
      <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-pink-600 transition">
        获取 Muzli for Chrome
      </button>
      <div className="mt-12 flex justify-center">
        <img src="/images/muzli-hero.png" alt="Muzli Inspiration" className="w-96 rounded-xl shadow-lg" />
      </div>
    </section>
  )
}
