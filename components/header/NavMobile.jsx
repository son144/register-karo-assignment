import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Image from 'next/image'
import React from 'react'
import logo from "../../images/header-logo.88445946 1.png"
import { RiArrowDownSLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const NavMobile = () => {
    return (
        <div className='flex items-center w-[90%] m-auto   py-2 justify-between sm:hidden'>
            <div>
                <Image src={logo} alt='img'/>
            </div>
            <div className='flex items-center gap-8'>
                <div className='flex items-center gap-6'>
                    <div><FaPhoneAlt /></div>
                    <div><FaUserAlt /></div>
                    <div><HiOutlineMenuAlt1 className="text-2xl" /></div>
                </div>
                {/* <button className='bg-primary text-white font-semibold text-sm rounded-full px-6 py-2.5'>ENQUIRE NOW</button> */}
            </div>
        </div>
    )
}

export default NavMobile