import React from 'react'
import { assets, cities } from '../assets/assets'

function MainView() {
  return (
    <>
      <div className='bg-[url("https://images.unsplash.com/photo-1501117716987-c8c394bb29df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-no-repeat bg-cover bg-center h-screen
        flex flex-col items-start md:px-16 lg:px-24 justify-center px-6'>

        {/* Tagline */}
       

        {/* Heading */}
        <h1 className='font-playfair font-bold text-2xl max-w-xl mt-4 text-white'>
          DISCOVER YOUR PERFECT STAY
        </h1>

        {/* Subheading */}
        <p className='max-w-130 mt-2 md:text-base text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eos nihil facere? Architecto doloribus velit, perferendis cum enim, quos harum assumenda minima nemo dicta voluptas distinctio. Nesciunt ullam amet illum.
        </p>

        {/* Hotel Booking Form */}
        <form className='bg-white text-gray-500 rounded-lg px-6 py-4 
          flex flex-col md:flex-row items-start gap-4 
          md:w-fit max-w-full md:mt-10 mt-6 
          md:self-start mt-8'>

          {/* Destination */}
          <div>
            <div className='flex items-center gap-2'>
              <img src={assets.calenderIcon} alt="" />
              <label htmlFor="destinationInput">Destination</label>
            </div>
            <input
              list='destinations'
              id="destinationInput"
              type="text"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              placeholder="Type here"
              required
            />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>

          {/* Check-in */}
          <div>
            <div className='flex items-center gap-2'>
              <img src={assets.calenderIcon} alt="" />
              <label htmlFor="checkIn">Check in</label>
            </div>
            <input
              id="checkIn"
              type="date"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          {/* Check-out */}
          <div>
            <div className='flex items-center gap-2'>
              <img src={assets.calenderIcon} alt="" />
              <label htmlFor="checkOut">Check out</label>
            </div>
            <input
              id="checkOut"
              type="date"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          {/* Guests */}
          <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
            <label htmlFor="guests">Guests</label>
            <input
              min={1}
              max={4}
              id="guests"
              type="number"
              className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
              placeholder="0"
            />
          </div>

          {/* Search Button */}
          <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1'>
            <img src={assets.searchIcon} alt="" className='h-7' />
            <span>Search</span>
          </button>
        </form>
      </div>
    </>
  )
}

export default MainView
