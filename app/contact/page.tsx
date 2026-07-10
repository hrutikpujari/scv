"use client"
import { useRef, useEffect, useState } from "react"
import Navbar from "../../navbar"
import ContactHero from "../../contact-hero"
import PhotoGallerySection from "../../photo-gallery-section"
import Footer from "../../footer"
import Shape4 from "../../components/shapes/shape_4"
import ContactInformation from "../../contact-information"
import SendUsAMessage from "../../send-us-a-message"
import VisitOurCampus from "../../visit-our-campus"
import FindUs from "../../find-us"
import QuickConnections from "../../quick-connections"
import ContactPageFAQ from "../../contact-page-faq"

export default function ContactPage() {
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

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <ContactHero />
      {/* <Hero /> */}

      {/* Get in Touch Section */}
      <section
        ref={sectionRef}
        className={`py-12 bg-white transition-all duration-700 relative ${inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      >
        {/* Mobile-only Shape4 - top right corner */}
        <div className="md:hidden absolute top-8 right-4 w-16 h-16 opacity-70">
          <div className={`transition-transform duration-1000 ${inView ? "rotate-[360deg]" : "rotate-0"}`}>
            <Shape4 className="w-full h-full object-contain" uid="contact-mobile" />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-6">Get in Touch</h1>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl">
                At Shankarrao Chavan Vidyalaya & Junior College, we value open communication with parents, students, and
                our community. Whether you have questions about admissions, curriculum, or would like to schedule a
                campus visit, our team is ready to assist you.
              </p>
            </div>
            <div className="hidden md:flex md:w-1/3 justify-start md:justify-end self-start md:self-auto">
              <div className="w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`transition-transform duration-1000 ${inView ? "rotate-[360deg]" : "rotate-0"}`}>
                    <Shape4 className="w-full h-full object-contain" uid="contact-desktop" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <div className="bg-white">
        <ContactInformation />
      </div>

      {/* Send Us a Message Section */}
      <div className="bg-white">
        <SendUsAMessage />
      </div>

      {/* Visit Our Campus Section */}
      <div className="bg-white">
        <VisitOurCampus />
      </div>

      {/* Find Us Section */}
      <div className="bg-white">
        <FindUs />
      </div>

      {/* Quick Connections Section */}
      <div className="bg-white">
        <QuickConnections />
      </div>

      {/* FAQ Section */}
      <div className="bg-white">
        <ContactPageFAQ />
      </div>

      <PhotoGallerySection />
      <Footer />
    </main>
  )
}
