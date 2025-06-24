import * as React from "react"

import {
    type ColumnDef,
    type SortingState,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
        }
    })

    return (
        <div>
            <div className="rounded-md border">
                <Table className="lg:min-h-[731.5px]">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} id={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-between space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => { const pageNumberInput:HTMLInputElement | null = document.querySelector("#page-number-input");
                        if (pageNumberInput) pageNumberInput.value = "";
                        table.previousPage(); }}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <div>
                    <p>Page 
                        <input 
                        id="page-number-input"
                        type="number" 
                        className="w-6 mx-2 bg-gray-200 rounded-sm" 
                        min={1} 
                        max={table.getPageCount()} 
                        placeholder={(table.getState().pagination.pageIndex + 1).toString()} 
                        onKeyDown={(e:any) => {if (e.key === 'Enter') table.setPageIndex(e.target.value - 1)}} />
                        of {table.getPageCount()}</p>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => { const pageNumberInput:HTMLInputElement | null = document.querySelector("#page-number-input");
                        if (pageNumberInput) pageNumberInput.value = "";
                        table.nextPage(); }}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}