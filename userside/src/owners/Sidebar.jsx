import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

function Sidebar() {

    const sidebarLink = [{ name: 'dashboard', path: '/owner', icon: assets.dashboardIcon },
    { name: 'List Room', path: '/owner/list-room', icon: assets.listIcon },
    { name: 'Add Room', path: '/owner/add-room', icon: assets.addIcon }
    ]
    return (
        <div>
            <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col
      transition-all duration-300'>
                {
                    sidebarLink.map((items, index) => (
                        <NavLink to={items.path} key={index} end='/owner'
                            className={({ isActive }) => `flex items-center py-3 px-4 md:px-8 gap-3 text-decoration-none ${isActive ? "border-r-4 bg-blue-600/10 bg-blue-600 md:border-6-[6px] text-blue-600"
                                : 'hover:bg-grey-100/90 text-gray-700 border-white'}`}>
                            <img src={items.icon} alt="" className='min-h-6 min-w-6' />
                            <p className='md:block hidden center'>{items.name}</p>
                        </NavLink>

                    ))
                }

            </div>
        </div>
    )
}

export default Sidebar
