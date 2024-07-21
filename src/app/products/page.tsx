import Image from 'next/image'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from '../loading'
import Card from '../components/UI/card'
import { PRODUCTS } from '@/data/products'
import { SlArrowDown } from 'react-icons/sl'
import Link from 'next/link'
import Modal from '../components/UI/modal'
import ContactUsForm from '../components/contact-us-form'

export const metadata: Metadata = {
  title: 'Продукты | Evercode Lab',
  description: 'Коробочные IT-решения для вашего бизнеса',
}

function Products() {
  return (
    <main className=" text-dark-blue flex flex-col max-w-[1000px] my-0 mx-auto">
      <div className="flex items-center h-[calc(100vh_-_117px)] lg:flex-col lg:h-auto lg:mb-12 xs:mb-0 xs:h-screen">
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
            className="w-full px-3"
          />{' '}
        </Suspense>
      </div>
      <div
        id="products"
        className="grid grid-cols-[repeat(3,_310px)] gap-8 mx-3 mb-8 justify-center xl:grid-cols-[repeat(3,_300px)] lg:grid-cols-[repeat(2,_330px)] lg:mt-12 md:grid-cols-[repeat(1,_350px)] xs:grid-cols-[repeat(1,300px)]"
      >
        {PRODUCTS.map((product) => (
          <Card productInfo={product} key={product.title} />
        ))}
      </div>
      <div className="border-t mx-5 mt-auto py-5 px-7 flex justify-center items-center gap-10">
        <h2>Хотите узнать больше?</h2>
        <p className="sm:hidden">
          Напишите нам сейчас, чтобы получить доступ к демо-версии Everchain SDK
        </p>
        <Modal>
          <ContactUsForm />
        </Modal>
      </div>
    </main>
  )
}

export default Products
