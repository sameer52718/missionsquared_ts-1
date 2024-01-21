import React from "react"

import { TableColumns } from "./Table"

interface TableHeadProps {
    columns: TableColumns[]
}

const TableHead: React.FC<TableHeadProps> = ({ columns }) => {
    return (
        <thead className="bg-beige-900">
            <tr>
                {
                    columns.map(({ label, accessor }) => {
                        return <th className='py-3 px-3 whitespace-nowrap text-left' key={accessor}>{label}</th>
                    })
                }
            </tr>
        </thead>
    )
}

export default TableHead