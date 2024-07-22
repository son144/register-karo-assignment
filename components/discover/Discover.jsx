import Image from 'next/image';
import React from 'react';
import image from "../../images/Group 48095425 (1).png";
import { PiGreaterThan } from "react-icons/pi";

const servicesLeft = [
    {
        title: 'Prestigious Business Addresses',
        description: 'Access to prestigious business addresses in key locations, enhancing your brand image and credibility.',
    },
    {
        title: 'Mail Handling Services',
        description: 'Efficient management of mail and packages, including forwarding, scanning, and storage, ensuring seamless communication.',
    },
    {
        title: 'Flexibility and Cost-Effectiveness',
        description: 'Enjoy the flexibility of virtual office solutions with customizable plans, avoiding the high costs associated with traditional office leases.',
    },
    {
        title: 'Business Expansion',
        description: 'Expand your business footprint across India without the overhead costs of physical office space, enabling growth and scalability.',
    },
];

const servicesRight = [
    {
        title: 'Nationwide Presence',
        description: 'Establish a presence in multiple cities across India without the need for physical office space.',
    },
    {
        title: 'Professional Call Answering',
        description: 'Professional receptionists manage incoming calls with personalized greetings, providing a professional image for your business.',
    },
    {
        title: 'Meeting Room Facilities',
        description: 'Access to meeting rooms and conference facilities in various cities, allowing for seamless collaboration and client meetings.',
    },
];

const ServiceItem = ({ title, description }) => (
    <div className='flex items-center '>
        <div className='flex items-center justify-center h-full mt-[-50px]'>
            <div className='w-[6px] h-[6px] rounded-full bg-black'></div>
        </div>
        <div className='ml-2 flex flex-col gap-1'>
            <h3 className='text-[#393939] sm:text-xl text-lg font-bold'>{title}</h3>
            <p className='text-[#777777] sm:text-base text-sm'>{description}</p>
        </div>
    </div>
);

const Discover = () => {
    return (
        <div className=' flex sm:flex-row flex-col-reverse gap-y-10 justify-between w-[85%] m-auto sm:my-20 my-10 '>
            <div className='sm:w-[30%] w-[100%]'>
                <Image src={image} alt="Workspace Solution Image" />
            </div>
            <div className='sm:w-[60%] w-[100%]'>
          <div className='md:w-[60%] w-[100%]'>
          <div className='md:text-4xl text-3xl text-[#393939] sm:font-semibold font-medium flex  gap-3 w-full'> 
            <span className=''>Discover the Ultimate Workspace Solution </span>
            {/* <span className='h-5 w-5 rounded-full bg-primary'></span> */}
          </div>
          <p className='text-[#393939] sm:text-base text-sm mt-3'>From solo entrepreneurs to growing teams, find everything you need under one roof. Whether it's pay-per-use plans or fixed desks, our flexible options cater to your unique work style, ensuring seamless productivity and success.</p>
          </div>
                <div className='flex sm:flex-row flex-col gap-8 mt-10'>
                    <div className='sm:w-[50%] w-[100%] flex flex-col gap-5'>
                        {servicesLeft.map((service, index) => (
                            <ServiceItem key={index} title={service.title} description={service.description} />
                        ))}
                       
                    </div>
                    <div className='sm:w-[50%] w-[100%] flex flex-col gap-5'>
                        {servicesRight.map((service, index) => (
                            <ServiceItem key={index} title={service.title} description={service.description} />
                        ))}
                    </div>
                </div>
                <div className='flex text-primary items-center ml-4 text-lg font-semibold mt-8'>
                            <h4>Talk to an expert</h4>
                            <div><PiGreaterThan className='text-base' /></div>
                        </div>
            </div>
        </div>
    );
}

export default Discover;
