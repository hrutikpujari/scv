"use client"

import React from "react"

import { useRef, useEffect, useState } from "react"
import { Phone, Mail, Clock, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import Shape3 from "@/components/shapes/shape_3"

export default function ContactAdmissions() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const formRef = React.useRef<HTMLFormElement>(null)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: "" })

    const form = e.currentTarget
    const formData = new FormData(form)

    // Rename the form fields to match the Google Sheet columns
    const nameInput = formData.get("name")
    const emailInput = formData.get("email")
    const phoneInput = formData.get("phone")
    const dateInput = formData.get("preferred_date")

    // Create a new FormData with the correct field names
    const googleSheetFormData = new FormData()
    googleSheetFormData.append("full_name", nameInput as string)
    googleSheetFormData.append("email", emailInput as string)
    googleSheetFormData.append("phone", phoneInput as string)
    googleSheetFormData.append("visit_date", dateInput as string)

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzQiTdaQpVcIxzDgigqc91l-ecsHGpBSGzJeltujP_P0H_tajAgrRCOQpGE97EDAJSaSw/exec",
        {
          method: "POST",
          body: googleSheetFormData,
          mode: "no-cors", // This is needed for Google Apps Script
        },
      )

      // Since we're using no-cors, we can't actually read the response
      // So we'll just assume success if there's no error thrown
      setFormStatus({
        type: "success",
        message: "Your campus visit has been scheduled! We will contact you shortly to confirm.",
      })
      if (formRef.current) {
        formRef.current.reset()
      }
      // Move focus to the success message for accessibility
      setTimeout(() => {
        const statusDiv = document.getElementById("form-status-message")
        statusDiv?.focus()
      }, 100)
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus({
        type: "error",
        message: "There was an error submitting your request. Please try again later.",
      })
      setTimeout(() => {
        const statusDiv = document.getElementById("form-status-message")
        statusDiv?.focus()
      }, 100)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section id="contact-admissions" ref={sectionRef} className="py-16 bg-white relative overflow-hidden">
        {/* Decorative shape */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-10">
          <Shape3 />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">Contact Admissions</h2>
            <p className="text-lg text-gray-700">
              Our admissions team is available to guide you through the process and answer any questions you may have.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`bg-blue-50 p-8 rounded-lg transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}> 
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Admissions Office Hours:</h4>
                    <p className="text-gray-700">Monday to Friday: 9:00 AM - 3:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 12:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone:</h4>
                    <p className="text-gray-700">[Admissions Office Number]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email:</h4>
                    <p className="text-gray-700">admissions@scv.org.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address:</h4>
                    <p className="text-gray-700">Shankarrao Chavan Vidyalaya & Junior College</p>
                    <p className="text-gray-700">Kamothe, Navi Mumbai</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`bg-white p-8 rounded-lg shadow-sm transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}> 
              <h3 className="text-xl font-bold text-gray-900 mb-6">Schedule a Visit</h3>
              <p className="text-gray-700 mb-6">
                We encourage prospective families to visit our campus. Schedule a tour to experience the SCV learning
                environment firsthand.
              </p>

              {formStatus.type && (
                <div
                  id="form-status-message"
                  tabIndex={-1}
                  className={`mb-6 p-4 rounded-md ${
                    formStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                  }`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      {formStatus.type === "success" ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{formStatus.message}</p>
                    </div>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Phone Number"
                    pattern="\d{10}"
                    maxLength={10}
                    required
                    onInvalid={(e) => {
                      const input = e.target as HTMLInputElement;
                      if (input.validity.valueMissing) {
                        input.setCustomValidity("Please fill out this field");
                      } else if (input.validity.patternMismatch) {
                        input.setCustomValidity("Please enter a valid mobile number");
                      }
                    }}
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      input.setCustomValidity("");
                    }}
                  />
                </div>

                <div className="relative">
                  <label htmlFor="preferred_date" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    id="preferred_date"
                    name="preferred_date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-500 hover:bg-blue-400 text-white transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300 text-white font-medium py-2 px-4 rounded-full transition ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Scheduling..." : "Schedule a Campus Visit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
