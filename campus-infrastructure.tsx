"use client"

import { useRef, useEffect, useState } from "react"
import BluePattern from "./components/shapes/blue-pattern"

export default function CampusInfrastructure() {
  const [inView, setInView] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const getDelay = (idx: number) => (isMobile ? {} : { transitionDelay: `${idx * 500}ms` })

  return (
    <section ref={sectionRef} className="container mx-auto px-4 md:px-6 py-16 max-w-7xl">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">CAMPUS & INFRASTRUCTURE</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6 mt-6">Our Learning Environment</h2>

      <p className="text-gray-700 mb-12 max-w-3xl">
        The SCV campus is designed to create an atmosphere conducive to learning, exploration, and growth. Our
        facilities include
      </p>

      {/* Top row - 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Modern Classrooms */}
        <div className={`bg-blue-50 p-6 rounded-lg${isMobile ? '' : ' transition-all duration-700'}${inView ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-8'}`} style={getDelay(0)}>
          <h3 className="text-xl font-medium text-gray-800 mb-4">Modern Classrooms</h3>
          <p className="text-gray-600">
            Spacious, well-ventilated classrooms equipped with smart boards and learning resources.
          </p>
        </div>

        {/* Science Laboratories */}
        <div className={`bg-blue-50 p-6 rounded-lg${isMobile ? '' : ' transition-all duration-700'}${inView ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-8'}`} style={getDelay(1)}>
          <h3 className="text-xl font-medium text-gray-800 mb-4">Science Laboratories</h3>
          <p className="text-gray-600">
            Fully equipped labs for Physics, Chemistry, and Biology to encourage hands-on experimentation.
          </p>
        </div>

        {/* Computer Labs */}
        <div className={`bg-blue-50 p-6 rounded-lg${isMobile ? '' : ' transition-all duration-700'}${inView ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-8'}`} style={getDelay(2)}>
          <h3 className="text-xl font-medium text-gray-800 mb-4">Computer Labs</h3>
          <p className="text-gray-600">
            State-of-the-art computer facilities with updated hardware and software for digital literacy and
            computational skills.
          </p>
        </div>

        {/* Library */}
        <div className={`bg-blue-50 p-6 rounded-lg${isMobile ? '' : ' transition-all duration-700'}${inView ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-8'}`} style={getDelay(3)}>
          <h3 className="text-xl font-medium text-gray-800 mb-4">Library</h3>
          <p className="text-gray-600">
            A comprehensive collection of books, periodicals, and digital resources to foster a love for reading and
            research.
          </p>
        </div>
      </div>

      {/* Bottom row - SVG + 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Blue Pattern SVG */}
        <div className="flex justify-center items-center py-4">
          <BluePattern className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]" />
        </div>

        {/* Sports Facilities */}
        <div className={`bg-blue-50 p-6 rounded-lg${isMobile ? '' : ' transition-all duration-700'}${inView ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-8'}`} style={getDelay(4)}>
          <h3 className="text-xl font-medium text-gray-800 mb-4">Sports Facilities</h3>
          <p className="text-gray-600">
            Well-maintained playgrounds, courts, and equipment for various indoor and outdoor sports activities.
          </p>
        </div>

        {/* Multipurpose Hall */}
        <div className={`bg-blue-50 p-6 rounded-lg${isMobile ? '' : ' transition-all duration-700'}${inView ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-8'}`} style={getDelay(5)}>
          <h3 className="text-xl font-medium text-gray-800 mb-4">Multipurpose Hall</h3>
          <p className="text-gray-600">A spacious venue for assemblies, cultural programs, and community gatherings.</p>
        </div>

        {/* Art & Music Rooms */}
        <div className={`bg-blue-50 p-6 rounded-lg${isMobile ? '' : ' transition-all duration-700'}${inView ? ' opacity-100 translate-y-0' : ' opacity-0 translate-y-8'}`} style={getDelay(6)}>
          <h3 className="text-xl font-medium text-gray-800 mb-4">Art & Music Rooms</h3>
          <p className="text-gray-600">Dedicated spaces for creative expression and performing arts exploration.</p>
        </div>
      </div>

      {/* Our Educators Section */}
      <div id="core-team" className="mt-24">
        <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6">Our Educators</h2>

        <p className="text-gray-700 mb-8 max-w-3xl">
          The heart of SCV is our dedicated team of educators who bring expertise, passion, and commitment to the
          classroom every day. Our faculty members:
        </p>

        <ul className="space-y-4 list-disc pl-5 text-gray-700 mb-8">
          <li>Hold advanced degrees in their respective subject areas</li>
          <li>Participate in regular professional development to stay current with educational trends</li>
          <li>Create engaging learning experiences that inspire curiosity and critical thinking</li>
          <li>Provide personalized attention to address the unique needs of each student</li>
          <li>Serve as mentors who guide students in academics and life skills</li>
        </ul>

        <p className="text-gray-700">
          We maintain an optimal student-teacher ratio to ensure each child receives the attention they deserve.
        </p>
      </div>
    </section>
  )
}
