import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Shape11 from "./components/shapes/shape_11"

export default function QuickConnections() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
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
  const getDelay = (idx: number) => ({ transitionDelay: `${idx * 400}ms` })
  return (
    <section ref={sectionRef} className="container mx-auto px-4 md:px-6 py-16 max-w-7xl relative">
      {/* Mobile-only Shape11 top-right */}
      <div className="md:hidden absolute top-12 right-4 w-20 h-20 opacity-70">
        <Shape11 className="w-full h-full" uid="mobile" />
      </div>

      {/* Section header */}
      <div className="mb-8">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">QUICK CONNECTIONS</span>
      </div>

      {/* Mobile layout (stacked) */}
      <div className="md:hidden space-y-12">
        {/* Admissions Team */}
        <div className={`transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={getDelay(0)}>
          <h2 className=" text-2xl font-medium text-gray-800 mb-4">Admissions Team</h2>
          <p className="text-gray-700 mb-2">For enasdasdrollment queries and campus tours</p>
          <p className="flex flex-col gap-1">
            <span className="text-gray-700">[Phone Number]</span>
            <Link href="mailto:admissions@scv.org.in" className="text-blue-400 hover:text-blue-500 transition">
              admissions@scv.org.in
            </Link>
          </p>
        </div>

        {/* Academic Coordinators */}
        <div className={`md:hidden transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={getDelay(1)}>
          <h2 className="text-2xl font-medium text-gray-800 mb-4">Academic Coordinators</h2>
          <div className="space-y-3">
            <p className="flex flex-col gap-1">
              <span className="text-gray-700 font-medium">Pre-School & Primary:</span>
              <Link href="mailto:preschool@scv.org.in" className="text-blue-400 hover:text-blue-500 transition">
                [Email]
              </Link>
            </p>
            <p className="flex flex-col gap-1">
              <span className="text-gray-700 font-medium">Middle & High School:</span>
              <Link href="mailto:highschool@scv.org.in" className="text-blue-400 hover:text-blue-500 transition">
                [Email]
              </Link>
            </p>
            <p className="flex flex-col gap-1">
              <span className="text-gray-700 font-medium">Junior College:</span>
              <Link href="mailto:college@scv.org.in" className="text-blue-400 hover:text-blue-500 transition">
                [Email]
              </Link>
            </p>
          </div>
        </div>

        {/* Transport Department */}
        <div className={`md:hidden transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={getDelay(2)}>
          <h2 className="text-2xl font-medium text-gray-800 mb-4">Transport Department</h2>
          <p className="text-gray-700 mb-2">For school bus routes and scheduling</p>
          <p className="flex flex-col gap-1">
            <span className="text-gray-700">[Phone Number]</span>
            <Link href="mailto:transport@scv.org.in" className="text-blue-400 hover:text-blue-500 transition">
              transport@scv.org.in
            </Link>
          </p>
        </div>
      </div>

      {/* Tablet and Desktop layout (grid) */}
      <div className="hidden md:grid grid-cols-12 gap-6 lg:gap-16">
        {/* Left column - SVG shape */}
        <div className="col-span-2 row-span-3 self-center">
          <div className="w-20 h-20 lg:w-[160px] lg:h-[160px]">
            <Shape11 className="w-full h-full" uid="desktop" />
          </div>
        </div>

        {/* Middle column - Headings */}
        <div className={`col-span-4 md:ml-6 mb-12 self-center transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={getDelay(0)}>
          <h2 className="text-2xl font-medium text-gray-800">Admissions Team</h2>
        </div>

        {/* Right column - Contact info */}
        <div className={`col-span-6 mb-12 self-center transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={getDelay(0)}>
          <p className="text-gray-700 mb-2">For enrollment queries and campus tours</p>
          <p className="flex flex-wrap items-center gap-2">
            <span className="text-gray-700">[Phone Number]</span>
            <span className="text-gray-400">|</span>
            <Link href="mailto:admissions@scv.org.in" className="text-blue-400 hover:text-blue-500 transition">
              admissions@scv.org.in
            </Link>
          </p>
        </div>

        {/* Middle column - Academic Coordinators */}
        <div className={`col-span-4 md:ml-6 mb-12 col-start-3 self-center transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={getDelay(1)}>
          <h2 className="text-2xl font-medium text-gray-800">Academic Coordinators</h2>
        </div>

        {/* Right column - Academic contact info */}
        <div className={`col-span-6 mb-12 self-center transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={getDelay(1)}>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Pre-School & Primary:</span>
              <Link href="mailto:preschool@scv.org.in" className="text-blue-400 hover:text-blue-500 transition">
                [Email]
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Middle & High School:</span>
              <Link href="mailto:highschool@scv.org.in" className="text-blue-400 hover:text-blue-500 transition">
                [Email]
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Junior College:</span>
              <Link href="mailto:college@scv.org.in" className="text-blue-400 hover:text-blue-500 transition">
                [Email]
              </Link>
            </p>
          </div>
        </div>

        {/* Middle column - Transport Department */}
        <div className={`col-span-4 md:ml-6 col-start-3 self-center transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={getDelay(2)}>
          <h2 className="text-2xl font-medium text-gray-800">Transport Department</h2>
        </div>

        {/* Right column - Transport contact info */}
        <div className={`col-span-6 self-center transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={getDelay(2)}>
          <p className="text-gray-700 mb-2">For school bus routes and scheduling</p>
          <p className="flex flex-wrap items-center gap-2">
            <span className="text-gray-700">[Phone Number]</span>
            <span className="text-gray-400">|</span>
            <Link href="mailto:transport@scv.org.in" className="text-blue-400 hover:text-blue-500 transition">
              transport@scv.org.in
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
