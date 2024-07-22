


import React from 'react';
import Image from 'next/image';
import image from "../../images/Group 48095425.png";
import img1 from "../../images/Company-registration.png";
import img2 from "../../images/Gst-registration.png";
import img3 from "../../images/Business-mailing-address.png";
import img4 from "../../images/Business-mailing-address (1).png";
import img5 from "../../images/Business-mailing-address (2).png";


const AddressItem = ({ imgSrc, title, description }) => (
  <div className='flex sm:gap-6 gap-3 items-center'>
    <div className='sm:w-[10%] w-[20%] h-[100px]'>
      <Image src={imgSrc} className='w-full h-full object-contain' alt={title} />
    </div>
    <div className='sm:w-[90%] w-[80%] flex flex-col gap-2'>
      <h4 className='text-primary sm:text-xl text-lg font-semibold'>{title}</h4>
      <p className='text-[#777777] sm:text-base text-sm'>{description}</p>
    </div>
  </div>
);

const VirtualAddress = () => {
  const addresses = [
    {
      imgSrc: img1,
      title: 'Company Registration',
      description: 'Enhance your professional image and organizational presence by choosing a virtual address over your residential one.',
    },
    {
      imgSrc: img2,
      title: 'Streamlined GST Registration',
      description: 'Simplify your GST registration process through the use of a virtual address, meeting government requirements efficiently and affordably.',
    },
    {
      imgSrc: img3,
      title: 'Centralized Business Hub',
      description: 'Establish your virtual office as the hub of your business operations, utilizing it as your official business and mailing address, ensuring efficient mail handling without physical office space constraints.',
    },
    {
      imgSrc: img4,
      title: 'Efficient Call Management',
      description: 'Ensure seamless communication with clients and stakeholders by routing all calls to your virtual address, where a virtual receptionist provides professional and prompt responses.',
    },
    {
      imgSrc: img5,
      title: 'Flexible Meeting Solutions',
      description: 'Impress investors and clients with access to fully-equipped meeting facilities, including boardrooms and conference rooms, available on-demand without the commitment of traditional office leases.',
    },
  ];

  return (
    <div className='bg-[#F5F5F5] '>
      <div className='flex sm:flex-row flex-col justify-between w-[85%] m-auto pt-8 '>
        <div className='sm:w-[60%] w-[100%]'>
          <h2 className='sm:text-3xl text-3xl font-medium mb-4'>Use Virtual Address For</h2>
          <div className='flex flex-col gap-4'>
            {addresses.map((address, index) => (
              <AddressItem
                key={index}
                imgSrc={address.imgSrc}
                title={address.title}
                description={address.description}
              />
            ))}
          </div>
        </div>
        <div className='sm:w-[30%] w-[100%] mt-8'>
          <Image src={image} className='w-full object-contain' alt='Virtual Address' height={561} width={420} />
        </div>
      </div>
    </div>
  );
};

export default VirtualAddress;
