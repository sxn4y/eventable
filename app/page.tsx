"use client"

import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useEffect, useRef } from "react";
import { NavBar, NavItem } from "@/components/ui/navbar";
import "./globals.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#scroll-wrapper",
      content: "#smooth-content",
      smooth: 0.8,
      effects: true,
    });
  }, [containerRef.current]);

  return (
    <div>
      <NavBar
        brand={<span className="font-bold bebas">Logo</span>}
        className="fixed top-0 left-0 w-full z-50 shadow-xl dark:shadow-xl/30 backdrop-blur-md backdrop-saturate-150"
        variant="outline"
      >
        <NavItem href="">Link</NavItem>
        <NavItem href="">Link</NavItem>
        <NavItem href="">Link</NavItem>
        <NavItem href="">Link</NavItem>
      </NavBar>
      <div id="scroll-wrapper">
        <div id="smooth-content">
          <section className="h-screen mx-2 sm:mx-6 lg:mx-16 2xl:mx-32 p-4 bg-red-500">
            Hello
          </section>
        </div>
      </div>
    </div>
  );
}
