import React from 'react'
import img1 from "../../images/platform_icon.svg.png"
import img2 from "../../images/expert_icon.svg.png"
import img3 from "../../images/workspace_icon.svg fill.png"
import img4 from "../../images/virtual_icon.svg.png"
import img5 from "../../images/membership_icon.svg.png"
import img6 from "../../images/app_icons.svg fill.png"


import Image from 'next/image'
import { HiArrowLongRight } from "react-icons/hi2";


const FeatureCard = () => {
  return (
<div className='grid sm:grid-cols-4 grid-cols-1 gap-x-6 gap-y-6 w-[90%]  m-auto py-7'>
      <div className=' border-2 border-[#EEF0F2] rounded-lg w-fit flex gap-6 items-center h-fit py-3 px-5 '>
        <div className=' w-[98px]  '>
           <Image src={img1} alt='img' className='w-full h-full object-contain'/>
        </div>
        <div className='flex flex-col sm:gap-8 gap-4 text-2xl font-medium '>
         <div>
         <h5 className='text-primary sm:text-2xl text-xl'>Our solutions</h5>
         <div className='w-[50%] border-b-2 border-b-[#393939] h-2'></div>
         </div>
            <p className='text-[#616161] text-sm'>Browse our full range of products and services</p>
            <div><HiArrowLongRight className='text-primary'/></div>
        </div>
    </div>
    <div className=' border-2 border-[#EEF0F2] rounded-lg w-fit flex gap-6 items-center h-fit py-3 px-5 '>
        <div className=' w-[98px] h '>
           <Image src={img2} alt='img' className='w-full h-full object-contain'/>
        </div>
        <div className='flex flex-col sm:gap-8 gap-4  text-2xl font-medium '>
         <div>
         <h5 className='text-primary sm:text-2xl text-xl'>Talk to us</h5>
         <div className='w-[50%] border-b-2 border-b-[#393939] h-2'></div>
         </div>
            <p className='text-[#616161] text-sm'>Get advice from one of our
            experts 24/7</p>
            <div><HiArrowLongRight className='text-primary'/></div>
        </div>
    </div>
    <div className=' border-2 border-[#EEF0F2] rounded-lg w-fit flex gap-6 items-center h-fit py-3 px-5 '>
        <div className=' w-[98px] h '>
           <Image src={img3} alt='img' className='w-full h-full object-contain'/>
        </div>
        <div className='flex flex-col sm:gap-8 gap-4  text-2xl font-medium '>
         <div>
         <h5 className='text-primary sm:text-2xl text-xl'>Book workspace</h5>
         <div className='w-[50%] border-b-2 border-b-[#393939] h-2'></div>
         </div>
            <p className='text-[#616161] text-sm'>Book meeting rooms and
            day offices now</p>
            <div><HiArrowLongRight className='text-primary'/></div>
        </div>
    </div>
    <div className=' border-2 border-[#EEF0F2] rounded-lg w-fit flex gap-6 items-center h-fit py-3 px-5 '>
        <div className=' w-[98px] h '>
           <Image src={img4} alt='img' className='w-full h-full object-contain'/>
        </div>
        <div className='flex flex-col gap-4 text-2xl font-medium '>
         <div>
         <h5 className='text-primary sm:text-2xl text-xl'>Set up a virtual office</h5>
         <div className='w-[50%] border-b-2 border-b-[#393939] h-2'></div>
         </div>
            <p className='text-[#616161] text-sm'>Start building a real
            presence today</p>
            <div><HiArrowLongRight className='text-primary'/></div>
        </div>
    </div>
    <div className=' border-2 border-[#EEF0F2] rounded-lg w-fit flex gap-6 items-center h-fit py-3 px-5 '>
        <div className=' w-[98px] h '>
           <Image src={img5} alt='img' className='w-full h-full object-contain'/>
        </div>
        <div className='flex flex-col gap-4 text-2xl font-medium '>
         <div>
         <h5 className='text-primary sm:text-2xl text-xl'>Buy a Membership</h5>
         <div className='w-[50%] border-b-2 border-b-[#393939] h-2'></div>
         </div>
            <p className='text-[#616161] text-sm'>Access thousands of
            locations on demand</p>
            <div><HiArrowLongRight className='text-primary'/></div>
        </div>
    </div>
    <div className=' border-2 border-[#EEF0F2] rounded-lg w-fit flex gap-6 items-center h-fit py-3 px-5 '>
        <div className=' w-[98px] h '>
           <Image src={img6} alt='img' className='w-full h-full object-contain'/>
        </div>
        <div className='flex flex-col sm:gap-8 gap-4  text-2xl font-medium '>
         <div>
         <h5 className='text-primary sm:text-2xl text-xl'>Explore our app</h5>
         <div className='w-[50%] border-b-2 border-b-[#393939] h-2'></div>
         </div>
            <p className='text-[#616161] text-sm'>Download our app and get
            started today</p>
            <div><HiArrowLongRight className='text-primary'/></div>
        </div>
    </div>
   

    
    </div>

  )
}

export default FeatureCard



