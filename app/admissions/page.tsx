"use client"

import { useEffect } from "react"
import Navbar from "@/navbar"
import Footer from "@/footer"
import AdmissionsHero from "@/admissions-hero"
import AdmissionProcess from "@/admission-process"
import FeeStructure from "@/fee-structure"
import AdmissionsEnquiryForm from "@/admissions-enquiry-form"
import RequiredDocuments from "@/required-documents"
import ApplyOnline from "@/apply-online"
import AdmissionsFAQ from "@/admissions-faq"
import ContactAdmissions from "@/contact-admissions"
import PhotoGallerySection from "@/photo-gallery-section"

export default function AdmissionsPage() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <AdmissionsHero />
        <AdmissionProcess />
        <FeeStructure />
        <AdmissionsEnquiryForm />
        <RequiredDocuments />
        <ApplyOnline />
        <AdmissionsFAQ />
        <ContactAdmissions />
        <PhotoGallerySection />
      </main>
      <Footer />
    </>
  )
}
