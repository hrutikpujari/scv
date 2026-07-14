"use client"

import { useRef, useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import Shape2 from "@/components/shapes/shape_2"

export default function ApplyOnline() {
  const [inView, setInView] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const threshold = isMobile ? 0.1 : 0.4
    const observer = new window.IntersectionObserver(
      (entries) => {
        setInView(entries[0].isIntersecting);
      },
      { threshold }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      // Check immediately in case already in view on mount/navigation
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setInView(true);
      }
    }
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <section id="apply-online" ref={sectionRef} className={`py-16 bg-white text-black relative overflow-hidden transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
      {/* Decorative shape */}
      <div className="absolute top-0 right-0 opacity-10">
        <Shape2 />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-black mb-4">Apply Online</h2>
          <p className="text-lg opacity-90">
            Our online application system makes it easy for parents to apply from the comfort of their home.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Simple Application Process</h3>

            <div className="space-y-6">
              {[
                "Create an account on our admissions portal",
                "Fill out the online application form",
                "Upload required documents",
                "Pay the application fee online",
                "Schedule an interaction/assessment date",
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="pt-1.5">
                    <p className="text-gray-800 font-medium">
                      Step {index + 1}: {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-gray-700">
              The online application status can be tracked through your account on our admissions portal.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="#admissions-enquiry-form"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300 text-white font-medium py-3 px-6 rounded-full transition"
              >
                Start Application
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
