export default function FooterLinks() {
  return (
    <div className="grid md:grid-cols-4 gap-8 py-8 border-t bg-gray-50">
      <div>
        <h4 className="font-bold mb-2">产品</h4>
        <ul className="space-y-1 text-gray-600">
          <li>Muzli Me</li>
          <li>Chrome 扩展</li>
          <li>Edge 扩展</li>
          <li>灵感搜索</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">关注我们</h4>
        <ul className="space-y-1 text-gray-600">
          <li>Medium</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">公司</h4>
        <ul className="space-y-1 text-gray-600">
          <li>关于我们</li>
          <li>隐私政策</li>
          <li>服务条款</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">联系我们</h4>
        <ul className="space-y-1 text-gray-600">
          <li>建议链接</li>
          <li>问题反馈</li>
        </ul>
      </div>
    </div>
  )
}
