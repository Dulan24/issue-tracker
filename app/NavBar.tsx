'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {FaBug} from "react-icons/fa"

const NavBar = () => {
    const currentPath = usePathname();
    console.log(currentPath);

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
                    className={classNames({
                        'text-zinc-900': link.href===currentPath,
                        'text-zinc-500': link.href!==currentPath,
                        'hover:text-zinc-800 transition-colors': true
                    })}
                    href={link.href}>
                {link.label}
                </Link>)}
       </ul>
    </nav>
  )
}

export default NavBar
