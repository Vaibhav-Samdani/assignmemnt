'use client'
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const SectionTwo = () => {

    const carouselRef = useRef(null);

    useEffect(() => {
    
        if (carouselRef.current) {
          let ctx = gsap.context(() => {
            gsap.to(carouselRef.current, {
                transform : "translateX(-100%)",
                
                delay : 0,
                scrollTrigger : {
                    trigger : carouselRef.current,
                    scroller: "body",
                    markers: true,
                    start : "top 40%",
                    end : "top -20%",
                    scrub:2,
                    pin:true
                }
            });
          });
    
          return () => ctx.revert(); // Cleanup animation on unmount
        }
      }, []);
    

  return (
    <>
      <section className="min-h-[150vh] bg-[#171717] overflow-x-hidden ">
        <div className="z-100 h-96 absolute left-0 w-full min-h-full mt-10">
          <div className="w-full min-h-full flex flex-col justify-evenly items-center">
            <h1 className="text-4xl md:text-6xl font-medium gradient-text  my-30 mt-20">
              Advancing creativity <div>artificial intelligence.</div>
            </h1>
            <div className="w-full flex flex-col justify-center items-center md:items-start gap-8">
              <h1 className="text-white text-3xl md:text-5xl text-center md:text-left md:pl-40">
                Reveal your Creativity
                <div>with VIVID AI</div>
              </h1>

              <Carousel className="w-full m-2 md:m-0">
                <CarouselContent ref={carouselRef} className=" gap-5 ml-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem  key={index} className="max-w-[395px]">
                      <div className="rounded-2xl w-[395px] h-[450px] bg-[url(/gradient.png)] flex flex-col justify-center items-start px-4 py-3 outline-[1.20px] outline-offset-[-0.60px] outline-orange-600 overflow-hidden">
                        <div  className="bg-pink-600 w-[362px] h-[320px] mb-3 rounded-lg bg-[url(/image.jpeg)] bg-cover"></div>
                        <h3 className="text-white text-2xl font-medium my-2">
                          Title {index + 1}
                        </h3>
                        <p className="text-white text-[12px] font-normal">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                        <Button
                          className="text-red-600 m-0 p-0 animate-ease-in cursor-pointer"
                          variant="link"
                        >
                          Try now
                        </Button>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>

        <div className="absolute left-0 bg-transparent overflow-hidden w-full min-h-[150vh]">
          <div className="relative -left-20 top-30 w-[500px] h-[500px] bg-gradient-to-b from-fuchsia-500/60 via-red-600/60 to-yellow-500/60 blur-[250px]" />
          <div className="relative left-[90%] top-0 -translate-x-[70%] w-[500px] h-[500px] origin-top-left rotate-[-37.57deg] bg-gradient-to-b from-fuchsia-500/60 via-red-600/60 to-yellow-500/60 blur-[250px]" />
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
