'use client'
import React from 'react'
import { Lexend } from 'next/font/google'
import Navbar from '@/components/sections/navbar'
import Footer from '@/components/sections/footer'
import Hero from '@/components/sections/hero'
import NumberTickerr from '@/components/number-counter'
import CardComponent from '@/components/sections/services'
import Integrations from '@/components/sections/integrations'
import ContactComponent from '@/components/sections/contact'
import GetStarted from '@/components/sections/get-started'
import Testimonials from '@/components/sections/testimonials'

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
      <Navbar />
      <Hero />

      <NumberTickerr />
      <CardComponent />

      <Integrations />

      <Testimonials />

      <ContactComponent />

      <GetStarted />
      <Footer />
    </main>
  )
}
