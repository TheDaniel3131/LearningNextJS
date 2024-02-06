import React from 'react'
import Link from 'next/link'

    // https://nextjs.org/docs/app/api-reference/file-conventions/not-found

const NotFound = () => {
    return (
        <div>
            <div>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link href="/">Go back to the main page</Link>
            </div>
        </div>
    )
}

export default NotFound