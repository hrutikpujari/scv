import Image from "next/image"

export default function PrePrimarySection() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">ACADEMICS</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-8 mt-6">Pre-Primary to 1st Grade (English Medium)</h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-medium text-blue-500 mb-6">Nurturing Curious Minds</h3>

          <p className="text-gray-700 mb-6">
            Our pre-primary and early primary program creates a foundation for lifelong learning through play-based
            discovery and structured activities. These formative years are crucial for developing essential skills and a
            positive attitude toward education.
          </p>

          <h4 className="text-xl font-medium text-gray-800 mb-4">Curriculum Highlights</h4>

          <div className="space-y-4 mb-8">
            <div>
              <h5 className="font-medium text-gray-800">Early Literacy</h5>
              <p className="text-gray-700">
                Building vocabulary, phonetic awareness, and storytelling skills through interactive activities and
                exposure to quality children's literature.
              </p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Numeracy Foundations</h5>
              <p className="text-gray-700">
                Developing number sense, pattern recognition, and basic mathematical concepts through hands-on materials
                and games.
              </p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Environmental Awareness</h5>
              <p className="text-gray-700">
                Exploring the natural world through observation, simple experiments, and outdoor learning experiences.
              </p>
            </div>

            <div>
              <h5 className="font-medium text-gray-800">Creative Expression</h5>
              <p className="text-gray-700">
                Encouraging imagination and self-expression through art, music, movement, and dramatic play.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="h-64 relative">
              <Image
                src="/placeholder.svg?key=iuduf"
                alt="Children learning through play"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Fee Structure</h4>

              <p className="text-gray-700 mb-4">
                Our pre-primary to 1st grade program is offered at a transparent fee structure:
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
                This competitive fee structure allows us to deliver quality early education while remaining accessible
                to families in the Kamothe region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
