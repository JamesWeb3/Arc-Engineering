'use client'
import React from 'react'
import { Lexend } from 'next/font/google'
import NavComponent from '@/components/sections/navbar'
import Footer from '@/components/sections/footer'
import HeroComponent from '@/components/sections/hero-component'
import NumberTickerComponent from '@/components/number-counter'
import CardComponent from '@/components/sections/card-component'
import IntegrationComponent from '@/components/sections/integration-component'
import ContactComponent from '@/components/sections/contact-component'
import GetStartedComponent from '@/components/sections/get-started-component'
import ReviewsComponent from '@/components/sections/reviews-component'

const lexend = Lexend({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function DefaultLayout() {
  return (
    <main
      className={`flex flex-col gap-8 px-6 py-6 bg-[#08070B] ${lexend.className}`}
    >
      <NavComponent />
      <HeroComponent />

      <NumberTickerComponent />
      <CardComponent />

      <IntegrationComponent />

      <ReviewsComponent />

      <ContactComponent />

      <GetStartedComponent />
      <Footer />
    </main>
  )
}
