import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { Phone, Mail, Clock } from "lucide-react"

export default function FaqContact() {
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
    <section ref={sectionRef} className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">CONTACT US</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className={`md:w-1/3 transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}> 
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6">Still Have Questions?</h2>
          <p className="text-gray-700 mb-8">
            If you have questions not answered here, please reach out to us directly. Our team is ready to assist you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white font-medium py-3 px-8 rounded-full transition"
          >
            Contact Us
          </Link>
        </div>

        <div className={`md:w-2/3 transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}> 
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-medium text-blue-500 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-white p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-700">[Main Office Number]</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-white p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-700">
                    <a href="mailto:info@scv.org.in" className="text-blue-500 hover:underline">
                      info@scv.org.in
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-white p-3 rounded-full">
                  <Clock className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Office Hours</h4>
                  <p className="text-gray-700">Monday to Friday, 9:00 AM - 3:00 PM</p>
                  <p className="text-gray-700">Saturday, 9:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
