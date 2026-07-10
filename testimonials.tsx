"use client"

import { useRef, useEffect, useState } from "react"
import YellowHalfCircle from "./components/shapes/yellow-half-circle"
import BlueHalfCircle from "./components/shapes/blue-half-circle"

export default function Testimonials() {
  const [inView, setInView] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [rotateYellow, setRotateYellow] = useState(false)
  const [rotateBlue, setRotateBlue] = useState(false)
  const yellowShapeRef = useRef<HTMLDivElement>(null)
  const blueShapeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) {
      setInView(true)
      return
    }
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
  }, [inView, isMobile]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => setRotateYellow(entries[0].isIntersecting),
      { threshold: 0 }
    )
    if (yellowShapeRef.current) observer.observe(yellowShapeRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => setRotateBlue(entries[0].isIntersecting),
      { threshold: 0 }
    )
    if (blueShapeRef.current) observer.observe(blueShapeRef.current)
    return () => observer.disconnect()
  }, [])

  const getDelay = (idx: number) => (isMobile ? {} : { transitionDelay: `${idx * 500}ms` })

  return (
    <section ref={sectionRef} className="container mx-auto px-4 md:px-6 py-16 max-w-7xl">
      {/* Leadership Team Section */}
      <div className="relative mb-24">
        {/* Yellow half circle */}
        <div ref={yellowShapeRef} className="absolute top-0 right-0 -mt-4 md:-mt-8 block">
          <div className={`transition-transform duration-1000 ${rotateYellow ? "rotate-[360deg]" : "rotate-0"}`}>
            <div className="w-24 h-12 md:w-[200px] md:h-[100px]">
              <YellowHalfCircle className="w-full h-full" uid="yellow" />
            </div>
          </div>
        </div>

        <div className="mb-2">
          <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">TESTIMONIALS</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-12 mt-6">Meet Our Leadership Team</h2>

        <div className={`bg-gray-50 p-8 md:p-12 rounded-lg${isMobile ? '' : ' transition-all duration-700'}${inView ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-gray-700 text-lg md:text-xl mb-8">
              "At SCV, we believe education is the foundation upon which we build our future. Our approach goes beyond
              textbooks and examinations to nurture curious minds, strong characters, and compassionate hearts. We
              invite you to join our community where every student's journey is valued and supported."
            </blockquote>

            <div className="flex justify-end">
              <div className="text-right">
                <p className="text-gray-800 font-medium">[Principal's Name]</p>
                <p className="text-gray-600 text-sm">Principal, Shankarrao Chavan Vidyalaya & Junior College</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Administration Section */}
      <div className="relative">
        {/* Blue half circle */}
        <div ref={blueShapeRef} className="absolute top-0 right-0 -mt-4 md:-mt-8 block">
          <div className={`transition-transform duration-1000 ${rotateBlue ? "rotate-[360deg]" : "rotate-0"}`}>
            <div className="w-24 h-12 md:w-[200px] md:h-[100px]">
              <BlueHalfCircle className="w-full h-full" uid="blue" />
            </div>
          </div>
        </div>

        <div className="mb-2">
          <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">TESTIMONIALS</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-12 mt-6">Our Administration</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Description */}
          <div className={`bg-blue-50 p-8 rounded-lg${isMobile ? '' : ' transition-all duration-700'}${inView ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-8'}`} style={getDelay(0)}>
            <p className="text-gray-700">
              Our school is guided by experienced educators and administrators who bring diverse expertise and a shared
              commitment to educational excellence.
            </p>
          </div>

          {/* Admin 1 */}
          <div className={`flex flex-col${isMobile ? '' : ' transition-all duration-700'}${inView ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-8'}`} style={getDelay(1)}>
            <div className="bg-gray-300 w-full aspect-square mb-4"></div>
            <h3 className="text-gray-800 font-medium">[Name]</h3>
            <p className="text-gray-600 text-sm">Designation</p>
          </div>

          {/* Admin 2 */}
          <div className={`flex flex-col${isMobile ? '' : ' transition-all duration-700'}${inView ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-8'}`} style={getDelay(2)}>
            <div className="bg-gray-300 w-full aspect-square mb-4"></div>
            <h3 className="text-gray-800 font-medium">[Name]</h3>
            <p className="text-gray-600 text-sm">Designation</p>
          </div>

          {/* Admin 3 */}
          <div className={`flex flex-col${isMobile ? '' : ' transition-all duration-700'}${inView ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-8'}`} style={getDelay(3)}>
            <div className="bg-gray-300 w-full aspect-square mb-4"></div>
            <h3 className="text-gray-800 font-medium">[Name]</h3>
            <p className="text-gray-600 text-sm">Designation</p>
          </div>
        </div>
      </div>
    </section>
  )
}
