import Image from 'next/image'
import React from 'react'
import bannerImage from "../../images/banner.png"
import img1 from "../../images/image 1.png"
import img2 from "../../images/Rectangle 2.png"
import img3 from "../../images/bangalore 1.png"
import img4 from "../../images/image 3.png"
import img5 from "../../images/image 2.png"
import img6 from "../../images/image 3.png"
import { IoSearchOutline } from "react-icons/io5";




const Banner = () => {
  return (
    <div className="w-full relative">
      <div className="sm:h-[250px] h-[613px] md:h-full">
        <Image
          src={bannerImage}
          alt="banner image"
          className="w-full h-full object-fill"

        />
      </div>
    

       <div className="absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]   h-[calc(100%-85px)] md:h-[calc(100%-165px)] w-full flex justify-center items-center ">
      <div className='w-full '>
      <div>
      <p className='text-white sm:text-center mb-2 font-semibold sm:text-xl text-lg sm:w-full w-[60%] m-auto text-start'>From a single desk to a whole building. The choice is yours.</p>
      <h4 className='text-white text-center md:text-5xl text-3xl font-semibold mb-6'>Discover the Ultimate Workspace Solution</h4>
      </div>
        <div className='md:w-[75%] lg:w-[40%] sm:w-[60%] w-[90%] m-auto'>
      
          <div className=" bg-[#F4F3F0] border overflow-hidden rounded-2xl px-5 py-4 sm:flex items-center gap-3 hidden">
            <div className="flex flex-1 bg-white justify-between border border-[#D9DBDD] rounded-sm">
              <div className='flex justify-between items-center  w-full px-4'>
                <input
                  type="text"
                  className="outline-none border-none py-2 md:text-base text-sm  placeholder:text-gray-600 placeholder:font-medium"
                  placeholder="Search city"
                />
                <p className='text-primary text-sm underline pb-1'>Search Nearby</p>
              </div>
            </div>

            <button className="bg-primary flex items-center justify-center gap-2 text-white py-2 md:text-base text-sm md:py-2 px-6 rounded-lg text-[14px] md:min-w-[165.42px] font-medium">
<div><IoSearchOutline className='text-white font-bold'/></div>
              SEARCH
            </button>
          </div>

          <div className=" bg-[#F4F3F0] border overflow-hidden rounded-2xl px-3 py-3  gap-3 sm:hidden block">
            <p className='text-sm font-semibold'>Search your city</p>
            <div className="flex flex-1 bg-white justify-between border border-[#D9DBDD] rounded-sm mt-1">
              <div className='flex items-center  w-full px-4'>
              <div><IoSearchOutline className=' font-bold'/></div>
                <input
                  type="text"
                  className="outline-none border-none py-2 md:text-base text-sm  placeholder:text-gray-600 placeholder:font-medium"
                  placeholder=""
                />
              </div>
            </div>
                <p className='text-primary text-sm underline pb-1 text-end'>Search Nearby</p>


            {/* <button className="bg-primary flex items-center justify-center gap-2 text-white py-2 md:text-base text-sm md:py-2 px-6 rounded-lg text-[14px] md:min-w-[165.42px] font-medium">
<div><IoSearchOutline className='text-white font-bold'/></div>
              SEARCH
            </button> */}
          </div>



          <div className='px-10'>
            <h5 className='sm:text-base text-sm text-white font-bold mt-6 mb-6'>Trending cities</h5>
            <div className='grid sm:grid-cols-6 grid-cols-3 gap-6'> 
              <div className='flex flex-col gap-2 '>
                <div className='bg-white w-fit rounded-md p-2'>
                  <Image src={img1} alt='img'/>
                </div>
                <p className='text-white sm:text-sm text-xs font-semibold'>New Delhi</p>
              </div>
              <div className='flex flex-col gap-2'>
                <div className=' bg-white w-fit rounded-md p-2'>
                  <Image src={img2} alt='img'/>
                </div>
                <p className='text-white font-semibold text-center sm:text-sm text-xs'>Noida</p>
              </div>
              <div className='flex flex-col gap-2'>
                <div className=' bg-white w-fit rounded-md p-1'>
                  <Image src={img3} alt='img'/>
                </div>
                <p className='flex flex-col gap-2 text-white sm:text-sm text-xs font-semibold text-center'>Bangalore</p>
              </div>
              <div className='flex flex-col gap-2'>
                <div className=' bg-white w-fit rounded-md p-2'>
                  <Image src={img4} alt='img'/>
                </div>
                <p className='text-white sm:text-sm text-xs font-semibold text-center'>Mumbai</p>
              </div>
              <div className='flex flex-col gap-2'>
                <div className=' bg-white w-fit rounded-md p-2'>
                  <Image src={img5} alt='img'/>
                </div>
                <p className='text-white sm:text-sm text-xs font-semibold text-center'>Hyderabad</p>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='bg-white w-fit rounded-md p-2'>
                  <Image src={img6} alt='img'/>
                </div>
                <p className='text-white sm:text-sm text-xs font-semibold text-center'>Chennai</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Banner


     