import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from './_components/Header'
import { Main } from './_components/Main'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stulog',
  description: 'learning logggin application.',
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode,
  modal: React.ReactNode,
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <Main>
          {children}
          {modal && modal}
        </Main>
      </body>
    </html>
  )
}
