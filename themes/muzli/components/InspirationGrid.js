// 灵感墙/瀑布流组件，支持响应式网格布局
// 你可以将图片放在 public/images/inspiration/ 目录下

const images = [
  '/images/inspiration/1.jpg',
  '/images/inspiration/2.jpg',
  '/images/inspiration/3.jpg',
  '/images/inspiration/4.jpg',
  '/images/inspiration/5.jpg',
  '/images/inspiration/6.jpg',
  '/images/inspiration/7.jpg',
  '/images/inspiration/8.jpg',
  '/images/inspiration/9.jpg',
  '/images/inspiration/10.jpg',
  '/images/inspiration/11.jpg',
  '/images/inspiration/12.jpg',
  '/images/inspiration/13.jpg',
  '/images/inspiration/14.jpg',
  '/images/inspiration/15.jpg',
  '/images/inspiration/16.jpg',
]

export default function InspirationGrid() {
  return (
    <section className="p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {images.map((src, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white cursor-pointer group">
            <img
              src={src}
              alt={"灵感图片" + (i + 1)}
              className="w-full h-56 object-cover group-hover:scale-105 duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
