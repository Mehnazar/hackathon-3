import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

const Popular = () => {
  return (
    <div className="w-[1440px] h-[744px] px-6 mt-10 mb-10 ml-2 mr-10">
      <h2 className="font-normal text-4xl mb-4">Our popular products</h2>
      <div className="flex justify-between">
        <div className="mt-2">
          <Image
            src={"/images/Large.svg"}
            alt={"sofa"}
            width={630}
            height={375}
          />
          <p className="font-normal text-lg mt-2">The Poplar suede sofa</p>
          <p className="mt-2">£980</p>
        </div>
        <div className="mt-2">
          <Image
            src={"/images/Parent (1).svg"}
            alt="chair"
            width={305}
            height={375}
          />
          <p className="mt-2">The Dandy chair</p>
          <p className="mt-2">£250</p>
        </div>
        <div className="mt-2">
          <Image
            src={"/images/Parent (2).svg"}
            alt="dandy"
            width={305}
            height={375}
          />
          <p className="mt-2">The Dandy chair</p>
          <p className="mt-2">£250</p>
        </div>
      </div>
      {/* Centered button */}
      <div className="flex justify-center mt-10">
        <Button className="bg-gray-100 text-black">View collection</Button>
      </div>
    </div>
  );
};

export default Popular;
