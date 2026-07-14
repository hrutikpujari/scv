"use client"

import { useRef, useEffect, useState } from "react"
import BlueHalfCircle from "@/components/shapes/blue-half-circle"
import YellowHalfCircle from "@/components/shapes/yellow-half-circle"

export default function AdmissionsHero() {
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
    <section ref={sectionRef} className="relative bg-blue-500 py-12 md:py-20 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 opacity-20">
        <BlueHalfCircle />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 opacity-20">
        <YellowHalfCircle />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}> 
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Begin Your Educational Journey with SCV</h1>
          <p className="text-xl md:text-2xl text-white text-opacity-90 mb-8">
            A Seamless Admissions Process for Every Grade Level
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#apply-online"
              className="bg-white hover:bg-gray-100 text-blue-500 font-medium py-3 px-6 rounded-full transition"
            >
              Apply Now
            </a>
            <a
              href="#admission-process"
              className="bg-transparent hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full border border-white transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
