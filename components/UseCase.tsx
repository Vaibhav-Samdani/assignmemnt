import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const UseCase = () => {
  return (
    <>
      <section className="min-h-[200vh] bg-[#171717] lg:min-h-[180vh]">
        <main className="z-100  absolute left-0 w-full min-h-[180vh] flex flex-wrap ">
          <main className="relative w-full flex flex-col items-center justify-center space-y-12 lg:space-y-0 lg:flex-row lg:justify-around min-h-screen">
            {/* Left Side - Text */}
            <div className="text-white max-w-lg text-center lg:text-left flex flex-col items-center lg:items-start space-y-6">
              <h1 className="text-3xl mt-10 md:text-5xl ">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </h1>
              <p className="text-lg md:text-xl">
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod et
                dolore magna aliqua.
              </p>
              <Button className="bg-red-600 cursor-pointer px-6 py-3 text-lg rounded-3xl border border-red-600 hover:bg-red-700">
                Try Now
              </Button>
            </div>

            {/* Right Side - Image */}
            <div className="max-w-md">
              <Image
                width={400}
                height={350}
                className="h-auto rounded-2xl"
                src="/image-1.png"
                alt="image"
              />
            </div>
          </main>

          <main className="relative w-full flex flex-col items-center justify-center space-y-12 lg:space-y-0 lg:flex-row lg:justify-around min-h-screen">
            {/* Left Side - Video */}
            <div className="max-w-md">
              <video
                autoPlay
                loop
                muted
                playsInline
                width={400}
                height={350}
                className="w-[400px] h-[350px] object-cover rounded-2xl"
              >
                <source src="/video-1.mp4" type="video/mp4" />
              </video>
            </div>
            {/* Right Side - Text */}
            <div className="text-white max-w-lg text-center lg:text-left flex flex-col items-center lg:items-start space-y-6">
              <h1 className="text-3xl md:text-5xl ">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </h1>
              <p className="text-lg md:text-xl">
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod et
                dolore magna aliqua.
              </p>
              <Button className="bg-red-600 cursor-pointer px-6 py-3 text-lg rounded-3xl border border-red-600 hover:bg-red-700">
                Try Now
              </Button>
            </div>
          </main>

          
        </main>

        <div className="absolute flex items-center justify-center overflow-hidden w-full  min-h-[200vh] md:min-h-[170vh]">
          <div className=" w-96 h-96 bg-gradient-to-b from-fuchsia-500/60 via-red-600/60 to-yellow-500/60 blur-[200px]" />
        </div>
      </section>
    </>
  );
};

export default UseCase;
