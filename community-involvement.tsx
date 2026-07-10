import Image from "next/image"

export default function CommunityInvolvement() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-16 max-w-7xl">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">COMMUNITY INVOLVEMENT</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6 mt-6">Beyond Our Campus</h2>

      <p className="text-gray-700 mb-12 max-w-3xl">
        At SCV, we believe in extending education beyond classroom walls. Our students and staff actively participate in
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {/* Environmental conservation initiatives */}
        <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 w-[calc(50%-12px)] md:w-auto">
          <div className="mb-4 w-14 h-14 flex items-center justify-center">
            <Image
              src="/images/environmental-conservation.png"
              alt="Environmental conservation icon"
              width={96}
              height={96}
              className="w-full h-auto"
            />
          </div>
          <p className="text-gray-800 font-medium">
            Environmental conservation
            <br />
            initiatives
          </p>
        </div>

        {/* Community service projects */}
        <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 w-[calc(50%-12px)] md:w-auto">
          <div className="mb-4 w-14 h-14 flex items-center justify-center">
            <Image
              src="/images/community-service.png"
              alt="Community service icon"
              width={96}
              height={96}
              className="w-full h-auto"
            />
          </div>
          <p className="text-gray-800 font-medium">
            Community service
            <br />
            projects
          </p>
        </div>

        {/* Cultural exchange programs */}
        <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 w-[calc(50%-12px)] md:w-auto">
          <div className="mb-4 w-14 h-14 flex items-center justify-center">
            <Image
              src="/images/cultural-exchange.png"
              alt="Cultural exchange icon"
              width={96}
              height={96}
              className="w-full h-auto"
            />
          </div>
          <p className="text-gray-800 font-medium">
            Cultural exchange
            <br />
            programs
          </p>
        </div>

        {/* Awareness campaigns */}
        <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 w-[calc(50%-12px)] md:w-auto">
          <div className="mb-4 w-14 h-14 flex items-center justify-center">
            <Image
              src="/images/awareness-campaigns.png"
              alt="Awareness campaigns icon"
              width={96}
              height={96}
              className="w-full h-auto"
            />
          </div>
          <p className="text-gray-800 font-medium">
            Awareness campaigns
            <br />
            on social issues
          </p>
        </div>

        {/* Collaborations */}
        <div className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 w-[calc(50%-12px)] md:w-auto">
          <div className="mb-4 w-14 h-14 flex items-center justify-center">
            <Image
              src="/images/local-collaborations.png"
              alt="Local collaborations icon"
              width={96}
              height={96}
              className="w-full h-auto"
            />
          </div>
          <p className="text-gray-800 font-medium">
            Collaborations with
            <br />
            local organizations
            <br />
            and institutions
          </p>
        </div>
      </div>

      <p className="text-gray-700 max-w-4xl">
        These experiences help students develop empathy, social responsibility, and leadership skills while making
        meaningful contributions to society.
      </p>
    </section>
  )
}
