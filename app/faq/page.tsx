"use client"

import { useRef, useEffect, useState } from "react"
import Navbar from "../../navbar"
import Footer from "../../footer"
import FaqHero from "../../faq-hero"
import FaqSection from "../../faq-section"
import FaqContact from "../../faq-contact"
import FaqBottomText from "../../faq-bottom-text"
import {
  generalFaqs,
  preSchoolFaqs,
  schoolFaqs,
  juniorCollegeFaqs,
  admissionsFaqs,
  parentInvolvementFaqs,
} from "../../faq-data"

function useInViewAnimation() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView]);
  return [ref, inView] as const
}

export default function FaqPage() {
  const [generalRef, generalInView] = useInViewAnimation()
  const [preRef, preInView] = useInViewAnimation()
  const [schoolRef, schoolInView] = useInViewAnimation()
  const [juniorRef, juniorInView] = useInViewAnimation()
  const [admissionsRef, admissionsInView] = useInViewAnimation()
  const [parentRef, parentInView] = useInViewAnimation()

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <FaqHero />

      <div ref={generalRef} className={`py-16 bg-white transition-all duration-700 ${generalInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
        <FaqSection title="General FAQs" faqs={generalFaqs} />
      </div>

      <div ref={preRef} className={`py-16 bg-gray-50 transition-all duration-700 ${preInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
        <FaqSection title="Pre-School FAQs" subtitle="Pre-Primary to Grade 1" faqs={preSchoolFaqs} />
      </div>

      <div ref={schoolRef} className={`py-16 bg-white transition-all duration-700 ${schoolInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
        <FaqSection title="School FAQs" subtitle="Grades 2-10" faqs={schoolFaqs} />
      </div>

      <div ref={juniorRef} className={`py-16 bg-gray-50 transition-all duration-700 ${juniorInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
        <FaqSection title="Junior College FAQs" subtitle="Grades 11-12" faqs={juniorCollegeFaqs} />
      </div>

      <div ref={admissionsRef} className={`py-16 bg-white transition-all duration-700 ${admissionsInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
        <FaqSection title="Admissions FAQs" faqs={admissionsFaqs} />
      </div>

      <div ref={parentRef} className={`py-16 bg-gray-50 transition-all duration-700 ${parentInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
        <FaqSection title="Parent Involvement FAQs" faqs={parentInvolvementFaqs} />
      </div>

      <div className="py-8 bg-white">
        <FaqBottomText />
      </div>

      <div className="py-16 bg-white">
        <FaqContact />
      </div>
      <Footer />
    </main>
  )
}
