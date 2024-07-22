export interface IProduct {
  title: string
  description: string
  image: {
    alt: string
    src: string
  }
  id: string
}

export const PRODUCTS: Readonly<Array<IProduct>> = [
  {
    title: 'Everchain SDK',
    description:
      'Everchain SDK позволяет интегрировать более 50 криптовалют и 10000 токенов в некастодиальный криптокошелек. Благодаря API SDK вы получаете все пользовательские сценарии для любой монеты или токена',
    image: {
      alt: 'Некастодиальный криптокошелек',
      src: 'https://evercodelab.com/ru/img/product-front/SDK/SDK.svg',
    },
    id: 'everchain-sdk',
  },
  {
    title: 'Evercode Online Medic',
    description:
      'Evercode Online Medic – платформа, которую можно использовать для разработки сервиса онлайн-консультаций в сфере медицины. Итоговый продукт полностью кастомизируется под особенности и нужды вашего бизнеса',
    image: {
      alt: 'Телемедицина',
      src: 'https://evercodelab.com/ru/img/product-front/Medic/Medic.svg',
    },
    id: 'evercode-online-medic',
  },

  {
    title: 'Marketplace Evermarket',
    description:
      'Marketplace - IT-решение для электронной коммерции с интуитивно понятным интерфейсом и высоким уровнем защиты',
    image: {
      alt: 'Электронная коммерция',
      src: 'https://evercodelab.com/ru/img/product-front/Evermarket/Evermarket.svg',
    },
    id: 'evermarket',
  },

  {
    title: 'Everchain White Label Wallet',
    description:
      'Everchain White Label Wallet позволяет запустить полностью готовый некастодиальный криптокошелек под вашим брендом за 5-7 рабочих дней',
    image: {
      alt: 'Некастодиальный криптокошелек',
      src: 'https://evercodelab.com/ru/img/product-front/Wallet/Wallet.svg',
    },
    id: 'wallet',
  },
  {
    title: 'EverCourse',
    description:
      'EverCourse - платформа для онлайн-обучения, удобная как для преподавателей, так и для обучающихся',
    image: {
      alt: 'Телемедицина',
      src: 'https://evercodelab.com/ru/img/product-front/Course/Course.svg',
    },
    id: 'evercourse',
  },
  {
    title: 'Evervault',
    description:
      'Evervault помогает бизнесам безопасно хранить и использовать секретные данные',
    image: {
      alt: 'Разработка продуктов',
      src: '/products.svg',
    },
    id: 'evervault',
  },
]
