import React from 'react'
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


const toggleEdit = () => {
  console.log('edit')
}

const TradingLog: React.FC = ({}) => {
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
