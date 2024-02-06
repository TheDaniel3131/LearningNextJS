import React from 'react'
import Link from 'next/link'
import Links from '../links/Links'

const NavBar = () => {
  return (
    <div>
      <div>Daniel Poh</div>
      <div>
        {/* <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link> */}

        <Links/>
      </div>
    </div>
  )
}

export default NavBar
