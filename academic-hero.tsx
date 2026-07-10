import Image from "next/image"

export default function AcademicHero() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/collaborative-learning-space.png"
          alt="Students in a modern classroom environment"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Excellence in Learning at Every Stage</h1>
        <p className="text-xl md:text-2xl">Comprehensive Education from Pre-Primary through Junior College</p>
      </div>
    </section>
  )
}
