import NotionContent from './components/NotionContent'
import CONFIG from './config'
import styles from './style'
import { cx } from '@/lib/utils'

/**
 * 摄影主题组件，用于渲染摄影主题的页面内容
 * @param {Object} props - 组件属性
 * @param {Object} props.post - 从 Notion 获取的文章数据
 * @returns {JSX.Element} - 渲染后的摄影主题页面
 */
const PhotographTheme = ({ post }) => {
  return (
    <div className={cx(styles.photographTheme)}>
      <NotionContent post={post} />
    </div>
  )
}

export {
  CONFIG,
  PhotographTheme
}