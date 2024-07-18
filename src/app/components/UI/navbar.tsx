'use client'

import Link from 'next/link'
import MenuButton from './menu-button'
import { selectIsButtonClicked } from '@/redux/slices/buttonSlice'
import { useAppSelector } from '@/redux/hooks'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { title: 'Продукты', path: '/products' },
  { title: 'Кейсы', path: '/cases' },
  { title: 'Карьера', path: '/career' },
  { title: 'Контакты', path: '/contacts' },
  { title: 'Блог', path: '/blog' },
]

function Navbar() {
  const isClicked = useAppSelector(selectIsButtonClicked)
  const pathname = usePathname()

  return (
    <nav className="flex flex-row justify-between items-center my-10 mx-5 gap-5">
      <h1 className="text-nowrap">
        <Link href={'/'}>
          <Image
            src="/logo-header.svg"
            width="230"
            height="38"
            alt="Evercode Lab"
          />
        </Link>
      </h1>
      <MenuButton />
      <ul
        className={`flex flex-row justify-end items-center gap-10 ${
          isClicked
            ? ' sm:left-8 sm:w-auto md:flex-col md:gap-4 md:h-auto md:absolute md:top-[100px] md:right-8 md:w-2/5 backdrop-blur-lg md:border md:border-slate-300/30 md:rounded-lg'
            : 'md:hidden'
        }`}
      >
        {navLinks.map((navItem) => (
          <li
            key={navItem.path}
            className={`relative py-1 after:content-['_'] after:bg-bright-green after:h-[3px] after:w-0 after:left-0 after:absolute after:transition-[width] after:duration-300 after:ease-in-out after:bottom-0 hover:after:w-full 
            ${pathname === navItem.path && 'after:w-full'}`}
          >
            <Link href={navItem.path}>{navItem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
