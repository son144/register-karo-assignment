import Image from 'next/image'
import React from 'react'
import logo from "../../images/Group (2).png"
import { RiArrowDownSLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import NavMobile from './NavMobile';


export const Header = () => {
  return (
  <>
    <div className='sm:flex items-center hidden w-[80%] m-auto  justify-between'>
        <div>
            <Image src={logo} alt='img'/>
        </div>
        <div className='text-[#393939] text-base  flex items-center gap-x-10'>
        <div className='flex items-center'>
            <p>Workspace & Services</p>
            <div><RiArrowDownSLine className='text-xl'/></div>
        </div>
        <p>Get started</p>
        <div className='flex items-center'>
            <p>More</p>
            <div><RiArrowDownSLine className='text-xl'/></div>
        </div>
        <p>Help</p>
        </div>
        <div className='flex items-center gap-8'>
            <div className='flex items-center gap-6'>
            <div><FaPhoneAlt /></div>
            <div className='border-l-2 border-l-[#DCDCDC] h-[40px]'></div>
            <div><FaUserAlt /></div> 
            </div>
            <button className='bg-primary text-white font-semibold text-sm rounded-full px-6 py-2.5'>ENQUIRE NOW</button>
        </div>
    </div>
    <NavMobile/>
  </>
  )
}
