import React, { useState } from 'react'
import Table from '../../components/Table/Table'
import { useAdminContext } from '../../context/AdminContext';

const AdminList:React.FC = () => {
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


  return (
    <main className='flex-1 bg-gray-100 h-full overflow-y-scroll'>
      <div className="container flex justify-between px-4 py-3 w-full bg-white">
          <h1 className='dashboard_head text-purple-50 font-meeriweather'>Assessments</h1>
          <div className="border border-gray-400 p-1 min-w-36 flex flex-col rounded-md">
              <small className='mb-1 text-gray-700 font-semibold'>Filter By</small>
              <select name="filter" id="" className='bg-transparent focus:outline-none'>
                <option value="View All">View All</option>
                <option value="Self-Management">Self-Management</option>
                <option value="Motivational Factors">Motivational Factors</option>
                <option value="Interpersonal Dynamics">Interpersonal Dynamics</option>
              </select>
            </div>
      </div>
      <div className="container py-3 w-full">
        <div className="flex justify-between xl:flex-nowrap flex-wrap gap-6 p-4">
          <div className='flex-1'>
          <div className="w-full md:overflow-x-hidden overflow-x-scroll">
          <Table columns={assessColumns} tableData={tableData}/>
          </div>
          </div>
          
        </div>
      </div>
    </main>
    
  )
}

export default AdminList