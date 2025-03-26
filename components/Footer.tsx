'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <main className="min-h-[140vh] w-full ">
      <section>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="relative top-0 left-0 w-full h-full object-cover"
        >
          <source src="/bottom-video.mp4" type="video/mp4" />
        </video>
      </section>
      <footer className=" bg-[#171717] text-white py-8">
        <div className="container mx-auto px-8 lg:px-24 flex flex-col lg:flex-row justify-center items-center pt-5 md:items-start md:justify-between ">
          {/* Logo */}
          <div className=" m-5  w-full">
            <Image
                        src="/logo-main.png"
                        alt="Logo"
                        width={4000}
                        height={100}
                        className="m-auto md:m-0 w-auto h-auto"
                      />
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:flex sm:justify-evenly lg:grid-cols-3 gap-6 text-sm w-[100%] md:m-auto lg:m-0 text-center md:text-start">
            <div className="md:mt-5">
              <h3 className="text-white text-2xl font-semibold mb-2">Products</h3>
              <ul className="text-white text-xl font-normal space-y-1">
                <li>
                  <Link href="#" className="hover:underline">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Playground
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:mt-5">
              <h3 className="text-white text-2xl font-semibold mb-2">Community</h3>
              <ul className="text-white text-xl font-normal space-y-1">
                <li>
                  <Link href="#" className="hover:underline">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    X
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:mt-5">
              <h3 className="text-white text-2xl font-semibold mb-2">Company</h3>
              <ul className="text-white text-xl font-normal space-y-1">
                <li>
                  <Link href="#" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Join us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#ffffff88] m-6 pt-4 md:text-start text-center text-sm">
          &copy; 2025. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
};

export default Footer;
