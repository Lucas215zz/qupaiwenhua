export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo和简介 */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-6">
              <span className="text-primary text-2xl"><i className="fa fa-cube"></i></span>
              <span className="text-xl font-bold tracking-tight">Artistic</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">Artistic是一个汇聚全球优秀设计作品的灵感社区，致力于为设计师提供创意源泉和交流平台。</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fa fa-behance"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <i className="fa fa-dribbble"></i>
              </a>
            </div>
          </div>
          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-bold mb-6">快速链接</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-white transition-colors">分类</a></li>
              <li><a href="#featured" className="text-gray-400 hover:text-white transition-colors">精选作品</a></li>
              <li><a href="#designers" className="text-gray-400 hover:text-white transition-colors">设计师</a></li>
              <li><a href="#trending" className="text-gray-400 hover:text-white transition-colors">设计趋势</a></li>
            </ul>
          </div>
          {/* 资源 */}
          <div>
            <h3 className="text-lg font-bold mb-6">资源</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">设计工具</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">学习教程</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">素材下载</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">社区讨论</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">活动日历</a></li>
            </ul>
          </div>
          {/* 联系我们 */}
          <div>
            <h3 className="text-lg font-bold mb-6">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa fa-envelope text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">contact@artistic.com</span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-map-marker text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">北京市朝阳区创意设计园A座</span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-phone text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">+86 10 8888 7777</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2023 Artistic. 保留所有权利。</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">隐私政策</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">服务条款</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookie政策</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
