import React from 'react'
import Image from 'next/image'
import image1 from "../../images/office.png"
import { IoCalendarSharp } from "react-icons/io5";
import Carousel from '../carousel/Carousel';
import { FiSearch } from "react-icons/fi";
import indFlag from "../../images/flag_usa.png.png"
import { BsPeople } from "react-icons/bs";
import img2 from "../../images/Picture → Office_Space_Card_Stacked_2.png.png"
import img3 from "../../images/Picture → Office_Space_Card_Stacked_3.png.png"
import img4 from "../../images/Picture → Office_Space_Card_Stacked_4.png.png"



const WorkspaceCard = () => {
    return (
        <div className='bg-[#F5F5F5] pt-10 pb-8'>
            <div className=' w-[85%] m-auto'>
                <div className='flex sm:flex-row flex-col gap-y-5 sm:justify-between'>
                    <h2 className='text-3xl sm:font-semibold font-medium'>Flexible workspace designed around your needs</h2>
                    <div className='flex flex-col gap-y-3'>
                        <div className='flex items-center gap-4'>
                            <div className='h-6 w-6 '><Image src={indFlag} className='rounded-full h-full w-full object-contain' /></div>
                            <p>Prices for India</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div><FiSearch className='text-xl' /></div>
                            <p className='underline'>Search for a city or area to refine pricing</p>
                        </div>
                    </div>
                </div>
                <div className='border border-[#D7D7D7] sm:flex hidden  text-xl text-[#616161] bg-white rounded-full mt-8'>
                    <div className=' bg-[#4CAF50] text-white px-4 py-2 w-[25%] text-center rounded-full'>Office Space</div>
                    <div className=' w-[25%] text-center rounded-full py-2'>Coworking</div>
                    <div className=' w-[25%] text-center rounded-full py-2'>Virtual Offices</div>
                    <div className=' w-[25%] text-center rounded-full py-2'>Meeting rooms</div>
                </div>
                <p className='text-[16px] text-[#393939] sm:my-7 my-4'>Our flexible, fully-customisable office rentals are available by the hour, day, or as long as you need.</p>

                <div className='sm:grid grid-cols-4 gap-6 hidden'>
                    <div className='bg-white '>
                        <div className='w-[100%]'>
                            <Image src={image1} className='w-full object-contain' />
                        </div>
                        <div className='p-3'>
                            <h5 className='text-lg'>Private offices</h5>
                            <p className='text-sm mt-2'>A range of ready-to-use, fully equipped
                                offices with everything you need to get everything you need to get
                                started .</p>
                            <div className='flex items-center my-4 gap-2'>
                                <div><IoCalendarSharp /></div>
                                <p className='text-[#616161] text-sm'>By month or year</p>
                            </div>
                            <div className='flex items-center my-4 gap-2'>
                                <div><BsPeople /></div>
                                <p className='text-[#616161] text-sm'>Teams of any size</p>
                            </div>
                            <p className='text-[#008385] text-lg'>From $ 89 per person per month</p>
                            <div className='flex items-center gap-4 mt-4'>
                                <button className='bg-primary text-white px-6  py-1 rounded-3xl'>Get a quote</button>
                                <button className='border border-primary text-primary px-6  py-1 rounded-3xl'>Learn more</button>

                            </div>
                        </div>
                    </div>
                    <div className='bg-white '>
                        <div className='w-[100%]'>
                            <Image src={img2} className='w-full object-contain' />
                        </div>
                        <div className='p-3'>
                            <h5 className='text-lg'>Custom Offices</h5>
                            <p className='text-sm mt-2'>When off-the-shelf simply isn't
                                enough. Customise all aspects of your
                                space, including furniture and branding.</p>
                            <div className='flex items-center my-4 gap-2'>
                                <div><IoCalendarSharp /></div>
                                <p className='text-[#616161] text-sm'>By month or year</p>
                            </div>
                            <div className='flex items-center my-4 gap-2'>
                                <div><BsPeople /></div>
                                <p className='text-[#616161] text-sm'>Teams of any size</p>
                            </div>
                            <p className='text-[#008385] text-lg'>From $ 89 per person per month</p>
                            <div className='flex items-center gap-4 mt-4'>
                                <button className='bg-primary text-white px-6  py-1 rounded-3xl'>Get a quote</button>
                                <button className='border border-primary text-primary px-6  py-1 rounded-3xl'>Learn more</button>

                            </div>
                        </div>
                    </div>
                    <div className='bg-white '>
                        <div className='w-[100%]'>
                            <Image src={img3} className='w-full object-contain' />
                        </div>
                        <div className='p-3'>
                            <h5 className='text-lg'>Day Offices</h5>
                            <p className='text-sm mt-2'>A professional on-demand office
                                space. Perfect when you need to get
                                your head down and do your best work.</p>
                            <div className='flex items-center my-4 gap-2'>
                                <div><IoCalendarSharp /></div>
                                <p className='text-[#616161] text-sm'>By month or year</p>
                            </div>
                            <div className='flex items-center my-4 gap-2'>
                                <div><BsPeople /></div>
                                <p className='text-[#616161] text-sm'>Teams of any size</p>
                            </div>
                            <p className='text-[#008385] text-lg'>From $ 25 per day</p>
                            <div className='flex items-center gap-4 mt-4'>
                                <button className='bg-primary text-white px-6  py-1 rounded-3xl'>Get a quote</button>
                                <button className='border border-primary text-primary px-6  py-1 rounded-3xl'>Learn more</button>

                            </div>
                        </div>
                    </div>
                    <div className='bg-white '>
                        <div className='w-[100%]'>
                            <Image src={img4} className='w-full object-contain' />
                        </div>
                        <div className='p-3'>
                            <h5 className='text-lg'>Office membership</h5>
                            <p className='text-sm mt-2'>Flexible access to Day Offices where
                                and when you choose, at thousands of
                                locations worldwide.</p>
                            <div className='flex items-center my-4 gap-2'>
                                <div><IoCalendarSharp /></div>
                                <p className='text-[#616161] text-sm'>By month or year</p>
                            </div>
                            <div className='flex items-center my-4 gap-2'>
                                <div><BsPeople /></div>
                                <p className='text-[#616161] text-sm'>Teams of any size</p>
                            </div>
                            <p className='text-[#008385] text-lg'>From $ 225 per month</p>
                            <div className='flex items-center gap-4 mt-4'>
                                <button className='bg-primary text-white px-6  py-1 rounded-3xl'>Get a quote</button>
                                <button className='border border-primary text-primary px-6  py-1 rounded-3xl'>Learn more</button>

                            </div>
                        </div>
                    </div>


                </div>
                <Carousel />
            </div>
        </div>
    )
}

export default WorkspaceCard
