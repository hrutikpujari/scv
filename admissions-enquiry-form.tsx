"use client"

import React, { useState, useRef, useEffect } from "react"

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxBk8JRi6lQr0jhcQ4PGJ6aEP7iIYzdgaTGRik6lfN_Dh_ohOFLwg5ZqDubBbCc5MspEA/exec"

import { Phone, Mail, Clock, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import Shape3 from "@/components/shapes/shape_3"

export default function AdmissionsEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const formRef = useRef<HTMLFormElement>(null)
  const [selectedGrade, setSelectedGrade] = useState("")
  const [selectedAcademicYear, setSelectedAcademicYear] = useState("")
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Hysteresis Intersection Observer: animate in at 0.4, out at 0.1
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

  const handleGradeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const grade = e.target.value
    setSelectedGrade(grade)
    
    // Auto-select school section based on grade
    const schoolSectionInputs = document.querySelectorAll<HTMLInputElement>('input[name="school_section"]')
    
    // First, enable all inputs to reset state
    schoolSectionInputs.forEach(input => {
      input.disabled = false
    })
    
    // Then apply the specific rules
    if (["Nursery", "Jr. KG", "Sr. KG"].includes(grade)) {
      // Pre-primary: only Pre-school should be selected and locked
      schoolSectionInputs.forEach(input => {
        if (input.value === "pre-school") {
          input.checked = true
        } else {
          input.checked = false
          input.disabled = true
        }
      })
    } else if (["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"].includes(grade)) {
      // Grades 1-10: only Middle School should be selected and locked
      schoolSectionInputs.forEach(input => {
        if (input.value === "middle school") {
          input.checked = true
        } else {
          input.checked = false
          input.disabled = true
        }
      })
    } else if (["Grade 11", "Grade 12"].includes(grade)) {
      // Grades 11-12: only College should be selected and locked
      schoolSectionInputs.forEach(input => {
        if (input.value === "college") {
          input.checked = true
        } else {
          input.checked = false
          input.disabled = true
        }
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: "" })

    const form = e.currentTarget
    const formData = new FormData(form)

    // Fix field names for Google Sheets
    // parent_name: new field
    // child_name: rename from student_name
    const parentName = formData.get("parent_name")
    const studentName = formData.get("student_name")
    if (studentName !== null) {
      formData.delete("student_name")
      formData.append("child_name", studentName)
    }
    // parent_name should already be present if field is added

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      })
      setFormStatus({
        type: "success",
        message: "Your enquiry has been submitted! We will contact you soon.",
      })
      formRef.current?.reset()
      setSelectedGrade("")
      setSelectedAcademicYear("")
      setTimeout(() => {
        const statusDiv = document.getElementById("form-status-message")
        statusDiv?.focus()
      }, 100)
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "There was an error submitting your enquiry. Please try again later.",
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
    <section id="admissions-enquiry-form" ref={sectionRef} className={`mt-20 pb-10 md:py-16 px-6 bg-white rounded-lg max-w-2xl mx-auto my-12 transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-10 hidden md:block">
        <Shape3 />
      </div>
      <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-8 text-center mt-6 md:mt-24">Admissions Enquiry Form</h2>
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
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" autoComplete="off" suppressHydrationWarning>
        <div>
          <label className="block mb-2 font-medium text-gray-700">I am <span className="text-red-500">*</span></label>
          <div className="flex gap-6">
            <label className="inline-flex items-center">
              <input type="radio" name="relation" value="father" required className="accent-blue-500" />
              <span className="ml-2">Father</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="relation" value="mother" required className="accent-blue-500" />
              <span className="ml-2">Mother</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="relation" value="guardian" required className="accent-blue-500" />
              <span className="ml-2">Guardian</span>
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="parent_name" className="block mb-2 font-medium text-gray-700">Parent Name <span className="text-red-500">*</span></label>
          <input type="text" id="parent_name" name="parent_name" required className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <label htmlFor="student_name" className="block mb-2 font-medium text-gray-700">Student/Child Name <span className="text-red-500">*</span></label>
          <input type="text" id="student_name" name="student_name" required className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <label htmlFor="admission_grade" className="block mb-2 font-medium text-gray-700">Admission to grade <span className="text-red-500">*</span></label>
          <select 
            id="admission_grade" 
            name="admission_grade" 
            required 
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400"
            value={selectedGrade}
            onChange={handleGradeChange}
          >
            <option value="" disabled>Select a grade</option>
            <option value="Nursery">Nursery</option>
            <option value="Jr. KG">Jr. KG</option>
            <option value="Sr. KG">Sr. KG</option>
            <option value="Grade 1">Grade 1</option>
            <option value="Grade 2">Grade 2</option>
            <option value="Grade 3">Grade 3</option>
            <option value="Grade 4">Grade 4</option>
            <option value="Grade 5">Grade 5</option>
            <option value="Grade 6">Grade 6</option>
            <option value="Grade 7">Grade 7</option>
            <option value="Grade 8">Grade 8</option>
            <option value="Grade 9">Grade 9</option>
            <option value="Grade 10">Grade 10</option>
            <option value="Grade 11">Grade 11</option>
            <option value="Grade 12">Grade 12</option>
          </select>
        </div>
        <div>
          <label htmlFor="academic_year" className="block mb-2 font-medium text-gray-700">Academic year <span className="text-red-500">*</span></label>
          <select 
            id="academic_year" 
            name="academic_year" 
            required 
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400"
            value={selectedAcademicYear}
            onChange={(e) => setSelectedAcademicYear(e.target.value)}
          >
            <option value="" disabled>Select academic year</option>
            <option value="2025-2026">2025–2026</option>
            <option value="2026-2027">2026–2027</option>
          </select>
        </div>
        <div>
          <label htmlFor="mobile" className="block mb-2 font-medium text-gray-700">Mobile <span className="text-red-500">*</span></label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            required
            pattern="^[0-9]{10}$"
            maxLength={10}
            minLength={10}
            inputMode="numeric"
            autoComplete="tel"
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400"
            placeholder="Enter 10-digit mobile number"
            onInput={(e) => {
              // Only allow digits
              const input = e.target as HTMLInputElement;
              input.value = input.value.replace(/[^0-9]/g, '');
            }}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email ID</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400" placeholder="Enter email address (optional)" />
        </div>
        <div>
          <label htmlFor="query" className="block mb-2 font-medium text-gray-700">Query / Message</label>
          <textarea placeholder="Tell us about your child, background, interests, or any questions you have..." id="query" name="query" rows={4} className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 resize-none" />
        </div>
        <button type="submit" disabled={isSubmitting} className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-400 text-white transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300 text-white font-semibold rounded-full transition disabled:opacity-60 disabled:cursor-not-allowed">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  )
}
