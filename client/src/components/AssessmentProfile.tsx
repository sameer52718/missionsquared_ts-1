import React from 'react'
import { AdminList } from '../data/AdminList'

interface AssessmentProfileProps {
    profile:AdminList
}

const AssessmentProfile:React.FC<AssessmentProfileProps> = ({profile}) => {
  return (
    <div className='bg-white w-full flex-1 py-2'>
        <div className="container mx-auto md:px-10 px-5">
            <div className="flex md:justify-between justify-center gap-5 md:flex-nowrap flex-wrap">
                <div className="flex flex-1 items-center gap-3">
                    <img src={profile.animal} className='w-14' alt="" />
                    <h1 className="dashboard_head text-purple-50 font-meeriweather">{profile.firstname}{" "}{profile.lastname}</h1>
                </div>
                
                <div className='flex flex-1 flex-col justify-center'>
                    
                    <div className='flex justify-end'>
                    <select name="assessment_list" id="assessment_list" className='bg-transparent text-purple-75 font-bold'>
                    <option value={profile.completed_date} defaultValue="true">
                    {new Date(profile.completed_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </option>
                    </select>
                    </div>
                    <p className='text-right text-purple-100'>{profile.email}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AssessmentProfile