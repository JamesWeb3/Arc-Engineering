import React, { useState } from 'react'
import { Input } from '../ui/input'
import { useToast } from '@/components/ui/use-toast'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '../ui/button'

const TradingCalculator: React.FC = () => {
  const { toast } = useToast()
  const [willingToLose] = useState('60')
  const [stopLossPercentage, setStopLossPercentage] = useState('')
  const [tradingPair, setTradingPair] = useState('')
  const [orderValue, setOrderValue] = useState('')
  const [lotValue, setLotValue] = useState('')

  const handleCalculate = () => {
    // Assuming a fixed pip value for simplification, adjust based on your needs
    const pipValue = 0.1 // This is an example value, adjust based on the trading pair
    const stopLossInPrice = (parseFloat(stopLossPercentage) / 100) * pipValue // Simplified, adjust for actual calculation
    const positionSize = Number(willingToLose) / stopLossInPrice

    setOrderValue(positionSize.toFixed(2))
    // For lot value calculation, you'll need additional info, e.g., lot size per pip
    // This is a placeholder calculation
    const lotSizePerPip = 10000 // Example value
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
    <div>
      <div className="flex gap-6 items-center">
        <Select>
          <SelectTrigger className="w-[350px] cursor-pointer">
            <SelectValue placeholder="XAUUSD" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup onChange={(e) => setTradingPair(e.target.value)}>
              <SelectItem value="XAUUSD">XAUUSD</SelectItem>
              <SelectItem value="BTCUSD">BTCUSD</SelectItem>
              <SelectItem value="DJ30">DJ30</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        /
        <Input
          type="string"
          placeholder="Stop Loss % (0.035)"
          value={stopLossPercentage}
          className="cursor-pointer"
          onChange={(e) => setStopLossPercentage(e.target.value)}
        />
        =
        <div className="flex flex-col w-full mb-4">
          <div className="flex align-left text-sm justify-between">
            <p>Position</p>
            <p>Lot</p>
          </div>
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Order Value"
              className="cursor-pointer"
              value={orderValue}
              readOnly
              onClick={() => copyToClipboard(orderValue)}
            />
            <Input
              type="text"
              className="cursor-pointer"
              placeholder="Lot Value"
              value={lotValue}
              readOnly
              onClick={() => copyToClipboard(lotValue)}
            />
          </div>
        </div>
        <Button onClick={handleCalculate}>Calculate</Button>
      </div>
    </div>
  )
}

export default TradingCalculator
