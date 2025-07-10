import React from 'react'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'

function Testmonial() {

    return (
        <>
            <div className='mt-5 p-5'>
                <div>
                    <h1 className='title-style text-center'>
                        What Our Users Say
                    </h1>
                    <p className='title-style text-center max-w-2xl mx-auto'>
                        Discover Why Scerning Travellers Always Choose StayMate For Thier Exclusive And Laxuares accomodation Around The Word
                    </p>
                </div>






               

                    <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow max-w-xs">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                          <StarRating/>
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>




            </div>
        </>
    )
}

export default Testmonial
