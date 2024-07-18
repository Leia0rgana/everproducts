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
        <MdClose className="text-3xl hidden md:inline-block" />
      ) : (
        <MdMenu className="text-3xl hidden md:inline-block" />
      )}
    </button>
  )
}

export default MenuButton
