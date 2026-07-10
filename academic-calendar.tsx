import Link from "next/link"
import Image from "next/image"
import BluePlus from "./components/shapes/blue-plus"

export default function AcademicCalendar() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl relative">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">CALENDAR</span>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6">Academic Calendar</h2>

          <p className="text-gray-700 mb-6">
            Our annual academic plan balances instructional time with co-curricular activities, examinations, and
            breaks. The structured calendar ensures comprehensive coverage of the curriculum while allowing time for
            reflection and growth.
          </p>

          <div className="bg-blue-100 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Key Academic Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Term examinations</li>
                  <li>Science and mathematics fairs</li>
                  <li>Literary and cultural festivals</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Sports competitions</li>
                  <li>Annual day celebrations</li>
                  <li>Parent-teacher conferences</li>
                </ul>
              </div>
            </div>
          </div>

          <Link
            href="/work-in-progress"
            className="inline-block bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white font-medium py-3 px-8 rounded-full transition"
          >
            Download Academic Calendar
          </Link>
        </div>

        <div className="relative">
          <div className="rounded-lg overflow-hidden relative">
            <Image
              src="/academic-calendar-image.png"
              alt="Students participating in school events"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            {/* Moved BluePlus to corner of image with consistent sizing */}
            <div className="absolute -top-8 -right-8 z-10">
              <div className="w-20 h-20 md:w-36 md:h-36">
                <BluePlus />
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-800 mb-4">2024-25 Academic Year Highlights</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 font-medium">JUN</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">School Reopening</h4>
                  <p className="text-gray-700">Academic year begins with orientation programs for all grades</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 font-medium">OCT</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Mid-Term Assessments</h4>
                  <p className="text-gray-700">First term examinations followed by Diwali break</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-500 font-medium">MAR</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Final Examinations</h4>
                  <p className="text-gray-700">End-of-year assessments and annual day celebrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
