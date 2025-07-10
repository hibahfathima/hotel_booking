import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Components/Home'
import CardHotel from './Components/CardHotel'
import Footer from './Components/Footer'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Mybooking from './pages/Mybooking'
import HotelRegistration from './owners/HotelRegistration'
import Layout from './owners/Layout'
import Addroom from './owners/Addroom'
import LisrRoom from './owners/LisrRoom'
import Dahboard from './owners/Dahboard'

function App() {

  const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {false && <HotelRegistration />}


      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/rooms/:id' element={<SingleRoom />} />
          <Route path='/my-bookings' element={<Mybooking />} />
          <Route path='/owner' element={<Layout />}>
            <Route index element={<Dahboard />} />
            <Route path='add-room' element={<Addroom />} />
            <Route path='list-room' element={<LisrRoom />} />
          </Route>
        </Routes>
      </div>
      <CardHotel />
      <Footer />
    </div>

  )
}

export default App
