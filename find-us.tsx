import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"

export default function FindUs() {
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
    <section ref={sectionRef} className={`container mx-auto px-4 md:px-6 py-16 max-w-7xl transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
      {/* Section header */}
      <div className="mb-8">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">FIND US</span>
      </div>

      <div className="flex flex-col space-y-8">
        {/* Map image */}
        <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-17%20at%207.49.11%E2%80%AFAM-LQ0sh1H3L4tKHjb2inL7lmqJYMIiGK.png"
            alt="Map showing location of Shankarrao Chavan Vidyalaya & Junior College"
            fill
            className="object-cover"
          />

          {/* Optional overlay with pin for emphasis */}
          <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-red-500" />
              <span className="text-sm font-medium">SCV Campus</span>
            </div>
          </div>
        </div>

        {/* Address and directions */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-black text-gray-800 mb-4">Our Location</h2>
            <p className="text-gray-600 mb-4">
              Shankarrao Chavan Vidyalaya & Junior College is located in Sector 36, Kamothe, Navi Mumbai, Maharashtra
              410209.
            </p>
            <p className="text-gray-600">
              Our campus is easily accessible from major highways and public transportation routes, making it convenient
              for students and families from across Navi Mumbai and surrounding areas.
            </p>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-2xl font-black text-gray-800 mb-4">Get Directions</h2>
            <p className="text-gray-600 mb-6">
              Use the interactive map to find the best route to our campus. We're located near Kamothe Park and Shiv
              Temple Pond, prominent landmarks in the area.
            </p>
            <Link
              href="https://maps.google.com/?q=Shankarrao+Chavan+Vidya+English+Medium+Kamothe"
              target="_blank"
              className="bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white font-medium py-3 px-8 rounded-full transition inline-flex items-center gap-2"
            >
              <MapPin className="h-4 w-4" />
              Open in Google Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
