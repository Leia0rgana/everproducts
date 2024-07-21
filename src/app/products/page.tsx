import Image from 'next/image'
import { Suspense } from 'react'
import Loading from '../loading'
import Card from '../components/UI/card'
import { PRODUCTS } from '@/data/products'
import { SlArrowDown } from 'react-icons/sl'
import Link from 'next/link'

function Products() {
  return (
    <main className=" text-dark-blue flex flex-col max-w-[1000px] my-0 mx-auto lg:mt-16">
      <div className="flex items-center h-screen lg:flex-col lg:h-auto">
        <section className="shrink flex flex-col gap-3 lg:items-center">
          <h1>Наши продукты</h1>
          <p className="mx-2 text-lg leading-relaxed lg:text-center">
            Запустите проект с нашими готовыми IT-решениями быстро и эффективно
          </p>
          <Link
            href="/products/#products"
            className="flex flex-row items-center w-max justify-center gap-4 mx-2 uppercase text-bright-green font-medium"
          >
            <SlArrowDown className="text-3xl leading-relaxed my-5" />
            Перейти к продуктам
          </Link>
        </section>
        <Suspense fallback={<Loading />}>
          <Image
            src="/products.svg"
            alt="Разработка продуктов"
            width="850"
            height="500"
            className="w-full"
          />{' '}
        </Suspense>
      </div>
      <div
        id="products"
        className="grid grid-cols-[repeat(3,_350px)] gap-8 mx-3 mb-8 justify-center xl:grid-cols-[repeat(3,_300px)] lg:grid-cols-[repeat(2,_330px)] lg:mt-12 md:grid-cols-[repeat(1,_350px)] xs:grid-cols-[repeat(1,300px)]"
      >
        {PRODUCTS.map((product) => (
          <Card productInfo={product} key={product.title} />
        ))}
      </div>
    </main>
  )
}

export default Products
