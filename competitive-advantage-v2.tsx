"use client"

import { useRef, useEffect, useState } from "react"
import YellowStar from "./components/shapes/yellow-star"

export default function CompetitiveAdvantageV2() {
  const [inView, setInView] = useState(false)
  const [rotate, setRotate] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const mobileShapeRef = useRef<HTMLDivElement>(null)
  const desktopShapeRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setRotate(true)
          else setRotate(false)
        })
      },
      { threshold: 0 }
    )
    if (mobileShapeRef.current) observer.observe(mobileShapeRef.current)
    if (desktopShapeRef.current) observer.observe(desktopShapeRef.current)
    return () => observer.disconnect()
  }, [])

  const getDelay = (idx: number) => ({ transitionDelay: `${idx * 500}ms` })

  return (
    <section ref={sectionRef} className="container mx-auto px-4 md:px-6 max-w-7xl relative">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">WHY CHOOSE SCV</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left column with heading and star */}
        <div className="md:w-1/3 relative">
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6 md:mb-0 mt-3">Our Competitive Advantage</h2>

          {/* Mobile-only yellow star shape - top right */}
          <div ref={mobileShapeRef} className="md:hidden absolute -top-12 right-0 w-16 h-16 opacity-70">
            <div className={`w-full h-full transition-transform duration-1000 origin-center ${rotate ? "rotate-[360deg]" : "rotate-0"}`}>
              <YellowStar className="w-full h-full" uid="competitive-mobile" />
            </div>
          </div>

          {/* Desktop/Tablet yellow star shape */}
          <div ref={desktopShapeRef} className="hidden md:block w-32 h-32 md:w-48 md:h-48 md:absolute md:top-24 lg:top-16 md:-left-4 opacity-80 mt-12">
            <div className={`w-full h-full transition-transform duration-1000 origin-center ${rotate ? "rotate-[360deg]" : "rotate-0"}`}>
              <YellowStar className="w-full h-full" uid="competitive-desktop" />
            </div>
          </div>
        </div>

        {/* Right column with advantages */}
        <div className="md:w-2/3 z-10 relative">
          <p className="text-gray-700 mb-8">
            When comparing educational options in Kamothe, SCV offers distinct advantages:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`bg-blue-100 p-6 rounded-lg transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={getDelay(0)}>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Comprehensive Grade Coverage</h3>
              <p className="text-gray-700">
                Unlike schools such as Ryan Shalom Montessori (Pre-Nursery - UKG) or Indo Scots Global School (Nursery -
                Class 8), SCV provides a continuous educational journey from pre-primary through Junior College.
              </p>
            </div>

            <div className={`bg-blue-100 p-6 rounded-lg transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={getDelay(1)}>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Balanced Student-Teacher Ratio</h3>
              <p className="text-gray-700">
                We maintain an optimal classroom size that provides more individual attention than some competitors who
                have ratios as high as 30:1.
              </p>
            </div>

            <div className={`bg-blue-100 p-6 rounded-lg transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={getDelay(2)}>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Value-Based Education</h3>
              <p className="text-gray-700">
                Our fee structure delivers quality education at rates that are considerably more affordable than many
                premium schools in the area, where monthly fees can range from ₹3,300 to ₹4,700 for just the nursery
                level.
              </p>
            </div>

            <div className={`bg-blue-100 p-6 rounded-lg transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={getDelay(3)}>
              <h3 className="text-xl font-medium text-gray-800 mb-4">Stable Fee Structure</h3>
              <p className="text-gray-700">
                Parents appreciate our transparent and predictable fee structure, allowing for better financial planning
                throughout their child's educational journey.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-1 h-16 bg-blue-500 mr-6"></div>
              <blockquote className="text-lg italic text-gray-700">
                "SCV stands out for its commitment to providing quality education that remains accessible to all
                families in our community."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
