"use client"

import { useState, type MouseEvent } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // Helper to check if a route is active
  const isActive = (path: string) => pathname === path
  const isActiveSection = (paths: string[]) => paths.some(p => pathname.startsWith(p))

  const toggleDropdown = (menu: string) => {
    if (openDropdown === menu) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(menu)
    }
  }

  // When already on the target page, hash-only Link clicks don't trigger a scroll
  // (Next.js only scrolls on pathname change). Manually scroll in that case.
  const handleSectionClick = (e: MouseEvent<HTMLAnchorElement>, path: string, id: string) => {
    if (pathname === path) {
      e.preventDefault()
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        window.history.pushState(null, "", `${path}#${id}`)
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto px-4 md:px-6 py-3 flex items-center justify-between max-w-[1400px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="SCV Logo"
            width={180}
            height={200}
            className="h-14 lg:h-16 xl:h-20 w-auto"
            priority
          />
        </Link>

        {/* Spacer to push navigation to the right */}
        <div className="flex-grow"></div>

        {/* Desktop Navigation and Enroll Now Button grouped together */}
        <div className="hidden lg:flex items-center space-x-3 min-[1100px]:space-x-6 xl:space-x-8">
          <Link href="/" className="text-[#0F4F8C] hover:text-blue-500 font-semibold transition text-sm lgx:text-[15px] xl:text-base whitespace-nowrap pb-2">
            <span className={`relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-out ${isActive('/') ? 'after:w-full' : 'after:w-0'} ${!isActive('/') ? 'hover:after:w-full' : ''}`}>Home</span>
          </Link>

          {/* About SCV Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("about")}
              className="flex items-center text-[#0F4F8C] hover:text-blue-500 font-semibold transition text-sm lgx:text-[15px] xl:text-base whitespace-nowrap pb-2"
            >
              <span className={`relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-out ${isActiveSection(['/about']) ? 'after:w-full' : 'after:w-0'} ${!isActiveSection(['/about']) ? 'group-hover:after:w-full' : ''}`}>About SCV</span>
              <ChevronDown className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
            </button>
            {openDropdown === "about" && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={() => setOpenDropdown(null)}
                >
                  School History
                </Link>
                <Link
                  href="/about#core-team"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={(e) => {
                    handleSectionClick(e, "/about", "core-team")
                    setOpenDropdown(null)
                  }}
                >
                  Core Team
                </Link>
                <Link
                  href="/about#teaching-methodology"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={(e) => {
                    handleSectionClick(e, "/about", "teaching-methodology")
                    setOpenDropdown(null)
                  }}
                >
                  Teaching Methodology
                </Link>
              </div>
            )}
          </div>

          {/* Academics Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("academics")}
              className="flex items-center text-[#0F4F8C] hover:text-blue-500 font-semibold transition text-sm lgx:text-[15px] xl:text-base whitespace-nowrap pb-2"
            >
              <span className={`relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-out ${isActiveSection(['/academics']) ? 'after:w-full' : 'after:w-0'} ${!isActiveSection(['/academics']) ? 'group-hover:after:w-full' : ''}`}>Academics</span>
              <ChevronDown className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
            </button>
            {openDropdown === "academics" && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                <Link
                  href="/academics"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={() => setOpenDropdown(null)}
                >
                  Pre-School Program
                </Link>
                <Link
                  href="/academics#school"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={(e) => {
                    handleSectionClick(e, "/academics", "school")
                    setOpenDropdown(null)
                  }}
                >
                  School Curriculum (Grades 1-10)
                </Link>
                <Link
                  href="/academics#junior-college"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={(e) => {
                    handleSectionClick(e, "/academics", "junior-college")
                    setOpenDropdown(null)
                  }}
                >
                  Junior College (11th & 12th)
                </Link>
              </div>
            )}
          </div>

          {/* Admissions Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("admissions")}
              className="flex items-center text-[#0F4F8C] hover:text-blue-500 font-semibold transition text-sm lgx:text-[15px] xl:text-base whitespace-nowrap pb-2"
            >
              <span className={`relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-out ${isActiveSection(['/admissions']) ? 'after:w-full' : 'after:w-0'} ${!isActiveSection(['/admissions']) ? 'group-hover:after:w-full' : ''}`}>Admissions</span>
              <ChevronDown className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
            </button>
            {openDropdown === "admissions" && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                <Link
                  href="/admissions"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={() => setOpenDropdown(null)}
                >
                  Admission Process
                </Link>
                <Link
                  href="/admissions#fee-structure"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={(e) => {
                    handleSectionClick(e, "/admissions", "fee-structure")
                    setOpenDropdown(null)
                  }}
                >
                  Fee Structure
                </Link>
                <Link
                  href="/admissions#required-documents"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={(e) => {
                    handleSectionClick(e, "/admissions", "required-documents")
                    setOpenDropdown(null)
                  }}
                >
                  Required Documents
                </Link>
                <Link
                  href="/admissions#apply-online"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={(e) => {
                    handleSectionClick(e, "/admissions", "apply-online")
                    setOpenDropdown(null)
                  }}
                >
                  Apply Online
                </Link>
              </div>
            )}
          </div>

          {/* Campus Life Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("campus")}
              className="flex items-center text-[#0F4F8C] hover:text-blue-500 font-semibold transition text-sm lgx:text-[15px] xl:text-base whitespace-nowrap pb-2"
            >
              <span className={`relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-out ${isActiveSection(['/campus', '/work-in-progress']) ? 'after:w-full' : 'after:w-0'} ${!isActiveSection(['/campus', '/work-in-progress']) ? 'group-hover:after:w-full' : ''}`}>Campus Life</span>
              <ChevronDown className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
            </button>
            {openDropdown === "campus" && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                <Link
                  href="/work-in-progress"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={() => setOpenDropdown(null)}
                >
                  Facilities
                </Link>
                <Link
                  href="/work-in-progress"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={() => setOpenDropdown(null)}
                >
                  Sports
                </Link>
                <Link
                  href="/work-in-progress"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={() => setOpenDropdown(null)}
                >
                  Cultural Activities
                </Link>
                <Link
                  href="/work-in-progress"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={() => setOpenDropdown(null)}
                >
                  Events Calendar
                </Link>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("resources")}
              className="flex items-center text-[#0F4F8C] hover:text-blue-500 font-semibold transition text-sm lgx:text-[15px] xl:text-base whitespace-nowrap pb-2"
            >
              <span className={`relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-out ${isActiveSection(['/resources']) ? 'after:w-full' : 'after:w-0'} ${!isActiveSection(['/resources']) ? 'group-hover:after:w-full' : ''}`}>Resources</span>
              <ChevronDown className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
            </button>
            {openDropdown === "resources" && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                <Link
                  href="/work-in-progress"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={() => setOpenDropdown(null)}
                >
                  Student Corner
                </Link>
                <Link
                  href="/work-in-progress"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  onClick={() => setOpenDropdown(null)}
                >
                  Parent Resources
                </Link>
              </div>
            )}
          </div>

          {/* FAQ Link */}
          <Link href="/faq" className="text-[#0F4F8C] hover:text-blue-500 font-semibold transition text-sm lgx:text-[15px] xl:text-base whitespace-nowrap pb-2">
            <span className={`relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-out ${isActive('/faq') ? 'after:w-full' : 'after:w-0'} ${!isActive('/faq') ? 'hover:after:w-full' : ''}`}>FAQ</span>
          </Link>

          {/* Contact Us */}
          <Link href="/contact" className="text-[#0F4F8C] hover:text-blue-500 font-semibold transition text-sm lgx:text-[15px] xl:text-base whitespace-nowrap pb-2">
            <span className={`relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-out ${isActive('/contact') ? 'after:w-full' : 'after:w-0'} ${!isActive('/contact') ? 'hover:after:w-full' : ''}`}>Contact Us</span>
          </Link>

          <Link
            href="/admissions#admissions-enquiry-form"
            className="bg-blue-500 hover:bg-blue-400 text-white transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-105 xl:hover:scale-110 duration-300 text-white font-medium py-1.5 px-4 lg:py-2 lg:px-5 xl:px-6 rounded-full transition text-sm lgx:text-[15px] xl:text-base whitespace-nowrap"
            onClick={(e) => handleSectionClick(e, "/admissions", "admissions-enquiry-form")}
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#0F4F8C] hover:text-blue-500 font-medium focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 md:px-6 py-2 max-w-7xl">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="py-2 text-[#0F4F8C] hover:text-blue-500 font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>

              {/* Mobile About Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("about-mobile")}
                  className="flex items-center justify-between w-full py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                >
                  <span>About SCV</span>
                  {openDropdown === "about-mobile" ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                {openDropdown === "about-mobile" && (
                  <div className="pl-4 mt-1 border-l-2 border-gray-200">
                    <Link
                      href="/about#school-history"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={(e) => {
                        handleSectionClick(e, "/about", "school-history")
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      School History
                    </Link>
                    <Link
                      href="/about#core-team"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={(e) => {
                        handleSectionClick(e, "/about", "core-team")
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      Core Team
                    </Link>
                    <Link
                      href="/about#teaching-methodology"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={(e) => {
                        handleSectionClick(e, "/about", "teaching-methodology")
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      Teaching Methodology
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Academics Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("academics-mobile")}
                  className="flex items-center justify-between w-full py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                >
                  <span>Academics</span>
                  {openDropdown === "academics-mobile" ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                {openDropdown === "academics-mobile" && (
                  <div className="pl-4 mt-1 border-l-2 border-gray-200">
                    <Link
                      href="/academics#pre-school"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={(e) => {
                        handleSectionClick(e, "/academics", "pre-school")
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      Pre-School Program
                    </Link>
                    <Link
                      href="/academics#school"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={(e) => {
                        handleSectionClick(e, "/academics", "school")
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      School Curriculum (Grades 1-10)
                    </Link>
                    <Link
                      href="/academics#junior-college"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={(e) => {
                        handleSectionClick(e, "/academics", "junior-college")
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      Junior College (11th & 12th)
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Admissions Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("admissions-mobile")}
                  className="flex items-center justify-between w-full py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                >
                  <span>Admissions</span>
                  {openDropdown === "admissions-mobile" ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                {openDropdown === "admissions-mobile" && (
                  <div className="pl-4 mt-1 border-l-2 border-gray-200">
                    <Link
                      href="/admissions#not-admission-process"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={(e) => {
                        handleSectionClick(e, "/admissions", "not-admission-process")
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      Admission Process
                    </Link>
                    <Link
                      href="/admissions#fee-structure"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={(e) => {
                        handleSectionClick(e, "/admissions", "fee-structure")
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      Fee Structure
                    </Link>
                    <Link
                      href="/admissions#required-documents"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={(e) => {
                        handleSectionClick(e, "/admissions", "required-documents")
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      Required Documents
                    </Link>
                    <Link
                      href="/admissions#apply-online"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={(e) => {
                        handleSectionClick(e, "/admissions", "apply-online")
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      Apply Online
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Campus Life Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("campus-mobile")}
                  className="flex items-center justify-between w-full py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                >
                  <span>Campus Life</span>
                  {openDropdown === "campus-mobile" ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                {openDropdown === "campus-mobile" && (
                  <div className="pl-4 mt-1 border-l-2 border-gray-200">
                    <Link
                      href="/work-in-progress"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      Facilities
                    </Link>
                    <Link
                      href="/work-in-progress"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      Sports
                    </Link>
                    <Link
                      href="/work-in-progress"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      Cultural Activities
                    </Link>
                    <Link
                      href="/work-in-progress"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      Events Calendar
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Resources Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("resources-mobile")}
                  className="flex items-center justify-between w-full py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                >
                  <span>Resources</span>
                  {openDropdown === "resources-mobile" ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                {openDropdown === "resources-mobile" && (
                  <div className="pl-4 mt-1 border-l-2 border-gray-200">
                    <Link
                      href="/work-in-progress"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      Student Corner
                    </Link>
                    <Link
                      href="/work-in-progress"
                      className="block py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      Parent Resources
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/faq"
                className="py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                className="py-2 text-[#0F4F8C] hover:text-blue-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>

              <Link
                href="/admissions#admissions-enquiry-form"
                className="bg-blue-500 hover:bg-blue-400 text-white transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300 text-white font-medium py-2 px-4 rounded-full text-center transition"
                onClick={(e) => {
                  handleSectionClick(e, "/admissions", "admissions-enquiry-form")
                  setIsMenuOpen(false)
                }}
              >
                Enroll Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

