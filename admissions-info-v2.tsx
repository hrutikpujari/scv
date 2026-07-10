"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"

export default function AdmissionsInfoV2() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let lastRatio = 0;
    const observer = new window.IntersectionObserver(
      (entries) => {
        const ratio = entries[0].intersectionRatio;
        // Check if we're on mobile by window width
        const isMobile = window.innerWidth < 768;
        // Use a much lower threshold for mobile devices
        if (!inView && (isMobile ? ratio > 0.1 : ratio > 0.4)) setInView(true);
        else if (inView && ratio < 0.1) setInView(false);
        lastRatio = ratio;
      },
      { threshold: [0, 0.1, 0.2, 0.4, 1] }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 md:px-6 max-w-7xl relative">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">ADMISSIONS</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-12 mt-6">Admissions Information</h2>

      <div className="grid md:grid-cols-2 gap-12 items-start relative">
        <div className={`transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}> 
          <div className="bg-blue-100 p-8 rounded-lg relative z-10">
            <h3 className="text-2xl font-medium text-gray-800 mb-6">Join the SCV Family</h3>

            <p className="text-gray-700 mb-8">
              Interested in joining our academic programs? Our admissions team is available to guide you through the
              application process for any grade level.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Submit Application</h4>
                  <p className="text-gray-700">Complete our online application form or visit our admissions office</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Assessment</h4>
                  <p className="text-gray-700">Students participate in an age-appropriate assessment</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Interview</h4>
                  <p className="text-gray-700">Family interview with our admissions team</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Enrollment</h4>
                  <p className="text-gray-700">Acceptance notification and completion of enrollment process</p>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <Link
                href="/admissions#admissions-enquiry-form"
                className="inline-block bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white font-medium py-3 px-8 rounded-full transition"
              >
                Explore Admissions Process
              </Link>
            </div>
          </div>
        </div>
        <div className={`transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}> 
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-medium text-blue-500 mb-4">Begin Your Journey</h3>
              <p className="text-gray-700 mb-4">
                Take the first step toward providing your child with a quality education that balances excellence with
                accessibility.
              </p>
            </div>

            <div className="mt-6 border-t border-blue-100 pt-6">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h4 className="text-lg font-medium text-gray-800 mb-4 text-center">Why Start Now?</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Limited seats available in each grade</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Early applicants receive priority consideration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Time to prepare for entrance assessments</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Opportunity to visit campus and meet faculty</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Link
                  href="/contact#form"
                  className="inline-block bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white font-medium py-3 px-8 rounded-full transition"
                >
                  Contact Admissions Office
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Admissions Timeline</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">November - December</span>
                <span className="text-gray-700">Applications Open</span>
              </div>
              <div className="w-full h-0.5 bg-gray-100"></div>

              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">January - February</span>
                <span className="text-gray-700">Assessments & Interviews</span>
              </div>
              <div className="w-full h-0.5 bg-gray-100"></div>

              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">March</span>
                <span className="text-gray-700">Acceptance Notifications</span>
              </div>
              <div className="w-full h-0.5 bg-gray-100"></div>

              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">April - May</span>
                <span className="text-gray-700">Enrollment & Fee Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
