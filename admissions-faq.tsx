"use client"
import { useRef, useEffect, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Shape5 from "@/components/shapes/shape_5"

export default function AdmissionsFAQ() {
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

  const faqs = [
    {
      question: "When should I apply for admission?",
      answer:
        "We recommend applying at least 3-4 months before the start of the academic year. For specific grade level timelines, please refer to the admission process section above.",
    },
    {
      question: "Is there an entrance test for all grades?",
      answer:
        "For Pre-Primary to Grade 1, we conduct a simple interaction to assess developmental readiness. For Grades 2-10, there is a basic assessment of age-appropriate academic skills. Junior College admissions are primarily based on 10th board examination results.",
    },
    {
      question: "What is the student-teacher ratio at SCV?",
      answer:
        "We maintain an optimal student-teacher ratio that allows for personalized attention, significantly better than the 30:1 ratio seen at some competitor schools in Kamothe.",
    },
    {
      question: "Are there any additional fees besides the ones mentioned?",
      answer:
        "The fee structure covers all essential educational services. Additional fees may apply for optional activities like specialized sports training, educational trips, or certain extracurricular programs. These are always communicated well in advance.",
    },
    {
      question: "Is transportation available?",
      answer:
        "Yes, school bus transportation is available at an additional cost, covering most areas in and around Kamothe, Navi Mumbai.",
    },
  ]

  return (
    <section id="admissions-faq" ref={sectionRef} className={`py-16 bg-white relative overflow-hidden transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
      {/* Decorative shape */}
      <div className="absolute bottom-0 right-0 opacity-10">
        <Shape5 />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700">Find answers to common questions about our admissions process.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-blue-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
