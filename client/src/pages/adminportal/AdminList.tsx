import React from 'react'
import Table from '../../components/Table/Table'

const AdminList:React.FC = () => {
  return (
    <main className='bg-beige-100'>
      <section className='w-full py-36'>
        <div className="container mx-auto md:px-10 px-5">
          <div className="flex justify-between flex-wrap gap-4 items-center mb-10">
            <div className="border border-gray-400 p-1 min-w-36 flex flex-col rounded-md">
              <small className='mb-1 text-gray-700 font-semibold'>Filter By</small>
              <select name="filter" id="" className='bg-transparent focus:outline-none'>
                <option value="View All">View All</option>
                <option value="Self-Management">Self-Management</option>
                <option value="Motivational Factors">Motivational Factors</option>
                <option value="Interpersonal Dynamics">Interpersonal Dynamics</option>
              </select>
            </div>
            <div>
              <p className='font-montserrat'>SHOWING SEARCH RESULTS FOR “A” | <button className="text-blue-100 hover:text-orange-100">SHOW ALL</button></p>
            </div>
          </div>
          <div className="w-full md:overflow-x-hidden overflow-x-scroll">
          <Table />
          </div>
        </div>
      </section>
    </main>
  )
}

export default AdminList