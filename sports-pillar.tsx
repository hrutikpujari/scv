export default function SportsPillar() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl relative">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">PILLAR TWO</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-12">Sports Excellence</h2>

      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <div className="order-2 md:order-1 relative">
          <div className="bg-blue-50 p-8 rounded-lg h-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-medium text-blue-500 mb-4">Our Sports Facilities</h3>
              <p className="text-gray-700 mb-4">
                We provide comprehensive sports facilities to support physical development and athletic excellence.
              </p>
            </div>

            <div className="mt-6 border-t border-blue-100 pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Multi-Sport Courts</h4>
                  <p className="text-gray-700">
                    Well-maintained facilities for basketball, volleyball, and badminton allow students to develop
                    skills in various sports.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Playing Fields</h4>
                  <p className="text-gray-700">
                    Spacious grounds for cricket, football, and athletics provide ample opportunity for team sports and
                    track events.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Indoor Sports</h4>
                  <p className="text-gray-700">
                    Facilities for table tennis, chess, and other indoor games develop strategic thinking alongside
                    physical coordination.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Qualified Coaches</h4>
                  <p className="text-gray-700">
                    Professional sports instructors provide expert guidance for both recreational participation and
                    competitive training.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SVG displayed below the card instead of overlapping */}
          <div className="flex justify-center mt-8">
            <svg
              className="w-20 h-20 md:w-36 md:h-36"
              viewBox="0 0 283 283"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_648_558)">
                <mask
                  id="mask0_648_558"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="283"
                  height="283"
                >
                  <path
                    d="M141.421 3.29018e-05L0 141.421L141.421 282.843L282.843 141.421L141.421 3.29018e-05Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_648_558)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M86.267 100.409L63.6396 77.7818L22.6274 118.794L4.02433e-06 141.421L16 157.421L22.6274 164.049L63.6396 205.061L86.267 182.434L61.2548 157.421H105.282L125.421 157.421L125.422 177.561L125.422 221.588L100.409 196.576L77.7818 219.203L118.794 260.215L141.421 282.843L157.421 266.843L164.049 260.215L205.061 219.203L182.434 196.576L157.421 221.588L157.421 177.561L157.421 157.421H177.561H221.588L196.576 182.434L219.203 205.061L260.215 164.049L282.843 141.421L266.843 125.422L260.215 118.794L219.203 77.7818L196.576 100.409L221.588 125.422H177.561H157.421L157.421 105.282L157.421 61.2549L182.434 86.2671L205.061 63.6396L164.049 22.6274L141.421 3.69261e-05L125.422 15.9997L118.794 22.6275L77.7817 63.6396L100.409 86.2671L125.422 61.2546L125.422 105.282L125.421 125.421L105.282 125.421L61.2548 125.421L86.267 100.409Z"
                    fill="url(#paint0_linear_648_558)"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_648_558"
                  x1="28.2843"
                  y1="149.907"
                  x2="253.498"
                  y2="141.775"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFC300" />
                  <stop offset="1" stopColor="#FFF7DE" />
                </linearGradient>
                <clipPath id="clip0_648_558">
                  <rect width="200" height="200" fill="white" transform="translate(0 141.421) rotate(-45)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-medium text-blue-500 mb-6">Physical Development</h3>
          <p className="text-gray-700 mb-8">
            We recognize that physical education is essential for both health and character development. Our sports
            programs encourage discipline, teamwork, and perseverance while promoting physical fitness and wellness.
          </p>

          <div className="bg-blue-100 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-medium text-gray-800 mb-4">Sports Programs</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800">Physical Education Classes</h5>
                <p className="text-gray-700">
                  Regular PE sessions for all students from pre-primary through high school ensure basic fitness and
                  sports exposure.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Sports Training</h5>
                <p className="text-gray-700">
                  Specialized coaching for students who show aptitude and interest in particular sports.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Intramural Competitions</h5>
                <p className="text-gray-700">
                  House-based tournaments foster school spirit and healthy competition across multiple sports.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Interschool Participation</h5>
                <p className="text-gray-700">
                  Selected students represent SCV in district and regional competitions, gaining valuable competitive
                  experience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-medium text-gray-800 mb-4">Notable Achievements</h4>
            <p className="text-gray-700 mb-4">Our students have represented the school at various levels in:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>District-level cricket and football tournaments</li>
              <li>Regional athletics competitions</li>
              <li>State-level chess championships</li>
              <li>Zonal badminton tournaments</li>
            </ul>
            <p className="text-gray-700 mt-4">
              All sports programs are included within our transparent fee structure, making quality physical education
              accessible to every student.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
