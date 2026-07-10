import { useRef, useEffect, useState } from "react"
import Image from "next/image"

export default function VisitOurCampus() {
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
    <section ref={sectionRef} className="container mx-auto px-4 md:px-6 py-16 max-w-7xl">
      {/* Section header */}
      <div className="mb-8">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">VISIT OUR CAMPUS</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left column - Heading and text */}
        <div className={`md:w-1/2 lg:w-2/5 transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6">
            Discover the SCV
            <br />
            Experience in Person
          </h2>

          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Our campus is conveniently located in Sector 36, Kamothe, Navi Mumbai.
            </p>

            <p className="text-lg text-gray-600">
              We welcome scheduled visits from prospective families who wish to experience our learning environment
              firsthand.
            </p>
          </div>
        </div>

        {/* Right column - Transportation options */}
        <div className={`md:w-1/2 lg:w-3/5 transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
          <div className="bg-blue-50 bg-opacity-50 rounded-lg overflow-hidden">
            {/* By Car */}
            <div className="flex items-center p-6 border-b border-gray-200">
              <div className="mr-6">
                <Image src="/images/car.png" alt="Car icon" width={60} height={40} />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-1">By Car</h3>
                <p className="text-gray-600">Easy access from Palm Beach Road and Sion-Panvel Highway</p>
              </div>
            </div>

            {/* By Train */}
            <div className="flex items-center p-6 border-b border-gray-200">
              <div className="mr-6">
                <Image src="/images/train.png" alt="Train icon" width={60} height={40} />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-1">By Train</h3>
                <p className="text-gray-600">10-minute auto-rickshaw ride from Kamothe Railway Station</p>
              </div>
            </div>

            {/* By Bus */}
            <div className="flex items-center p-6">
              <div className="mr-6">
                <Image src="/images/bus.png" alt="Bus icon" width={60} height={40} />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-1">By Bus</h3>
                <p className="text-gray-600">NMMT bus routes 6, 14, and 23 stop near campus</p>
              </div>
            </div>
          </div>

          {/* Parking Information - outside the blue box */}
          <div className="mt-6 pl-6">
            <p className="text-gray-600">
              <span className="font-medium">Parking:</span> Visitor parking is available at the main entrance
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
