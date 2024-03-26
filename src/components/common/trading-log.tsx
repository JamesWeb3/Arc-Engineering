import React, { useState, useEffect } from 'react'
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
import { IconOpen, IconTrash } from '@/components/icons'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Toast } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

interface Trade {
  id: number;
  symbol: string;
  pnl: number;
  notes: string;
}

const TRADING_LOG_KEY = 'tradingLog';

const TradingLog: React.FC = ({}) => {
  const toast = useToast();
  const [trades, setTrades] = useState<Trade[]>([]);
  const [willingToLose, setWillingToLose] = useState('60');
  const [stopLossPercentage, setStopLossPercentage] = useState('');
  const [orderValue, setOrderValue] = useState('');
  const [lotValue, setLotValue] = useState('');
  
  const toggleEdit = () => {
    console.log('edit')
  }

  useEffect(() => {
    const loadedTrades: Trade[] = JSON.parse(localStorage.getItem(TRADING_LOG_KEY) || '[]');
    setTrades(loadedTrades);
  }, []);

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

  const handleDeleteTrade = (tradeId: number) => {
    setTrades(trades.filter(trade => trade.id !== tradeId));
  };

  const handleAddTrade = (newTrade: Trade) => {
    setTrades([...trades, { ...newTrade, id: Date.now() }]);
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
        <AlertDialogContent className="max-h-[700px] overflow-auto">
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
              placeholder="Lot Value"
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
                    <TableHead>Delete</TableHead>
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
                       <TableCell onClick={(e) => {
          e.stopPropagation(); 
          handleDeleteTrade(trade.id);
        }}>
          <div className="hover:cursor-pointer hover:text-blue-500">
          <IconTrash/>
          </div>
          
        </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div onClick={() => handleAddTrade(trades[0])} className="w-full bg-muted/50 justify-center flex py-1 rounded-lg hover:bg-muted/70 cursor-pointer mt-2">+ Add  Trade</div>
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
