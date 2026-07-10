"use client"

import Image from "next/image"
import JourneyArrow from "./components/shapes/journey-arrow"
import { useRef, useEffect, useState } from "react"

export default function JourneyVisionMission() {
  const [inView, setInView] = useState(false)
  const journeyRef = useRef<HTMLDivElement>(null)

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
    if (journeyRef.current) observer.observe(journeyRef.current);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <section id="not-school-history" className="container mx-auto px-4 md:px-6 py-16 max-w-7xl">
      <div ref={journeyRef} className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left column - Image with overlapping shape */}
        <div className={`lg:w-1/2 relative transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}> 
          <div className="relative">
            {/* Image with z-index to ensure it's above the shape */}
            <div className="relative z-0">
              <Image
                src="/images/about.png"
                alt="Students collaborating on projects with laptops"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative shape with lower z-index */}
            <div className="absolute -bottom-24 right-0 md:left-8 z-10 w-16 h-16 sm:w-32 sm:h-32 md:w-48 md:h-48">
              {/* Inline Journey Square SVG with responsive sizing */}
              <svg width="100%" height="100%" viewBox="0 0 216 216" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_783_1052)">
                  <mask
                    id="mask0_783_1052"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="216"
                    height="216"
                  >
                    <path d="M216 0H0V216H216V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_783_1052)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M216 54V4.72083e-06L108 0V53.9787C107.988 24.1651 83.8163 4.72083e-06 54 4.72083e-06H2.36042e-06V108H54C24.1767 108 -1.30362e-06 132.177 0 162L2.36042e-06 216H108V162C108 191.823 132.177 216 162 216H216V108H162.022C191.835 107.988 216 83.8163 216 54Z"
                      fill="url(#paint0_linear_783_1052)"
                    />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_783_1052"
                    x1="29.7"
                    y1="20.52"
                    x2="160.92"
                    y2="188.46"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFC710" />
                    <stop offset="1" stopColor="#FFF7DE" />
                  </linearGradient>
                  <clipPath id="clip0_783_1052">
                    <rect width="216" height="216" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Right column - Journey content with higher z-index */}
        <div className={`lg:w-1/2 relative z-20 transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}> 
          <div className="mb-4">
            <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">OUR STORY</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6">The SCV Journey</h2>

          <div className="space-y-6">
            <p className="text-gray-700">
              Shankarrao Chavan Vidyalaya & Junior College has established itself as a cornerstone of quality education
              in Kamothe, Navi Mumbai. Our institution began with a vision to create a learning environment where
              students could excel academically while developing strong character and life skills.
            </p>

            <p className="text-gray-700">
              From our founding, we've been committed to educational excellence that remains accessible to families in
              our community. Our growth reflects our dedication to maintaining high standards while adapting to the
              evolving educational landscape and needs of our students.
            </p>

            <p className="text-gray-700">
              Today, SCV stands as a respected institution known for its balanced approach to education, experienced
              faculty, and the success of our graduates who carry forward the values we instill.
            </p>
          </div>

          <div className="relative mt-8 lg:mt-16">
            {/* Arrow with lower z-index */}
            <div className="absolute left-20 -bottom-[100px] md:-bottom-[130px] lg:-bottom-[250px] z-0 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48">
              <div className="transform">
                <JourneyArrow className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision section with higher z-index */}
      <div className="mt-32 lg:mt-40 relative z-20">
        <div className="lg:w-3/4">
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6">Our Vision</h2>
          <p className="text-gray-700">
            To nurture well-rounded individuals equipped with knowledge, skills, and values essential for becoming
            responsible global citizens who contribute positively to society.
          </p>
        </div>
      </div>

      {/* Mission section with higher z-index */}
      <div className="mt-16 relative z-20">
        <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6">Our Mission</h2>
        <ul className="space-y-4 list-disc pl-5">
          <li className="text-gray-700">
            Provide comprehensive, quality education that balances academic rigor with character development
          </li>
          <li className="text-gray-700">
            Create a supportive learning environment that recognizes and nurtures each student's unique potential
          </li>
          <li className="text-gray-700">Instill values of integrity, respect, responsibility, and compassion</li>
          <li className="text-gray-700">Empower students with critical thinking and problem-solving skills</li>
          <li className="text-gray-700">
            Foster collaboration between students, parents, and educators to create a community of lifelong learners
          </li>
        </ul>
      </div>
    </section>
  )
}
