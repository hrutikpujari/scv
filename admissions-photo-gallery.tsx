import Image from "next/image"

export default function AdmissionsPhotoGallery() {
  return (
    <section className="w-full overflow-hidden py-8">
      {/* Static photo gallery - scaled down for mobile, same layout as desktop */}
      <div className="flex gap-2 w-[105%] -ml-[2.5%] md:w-[140%] md:-ml-[20%] md:gap-6 lg:gap-8 items-center">
        {/* Image 1 - standard height (visible on all devices) */}
        <div className="w-[10%] md:w-1/3 lg:w-1/4 relative h-[20vh] md:h-[35vh]">
          <Image src="/placeholder.svg?key=sazlr" alt="Students in classroom" fill className="object-cover object-right" />
        </div>

        {/* Image 2 - 16:9 aspect ratio (visible on all devices) - smaller */}
        <div className="w-[40%] md:w-1/3 lg:w-1/4 relative self-center h-[16vh] md:h-auto">
          <div className="aspect-video h-auto">
            <Image
              src="/school-gate-moment.png"
              alt="Parent and child at school admission"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Image 3 - standard height (visible on all devices) */}
        <div className="w-[40%] md:w-1/3 lg:w-1/4 relative h-[20vh] md:h-[35vh]">
          <Image src="/welcoming-admissions.png" alt="School admission office" fill className="object-cover" />
        </div>

        {/* Image 4 - 16:9 aspect ratio (visible on all devices) - smaller */}
        <div className="w-[10%] md:w-1/3 lg:w-1/4 relative self-center h-[16vh] md:h-auto">
          <div className="aspect-video h-auto">
            <Image src="/placeholder.svg?key=m4a5q" alt="Students in school uniform" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Second row - swapped positions: 1st with 2nd, 3rd with 4th - mobile only */}
      <div className="flex gap-2 w-[105%] -ml-[2.5%] md:hidden items-center mt-4">
        {/* Image 2 - smaller width */}
        <div className="w-[10%] relative self-center h-[16vh]">
          <div className="aspect-video h-full">
            <Image
              src="/school-gate-moment.png"
              alt="Parent and child at school admission"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Image 1 - fully visible, wider */}
        <div className="w-[40%] relative h-[20vh]">
          <Image src="/placeholder.svg?key=sazlr" alt="Students in classroom" fill className="object-cover" />
        </div>

        {/* Image 4 - wider width */}
        <div className="w-[40%] relative self-center h-[16vh]">
          <div className="aspect-video h-full">
            <Image src="/placeholder.svg?key=m4a5q" alt="Students in school uniform" fill className="object-cover" />
          </div>
        </div>

        {/* Image 3 - smaller width */}
        <div className="w-[10%] relative h-[20vh]">
          <Image src="/welcoming-admissions.png" alt="School admission office" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}
