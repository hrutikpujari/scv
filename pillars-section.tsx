"use client"

import { useState, useEffect, useRef } from "react"
import Pillar from "./pillar"
import Shape7 from "./components/shapes/shape_7"
import Link from "next/link"

export default function PillarsSection() {
  const [activePillar, setActivePillar] = useState<"sports" | "educational" | "cultural">("sports")
  const [showStats, setShowStats] = useState(false)
  const [rotateShape, setRotateShape] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)
  const shapeRef = useRef<HTMLDivElement>(null)

  const pillarData = {
    sports: {
      title: "Sports",
      subtitle: "Physical Development",
      description:
        "We believe in nurturing healthy bodies alongside sharp minds through comprehensive sports facilities and regular physical education.",
      linkText: "Sports Programs",
      link: "/pillars#sports"
    },
    educational: {
      title: "Educational",
      subtitle: "Academic Excellence",
      description:
        "Our curriculum balances traditional learning with modern educational techniques, ensuring students build strong fundamentals while developing critical thinking and creativity.",
      linkText: "Our Teaching Approach",
      link: "/pillars#academic"
    },
    cultural: {
      title: "Cultural",
      subtitle: "Creative Expression",
      description:
        "Through cultural activities, arts, and community events, we encourage students to explore their talents and develop confidence.",
      linkText: "Cultural Activities",
      link: "/pillars#creative"
    },
  }

  const handlePillarClick = (pillar: "sports" | "educational" | "cultural") => {
    setActivePillar(pillar)
  }

  useEffect(() => {
    let lastRatio = 0;
    const observer = new window.IntersectionObserver(
      (entries) => {
        const ratio = entries[0].intersectionRatio;
        if (!showStats && ratio > 0.4) setShowStats(true);
        else if (showStats && ratio < 0.1) setShowStats(false);
        lastRatio = ratio;
      },
      { threshold: [0, 0.1, 0.2, 0.4, 1] }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [showStats]);

  useEffect(() => {
    let lastRatio = 0;
    const observer = new window.IntersectionObserver(
      (entries) => {
        const ratio = entries[0].intersectionRatio;
        if (!rotateShape && ratio > 0.4) setRotateShape(true);
        else if (rotateShape && ratio < 0.1) setRotateShape(false);
        lastRatio = ratio;
      },
      { threshold: [0, 0.1, 0.2, 0.4, 1] }
    );
    if (shapeRef.current) observer.observe(shapeRef.current);
    return () => observer.disconnect();
  }, [rotateShape]);

  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl relative">
      {/* Decorative element in top right */}
      <div ref={shapeRef} className={`absolute md:top-10 right-0 transition-transform duration-700 md:scale-100 scale-50 mt-5 md:-mt-0 -mr-6 md:mr-0 ${rotateShape ? 'rotate-[180deg]' : 'rotate-0'}`}>
        <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M200 100L143.75 100C143.75 75.838 124.162 56.25 100 56.25C75.8375 56.25 56.25 75.838 56.25 100H0C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100Z"
            fill="url(#paint0_linear_653_575)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_653_575"
              x1="100"
              y1="0"
              x2="100"
              y2="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFC300" />
              <stop offset="1" stopColor="#FFF7DE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Section header */}
      <div className="relative flex items-start mb-6 md:mb-12">
        <div className="flex-1 min-w-0">
          <div className="mb-8">
            <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">FOUNDATION</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-4">The SCV Advantage</h2>
        </div>
        {/* ...existing code for shape if any... */}
        <div className="absolute left-0 right-0 top-[44px] h-px bg-neutral-200 z-0" />
      </div>
      {/* Content area - above the pillars */}
      <div className="lg:mx-32 -mb-12 md:mb-16 mt-0 md:mt-12 md:mt-24">
        <div className="flex flex-row items-start justify-between">
          <div className="mb-4 md:mb-0 w-1/3">
            <h3 className={`text-xl md:text-4xl mb-2 md:mb-4 text-black`}>
              {pillarData[activePillar].title}
            </h3>
          </div>
          <svg width="148" className="block scale-75 md:scale-125 md:-ml-32" height="40" viewBox="0 0 148 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M141.085 12.2428C140.813 12.0449 139.455 10.9547 138.059 9.82747C132.624 5.44204 129.289 2.98832 128.35 2.69062C127.608 2.44184 126.964 2.6145 126.382 3.19507C125.713 3.8621 125.687 4.67811 126.291 5.78006C126.796 6.70818 126.994 6.95572 130.647 11.7844C131.967 13.5299 133.09 15.0529 133.151 15.1887C133.213 15.3251 131.965 14.7669 130.359 13.9733C122.87 10.2283 114.995 7.95465 106.647 7.13977C103.407 6.83871 96.3449 6.84195 93.413 7.14738C87.042 7.84414 80.8423 9.65429 74.492 12.7011C73.2417 13.2808 72.1773 13.7246 72.1279 13.6751C72.0662 13.6132 71.4368 12.8085 70.7086 11.9046C66.389 6.45683 59.8402 2.68836 51.8776 1.09491C43.6554 -0.56079 36.5302 -0.0257622 24.9229 3.12563C13.3285 6.26435 5.20704 10.5337 1.95833 15.2295C0.458141 17.3672 0.233071 18.8016 1.22072 19.8419C1.90001 20.5476 2.18491 20.3623 1.88966 19.4219C1.59408 18.5066 1.68146 17.9997 2.3635 16.974C5.82377 11.7215 16.704 6.80076 31.5267 3.80195C39.2846 2.21645 44.7764 2.0999 51.1068 3.36964C58.4141 4.82629 64.3947 8.17348 68.4308 13.0643C70.2575 15.2683 70.2332 14.9714 68.6235 16.0577C62.3082 20.3043 57.7706 26.458 57.4781 31.1453C57.159 36.8713 62.396 40.9847 67.5448 39.037C69.822 38.1742 72.2628 35.7902 73.5784 33.1698C75.6387 29.0166 76.2392 25.109 75.4174 21.1129C75.123 19.7024 74.1998 17.1162 73.8788 16.7942C73.6072 16.5218 73.9292 16.2749 75.5756 15.473C79.8958 13.3884 84.9948 11.5891 88.9046 10.8026C95.3137 9.49981 104.046 9.43693 110.995 10.6333C116.967 11.6676 122.926 13.5554 128.092 16.0607C130.415 17.1768 134.505 19.5198 134.517 19.7301C134.504 19.7919 133.712 19.9637 132.747 20.1359C127.687 20.9578 123.937 22.5237 121.162 24.9446C119.638 26.2908 119.242 26.8097 119.699 26.9213C119.798 26.9466 120.8 26.6633 121.927 26.3061C124.897 25.3203 131.527 24.4381 140.434 23.8313C142.19 23.7099 144.046 23.4652 144.653 23.2556C147.066 22.455 147.873 20.5637 146.752 18.3729C146.419 17.717 145.777 16.9492 143.937 15.0792C142.641 13.7292 141.344 12.4536 141.085 12.2428ZM142.681 18.9984C142.669 19.0848 142.099 19.1583 141.407 19.1573L140.145 19.1557L138.529 16.7417C137.628 15.4171 136.679 14.0433 136.407 13.6962C135.815 12.9041 135.63 12.3471 136.1 12.7686C136.272 12.9418 137.187 13.6854 138.125 14.4533C139.768 15.7786 142.682 18.6768 142.681 18.9984ZM72.451 19.9464C73.669 23.6709 73.3038 27.4428 71.3675 31.3488C68.9969 36.1323 64.7267 37.8707 61.9732 35.1584C60.5286 33.7342 60.1859 31.6064 61.031 29.307C61.8264 27.1311 63.0292 25.3145 65.3092 22.9179C67.2546 20.855 68.3323 19.9287 70.6109 18.3237L71.5148 17.6941L71.8106 18.3129C71.9832 18.6594 72.2664 19.3896 72.451 19.9464Z" fill="#FFC400" />
          </svg>
          <div className="w-full md:w-1/2 mb-6md:mb-14">
            <h4 className="text-xl md:text-2xl font-medium mb-2 md:mb-4">{pillarData[activePillar].subtitle}</h4>
            <p className="text-sm md:text-base text-gray-700 h-24">{pillarData[activePillar].description}</p>
            <Link className="hidden md:inline-block w-full md:w-auto bg-blue-500 hover:bg-blue-400 text-white transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300 text-white font-medium text-sm py-2 px-4 rounded-full text-center transition md:mb-10"
              href={pillarData[activePillar].link} >Learn More About {pillarData[activePillar].linkText}</Link>
          </div>
        </div>
        {/* Mobile button - outside the flex row */}
        <Link className="block md:hidden w-auto bg-blue-500 hover:bg-blue-400 text-white transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300 text-white font-medium text-md py-2 px-4 rounded-full text-center transition mt-20 mb-10"
          href={pillarData[activePillar].link} >Learn More About {pillarData[activePillar].linkText}</Link>
      </div>

      {/* Pillars section */}
      <div className="relative">
        {/* Blue bar on top of pillars */}
        <div className="absolute top-20 md:-top-6 left-0 right-0 h-6 bg-gradient-to-b from-[#bde1fd] to-[#45abf9] z-10"></div>

        <div className="flex flex-row items-end justify-start md:justify-between md:gap-0 relative">
          <div className="w-1/3 flex flex-col items-center">
            <div
              className={`text-center text-md md:text-xl font-bold absolute top-14 md:-top-14 z-20 cursor-pointer ${activePillar === "educational" ? "text-black" : "text-gray-400"}`}
              onClick={() => handlePillarClick("educational")}
            >
              {pillarData.educational.title}
            </div>
            <div onClick={() => handlePillarClick("educational")} className="transform scale-50 md:scale-100 cursor-pointer">
              <Pillar isActive={activePillar === "educational"} />
            </div>
          </div>

          <div className="w-1/3 flex flex-col items-center">
            <div
              className={`text-center text-md md:text-xl font-bold absolute top-14 md:-top-14 z-20 cursor-pointer ${activePillar === "sports" ? "text-black" : "text-gray-400"}`}
              onClick={() => handlePillarClick("sports")}
            >
              {pillarData.sports.title}
            </div>
            <div onClick={() => handlePillarClick("sports")} className="transform scale-50 md:scale-100 cursor-pointer">
              <Pillar isActive={activePillar === "sports"} />
            </div>
          </div>

          <div className="w-1/3 flex flex-col items-center">
            <div
              className={`text-center text-md md:text-xl font-bold absolute top-14 md:-top-14 z-20 cursor-pointer ${activePillar === "cultural" ? "text-black" : "text-gray-400"}`}
              onClick={() => handlePillarClick("cultural")}
            >
              {pillarData.cultural.title}
            </div>
            <div onClick={() => handlePillarClick("cultural")} className="transform scale-50 md:scale-100 cursor-pointer">
              <Pillar isActive={activePillar === "cultural"} />
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Section */}
      <div
        ref={statsRef}
        className={`mt-10 md:mt-20 bg-blue-50 rounded-lg p-8 relative z-10 transition-all duration-700
          ${showStats ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
        `}
      >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 text-center">
          {/* Stat 1 */}
          <div className="border-r border-gray-200 p-4 md:p-8">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800">4.2/5</h3>
            <p className="text-gray-600 mt-2">Rating from Parents</p>
          </div>

          {/* Stat 2 */}
          <div className="p-4 md:p-8 md:border-r border-gray-200">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800">22+</h3>
            <p className="text-gray-600 mt-2">Years of Educational Excellence</p>
          </div>

          {/* Stat 3 */}
          <div className="border-r border-gray-200 p-4 md:p-8">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800">28+</h3>
            <p className="text-gray-600 mt-2">Dedicated Faculty Members</p>
          </div>

          {/* Stat 4 */}
          <div className="p-4 md:p-8 md:border-r border-gray-200">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800">92%</h3>
            <p className="text-gray-600 mt-2">Students Pursuing Higher Education</p>
          </div>

          {/* Stat 5 */}
          <div className="col-span-1 md:col-span-1 p-4 md:p-8">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800">11+</h3>
            <p className="text-gray-600 mt-2">Extracurricular Activities</p>
          </div>
        </div>
      </div>
    </section>
  )
}
