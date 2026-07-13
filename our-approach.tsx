"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import YellowStar from "./components/shapes/yellow-star"
import Shape5 from "./components/shapes/shape_5"

export default function OurApproach() {
  const [inView, setInView] = useState(false)
  const [rotateMobileStar, setRotateMobileStar] = useState(false)
  const [rotateDesktopStar, setRotateDesktopStar] = useState(false)
  const [rotateShape5, setRotateShape5] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const mobileStarRef = useRef<HTMLDivElement | null>(null)
  const desktopStarRef = useRef<HTMLDivElement | null>(null)
  const shape5Ref = useRef<HTMLDivElement | null>(null)

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

  // Separate observers for shapes with threshold: 0 (animate immediately on entry)
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => setRotateMobileStar(entries[0].isIntersecting),
      { threshold: 0 }
    )
    if (mobileStarRef.current) observer.observe(mobileStarRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => setRotateDesktopStar(entries[0].isIntersecting),
      { threshold: 0 }
    )
    if (desktopStarRef.current) observer.observe(desktopStarRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => setRotateShape5(entries[0].isIntersecting),
      { threshold: 0 }
    )
    if (shape5Ref.current) observer.observe(shape5Ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="teaching-methodology" className="container mx-auto px-4 md:px-6 py-16 max-w-7xl relative">
      <div ref={sectionRef} className="relative">
        {/* Mobile-only Yellow star shape */}
        <div ref={mobileStarRef} className="md:hidden absolute top-0 right-0 -mt-4 w-16 h-16 opacity-70">
          <div className={`transition-transform duration-1000 ${rotateMobileStar ? "rotate-[360deg]" : "rotate-0"}`}>
            <YellowStar className="w-full h-full" uid="mobile" />
          </div>
        </div>

        {/* Tablet/Desktop Yellow star shape - lower z-index */}
        <div ref={desktopStarRef} className="absolute top-0 right-0 -mt-8 hidden md:block z-0">
          <div className={`transition-transform duration-1000 ${rotateDesktopStar ? "rotate-[360deg]" : "rotate-0"}`}>
            <YellowStar className="w-32 h-32 lg:w-auto lg:h-auto" uid="desktop" />
          </div>
        </div>

        {/* Text content with higher z-index */}
        <div className="relative z-20">
          <div className="mb-2">
            <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">OUR APPROACH</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6 mt-6">Educational Philosophy</h2>

          <p className="text-gray-700 mb-12 max-w-3xl">
            At SCV, we believe in a holistic approach to education that balances academic excellence with personal growth.
            Our teaching methodology combines
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8 relative items-start">
          {/* Left Column - higher z-index than Shape5 */}
          <div className={`bg-blue-50 rounded-lg p-8 relative z-10 transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <div className="space-y-12">
              {/* Student-Centered Learning */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-transparent p-2 rounded-md">
                  <Image
                    src="/about/noto-v1_man-teacher.png"
                    alt="Student icon"
                    width={40}
                    height={40}
                    className="text-blue-500 relative z-20"
                  />
                </div>
                <div className="relative z-20">
                  <h3 className="text-xl font-medium mb-2">Student-Centered Learning</h3>
                  <p className="text-gray-600">
                    We recognize that each child learns differently and tailor our approaches to individual learning
                    styles.
                  </p>
                </div>
              </div>

              {/* Practical Application */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-transparent p-2 rounded-md">
                  <Image
                    src="/about/balance.png"
                    alt="Lightbulb icon"
                    width={40}
                    height={40}
                    className="text-blue-500 relative z-20"
                  />
                </div>
                <div className="relative z-20">
                  <h3 className="text-xl font-medium mb-2">Practical Application</h3>
                  <p className="text-gray-600">
                    We connect classroom concepts to real-world applications, making learning relevant and engaging.
                  </p>
                </div>
              </div>

              {/* Technology Integration */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-transparent p-2 rounded-md">
                  <Image
                    src="/about/balance-1.png"
                    alt="Pencil icon"
                    width={40}
                    height={40}
                    className="text-blue-500 relative z-20"
                  />
                </div>
                <div className="relative z-20">
                  <h3 className="text-xl font-medium mb-2">Technology Integration</h3>
                  <p className="text-gray-600">
                    Modern educational tools enhance traditional teaching methods to prepare students for a digital
                    future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Blue Blob SVG - bridges cards on mobile, absolute on desktop */}
          <div ref={shape5Ref} className="-my-10 w-full flex justify-center items-center self-center md:my-0 md:w-auto md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-30">
            <div className={`transform scale-50 md:scale-75 lg:scale-75 transition-transform duration-1000 ${rotateShape5 ? "rotate-[360deg]" : "rotate-0"}`}>
              <Shape5 uid="main" />
            </div>
          </div>

          {/* Right Column - higher z-index than Shape5 */}
          <div className={`bg-blue-50 rounded-lg p-8 relative z-10 transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <div className="space-y-12">
              {/* Character Development */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-transparent p-2 rounded-md">
                  <Image
                    src="/about/link.png"
                    alt="Graduate icon"
                    width={40}
                    height={40}
                    className="text-blue-500 relative z-20"
                  />
                </div>
                <div className="relative z-20">
                  <h3 className="text-xl font-medium mb-2">Character Development</h3>
                  <p className="text-gray-600">
                    Academic knowledge must be complemented by strong values and social-emotional skills.
                  </p>
                </div>
              </div>

              {/* Parent Partnership */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-transparent p-2 rounded-md">
                  <Image
                    src="/about/excellence.png"
                    alt="Family icon"
                    width={40}
                    height={40}
                    className="text-blue-500 relative z-20"
                  />
                </div>
                <div className="relative z-20">
                  <h3 className="text-xl font-medium mb-2">Parent Partnership</h3>
                  <p className="text-gray-600">
                    We believe that parents are essential partners in education, and we foster strong school-home
                    connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
