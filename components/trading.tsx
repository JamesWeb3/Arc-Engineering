import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { Textarea } from '@/components/ui/textarea';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from '@/components/ui/input';

interface Trade {
    coin: string,
    collateral: string,
    totalPosition: string,
    currentPrice: string,
    stopLoss: string,
    pnl: string,
    notes: string,
    [key: string]: string;
}

const STORAGE_KEY = 'trades';

export default function Trading(): JSX.Element {
    const [trades, setTrades] = useState<Trade[]>([]);
    const [editTradeIds, setEditTradeIds] = useState<string[]>([]);
    const [tempEdits, setTempEdits] = useState<Partial<Trade>>({});

    useEffect(() => {
        const storedTrades = localStorage.getItem(STORAGE_KEY);
        if (storedTrades) {
            setTrades(JSON.parse(storedTrades));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(trades));
    }, [trades]);

    const handleEditClick = (tradeId: string) => {
        if (!editTradeIds.includes(tradeId)) {
            setEditTradeIds([...editTradeIds, tradeId]);
        }
    };

    const handleSave = (tradeId: string, field: string) => {
        const updatedTrades = trades.map((trade) => {
            if (trade.invoice === tradeId) {
                return { ...trade, [field]: tempEdits[field as keyof Trade] };
            }
            return trade;
        });
        setTrades(updatedTrades as Trade[]);
        setEditTradeIds(editTradeIds.filter((id) => id !== tradeId));
        setTempEdits({});
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, field: keyof Trade) => {
        const value = e.target.value;
        setTempEdits({
            ...tempEdits,
            [field]: value,
        });
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>, tradeId: string, field: string) => {
        if (event.key === 'Enter') {
            handleSave(tradeId, field);
        }
    };

    const handleAddRow = () => {
        const newTrade: Trade = {
            coin: '',
            collateral: '',
            totalPosition: '',
            currentPrice: '',
            stopLoss: '',
            pnl: '',
            notes: '',
        };
        setTrades([...trades, newTrade]);
    };

    return (
        <div className="flex flex-col h-full justify-center items-center gap-12 py-12">
            <div className="w-full">
                <h3 className="text-background">Long Term Position</h3>
                <Textarea className="h-44 w-full" placeholder="Type your message here." />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Coin</TableHead>
                            <TableHead>Collateral</TableHead>
                            <TableHead>Total Position</TableHead>
                            <TableHead>Current Price</TableHead>
                            <TableHead>SL</TableHead>
                            <TableHead>Profit</TableHead>
                            <TableHead>Notes</TableHead>
                            <TableHead>Edit</TableHead>
                            <TableHead className="hover:bg-muted/50 cursor-pointer" onClick={handleAddRow}>
                                +
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {trades.map((trade, index) => (
                            <TableRow key={index}>
                                {Object.keys(trade).map((key) => (
                                    <TableCell className="text-background cursor-pointer" key={`${index}-${key}`}>
                                        {!editTradeIds.includes(index.toString()) ? (
                                            trade[key as keyof Trade]
                                        ) : (
                                            <Input
                                                value={tempEdits[key as keyof Trade] || ''}
                                                onChange={(e) => handleInputChange(e, key as keyof Trade)}
                                                onKeyPress={(e) => handleKeyPress(e, index.toString(), key)}
                                                onBlur={() => handleSave(index.toString(), key)}
                                            />
                                        )}
                                    </TableCell>
                                ))}
                                <TableCell className="text-background">
                                    {editTradeIds.includes(index.toString()) ? (
                                        <button onClick={() => handleSave(index.toString(), 'invoice')}>Save</button>
                                    ) : (
                                        <button onClick={() => handleEditClick(index.toString())}>Edit</button>
                                    )}
                                </TableCell>
                                <TableCell>EDIT</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
