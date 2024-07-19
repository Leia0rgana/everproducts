import Image from 'next/image'

function Home() {
  return (
    <main className="flex items-center justify-center flex-grow max-w-[1000px] my-0 mx-auto lg:flex-col lg:gap-5 ">
      <h1 className="shrink text-left lg:text-center">
        Evercode Lab
        <br /> Объединяем бизнес и технологии
      </h1>
      <Image
        src="/main.svg"
        alt="Иллюстрация командной работы и технических процессов"
        width="850"
        height="500"
        className="w-8/12 lg:w-10/12 lg:my-4"
      />
    </main>
  )
}

export default Home
