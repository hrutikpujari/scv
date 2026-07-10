"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"

export default function JoinUsCard() {
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

  return (
    <section ref={sectionRef} className={`container mx-auto px-4 md:px-6 py-16 max-w-7xl transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
      {/* Section header */}
      <div className="mb-8">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">JOIN US</span>
      </div>

      {/* Connect With Us section */}
      <div className="bg-blue-50 p-4 md:p-8 rounded-lg relative">
        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          <div className="md:col-span-1">
            <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">CONTACT US</span>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-2xl md:text-4xl font-medium text-gray-800 mb-4">Become Part of the SCV Family</h3>
            <p className="text-gray-600 mb-6 md:mb-8 max-w-2xl">
              We invite families who share our vision of education that nurtures both mind and character to join the SCV
              community. Discover how your child can thrive in our supportive and stimulating environment.
            </p>
            <a
              href="/contact#form"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300 text-white font-medium py-3 px-8 rounded-full transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
