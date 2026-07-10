"use client"
import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Shape5 from "./components/shapes/shape_5"
import Shape4 from "./components/shapes/shape_4"

export default function UniqueValueProposition() {
  const [rotate, setRotate] = useState(false)
  const [animateCards, setAnimateCards] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const shapeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let lastRatio = 0;
    const observer = new window.IntersectionObserver(
      (entries) => {
        const ratio = entries[0].intersectionRatio;
        if (!animateCards && ratio > 0.4) setAnimateCards(true);
        else if (animateCards && ratio < 0.1) setAnimateCards(false);
        lastRatio = ratio;
      },
      { threshold: [0, 0.1, 0.2, 0.4, 1] }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animateCards]);

  useEffect(() => {
    const shapeObserver = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setRotate(true);
        else setRotate(false);
      },
      { threshold: 0 }
    );
    if (shapeRef.current) shapeObserver.observe(shapeRef.current);
    return () => shapeObserver.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="relative flex items-start mb-6 md:mb-12">
        <div className="flex-1 min-w-0">
          <div className="mb-2">
            <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">UNIQUE VALUE PROPOSITION</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mt-6">Why Families Choose SCV</h2>
        </div>
        <div ref={shapeRef} className="hidden md:block md:w-48 md:h-48 md:-mt-8 ml-4 flex-shrink-0 z-10 md:relative">
          <div className={`inline-block transition-transform duration-1000 origin-center ${rotate ? "rotate-[360deg]" : "rotate-0"}`}>
            <Shape4 className="w-48 h-48" uid="uvp" />
          </div>
        </div>
        {/* Horizontal line */}
        <div className="absolute left-0 right-0 top-10 h-px bg-neutral-200 z-0" />
      </div>
      <div className="grid md:grid-cols-2 gap-8 relative">
        {/* Left Column */}
        <div className={`bg-blue-50 rounded-lg p-8 transition-all duration-700
          ${animateCards ? 'md:translate-x-0 md:opacity-100' : 'md:-translate-x-16 md:opacity-0'}
        `}>
          <div className="space-y-12">
            {/* Experienced Educators */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-white p-2 rounded-md">
                <Image
                  src="/images/teacher-icon.png"
                  alt="Teacher icon"
                  width={40}
                  height={40}
                  className="text-blue-500"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Experienced Educators</h3>
                <p className="text-gray-600">
                  Learn from dedicated teachers who bring passion and expertise to every classroom.
                </p>
              </div>
            </div>

            {/* Balanced Development */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-white p-2 rounded-md">
                <Image
                  src="/images/balance-icon.png"
                  alt="Balance scale icon"
                  width={40}
                  height={40}
                  className="text-blue-500"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Balanced Development</h3>
                <p className="text-gray-600">
                  Our approach nurtures academic, physical, emotional, and social growth equally.
                </p>
              </div>
            </div>
            {/* Add CTA button if present */}
          </div>
        </div>

        {/* Blue Blob SVG - positioned to overlap both columns */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="transform scale-75 md:scale-100">
            <Shape5 />
          </div>
        </div>

        {/* Right Column */}
        <div className={`bg-blue-50 rounded-lg p-8 transition-all duration-700
          ${animateCards ? 'md:translate-x-0 md:opacity-100' : 'md:translate-x-16 md:opacity-0'}
        `}>
          <div className="space-y-12">
            {/* Community Connection */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-white p-2 rounded-md">
                <Image
                  src="/images/link-icon.png"
                  alt="Chain link icon"
                  width={40}
                  height={40}
                  className="text-blue-500"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Community Connection</h3>
                <p className="text-gray-600">
                  Join a supportive environment where students, parents, and educators collaborate.
                </p>
              </div>
            </div>

            {/* Accessible Excellence */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-white p-2 rounded-md">
                <Image
                  src="/images/excellence-icon.png"
                  alt="Medal icon"
                  width={40}
                  height={40}
                  className="text-blue-500"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Accessible Excellence</h3>
                <p className="text-gray-600">
                  Quality education with transparent, stable fee structures for all learning stages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
