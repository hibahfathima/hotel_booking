import React, { useState } from 'react';
import '../Components/style.css';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import StarRating from '../Components/StarRating';

const CheckBox = ({ label, selected = false, onChange = () => {} }) => (
  <label className='block w-full mt-2 text-sm cursor-pointer'>
    <div className='flex gap-3 items-center'>
      <input name='sortOption' type='checkbox' checked={selected} onChange={() => onChange(label)} />
      <span className='font-light select-none'>{label}</span>
    </div>
  </label>
);

const RadioButton = ({ label, selected = false, onChange = () => {} }) => (
  <label className='block w-full mt-2 text-sm cursor-pointer'>
    <div className='flex gap-3 items-center'>
      <input type='radio' checked={selected} onChange={(e) => onChange(e.target.checked, label)} />
      <span className='font-light select-none'>{label}</span>
    </div>
  </label>
);

function Rooms() {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    roomTypes: [],
    priceRanges: [],
    sortBy: ''
  });

  const roomType = ['Single Bed', 'Double Bed', 'Luxury Room', 'Family Suite'];
  const priceRanges = ['0 to 500', '500 to 1000', '1000 to 2000', '2000 to 3000'];
  const sortOptions = ['Price Low to High', 'Price High to Low', 'Newest First'];

  const toggleFilter = (category, label) => {
    setSelectedFilters(prev => {
      const updated = prev[category].includes(label)
        ? prev[category].filter(item => item !== label)
        : [...prev[category], label];
      return { ...prev, [category]: updated };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({ roomTypes: [], priceRanges: [], sortBy: '' });
  };

  const handleSort = (checked, label) => {
    if (checked) setSelectedFilters(prev => ({ ...prev, sortBy: label }));
  };

  return (
    <div className='pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 relative'>
      {/* Mobile Filter Toggle */}
      <div className='lg:hidden mb-4 text-right'>
        <button className='text-sm text-blue-600 underline' onClick={() => setOpenFilter(true)}>
          Show Filter
        </button>
      </div>

      {/* Mobile Filter Drawer */}
      {openFilter && (
        <div className='absolute top-0 left-0 w-full z-40'>
          <div className='absolute inset-0 bg-black bg-opacity-30' onClick={() => setOpenFilter(false)}></div>

          <div className='relative bg-white p-5 max-h-[90vh] overflow-y-auto rounded-b-xl shadow-xl z-50 w-full sm:w-[90%] mx-auto'>
            <div className='flex justify-between items-center mb-4'>
              <p className='text-base font-medium'>Filter</p>
              <div className='flex gap-4 text-sm'>
                <button onClick={clearFilters} className='text-red-600'>Clear</button>
                <button onClick={() => setOpenFilter(false)} className='text-blue-600'>Close</button>
              </div>
            </div>

            <div className='mb-4'>
              <p className='font-medium text-grey-800 pb-2'>Popular Filters</p>
              {roomType.map((room, index) => (
                <CheckBox
                  key={index}
                  label={room}
                  selected={selectedFilters.roomTypes.includes(room)}
                  onChange={(label) => toggleFilter('roomTypes', label)}
                />
              ))}
            </div>

            <div className='mb-4'>
              <p className='font-medium text-grey-800 pb-2'>Price Range</p>
              {priceRanges.map((range, index) => (
                <CheckBox
                  key={index}
                  label={`$ ${range}`}
                  selected={selectedFilters.priceRanges.includes(`$ ${range}`)}
                  onChange={(label) => toggleFilter('priceRanges', label)}
                />
              ))}
            </div>

            <div className='mb-2'>
              <p className='font-medium text-grey-800 pb-2'>Sort By</p>
              {sortOptions.map((option, index) => (
                <RadioButton
                  key={index}
                  label={option}
                  selected={selectedFilters.sortBy === option}
                  onChange={handleSort}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='flex-1'>
          <div className='flex flex-col items-start text-left'>
            <h1 className='title-style'>Hotel Rooms</h1>
            <p className='title-style text-grey-500/90 max-w-174'>
              Take advantage of our limited time offer and special packages to enhance your stay and create unforgettable memories
            </p>
          </div>

          {roomsDummyData.map((room) => (
            <div
              key={room._id}
              className='flex flex-col md:flex-row items-start gap-6 py-10 border-b border-grey-300 last:pb-30 last:border-0'
            >
              <img
                src={room.images?.[0] || 'fallback.jpg'}
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                title='View Room Details'
                className='max-h-65 md:w-1/2 shadow-lg object-cover cursor-pointer rounded'
              />
              <div className='md:w-1/2 flex flex-col gap-0'>
                <p className='text-grey-500'>{room.hotel.city}</p>
                <p
                  className='text-grey-800 text-3xl title-style cursor-pointer'
                  onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    scrollTo(0, 0);
                  }}
                >
                  {room.hotel.name}
                </p>
                <div className='flex gap-2'>
                  <StarRating />
                  <p>200+ reviews</p>
                </div>
                <div className='flex gap-1 items-center text-grey-500 text-sm'>
                  <img src={assets.locationFilledIcon} alt='location' />
                  <span>{room.hotel.address}</span>
                </div>
                <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                  {room.amenities.map((item, index) => (
                    <div key={index} className='flex gap-2 px-2 pt-3 rounded-lg bg-[#a8a29e]/70'>
                      <img src={facilityIcons[item]} className='w-5 h-5' alt={item} />
                      <p className='text-xs'>{item}</p>
                    </div>
                  ))}
                  <div>${room.pricePerNight}/Night</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Sidebar Filter */}
        <div className='hidden lg:block bg-white w-80 max-h-[80vh] overflow-y-auto border border-grey-300 text-grey-800 mt-16 rounded-xl shadow-sm'>
          <div className='flex justify-between px-5 py-2.5 border-b border-grey-300'>
            <p className='text-base font-medium text-grey-800'>FILTER</p>
            <span className='text-xs cursor-pointer' onClick={clearFilters}>CLEAR</span>
          </div>

          <div className='px-5 pt-5'>
            <p className='font-medium text-grey-800 pb-2'>Popular Filters</p>
            {roomType.map((room, index) => (
              <CheckBox
                key={index}
                label={room}
                selected={selectedFilters.roomTypes.includes(room)}
                onChange={(label) => toggleFilter('roomTypes', label)}
              />
            ))}
          </div>

          <div className='px-5 pt-5'>
            <p className='font-medium text-grey-800 pb-2'>Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckBox
                key={index}
                label={`$ ${range}`}
                selected={selectedFilters.priceRanges.includes(`$ ${range}`)}
                onChange={(label) => toggleFilter('priceRanges', label)}
              />
            ))}
          </div>

          <div className='px-5 pt-5 pb-4'>
            <p className='font-medium text-grey-800 pb-2'>Sort By</p>
            {sortOptions.map((option, index) => (
              <RadioButton
                key={index}
                label={option}
                selected={selectedFilters.sortBy === option}
                onChange={handleSort}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
