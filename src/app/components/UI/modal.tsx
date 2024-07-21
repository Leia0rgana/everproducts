'use client'

import { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'

function Modal({ children }: { children: React.ReactNode }) {
  const [dialog, setDialog] = useState<HTMLDialogElement | null>(null)

  useEffect(() => {
    const element = document.getElementById('modal') as HTMLDialogElement

    if (element) {
      setDialog(element)
    }
  }, [])

  const handleModalOpen = () => {
    if (dialog) dialog.showModal()
  }

  const handleModalClose = () => {
    if (dialog) dialog.close()
  }
  return (
    <>
      <button
        onClick={handleModalOpen}
        className="border rounded-sm text-nowrap my-6 p-4 bg-bright-green text-white font-medium uppercase hover:bg-[#75a334] hover:shadow-lg hover:scale-105 transition-transform"
      >
        Связаться с нами
      </button>
      <dialog id="modal" className="w-4/5 max-w-[400px] xs:w-11/12 relative">
        <button onClick={handleModalClose}>
          <MdClose className="absolute top-4 right-5 text-3xl text-slate-500 hover:scale-105 transition-transform" />
        </button>
        {children}
      </dialog>
    </>
  )
}

export default Modal
