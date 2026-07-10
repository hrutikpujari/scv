"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Shape6 from "./components/shapes/shape_6"

export default function AboutUsSection() {
  const [animateCols, setAnimateCols] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let lastRatio = 0;
    const observer = new window.IntersectionObserver(
      (entries) => {
        const ratio = entries[0].intersectionRatio;
        if (!animateCols && ratio > 0.4) setAnimateCols(true);
        else if (animateCols && ratio < 0.1) setAnimateCols(false);
        lastRatio = ratio;
      },
      { threshold: [0, 0.1, 0.2, 0.4, 1] }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animateCols]);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="relative flex items-start mb-4 md:mb-12">
        <div className="flex-1 min-w-0">
          <div className="mb-8">
            <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">ABOUT US</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-4">Education That Transforms</h2>
        </div>
        {/* ...existing code for shape if any... */}
        <div className="absolute left-0 right-0 top-[44px] h-px bg-neutral-200 z-0" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
        {/* Left column with flex to push button to bottom */}
        <div className={`flex flex-col h-full justify-between transition-all duration-700
          ${animateCols ? 'md:translate-x-0 md:opacity-100' : 'md:-translate-x-16 md:opacity-0'}
        `}>
          <div>
            <p className="text-gray-600 mb-4">
              At SCV, we believe in education that goes beyond textbooks. Our students don't just learn subjects—they
              develop critical thinking, creativity, and the confidence to shape their future.
            </p>

            <p className="text-gray-600">
              With our comprehensive approach across all age groups, we're preparing the next generation of leaders,
              thinkers, and innovators.
            </p>
          </div>

          {/* Button aligned to bottom */}
          <div className="flex items-end mt-8 md:mb-28">
            <Link
              href="/admissions#admissions-enquiry-form"
              className="bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white py-3 px-8 rounded-full text-sm transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300 inline-block"
            >
              Join the SCV Family
            </Link>
            <div className="-mb-0 ml-10 md:ml-16 scale-150 transition-transform">
              <Shape6 />
            </div>
          </div>
        </div>

        {/* Right column with larger image */}
        <div className={`relative flex justify-center transition-all duration-700
          ${animateCols ? 'md:translate-x-0 md:opacity-100' : 'md:translate-x-16 md:opacity-0'}
        `}>
          <Image
            src="/images/education.png"
            alt="Student writing on chalkboard"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
        <div className="p-4 flex flex-col items-center">
          <div className="mb-4 w-20 h-20 flex items-center justify-center">
            <Image
              src="/images/campus-icon.png"
              alt="Modern Campus"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h3 className="text-gray-800 font-medium">Modern Campus</h3>
        </div>

        <div className="p-4 flex flex-col items-center">
          <div className="mb-4 w-20 h-20 flex items-center justify-center">
            <Image
              src="/images/faculty-icon.png"
              alt="Experienced Faculty"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h3 className="text-gray-800 font-medium">Experienced Faculty</h3>
        </div>

        <div className="p-4 flex flex-col items-center">
          <div className="mb-4 w-20 h-20 flex items-center justify-center">
            <Image
              src="/images/balance-curriculum-icon.png"
              alt="Holistic Curriculum"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h3 className="text-gray-800 font-medium">Holistic Curriculum</h3>
        </div>

        <div className="p-4 flex flex-col items-center">
          <div className="mb-4 w-20 h-20 flex items-center justify-center">
            <Image
              src="/images/fees-icon.png"
              alt="Competitive Fees"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h3 className="text-gray-800 font-medium">Competitive Fees</h3>
        </div>

        <div className="p-4 flex flex-col items-center">
          <div className="mb-4 w-20 h-20 flex items-center justify-center">
            <Image
              src="/images/sports-icon.png"
              alt="Sports Excellence"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h3 className="text-gray-800 font-medium">Sports Excellence</h3>
        </div>

        <div className="p-4 flex flex-col items-center">
          <div className="mb-4 w-20 h-20 flex items-center justify-center">
            <Image
              src="/images/diversity-icon.png"
              alt="Cultural Diversity"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h3 className="text-gray-800 font-medium">Cultural Diversity</h3>
        </div>
      </div>
    </section>
  )
}
