"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import logoImg from "@/public/logo.png";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(false);  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div
        onClick={toggleMenu}
        className="text-white absolute z-50 top-7 cursor-pointer"
      >
        {isOpen ? (
          <AiOutlineClose size="30" />
        ) : (
          <RiMenu3Fill size="30" />
        )}
      </div>
      <nav
        className={`bg-black w-72 h-screen top-0 left-0 fixed z-20 transition-transform duration-1000 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-center mt-7">
          <Image src={logoImg} alt="Logo" />
        </div>
        <ul className="text-white mt-10 flex flex-col gap-4 w-full px-8 font-medium text-lg relative">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="group w-full">
            <span className="flex justify-between">Explore <span>+</span></span>
            <nav className="hidden group-hover:block text-sm space-y-3 ml-6 mt-3 text-zinc-400">
                <li>Auction</li>
                <li>Discover Auction</li>
                <li>Auction Details</li>
            </nav>
          </li>
          <li className="group">
            <span className="flex justify-between">Community <span>+</span></span>
            <nav className="hidden group-hover:block text-sm space-y-3 ml-6 mt-3 text-zinc-400">
                <li>Blog</li>
                <li>Blog Details</li>
            </nav>
          </li>
          <li className="group">
            <span className="flex justify-between">Pages <span>+</span></span>
            <nav className="hidden group-hover:block text-sm space-y-3 ml-6 mt-3 text-zinc-400">
                <li>Auther</li>
                <li>Auther Details</li>
                <li>Login</li>
                <li>Sign Up</li>
                <li>Forget Password</li>
                <li>Error</li>
            </nav>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
