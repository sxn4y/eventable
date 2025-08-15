import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: containerRef.current,
      content: containerRef.current?.querySelector(".smooth-content"),
      smooth: 0.8,
      effects: true,
    });
  }, [containerRef.current]);

  return (
    <div className="scroll-wrapper">
      <div className="smooth-content font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="title">BOILERPLATE</div>
      </div>
    </div>
  );
}
