'use client'

import { ImSpinner2 } from 'react-icons/im'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-4/5 self-center border rounded-sm mt-2 mb-6 md:mb-4 p-4 bg-bright-green text-white font-medium uppercase hover:bg-[#75a334] hover:shadow-lg hover:scale-105 transition-transform disabled:cursor-default disabled:bg-bright-green/70"
    >
      {pending ? (
        <div className="flex w-full h-full items-center justify-center">
          <ImSpinner2 className="text-3xl text-white animate-spin" />
        </div>
      ) : (
        'Отправить'
      )}
    </button>
  )
}

export default SubmitButton
