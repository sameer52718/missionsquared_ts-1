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
    <header className={`fixed w-full transition-all duration-600 bg-purple-100`}>
        <nav className={`container mx-auto flex justify-between gap-4 transition-all duration-600 items-center px-2 py-2`}>
            <a href="https://missionsquared.com">
                <img src="/EQ2_Logo_White.svg" className='w-32' alt="" />
            </a>

            <ul className={`navbar lg:flex hidden xl:gap-16 lg:gap-6 uppercase font-montserrat items-center text-white font-light`}>
                <li className='group'><a href="#" className='hover:text-orange-100 flex items-center transition-colors duration-300 relative gap-1 py-4'>dashboard</a>
                </li>

                <li className='group'><a href="#" className='hover:text-orange-100 flex items-center transition-colors duration-300 relative gap-1 py-4'>assessments <GoChevronDown /></a>
                    <ul className='absolute -bottom-28 opacity-0 transition-all duration-600 group-hover:-bottom-20 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 p-3 bg-purple text-white'>
                        <li className='hover:text-orange-100 capitalize text-sm mb-4'><NavLink to="/team">List View</NavLink></li>
                        <li className='hover:text-orange-100 capitalize text-sm mb-4'><NavLink to="/public-speaking">Folders</NavLink></li>
                        <li className='hover:text-orange-100 capitalize text-sm '><NavLink to="/the-adversity-hack-book">Request Center</NavLink></li>
                    </ul>
                </li>
                
                <li className='group'><a href="#" className='hover:text-orange-100 flex items-center transition-colors duration-300 relative gap-1 py-4'>Admins <GoChevronDown /></a>
                    <ul className='absolute -bottom-16 opacity-0 transition-all duration-600 group-hover:-bottom-10 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 p-3 bg-purple text-white'>
                        <li className='hover:text-orange-100 text-sm capitalize mb-2'><NavLink to="/making-shift-happen">Making Sh*ft Happen</NavLink></li>
                        <li className='hover:text-orange-100 text-sm capitalize'><NavLink to="/crash-course">Adversity Hack Crash Course</NavLink></li>
                    </ul>
                </li>
                
            </ul>

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

        <ul className={`mobile-navbar md:px-12 px-5 py-10 absolute transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} bg-purple text-white xl:gap-10 lg:gap-6 uppercase font-montserrat items-center w-full transition duration-200`}>
                
                <li className='hover:text-orange-100 text-sm capitalize mb-2' onClick={handleNavbar}><NavLink to="#">dashboard</NavLink></li>
                
                <li className='group'><button className='hover:text-orange-100 flex items-center capitalize transition-colors duration-300 justify-between relative gap-1 w-full py-4'>assessments <GoChevronDown /></button>
                    <ul className='transition-all duration-600 hidden group-focus-within:block p-3'>
                    <li className='hover:text-orange-100 capitalize text-sm mb-4'><NavLink to="/team">List View</NavLink></li>
                    <li className='hover:text-orange-100 capitalize text-sm mb-4'><NavLink to="/public-speaking">Folders</NavLink></li>
                    <li className='hover:text-orange-100 capitalize text-sm '><NavLink to="/the-adversity-hack-book">Request Center</NavLink></li>
                    </ul>
                </li>
                
                <li className='group'><button className='hover:text-orange-100 justify-between w-full capitalize flex items-center transition-colors duration-300 relative gap-1 py-4'>Admins <GoChevronDown /></button>
                    <ul className='transition-all duration-600 hidden group-focus-within:block p-3'>
                        <li className='hover:text-orange-100 text-sm mb-3' onClick={handleNavbar}><NavLink to="/emotional-intelligence-assessment">Emotional Intelligence Assessment</NavLink></li>
                    </ul>
                </li>
                
                <li>
                <form>
                <div className="relative bg-gray-100">
                <IoIosSearch className='absolute top-2 text-gray-500 text-2xl left-2'/>
                <input type="text" className="lg:w-[360px] text-gray-500 rounded-md bg-transparent md:w-[200px] md:inline-flex hidden px-10 py-1 focus:outline-none border-2 border-transparent focus:border-white" placeholder='Search' name='searchbox'/>
                </div>
                </form>
                </li>
                
                <li onClick={handleNavbar}><Button><NavLink to="/contact" className="uppercase font-semibold w-full py-2 px-5 block">book a call</NavLink></Button></li>
            </ul>
    </header>
  )
}

export default Navbar