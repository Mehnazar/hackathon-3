import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

const Feature = () => {
  return (
    <div>
    <div className='flex flex-col md:grid md:grid-cols-2 gap-3 px-4 md:px-8 py-8'>
      <div className='bg-[#2A254B] text-white p-6 md:p-8'>
        <h2 className='font-Clash-Display text-2xl md:text-3xl mt-4 text-center md:text-left'>
          It started with a small idea
        </h2>
        <p className='font-Satoshi text-base md:text-lg mt-3 text-center md:text-left'>
          A global brand with local beginnings, our story began in a small studio in South London in early 2014
        </p>
        <div className='flex justify-center md:justify-start'>
          <Button className='bg-[#F9F9F926] text-white px-6 py-3 mt-40'>
            View collection
          </Button>
        </div>
      </div>
      <div className='flex justify-center'>
        <Image
          src={"/images/Image Block.svg"}
          alt='img'
          width={630}
          height={478}
          className='w-full max-w-[600px] md:max-w-none'
        />
      </div>
      </div>
      <div>
       <Image
      src={"/images/Image (2).svg"}
      alt='img'
      width={1600}
      height={444} 
      className='ml-10'/>
      </div>
    </div>
  );
};

export default Feature;
