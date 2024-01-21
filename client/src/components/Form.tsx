import { useState } from 'react'
import Checkbox from './Checkbox'
import {SelectionWords} from '../data/formData'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState<number>(1)
    const [error, setError] = useState<string>('')
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => { 
        setFormData({ ...formData, [e.target.name]: e.target.value });
     }


    const handleStep = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    if (!formData.firstname || !formData.lastname || !formData.email) {
      setError('All fields are required');
    } else {
      setError('');
      setStep(step + 1);
    }
  };


  const handleSubmit = (e:React.MouseEvent<HTMLInputElement, MouseEvent>) => { 
    e.preventDefault();
    navigate("/report")
   }


    const renderForm = ()=>{
        switch(step){
            case 1:
                return (
                    <>
                    <div className='flex items-end gap-5 flex-wrap font-montserrat w-full mb-6'>
                        <div className='md:w-1/3 w-full'>
                            <div>
                            <label htmlFor="firstname" className='text-white text-xl inline-block mb-3 font-medium'>Name <span className='text-red-800'>*</span></label>
                            </div>
                            <input type="text" name='firstname' value={formData.firstname} id='firstname' placeholder='firstname' className='block py-2 px-3 bg-white-100 focus-within:bg-white focus-within:outline-none w-full rounded-md' onChange={handleChange}/>
                        </div>
                        <div className='md:w-1/3 w-full'>
                            <input type="text" name='lastname' value={formData.lastname} id='lastname' placeholder='lastname' className='block py-2 px-3 bg-white-100 focus-within:bg-white focus-within:outline-none w-full rounded-md' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='font-montserrat w-full mb-6'>
                        <div className='lg:w-[68.5%]'>
                            <div>
                            <label htmlFor="email" className='text-white text-xl inline-block mb-3 font-medium'>Email <span className='text-red-800'>*</span></label>
                            </div>
                            <input type="email" name='email' value={formData.email} id='email' placeholder='email' className='block py-2 px-3 bg-white-100 focus-within:bg-white focus-within:outline-none w-full rounded-md' onChange={handleChange} autoComplete='off'/>
                        </div>
                    </div>
                    <div className='font-montserrat w-full mb-6'>
                        <div className='lg:w-[68.5%]'>
                            <button type='button' className='w-full bg-orange-100 py-2 rounded-md uppercase text-white font-semibold border-2 border-transparent hover:border-orange-100 hover:bg-transparent transition-all duration-300 text-xl' onClick={handleStep}>Next</button>
                        </div>
                    </div>
                    </>
                );
           
            case 2:
                return (
                    <>
                    <div className='lg:w-full'>
                            <div>
                            <label className='text-white text-xl inline-block mb-3 font-medium'>Word Selection</label>
                            </div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mb-10">
                            {
                                SelectionWords.map((check, i)=>{
                                    return (
                                        <Checkbox data={check} id={i} key={i}/>
                                    )
                                })
                            }
                            </div>
                            <div className='font-montserrat mb-6'>
                        <div className='lg:w-[68.5%]'>
                            <Button><input type="submit" value="Submit" className="text-xl cursor-pointer py-2 px-5" onClick={handleSubmit}/></Button>
                        </div>
                    </div>
                    </div>
                    </>
                )
            default:
                return null;
        }
    }



  return (
    <section className='pb-10'>
            <div className="container mx-auto md:px-10 px-5">
            {error && <p className='text-red-600'>{error}</p>}
                <form action="#" className='w-full'>
                    {renderForm()}
                </form>
            </div>
    </section>
  )
}

export default Form