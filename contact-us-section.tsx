"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

export default function ContactUsSection() {
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
  const [showConnect, setShowConnect] = useState(false)
  const connectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Use a lower threshold and trigger on mount in case the section is already in view
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0]
      setShowConnect(entry.isIntersecting)
    }
    const observer = new window.IntersectionObserver(handleIntersection, { threshold: 0.01 })
    if (connectRef.current) observer.observe(connectRef.current)
    // Also check immediately in case already in view
    if (connectRef.current) {
      const rect = connectRef.current.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setShowConnect(true)
      }
    }
    return () => observer.disconnect()
  }, [])

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
    const formDataObj = new FormData(form)
    // Map form field names to match Google Sheet column names
    const inquiryType = formDataObj.get("inquiryType")
    const gradeLevel = formDataObj.get("gradeLevel")
    const subscribe = formDataObj.get("subscribe")
    formDataObj.delete("inquiryType")
    formDataObj.delete("gradeLevel")
    formDataObj.delete("subscribe")
    formDataObj.append("enquiry_type", inquiryType as string)
    formDataObj.append("grade_level", gradeLevel as string)
    formDataObj.append("subscription", subscribe ? "Yes" : "No")
    setIsSubmitting(true)
    fetch(
      "https://script.google.com/macros/s/AKfycbxROqrAsRO3dpc0rS2wxfJhOS_DkgMz_aEsXiylDChqTg0ELRGRppd49wc3rpt3IiYT/exec",
      {
        method: "POST",
        body: formDataObj,
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
    <section className="container mx-auto px-4 md:px-6 py-8 md:py-16 max-w-7xl overflow-hidden md:-mt-40">
      <div className="relative flex items-start mb-4 md:mb-12">
        <div className="flex-1 min-w-0">
          <div className="mb-2">
            <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">CONTACT US</span>
          </div>
        </div>
        {/* <div className="absolute left-0 right-0 top-[34px] h-px bg-neutral-200 z-0" /> */}
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-16 mb-8 md:mb-12">
        {/* Left column - Heading and text */}
        <div className="relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-4">Begin Your Child's Journey
            <br className="hidden md:block" /> with SCV
          </h2>
          <p className="text-gray-600 mb-6 md:mb-12 max-w-md">
            Give your child the gift of quality education in a nurturing environment. Applications for the upcoming
            academic year are now open.
          </p>

          {/* Arrow SVG - responsive with max width percentage */}
          <div className="-mt-8 md:-mt-24 w-full overflow-hidden">
            <div className="md:flex md:justify-end">
              <div className="w-full md:w-auto max-w-[70vw] md:max-w-[70%]">
                <div className="h-auto transform -scale-x-100 md:scale-x-100 md:static absolute md:w-auto md:h-auto md:rotate-0 -rotate-[70deg] w-[20%] right-[20px] z-[1000]">
                  <svg 
                    className="w-full h-auto max-w-[423px]" 
                    viewBox="0 0 423 418" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_648_555)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M388.117 336.888C387.039 337.002 381.48 337.848 375.759 338.738C353.485 342.192 340.199 343.648 337.095 342.959C334.619 342.453 333.103 340.931 332.416 338.367C331.626 335.422 332.873 333.1 336.344 331C339.257 329.226 340.209 328.854 358.224 321.279C364.736 318.541 370.337 316.104 370.728 315.824C371.121 315.544 366.732 315.083 360.961 314.7C333.986 313.041 308.315 306.649 283.684 295.418C274.148 291.017 254.429 279.58 246.735 273.983C230.069 261.729 215.684 246.642 202.879 227.857C200.325 224.215 198.07 221.253 197.852 221.312C197.58 221.385 194.52 222.614 191.023 223.96C170.145 232.185 145.758 232.113 120.942 223.68C95.2996 215 76.2662 201.977 48.9485 174.394C21.6462 146.868 5.87262 121.803 4.39781 103.432C3.66703 95.0346 5.35942 90.6644 9.80095 89.3572C12.8398 88.4856 13.3357 89.464 10.9896 91.6125C8.68304 93.6906 8.10686 95.2477 8.35202 99.2159C9.51699 119.484 31.9412 150.831 68.4858 183.19C87.5865 200.171 102.736 209.383 122.47 216.08C145.234 223.835 167.353 224.164 186.538 217.036C195.206 213.836 194.658 214.626 191.92 208.987C181.154 186.909 178.439 162.381 185.206 148.817C193.58 132.309 214.861 129.295 226.089 143.065C231.053 149.16 234.012 159.767 233.447 169.214C232.481 184.147 227.835 196.032 219.074 205.862C215.969 209.325 209.207 215.054 207.789 215.434C206.589 215.755 207.089 216.966 210.39 221.869C219.082 234.682 230.411 247.957 240.058 256.48C255.85 270.489 280.135 284.794 301.478 292.696C319.831 299.471 339.526 303.84 358.007 305.202C366.302 305.844 381.515 305.918 381.889 305.351C381.954 305.158 380.02 303.396 377.604 301.354C364.801 290.871 356.861 280.429 353.029 269.179C350.953 262.954 350.684 260.862 352.141 261.29C352.459 261.381 354.8 263.793 357.367 266.613C364.067 274.172 381.158 287.365 405.05 303.471C409.759 306.652 414.547 310.338 415.901 311.905C421.346 318.046 420.54 324.634 413.862 328.937C411.872 330.231 408.837 331.336 400.673 333.582C394.867 335.255 389.183 336.719 388.117 336.888ZM403.507 320.604C403.611 320.343 402.141 319.217 400.204 318.099L396.679 316.062L388.259 320.188C383.6 322.431 378.725 324.731 377.404 325.26C374.469 326.514 373.052 327.771 375.045 327.354C375.808 327.149 379.564 326.552 383.428 325.926C390.16 324.882 402.988 321.503 403.507 320.604ZM208.902 204.32C218.33 195.889 223.413 184.764 224.326 170.723C225.445 153.527 216.332 141.763 204.253 144.882C197.914 146.522 193.514 151.911 192.154 159.7C190.855 167.063 191.275 174.083 193.764 184.465C195.859 193.375 197.37 197.705 201.137 205.875L202.643 209.096L204.47 207.846C205.513 207.158 207.485 205.577 208.902 204.32Z"
                        fill="#FFC400"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_648_555">
                        <rect
                          width="346.559"
                          height="339.339"
                          fill="white"
                          transform="matrix(0.965926 -0.258819 -0.258819 -0.965926 87.8275 417.473)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Contact Form */}
        <div className="relative">
          <form
            name="submit-to-google-sheet"
            onSubmit={handleSubmit}
            className="bg-blue-50 p-4 sm:p-6 md:p-8 rounded-lg relative z-10 w-full mt-[35px] md:mt-0"
          >
            <div className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 uppercase mb-2">
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 uppercase mb-2">
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
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 uppercase mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  pattern="\d{10}"
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 uppercase mb-2">
                  Select Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
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
                <label htmlFor="gradeLevel" className="block text-sm font-medium text-gray-700 uppercase mb-2">
                  Student's Grade Level
                </label>
                <select
                  id="gradeLevel"
                  name="gradeLevel"
                  value={formData.gradeLevel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-400 text-white transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300 text-white font-medium py-3 px-8 rounded-full transition disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Apply Now"}
              </button>
            </div>
          </form>

          {/* Yellow Shape SVG - improved positioning for mobile */}
          <div className="absolute -bottom-12 right-0 md:right-0 transform translate-y-1/4 z-20 max-w-[120px] sm:max-w-[180px] md:max-w-[180px]">
            <svg width="100%" height="100%" viewBox="0 0 283 283" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_648_558)">
                <mask
                  id="mask0_648_558"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="283"
                  height="283"
                >
                  <path d="M141.421 3.29018e-05L0 141.421L141.421 282.843L282.843 141.421L141.421 3.29018e-05Z" fill="white" />
                </mask>
                <g mask="url(#mask0_648_558)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M86.267 100.409L63.6396 77.7818L22.6274 118.794L4.02433e-06 141.421L16 157.421L22.6274 164.049L63.6396 205.061L86.267 182.434L61.2548 157.421H105.282L125.421 157.421L125.422 177.561L125.422 221.588L100.409 196.576L77.7818 219.203L118.794 260.215L141.421 282.843L157.421 266.843L164.049 260.215L205.061 219.203L182.434 196.576L157.421 221.588L157.421 177.561L157.421 157.421H177.561H221.588L196.576 182.434L219.203 205.061L260.215 164.049L282.843 141.421L266.843 125.422L260.215 118.794L219.203 77.7818L196.576 100.409L221.588 125.422H177.561H157.421L157.421 105.282L157.421 61.2549L182.434 86.2671L205.061 63.6396L164.049 22.6274L141.421 3.69261e-05L125.422 15.9997L118.794 22.6275L77.7817 63.6396L100.409 86.2671L125.422 61.2546L125.422 105.282L125.421 125.421L105.282 125.421L61.2548 125.421L86.267 100.409Z"
                    fill="url(#paint0_linear_648_558)"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_648_558"
                  x1="28.2843"
                  y1="149.907"
                  x2="253.498"
                  y2="141.775"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFC300" />
                  <stop offset="1" stopColor="#FFF7DE" />
                </linearGradient>
                <clipPath id="clip0_648_558">
                  <rect width="200" height="200" fill="white" transform="translate(0 141.421) rotate(-45)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Connect With Us section */}
      <div
        ref={connectRef}
        className={`bg-blue-50 p-4 sm:p-6 md:p-8 rounded-lg relative transition-all duration-700
          ${showConnect ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
        `}
      >
        <div className="grid md:grid-cols-4 gap-4 md:gap-8">
          <div className="md:col-span-1">
            <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">CONTACT US</span>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-gray-800 mb-4">Connect With Us</h3>
            <p className="text-gray-600 mb-4 md:mb-8 max-w-2xl">
              Have questions? We're here to help guide you through the admission process or answer any inquiries about
              our programs.
            </p>
            <a
              href="/contact#form"
              className="inline-block bg-blue-500 hover:bg-blue-400 text-white transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300 text-white font-medium py-4 md:py-3 px-8 rounded-full transition transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300 my-2 md:my-0"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
