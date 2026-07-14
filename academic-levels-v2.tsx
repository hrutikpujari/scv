"use client"

import { useRef, useEffect, useState } from "react"

function useInViewAnimation() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView]);
  return [ref, inView] as const
}

export default function AcademicLevelsV2() {
  const [preRef, preInView] = useInViewAnimation()
  const [primaryRef, primaryInView] = useInViewAnimation()
  const [middleRef, middleInView] = useInViewAnimation()
  const [highRef, highInView] = useInViewAnimation()

  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl relative">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">ACADEMICS</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-12 mt-6">Our Academic Programs</h2>

      {/* Pre-Primary Section */}
      <div id="not-pre-school" className="mb-24 relative" ref={preRef}>
        {/* Common div to group title/description and fee structure */}
        <div>
          <div className="grid md:grid-cols-2 gap-12 items-start mb-8">
            <div className={`transition-all duration-700 ${preInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
              <h3 className="text-2xl font-medium text-blue-500 mb-6">Pre-Primary to 1st Grade</h3>
              <p className="text-gray-700">
                Our pre-primary and early primary program creates a foundation for lifelong learning through play-based
                discovery and structured activities. These formative years are crucial for developing essential skills
                and a positive attitude toward education.
              </p>
            </div>
            <div className={`transition-all duration-700 ${preInView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="text-lg font-medium text-gray-800 mb-4">Fee Structure</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex justify-between">
                    <span>Tuition Fee:</span>
                    <span>₹12,000 (₹1,000 × 12)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Term Fee:</span>
                    <span>₹2,000 (₹500 × 4)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Other Fee:</span>
                    <span>₹6,000 (₹3,000 × 2)</span>
                  </li>
                  <li className="flex justify-between font-medium border-t border-gray-200 pt-2 mt-2">
                    <span>Total Annual Fee:</span>
                    <span>₹20,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Cards section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-700 ${preInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Curriculum Highlights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-800">Early Literacy</h5>
                  <p className="text-gray-700 text-sm">
                    Building vocabulary, phonetic awareness, and storytelling skills.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Numeracy Foundations</h5>
                  <p className="text-gray-700 text-sm">Developing number sense and basic mathematical concepts.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Environmental Awareness</h5>
                  <p className="text-gray-700 text-sm">
                    Exploring the natural world through observation and experiments.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Creative Expression</h5>
                  <p className="text-gray-700 text-sm">Encouraging imagination through art, music, and dramatic play.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`transition-all duration-700 ${preInView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <div className="relative bg-blue-50 p-8 rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl font-medium text-blue-500 mb-4">Learning Through Play</h3>
                <p className="text-gray-700 mb-4">
                  Our pre-primary classrooms are vibrant spaces where children explore, discover, and build foundational
                  skills through guided play and age-appropriate activities.
                </p>
                <div className="mt-4 inline-block bg-white px-4 py-2 rounded-full text-blue-600 font-medium">
                  Ages 3-6 years
                </div>
              </div>
              <div className="mt-6 border-t border-blue-100 pt-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Playful learning environments</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Hands-on discovery activities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Foundational skill development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Nurturing, supportive teachers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary School Section */}
      <div id="school" className="mb-24 relative scroll-mt-[40px] lg:scroll-mt-[36px] xl:scroll-mt-[40px]" ref={primaryRef}>
        <div>
          <div className="grid md:grid-cols-2 gap-12 items-start mb-8">
            <div className={`transition-all duration-700 ${primaryInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
              <h3 className="text-2xl font-medium text-blue-500 mb-6">Primary School (Grades 2-4)</h3>
              <p className="text-gray-700">
                The primary years focus on mastering fundamental skills while nurturing a love of learning. Our program
                emphasizes core academic subjects complemented by opportunities for creative and physical development.
              </p>
            </div>
            <div className={`transition-all duration-700 ${primaryInView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="text-lg font-medium text-gray-800 mb-4">Fee Structure</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex justify-between">
                    <span>Tuition Fee:</span>
                    <span>₹9,000 (₹750 × 12)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Term Fee:</span>
                    <span>₹1,500 (₹375 × 4)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Other Fee:</span>
                    <span>₹5,000 (₹2,500 × 2)</span>
                  </li>
                  <li className="flex justify-between font-medium border-t border-gray-200 pt-2 mt-2">
                    <span>Total Annual Fee:</span>
                    <span>₹15,500</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-700 ${primaryInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Curriculum Focus</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-800">Language Arts</h5>
                  <p className="text-gray-700 text-sm">Developing reading comprehension and writing skills.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Mathematics</h5>
                  <p className="text-gray-700 text-sm">Building number fluency and problem-solving skills.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Environmental Studies</h5>
                  <p className="text-gray-700 text-sm">Exploring scientific concepts through inquiry.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Art, Music & Physical Education</h5>
                  <p className="text-gray-700 text-sm">Regular specialized classes for creative development.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`transition-all duration-700 ${primaryInView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <div className="relative bg-blue-50 p-8 rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl font-medium text-blue-500 mb-4">Building Foundations</h3>
                <p className="text-gray-700 mb-4">
                  Primary school students develop core academic skills while nurturing curiosity and confidence in a
                  supportive environment.
                </p>
                <div className="mt-4 inline-block bg-white px-4 py-2 rounded-full text-blue-600 font-medium">
                  Ages 7-9 years
                </div>
              </div>
              <div className="mt-6 border-t border-blue-100 pt-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Core literacy and numeracy focus</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Project-based learning approaches</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Character development activities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Balanced academic and creative curriculum</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle School Section */}
      <div className="mb-24 relative" ref={middleRef}>
        <div>
          <div className="grid md:grid-cols-2 gap-12 items-start mb-8">
            <div className={`transition-all duration-700 ${middleInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
              <h3 className="text-2xl font-medium text-blue-500 mb-6">Middle School (Grades 5-7)</h3>
              <p className="text-gray-700">
                Our middle school program represents a transition period where students develop greater independence in
                their learning while receiving the structured guidance they need during this crucial developmental
                stage.
              </p>
            </div>
            <div className={`transition-all duration-700 ${middleInView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="text-lg font-medium text-gray-800 mb-4">Fee Structure</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex justify-between">
                    <span>Tuition Fee:</span>
                    <span>₹9,600 (₹800 × 12)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Term Fee:</span>
                    <span>₹1,600 (₹400 × 4)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Other Fee:</span>
                    <span>₹6,000 (₹3,000 × 2)</span>
                  </li>
                  <li className="flex justify-between font-medium border-t border-gray-200 pt-2 mt-2">
                    <span>Total Annual Fee:</span>
                    <span>₹17,200</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-700 ${middleInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Curriculum Structure</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-800">Language and Literature</h5>
                  <p className="text-gray-700 text-sm">Advanced reading, writing, and analysis skills.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Mathematics</h5>
                  <p className="text-gray-700 text-sm">Algebraic thinking, geometry, and data analysis.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Science</h5>
                  <p className="text-gray-700 text-sm">Physical, biological, and earth sciences with lab work.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Social Studies</h5>
                  <p className="text-gray-700 text-sm">History, geography, civics, and current events.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`transition-all duration-700 ${middleInView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <div className="relative bg-blue-50 p-8 rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl font-medium text-blue-500 mb-4">Expanding Horizons</h3>
                <p className="text-gray-700 mb-4">
                  Middle school students explore more specialized subjects while developing critical thinking and
                  independent learning skills.
                </p>
                <div className="mt-4 inline-block bg-white px-4 py-2 rounded-full text-blue-600 font-medium">
                  Ages 10-12 years
                </div>
              </div>
              <div className="mt-6 border-t border-blue-100 pt-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Specialized subject exploration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Critical thinking development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Research and presentation skills</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Guided independent learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High School Section */}
      <div className="relative" ref={highRef}>
        <div>
          <div className="grid md:grid-cols-2 gap-12 items-start mb-8">
            <div className={`transition-all duration-700 ${highInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
              <h3 className="text-2xl font-medium text-blue-500 mb-6">High School (Grades 8-10)</h3>
              <p className="text-gray-700">
                Our high school program offers comprehensive preparation for board examinations while developing the
                critical thinking, time management, and study skills essential for future academic success.
              </p>
            </div>
            <div className={`transition-all duration-700 ${highInView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="text-lg font-medium text-gray-800 mb-4">Fee Structure</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex justify-between">
                    <span>Tuition Fee:</span>
                    <span>₹12,000 (₹1,000 × 12)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Term Fee:</span>
                    <span>₹2,000 (₹500 × 4)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Other Fee:</span>
                    <span>₹6,000 (₹3,000 × 2)</span>
                  </li>
                  <li className="flex justify-between font-medium border-t border-gray-200 pt-2 mt-2">
                    <span>Total Annual Fee:</span>
                    <span>₹20,000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-700 ${highInView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Academic Excellence</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-800">Science Stream</h5>
                  <p className="text-gray-700 text-sm">Physics, chemistry, and biology with lab work.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Mathematics</h5>
                  <p className="text-gray-700 text-sm">Advanced concepts and problem-solving techniques.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Languages</h5>
                  <p className="text-gray-700 text-sm">English and regional languages with literature.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Social Sciences</h5>
                  <p className="text-gray-700 text-sm">History, geography, economics, and political science.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Information Technology</h5>
                  <p className="text-gray-700 text-sm">Computer applications, basic programming, and digital literacy for the modern world.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`transition-all duration-700 ${highInView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <div className="relative bg-blue-50 p-8 rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl font-medium text-blue-500 mb-4">Preparing for Excellence</h3>
                <p className="text-gray-700 mb-4">
                  High school students engage in rigorous academic preparation while developing the skills and knowledge
                  needed for future success.
                </p>
                <div className="mt-4 inline-block bg-white px-4 py-2 rounded-full text-blue-600 font-medium">
                  Ages 13-15 years
                </div>
              </div>
              <div className="mt-6 border-t border-blue-100 pt-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Board examination preparation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Advanced academic concepts</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Career guidance and counseling</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Leadership and community service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
