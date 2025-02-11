
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LiaSkype } from "react-icons/lia";
import { RiPinterestLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <div className="bg-[#2A254B] w-full text-white">
      {/* Footer Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 px-8 py-8">
        {/* Menu Section */}
        <div className="font-normal text-sm">
          <h1 className="font-Clash-Display  mb-4">Menu</h1>
          <ul className="font-Satoshi  mb-1">New arrivals</ul>
          <ul className="font-Satoshi mb-1"> Best sellers
          </ul>
          <ul className="font-Satoshi mb-1"> Recently viewed
          </ul>
          <ul className="font-Satoshi mb-1"> Popular this week
          </ul>
          <ul className="font-Satoshi mb-1"> All products
          </ul>
          
        </div>

        {/* Category Section */}
        <div className="font-normal text-sm">
          <h1 className="font-Clash-Display  mb-4">Categories</h1>
          <ul className="font-Satoshi  mb-1">Crockery</ul>
          <ul className="font-Satoshi mb-1">Furniture
          </ul>
          <ul className="font-Satoshi mb-1">Homeware
          </ul>
          <ul className="font-Satoshi mb-1">Plant pot</ul>
          <ul className="font-Satoshi mb-1">Chairs</ul>
          <ul className="font-Satoshi mb-1">Crockery</ul>
          
        </div>

        {/* Our Company Section */}
        <div className="font-normal text-sm">
          <h1 className="font-Clash-Display  mb-4">Our company</h1>
          <ul className="font-Satoshi  mb-1">About us</ul>
          <ul className="font-Satoshi mb-1">Vacancies
          </ul>
          <ul className="font-Satoshi mb-1">Contact us
          </ul>
          <ul className="font-Satoshi mb-1">Privacy</ul>
          <ul className="font-Satoshi mb-1">Returns policy</ul>
                    
        </div>
        {/*emial*/}
        <div>
        <h1 className="font-Clash-Display  mb-4">Join our mailing list</h1>
        <div className="flex ">
            <Input 
            type="email" 
            placeholder="your@email.com" 
            className="px-4 py-2 border border-gray-300" 
          />
          <Button type="submit">Sign up</Button>
          </div>
          </div>
       
          
                    
        </div>
    
{/*Bottom Sections*/}
      <div className="flex justify-between bg-[#2A254B] text-center px-6 py-4">
        <h2 className="text-[10px] font-normal">
        Copyright 2022 Avion LTD
        </h2>
        <div className="flex mt-4 gap-4 text-white">
        <FaLinkedin />
            <FaFacebook />
            <FaInstagram />
            <LiaSkype />
            <FiTwitter />
            <RiPinterestLine />
      
            
          </div>
        
      </div>
      
    </div>
  );
};

export default Footer;
