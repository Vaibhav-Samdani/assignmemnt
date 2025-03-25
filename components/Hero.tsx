"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useEffect, useRef } from "react";
const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <header className="w-full min-h-[100vh] flex">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      <nav className="fixed w-full h-20 z-2000 flex justify-between items-center md:p-8 px-5">
        <div className="logo">
          <Image
            src="/logo-main.png"
            alt="Logo"
            width={150}
            height={40}
            className="w-auto h-auto"
          />
        </div>
        <div className="flex justify-between items-center ">
          <ul className="hidden md:flex justify-between items-center text-white">
            <li className="p-5">BLOG</li>
            <li className="p-5">TOOLS</li>
            <li className="p-5">API</li>
            <li className="p-5">GALLERY</li>
            <li className="p-5">CONTACT</li>
          </ul>
          <Button className="rounded-3xl px-6 py-2 bg-white text-black font-bold animate-ease-in drop-shadow-2xl hover:text-white">
            GET STARTED
          </Button>
          <Button className="bg-transparent md:hidden">
            <SidebarTrigger className="bg-slate-500" />
          </Button>
        </div>
      </nav>
      <AppSidebar />
      {/* Content */}
      <div className="absolute flex flex-col z-10 text-white justify-center items-left left-4 mr-4 md:left-14 bottom-28 lg:bottom-36">
        <h1 className="text-[3rem] md:text-[5rem] font-medium md:p-3 drop-shadow-2xl">
          Transforming Your <div className="">Ideas into Reality</div>
        </h1>
        <p className="m-3">
          Lorem ipsum dolor sit amet, adipiscing dolore magna aliqua.
        </p>
        <div className="m-3">
          <Link href="/api">
            <button className="px-6 py-2 bg-neutral-900 rounded-3xl outline-[1.60px] outline-offset-[-1.60px] outline-red-600 outline-opacity-20 inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer drop-shadow-2xl hover:bg-neutral-800 hover:text-neutral-200 animate-ease-in">
              Get an API
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
