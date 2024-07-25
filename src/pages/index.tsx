'use client'
import React from 'react'
import { Lexend } from 'next/font/google'
import NavComponent from '@/components/nav-component'
import HeroComponent from '@/components/hero-component'
import NumberTickerComponent from '@/components/number-counter'
import CardComponent from '@/components/card-component'
import IntegrationComponent from '@/components/integration-component'
import ContactComponent from '@/components/contact-component'
import GetStartedComponent from '@/components/get-started-component'

const lexend = Lexend({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function DefaultLayout() {
  return (
    <main
      className={`flex flex-col gap-24 px-6 py-6 bg-[#08070B] ${lexend.className}`}
    >
      <NavComponent/>
      <HeroComponent />

      <NumberTickerComponent />
      <CardComponent />

      <IntegrationComponent />

      <ContactComponent/>

      <GetStartedComponent />
    </main>
  )
}
