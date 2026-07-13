import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-8">
          {/* Logo and Social Media - narrower column */}
          <div className="md:w-[15%]">
            <Image
              src="/images/logo.png"
              alt="SCV Logo"
              width={120}
              height={80}
              className="h-40 md:h-16 w-auto mb-6 -ml-7 md:-ml-1"
            />
            <div className="flex space-x-4">
              <Link href="/work-in-progress" className="text-gray-600 hover:text-blue-500">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="/work-in-progress" className="text-gray-600 hover:text-blue-500">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="/work-in-progress" className="text-gray-600 hover:text-blue-500">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Contact Information - wider column */}
          <div className="md:w-[35%]">
            <p className="text-[20px] md:text-xl text-gray-800 mb-4">
              Have a question? Want to know more about our programs or admission process? Reach out to us on
            </p>
            <Link href="mailto:hello@scvschool.com" className="text-xl text-blue-500 hover:text-blue-600 block mb-4">
              hello@scvschool.com
            </Link>
            <Link href="/admissions#admissions-enquiry-form" className="inline-block text-base text-white bg-blue-500 hover:bg-blue-400 text-white transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300 px-4 py-2 rounded-full transition text-center transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300">
              Enroll Now
            </Link>
          </div>

          {/* Quick Links */}
          <div className="md:w-[15%]">
            <ul className="space-y-3">
            <li>
                <Link href="/" className="text-base text-gray-700 hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-base text-gray-700 hover:text-blue-500">
                  About SCV
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-base text-gray-700 hover:text-blue-500">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-base text-gray-700 hover:text-blue-500">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/work-in-progress" className="text-base text-gray-700 hover:text-blue-500">
                  Campus Life
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-base text-gray-700 hover:text-blue-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-base text-gray-700 hover:text-blue-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-700 hover:text-blue-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Privacy Policy */}
          <div className="md:w-[25%]">
            <div className="mb-4 w-full">
              <Image
                src="/images/SCV-23-years-logoai-06.png"
                alt="SCV 23 Years"
                width={200}
                height={100}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-base font-medium text-gray-800 mb-3 mt-12">Privacy Policy</h3>
            <p className="text-gray-600">
              SCV respects your privacy. We collect and process information in accordance with our privacy policy and
              applicable education regulations in India.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-100">
          2025 Shankarroa Chavan Vidyalaya & Junior College. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

