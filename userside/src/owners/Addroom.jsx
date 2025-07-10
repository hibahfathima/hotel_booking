import React, { useState } from 'react';
import '../Components/style.css';
import { assets } from '../assets/assets';

function Addroom() {
  const [images, setImage] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [input, setInput] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free Wifi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'mountain View': false,
      'Pool Acess': false,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Room Data:', input);
    console.log('Images:', images);
    // Add your submit logic here (API call, state save, etc.)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="title-style" align="left">Add Room</h1>
        <p className="max-w-xl">
          Fill in the details carefully and accurate room details, pricing and amenities to enhance user booking experience
        </p>

        {/* Upload area for images */}
        <p className="text-gray-800 mt-10">Images</p>
        <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
          {Object.keys(images).map((key) => (
            <label key={key} htmlFor={`roomImage${key}`}>
              <img
                src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
                alt=""
                className="max-h-13 cursor-pointer opacity-80"
              />
              <input
                type="file"
                accept="image/*"
                id={`roomImage${key}`}
                hidden
                onChange={(e) => setImage({ ...images, [key]: e.target.files[0] })}
              />
            </label>
          ))}
        </div>

        {/* Room Type & Price */}
        <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
          <div className="flex-1 max-w-48">
            <p className="text-gray-800 mt-4">Room Type</p>
            <select
              value={input.roomType}
              className="border border-gray-300 mt-1 rounded p-2 w-full opacity-70"
              onChange={(e) => setInput({ ...input, roomType: e.target.value })}
            >
              <option value="">Select Room Type</option>
              <option value="Single Bed">Single Bed</option>
              <option value="Double Bed">Double Bed</option>
              <option value="Luxuary Room">Luxuary Room</option>
              <option value="Family Suit">Family Suit</option>
            </select>
          </div>
          <div>
            <p className="text-gray-500 mt-4">
              Price <span className="text-xs">/night</span>
            </p>
            <input
              type="number"
              className="border border-gray-300 mt-1 rounded p-2 w-24"
              value={input.pricePerNight}
              onChange={(e) => setInput({ ...input, pricePerNight: e.target.value })}
            />
          </div>
        </div>

        {/* Amenities */}
        <p className="mt-4 text-gray-800">Amenities</p>
        <div className="flex flex-col flex-wrap max-w-sm text-gray-500 mt-1">
          {Object.keys(input.amenities).map((amenity, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={`amenities${index + 1}`}
                checked={input.amenities[amenity]}
                onChange={(e) =>
                  setInput({
                    ...input,
                    amenities: {
                      ...input.amenities,
                      [amenity]: !input.amenities[amenity],
                    },
                  })
                }
              />
              <label htmlFor={`amenities${index + 1}`}> {amenity}</label>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer"
        >
          Add Room
        </button>
      </form>
    </div>
  );
}

export default Addroom;
