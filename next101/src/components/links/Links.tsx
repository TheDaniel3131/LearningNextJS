import React from 'react'
import Link from 'next/link';

const Links = () => {

    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        {
            title: 'Blog',
            path: '/blog'
        }    
    ]

    return (
        <div>   
            {links.map((link) => (
                <Link href={link.path} key={link.title}>{link.title}</Link>
            ))}
        </div>
    )
}

// https://dev.to/kendalmintcode/how-to-fix-property-does-not-exist-on-type-window-in-typescript-error-2o9i
// https://stackoverflow.com/questions/51994617/how-to-get-typescript-language-service-to-not-complain-about-global-types




export default Links
