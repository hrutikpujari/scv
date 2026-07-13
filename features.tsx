"use client"
import React, { useEffect, useRef, useState } from "react"
import Shape3 from "./components/shapes/shape_3"
import Shape10 from "./components/shapes/shape_10"
import Shape4 from "./components/shapes/shape_4"

export default function Features() {
  const [showCards, setShowCards] = useState([false, false, false])
  const containerRef = useRef<HTMLDivElement>(null)
  const timersRef = useRef<NodeJS.Timeout[]>([])
  const [inView, setInView] = useState(false)
  const inViewRef = useRef(false)
  const [rotate, setRotate] = useState(false)
  const shapeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const ratio = entries[0].intersectionRatio;
      if (!inViewRef.current && ratio > 0.4) {
        inViewRef.current = true;
        setInView(true);
        timersRef.current.forEach(timer => clearTimeout(timer))
        timersRef.current = [
          setTimeout(() => setShowCards([true, false, false]), 100),
          setTimeout(() => setShowCards([true, true, false]), 600),
          setTimeout(() => setShowCards([true, true, true]), 1100),
        ]
      }
    }
    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: [0, 0.1, 0.2, 0.4, 1]
    })
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    return () => {
      observer.disconnect()
      timersRef.current.forEach(timer => clearTimeout(timer))
    }
  }, [])

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setRotate(true)
        else setRotate(false)
      },
      { threshold: 0 }
    )
    if (shapeRef.current) observer.observe(shapeRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
        <div className="w-[80%] lg:w-1/4 relative">
          <h2 className="text-md md:text-xl text-gray-800 mb-4 lg:mb-4 relative z-10 text-left w-[70%] lg:w-full">
            We offer dynamic, career-oriented courses designed to accelerate professional growth.
          </h2>

          {/* Mobile/Tablet Arrow (Shape10) - Hidden on desktop, positioned absolutely */}
          <div className="lg:hidden absolute -right-16 top-16 -translate-y-1/2 rotate-[0deg]">
            <div className="scale-130">
              <Shape10 />
            </div>
          </div>

          {/* Desktop Arrow (Shape3) - Hidden on mobile/tablet */}
          <div className="hidden lg:block w-full h-auto z-0 my-0">
            <div className="rotate-[0deg]">
              <Shape3 />
            </div>
          </div>
        </div>

        <div className="lg:w-3/4 grid md:grid-cols-3 gap-6">
          {/* Pre-School Card */}
          <div className="relative">
          <div className={`relative p-8 rounded-lg flex flex-col h-full overflow-hidden transition-opacity duration-700 bg-[#F0F7FF] md:bg-transparent ${showCards[0] ? "opacity-100" : "opacity-0"}`}>
            <img src="/images/1.png" alt="Pre-School Background" className="absolute inset-0 w-full h-full object-cover z-0 md:block hidden" />
            <div className="relative z-10">
              <div className="text-sm  mb-2">Pre-School</div>
              <h3 className="text-xl  mb-4">Early Foundations</h3>
              <p className="">
                Our nurturing pre-primary program creates joy in learning while building essential skills through play
                and discovery.
              </p>
            </div>
            <div className="mt-auto pt-8 relative z-10">
              <a
                href="/academics#pre-school"
                className="inline-block bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white py-3 px-6 rounded-full text-sm transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300"
              >
                Explore Pre-School
              </a>
            </div>
          </div>
          {/* Mobile-only Shape4 - at bottom of first card */}
          <div ref={shapeRef} className="md:hidden absolute -bottom-8 right-5 z-10">
            <div className={`inline-block transition-transform duration-1000 origin-center ${rotate ? "rotate-[360deg]" : "rotate-0"}`}>
              <Shape4 className="w-16 h-16" uid="features" />
            </div>
          </div>
          </div>

          {/* High School Card */}
          <div className={`relative p-8 rounded-lg flex flex-col h-full overflow-hidden transition-opacity duration-700 bg-[#F0F7FF] md:bg-transparent ${showCards[1] ? "opacity-100" : "opacity-0"}`}>
            <img src="/images/2.png" alt="High School Background" className="absolute inset-0 w-full h-full object-cover z-0 md:block hidden" />
            <div className="relative z-10">
              <div className="text-sm  mb-2">High School</div>
              <h3 className="text-xl  mb-4">Comprehensive Excellence</h3>
              <p className="">
                Experience our balanced curriculum designed to develop critical thinking, creativity, and comprehensive
                knowledge.
              </p>
            </div>
            <div className="mt-auto pt-8 relative z-10">
              <a
                href="/academics#school"
                className="inline-block bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white py-3 px-6 rounded-full text-sm transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300"
              >
                Discover School Programs
              </a>
            </div>
          </div>

          {/* College Card */}
          <div className={`relative p-8 rounded-lg flex flex-col h-full overflow-hidden transition-opacity duration-700 bg-[#F0F7FF] md:bg-transparent ${showCards[2] ? "opacity-100" : "opacity-0"}`}>
            <img src="/images/3.png" alt="College Background" className="absolute inset-0 w-full h-full object-cover z-0 md:block hidden" />
            <div className="relative z-10">
              <div className="text-sm  mb-2">College</div>
              <h3 className="text-xl  mb-4">Preparing for Tomorrow</h3>
              <p className="">
                Our Junior College provides specialized guidance for competitive exams while fostering independence.
              </p>
            </div>
            <div className="mt-auto pt-8 relative z-10">
              <a
                href="/academics#junior-college"
                className="inline-block bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white py-3 px-6 rounded-full text-sm transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300"
              >
                Junior College Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
