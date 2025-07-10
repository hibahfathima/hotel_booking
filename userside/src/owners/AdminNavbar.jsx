import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    <div>
      <div className='flex flex-row items-center justify-between px-4 md:px-8
      border-b border-grey-500 py-3 bg-white transition-all duration-300'>
        <Link style={{textDecoration:'none'}} to={'/'}>
        <div className="d-flex fs-3 linkStyle " style={{color:'black',}}>
                    <i class="fa-solid fa-house "></i>
                    <h3>StayMate</h3>
                  </div>
        </Link>
        <UserButton/>
         
      </div>
    </div>
  )
}

export default AdminNavbar
