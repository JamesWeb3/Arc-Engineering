import React from "react";
import Image from "next/image";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

export default function Nutrition(): JSX.Element {
    return (
        <div>
            <ol className="text-background">
               <li>Protein</li>

               <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Food</TableHead>
                            <TableHead>Calories</TableHead>
                            <TableHead>Protein</TableHead>
                            </TableRow>
                            </TableHeader>

                            <TableBody>
                        
                            <TableRow>
                                <TableCell><Image src="/egg.png" alt="Protein" width={200} height={500} /> </TableCell>
                                <TableCell><p>500</p> </TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>

                            </TableRow>
                                <TableCell><Image src="/steak.png" alt="Protein" width={200} height={500} /> </TableCell>
                                <TableCell> </TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableRow>
                                <TableCell><Image src="/granola.png" alt="Protein" width={200} height={500} /> </TableCell>
                                <TableCell> </TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>

                                </TableRow>
                                </TableBody>
                                </Table>

               
                
                </ol>
        </div>
    );
}