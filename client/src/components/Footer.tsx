import { NavLink } from 'react-router-dom'
import {FiFacebook, FiInstagram, FiLinkedin, FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='w-full py-20 bg-purple-50'>
        <div className="container mx-auto md:px-10 px-5 flex flex-wrap md:justify-between justify-center gap-5">
            <p className='text-white md:text-xl'>© {new Date().getFullYear()} All Rights Reserved | Terms Of Use | <NavLink to="privacy-policy">Privacy</NavLink></p>
            <div className="flex text-2xl gap-5">
                <a className='text-white hover:text-orange-100 transition-colors duration-300' href="https://www.linkedin.com/company/mission-squared-llc/" target='_blank'><FiLinkedin /></a>
                <a className='text-white hover:text-orange-100 transition-colors duration-300' href="https://www.facebook.com/missionsquared" target='_blank'><FiFacebook /></a>
                <a className='text-white hover:text-orange-100 transition-colors duration-300' href="https://www.instagram.com/missionsquared/" target='_blank'><FiInstagram /></a>
                <a className='text-white hover:text-orange-100 transition-colors duration-300' href="https://twitter.com/_missionsquared" target='_blank'><FiTwitter /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer