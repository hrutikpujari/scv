import Link from "next/link"

export default function FaqBottomText() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="bg-blue-50 p-8 rounded-lg">
        <p className="text-gray-700 text-center">
          Find answers to commonly asked questions about our school, programs, and policies. If you don't see your
          question here, please contact us directly through our{" "}
          <Link href="/contact#form" className="text-blue-500 underline hover:text-blue-700">
            contact page
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
