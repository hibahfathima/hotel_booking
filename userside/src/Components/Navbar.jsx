import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {assets} from "../assets/assets"
import { useClerk, useUser ,UserButton} from "@clerk/clerk-react";
import { useState } from "react";



const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/' },
        { name: 'About', path: '/' },
    ];

   
    const [isScrolled, setIsScrolled] =useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const {openSignIn}=useClerk()
    const {user}=useUser()

    const navigate=useNavigate()
    const location=useLocation()

    const BookIcon=()=>{
         <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
    }

   useEffect(() => {
    if(location.pathname !=='/'){
        setIsScrolled(true)
    }
    else{
        setIsScrolled(false)
    }
    setIsScrolled(prev=>location.pathname !=='/'? true:false)
    
        const handleScroll = () => {
            setIsScrolled(window.scrollY> 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
       
            <nav className={`fixed top-0 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <Link to={'/'} style={{textDecoration:'none'}}>
               
                  <div className="d-flex fs-3 linkStyle " style={{color:'black',}}>
                    <i class="fa-solid fa-house "></i>
                    <h3>StayMate</h3>
                  </div>
                  
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8" >
                    {navLinks.map((link, i) => (
                        <a style={{textDecoration:'none',color:'black'}} key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                    <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all btn btn-rounded`}
                    onClick={()=>navigate('/owner')}>
                       Dashboard
                    </button>
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                   <img src={assets.searchIcon} alt="Search" className={`${isScrolled && 'invert'}`}/>
                  
                  {
                    user?
                    (<UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label="My Bookings" labelIcon={<BookIcon/>} onClick={()=>navigate('/my-bookings')}/>
                        </UserButton.MenuItems>
                    </UserButton>

                    )
                    :
                    (  <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500 btn btn-rounded">
                        Login
                    </button>)
                  }
                  
                  
                  
                </div>
                
                   

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                   <img onClick={()=>setIsMenuOpen(!isMenuOpen)} src={assets.menuIcon} alt="" className={`${isScrolled && 'invert'}`}/>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                       <img src={assets.closeIcon} className="h-6.5" alt="" />
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}
{
    user &&
    <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all btn btn-rounded" onClick={()=>navigate('/owner')}>
                        Dashboard
                    </button>

}
                    
                    {
                        user?
                        (<UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label="My Bookings" labelIcon={<BookIcon/>} onClick={()=>navigate('/my-bookings')}/>
                        </UserButton.MenuItems>
                    </UserButton>):
                        ( <button  onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500 btn btn-rounded">
                        Login
                    </button>)
                    }

                   
                </div>
            </nav>
       
    );
}
export default Navbar