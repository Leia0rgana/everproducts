'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectIsButtonClicked, toggleButton } from '@/redux/slices/buttonSlice'
import { MdMenu, MdClose } from 'react-icons/md'

function MenuButton() {
  const isClicked = useAppSelector(selectIsButtonClicked)
  const dispatch = useAppDispatch()

  return (
    <button onClick={() => dispatch(toggleButton())}>
      {isClicked ? (
        <MdClose className="text-3xl text-slate-500 hidden md:inline-block hover:scale-105 transition-transform" />
      ) : (
        <MdMenu className="text-3xl text-slate-500 hidden md:inline-block hover:scale-105 transition-transform" />
      )}
    </button>
  )
}

export default MenuButton
