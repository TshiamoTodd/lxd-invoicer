import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center pt-10 justify-center h-full text-center gap-6 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold">
            Dashboard
        </h1>
    <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
        <TableRow>
            <TableHead className=" w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
    </TableBody>
    </Table>
</div>

  )
}

export default Dashboard
