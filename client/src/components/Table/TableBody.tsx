/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import UnlabeledLine from '../Charts/UnlabeledLine';
import { NavLink } from 'react-router-dom';
import { AdminList } from "../../data/AdminList"


interface TableBodyProps {
  tableData: AdminList[],
}


const TableBody: React.FC<TableBodyProps> = ({ tableData }) => {
  console.log(tableData)
  return (
    <tbody className='bg-white rounded-lg'>
      {tableData.map((data) => {

        return (
          <tr key={data.id} className='admin_list_table_row'>
            <td className='py-2 px-3'><NavLink to={`/work-styles/${data.id}`} className='text-blue-100'>{data.firstname}{' '}{data.lastname}</NavLink></td>
            <td className='py-2 px-3'>{data.completed_date}</td>
            <td className='py-2 px-3'><img src={data.animal} className='w-8' alt="" /></td>
            <td className='py-2 px-3'>
              <UnlabeledLine  data={data.work_style_pattern}/>
            </td>
            <td className='py-2 px-3'>
              {
                ('has_360' in data) ? (data.has_360) ?
                (<NavLink to="#"><img src="/360-active.svg" className='w-8' alt="" /></NavLink>) : (<img src="/360-inactive.svg" className='w-8' alt='' />) : null
              }
            </td>
            <td className='py-2 px-3'>
              {
                ('multiples' in data) ?
                data.multiples ?
                  (<NavLink to="#"><img src="/multiples-active.svg" className='w-8' alt="" /></NavLink>)
                  : (<img src="/multiples-inactive.svg" className='w-8' alt='' />) : null
              }
            </td>
          </tr>
        );
      })}

    </tbody>
  )
}

export default TableBody