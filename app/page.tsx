'use client'
import React, { useState, useEffect } from 'react'
import GreekGod from '../public/background.png'
import Navbar from '@/components/common/navbar'
import HomePage from '@/components/core/home'
import Fitness from '@/components/fitness'
import Trading from '@/components/trading'
import Nutrition from '@/components/nutrition'
import Quote from '@/components/common/quote'

export default function Home() {
  const [activePage, setActivePage] = useState('home')

  return (
    <main className="flex flex-col h-screen px-12 py-4">
      <Navbar setActivePage={setActivePage} />
      <div className="flex-grow grid grid-cols-2">
        <div></div>
        <div>
          <>
            {activePage === 'home' && <HomePage />}
            {activePage === 'trading' && <Trading />}
            {activePage === 'fitness' && <Fitness />}
            {activePage === 'nutrition' && <Nutrition />}
          </>
        </div>
      </div>
      <Quote />
    </main>
  )
}
