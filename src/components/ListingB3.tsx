import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const ListingB3 = () => {
  return (
    <div className='w-[1440] h-[761] px-6'>
      <h2 className='font-normal text-3xl'>You might also like</h2>
   <div className='grid grid-cols-4 gap-8'>
    <div className='mt-2'>
        <Image
        src={"/images/Photo.svg"}
        alt={"list"}
        height={375}
        width={305}/>
        <p className='mt-2'>The Dandy chair</p>
        <p className='mt-2'>£250</p>
    </div>
    <div className='mt-2'>
    <Image
        src={"/images/Photo (1).svg"}
        alt={"list"}
        height={375}
        width={305}/>
        <p className='mt-2'>Rustic Vase Set</p>
        <p className='mt-2'>£155</p>
        
    </div>
    <div className='mt-2'>
    <Image
        src={"/images/Photo (2).svg"}
        alt={"list"}
        height={375}
        width={305}/>
        <p className='mt-2'>The Silky Vase</p>
        <p className='mt-2'>£125</p>
    </div>
    <div className='mt-2'>
    <Image
        src={"/images/Photo (3).svg"}
        alt={"list"}
        height={375}
        width={305}/>
        <p className='mt-2'>The Lucy Lamp</p>
        <p className='mt-2'>£399</p>
    </div>

   </div>
   <div className="flex justify-center mt-10">
        <Button className="bg-gray-100 text-black">View collection</Button>
      </div>
   
    </div>

  )
}

export default ListingB3
