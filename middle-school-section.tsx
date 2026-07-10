import Image from "next/image"

export default function MiddleSchoolSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">ACADEMICS</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-8 mt-6">Middle School (Grades 5-7)</h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-medium text-blue-500 mb-6">Expanding Horizons</h3>

          <p className="text-gray-700 mb-6">
            Our middle school program represents a transition period where students develop greater independence in
            their learning while receiving the structured guidance they need during this crucial developmental stage.
          </p>

          <h4 className="text-xl font-medium text-gray-800 mb-4">Curriculum Structure</h4>

          <div className="space-y-4 mb-8">
            <div>
              <h5 className="font-medium text-gray-800">Language and Literature</h5>
              <p className="text-gray-700">
                Advanced reading, writing, and analysis skills with exposure to diverse literary genres and effective
                communication techniques.
              </p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Mathematics</h5>
              <p className="text-gray-700">
                Progressive development of algebraic thinking, geometry, data analysis, and problem-solving strategies.
              </p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Science</h5>
              <p className="text-gray-700">
                Specialized study of physical, biological, and earth sciences with laboratory experiences and research
                projects.
              </p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Social Studies</h5>
              <p className="text-gray-700">
                Exploration of history, geography, civics, and current events with an emphasis on critical analysis and
                global awareness.
              </p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Digital Literacy</h5>
              <p className="text-gray-700">
                Computer applications, internet research skills, and introduction to coding and digital citizenship.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="h-64 relative">
              <Image
                src="/placeholder.svg?key=t87s0"
                alt="Middle school students in science lab"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Fee Structure</h4>

              <p className="text-gray-700 mb-4">
                Our middle school program maintains excellent value with a balanced fee structure:
              </p>

              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Tuition Fee:</span>
                  <span>₹9,600 (₹800 × 12)</span>
                </li>
                <li className="flex justify-between">
                  <span>Term Fee:</span>
                  <span>₹1,600 (₹400 × 4)</span>
                </li>
                <li className="flex justify-between">
                  <span>Other Fee:</span>
                  <span>₹6,000 (₹3,000 × 2)</span>
                </li>
                <li className="flex justify-between font-medium border-t border-gray-200 pt-2 mt-2">
                  <span>Total Annual Fee:</span>
                  <span>₹17,200</span>
                </li>
              </ul>

              <p className="text-gray-700 mt-4">
                This fee structure allows us to maintain an optimal student-teacher ratio (better than the 30:1 ratio
                seen at some competitor schools) while providing quality education at an accessible price point.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
