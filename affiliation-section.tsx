"use client"

import { useState, useEffect, useRef } from "react"
import ShapeAffiliation from "./components/shapes/shape_affiliation"

export default function AffiliationSection() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  return (
    <section ref={sectionRef} className="container mx-auto px-4 md:px-6 py-16 max-w-7xl md:-mt-24 relative">
      <div className="relative flex items-center mb-12">
        <div className="flex-1 min-w-0">
          <div className="mb-2">
            <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">AFFILIATIONS</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-4">Our Educational Standards</h2>
        </div>
        <div className="w-24 h-24 md:w-48 md:h-48 md:-mt-8 ml-4 flex-shrink-0 relative z-10">
          <div className={`transition-transform duration-1000 md:scale-100 scale-50 -mt-10 mr-10 md:-mt-0 md:mr-0 ${inView ? "md:rotate-[360deg]" : "rotate-0"}`}>
            <ShapeAffiliation />
          </div>
        </div>
        <div className="absolute left-0 right-0 top-[70px] h-px bg-neutral-200 z-0" />
      </div>

      {/* Affiliations logos as shapes */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
        {/* Circle */}
        <div className="flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-blue-50"></div>
        </div>

        {/* Square */}
        <div className="flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-blue-50"></div>
        </div>

        {/* Triangle */}
        <div className="flex justify-center">
          <div className="w-0 h-0 border-l-[50px] border-r-[50px] border-b-[86px] sm:border-l-[55px] sm:border-r-[55px] sm:border-b-[95px] md:border-l-[65px] md:border-r-[65px] md:border-b-[112px] lg:border-l-[80px] lg:border-r-[80px] lg:border-b-[139px] border-l-transparent border-r-transparent border-b-blue-50"></div>
        </div>

        {/* Circle */}
        <div className="flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-blue-50"></div>
        </div>

        {/* Square */}
        <div className="flex justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-blue-50"></div>
        </div>

        {/* Triangle */}
        <div className="flex justify-center">
          <div className="w-0 h-0 border-l-[50px] border-r-[50px] border-b-[86px] sm:border-l-[55px] sm:border-r-[55px] sm:border-b-[95px] md:border-l-[65px] md:border-r-[65px] md:border-b-[112px] lg:border-l-[80px] lg:border-r-[80px] lg:border-b-[139px] border-l-transparent border-r-transparent border-b-blue-50"></div>
        </div>
      </div>
    </section>
  )
}
