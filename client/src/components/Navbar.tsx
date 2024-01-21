import {GoChevronDown} from 'react-icons/go'
import {IoIosMenu, IoIosClose} from 'react-icons/io'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [scrollPosition, setScrollPositioin] = useState(0)
    
    useEffect(() => {
        
        const handleScroll = () => { 
            setScrollPositioin(window.scrollY)
         }

        window.addEventListener("scroll", handleScroll)
    
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])
    

    const handleNavbar = () => { 
        setShowMenu(!showMenu)
     }


  return (
    <header className={`fixed w-screen transition-all duration-600 ${scrollPosition > 10 ? 'bg-black-100' : 'bg-transparent'}`}>
        <nav className={`container mx-auto flex justify-between transition-all duration-600 items-center px-5 ${scrollPosition > 10 ? 'py-3' : 'py-5'}`}>
            <a href="https://missionsquared.com">
                <img src="/m2-logo.svg" alt="" />
            </a>

            <ul className='navbar lg:flex hidden xl:gap-10 lg:gap-6 uppercase font-montserrat items-center text-white font-light'>
                <li className='group'><a href="#" className='hover:text-orange-100 flex items-center transition-colors duration-300 relative gap-1 py-4'>programs <GoChevronDown /></a>
                    <ul className='absolute -bottom-12 opacity-0 transition-all duration-600 group-hover:-bottom-4 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 p-3 bg-white-100'>
                        <li className='hover:text-orange-100 text-sm capitalize'><NavLink to="/organizational-transformation">Orginaztional Transformation</NavLink></li>
                    </ul>
                </li>
                
                <li className='group'><a href="#" className='hover:text-orange-100 flex items-center transition-colors duration-300 relative gap-1 py-4'>events <GoChevronDown /></a>
                    <ul className='absolute -bottom-16 opacity-0 transition-all duration-600 group-hover:-bottom-10 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 p-3 bg-white-100'>
                        <li className='hover:text-orange-100 text-sm capitalize mb-2'><NavLink to="/making-shift-happen">Making Sh*ft Happen</NavLink></li>
                        <li className='hover:text-orange-100 text-sm capitalize'><NavLink to="/crash-course">Adversity Hack Crash Course</NavLink></li>
                    </ul>
                </li>
                
                <li className='group'><a href="#" className='hover:text-orange-100 flex items-center transition-colors duration-300 relative gap-1 py-4'>assessments <GoChevronDown /></a>
                    <ul className='absolute -bottom-12 opacity-0 transition-all duration-600 group-hover:-bottom-4 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 p-3 bg-white-100'>
                        <li className='hover:text-orange-100 text-sm capitalize'><NavLink to="/emotional-intelligence-assessment">Emotional Intelligence Assessment</NavLink></li>
                    </ul>
                </li>
                
                <li className='group'><a href="#" className='hover:text-orange-100 flex items-center transition-colors duration-300 relative gap-1 py-4'>about <GoChevronDown /></a>
                    <ul className='absolute -bottom-28 opacity-0 transition-all duration-600 group-hover:-bottom-20 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 p-3 bg-white-100'>
                        <li className='hover:text-orange-100 text-sm mb-4 capitalize'><NavLink to="/admin-list">Team</NavLink></li>
                        <li className='hover:text-orange-100 text-sm mb-4 capitalize'><NavLink to="/public-speaking">Public Speaking</NavLink></li>
                        <li className='hover:text-orange-100 text-sm capitalize'><NavLink to="/the-adversity-hack-book">The Adversity Hack Book</NavLink></li>
                    </ul>
                </li>
                
                <li className='flex items-center hover:text-orange-100 transition-colors duration-300 gap-1 py-6'><a href="/blog">articles</a></li>
                <li><Button><NavLink to="/contact" className="uppercase font-semibold py-2 px-5 block">book a call</NavLink></Button></li>
            </ul>

            <button className='text-3xl lg:hidden text-white p-1 rounded-md border border-white' onClick={()=> setShowMenu(!showMenu)}>
                {
                    showMenu ? <IoIosClose /> : <IoIosMenu />
                }
            </button>
        </nav>

        <ul className={`mobile-navbar md:px-12 px-5 pb-10 pt-14 absolute transform ${showMenu ? 'translate-x-0' : '-translate-x-full'} bg-purple text-white xl:gap-10 lg:gap-6 uppercase font-montserrat items-center lg:hidden block top-0 h-screen transition duration-200`}>
                <li className='group'><button className='hover:text-orange-100 flex items-center justify-between w-full transition-colors duration-300 relative gap-1 py-2'>programs <GoChevronDown /></button>
                    <ul className='transition-all hidden group-focus-within:block duration-600 p-3 bg-white-100'>
                        <li className='hover:text-orange-100 text-sm capitalize' onClick={handleNavbar}><NavLink to="/organizational-transformation">Orginaztional Transformation</NavLink></li>
                    </ul>
                </li>
                
                <li className='group'><button className='hover:text-orange-100 flex items-center transition-colors duration-300 justify-between relative gap-1 w-full py-4'>events <GoChevronDown /></button>
                    <ul className='transition-all duration-600 hidden group-focus-within:block p-3 bg-white-100'>
                        <li className='hover:text-orange-100 text-sm capitalize mb-2' onClick={handleNavbar}><NavLink to="/making-shift-happen">Making Sh*ft Happen</NavLink></li>
                        <li className='hover:text-orange-100 text-sm capitalize' onClick={handleNavbar}><NavLink to="/crash-course">Adversity Hack Crash Course</NavLink></li>
                    </ul>
                </li>
                
                <li className='group'><button className='hover:text-orange-100 justify-between w-full flex items-center transition-colors duration-300 relative gap-1 py-4'>assessments <GoChevronDown /></button>
                    <ul className='transition-all duration-600 hidden group-focus-within:block p-3 bg-white-100'>
                        <li className='hover:text-orange-100 text-sm' onClick={handleNavbar}><NavLink to="/emotional-intelligence-assessment">Emotional Intelligence Assessment</NavLink></li>
                    </ul>
                </li>
                
                <li className='group'><button className='hover:text-orange-100 justify-between w-full flex items-center transition-colors duration-300 relative gap-1 py-4'>about <GoChevronDown /></button>
                    <ul className='transition-all duration-600 hidden group-focus-within:block p-3 bg-white-100'>
                        <li className='hover:text-orange-100 text-sm mb-4'><NavLink to="/team" onClick={handleNavbar}>Team</NavLink></li>
                        <li className='hover:text-orange-100 text-sm mb-4' onClick={handleNavbar}><NavLink to="/public-speaking">Public Speaking</NavLink></li>
                        <li className='hover:text-orange-100 text-sm ' onClick={handleNavbar}><NavLink to="/the-adversity-hack-book">The Adversity Hack Book</NavLink></li>
                    </ul>
                </li>
                
                <li className='flex items-center hover:text-orange-100 transition-colors duration-300 gap-1 py-6' onClick={handleNavbar}><a href="/blog">articles</a></li>
                <li onClick={handleNavbar}><Button><NavLink to="/contact" className="uppercase font-semibold w-full py-2 px-5 block">book a call</NavLink></Button></li>
            </ul>
    </header>
  )
}

export default Navbar