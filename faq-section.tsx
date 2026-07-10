"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { FaqItem } from "./faq-data"

interface FaqSectionProps {
  title: string
  subtitle?: string
  faqs: FaqItem[]
}

// Add a default empty array for faqs
export default function FaqSection({ title, subtitle, faqs = [] }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-8">
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-4xl font-medium text-gray-800 mb-2">{title}</h2>
          {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
        </div>

        <div className="md:w-2/3">{/* Description text removed as requested */}</div>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden bg-blue-50" // Consistent blue background
          >
            <button
              className="w-full text-left p-6 flex justify-between items-start gap-4 focus:outline-none"
              onClick={() => toggleFaq(index)}
              aria-expanded={openIndex === index}
            >
              <h3 className="text-lg md:text-xl font-medium text-gray-800">{faq.question}</h3>
              <div className="flex-shrink-0 mt-1">
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-500" />
                )}
              </div>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6">
                <div className="prose max-w-none text-gray-700">
                  {faq.answer.split("\n").map((paragraph, i) => (
                    <p key={i} className="mb-4">
                      {paragraph}
                    </p>
                  ))}

                  {faq.list && (
                    <ul className="list-disc pl-5 mb-4">
                      {faq.list.map((item, i) => (
                        <li key={i} className="mb-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
