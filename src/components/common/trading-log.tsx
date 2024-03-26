import React, { useState } from 'react'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { IconOpen } from '@/components/icons'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Toast } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

const trades = [
  {
    symbol: 'BTCUSD',
    pnl: '+300',
    notes: 'Good trade, good setup',
  },
  {
    symbol: 'BTCUSD',
    pnl: '+300',
    notes: 'Good trade, good setup',
  },
  {
    symbol: 'BTCUSD',
    pnl: '+300',
    notes: 'Good trade, good setup',
  },
]

const TradingLog: React.FC = ({}) => {
  const toast = useToast();

  const [willingToLose, setWillingToLose] = useState('60');
  const [stopLossPercentage, setStopLossPercentage] = useState('');
  const [orderValue, setOrderValue] = useState('');
  const [lotValue, setLotValue] = useState('');
  
  const toggleEdit = () => {
    console.log('edit')
  }

  const handleCalculate = () => {
    const result = parseFloat(willingToLose) / (parseFloat(stopLossPercentage) / 100);
    if (!isNaN(result)) {
      setOrderValue(result.toFixed(1)); 
      setLotValue((result / 100000).toFixed(2)); 
    } else {
      setOrderValue('Invalid input');
      setLotValue('Invalid input'); 
    }
  };

  const copyToClipboard = async (text: any) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Copied to clipboard');
      toast.toast({
        title: "Update Organization",
        description: "Organization updated successfully",
    });
    } catch (err) {
      console.error('Failed to copy: ', err);
      
    }
  };


  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <div className="rounded-full flex border p-2 cursor-pointer hover:bg-muted/90 gap-4 px-4">
            Trading Log
            <IconOpen />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Trading Log</AlertDialogTitle>
            <div className="flex gap-6 items-center">
            <Input className="cursor-pointer" onChange={(e) => setWillingToLose(e.target.value)} value={willingToLose} type="number" placeholder="Willing to Lose (80)" />
            /
            <Input
        type="number"
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
              placeholder="Order Value"
              value={lotValue}
              readOnly
              onClick={() => copyToClipboard(lotValue)}
            />
            </div>
            


            </div>
                  
            <Button onClick={handleCalculate}>Calculate</Button>
            </div>

            <Separator/>
            
            <AlertDialogDescription>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Symbol</TableHead>
                    <TableHead className="w-[100px]">PnL</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trades.map((trade) => (
                    <TableRow key={trade.symbol} onClick={toggleEdit} className="hover:bg-red-100">
                      <TableCell className="font-medium">
                        {trade.symbol}
                      </TableCell>
                      <TableCell>{trade.pnl}</TableCell>
                      <TableCell>{trade.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="w-full bg-muted/50 justify-center flex py-1 rounded-lg mt-2">
                Add new cell
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel>Save</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default TradingLog
