import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Info = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-12 md:px-24 py-16">
      {/* Text Section */}
      <div className="max-w-[50%] md:max-w-[45%] text-left">
        <h2 className="font-Clash-Display text-3xl font-semibold leading-snug">
          From a studio in London to a global brand with over 400 outlets
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          When we started Avion, the idea was simple. Make high-quality
          furniture affordable and available for the mass market.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Handmade and lovingly crafted furniture and homeware is what we live,
          breathe, and design. Our Chelsea boutique became the hotbed for the
          London interior design community.
        </p>
        <Button className="bg-[#F9F9F9] text-black mt-6">Get in touch</Button>
      </div>

      {/* Image Section */}
      <div className="max-w-[50%] md:max-w-[45%]">
        <Image
          src="/images/Image (1).svg"
          alt="sofa"
          width={720}
          height={603}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Info;
