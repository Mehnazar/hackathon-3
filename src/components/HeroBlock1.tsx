import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'


const HeroBlock1 = () => {
  return (
    <div className='flex w-[1440] h-[704] mt-[60] px-20'>
<div className='w-[1280] h-[584] bg-[#2A254B] text-white '>
    <h2 className='font-clash-display font-normal text-3xl mt-10 px-20'> 
    The furniture brand for the future, with timeless designs
    </h2>
    <Button className='mt-10 bg-[#F9F9F926] px-6 ml-20' >View collection</Button>
    <p className='font-satoshi font-normal text-lg mt-10 px-20'>A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.</p>

    </div>   
    <div>
        <Image
        src={"/images/Right Image.svg"}
        alt={"furniture"}
        width={670}
        height={1280}
        className='flex-auto'
        />
        </div>     
      
    </div>
  )
}

export default HeroBlock1
