import React from 'react'
import Table from '../../components/Table/Table'

const Dashboard: React.FC = () => {
  return (
    <main className='flex-1 bg-gray-100 h-full overflow-y-scroll'>
      <div className="container flex justify-between px-4 mb-5 py-3 w-full bg-white">
          <h1 className='dashboard_head text-purple-50 font-meeriweather'>Dashboard</h1>
      </div>
      <div className="container px-4 py-3 w-full">
        <div className="flex justify-between bg-white p-4">
            <Table />
        </div>
      </div>
    </main>
  )
}

export default Dashboard