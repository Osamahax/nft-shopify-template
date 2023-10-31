import React from "react";
import { Button } from "@/components/ui/button";
import heroImg from "@/public/hero-img.png";
import heroImg4 from "@/public/hero-shape-4.png";
import heroImg1 from "@/public/hero-shape-1.png";
import heroImg2 from "@/public/hero-shape-2.png";
import Image from "next/image";
const Hero = () => {
  return (
    <main className="bg-black w-screen text-white relative">
      <div className="flex justify-center pt-20 md:pt-30 lg:pt-40 bg-[url('/hero-backgroung.png')]">
        {/* Heading section */}
        <div className=" flex flex-col gap-10 max-w-lg relative pb-10">
          <div className="relative">
            <h1 className="text-5xl font-bold">
              Discover Unique and <span className="text-stroke-incredible">incredible</span>  header Imagerare digital art
            </h1>

            <div className="absolute top-2 -left-10 ">
              <Image
                src={heroImg2}
                alt="hero object"
                className="animate-pulse-slow"
              />
            </div>
          </div>
          <div className="">
            <p>
              NafLab is a website taht created for the person who love art.
              Where people can buy a piece of art and its compleately theirs.
              This system is kinda similar to crypto
            </p>
          </div>
          <div className="flex gap-4">
            <Button className="px-8 py-3 font-semibold text-black rounded-full bg-yellow-500 hover:bg-slate-200 transition duration-500 ease-in-out">
              Button
            </Button>
            <Button className="px-8 py-3 font-semibold text-yellow-500 rounded-full bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-500 ease-in-out">
              Button
            </Button>
          </div>
        </div>
        {/* Image Section */}
        <div className="hidden lg:block mb-10">
          <Image src={heroImg} alt="hero image" />
        </div>
        <div className="absolute top-10 right-20">
          <Image
            src={heroImg4}
            alt="hero object"
            className="animate-spin-slow"
          />
        </div>
        <div className="absolute top-10 left-20">
          <Image
            src={heroImg1}
            alt="hero object"
            className="animate-bounce-slow"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
