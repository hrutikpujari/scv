"use client"

import { useRef, useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BluePattern from "@/components/shapes/blue-pattern"

export default function AdmissionProcess() {
  const [inView, setInView] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const threshold = isMobile ? 0.1 : 0.4
    const observer = new window.IntersectionObserver(
      (entries) => {
        setInView(entries[0].isIntersecting);
      },
      { threshold }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      // Check immediately in case already in view on mount/navigation
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setInView(true);
      }
    }
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <section id="not-admission-process" ref={sectionRef} className={`py-16 bg-white relative overflow-hidden transition-all duration-700 scroll-mt-[100px] lg:scroll-mt-24 xl:scroll-mt-28 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
      {/* Decorative shape */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 opacity-10">
        <BluePattern />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">Admission Process</h2>
          <p className="text-lg text-gray-700">
            At Shankarrao Chavan Vidyalaya & Junior College, we welcome families seeking quality education in Kamothe,
            Navi Mumbai. Our admissions process is designed to be straightforward and transparent, giving parents and
            students the opportunity to join our supportive learning community.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="pre-primary" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="pre-primary">Pre-School & Primary</TabsTrigger>
              <TabsTrigger value="middle-school">Middle School</TabsTrigger>
              <TabsTrigger value="high-school">High School</TabsTrigger>
              <TabsTrigger value="junior-college">Junior College</TabsTrigger>
            </TabsList>

            <TabsContent value="pre-primary" className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pre-School & Primary Admissions (Pre-Primary to Grade 4)
              </h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Application Timeline:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Applications Open: [Month]</li>
                  <li>Form Submission Deadline: [Month]</li>
                  <li>Admission Decisions: Within two weeks of the interaction session</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Process Steps:</h4>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Application Form Submission</h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1">
                        <li>Complete the admission form (available online or at the school office)</li>
                        <li>Submit along with required documents</li>
                        <li>Pay the application processing fee</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Student and Parent Interaction</h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1">
                        <li>Brief interaction session with the child to understand learning readiness</li>
                        <li>Parent discussion with admissions team</li>
                        <li>School tour for new families</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Admission Confirmation</h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1">
                        <li>Notification of admission status</li>
                        <li>Fee payment as per schedule</li>
                        <li>Orientation program for new students and parents</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="middle-school" className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Middle School Admissions (Grades 5-7)</h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Application Timeline:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Applications Open: [Month]</li>
                  <li>Assessment Period: [Month]</li>
                  <li>Admission Decisions: Within two weeks of assessment</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Process Steps:</h4>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Application Submission</h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1">
                        <li>Complete application form with previous academic records</li>
                        <li>Submit all required documents</li>
                        <li>Pay application processing fee</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Entrance Assessment</h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1">
                        <li>Basic assessment in core subjects (English, Mathematics, Science)</li>
                        <li>The assessment evaluates grade-appropriate concepts and fundamentals</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Student and Parent Meeting</h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1">
                        <li>Discussion with the academic coordinator</li>
                        <li>Understanding of student's interests and strengths</li>
                        <li>School policies overview</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Admission Confirmation</h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1">
                        <li>Notification of admission status</li>
                        <li>Fee payment as per schedule</li>
                        <li>New student orientation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="high-school" className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">High School Admissions (Grades 8-10)</h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Application Timeline:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Applications Open: [Month]</li>
                  <li>Assessment Period: [Month]</li>
                  <li>Admission Decisions: Within two weeks of assessment</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Process Steps:</h4>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Application Submission</h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1">
                        <li>Complete application with previous academic records</li>
                        <li>Submit all required documents including transfer certificate if applicable</li>
                        <li>Pay application processing fee</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Entrance Assessment</h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1">
                        <li>Assessment in core subjects (English, Mathematics, Science, Social Studies)</li>
                        <li>Evaluation of foundational concepts necessary for higher grades</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Student and Parent Interview</h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1">
                        <li>Meeting with subject coordinators and principal</li>
                        <li>Discussion of academic expectations and student goals</li>
                        <li>Overview of board examination preparation</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Admission Confirmation</h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1">
                        <li>Notification of admission status</li>
                        <li>Fee payment as per schedule</li>
                        <li>Orientation and academic planning session</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="junior-college" className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Junior College Admissions (Grades 11-12)</h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Application Timeline:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Applications Open: After 10th board results</li>
                  <li>Admission Process: [Month-Month]</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Process Steps:</h4>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Application Submission</h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1">
                        <li>Complete the admission form with 10th grade mark sheet</li>
                        <li>Stream selection (Science or Commerce)</li>
                        <li>Submit required documents</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Merit-Based Selection</h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1">
                        <li>Admissions based on 10th grade results and seat availability</li>
                        <li>Cut-off marks announced after board results</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Counseling Session</h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1">
                        <li>Stream and subject combination guidance</li>
                        <li>Career path discussion</li>
                        <li>College orientation</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Admission Confirmation</h5>
                      <ul className="list-disc list-inside text-gray-700 mt-1">
                        <li>Notification of admission status</li>
                        <li>Fee payment as per schedule</li>
                        <li>College preparatory sessions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
