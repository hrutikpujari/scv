import { useRef, useEffect, useState } from "react"
import Link from "next/link"

export default function ContactInformation() {
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

  const getDelay = (idx: number) => ({ transitionDelay: `${idx * 500}ms` })

  return (
    <section ref={sectionRef} className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mb-4">
          <span className="inline-block bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">CONTACT INFORMATION</span>
        </div>

        {/* Address Section */}
        <div
          className={`flex flex-col md:flex-row justify-between py-4 md:py-8 border-b border-gray-200 transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={getDelay(0)}
        >
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl md:text-3xl text-gray-800">Address</h3>
          </div>
          <div className="w-full md:w-2/4 mb-4 md:mb-0 flex items-center">
            <p className="text-base md:text-lg text-gray-700">
              Shankarrao Chavan Vidyalaya & Junior College
              <br />
              Sector 36, Kamothe Navi Mumbai,
              <br />
              Maharashtra 410209
            </p>
          </div>
          <div className="w-full md:w-1/4 flex justify-start md:justify-end items-center">
            <Link
              href="https://maps.google.com/?q=Kamothe,Navi+Mumbai,Maharashtra+410209"
              target="_blank"
              className="bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white py-3 px-8 rounded-full text-sm transition w-full md:w-48 text-center flex items-center justify-center"
            >
              Locate Us
            </Link>
          </div>
        </div>

        {/* Phone Section */}
        <div
          className={`flex flex-col md:flex-row justify-between py-4 md:py-8 border-b border-gray-200 transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={getDelay(1)}
        >
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl md:text-3xl text-gray-800">Phone</h3>
          </div>
          <div className="w-full md:w-2/4 mb-4 md:mb-0 flex items-center">
            <p className="text-base md:text-lg text-gray-700">
              Main Office: <span className="text-blue-400">[Phone Number]</span>
              <br />
              Admissions: <span className="text-blue-400">[Phone Number]</span>
            </p>
          </div>
          <div className="w-full md:w-1/4 flex justify-start md:justify-end items-center">
            <Link
              href="tel:+912227431234"
              className="bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white py-3 px-8 rounded-full text-sm transition w-full md:w-48 text-center flex items-center justify-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Email Section */}
        <div
          className={`flex flex-col md:flex-row justify-between py-4 md:py-8 border-b border-gray-200 transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={getDelay(2)}
        >
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl md:text-3xl text-gray-800">Email</h3>
          </div>
          <div className="w-full md:w-2/4 mb-4 md:mb-0 flex items-center">
            <p className="text-base md:text-lg text-gray-700">
              General Inquiries:{" "}
              <a href="mailto:info@scv.org.in" className="text-blue-400">
                info@scv.org.in
              </a>
              <br />
              Admissions:{" "}
              <a href="mailto:admissions@scv.org.in" className="text-blue-400">
                admissions@scv.org.in
              </a>
              <br />
              Principal's Office:{" "}
              <a href="mailto:principal@scv.org.in" className="text-blue-400">
                principal@scv.org.in
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/4 flex justify-start md:justify-end items-center">
            <Link
              href="mailto:info@scv.org.in"
              className="bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white py-3 px-8 rounded-full text-sm transition w-full md:w-48 text-center flex items-center justify-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Office Hours Section */}
        <div
          className={`flex flex-col md:flex-row justify-between py-4 md:py-8 transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={getDelay(3)}
        >
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl md:text-3xl text-gray-800">Office Hours</h3>
          </div>
          <div className="w-full md:w-2/4 mb-4 md:mb-0 flex items-center">
            <p className="text-base md:text-lg text-gray-700">
              Monday to Friday: 8:00 AM - 4:00 PM
              <br />
              Saturday: 9:00 AM - 1:00 PM
              <br />
              (Closed on Sundays and Public Holidays)
            </p>
          </div>
          <div className="w-full md:w-1/4 flex justify-start md:justify-end items-center">
            <Link
              href="#"
              className="bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white py-3 px-8 rounded-full text-sm transition w-full md:w-48 text-center flex items-center justify-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
