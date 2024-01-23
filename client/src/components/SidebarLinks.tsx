import React from 'react'
import { NavLink } from 'react-router-dom'
import {SidebarItem} from './AdminSidebar'
 

interface SidebarLinksProps {
  sidelink: SidebarItem;
  isActive:boolean;
  onClick:()=>void;
}


const SidebarLinks : React.FC<SidebarLinksProps> = ({sidelink, isActive, onClick}) => {
    const {link, icon, label} = sidelink;
    const activeLink = isActive ? 'bg-purple-75' : '';

  return (
    
    <NavLink to={link} onClick={onClick}>
      <div className={`w-full flex flex-col items-center text-center ${activeLink} p-3 rounded-lg`}>
        <img src={icon} alt={label} className="w-8 mb-1" />
        <span>{label}</span>
      </div>
    </NavLink>
  )
}

export default SidebarLinks