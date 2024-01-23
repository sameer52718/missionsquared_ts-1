import TableHead from "./TableHead";
import TableBody from "./TableBody";

export interface TableColumns {
    label:string,
    accessor:string
}

interface tableProps{
  columns: TableColumns[],
  tableData: any[],
  rowLimit?:number
}

const Table = ({columns, tableData, rowLimit}:tableProps) => {

  const displayData = rowLimit ? tableData.slice(0, rowLimit) : tableData;
  return (
    <table className='w-full'>
        <TableHead columns={columns}/>
        <TableBody tableData={displayData}/>
    </table>
  )
}

export default Table