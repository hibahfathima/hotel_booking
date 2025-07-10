import React from 'react'
import AdminNavbar from './AdminNavbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at top */}
      <AdminNavbar />

      {/* Main content layout with Sidebar + Page */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar stays fixed-height */}
        <Sidebar />

        {/* Right side scrollable page content */}
        <div className="flex-1 overflow-y-auto p-4 pt-10 md:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
