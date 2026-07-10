import Image from "next/image"

export default function PrimarySchoolSection() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">ACADEMICS</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-8 mt-6">Primary School (Grades 2-4)</h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-medium text-blue-500 mb-6">Building Strong Foundations</h3>

          <p className="text-gray-700 mb-6">
            The primary years focus on mastering fundamental skills while nurturing a love of learning. Our program
            emphasizes core academic subjects complemented by opportunities for creative and physical development.
          </p>

          <h4 className="text-xl font-medium text-gray-800 mb-4">Curriculum Focus</h4>

          <div className="space-y-4 mb-8">
            <div>
              <h5 className="font-medium text-gray-800">Language Arts</h5>
              <p className="text-gray-700">
                Developing strong reading comprehension, writing skills, and effective communication through an
                integrated language approach.
              </p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Mathematics</h5>
              <p className="text-gray-700">
                Building number fluency, problem-solving skills, and mathematical reasoning through concrete and
                abstract learning experiences.
              </p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Environmental Studies</h5>
              <p className="text-gray-700">
                Exploring scientific concepts and social awareness through observation, inquiry, and age-appropriate
                projects.
              </p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Art, Music & Physical Education</h5>
              <p className="text-gray-700">
                Regular specialized classes that develop creativity, motor skills, and appreciation for the arts.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="h-64 relative">
              <Image
                src="/placeholder.svg?key=d0g0q"
                alt="Elementary school students learning"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Fee Structure</h4>

              <p className="text-gray-700 mb-4">
                Our grades 2-4 program offers excellent value with the following fee structure:
              </p>

              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Tuition Fee:</span>
                  <span>₹9,000 (₹750 × 12)</span>
                </li>
                <li className="flex justify-between">
                  <span>Term Fee:</span>
                  <span>₹1,500 (₹375 × 4)</span>
                </li>
                <li className="flex justify-between">
                  <span>Other Fee:</span>
                  <span>₹5,000 (₹2,500 × 2)</span>
                </li>
                <li className="flex justify-between font-medium border-t border-gray-200 pt-2 mt-2">
                  <span>Total Annual Fee:</span>
                  <span>₹15,500</span>
                </li>
              </ul>

              <p className="text-gray-700 mt-4">
                This represents significant value compared to other premium schools in Kamothe such as Indo Scots Global
                School and Ryan Shalom Montessori, where monthly fees can range from ₹3,300 to ₹4,700.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
