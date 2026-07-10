import Navbar from "../../navbar"
import PhotoGallerySection from "../../photo-gallery-section"
import Footer from "../../footer"
import { Construction } from "lucide-react"

export default function WorkInProgressPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Work in Progress Content */}
      <section className="container mx-auto px-4 md:px-6 py-32 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          {/* Add the HardHat icon above the heading */}
          <div className="flex justify-center mb-6">
            <Construction size={64} className="text-neutral-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-gray-800 mb-6">Work in Progress</h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-8">
            We're currently building this page to provide you with the best experience possible.
          </p>
          <p className="text-gray-600 mb-12">
            Please check back soon for updates. In the meantime, feel free to explore other sections of our website or
            contact us directly for any specific information you need.
          </p>
          <a
            href="/contact#form"
            className="inline-block bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white font-medium py-3 px-8 rounded-full transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      <PhotoGallerySection />
      <Footer />
    </main>
  )
}
