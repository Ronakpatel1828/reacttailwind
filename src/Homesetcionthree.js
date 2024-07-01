import React from 'react'
import icon1 from './assets/icon-video-lecture.svg'
import icon2 from './assets/icon-flexible-classes.svg'
import icon3 from './assets/icon-affordable-pricing.svg'
import icon4 from './assets/icon-expert-trainers.svg'

const Homesetcionthree = () => {
  return (
    <div className='commoncontainerclasses'>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-5'>
            <div className='rounded-[5px] bg-[rgba(79,93,245,0.08)] p-5 py-7 border-b-[4px] border-[#4F5DF5] hover:border-[#DA3850] text-center'>
                <div className='w-[90px] h-[90px] rounded-[50%] bg-[rgba(79,93,245,0.1)] mx-auto flex items-center justify-center md:mb-[40px] mb-[20px]'>
                  <img src={icon1} className='w-[60px] h-[60px]' alt='Video Lecture' />
                </div>
                <div className='text-black font-medium text-[18px] leading-[22px] mb-[15px]'>Video Lecture</div>
                <p className='text-[14px] leading-[24px] text-[#575757]'>Experience the future of learning with Thought Glow's dynamic video lectures. Our meticulously crafted video content transcends traditional boundaries, offering you unparalleled flexibility to learn from anywhere.</p>
            </div>
            <div className='rounded-[5px] bg-[rgba(218,56,80,0.05)] p-5 py-7 border-b-[4px] border-[#4F5DF5] hover:border-[#DA3850] text-center'>
                <div className='w-[90px] h-[90px] rounded-[50%] bg-[rgba(218,56,80,0.1)] mx-auto flex items-center justify-center md:mb-[40px] mb-[20px]'>
                  <img src={icon2} className='w-[60px] h-[60px]' alt='Flexible Classes' />
                </div>
                <div className='text-black font-medium text-[18px] leading-[22px] mb-[15px]'>Flexible Classes</div>
                <p className='text-[14px] leading-[24px] text-[#575757]'>We offer a class structure designed to fit seamlessly into your life. Whether you're juggling work commitments, family responsibilities, or other obligations, our class timing and pace options ensure that you can pursue your educational goals without compromise.</p>
            </div>
            <div className='rounded-[5px] bg-[rgba(26,182,157,.07)] p-5 py-7 border-b-[4px] border-[#4F5DF5] hover:border-[#DA3850] text-center'>
                <div className='w-[90px] h-[90px] rounded-[50%] bg-[rgba(26,182,157,.09)] mx-auto flex items-center justify-center md:mb-[40px] mb-[20px]'>
                  <img src={icon3} className='w-[60px] h-[60px]' alt='Affordable Pricing' />
                </div>
                <div className='text-black font-medium text-[18px] leading-[22px] mb-[15px]'>Affordable Pricing</div>
                <p className='text-[14px] leading-[24px] text-[#575757]'>At Thought Glow, we believe that quality education should be accessible to everyone. That's why we've made it our mission to offer affordable pricing options that fit every budget.</p>
            </div>
            <div className='rounded-[5px] bg-[rgba(241,245,235,0.7)] p-5 py-7 border-b-[4px] border-[#4F5DF5] hover:border-[#DA3850] text-center'>
                <div className='w-[90px] h-[90px] rounded-[50%] bg-[rgba(222,227,213,1)] mx-auto flex items-center justify-center md:mb-[40px] mb-[20px]'>
                  <img src={icon4} className='w-[60px] h-[60px]' alt='Expert Trainers' />
                </div>
                <div className='text-black font-medium text-[18px] leading-[22px] mb-[15px]'>Expert Trainers</div>
                <p className='text-[14px] leading-[24px] text-[#575757]'>You'll be guided by an instructor with extensive experience at renowned companies such as Microsoft, Amazon, and numerous startups across India and the USA.</p>
            </div>
        </div>
    </div>
  )
}

export default Homesetcionthree
