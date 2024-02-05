import React from 'react'

const BlogPage = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      My Daily Blog
      {children}
    </div>
  )
}

export default BlogPage
