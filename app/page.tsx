'use client'
import { SetStateAction, useState, useEffect } from 'react'
import Image from 'next/image'
import GreekGod from '../public/background.png'
import Navbar from '@/components/navbar'

import Fitness from '@/components/fitness'
import Trading from '@/components/trading'
import Nutrition from '@/components/nutrition'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')
  const [greeting, setGreeting] = useState('Good Morning')

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab)
  }

  const updateGreeting = () => {
    const now = new Date()
    const hours = now.getUTCHours()
    if (hours >= 12) {
      setGreeting('Good Afternoon')
    }
  }
  useEffect(() => {
    updateGreeting()
  }, [])

  return (
    <main
      className="flex flex-col h-screen px-12 py-4 bg-black"
      style={{
        backgroundImage: `url(${GreekGod.src})`,
        backgroundSize: '80%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
      }}
    >
      <Navbar />

      {/* Grid Layout */}
      <div className="flex-grow grid grid-cols-2">
        {/* Left Column for Tab Content */}
        <div className="col-span-1">
          <div className="">
            <div className="flex">
              <p className="text-white italic font-semibold">
                &quot;Train Hard,{' '}
              </p>
              <p className="text-[#F1C524] italic font-semibold">
                Fight Easy&quot;
              </p>
            </div>

            <p className="text-xs text-white">- Abraham Lincoln</p>
          </div>
        </div>

        {/* Right Column for Image */}
        <div className="col-span-1 flex flex-col w-full ">
          {activeTab === 'home' && (
            <div className="flex flex-col h-full justify-center gap-12">
              <h1 className="text-white text-7xl">{greeting}</h1>
              <p className="text-white">Google Calendar Goes here</p>
              <div className="flex justify-between w-full">
                <div>
                  <p className="text-white">Sleep Performance</p>
                  <p className="text-xl text-[#21BD01]">Poor</p>
                </div>
                <div>
                  <p className="text-white">Money made Today</p>
                  <p className="text-xl text-[#21BD01]">+ 1475 €</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'trading' && (
            <div className="flex flex-col h-full justify-center gap-12">
              <Trading />
            </div>
          )}
          {activeTab === 'fitness' && (
            <div className="flex flex-col h-full justify-center gap-12">
              <Fitness />
            </div>
          )}
          {activeTab === 'nutrition' && <Nutrition />}
        </div>
      </div>
    </main>
  )
}
