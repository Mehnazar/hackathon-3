import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const ProductListComponent = () => {
  return (
    <div className='px-6 py-8'>
      <div className='grid grid-cols-4 gap-8'>
        <div className='flex flex-col items-center'>
          <Image
            src={"/images/Pd1 (1).svg"}
            alt={"list"}
            height={375}
            width={305}
          />
          <p className='mt-4 text-lg font-medium'>The Dandy chair</p>
          <p className='mt-2 text-gray-600'>£250</p>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            src={"/images/Pd1 (2).svg"}
            alt={"list"}
            height={375}
            width={305}
          />
          <p className='mt-4 text-lg font-medium'>Rustic Vase Set</p>
          <p className='mt-2 text-gray-600'>£155</p>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            src={"/images/Pd1 (3).svg"}
            alt={"list"}
            height={375}
            width={305}
          />
          <p className='mt-4 text-lg font-medium'>The Silky Vase</p>
          <p className='mt-2 text-gray-600'>£125</p>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            src={"/images/Pd1 (4).svg"}
            alt={"list"}
            height={375}
            width={305}
          />
          <p className='mt-4 text-lg font-medium'>The Lucy Lamp</p>
          <p className='mt-2 text-gray-600'>£399</p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button className="bg-gray-100 text-black">View collection</Button>
      </div>
    </div>
  )
}

export default ProductListComponent
