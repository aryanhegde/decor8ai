import Image from "next/image";
import React from "react";
import { CompareSlider } from "./ReactCompareSlider";

import original1 from "@/assets/original1.jpg";
import restored1 from "@/assets/restored1.jpg";
import edited from "@/assets/edited.jpg";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buttonVariants } from "./ui/button";
import SquigglyLines from "./SqigglyLines";

const Hero = () => {
  return (
    <section className=" lg:max-w-[1280px] mx-auto mt-6 sm:mt-12 ">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-slate-800  py-1.5 px-3 rounded-full shadow-lg shadow-red-300  mb-8">
          <p className=" text-center text-slate-50">
            <span>1000</span>+ Imags Created
          </p>{" "}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="mt-6 flex flex-col items-center justify-center lg:flex-1 ">
          <div className="flex flex-col justify-center items-center lg:items-start mb-6 py-2">
            <h1 className="mx-auto max-w-4xl font-display text-3xl font-bold tracking-normal text-gray-800 text-center lg:text-start sm:text-5xl md:text-6xl lg:text-7xl">
              Generating dream rooms{" "}
              <span className="relative whitespace-nowrap text-red-600">
                <SquigglyLines />
                <span className="relative">using AI</span>
              </span>{" "}
              for everyone.
            </h1>
            <Link
              href="/create"
              className={`items-center  mt-8 ${buttonVariants()}`}
            >
              Get Started <ChevronRight />
            </Link>
          </div>
        </div>
        <div className="flex-1 overflow-hidden lg:ml-3">
          {/* <CompareSlider original={original1} restored={restored1} /> */}
          <Image src={edited} alt="room" className="rounded-sm" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
