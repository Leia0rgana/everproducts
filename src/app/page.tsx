import Image from 'next/image'
import { Suspense } from 'react'
import Loading from './loading'

function Home() {
  return (
    <>
      <main className="flex items-center justify-center flex-grow max-w-[1000px] min-w-full xl:min-w-fit my-0 mx-auto lg:flex-col lg:gap-5">
        <h1 className="shrink">
          Evercode Lab
          <br /> Объединяем бизнес и технологии
        </h1>
        <Suspense fallback={<Loading />}>
          <Image
            src="/main.svg"
            alt="Иллюстрация командной работы и технических процессов"
            width="850"
            height="500"
            className="w-7/12 lg:w-10/12 lg:my-4"
          />{' '}
        </Suspense>
      </main>
    </>
  )
}

export default Home
