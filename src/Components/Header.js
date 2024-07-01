import React, { useState } from 'react'
import logoimg from '../assets/logo.webp'
import { Link } from 'react-router-dom'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  }

  const closeMenu = () =>{
    setIsOpen(false);
  }

  return (
    <>
    <div className='p-3 bg-blue'>
      <div className='container px-3 flex md:justify-between justify-center items-center mx-auto'>
          <div className='emailid'>
              <Link to='mailto:info@thoughtglow.com' className='text-white font-montserrat text-[14px] flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width='14px' height="14px" viewBox="0 0 512 512"><path className='fill-white' d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg> info@thoughtglow.com</Link>
          </div>
          <div className='socialiconsheader md:block hidden'>
              <ul className='headersocialicons flex gap-4'>
                <li><Link to='#'><svg xmlns="http://www.w3.org/2000/svg" width='18px' height='18px' viewBox="0 0 320 512"><path className='fill-white' d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></Link></li>
                <li><Link to='#'><svg xmlns="http://www.w3.org/2000/svg" width='18px' height='18px' viewBox="0 0 448 512"><path className='fill-white' d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></Link></li>
                <li><Link to='#'><svg xmlns="http://www.w3.org/2000/svg" width='18px' height='18px' viewBox="0 0 512 512"><path className='fill-white' d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg></Link></li>
                <li><Link to='#'><svg xmlns="http://www.w3.org/2000/svg" width='18px' height='18px' viewBox="0 0 448 512"><path className='fill-white' d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></Link></li>
              </ul>
          </div>
      </div>
    </div>
    <header className='p-3 sticky top-0 bg-white z-10 border-b border-[#ededed]'>
      <div className='container px-3 mx-auto grid md:grid-cols-4 grid-cols-3 gap-4'>
          <div className='headerlogo'>
            <Link to='/'><img src={logoimg} className='h-16 object-contain'/></Link>
          </div>
          <div className='mobileMenu lg:hidden justify-end items-center md:col-span-3 col-span-2 text-end flex'>
          <Link to="https://learn.thoughtglow.com/" target='_blank' className='text-white rounded mr-3 text-[15px] block lg:hidden font-montserrat p-3 bg-blue hover:bg-black' onClick={closeMenu}>My Accounts</Link>
          <button onClick={toggleMenu} className={`${isOpen ? 'openmenu' : ''} text-black block lg:hidden`}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          </div>
          <div className={`${isOpen ? 'd-block' : 'hidden'} headernavdiv md:col-span-3 col-span-2 lg:flex justify-end items-center`}>
              <nav>
                <ul className='lg:flex gap-[40px] items-center'>
                  <li><Link to="/" className='text-black hover:text-blue active:text-blue font-medium text-[15px] font-montserrat' onClick={closeMenu}>Home</Link></li>
                  <li><Link to="/about-us" className='text-black hover:text-blue active:text-blue font-medium text-[15px] font-montserrat' onClick={closeMenu}>About</Link></li>
                  <li><Link to="/about" className='text-black hover:text-blue active:text-blue font-medium text-[15px] font-montserrat' onClick={closeMenu}>Webinar</Link></li>
                  <li><Link to="/about" className='text-black hover:text-blue active:text-blue font-medium text-[15px] font-montserrat' onClick={closeMenu}>Blog</Link></li>
                  <li><Link to="/about" className='text-black hover:text-blue active:text-blue font-medium text-[15px] font-montserrat' onClick={closeMenu}>Contact Us</Link></li>
                  <li><Link to="https://learn.thoughtglow.com/" target='_blank' className='text-white rounded text-[15px] font-montserrat p-3 bg-blue hover:bg-black lg:block hidden' onClick={closeMenu}>My Accounts</Link></li>
                </ul>
              </nav>
          </div>
      </div>
    </header>
    </>
  )
}

export default Header
