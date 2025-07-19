import dynamic from 'next/dynamic'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

const NotionContent = ({ post, className }) => {
  if (!post || Object.keys(post).length === 0) {
    return <></>
  }
  return (
    <div className={className}>
      <NotionPage post={post} />
    </div>
  )
}

export default NotionContent