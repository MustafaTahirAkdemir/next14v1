"use client"

import Link from 'next/link'
import Styles from './navLink.module.css'
import { usePathname } from 'next/navigation'

const NavLink = ({item}) => {

    const pathName = usePathname();


  return (
    <Link href={item.path} className={`${Styles.container} 
    ${pathName === item.path && Styles.active}`} >{item.title} 
    
    </Link>
  )
}

export default NavLink