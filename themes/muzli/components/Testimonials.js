import CONFIG from '../config'

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">用户评价</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {CONFIG.MUZLI_TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <p className="mb-4 text-gray-700">“{t.text}”</p>
              <div className="text-right text-sm text-gray-500">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
