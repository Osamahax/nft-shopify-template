import logoImg from "@/public/logo.png"
import Image from "next/image"
import Link from "next/link"
import NavMenu from "./NavMenu"
import { AiOutlineSearch } from "react-icons/ai"
import MobileMenu from "./MobileMenu"
const Nav = () => {
  return (
    <div className="w-full bg-neutral-800">
        <nav className="w-11/12 mx-auto h-20 flex items-center justify-between">
            {/* Logo */}
            <div>
                <Image src={logoImg} alt="Logo" />
            </div>
            {/* Menu */}
            <div className="hidden md:block">
                <NavMenu />
            </div>
            <div className="relative text-white hidden lg:block">
                <span className="absolute top-3 left-4"><AiOutlineSearch size="20"/></span>
                <input placeholder="Search Here" className="bg-neutral-700 border border-white rounded-md pl-12 p-2"/>
            </div>
            <div className="md:hidden">
                <MobileMenu />
            </div>
        </nav>
    </div>
  )
}

export default Nav