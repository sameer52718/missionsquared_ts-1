import selfConfidence from '/core-self-management-strength-self-confidence.png'
import {strengthList} from '../data/strengthList'
import UnlockReportBtn from './UnlockReportBtn'

const Strength = () => {
  return (
    <section className='py-20 bg-purple-100'>
        <div className="container mx-auto md:px-10 px-5">
            <h3 className='text-center font-meeriweather md:text-4xl text-2xl font-light text-white mb-4'>Your Core Self-Management Strength is</h3>
            <h2 className='text-center font-meeriweather md:text-5xl text-3xl font-light text-orange-100 mb-10'>Self-Confidence</h2>


            <div className="flex md:items-start md:gap-10 md:flex-row flex-col items-center gap-5 justify-center mb-10">
                
                <img src={selfConfidence} alt="core-self-management-strength-self-confidence" className='max-w-[250px]' />
                
                <ul className='md:w-1/2'>
                  {
                    strengthList.map((str, index) =>{
                      return (
                        <>
                        <li className='mb-5 text-xl font-montserrat text-blue-100' key={index}><strong>{str.head}</strong></li>
                        <li className='mb-6 font-montserrat text-white'>{str.desc}</li>
                        </>
                      )
                    })
                  }
                </ul>
            </div>

            <UnlockReportBtn />

        </div>
    </section>
  )
}

export default Strength