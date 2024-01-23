import React, { useState } from 'react'
import Table from '../../components/Table/Table'
import { useAdminContext } from '../../context/AdminContext';


interface TableRow {
  id?:number;
  firstname?: string;
  lastname?: string;
  email?:string;
  completed_date?: string;
  animal?: string;
  work_style_pattern?: number[];
  has_360?:boolean;
  multiple?:boolean;
}

const Dashboard: React.FC = () => {

  const adminTableData = useAdminContext()
  const [tableData] = useState(adminTableData);
  
  const assessColumns = [
    { label: "Name", accessor: "full_name" },
    { label: "Last Completed", accessor: "last_completed" },
    { label: "Archetype", accessor: "archetype" },
    { label: "Work Style Pattern", accessor: "work_style_pattern" },
    { label: "Has 360", accessor: "has_360" },
    { label: "Multiples", accessor: "multiple" },
   ];


const table:TableRow[] = tableData;
const assessmentsColumns1 = assessColumns.slice(0, 4);

const extractedData = table.map(({id, firstname, lastname, completed_date, animal, work_style_pattern}) => ({
  id,
  firstname,
  lastname,
  completed_date,
  animal,
  work_style_pattern
}));

  return (
    <main className='flex-1 bg-gray-100 h-full overflow-y-scroll'>
      <div className="container flex justify-between px-4 py-3 w-full bg-white">
          <h1 className='dashboard_head text-purple-50 font-meeriweather'>Dashboard</h1>
      </div>
      <div className="container py-3 w-full">
        <div className="flex justify-between xl:flex-nowrap flex-wrap gap-6 p-4">
          <div className='flex-1'>
          <h3 className='text-2xl text-purple-50 font-meeriweather'>Recently Completed Assessments</h3>
            <Table columns={assessmentsColumns1} tableData={extractedData} rowLimit={4}/>
          </div>
          <div className='flex-1'>
          <h3 className='text-2xl text-purple-50 font-meeriweather'>Recently Candidate Targets</h3>
            <Table columns={assessmentsColumns1} tableData={extractedData} rowLimit={4}/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard