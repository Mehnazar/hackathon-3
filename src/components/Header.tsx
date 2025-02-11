import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white text-[#22202E]">
      <div className="flex justify-between items-center px-4 py-3 md:px-6">
        {/* Search Icon */}
        <CiSearch className="text-xl md:text-2xl" />

        {/* Logo */}
        <h2 className="font-normal text-xl md:text-2xl">Avion</h2>

        {/* Cart and User Icons */}
        <div className="flex items-center gap-3">
          <Link href={"/displayCart"}><IoCartOutline className="text-xl md:text-2xl" />
</Link>
          <Link href={"/singUp"}><FaRegUser className="text-xl md:text-2xl" /></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
