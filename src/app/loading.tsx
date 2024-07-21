import { ImSpinner2 } from 'react-icons/im'

function Loading() {
  return (
    <div className="flex w-full h-full items-center justify-center flex-grow">
      <ImSpinner2 className="text-5xl text-blue-950 animate-spin" />
    </div>
  )
}

export default Loading
