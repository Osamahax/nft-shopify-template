"use client";

import { AiOutlineDown } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

const NavMenu = () => {
  const [subMenu, SetSubmenu] = useState(false);
  return (
    <nav>
      <ul className="text-white flex items-center gap-6">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li
          className="flex items-center gap-1 hover:text-yellow-500 relative cursor-pointer group"
          onClick={() => SetSubmenu(!subMenu)}
        >
          Explore
          <span
            className={`${
              subMenu === true ? "rotate-180 text-yellow-500" : "rotate-0"
            } transform duration-500`}
          >
            <AiOutlineDown />
          </span>
          {subMenu && (
            <ul
              className={`absolute top-[50px] le w-40 bg-neutral-950 flex flex-col gap-2 text-white z-50 rounded-md`}
                onMouseLeave={()=>SetSubmenu(false)}
            >
              <Link
                href={"/"}
                className="hover:bg-slate-300 hover:text-slate-700 py-3 px-2 hover:rounded-t-md"
              >
                <li>Auction</li>
              </Link>
              <Link
                href={"/"}
                className="hover:bg-slate-300 hover:text-slate-700 py-3 px-2"
              >
                <li>Descover Auction</li>
              </Link>
              <Link
                href={"/"}
                className="hover:bg-slate-300 hover:text-slate-700 py-3 px-2 hover:rounded-b-md"
              >
                <li>Auction Details</li>
              </Link>
            </ul>
          )}
        </li>
        <li>
          <Link href={"/"}>Community</Link>
        </li>
        <li>
          <Link href={"/"}>Pages</Link>
        </li>
        <li>
          <Link href={"/"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
