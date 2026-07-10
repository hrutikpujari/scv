import Shape5 from "./components/shapes/shape_5"

export default function EducationalPillar() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl relative">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">PILLAR ONE</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-12">Educational Excellence</h2>

      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <h3 className="text-2xl font-medium text-blue-500 mb-6">Academic Foundation</h3>
          <p className="text-gray-700 mb-8">
            Education forms the core of everything we do at SCV. Our curriculum is carefully structured to build strong
            academic foundations while fostering critical thinking, problem-solving abilities, and a lifelong love for
            learning.
          </p>

          <div className="bg-blue-100 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-medium text-gray-800 mb-4">Our Educational Approach</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800">Comprehensive Curriculum</h5>
                <p className="text-gray-700">
                  Our grade-appropriate syllabus covers all essential subjects with the depth and breadth necessary for
                  academic excellence. From pre-primary through junior college, we maintain high standards of teaching
                  while ensuring learning remains engaging and relevant.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Experienced Faculty</h5>
                <p className="text-gray-700">
                  Our teachers bring both expertise and passion to the classroom, creating dynamic learning experiences
                  that address different learning styles. Regular professional development ensures our teaching methods
                  remain current and effective.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Personalized Attention</h5>
                <p className="text-gray-700">
                  With an optimal student-teacher ratio that outperforms the 30:1 ratio seen at some competitor schools
                  in Kamothe, we provide individualized guidance that helps each student reach their full potential.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Technology Integration</h5>
                <p className="text-gray-700">
                  Modern educational tools complement traditional teaching methods, preparing students for a digital
                  future while enhancing classroom learning experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-blue-50 p-8 rounded-lg h-full">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-medium text-blue-500">Academic Success</h3>
              {/* SVG directly in the component, positioned in top right */}
            </div>
            <p className="text-gray-700 mb-4 text-center">
              Our educational pillar has produced consistent academic achievement across all levels.
            </p>

            <div className="mt-6 border-t border-blue-100 pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Primary Level (Grades 1-4)</h4>
                  <p className="text-gray-700">
                    Building strong foundations in literacy, numeracy, and critical thinking within our accessible fee
                    structure of ₹15,500 annually for grades 2-4.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Middle School (Grades 5-7)</h4>
                  <p className="text-gray-700">
                    Expanding knowledge horizons with specialized subject instruction at ₹17,200 annually, significantly
                    more affordable than comparable programs at premium schools in Kamothe.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">High School (Grades 8-10)</h4>
                  <p className="text-gray-700">
                    Comprehensive board examination preparation with proven results, all within our transparent fee
                    structure of ₹20,000 annually.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Junior College (Grades 11-12)</h4>
                  <p className="text-gray-700">
                    Specialized streams preparing students for higher education with excellent placement records in
                    prestigious universities and competitive examinations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Blue Blob SVG - positioned to overlap */}
          <div className="absolute -bottom-8 -right-8 z-10">
            <div className="transform scale-75 md:scale-100">
              <Shape5 />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
