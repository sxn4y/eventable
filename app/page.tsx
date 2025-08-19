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
import { useEffect, useRef, useState } from "react";
import { NavBar, NavItem } from "@/components/ui/navbar";
import "./globals.css";
import Button from "@/components/ui/button";
import Tag from "@/components/ui/tag";
import SReveal from "@/components/ui/sReveal";
import { ChevronRight } from "lucide-react";
import Card from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#scroll-wrapper",
      content: "#smooth-content",
      smooth: 0.8,
      effects: true,
    });
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Navbar buttons
    document.querySelectorAll(".features").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        smoother.scrollTo("#features", true, "center center");
      });
    });

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {}, []);

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
        className="navbar select-none fixed top-0 left-0 w-full z-50 shadow-xl dark:shadow-xl/30 *:font-bold"
        variant="custom"
      >
        <NavItem className="features">Features</NavItem>
        <NavItem className="how">How It Works</NavItem>
        <NavItem className="testimonials">Testimonials</NavItem>
        <NavItem>Link</NavItem>
      </NavBar>
      <div id="scroll-wrapper">
        <div id="smooth-content">
          {/* Hero Section */}
          <section className="h-screen flex flex-col items-center justify-center mx-2 sm:mx-8 lg:mx-32 2xl:mx-64 p-4 select-none">
            <Tag className="mb-12">Dubai's #1 Event Planning App</Tag>
            <div className="bebas text-[8rem] md:text-[12rem] leading-[8rem] md:leading-[10rem] text-center">
              PLAN EVENTS
            </div>
            <div className="subtitle mt-[-1rem]">
              with <strong>ease</strong>.
            </div>
            <div className="flex mt-16 gap-4 *:px-4 *:py-2 *:rounded-(--s3) *:text-xl">
              <Button parallax variant="fancy">
                Get Started
              </Button>
              <Button variant="link" className="flex items-center">
                Learn More <ChevronRight className="mr-[-0.5rem]" />
              </Button>
            </div>
          </section>

          {/* Features Section */}
          <SReveal
            opacity={0}
            duration={1.5}
            distance={400}
            once
            id="features"
            className="tilted-bg before:bg-(--foreground)/6 min-h-[48rem] relative flex flex-col items-center justify-center py-6 px-4 sm:px-8 lg:px-32 2xl:px-64"
          >
            <Tag className="reveal mb-12">Features</Tag>
            <div className="reveal bebas text-[4rem] md:text-[6rem] leading-[6rem] md:leading-[8rem] text-center">
              EVERYTHING YOU NEED FOR EVENT PLANNING.
            </div>
            <div className="reveal text-2xl md:text-4xl text-center">
              <strong>Powerful</strong> tools to make your celebrations
              extraordinary.
            </div>
            <div className="grid grid-flow-col grid-rows-6 md:grid-rows-2 grid-cols-1 md:grid-cols-3 mt-16 gap-6 *:px-4 *:py-2 *:rounded-(--s3) *:text-xl">
              <Card
                className="reveal min-h-[16rem] w-full md:w-[16vw]"
                variant="fancy"
                parallax
                tiltFactor={6}
              >
                Hello
              </Card>
              <Card
                className="reveal min-h-[16rem] w-full md:w-[16vw]"
                variant="fancy"
                parallax
                tiltFactor={6}
              >
                Hello
              </Card>
              <Card
                className="reveal min-h-[16rem] w-full md:w-[16vw]"
                variant="fancy"
                parallax
                tiltFactor={6}
              >
                Hello
              </Card>
              <Card
                className="reveal min-h-[16rem] w-full md:w-[16vw]"
                variant="fancy"
                parallax
                tiltFactor={6}
              >
                Hello
              </Card>
              <Card
                className="reveal min-h-[16rem] w-full md:w-[16vw]"
                variant="fancy"
                parallax
                tiltFactor={6}
              >
                Hello
              </Card>
              <Card
                className="reveal min-h-[16rem] w-full md:w-[16vw]"
                variant="fancy"
                parallax
                tiltFactor={6}
              >
                Hello
              </Card>
            </div>
          </SReveal>

          <section className="h-screen flex flex-col items-center justify-center mx-2 sm:mx-8 lg:mx-32 2xl:mx-64 p-4 select-none">
            <Tag className="mb-12">Dubai's #1 Event Planning App</Tag>
            <div className="title text-center">PLAN EVENTS</div>
            <div className="subtitle mt-[-1rem]">with ease.</div>
            <div className="flex mt-16 gap-4 *:px-4 *:py-2 *:rounded-(--s3) *:text-xl">
              <Button parallax variant="fancy">
                Get Started
              </Button>
              <Button variant="link" className="flex items-center">
                Learn More <ChevronRight className="mr-[-0.5rem]" />
              </Button>
            </div>
          </section>
          {/* <section className="h-screen flex items-center justify-center mx-2 sm:mx-8 lg:mx-32 2xl:mx-64 p-4"></section> */}
          {/* uncomment above for new sections */}
        </div>
      </div>
    </div>
  );
}
