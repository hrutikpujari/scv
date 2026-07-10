"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function PillarsHero() {
  const [device, setDevice] = useState("desktop")

  function getDeviceSize() {
    if (typeof window === "undefined") return "desktop"
    const width = window.innerWidth
    if (width < 768) return "mobile"
    if (width < 1024) return "tablet"
    return "desktop"
  }

  useEffect(() => {
    function handleResize() {
      setDevice(getDeviceSize())
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const bannerSrc = {
    desktop: "/banner/foundation/desktop/School Banner (Our Foundation) Desktop.png",
    tablet: "/banner/foundation/tablet/School Banner (Our Foundation) Tablet.png",
    mobile: "/banner/foundation/mobile/School Banner (Our Foundation) Mobile.png",
  }
  const aspect = {
    desktop: { width: 1440, height: 648, className: "aspect-[20/9]" },
    tablet: { width: 768, height: 500, className: "aspect-[192/125]" },
    mobile: { width: 700, height: 450, className: "aspect-[14/9]" },
  } as const
  const currentAspect = aspect[device as keyof typeof aspect]

  return (
    <section className="relative w-full bg-blue-400">
      <Link href="/admissions#admissions-enquiry-form" className="block w-full">
        <div className={`w-full ${currentAspect.className} relative`}>
          <Image
            src={bannerSrc[device as keyof typeof bannerSrc]}
            alt="Foundation Banner"
            fill
            style={{ objectFit: "contain" }}
            sizes="100vw"
            priority
          />
        </div>
      </Link>
      {/* Hero Content */}
      {/* <div className="relative w-full py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                The Three Pillars of Complete Development
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Education, Sports, and Culture - Building Well-Rounded Individuals
              </p>
              <div className="w-24 h-1 bg-white"></div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}
