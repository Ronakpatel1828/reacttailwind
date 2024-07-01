import React from 'react'
import bannerimg from '../src/assets/slider-image.webp';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='flex items-center px-3 md:py-16 py-10 bg-gray-light'>
      <div className='container px-3 mx-auto flex md:flex-row flex-col-reverse items-center md:gap-32 justify-between'>
          <div className='md:basis-1/2 md:mt-0 mt-5'>
              <h1 className='lg:text-[48px] md:text-[36px] md:leading-[42px] lg:leading-[53px] text-[30px] md:leading-[38px] font-montserrat font-semibold mb-5'>Build The Skills To Elevate Your Programming Career</h1>
              <p>With the surge of startups and unicorns, the demand for programmers in India is skyrocketing. Now is the perfect time to learn programming and launch your career, whether you're a student or already in the tech industry but not yet programming. Join our live session to discover how to embark on this exciting journey.</p>
              <div className='mt-4'>
                <Link to="/about" className='p-2 px-5 text-white rounded bg-blue inline-block hover:bg-black hover:text-white'>Start Now</Link>
              </div>
          </div>
          <div className='bannerimg md:basis-1/2'>
              <img src={bannerimg} className='rounded-[20px] ml-auto' />
          </div>
      </div>
    </div>
  )
}

export default Banner
