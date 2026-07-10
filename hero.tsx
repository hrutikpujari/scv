"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

function getDeviceSize() {
  if (typeof window === "undefined") return "desktop"
  const width = window.innerWidth
  if (width < 768) return "mobile"
  if (width < 1024) return "tablet"
  return "desktop"
}

const slides = [
  {
    type: "image",
    src: {
      desktop: "/banner/butterfly/Desktop/Desktop179.jpg",
      tablet: "/banner/butterfly/Tablet/Tablet179.jpg",
      mobile: "/banner/butterfly/Phone/Phone179.jpg",
    } as Record<string, string>,
    alt: "Butterfly Banner Image",
    duration: 10000,
  },
  ...[2, 3, 4, 5, 6].map((i) => ({
    type: "image",
    src: {
      desktop: `https://dotheunthinkable.net/scv/banner/home/desktop/School-Banner-(Slide-${i}).jpg`,
      tablet: `https://dotheunthinkable.net/scv/banner/home/tablet/School Banner (Slide ${i}).jpg`,
      mobile: `https://dotheunthinkable.net/scv/banner/home/mobile/School Banner (Slide ${i}).jpg`,
    } as Record<string, string>,
    alt: `School Banner Slide ${i}`,
    duration: 4000,
  })),
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [device, setDevice] = useState("desktop")

  useEffect(() => {
    function handleResize() {
      setDevice(getDeviceSize())
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, slides[current].duration)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current])

  const goToSlide = (idx: number) => {
    setCurrent(idx)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const currentSlide = slides[current]
  const imageSrc = typeof currentSlide.src === "string" ? currentSlide.src : currentSlide.src[device as keyof typeof currentSlide.src]
  const videoSrc = typeof currentSlide.src === "string" ? currentSlide.src : currentSlide.src[device as keyof typeof currentSlide.src]

  const aspectRatios = {
    desktop: { width: 1440, height: 648, className: "aspect-[20/9]" },
    tablet: { width: 768, height: 500, className: "aspect-[192/125]" },
    mobile: { width: 700, height: 450, className: "aspect-[14/9]" },
  } as const
  const currentAspect = aspectRatios[device as keyof typeof aspectRatios]

  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden">
        <Link href="/admissions#admissions-enquiry-form" className="block w-full">
          <div className="w-full relative">
            {currentSlide.type === "video" ? (
              <div className={`w-full ${currentAspect.className} relative`}>
                <video
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain rounded-lg shadow absolute top-0 left-0"
                  poster="https://dotheunthinkable.net/scv/banner/home/desktop/School-Banner-(Slide-2).jpg"
                  width={currentAspect.width}
                  height={currentAspect.height}
                >
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>
            ) : (
              <Image
                src={imageSrc}
                alt={currentSlide.alt}
                width={1680}
                height={700}
                priority
                className="w-full h-auto object-contain transition-all duration-700"
              />
            )}
          </div>
        </Link>
        {/* Controls */}
        <button
          aria-label="Previous Slide"
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow z-10"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button
          aria-label="Next Slide"
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow z-10"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx+1}`}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full border border-white ${current===idx ? 'bg-white' : 'bg-white/50'} transition-all`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
