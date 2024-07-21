export interface IProduct {
  title: string
  description: string
  image: {
    alt: string
    src: string
  }
}

export const PRODUCTS: Readonly<Array<IProduct>> = [
  {
    title: 'Evercode Online Medic',
    description:
      'Evercode Online Medic – платформа, которую можно использовать для разработки сервиса онлайн-консультаций в сфере медицины. Итоговый продукт полностью кастомизируется под особенности и нужды вашего бизнеса',
    image: {
      alt: 'Телемедицина',
      src: 'https://evercodelab.com/ru/img/product-front/Medic/Medic.svg',
    },
  },

  {
    title: 'Marketplace Evermarket',
    description:
      'Marketplace - IT-решение для электронной коммерции с интуитивно понятным интерфейсом и высоким уровнем защиты',
    image: {
      alt: 'Телемедицина',
      src: 'https://evercodelab.com/ru/img/product-front/Medic/Medic.svg',
    },
  },
  {
    title: 'Everchain SDK',
    description:
      'Everchain SDK позволяет интегрировать более 50 криптовалют и 10000 токенов в некастодиальный криптокошелек. Благодаря API SDK вы получаете все пользовательские сценарии для любой монеты или токена',
    image: {
      alt: 'Телемедицина',
      src: 'https://evercodelab.com/ru/img/product-front/Medic/Medic.svg',
    },
  },
  {
    title: 'Everchain White Label Wallet',
    description:
      'Everchain White Label Wallet позволяет запустить полностью готовый некастодиальный криптокошелек под вашим брендом за 5-7 рабочих дней',
    image: {
      alt: 'Телемедицина',
      src: 'https://evercodelab.com/ru/img/product-front/Medic/Medic.svg',
    },
  },
  {
    title: 'EverCourse',
    description:
      'EverCourse - платформа для онлайн-обучения, удобная как для преподавателей, так и для обучающихся',
    image: {
      alt: 'Телемедицина',
      src: 'https://evercodelab.com/ru/img/product-front/Medic/Medic.svg',
    },
  },
  {
    title: 'Evervault',
    description:
      'Evervault помогает бизнесам безопасно хранить и использовать секретные данные',
    image: {
      alt: 'Телемедицина',
      src: 'https://evercodelab.com/ru/img/product-front/Medic/Medic.svg',
    },
  },
]
