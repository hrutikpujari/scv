import YellowStar from "./components/shapes/yellow-star"

export default function CompetitiveAdvantage() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl relative">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">WHY CHOOSE SCV</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left column with heading and star */}
        <div className="md:w-1/3 relative">
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6 md:mb-0">Our Competitive Advantage</h2>

          {/* Yellow star shape */}
          <div className="w-20 h-20 md:w-36 md:h-36 md:absolute md:top-16 md:-left-4 opacity-80 mt-12">
            <YellowStar />
          </div>
        </div>

        {/* Right column with advantages */}
        <div className="md:w-2/3 z-10 relative">
          <p className="text-gray-700 mb-8">
            When comparing educational options in Kamothe, SCV offers distinct advantages:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Comprehensive Grade Coverage</h3>
              <p className="text-gray-700">
                Unlike schools such as Ryan Shalom Montessori (Pre-Nursery - UKG) or Indo Scots Global School (Nursery -
                Class 8), SCV provides a continuous educational journey from pre-primary through Junior College.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Balanced Student-Teacher Ratio</h3>
              <p className="text-gray-700">
                We maintain an optimal classroom size that provides more individual attention than some competitors who
                have ratios as high as 30:1.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Value-Based Education</h3>
              <p className="text-gray-700">
                Our fee structure delivers quality education at rates that are considerably more affordable than many
                premium schools in the area, where monthly fees can range from ₹3,300 to ₹4,700 for just the nursery
                level.
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Stable Fee Structure</h3>
              <p className="text-gray-700">
                Parents appreciate our transparent and predictable fee structure, allowing for better financial planning
                throughout their child's educational journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
