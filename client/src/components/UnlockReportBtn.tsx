import { IoIosUnlock } from 'react-icons/io'
import Button from './Button'

const UnlockReportBtn = () => {
    return (
        <div className="flex justify-center">
            <Button>
                <span className='flex py-2 md:px-6 px-3 uppercase items-center gap-1 font-semibold font-montserrat'><IoIosUnlock /> Unlock Full Report</span>
            </Button>
        </div>
    )
}

export default UnlockReportBtn