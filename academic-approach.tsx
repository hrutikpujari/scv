import Image from "next/image"

export default function AcademicApproach() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left column - Image with overlapping shape */}
        <div className="lg:w-1/2 relative">
          <div className="relative">
            <Image
              src="/academic-approach-image.png"
              alt="Students engaged in collaborative learning"
              width={600}
              height={500}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute -bottom-8 -left-4 z-10">
              <svg
                className="w-20 h-20 md:w-36 md:h-36"
                viewBox="0 0 216 216"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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

        {/* Right column - Content */}
        <div className="lg:w-1/2">
          <div className="mb-4">
            <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">OUR APPROACH</span>
          </div>

          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6">Our Academic Approach</h2>

          <div className="space-y-6">
            <p className="text-gray-700">
              At Shankarrao Chavan Vidyalaya & Junior College, we've established a reputation for educational excellence
              in Kamothe, Navi Mumbai, earning a 4.2-star rating based on parent feedback. Our curriculum is
              thoughtfully structured to meet the developmental needs of students at each level.
            </p>

            <p className="text-gray-700">
              We understand that effective learning requires both excellent teaching and accessible education. Our
              programs combine strong fundamentals with innovative teaching methods, all delivered within a transparent
              and stable fee structure that allows parents to plan with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
