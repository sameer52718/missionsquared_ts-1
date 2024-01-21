import React from 'react'
// import LabeledLine from './Charts/LabeledLine'
import {BsEnvelope} from 'react-icons/bs'
import {TfiSave} from 'react-icons/tfi'
import {MdLocalPrintshop} from 'react-icons/md'
import { AdminList } from '../data/AdminList'

interface AssessmentProfileProps {
    profile:AdminList
}

const AssessmentProfile:React.FC<AssessmentProfileProps> = ({profile}) => {
  return (
    <div className='bg-gray-100 w-full md:pt-10 pt-36 pb-5 mb-10'>
        <div className="container mx-auto md:px-10 px-5">
            <div className="flex md:justify-between justify-center gap-5 md:flex-nowrap flex-wrap mb-10">
                <div className="flex flex-1 items-center gap-3">
                    <img src={profile.animal} className='lg:w-24 md:w-16 w-14' alt="" />
                    <h2 className="font-meeriweather lg:text-3xl text-2xl">{profile.firstname}{" "}{profile.lastname}</h2>
                </div>
                <div className='md:mb-0 mb-5 md:w-auto w-full flex-1'>
                    {/* <LabeledLine work_style={profile.work_style_pattern}/> */}
                </div>
                <div className='flex flex-1 flex-col justify-center'>
                    <div className="flex text-xl justify-end mb-3 items-center gap-3">
                        <a href="mailto:xyz@mail.com">
                            <BsEnvelope />
                        </a>
                        <button>
                            <TfiSave />
                        </button>
                        <button className='text-2xl'>
                            <MdLocalPrintshop />
                        </button>
                    </div>
                    <div className='flex justify-end'>
                    <select name="assessment_list" id="assessment_list" className='bg-transparent mb-3 text-blue-100'>
                    <option value={profile.completed_date} defaultValue="true">
                    {new Date(profile.completed_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </option>
                    </select>
                    </div>
                    <p className='text-right'>{profile.email}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AssessmentProfile