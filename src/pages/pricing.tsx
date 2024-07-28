'use client'
import React from 'react'
import { Lexend } from 'next/font/google'
import Navbar from '@/components/sections/navbar'
import Footer from '@/components/sections/footer'
import { SectionLayout } from '@/layouts/SectionLayout'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

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
      <SectionLayout>
        <div className="grid grid-cols-3 gap-16 w-full mt-8">
          <Card className="">
            <CardContent className="flex flex-col p-0 gap-6 text-center">
            <div className="absolute inset-0 "></div>
              <div>
                <p className="sub-text">FREE</p>
                <h3 className="text-2xl">Free Forever</h3>
              </div>

              <Separator className="bg-[#252428]" />

              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center sub-text">
                  <div className="w-3 h-3 rounded-full bg-orange-400" />
                  Unlimited Contacts
                </div>
                <div className="flex gap-2 items-center sub-text">
                  <div className="w-3 h-3 rounded-full bg-orange-400" />
                  AI Integration
                </div>
                <div className="flex gap-2 items-center sub-text">
                  <div className="w-3 h-3 rounded-full bg-orange-400" />
                  Migration service
                </div>{' '}
                <div className="flex gap-2 items-center sub-text">
                  <div className="w-3 h-3 rounded-full bg-orange-400" />
                  Collaborations & permissions
                </div>
              </div>

              <Button variant="outline">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="border-[#ED7B29] scale-105">
            <CardContent className="flex flex-col p-0 gap-6 text-center relative">
                <div className="absolute top-[-39px] right-[-15px] text-xs bg-[#ED7B29] text-black rounded-full px-2">MOST POPULAR</div>
              <div>
                <p className="sub-text">STANDARD</p>
                <div className="flex items-center justify-center">
                  <h3 className="text-2xl">€1200</h3>
                  <div className="sub-text text-xs">/ per month</div>
                </div>
              </div>

              <Separator className="bg-[#252428]" />

              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center sub-text">
                  <div className="w-3 h-3 rounded-full bg-orange-400" />
                  Unlimited Contacts
                </div>
                <div className="flex gap-2 items-center sub-text">
                  <div className="w-3 h-3 rounded-full bg-orange-400" />
                  AI Integration
                </div>
                <div className="flex gap-2 items-center sub-text">
                  <div className="w-3 h-3 rounded-full bg-orange-400" />
                  Migration service
                </div>{' '}
                <div className="flex gap-2 items-center sub-text">
                  <div className="w-3 h-3 rounded-full bg-orange-400" />
                  Collaborations & permissions
                </div>
              </div>

              <Button>Get Started</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col p-0 gap-6 text-center">
              <div>
                <p className="sub-text">PREMIUM</p>
                <div className="flex items-center justify-center">
                  <h3 className="text-2xl">€4000</h3>
                  <div className="sub-text text-xs">/ per month</div>
                </div>
              </div>

              <Separator className="bg-[#252428]" />

              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center sub-text">
                  <div className="w-3 h-3 rounded-full bg-orange-400" />
                  Unlimited Contacts
                </div>
                <div className="flex gap-2 items-center sub-text">
                  <div className="w-3 h-3 rounded-full bg-orange-400" />
                  AI Integration
                </div>
                <div className="flex gap-2 items-center sub-text">
                  <div className="w-3 h-3 rounded-full bg-orange-400" />
                  Migration service
                </div>{' '}
                <div className="flex gap-2 items-center sub-text">
                  <div className="w-3 h-3 rounded-full bg-orange-400" />
                  Collaborations & permissions
                </div>
              </div>

              <Button variant="outline">Get Started</Button>
            </CardContent>
          </Card>
        </div>
      </SectionLayout>

      <Footer />
    </main>
  )
}
