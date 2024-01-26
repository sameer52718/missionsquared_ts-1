import React, { useState } from 'react'
import SidebarLinks from './SidebarLinks'


export interface SidebarItem {
  link:string;
  icon:string;
  label:string;
}

const sidebarContent: SidebarItem[] = [
  {
    "link":"/dashboard",
    "icon": "/icon-dashboard.svg",
    "label": "Dashboard"
  },
  {
    "link":"/assessments",
    "icon": "/icon-assessments.svg",
    "label": "Assessments"
  },
  {
    "link":"/folders",
    "icon": "/icon-folders.svg",
    "label": "Folders"
  },
  {
    "link":"/feedback",
    "icon": "/icon-feedback.svg",
    "label": "360 Feadback"
  },
  {
    "link":"/targets",
    "icon": "/icon-target.svg",
    "label": "Candidate Targets"
  },
  {
    "link":"/settings",
    "icon": "/icon-admin.svg",
    "label": "Admin"
  },
]

const AdminSidebar: React.FC = () => {

  const [activeLink, setActiveLink] = useState(sidebarContent[0].link);

  const handleClick = (link: string)=>{
    setActiveLink(link);
  }



  return (
    <aside className='admin_sidebar overflow-y-scroll bg-purple-100 text-white flex flex-col gap-5 w-40 px-4 pt-2'>
      {
        sidebarContent.map((ln, index):React.ReactNode =>{
          return (
            <SidebarLinks 
            sidelink={ln}
            key={index}
            isActive={activeLink === ln.link}
            onClick={()=>handleClick(ln.link)}
            />
          )
        })
      }
    </aside>
  )
}

export default AdminSidebar