"use client"

import { useRef, useEffect, useState } from "react"
import YellowStar from "@/components/shapes/yellow-star"

export default function FeeStructure() {
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
    <section id="fee-structure" ref={sectionRef} className={`py-16 bg-white relative overflow-hidden md:-mb-40 transition-all duration-700 scroll-mt-20 lg:scroll-mt-24 xl:scroll-mt-28 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
      {/* Decorative shape */}
      <div className="absolute top-10 left-10 opacity-20">
        <YellowStar />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-50">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">Fee Structure</h2>
          <p className="text-lg text-gray-700">
            SCV is committed to providing quality education at reasonable costs. Our transparent fee structure allows
            parents to plan their educational expenses effectively.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-4 px-6 text-left">Grade Level</th>
                <th className="py-4 px-6 text-left">Tuition Fee</th>
                <th className="py-4 px-6 text-left">Term Fee</th>
                <th className="py-4 px-6 text-left">Other Fee</th>
                <th className="py-4 px-6 text-left">Total Annual Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Pre-Primary to 1st Grade</td>
                <td className="py-4 px-6">₹12,000 (₹1,000 × 12)</td>
                <td className="py-4 px-6">₹2,000 (₹1,000 × 2)</td>
                <td className="py-4 px-6">₹6,000 (₹3,000 × 2)</td>
                <td className="py-4 px-6 font-semibold">₹20,000</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Grades 2 to 4</td>
                <td className="py-4 px-6">₹9,000 (₹750 × 12)</td>
                <td className="py-4 px-6">₹1,500 (₹750 × 2)</td>
                <td className="py-4 px-6">₹5,000 (₹2,500 × 2)</td>
                <td className="py-4 px-6 font-semibold">₹15,500</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Grades 5 to 7</td>
                <td className="py-4 px-6">₹9,600 (₹800 × 12)</td>
                <td className="py-4 px-6">₹1,600 (₹800 × 2)</td>
                <td className="py-4 px-6">₹6,000 (₹3,000 × 2)</td>
                <td className="py-4 px-6 font-semibold">₹17,200</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-6 font-medium">Grades 8 to 10</td>
                <td className="py-4 px-6">₹12,000 (₹1,000 × 12)</td>
                <td className="py-4 px-6">₹2,000 (₹1,000 × 2)</td>
                <td className="py-4 px-6">₹6,000 (₹3,000 × 2)</td>
                <td className="py-4 px-6 font-semibold">₹20,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Information</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>One-time admission fee for new students: [Amount]</li>
            <li>Sibling discount: [Percentage] on tuition fee for the second child</li>
            <li>Annual fee may be paid in [Number] installments as per the payment schedule</li>
            <li>All fees are to be paid through online transfer, bank deposit, or at the school office</li>
          </ul>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg z-50">
            <p className="text-gray-700 italic">
              Note: Our fee structure is competitive compared to other premium schools in Kamothe, where monthly fees
              can range from ₹3,300 to ₹4,700 at the pre-primary level.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
