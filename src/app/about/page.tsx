import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import FeautureBlock from '@/components/FeatureBlock';
import SignUp from '@/components/SignUp';




export default function About() {
  

  return (
    <div className="px-6 py-10">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:h-[277px] mt-10">
        <p className="font-Clash-Display text-4xl text-center lg:text-left max-w-lg">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </p>
        <Button className="font-Satoshi mt-4 lg:mt-0">View our products</Button>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
        <div>
          <h2 className="font-Clash-Display text-3xl mb-4">It started with a small idea</h2>
          <p className="font-Satoshi text-lg">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
        </div>
        <div>
          <Image
            src="/images/Image Block.svg"
            alt="Story Image"
            width={630}
            height={478}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-16 gap-10">
        <Image
          src="/images/about.svg"
          alt="About Image"
          width={720}
          height={603}
          className="w-full lg:w-[720px] h-auto"
        />
        <div className="max-w-lg">
          <h2 className="font-Clash-Display text-3xl mb-4">
            Our service isn’t just personal; it’s actually hyper-personally exquisite
          </h2>
          <p className="font-Satoshi text-lg mb-4 bg-[#2A254B] ">
            When we started Avion, the idea was simple: make high-quality furniture affordable and available for the
            mass market.
          </p>
          <p className="font-Satoshi text-lg mb-6">
            Handmade and lovingly crafted furniture and homeware is what we live, breathe, and design. Our Chelsea
            boutique has become the hotbed for the London interior design community.
          </p>
          <Button>Get in touch</Button>
        </div>
      </div>

      {/* Feature Block */}
      <div className="mt-16">
        <FeautureBlock />
      </div>

      {/* Sign-Up Section */}
      <div className="mt-16">
        <SignUp />
      </div>
    </div>
  );
}
