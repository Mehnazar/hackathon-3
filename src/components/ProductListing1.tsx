import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductListing1 = () => {
  return (
    <div className="px-4 py-6 md:px-10 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/images/Image Left.svg"
            alt="The Dandy Chair"
            width={721}
            height={759}
            className="w-full max-w-md md:max-w-none"
          />
        </div>

        {/* Details Section */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">The Dandy Chair</h1>
          <h4 className="text-xl font-medium">£250</h4>
          <h3 className="text-lg font-semibold mt-6">Description</h3>
          <p className="text-base">
            A timeless design, with premium materials features as one of our most
            popular and iconic pieces. The Dandy Chair is perfect for any stylish living
            space with beech legs and lambskin leather upholstery.
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">Dimensions</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold">Height</p>
              <p>110cm</p>
            </div>
            <div>
              <p className="font-semibold">Width</p>
              <p>75cm</p>
            </div>
            <div>
              <p className="font-semibold">Depth</p>
              <p>50cm</p>
            </div>
          </div>

          {/* Add to Cart Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mt-8">
            <div className="flex items-center space-x-2">
              <p className="font-medium">Amount:</p>
              <Input type="number" placeholder="" className="w-20" />
            </div> 
            <Button type="submit" className="bg-[#2A254B] text-white px-6 py-2 ">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing1;
