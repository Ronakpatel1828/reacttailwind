import React from 'react'
import aboutimg from '../src/assets/about-image.webp'
import { Link } from 'react-router-dom'

const Bannerbottom = () => {
  return (
    <div className='container md:py-20 py-10 px-3 mx-auto flex md:flex-row flex-col gap-10'>
        <div className='basis-5/12'>
            <img src={aboutimg}  />
        </div>
        <div className='basis-7/12'>
              <div className='text-[18px] text-blue font-medium uppercase mb-[10px]'><span className='mr-[10px] text-[#DA3850] after:content-[">>>"]'></span>Know About Us</div>
              <h2 className='text-black font-bold lg:text-[36px] lg:leading-[43px] md:text-[30px] md:leading-[37px] text-[24px] leading-[31px] mb-[20px]'>Know About Thought Glow Learning Platform</h2>
              <p className='text-[14px] leading-[24px] text-[#575757]'>At Thought Glow, our mission is to illuminate the paths of aspiring individuals and seasoned professionals alike, empowering them with cutting-edge knowledge and practical skills in programming languages, data structures, and algorithms. Through our innovative online training platform, we strive to cultivate a community of lifelong learners dedicated to continuous growth and excellence in their careers. With a commitment to personalized guidance and top-tier resources, we aim to be the beacon guiding every individual towards their brightest future.</p>
              <ul className='grid sm:grid-cols-2 gap-3 mt-[25px] text-[14px] leading-[24px]'>
                <li className='relative pl-[30px]'><svg xmlns="http://www.w3.org/2000/svg" className='absolute left-[0px] fill-[#DA3850]' width='25px' height='25px' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg> Online Courses</li>
                <li className='relative pl-[30px]'><svg xmlns="http://www.w3.org/2000/svg" className='absolute left-[0px] fill-[#DA3850]' width='25px' height='25px' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg> Expert Instructor</li>
                <li className='relative pl-[30px]'><svg xmlns="http://www.w3.org/2000/svg" className='absolute left-[0px] fill-[#DA3850]' width='25px' height='25px' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg> Focus on core concepts</li>
                <li className='relative pl-[30px]'><svg xmlns="http://www.w3.org/2000/svg" className='absolute left-[0px] fill-[#DA3850]' width='25px' height='25px' viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg> Courses offered: Python, Data Structure & Algo</li>
              </ul>
              <div className='mt-10'>
                <Link to="/about-us" className='p-2 px-5 text-white rounded bg-blue inline-block hover:bg-black hover:text-white'>Read About Us</Link>
              </div>
        </div>
    </div>
  )
}

export default Bannerbottom
