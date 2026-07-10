"use client"

import { useRef, useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, CheckCircle } from "lucide-react"
import Shape1 from "@/components/shapes/shape_1"

export default function RequiredDocuments() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let lastRatio = 0;
    const observer = new window.IntersectionObserver(
      (entries) => {
        const ratio = entries[0].intersectionRatio;
        if (!inView && ratio > 0.4) setInView(true);
        else if (inView && ratio < 0.1) setInView(false);
        lastRatio = ratio;
      },
      { threshold: [0, 0.1, 0.2, 0.4, 1] }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <section id="required-documents" ref={sectionRef} className={`py-16 bg-white relative overflow-hidden transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
      {/* Decorative shape */}
      <div className="absolute -left-24 bottom-0 opacity-10">
        <Shape1 />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">Required Documents</h2>
          <p className="text-lg text-gray-700">
            Please submit the following documents with your admission application:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="pre-primary" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="pre-primary">Pre-Primary to Grade 1</TabsTrigger>
              <TabsTrigger value="grades-2-10">Grades 2 to 10</TabsTrigger>
              <TabsTrigger value="junior-college">Junior College</TabsTrigger>
            </TabsList>

            <TabsContent value="pre-primary" className="bg-blue-50 p-6 rounded-lg">
              <ul className="space-y-3">
                {[
                  "Completed application form",
                  "Birth certificate (original and photocopy)",
                  "Aadhar card of the student (if available)",
                  "Immunization record",
                  "Passport-size photographs (4)",
                  "Proof of residence (Electricity bill/Rent agreement/Ownership deed)",
                  "Parents' ID proof (Aadhar/PAN/Passport)",
                  "Previous school report card (if applicable)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="grades-2-10" className="bg-blue-50 p-6 rounded-lg">
              <ul className="space-y-3">
                {[
                  "Completed application form",
                  "Birth certificate (original and photocopy)",
                  "Aadhar card of the student",
                  "Previous school report cards (last two years)",
                  "Transfer certificate from previous school",
                  "Passport-size photographs (4)",
                  "Proof of residence (Electricity bill/Rent agreement/Ownership deed)",
                  "Parents' ID proof (Aadhar/PAN/Passport)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="junior-college" className="bg-blue-50 p-6 rounded-lg">
              <ul className="space-y-3">
                {[
                  "Completed application form",
                  "10th standard mark sheet (original and photocopy)",
                  "School leaving certificate/Transfer certificate",
                  "Migration certificate (if from another board)",
                  "Aadhar card of the student",
                  "Passport-size photographs (4)",
                  "Proof of residence (Electricity bill/Rent agreement/Ownership deed)",
                  "Parents' ID proof (Aadhar/PAN/Passport)",
                  "Caste certificate (if applicable)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-gray-700 flex items-center gap-2">
              <FileText className="h-5 w-5 text-yellow-600" />
              <span>
                Note: All original documents will be returned after verification. Please ensure all photocopies are
                clear and legible.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
