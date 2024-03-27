"use client"
import React from "react";
import Image from "next/image"
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm-text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-grey-600 to-green-500">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Tommy',
                1000,
                'Full Stack developer',
                1000,
                'Web developer',
                1000,
                'Mobile developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ color: "##acacb0" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Front End, Back End or Full Stack developer working around the Web and Mobile to create the best website or app possible
          </p>
          <div>
            <Link href="contact">
              <button className="px-5 py-3 rounded-full w-full sm:w-fit mr-4 mb-2 bg-gradient-to-br from-blue-900 via-grey-600 to-green-500 hover:bg-slate-800 text-[#ffffff]">
                Hire me!
              </button>
            </Link>
            <a
              href="/assets/TommyDang-CV.pdf"
              download={"Hire me!"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline poppins text-sm"
            >
              <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-transparent bg-gradient-to-br from-blue-900 via-grey-600 to-green-500 hover:bg-slate-800 text-white">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV!</span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/portfolio-profile.png"
              alt="profile Image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;