import Link from 'next/link'

function ContactUsForm() {
  return (
    <form className="flex flex-col text-dark-blue px-3 text-base focus:outline-none active:outline-none">
      <h2 className=" p-2">Напишите нам</h2>
      <div className="flex flex-col items-stretch p-2 gap-1 ">
        <label htmlFor="name" className="font-medium">
          Ваше имя
        </label>
        <input
          type="text"
          id="name"
          required
          className="h-10 border border-dark-blue/30 rounded-sm p-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col items-stretch p-2 gap-1 ">
        <label htmlFor="email" className="font-medium">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          placeholder="default@example.com"
          required
          className="h-10 border border-dark-blue/30 rounded-sm p-2  focus:outline-none"
        />
      </div>
      <div className="flex flex-col items-stretch p-2 gap-1 ">
        <label htmlFor="number" className=" font-medium">
          Телефон
        </label>
        <input
          type="tel"
          id="number"
          placeholder="+79999999999"
          className="h-10 border border-dark-blue/30 rounded-sm p-2  focus:outline-none"
        />
      </div>
      <div className="flex flex-col items-stretch p-2 gap-1 ">
        <label htmlFor="text" className=" font-medium">
          Текст сообщения
        </label>
        <input
          type="text"
          id="text"
          className="h-10 border border-dark-blue/30 rounded-sm p-2  focus:outline-none"
        />
      </div>
      <div className="flex flex-row p-3 md:p-1">
        <input type="checkbox" id="agreement" />
        <label htmlFor="agreement" className="pl-3 text-sm xs:text-xs">
          Я прочитал(а) и ознакомлен(а) с{' '}
          <Link
            href="https://evercodelab.com/ru/Privacy/Privacy.pdf"
            target="_blanc"
            className=" text-blue-700 underline underline-offset-4 hover:text-blue-500"
          >
            Политикой конфиденциальности
          </Link>{' '}
          и{' '}
          <Link
            href="https://evercodelab.com/ru/Termsofuse/TermsofUse.pdf"
            target="_blanc"
            className=" text-blue-700 underline underline-offset-4 hover:text-blue-500"
          >
            Правилами использования сайта
          </Link>
        </label>
      </div>
      <button
        type="submit"
        className="w-4/5 self-center border rounded-sm mt-2 mb-6 md:mb-4 p-4 bg-bright-green text-white font-medium uppercase hover:bg-[#75a334] hover:shadow-lg hover:scale-105 transition-transform"
      >
        Отправить
      </button>
    </form>
  )
}

export default ContactUsForm
