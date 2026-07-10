"use client"

import { useRef, useEffect, useState } from "react"
import CoreValuesShape from "./components/shapes/core-values-shape"

export default function CoreValues() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const getDelay = (idx: number) => ({ transitionDelay: `${idx * 500}ms` })

  return (
    <section ref={sectionRef} className="container mx-auto px-4 md:px-6 py-16 max-w-7xl relative">
      {/* Section header */}
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">CORE VALUES</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-12 mt-6">What We Stand For</h2>

      {/* Mobile-only CoreValuesShape */}
      <div className="md:hidden absolute top-12 right-4 w-16 h-16 opacity-70">
        <div className="w-full h-full">
          <CoreValuesShape className="w-full h-full" uid="mobile" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Excellence */}
        <div className={`bg-blue-50 p-8 rounded-lg transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={getDelay(0)}>
          <h3 className="text-2xl text-gray-800 mb-4">Excellence</h3>
          <p className="text-gray-700">
            We pursue excellence in all aspects of education, challenging our students to reach their highest potential.
          </p>
        </div>

        {/* Integrity */}
        <div className={`bg-blue-50 p-8 rounded-lg transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={getDelay(1)}>
          <h3 className="text-2xl text-gray-800 mb-4">Integrity</h3>
          <p className="text-gray-700">
            We believe in honesty, transparency, and ethical behavior in all our interactions and decisions.
          </p>
        </div>

        {/* Inclusivity */}
        <div className={`bg-blue-50 p-8 rounded-lg transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={getDelay(2)}>
          <h3 className="text-2xl text-gray-800 mb-4">Inclusivity</h3>
          <p className="text-gray-700">
            We celebrate diversity and create an environment where every student feels valued and respected.
          </p>
        </div>

        {/* Blue SVG Shape */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <CoreValuesShape uid="desktop" />
          </div>
        </div>

        {/* Empty column */}
        <div className="hidden md:block"></div>

        {/* Innovation */}
        <div className={`bg-blue-50 p-8 rounded-lg transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={getDelay(3)}>
          <h3 className="text-2xl text-gray-800 mb-4">Innovation</h3>
          <p className="text-gray-700">
            We embrace new teaching methodologies and technologies to enhance the learning experience.
          </p>
        </div>

        {/* Responsibility - spans 2 columns */}
        <div className={`bg-blue-50 p-8 rounded-lg md:col-span-2 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={getDelay(4)}>
          <h3 className="text-2xl text-gray-800 mb-4">Responsibility</h3>
          <p className="text-gray-700">We foster a sense of responsibility toward self, community, and environment.</p>
        </div>
      </div>
    </section>
  )
}
