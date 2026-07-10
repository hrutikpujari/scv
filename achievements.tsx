import Image from "next/image"

export default function Achievements() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-16 max-w-7xl">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">ACHIEVEMENTS</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6 mt-6">Our Pride</h2>

      <p className="text-gray-700 mb-12 max-w-3xl">
        Over the years, SCV students have achieved remarkable success in academics, sports, arts, and co-curricular
        activities. Some of our notable accomplishments include
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Academic Excellence */}
        <div className="flex flex-col">
          <div className="mb-4 overflow-hidden rounded-lg group">
            <Image
              src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1470&auto=format&fit=crop"
              alt="SCV School Building"
              width={600}
              height={450}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p className="text-gray-800 font-medium">Consistent academic excellence in board examinations</p>
        </div>

        {/* Sports Recognition */}
        <div className="flex flex-col">
          <div className="mb-4 overflow-hidden rounded-lg group">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1470&auto=format&fit=crop"
              alt="Art supplies on desk"
              width={600}
              height={450}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p className="text-gray-800 font-medium">District and state-level recognition in sports competitions</p>
        </div>

        {/* Cultural Awards */}
        <div className="flex flex-col">
          <div className="mb-4 overflow-hidden rounded-lg group">
            <Image
              src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=1470&auto=format&fit=crop"
              alt="Students in school uniform"
              width={600}
              height={450}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p className="text-gray-800 font-medium">Awards in inter-school cultural and literary events</p>
        </div>
      </div>
    </section>
  )
}
