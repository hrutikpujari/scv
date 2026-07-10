"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import Shape9 from "./components/shapes/shape_9"

export default function FAQSectionHomepage() {
  const [openQuestion, setOpenQuestion] = useState<number>(0)
  const [rotate, setRotate] = useState(false)
  const shapeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setRotate(true)
        else setRotate(false)
      },
      { threshold: 0 }
    )
    if (shapeRef.current) observer.observe(shapeRef.current)
    return () => observer.disconnect()
  }, [])

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? -1 : index)
  }

  const faqs = [
    {
      question: "What makes SCV different from other schools in Kamothe?",
      answer:
        "At SCV, we combine academic excellence with affordable education. Our comprehensive approach focuses on developing well-rounded students through personalized attention, stable fee structures, and balanced development in academics, sports, and cultural activities.",
    },
    {
      question: "What is the admission process for new students?",
      answer:
        "Our admission process is straightforward and transparent. It begins with an application form submission, followed by an assessment test and an interview. We evaluate students based on their academic potential, interests, and overall fit with our educational philosophy.",
    },
    {
      question: "Does SCV offer transportation services?",
      answer:
        "Yes, SCV provides safe and reliable transportation services with GPS-tracked buses covering all major areas in and around Kamothe. Our transportation staff is trained in safety protocols, and we maintain regular communication with parents regarding routes and timings.",
    },
    {
      question: "How does SCV engage parents in the educational journey?",
      answer:
        "We believe in a collaborative approach between parents and teachers. We organize regular parent-teacher meetings, workshops, and open houses. Parents also have access to our digital portal where they can track their child's progress, assignments, and school activities.",
    },
    {
      question: "What extracurricular activities are available?",
      answer:
        "SCV offers a wide range of extracurricular activities including sports (cricket, basketball, swimming), arts (music, dance, drama), technology clubs (robotics, coding), and leadership programs. These activities are integrated into the curriculum to ensure holistic development.",
    },
  ]

  return (
    <section className="container mx-auto px-4 md:px-6 py-16 max-w-7xl relative">
      {/* Section header */}
      <div className="mb-2">
      <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">FAQ</span>
      </div>
      <div className="h-px bg-neutral-200 my-4" />

      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left column with heading and SVG */}
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-8 w-3/4 lg:w-full">Common Questions About SCV</h2>
          <div ref={shapeRef} className="absolute top-[70px] right-4 md:static">
            <div className={`inline-block transition-transform duration-1000 origin-center ${rotate ? "rotate-[360deg]" : "rotate-0"}`}>
              <Shape9 className="w-[71px] h-[71px] md:w-[230px] md:h-[230px]" />
            </div>
          </div>
        </div>

        {/* Right column with accordion */}
        <div className="md:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left py-4"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="text-lg md:text-xl text-gray-800">{faq.question}</h3>
                  {openQuestion === index ? (
                    <ChevronUp className="flex-shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="flex-shrink-0 ml-2" />
                  )}
                </button>
                {openQuestion === index && <p className="text-sm md:text-lg text-gray-600 mt-2 pr-8">{faq.answer}</p>}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:text-right">
            <a href="/faq" className="text-blue-500 hover:text-blue-600 transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300">
              See more FAQ's
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
