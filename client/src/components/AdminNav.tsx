import {GoChevronDown} from 'react-icons/go'
import {IoIosMenu, IoIosClose, IoIosSearch} from 'react-icons/io'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)

    const handleNavbar = () => { 
        setShowMenu(!showMenu)
     }


  return (
    <header className={`w-full transition-all duration-600 bg-purple-100`}>
        <nav className={`flex justify-between gap-4 transition-all duration-600 items-center px-5 py-3`}>
            <a href="https://missionsquared.com">
                <img src="/EQ2_Logo_White.svg" className='w-44' alt="" />
            </a>

            

            <form className='lg:inline-flex hidden'>
            <div className="relative bg-gray-100">
            <IoIosSearch className='absolute top-2 text-gray-500 text-2xl left-2'/>
            <input type="text" className="lg:w-[360px] text-gray-500 rounded-md bg-transparent md:w-[200px] md:inline-flex hidden px-10 py-1 focus:outline-none border-2 border-transparent focus:border-white" placeholder='Search' name='searchbox'/>
            </div>
            </form>

            <button className={`text-3xl lg:hidden text-white p-1 rounded-md border `} onClick={()=> setShowMenu(!showMenu)}>
                {
                    showMenu ? <IoIosClose /> : <IoIosMenu />
                }
            </button>
        </nav>

    </header>
  )
}

export default Navbar