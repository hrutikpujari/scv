export default function AcademicsHero() {
  return (
    <section className="relative w-full bg-blue-400">
      {/* Hero Content */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Excellence in Learning at Every Stage</h1>
              <p className="text-xl md:text-2xl">Comprehensive Education from Pre-Primary through Junior College</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute -bottom-12 right-0 hidden md:block">
        <svg className="w-20 h-20 md:w-36 md:h-36" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRate="evenodd"
            clipRule="evenodd"
            d="M8.74228e-06 -1.74846e-05L56.25 -1.2567e-05C56.25 24.162 75.838 43.75 100 43.75C124.163 43.75 143.75 24.162 143.75 -4.91753e-06L200 0C200 55.2285 155.229 100 100 100C44.772 100 3.91405e-06 55.2285 8.74228e-06 -1.74846e-05Z"
            fill="url(#paint0_linear_822_2866)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_822_2866"
              x1="100"
              y1="100"
              x2="100"
              y2="-8.74228e-06"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#44ABF9" />
              <stop offset="1" stopColor="#D1EBFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
