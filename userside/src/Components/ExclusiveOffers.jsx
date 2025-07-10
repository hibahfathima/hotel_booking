import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { exclusiveOffers } from '../assets/assets';


function ExclusiveOffers() {
  return (
    <>
      <div style={{ backgroundColor: '#f5f5f4' }} className='mt-5 p-5'>
        <div className=' mx-5 flex flex-col md:flex-row items-center justify-between'>
          <div className='w-1/2 sm:text-center md:text-left '>
            <h1 className='title-style'>Exclusive Offers</h1>
            <p className='title-style '>
              Take advantage of our limited time offers and packages to enhance your stay and create ungorgottable memories
            </p>
          </div>
          <div className='w-1/2 flex justify-end'>
            <button>View All Offers <i className="fa-solid fa-arrow-right-long"></i></button>
          </div>
        </div >


        <div className='m-5 rounded-md flex justify-center gap-10 ' >
          <div className="row">

            {
              exclusiveOffers.map((item) => (
                <div className="col-md-4 mt-3">
                  <Card style={{ width: '18rem' }} key={item._id}>
                    <div className='h-64 w-full flex flex-col text-white rounded-md   bg-cover bg-center h-64 w-full p-3' style={{ backgroundImage: `url(${item.image})` }}>
                      <span className="bg-white text-black text-xs px-2 py-1 w-fit rounded">{item.priceOff}%</span>
                      <h5 className='title-style text-lg font-semibold mt-4'>{item.title}</h5>
                      <p className='title-style text-sm'>{item.description}</p>
                      <p className='title-style text-xs mt-1 text-gray-200'>{item.expiryDate}</p>
                      <button className="mt-auto text-sm underline flex items-center gap-1 text-decoration-none">View Offers <i className="fa-solid fa-arrow-right-long"></i></button>
                    </div>
                  </Card>
                </div>
              ))
            }



          </div>

        </div>
      </div>
    </>
  )
}

export default ExclusiveOffers
