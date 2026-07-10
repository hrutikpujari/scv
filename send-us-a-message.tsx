"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import Shape1 from "./components/shapes/shape_1"

export default function SendUsAMessage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    gradeLevel: "",
    message: "",
    subscribe: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    // For phone, restrict to numbers and max 10 digits
    if (name === "phone") {
      if (!/^\d{0,10}$/.test(val as string)) return
    }
    setFormData((prev) => ({ ...prev, [name]: val }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    // Map form field names to match Google Sheet column names
    const inquiryType = formData.get("inquiryType")
    const gradeLevel = formData.get("gradeLevel")
    const subscribe = formData.get("subscribe")

    // Remove the original fields
    formData.delete("inquiryType")
    formData.delete("gradeLevel")
    formData.delete("subscribe")

    // Add them back with the correct names for Google Sheets
    formData.append("enquiry_type", inquiryType as string)
    formData.append("grade_level", gradeLevel as string)
    formData.append("subscription", subscribe ? "Yes" : "No")

    // Show loading state
    setIsSubmitting(true)

    fetch(
      "https://script.google.com/macros/s/AKfycbzN69yXebgD8uesI8ae4QMDlhm6GDOqHw2nTuY3LEF5MVv75YnczmyTGvq048a8hXc2aA/exec",
      {
        method: "POST",
        body: formData,
      },
    )
      .then((response) => {
        console.log("Success!", response)
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
          gradeLevel: "",
          message: "",
          subscribe: false,
        })
        alert("Thank you for your message. We'll get back to you soon!")
        setIsSubmitting(false)
      })
      .catch((error) => {
        console.error("Error!", error.message)
        alert("There was an error submitting the form. Please try again.")
        setIsSubmitting(false)
      })
  }

  return (
    <section id="form" ref={sectionRef} className="container mx-auto px-4 md:px-6 py-16 max-w-7xl">
      {/* Section header */}
      <div className="mb-8">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">CONTACT US</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        {/* Left column - Heading and text */}
        <div className={`md:w-1/2 lg:w-2/5 relative transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6">Send Us a Message</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Please fill out the form below, and our team will get back to you within 24 hours.
          </p>

          {/* Desktop: normal positioning */}
          <div className="hidden md:block md:-mt-16 lg:-mt-24">
            <div className="flex justify-end">
              <div className="md:w-48 md:h-48 lg:w-auto lg:h-auto">
                <div className="w-full h-full">
                  <Shape1 className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Contact Form */}
        <div className={`md:w-1/2 lg:w-3/5 w-full relative transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
          {/* Mobile: top-right of form, rotated 66deg */}
          <div className="md:hidden absolute -top-16 right-10 rotate-[66deg] z-50">
            <div className="w-20 h-20">
              <Shape1 className="w-full h-full" />
            </div>
          </div>
          <form
            id="form"
            name="submit-to-google-sheet"
            onSubmit={handleSubmit}
            className="bg-blue-50 p-6 md:p-8 rounded-lg w-full"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-gray-700 uppercase mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91"
                  pattern="\d{10}"
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-xs font-medium text-gray-700 uppercase mb-2">
                  Select Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="admission">Admission Information</option>
                  <option value="fees">Fee Structure</option>
                  <option value="career">Career Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="gradeLevel" className="block text-xs font-medium text-gray-700 uppercase mb-2">
                  Student's Grade Level
                </label>
                <select
                  id="gradeLevel"
                  name="gradeLevel"
                  value={formData.gradeLevel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="preschool">Pre-School</option>
                  <option value="primary">Primary (Grades 1-5)</option>
                  <option value="middle">Middle School (Grades 6-8)</option>
                  <option value="high">High School (Grades 9-10)</option>
                  <option value="junior">Junior College (Grades 11-12)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-700 uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                />
                <label htmlFor="subscribe" className="text-sm text-gray-600">
                  Subscribe to our newsletter for updates about SCV events and achievements
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white font-medium py-3 px-8 rounded-full transition disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
