"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarTrigger } from "@/components/ui/sidebar";
import Hero from "@/components/Hero";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";

export default function HeroSection() {

  return (
    <main className="flex flex-col w-full min-h-[100vh]">
    <Hero/>
    <SectionTwo/>
    <SectionThree/>
    </main>
  )
}
