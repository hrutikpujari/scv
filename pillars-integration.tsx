export default function PillarsIntegration() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl relative">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">INTEGRATION</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left column with heading and decorative element */}
        <div className="md:w-1/3 relative">
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6 md:mb-0">
            Integration of the Three Pillars
          </h2>

          {/* Blue plus shape - consistent sizing */}
          <div className="flex justify-center mt-8 md:mt-16">
            <svg
              className="w-20 h-20 md:w-36 md:h-36"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M40 0H60V40H100V60H60V100H40V60H0V40H40V0Z" fill="url(#paint0_linear_blue_plus)" />
              <defs>
                <linearGradient
                  id="paint0_linear_blue_plus"
                  x1="50"
                  y1="0"
                  x2="50"
                  y2="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D1EBFF" />
                  <stop offset="1" stopColor="#44ABF9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Right column with content */}
        <div className="md:w-2/3 z-10 relative">
          <p className="text-gray-700 mb-8">
            The true strength of SCV lies in how these three pillars work together to create a comprehensive educational
            experience:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Balanced Schedule</h3>
              <p className="text-gray-700">
                Our timetable allocates appropriate time for academics, sports, and cultural activities, ensuring
                holistic development without overwhelming students.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Interdisciplinary Approach</h3>
              <p className="text-gray-700">
                Projects and activities often integrate elements from multiple pillars, helping students see connections
                between different areas of learning.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Celebration of All Achievements</h3>
              <p className="text-gray-700">
                We recognize excellence across academics, sports, and cultural domains equally, helping students develop
                confidence in their diverse talents.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Accessibility for All</h3>
              <p className="text-gray-700">
                Unlike some premium schools in Kamothe that charge additional fees for specialized programs, our
                inclusive approach ensures all students can participate in activities across all three pillars.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="w-1 h-16 bg-blue-500 mr-6"></div>
              <blockquote className="text-lg italic text-gray-700">
                "Our three-pillar approach ensures that every student discovers and develops their unique strengths,
                whether in academics, sports, or cultural pursuits."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
