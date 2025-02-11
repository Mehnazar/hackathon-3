import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";
import { VscFileSymlinkDirectory } from "react-icons/vsc";

const FeautureBlock = () => {
  return (
    <div className="mt-10 px-6 md:px-16">
      {/* Centered Heading */}
      <h3 className="font-clash-display font-normal text-2xl text-center mb-8">
        What makes our brand different
      </h3>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 font-satoshi">
        {/* Feature 1 */}
        <div className="py-4 text-center md:text-left">
          <TbTruckDelivery size={32} className="mx-auto md:mx-0 text-[#2A254B]" />
          <h4 className="font-bold mt-4">Next day as standard</h4>
          <p className="text-sm mt-2">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="py-4 text-center md:text-left">
          <CiCircleCheck size={32} className="mx-auto md:mx-0 text-[#2A254B]" />
          <h4 className="font-bold mt-4">Made by true artisans</h4>
          <p className="text-sm mt-2">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="py-4 text-center md:text-left">
          <VscFileSymlinkDirectory size={32} className="mx-auto md:mx-0 text-[#2A254B]" />
          <h4 className="font-bold mt-4">Unbeatable prices</h4>
          <p className="text-sm mt-2">
            For our materials and quality, you won’t find better prices anywhere.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="py-4 text-center md:text-left">
          <LuSprout size={32} className="mx-auto md:mx-0 text-[#2A254B]" />
          <h4 className="font-bold mt-4">Recycled packaging</h4>
          <p className="text-sm mt-2">
            We use 100% recycled packaging to ensure our footprint is manageable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeautureBlock;
