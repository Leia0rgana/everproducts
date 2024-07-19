import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Container from './components/container'
import Header from './components/header'
import Footer from './components/footer'
import StoreProvider from './StoreProvider'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Evercode Lab | Разработка программного обеспечения',
  description:
    'Уникальные IT-решения для бизнеса: веб и мобильные приложения, CRM системы, системы мониторинга и блокчейн проекты',
}

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Container>
          <StoreProvider>
            <Header />
            {children}
            <Footer />
          </StoreProvider>
        </Container>
      </body>
    </html>
  )
}

export default RootLayout
