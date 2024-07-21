'use client'

import Link from 'next/link'
import MenuButton from './menu-button'
import { selectIsButtonClicked, toggleButton } from '@/redux/slices/buttonSlice'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRef, useEffect } from 'react'

const navLinks = [
  { title: 'Продукты', path: '/products' },
  { title: 'Кейсы', path: '/cases' },
  { title: 'Карьера', path: '/career' },
  { title: 'Контакты', path: '/contacts' },
  { title: 'Блог', path: '/blog' },
]

function Navbar() {
  const isClicked = useAppSelector(selectIsButtonClicked)
  const dispatch = useAppDispatch()
  const pathname = usePathname()
  const pathnameRef = useRef(pathname)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isClicked === true)
        dispatch(toggleButton())
    }

    window.addEventListener('resize', handleResize)

    if (isClicked && pathname !== pathnameRef.current) {
      dispatch(toggleButton())
    }
    pathnameRef.current = pathname

    return () => window.removeEventListener('resize', handleResize)
  }, [pathname, dispatch, isClicked])

  return (
    <nav className="flex flex-row justify-between items-center my-10 mx-5 gap-5">
      <Link href={'/'}>
        <Image
          src="/logo-header.svg"
          width="230"
          height="38"
          alt="Evercode Lab"
        />
      </Link>
      <MenuButton />
      <ul
        className={`flex flex-row justify-end items-center gap-10 ${
          isClicked
            ? 'md:flex-col md:gap-1 md:h-1/3 md:absolute md:top-[100px] md:right-8 md:w-2/5 md:bg-slate-50/80 md:backdrop-blur-lg md:border md:border-slate-300/30 md:rounded-lg md:min-h-60 xs:left-8 xs:w-auto xs:gap-0'
            : 'md:hidden'
        }`}
      >
        {navLinks.map((navItem) => (
          <li
            key={navItem.path}
            className={`w-full h-full relative py-1 after:content-['_'] after:bg-bright-green after:h-[3px] after:w-0 after:left-0 after:absolute after:transition-[width] after:duration-300 after:ease-in-out after:bottom-0 hover:after:w-full md:hover:bg-slate-200/70 md:after:content-none
            ${pathname === navItem.path && 'after:w-full md:bg-slate-200/70'}`}
          >
            <Link
              href={navItem.path}
              className="uppercase md:normal-case flex justify-center items-center w-full h-full text-center text-dark-blue font-medium"
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
