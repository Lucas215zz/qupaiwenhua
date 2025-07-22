import CONFIG from '../config'

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {CONFIG.MUZLI_FEATURES.map((f, i) => (
          <div key={i} className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
