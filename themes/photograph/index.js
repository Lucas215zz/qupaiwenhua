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
const LayoutIndex = ({ post }) => {
  return (
    <div className={cx(styles.photographTheme, 'animate')}>
      <NotionContent post={post} />
    </div>
  )
}

/**
 * 添加动画样式
 */
const addAnimationStyle = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate {
      animation: fadeInUp 0.8s ease forwards;
    }
  `;
  document.head.appendChild(style);
};

addAnimationStyle();

export {
  CONFIG,
  LayoutIndex
}