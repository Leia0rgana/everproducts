import { IProduct } from '@/data/products'
import Image from 'next/image'

function Card({ productInfo }: { productInfo: IProduct }) {
  return (
    <div className="flex flex-col h-full p-3 bg-slate-50 border rounded-md hover:shadow-lg hover:scale-105 transition-transform">
      <Image
        src={productInfo.image.src}
        alt={productInfo.image.alt}
        width="315"
        height="192"
        className="w-fit my-4"
      />
      <p className="p-1 text-xl leading-relaxed font-medium">
        {productInfo.title}
      </p>
      <p className="p-1 my-1 text-sm leading-relaxed">
        {productInfo.description}
      </p>
    </div>
  )
}

export default Card
