'use client'
import React, { useState } from 'react'
import Navbar from '@/components/common/navbar'
import HomePage from '@/components/core/home'
import Trading from '@/components/core/trading'
import Nutrition from '@/components/core/nutrition'
import Quote from '@/components/common/quote'
import Image from 'next/image'
import Bank from '@/components/core/bank'
import TradingLog from '@/components/trading/trading-log'

export default function DefaultLayout() {
  const [activePage, setActivePage] = useState('home')

  return (
    <main className="flex flex-col h-screen px-6 py-6">
      <Navbar setActivePage={setActivePage} />
      <div className="flex-grow grid grid-cols-2">
        <div>
          <Image
            src="/statue.png"
            width={700}
            height={500}
            alt={'Image'}
            className="absolute bottom-0 left-0 z-[-5]"
          />
        </div>
        <div>
          <>
            {activePage === 'home' && <HomePage />}
            {activePage === 'trading' && <Trading />}
            {activePage === 'bank' && <Bank />}
            {activePage === 'nutrition' && <Nutrition />}
          </>
        </div>
      </div>
      <Quote />
      <div className="absolute bottom-10 right-10">
        <TradingLog />
      </div>
    </main>
  )
}
