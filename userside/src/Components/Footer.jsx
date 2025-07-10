import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import './style.css'

function Footer() {
    return (
        <div>
            <div className=' bg-[#F3F6FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
                <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                    <div className='max-w-80'>


                        <Link to={'/'} className='text-decoration-none'>
                            <div className="d-flex fs-3 linkStyle " style={{ color: 'black', }}>
                                <i class="fa-solid fa-house "></i>
                                <h3>StayMate</h3>
                            </div>
                        </Link>
                        <p className='text-sm'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        </p>
                        <div className='flex items-center gap-3 mt-4'>


                            <img src={assets.instagramIcon} alt="" className='w-6' />
                            <img src={assets.facebookIcon} alt="" className='w-6' />
                            <img src={assets.twitterIcon} alt="" className='w-6' />
                            <img src={assets.linkendinIcon} alt="" className='w-6' />

                        </div>
                    </div>

                    <div>
                        <p className='text-lg text-gray-800  title-style'>COMPANY</p>
                        <ul className='mt-3 flex flex-col gap-2 text-sm'>
                            <li><a href="#"  className='text-decoration-none text-secondary'>About</a></li>
                            <li><a href="#"  className='text-decoration-none text-secondary'>Careers</a></li>
                            <li><a href="#"  className='text-decoration-none text-secondary'>Press</a></li>
                            <li><a href="#"  className='text-decoration-none text-secondary'>Blog</a></li>
                            <li><a href="#"  className='text-decoration-none text-secondary'>Partners</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className='text-lg text-gray-800 title-style'>SUPPORT</p>
                        <ul className='mt-3 flex flex-col gap-2 text-sm'>
                            <li><a href="#" className='text-decoration-none text-secondary'>Help Center</a></li>
                            <li><a href="#"  className='text-decoration-none text-secondary'>Safety Information</a></li>
                            <li><a href="#"  className='text-decoration-none text-secondary'>Cancellation Options</a></li>
                            <li><a href="#"  className='text-decoration-none text-secondary'>Contact Us</a></li>
                            <li><a href="#"  className='text-decoration-none text-secondary'>Accessibility</a></li>
                        </ul>
                    </div>

                    <div className='max-w-80'>
                        <p className='text-lg text-gray-800 title-style'>STAY UPDATED</p>
                        <p className='mt-3 text-sm'>
                            Subscribe to our newsletter for inspiration and special offers.
                        </p>
                        <div className='flex items-center mt-4'>
                            <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                            <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                                {/* Arrow icon */}
                                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className='border-gray-300 mt-8' />
                <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                    <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
                    <ul className='flex items-center gap-4'>
                        <li><a href="#" className='text-decoration-none text-secondary'>Privacy</a></li>
                        <li><a href="#" className='text-decoration-none text-secondary'>Terms</a></li>
                        <li><a href="#" className='text-decoration-none text-secondary'>Sitemap</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
