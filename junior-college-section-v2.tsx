"use client"

import { useRef, useEffect, useState } from "react"

function useInViewAnimation() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    // Check if we're on mobile by window width
    const isMobile = window.innerWidth < 768;
    
    // For mobile, set inView to true immediately
    if (isMobile) {
      setInView(true);
      return;
    }
    
    // For desktop, use the normal intersection observer
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView]);
  return [ref, inView] as const
}

export default function JuniorCollegeSectionV2() {
  const [sectionRef, inView] = useInViewAnimation()

  return (
    <section id="junior-college" ref={sectionRef} className="container mx-auto px-4 md:px-6 max-w-7xl relative">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">ACADEMICS</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-12 mt-6">Junior College (Grades 11-12)</h2>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className={`lg:w-1/2 transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
          <h3 className="text-2xl font-medium text-blue-500 mb-6">Bridging to Higher Education</h3>

          <p className="text-gray-700 mb-8">
            Our Junior College offers specialized streams that prepare students for university studies and professional
            pathways. This crucial phase focuses on depth of knowledge, analytical thinking, and career orientation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-100 p-6 rounded-lg h-full">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Science Stream</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Physics, Chemistry, Mathematics/Biology</li>
                <li>Ideal for engineering, medicine, research</li>
                <li>Strong laboratory component</li>
                <li>Competitive examination preparation</li>
              </ul>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg h-full">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Commerce Stream</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Accountancy, Business Studies, Economics</li>
                <li>Preparation for business, finance careers</li>
                <li>Project work and case studies</li>
                <li>Financial literacy and business knowledge</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-medium text-gray-800 mb-4">Specialized Support</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-800">Career Guidance</h5>
                <p className="text-gray-700">
                  Dedicated counselors help students navigate higher education options and career planning.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Competitive Exam Coaching</h5>
                <p className="text-gray-700">
                  Additional support for students preparing for JEE, NEET, CET, and other examinations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`lg:w-1/2 relative transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
          <div className="bg-blue-50 p-8 rounded-lg h-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-medium text-blue-500 mb-4">Preparing for the Future</h3>
              <p className="text-gray-700 mb-4">
                Junior College students develop specialized knowledge and skills that prepare them for higher education
                and future careers.
              </p>
              <div className="mt-4 inline-block bg-white px-4 py-2 rounded-full text-blue-600 font-medium">
                Ages 16-17 years
              </div>
            </div>

            <div className="mt-6 border-t border-blue-100 pt-6">
              <h4 className="text-lg font-medium text-gray-800 mb-4 text-center">Program Highlights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-medium text-gray-800 mb-2">Specialized Streams</h5>
                  <p className="text-gray-700 text-sm">
                    Focused pathways for science and commerce with expert faculty guidance
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-medium text-gray-800 mb-2">University Preparation</h5>
                  <p className="text-gray-700 text-sm">Comprehensive preparation for higher education entrance exams</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-medium text-gray-800 mb-2">Career Counseling</h5>
                  <p className="text-gray-700 text-sm">Personalized guidance for future academic and career choices</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-medium text-gray-800 mb-2">Practical Experience</h5>
                  <p className="text-gray-700 text-sm">Hands-on learning through labs, projects, and internships</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-100 p-6 rounded-lg">
            <h4 className="text-xl font-medium text-gray-800 mb-4">Success Stories</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 font-bold">A</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Aarav Sharma</h5>
                  <p className="text-gray-700">
                    Secured admission to IIT Bombay after completing our Science stream with specialized JEE coaching.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 font-bold">P</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Priya Desai</h5>
                  <p className="text-gray-700">
                    Graduated from our Commerce stream and went on to pursue CA, now working at a leading accounting
                    firm.
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
