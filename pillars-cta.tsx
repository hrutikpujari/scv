import Link from "next/link"

export default function PillarsCta() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="bg-blue-50 p-8 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6">Join the SCV Community</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Experience an educational environment where academic excellence, physical development, and cultural
            enrichment come together to create well-rounded, confident individuals.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 mb-8">
            Our balanced approach to education, combined with our transparent and accessible fee structure (ranging from
            ₹15,500 to ₹20,000 annually depending on grade level), makes SCV an excellent choice for families in
            Kamothe, Navi Mumbai seeking comprehensive education.
          </p>

          <div className="flex justify-center">
            <Link
              href="/admissions#contact-admissions"
              className="inline-block bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white font-medium py-3 px-8 rounded-full transition"
            >
              Schedule a Campus Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
