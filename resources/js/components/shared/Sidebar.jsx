import React from 'react'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBORD_SIDER_LINKS } from '../../lib/constant/Navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
// import {faSchool} from 'FontAwesomeIcon'
// import { VscBook } from "react-icons/vsc";
const Sidebar = () => {
    return (
       <div className='bg-neutral-800 w-60 p-3 h-screen max-h-[90vh] overflow-auto flex flex-col'>
            <div className='flex items-center gap-2 px-2 py-3'>
                {/* <faSchool/> */}
                <span >e-SHE </span>
            </div>
            <div className="flex-1 mt-4">
                {DASHBORD_SIDER_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />

                ))}
            </div>
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((bitem) => (
                <BottomSidebar key={bitem.key}bitem={bitem} />
                
            ))}
        </div>
    )
}

export default Sidebar

function SidebarLink({ item }) {
    const { pathname } = useLocation();
    return (
        <Link to={item.path} className={classNames(pathname === item.path ? 'text-black  flex gap-2 items-center hover:text-purple-950 bg-neutral-300 px-2 py-1 ' : 'text-neutral-400 flex gap-2 items-center hover:text-white px-2 py-1 ')} ><span >{item.icon}</span>{item.label} </Link>
    )
}
function BottomSidebar({bitem}){
    const pathname=useLocation();
    return (
        <Link to={bitem.path} className={classNames(pathname === bitem.path ? 'text-black  flex gap-2 items-center hover:text-purple-950 bg-neutral-300 px-2 py-1 ' : 'text-neutral-400 flex gap-2 items-center hover:text-white px-2 py-1 ')} ><span >{bitem.icon}</span>{bitem.label} </Link>
    )
}