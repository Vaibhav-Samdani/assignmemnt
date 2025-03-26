"use client";

import Hero from "@/components/Hero";
import Creativity from "@/components/Creativity";
import UseCase from "@/components/UseCase";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function HeroSection() {

  return (
    <main className="flex flex-col w-full min-h-[100vh]">
    <Hero/>
    <Creativity/>
    <UseCase/>
    <Gallery/>
    <Faq/>
    <Footer/>
    </main>
  )
}
