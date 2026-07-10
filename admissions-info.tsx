import Link from "next/link"
import Image from "next/image"
import Shape2 from "./components/shapes/shape_2"

export default function AdmissionsInfo() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl relative">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">ADMISSIONS</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-12">Admissions Information</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center relative">
        <div>
          <div className="bg-blue-100 p-8 rounded-lg relative z-10">
            <h3 className="text-2xl font-medium text-gray-800 mb-6">Join the SCV Family</h3>

            <p className="text-gray-700 mb-8">
              Interested in joining our academic programs? Our admissions team is available to guide you through the
              application process for any grade level.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Submit Application</h4>
                  <p className="text-gray-700">Complete our online application form or visit our admissions office</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Assessment</h4>
                  <p className="text-gray-700">Students participate in an age-appropriate assessment</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Interview</h4>
                  <p className="text-gray-700">Family interview with our admissions team</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Enrollment</h4>
                  <p className="text-gray-700">Acceptance notification and completion of enrollment process</p>
                </div>
              </div>
            </div>

            <Link
              href="/admissions#admissions-enquiry-form"
              className="inline-block bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white font-medium py-3 px-8 rounded-full transition"
            >
              Explore Admissions Process
            </Link>
          </div>

          {/* Decorative element - consistent sizing */}
          <div className="absolute -bottom-16 -left-16 z-0 hidden md:block">
            <div className="w-20 h-20 md:w-36 md:h-36">
              <Shape2 />
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-lg overflow-hidden mb-8">
            <Image
              src="/admissions-image.png"
              alt="New student registration"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Admissions Timeline</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">November - December</span>
                <span className="text-gray-700">Applications Open</span>
              </div>
              <div className="w-full h-0.5 bg-gray-100"></div>

              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">January - February</span>
                <span className="text-gray-700">Assessments & Interviews</span>
              </div>
              <div className="w-full h-0.5 bg-gray-100"></div>

              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">March</span>
                <span className="text-gray-700">Acceptance Notifications</span>
              </div>
              <div className="w-full h-0.5 bg-gray-100"></div>

              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">April - May</span>
                <span className="text-gray-700">Enrollment & Fee Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
