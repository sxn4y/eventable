"use client";

import React, { ReactNode, useEffect } from "react";
import "./epsilon.css";

export interface TagProps {
  children?: ReactNode;
  className?: string;
  parallax?: boolean;
  tiltFactor?: number;

  autoFocus?: boolean;
  command?: string;
  commandFor?: string;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  name?: string;
  type?: "tag" | "submit" | "reset";
  value?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;

  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "positive"
    | "danger"
}

const Tag: React.FC<TagProps> = ({
  children,
  className = "w-fit h-[100px]",
  parallax = false,
  tiltFactor = 8,

  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,

  variant = "primary",
}) => {
  const tagRef = React.useRef<HTMLDivElement>(null);
  const isTouchDevice = () => {
    if (typeof window !== "undefined") {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    return false;
  };

  if (isTouchDevice()) {
    tiltFactor = 0;
  }

  let inBuiltClass = "text-(--foreground) bg-(--accent)/40";

  switch (variant) {
    case "secondary":
      inBuiltClass = "text-(--foreground) bg-(--foreground)/20";
      break;
    case "outline":
      inBuiltClass = "text-(--foreground) bg-(--foreground)/20 border border-(--foreground)/40";
      break;
    case "positive":
      inBuiltClass = "text-(--foreground) bg-blue-500/20 dark:bg-blue-800/20";
      break;
    case "danger":
      inBuiltClass = "text-(--foreground) bg-red-500/20 dark:bg-red-800/20";
      break;
  }

  useEffect(() => {
    const tag = tagRef.current;
    let handleMouseMove = (e: MouseEvent) => {},
      handleMouseLeave = () => {};

    if (!tag) return;

    if (parallax) {
      handleMouseMove = (e: MouseEvent) => {
        const rect = tag.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const tiltX = (y - centerY) / (tag.clientHeight / tiltFactor);
        const tiltY = (centerX - x) / (tag.clientWidth / tiltFactor);

        tag.style.setProperty("--x", `${(x / tag.clientWidth) * 100}%`);
        tag.style.setProperty("--y", `${(y / tag.clientHeight) * 100}%`);
        tag.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      };

      handleMouseLeave = () => {
        tag.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      };

      tag.addEventListener("mousemove", handleMouseMove);

      tag.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      tag.removeEventListener("mousemove", handleMouseMove);
      tag.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      className={`${
        parallax ? "glow-effect" : "no-glow-effect"
      } ${className} ${inBuiltClass} px-3 py-1.5 rounded-(--s2) text-sm h-fit font-medium overflow-hidden `}
      ref={tagRef}
    >
      {children}
      <div className="glow-container" />
    </div>
  );
};

export default Tag;
