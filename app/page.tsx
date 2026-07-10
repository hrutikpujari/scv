export const dynamic = "force-dynamic";

import Navbar from "../navbar"
import Hero from "../hero"
import Features from "../features"
import UniqueValueProposition from "../unique-value-proposition"
import AboutUsSection from "../about-us-section"
import BlogSection from "../blog-section"
import TestimonialsSection from "../testimonials-section"
import AffiliationSection from "../affiliation-section"
import ContactUsSection from "../contact-us-section"
import PhotoGallerySection from "../photo-gallery-section"
import Footer from "../footer"
import PillarsSection from "../pillars-section"
import FAQSectionHomepage from "@/faq-section-homepage";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="py-16">
        <Features />
      </div>
      <div className="py-16 bg-white">
        <UniqueValueProposition />
      </div>
      <div className="py-16 bg-white">
        <AboutUsSection />
      </div>
      <div className="py-16 bg-white">
        <PillarsSection />
      </div>
      <div className="bg-white">
        <BlogSection />
      </div>
      <div className="bg-white">
        <TestimonialsSection />
      </div>
      {/* <div className="pt-12 bg-white">
        <AffiliationSection />
      </div> */}
      <div className="bg-white">
        <FAQSectionHomepage />
      </div>
      <div className="bg-white">
        <ContactUsSection />
      </div>
      <PhotoGallerySection />
      <Footer />
    </main>
  )
}
