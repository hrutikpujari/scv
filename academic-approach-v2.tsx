"use client"

import { useRef, useEffect, useState } from "react"
import AcademicShape from "./components/shapes/academic-shape"

export default function AcademicApproachV2() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState(false)
  const shapeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => setRotate(entries[0].isIntersecting),
      { threshold: 0 }
    )
    if (shapeRef.current) observer.observe(shapeRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left column - Content with decorative shape */}
        <div className={`lg:w-1/2 relative`}>
          <div className="mb-4">
            <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">OUR APPROACH</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6">Our Academic Approach</h2>

          <div className="space-y-6 mb-12">
            <p className="text-gray-700">
              At Shankarrao Chavan Vidyalaya & Junior College, we've established a reputation for educational excellence
              in Kamothe, Navi Mumbai, earning a 4.2-star rating based on parent feedback. Our curriculum is
              thoughtfully structured to meet the developmental needs of students at each level.
            </p>

            <p className="text-gray-700">
              We understand that effective learning requires both excellent teaching and accessible education. Our
              programs combine strong fundamentals with innovative teaching methods, all delivered within a transparent
              and stable fee structure that allows parents to plan with confidence.
            </p>
          </div>

          {/* Decorative shape */}
          <div ref={shapeRef} className="relative">
            <div className={`w-20 h-20 md:w-36 md:h-36 transition-transform duration-1000 origin-center ${rotate ? "rotate-[360deg]" : "rotate-0"}`}>
              <AcademicShape className="w-full h-full" uid="academic" />
            </div>
          </div>
        </div>

        {/* Right column - Key features */}
        <div className={`lg:w-1/2`}>
          <div className="bg-blue-50 p-8 rounded-lg mb-6">
            <h3 className="text-2xl font-medium text-blue-500 mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Student-Centered</h4>
                <p className="text-gray-700">Personalized attention with optimal student-teacher ratios</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Balanced Curriculum</h4>
                <p className="text-gray-700">Equal emphasis on academics, sports, arts, and character development</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Experienced Faculty</h4>
                <p className="text-gray-700">Qualified educators with passion for teaching and subject expertise</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Modern Methods</h4>
                <p className="text-gray-700">Innovative teaching approaches that engage and inspire students</p>
              </div>
            </div>
          </div>

          <div className="p-6 border-l-4 border-blue-400">
            <blockquote className="text-lg italic text-gray-700">
              "Our mission is to provide quality education that is both excellent and accessible, preparing students not
              just for exams but for life."
            </blockquote>
            <p className="mt-4 text-gray-600 font-medium">— Principal, SCV</p>
          </div>
        </div>
      </div>
    </section>
  )
}
