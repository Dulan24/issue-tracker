import Link from 'next/link'
import React from 'react'
import {FaBug} from "react-icons/fa"

const NavBar = () => {
    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issue', href: '/issues'},
    ];
  return (
    <nav className='flex px-5 border-b-2 space-x-6 h-14 mb-5 items-center'>
        <Link href="/"><FaBug/></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
                <Link 
                    key={link.href} 
                    className='text-zinc-500 hover:text-zinc-800 transition-colors' 
                    href={link.href}>
                {link.label}
                </Link>)}
       </ul>
    </nav>
  )
}

export default NavBar
