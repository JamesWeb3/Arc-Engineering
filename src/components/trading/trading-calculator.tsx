import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

const TradingCalculator: React.FC = () => {
  const { toast } = useToast()
  const [willingToLose] = useState('60')
  const [stopLossPercentage, setStopLossPercentage] = useState('')
  const [tradingPair, setTradingPair] = useState('')
  const [orderValue, setOrderValue] = useState('')
  const [lotValue, setLotValue] = useState('')

  const isCrypto = (pair: string) => {
    return ['BTCUSD'].includes(pair);
  };


  const handleCalculate = () => {
    const pipValue = 0.1 
    const stopLossInPrice = (parseFloat(stopLossPercentage) / 100) * pipValue 
    const positionSize = Number(willingToLose) / stopLossInPrice

    setOrderValue(positionSize.toFixed(2))
    const lotSizePerPip = 10000 
    setLotValue((positionSize / lotSizePerPip).toFixed(2))
  }

  const copyToClipboard = async (text: any) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: 'Copied to Clipboard',
      })
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="py-4">
      <div className="flex gap-6 items-center">
        <Select onValueChange={(value) => {
                                    setTradingPair(value)
                                }}>
            <SelectTrigger className="w-[350px] cursor-pointer">
                <SelectValue placeholder="XAUUSD"/>
            </SelectTrigger>
            <SelectContent>
            <SelectGroup >
                    <SelectItem value="XAUUSD">XAUUSD</SelectItem>
                    <SelectItem value="BTCUSD">BTCUSD</SelectItem>
                    <SelectItem value="DJ30">DJ30</SelectItem>
                    <SelectItem value="CL-OIL">CL-OIL</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        /
        <Input
          type="string"
          placeholder="SL"
          value={stopLossPercentage}
          className="cursor-pointer"
          onChange={(e) => setStopLossPercentage(e.target.value)}
        />
        =
        <div className="flex flex-col w-full">
        {isCrypto(tradingPair) ? (
              <Input
                type="text"
                placeholder="Order Value"
                className="cursor-pointer"
                value={orderValue}
                readOnly
                onClick={() => copyToClipboard(orderValue)}
              />
            ) : (
              <Input
                type="text"
                className="cursor-pointer"
                placeholder="Lot Value"
                value={lotValue}
                readOnly
                onClick={() => copyToClipboard(lotValue)}
              />
            )}
        </div>
        <Button onClick={handleCalculate}>Calculate</Button>
      </div>
    </div>
  )
}

export default TradingCalculator
