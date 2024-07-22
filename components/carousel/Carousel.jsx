"use client"
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import image1 from "../../images/office.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoCalendarSharp } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";

const Carousel = () => {
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1242,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          //   dots: true,
        },
      },
      {
        breakpoint: 1515,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          //   dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          //   dots: true,
        },
      },
      {
        breakpoint: 833,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          //   dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          //   dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const arrowButtonClass =
    "absolute top-0 bottom-0 my-auto bg-primary sm:w-8 sm:h-8 h-8 w-8 block text-white cursor-pointer z-20 rounded-full ";
  return (
    <div className=' sm:hidden block  mt-12'>
      <div className="flex justify-center items-center relative lg:mt-5    ">
        <div className="">
          <button
            className={`${arrowButtonClass} left-4  flex items-center justify-center `}
            onClick={() => slider.current?.slickPrev()}
          >
            {/* <FlatIcon className="flaticon-down-right-2 text-secondary text-xl font-bold rotate-180"/> */}

            L
          </button>
        </div>

        <div className="back h-auto   ">
          {/* <div className="w-[50%] h-auto border border-[red] "> */}

          <div className="w-[85vw] lg:w-[45vw]    h-auto">
            <Slider
              ref={slider}
              {...settings}
              className="h-fit"
              dotsClass={`slick-dots `}
              arrows={true}
              nextArrow={<></>}
              prevArrow={<></>}
              draggable={true}
            >

              {/* first slide start */}
              <div className='bg-white rounded-lg'>
                <div className='p-3'>
                  <h5 className='text-lg font-bold'>Private offices</h5>
                  <p className='text-sm mt-2'>A range of ready-to-use, fully equipped
                    offices with everything you need to get
                    started.</p>
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
              {/* first slide end */}
              {/* second slide  start*/}
              <div className='bg-white rounded-lg'>
                <div className='p-3'>
                  <h5 className='text-lg font-bold'>Custom Offices</h5>
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
              {/* second slide end*/}

              {/* third slide start  */}

              <div className='bg-white rounded-lg'>
                <div className='p-3'>
                  <h5 className='text-lg font-bold'>Day Offices</h5>
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
              {/* third slide end    */}
            </Slider>
          </div>
        </div>

        <div className="">
          <button
            className={`${arrowButtonClass} right-4  text-center flex items-center justify-center`}
            onClick={() => slider.current?.slickNext()}
          >
            {/* <FlatIcon className="flaticon-down-right-2  text-secondary text-xl font-bold"/> */}

            R
            {/* <FlatIcon className="flaticon-left-arrow lg:text-xl text-lg" /> */}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel