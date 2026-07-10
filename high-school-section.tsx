import Image from "next/image"

export default function HighSchoolSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">ACADEMICS</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-8 mt-6">High School (Grades 8-10)</h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-medium text-blue-500 mb-6">Preparing for Achievement</h3>

          <p className="text-gray-700 mb-6">
            Our high school program offers comprehensive preparation for board examinations while developing the
            critical thinking, time management, and study skills essential for future academic success.
          </p>

          <h4 className="text-xl font-medium text-gray-800 mb-4">Academic Excellence</h4>

          <div className="space-y-4 mb-8">
            <div>
              <h5 className="font-medium text-gray-800">Science Stream</h5>
              <p className="text-gray-700">
                In-depth study of physics, chemistry, and biology with extensive laboratory work and application-based
                learning.
              </p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Mathematics</h5>
              <p className="text-gray-700">
                Advanced concepts, problem-solving techniques, and preparation for competitive examinations.
              </p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Languages</h5>
              <p className="text-gray-700">
                Mastery of communication skills in English and regional languages with appreciation of literature and
                cultural context.
              </p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Social Sciences</h5>
              <p className="text-gray-700">
                Comprehensive study of history, geography, economics, and political science with analytical
                perspectives.
              </p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Information Technology</h5>
              <p className="text-gray-700">
                Computer applications, basic programming, and digital literacy for the modern world.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="h-64 relative">
              <Image
                src="/placeholder.svg?key=cm4kr"
                alt="High school students studying"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Fee Structure</h4>

              <p className="text-gray-700 mb-4">
                Our high school program maintains our commitment to affordable quality education:
              </p>

              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Tuition Fee:</span>
                  <span>₹12,000 (₹1,000 × 12)</span>
                </li>
                <li className="flex justify-between">
                  <span>Term Fee:</span>
                  <span>₹2,000 (₹500 × 4)</span>
                </li>
                <li className="flex justify-between">
                  <span>Other Fee:</span>
                  <span>₹6,000 (₹3,000 × 2)</span>
                </li>
                <li className="flex justify-between font-medium border-t border-gray-200 pt-2 mt-2">
                  <span>Total Annual Fee:</span>
                  <span>₹20,000</span>
                </li>
              </ul>

              <p className="text-gray-700 mt-4">
                While competitors like Loknete Ramsheth Thakur Public School and other CBSE schools in Kamothe may
                charge premium rates, we maintain competitive pricing without compromising on educational quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
