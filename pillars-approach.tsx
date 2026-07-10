export default function PillarsApproach() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left column - Content with decorative shape */}
        <div className="lg:w-1/2 relative">
          <div className="mb-4">
            <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">OUR APPROACH</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6">Our Holistic Approach</h2>

          <div className="space-y-6 mb-12">
            <p className="text-gray-700">
              At Shankarrao Chavan Vidyalaya & Junior College in Kamothe, Navi Mumbai, we believe that true education
              extends beyond textbooks and examinations. Our educational philosophy rests on three essential pillars
              that work in harmony to develop students' intellectual, physical, and creative potential.
            </p>

            <p className="text-gray-700">
              With a 4.2-star rating from our parent community, our balanced approach to education has established SCV
              as a trusted institution that prioritizes comprehensive student development while maintaining accessible
              fee structures for families in our community.
            </p>
          </div>

          {/* Decorative shape - smaller size */}
          <div className="flex justify-center">
            <svg
              className="w-20 h-20 md:w-36 md:h-36"
              viewBox="0 0 230 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_822_2858)">
                <mask
                  id="mask0_822_2858"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="230"
                  height="230"
                >
                  <path d="M230 0H0V230H230V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_822_2858)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M138 0H92V59.4731L49.9462 17.4193L17.4193 49.9461L59.4732 92H0V138H59.4731L17.4193 180.053L49.9462 212.581L92 170.527V230H138V170.527L180.054 212.581L212.581 180.054L170.527 138H230V92H170.527L212.581 49.9461L180.054 17.4192L138 59.4731V0Z"
                    fill="url(#paint0_linear_822_2858)"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_822_2858"
                  x1="115"
                  y1="0"
                  x2="115"
                  y2="230"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFC300" />
                  <stop offset="1" stopColor="#FFF7DE" />
                </linearGradient>
                <clipPath id="clip0_822_2858">
                  <rect width="230" height="230" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        {/* Right column - Key features */}
        <div className="lg:w-1/2">
          <div className="bg-blue-50 p-8 rounded-lg mb-6">
            <h3 className="text-2xl font-medium text-blue-500 mb-6">Our Three Pillars</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Educational Excellence</h4>
                <p className="text-gray-700">Building strong academic foundations and critical thinking skills</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Sports Excellence</h4>
                <p className="text-gray-700">Developing physical fitness, teamwork, and competitive spirit</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium text-gray-800 mb-2">Cultural Enrichment</h4>
                <p className="text-gray-700">Nurturing creativity, artistic expression, and cultural appreciation</p>
              </div>
            </div>
          </div>

          <div className="p-6 border-l-4 border-blue-400">
            <blockquote className="text-lg italic text-gray-700">
              "We believe in developing the complete individual - intellectually, physically, and creatively - to
              prepare our students for success in all aspects of life."
            </blockquote>
            <p className="mt-4 text-gray-600 font-medium">— Principal, SCV</p>
          </div>
        </div>
      </div>
    </section>
  )
}
