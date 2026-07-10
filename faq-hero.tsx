"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function FaqHero() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [device, setDevice] = useState("desktop")

  function getDeviceSize() {
    if (typeof window === "undefined") return "desktop"
    const width = window.innerWidth
    if (width < 768) return "mobile"
    if (width < 1024) return "tablet"
    return "desktop"
  }

  useEffect(() => {
    function handleResize() {
      setDevice(getDeviceSize())
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Hysteresis Intersection Observer: animate in at 0.4, out at 0.1
  useEffect(() => {
    let lastRatio = 0;
    const observer = new window.IntersectionObserver(
      (entries) => {
        const ratio = entries[0].intersectionRatio;
        if (!inView && ratio > 0.4) setInView(true);
        else if (inView && ratio < 0.1) setInView(false);
        lastRatio = ratio;
      },
      { threshold: [0, 0.1, 0.2, 0.4, 1] }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [inView]);

  const bannerSrc = {
    desktop: "/banner/faq/desktop/School Banner (Frequently Asked Questions) Desktop.png",
    tablet: "/banner/faq/tablet/School Banner (Frequently Asked Questions) Tablet.png",
    mobile: "/banner/faq/mobile/School Banner (Frequently Asked Questions) Mobile.png",
  }
  const aspect = {
    desktop: { width: 1440, height: 648, className: "aspect-[20/9]" },
    tablet: { width: 768, height: 500, className: "aspect-[192/125]" },
    mobile: { width: 700, height: 450, className: "aspect-[14/9]" },
  } as const
  const currentAspect = aspect[device as keyof typeof aspect]

  return (
    <section ref={sectionRef} className="relative w-full bg-blue-400">
      <Link href="/admissions#admissions-enquiry-form" className="block w-full">
        <div className={`w-full ${currentAspect.className} relative`}>
          <Image
            src={bannerSrc[device as keyof typeof bannerSrc]}
            alt="FAQ Banner"
            fill
            style={{ objectFit: "contain" }}
            sizes="100vw"
            priority
          />
        </div>
      </Link>
      {/* Hero Content */}
      {/* <div className="relative w-full py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className={`max-w-3xl text-white transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}> 
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Answers to Your Questions About SCV</h1>
              <p className="text-xl md:text-2xl mb-8">
                Comprehensive Information for Parents at Every Educational Stage
              </p>
              <div className="w-24 h-1 bg-white"></div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}
