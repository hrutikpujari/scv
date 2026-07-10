import Image from "next/image"
import Shape9 from "./components/shapes/shape_9"

export default function JuniorCollegeSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl relative">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">ACADEMICS</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-12 mt-6">Junior College (Grades 11-12)</h2>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-medium text-blue-500 mb-6">Bridging to Higher Education</h3>

          <p className="text-gray-700 mb-8">
            Our Junior College offers specialized streams that prepare students for university studies and professional
            pathways. This crucial phase focuses on depth of knowledge, analytical thinking, and career orientation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-100 p-6 rounded-lg h-full">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Science Stream</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Physics, Chemistry, Mathematics/Biology</li>
                <li>Ideal for engineering, medicine, research</li>
                <li>Strong laboratory component</li>
                <li>Competitive examination preparation</li>
              </ul>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg h-full">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Commerce Stream</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Accountancy, Business Studies, Economics</li>
                <li>Preparation for business, finance careers</li>
                <li>Project work and case studies</li>
                <li>Financial literacy and business knowledge</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-medium text-gray-800 mb-4">Specialized Support</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-800">Career Guidance</h5>
                <p className="text-gray-700">
                  Dedicated counselors help students navigate higher education options and career planning.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Competitive Exam Coaching</h5>
                <p className="text-gray-700">
                  Additional support for students preparing for JEE, NEET, CET, and other examinations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="rounded-lg overflow-hidden relative">
            <Image
              src="/junior-college-students.png"
              alt="Junior college students in laboratory"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            {/* Changed SVG to Shape9 and positioned consistently */}
            <div className="absolute -top-8 -right-8 z-10">
              <div className="w-20 h-20 md:w-36 md:h-36">
                <Shape9 />
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-100 p-6 rounded-lg">
            <h4 className="text-xl font-medium text-gray-800 mb-4">Success Stories</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 font-bold">A</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Aarav Sharma</h5>
                  <p className="text-gray-700">
                    Secured admission to IIT Bombay after completing our Science stream with specialized JEE coaching.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 font-bold">P</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Priya Desai</h5>
                  <p className="text-gray-700">
                    Graduated from our Commerce stream and went on to pursue CA, now working at a leading accounting
                    firm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
