import React from 'react';
import img from "../../images/Group 5.png";
import Image from 'next/image';
import { MdKeyboardArrowRight } from "react-icons/md";

const ListItem = ({ text }) => (
  <div className='flex items-center'>
    <MdKeyboardArrowRight className='text-lg' />
    <h3 className='sm:text-xl text-base font-medium'>{text}</h3>
  </div>
);

const WhyOpt = () => {
  return (
    <div className='w-[70%] flex sm:flex-row flex-col gap-6 justify-between items-center m-auto sm:py-14 py-7 '>
      <div className='sm:w-[30%] w-[100%] '>
        <Image src={img} alt="Why Opt for Launchwise" className='sm:h-[376px] h-fit w-full object-contain' />
      </div>
      <div className='sm:w-[60%] w-[100%]  text-[#393939]'>
        <div className='flex flex-col gap-3'>
          <h2 className='sm:text-4xl text-2xl font-semibold'>Why Opt for Launchwise?</h2>
          <p className='sm:text-base text-sm'>Delegate workspace customization and management to us, allowing you to concentrate on your core business activities while we ensure your workspace is primed for growth.</p>
        </div>
        <div className='flex gap-2 items-center my-6'>
          <div className='h-[50px] border-l-[4px] border-l-primary w-2'></div>
          <div className='flex flex-col gap-2'>
            <h3 className='sm:text-2xl text-xl font-semibold'>Prime Nationwide Options</h3>
            <p className='sm:text-base text-sm'>Explore our diverse and unparalleled portfolio of office spaces, offering the finest options strategically located across the nation.</p>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <ListItem text="Comprehensive Office Solutions" />
          <ListItem text="Strategically Located Premium Spaces" />
          <ListItem text="Cost-Effective Solutions with Modern Amenities" />
        </div>
      </div>
    </div>
  );
}

export default WhyOpt;
