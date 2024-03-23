import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import TradingLog from '@/components/common/trading-log'

export default function Trading(): JSX.Element {
  return (
    <div className="w-full">
      <div className="absolute bottom-10 right-10">
        <TradingLog />
      </div>
      <h3 className="text-background">Long Term Position</h3>
      <Textarea className="h-44 w-full" placeholder="Type your message here." />
    </div>
  )
}
