import Image from 'next/image'

export function generateStaticParams() {
  return [
    { id: 'everchain-sdk' },
    { id: 'evercode-online-medic' },
    { id: 'evermarket' },
    { id: 'wallet' },
    { id: 'evercourse' },
    { id: 'evervault' },
  ]
}

function Product() {
  return (
    <main className="flex flex-col max-w-[1000px] my-0 mx-auto gap-10 mb-10">
      <section>
        <div className="flex items-center justify-center lg:flex-col min-w-full">
          <h1>
            Everchain SDK - Интеграция монет для некастодиальных криптокошельков
          </h1>
          <Image
            src="https://evercodelab.com/ru/img/product-front/SDK/SDK.svg"
            alt="Некастодиальный криптокошелек"
            width="551"
            height="362"
            className="w-2/5 md:w-3/5"
          />{' '}
        </div>
        <p className="mx-2 pt-7 lg:text-center">
          Обычно процесс интеграции монет является долгосрочным и дорогостоящим.
          Everchain SDK упрощает процесс интеграции. Остается лишь
          воспользоваться продуктом
        </p>
      </section>
      <section className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-between px-4 gap-4">
        <div className="flex flex-col justify-evenly p-7 bg-gradient-to-r from-[#FAC971] to-[#d4ecbbc2] border rounded-md">
          <h2 className="font-semibold">Особенности</h2>
          <ul className="list-disc ml-5 font-medium">
            <li>Один API – 50 криптовалют и 10 000 токенов</li>
            <li>Написано с JavaScript фреймворком</li>
            <li>
              Для десктоп- и веб-платформ, мобильных платформ (iOS/Android)
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-evenly col-span-2 md:col-span-1 p-7 bg-[#A0D8F4]/20 bg-gradient-to-r from-[#e0f5ff] via-[#A0D8F4] to-indigo-200 border rounded-md">
          <h2 className="font-semibold">Интегрированные монеты</h2>
          <p className="font-medium">
            AYA, BEP-2 tokens, BNB, BTC, BCH, BTG, BSV, BTH, CLO, ADA, ATOM,
            DASH, DCR, DGB, DOGE, EOS, ELA, ETH, ERC20 tokens, ETC, EXP, GRS,
            NLG, ZEN, JOYS, KIN, KMD, LSK, LTC, XLM, XMR, XEM, NEO, ONT, QTUM,
            RVN, RDD, ROPSTEN, TRX, USDT token, XTZ, UBQ, VET, XVG, VTC, WAVES,
            XRP, YEC, XZC, ZEC
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center px-8">
        <h2 className="text-center pb-3">
          Что представляет собой Everchain SDK?
        </h2>
        <div>
          <p>
            Для использования Everchain SDK необходимо лишь один раз
            интегрировать API. После этого появляется возможность подключить
            любую монету без интеграции кошелька с каждым блокчейном и нодами
          </p>
          <br />
          <p>
            Монеты и токены работают так же, как если бы их интегрировали по
            одному
          </p>
        </div>
        <Image
          src="https://evercodelab.com/ru/products/assets/img_1.png"
          alt="Схема работы Everchain SDK"
          width="813"
          height="311"
          className="p-10 sm:px-3"
        />
      </section>
      <section className="grid grid-cols-5 justify-between px-4 gap-4">
        <div className="col-span-5 p-7 bg-gradient-to-r  from-[#b6ff6d] via-[#a0f4f0] to-[#d4ecbbc2] border rounded-md">
          <h2 className="font-semibold">О технологиях</h2>
          <ul className="list-disc ml-5">
            <li>
              Everchain SDK – библиотека, которая встраивается в кошелек,
              позволяя UI взаимодействовать с нодами и блокчейнами
            </li>
            <li>
              Библиотека разработана на JavaScript и работает без бэкенда. Она
              включается в часть фронтенда вашего веб-приложения. Приватные
              ключи не передаются на сервер третьей стороны, а хранятся только
              на устройстве пользователя
            </li>
            <li>
              В Everchain SDK уже встроены ссылки на ноды и блокэксплореры для
              каждой монеты. По умолчанию установлена комиссия для каждой
              валюты, которая отображается в интерфейсе пользователя.
              Пользователь может настроить ее по желанию
            </li>
            <li>
              В Everchain SDK мы уже интегрировали 48 монет, и их число
              постоянно растёт
            </li>
            <li>
              Кошелек может как интегрировать сразу все монеты, так и отдельно
              выбранные. Все зависит от требований вашего бизнеса
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-evenly p-7 col-span-3 sm:col-span-5 bg-[#A0D8F4]/20 bg-gradient-to-r from-[#e0f5ff] via-[#A0D8F4] to-indigo-200 border rounded-md">
          <h2 className="font-semibold">Есть ли ограничения?</h2>
          <div>
            <p>
              Нет, никаких особенностей и ограничений в работе с монетами из
              набора Everchain SDK нет. Все монеты и токены отрабатывают
              стандартные пользовательские сценарии:
            </p>
            <ul className="list-disc ml-5">
              <li>Создание адреса кошелька (относится только к монетам)</li>
              <li> Получение баланса</li>
              <li> Получение истории транзакций </li>
              <li> Подписание приватным ключом</li>
              <li> Отправка транзакции</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-evenly p-7 col-span-2 sm:col-span-5 bg-gradient-to-r from-[#FAC971] to-[#d4ecbbc2] border rounded-md">
          <h2 className="font-semibold">
            Есть ли рабочие примеры использования продукта?
          </h2>
          <p>
            Да, нашим продуктом пользуется такой крупный криптокошелек, как
            Guarda Wallet
          </p>
        </div>
      </section>
    </main>
  )
}

export default Product
