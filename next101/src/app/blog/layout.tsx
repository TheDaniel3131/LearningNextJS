import React from 'react'

const BlogLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <h2>Blog Layout</h2>
            {children}
        </div>
    )
}

export default BlogLayout

// you can set layout on any pages basically. by the outter the layout is, the more pages it can cover.
