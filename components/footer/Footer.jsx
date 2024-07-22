


import Image from 'next/image';
import React from 'react';
import logo from "../../images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  const services = [
    "Virtual Office",
    "GST Registration",
    "Coworking Spaces",
    "Business Registration",
    "Mailing Address",
    "Dedicated Desk",
  ];

  const otherLinks = [
    "Privacy Policy",
    "Disclaimer",
    "Terms & Conditions",
    "Cookies",
    "Refund policy",
  ];

  const otherPages = [
    "Home",
    "About Us",
    "Contact Us",
    "Blog",
    "Find Location",
    "FAQ's",
  ];

  const socialIcons = [FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter];

  const majorCities = [
    "Delhi", "Gurgaon", "Bangalore", "Mumbai", "Pune",
    "Kolkata", "Chennai", "Noida", "Kochi", "Jaipur",
    "Hyderabad", "Chandigarh", "Lucknow", "Mohali"
  ];

  return (
    <div>
      <div className='bg-[#191C20] '>
        <div className='w-[85%] flex sm:flex-row flex-col gap-x-16 gap-y-8 m-auto sm:pt-14 pt-7 sm:pb-10 pb-5'>
          <div className='sm:w-[25%] w-[100%] '>
            <div>
              <Image src={logo}  className='' alt="Logo"/>
            </div>
            <div className='flex justify-between items-center mt-8'>
              {socialIcons.map((Icon, index) => (
                <div key={index}><Icon className='text-white' /></div>
              ))}
            </div>
          </div>
          <div className='flex sm:flex-row flex-col gap-y-6  sm:w-[50%] w-[100%] justify-between '>
            <div className='flex flex-col gap-5'>
              <h4 className='text-white text-base font-bold'>Services</h4>
              <div className='flex flex-col gap-2 text-[#ACACAC] text-sm'>
                {services.map((service, index) => (
                  <p key={index}>{service}</p>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-5 '>
              <h4 className='text-white text-base font-bold'>Other Link</h4>
              <div className='flex flex-col gap-2 text-[#ACACAC] text-sm'>
                {otherLinks.map((link, index) => (
                  <p key={index}>{link}</p>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <h4 className='text-white text-base font-bold'>Other Pages</h4>
              <div className='flex flex-col gap-2  text-[#ACACAC] text-sm'>
                {otherPages.map((page, index) => (
                  <p key={index}>{page}</p>
                ))}
              </div>
            </div>
          </div>
          <div className='sm:w-[25%]  w-[100%]  text-[#ACACAC] '>
            <h4 className='text-white text-base font-bold'>Join the newsletter</h4>
            <div className='flex items-center mb-5 mt-2 gap-3'>
              <input type="text" className='w-[60%] bg-[#2B2F33] rounded-full px-3 py-1' placeholder='Enter your email'/>
              <button className='bg-primary text-white text-sm font-semibold px-5 rounded-full py-1.5'>Subscribe</button>
            </div>
            <div className='flex flex-col gap-2'>
              <p>Feel free to connect with us</p>
              <div className='flex gap-2'>
                <div className='flex gap-2 items-center'>
                  <FaPhoneAlt className=' text-base' />
                  <p>+91 93112 21210</p>
                </div>
                <div className='flex items-center gap-2'>
                  <IoMail className='text-xl' />
                  <p>+91 93112 21210</p>
                </div>
              </div>
             
                <div className='flex gap-2 items-center'>
                  <FaLocationArrow className='text-3xl' />
                  <p>704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana 122007</p>
                </div>
           
            </div>
          </div>
        </div>

        <div className='bg-[#2B2F33]'>
          <div className='py-7 w-[85%] m-auto'>
            <div className='m-auto flex flex-col gap-7'>
              <div className='flex flex-col gap-2'>
                <h5 className='text-white text-base font-bold'>Virtual Office in Major Cities</h5>
                <p className='text-[#ACACAC] text-sm'>
                  {majorCities.map((city, index) => (
                    <React.Fragment key={index}>
                      Virtual Office in {city} {index !== majorCities.length - 1 && "| "}
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <h5 className='text-white text-base font-bold'>Virtual Office for GST in Major Cities</h5>
                <p className='text-[#ACACAC] text-sm'>
                  {majorCities.map((city, index) => (
                    <React.Fragment key={index}>
                      Virtual Office for GST in {city} {index !== majorCities.length - 1 && "| "}
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <h5 className='text-white text-base font-bold'>Virtual Office for Business in Major Cities</h5>
                <p className='text-[#ACACAC] text-sm'>
                  {majorCities.map((city, index) => (
                    <React.Fragment key={index}>
                      Virtual Office for Business in {city} {index !== majorCities.length - 1 && "| "}
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <h5 className='text-white text-base font-bold'>Virtual Office with Mailing Address in Major Cities</h5>
                <p className='text-[#ACACAC] text-sm'>
                  {majorCities.map((city, index) => (
                    <React.Fragment key={index}>
                      Virtual Office with Mailing Address in {city} {index !== majorCities.length - 1 && "| "}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
            <div className='border-b border-b-[#ACACAC] w-full my-5'></div>
            <div className='text-[#ACACAC] text-sm flex justify-between items-center '>
              <p>Copyright © 2019, Team Cowork. All Rights Reserved</p>
              Powered by MXN Realspaces Pvt Ltd
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
