"use client";

// assets
import GraphicLogo from "@/assets/logoGraphic.svg";
import GraphicLogoDark from "@/assets/logoGraphic_dark.svg";
import HorizontalLogo from "@/assets/logoHorizontal.svg";
import HorizontalLogoDark from "@/assets/logoHorizontal_dark.svg";

// other imports
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
        brand={
          <>
            <span className="font-bold bebas text-4xl flex flex-row gap-4 hidden dark:inline">
              <Image
                src={GraphicLogoDark}
                alt=""
                height={35}
                className="no-drag-select opacity-100 md:opacity-0 md:hidden"
              ></Image>
              <Image
                src={HorizontalLogoDark}
                alt=""
                height={35}
                className="no-drag-select opacity-0 hidden md:opacity-100 md:block"
              ></Image>
            </span>
            <span className="font-bold bebas text-4xl flex flex-row gap-4 dark:hidden">
              <Image
                src={GraphicLogo}
                alt=""
                height={35}
                className="no-drag-select opacity-100 md:opacity-0 md:hidden"
              ></Image>
              <Image
                src={HorizontalLogo}
                alt=""
                height={35}
                className="no-drag-select opacity-0 hidden md:opacity-100 md:block"
              ></Image>
            </span>
          </>
        }
        className="navbar select-none fixed top-0 left-0 w-full z-50 shadow-xl dark:shadow-xl/30"
        variant="custom"
      >
        <NavItem href="">Link</NavItem>
        <NavItem href="">Link</NavItem>
        <NavItem href="">Link</NavItem>
        <NavItem href="">Link</NavItem>
      </NavBar>
      <div id="scroll-wrapper">
        <div id="smooth-content">
          <section className="h-screen mx-2 sm:mx-6 lg:mx-16 2xl:mx-32 p-4">
            Hello
          </section>
        </div>
      </div>
    </div>
  );
}
