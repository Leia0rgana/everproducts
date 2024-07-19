import Link from 'next/link'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <h1>Ой! Такой страницы нет</h1>
      <Link
        href="/"
        className="text-center text-blue-700 underline underline-offset-4 hover:text-blue-500 hover:scale-105 transition-transform"
      >
        Перейти на главную
      </Link>
    </div>
  )
}

export default NotFound
