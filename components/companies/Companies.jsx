import React from 'react'
import img1 from "../../images/Page-1.png"
import img2 from "../../images/Slack_RGB.png"
import img3 from "../../images/we work 1.png"
import img4 from "../../images/image 7.png"
import img5 from "../../images/Group.png"
import img6 from "../../images/icici_bank_logo_symbol 1.png"

import Image from 'next/image'


const Companies = () => {
  return (
    <div className='w-[85%] flex flex-col sm:gap-12 gap-8 m-auto py-12'>
      <h2 className='font-bold text-xl'>Trusted by the world’s largest companies</h2>
      <div className='grid md:grid-cols-6 sm:grid-cols-3 gap-y-6 gap-x-4 grid-cols-2 items-center '>
        <div>
          <Image src={img1}/>
        </div>
        <div>
          <Image src={img2}/>
        </div>
        <div>
          <Image src={img3}/>
        </div>
        <div>
          <Image src={img4}/>
        </div>
        <div>
          <Image src={img5}/>
        </div>
        <div>
          <Image src={img6}/>
        </div>
      </div>
    </div>
  )
}

export default Companies