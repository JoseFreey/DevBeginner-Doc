'use client'

import gsap from 'gsap';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useGSAP } from '@gsap/react';

export default function HomeHook({ children }: { children: React.ReactNode }) {
  const { setTheme, theme } = useTheme();
  const prevTheme = theme;

  useEffect(() => {
    setTheme("dark");
    return () => {
      if (prevTheme) {
        setTheme(prevTheme);
      }
    };
  });

  useGSAP(() => {
    const timeLine = gsap.timeline();
    timeLine.to(".path-anim", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      delay: 1.5
    }).to(".hero-background", {
      opacity: 0.8,
      duration: 2,
      ease: "power2.out"
    }, "-=0.5").to(".hero-logo", {
      scale: 1,
      duration: 2,
      ease: "power2.out"
    }, "<").to(".hero-button", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.2
    }, "-=1").to("#nd-nav", {
      transform: "translateY(0)",
      duration: 1,
      ease: "power2.out"
    }, "<");
  });

  return (<>{children}</>);
}
