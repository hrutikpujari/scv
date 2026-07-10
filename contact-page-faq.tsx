"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { ChevronUp, ChevronDown } from "lucide-react"
import Shape12 from "./components/shapes/shape_12"

export default function ContactPageFAQ() {
  const [openQuestion, setOpenQuestion] = useState<number>(0)
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

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? -1 : index)
  }

  const faqs = [
    {
      question: "When can I visit the campus?",
      answer: "Campus visits can be scheduled Monday through Friday between 9 AM and 3 PM by appointment.",
    },
    {
      question: "How do I apply for admission?",
      answer:
        "To apply for admission, you can fill out our online application form or visit our admissions office. The process includes submitting required documents, an entrance assessment, and an interview with the student and parents.",
    },
    {
      question: "What are the school timings?",
      answer:
        "School hours are from 8:00 AM to 2:30 PM for Pre-School and Primary, and 8:00 AM to 3:30 PM for Middle School, High School, and Junior College. The school operates Monday through Friday.",
    },
    {
      question: "Do you offer transportation services?",
      answer:
        "Yes, we provide transportation services covering most areas in and around Navi Mumbai. Our buses are equipped with GPS tracking and safety features. Transportation fees vary based on distance from the school.",
    },
  ]

  return (
    <section ref={sectionRef} className="container mx-auto px-4 md:px-6 py-16 max-w-7xl">
      {/* Section header */}
      <div className="mb-8">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">FAQ</span>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left column - Heading and star shape */}
        <div className={`md:w-1/3 relative transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6 md:mb-0">
            Common Questions
            <br />
            About SCV
          </h2>

          {/* Yellow star shape */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-60 md:w-64 md:h-64 md:static md:absolute md:top-16 md:-left-4 md:opacity-80 md:mt-12">
            <Shape12 className="w-full h-full" />
          </div>
        </div>

        {/* Right column - FAQ accordion */}
        <div className={`md:w-2/3 z-10 relative transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="flex justify-between items-center w-full text-left py-4"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openQuestion === index}
                >
                  <h3 className="text-lg md:text-xl text-gray-800">{faq.question}</h3>
                  {openQuestion === index ? (
                    <ChevronUp className="flex-shrink-0 ml-2 text-gray-500" />
                  ) : (
                    <ChevronDown className="flex-shrink-0 ml-2 text-gray-500" />
                  )}
                </button>
                {openQuestion === index && (
                  <div className="pb-4">
                    <p className="text-gray-600 text-sm md:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <Link href="/faq" className="text-blue-400 hover:text-blue-500 transition flex justify-center">
              See more FAQ's
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
