"use client"

import { useState, useEffect, useRef } from "react"
import Shape8 from "./components/shapes/shape_8"
import Image from "next/image"

const total = 3
const testimonials = [
  {
    name: "Yogeshwar Mane",
    photo: "/testimonial-photos/yogeshwar-mane.png",
    time: "A year ago",
    text: "Amazing Institute! The teachers are Professional, caring, and well-organized. The admissions process was simple. The non-teaching staff is very sincere and helpful. They really care and truly want the best for your child.",
  },
  {
    name: "Ankita Singh",
    photo: "/testimonial-photos/ankita-singh.png",
    time: "A year ago",
    text: "SCV School & Jr. College is one of the best in Kamothe. All the teachers are very kind to all students and there are many good facilities provided there. The SCV Principal seems very responsible in all her duties.",
  },
  {
    name: "Shobhraj Yadav",
    photo: "/testimonial-photos/shobhraj-yadav.png",
    time: "A year ago",
    text: "I highly recommend this school. The teachers are fantastic. The class instruction is organized, and the instruction plan is effective for children.",
  },
]
const extended = [testimonials[total - 1], ...testimonials, testimonials[0]]

export default function TestimonialsSection() {
  const [rotate, setRotate] = useState(false)
  const [current, setCurrent] = useState(1)
  const [noTransition, setNoTransition] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)

  const prevSlide = () => setCurrent((p) => p - 1)
  const nextSlide = () => setCurrent((p) => p + 1)

  const handleTransitionEnd = () => {
    if (current <= 0) {
      setNoTransition(true)
      setCurrent(total)
    } else if (current >= total + 1) {
      setNoTransition(true)
      setCurrent(1)
    }
  }

  useEffect(() => {
    if (noTransition) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setNoTransition(false))
      )
      return () => cancelAnimationFrame(id)
    }
  }, [noTransition])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }
  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current
    if (Math.abs(delta) > 50) {
      if (delta > 0) nextSlide()
      else prevSlide()
    }
  }

  useEffect(() => {
    let lastRatio = 0;
    const observer = new window.IntersectionObserver(
      (entries) => {
        const ratio = entries[0].intersectionRatio;
        if (!rotate && ratio > 0.4) setRotate(true);
        else if (rotate && ratio < 0.1) setRotate(false);
        lastRatio = ratio;
      },
      { threshold: [0, 0.1, 0.2, 0.4, 1] }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [rotate]);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 md:px-6 py-16 max-w-7xl relative">
      <div className="absolute -bottom-9 md:top-14 right-0 -mt-0 md:-mt-0 -mr-6 md:mr-0 md:scale-100 scale-50">
        <div className={`inline-block transition-transform duration-700 origin-center ${rotate ? 'rotate-0' : 'rotate-[180deg]'}`}>
          <Shape8 />
        </div>
      </div>
      <div className="relative flex items-start mb-12">
        <div className="flex-1 min-w-0">
          <div className="mb-8">
            <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">TESTIMONIALS</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-4">What Our Community Says</h2>
        </div>
        <div className="absolute left-0 right-0 top-[44px] h-px bg-neutral-200 z-0" />
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden relative">
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`flex ${noTransition ? '' : 'transition-transform duration-500 ease-in-out'}`}
            style={{ transform: `translateX(-${current * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((t, i) => (
              <div key={i} className="min-w-full flex flex-col">
                <div className="bg-gray-100 px-8 py-8 rounded-lg h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full mr-4 relative overflow-hidden">
                      <Image src={t.photo} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium">{t.name}</h3>
                      <p className="text-sm text-gray-500">{t.time}</p>
                    </div>
                    <div className="ml-auto"><GoogleLogo /></div>
                  </div>
                  <p className="text-gray-700">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Prev/Next buttons */}
        <button onClick={prevSlide} aria-label="Previous" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white rounded-full p-2 shadow z-10 flex items-center justify-center">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button onClick={nextSlide} aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white rounded-full p-2 shadow z-10 flex items-center justify-center">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
        </button>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i + 1)} className={`w-2.5 h-2.5 rounded-full border border-gray-400 transition-all ${(current - 1 + total) % total === i ? 'bg-gray-700' : 'bg-gray-300'}`} />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 relative z-10">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-100 p-8 rounded-lg transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full mr-4 relative overflow-hidden">
                <Image src={t.photo} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-medium">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.time}</p>
              </div>
              <div className="ml-auto"><GoogleLogo /></div>
            </div>
            <p className="text-gray-700">{t.text}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

function GoogleLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}
