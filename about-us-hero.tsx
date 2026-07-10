"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

function getDeviceSize() {
  if (typeof window === "undefined") return "desktop"
  const width = window.innerWidth
  if (width < 768) return "mobile"
  if (width < 1024) return "tablet"
  return "desktop"
}

const bannerSrc = {
  desktop: "/banner/about-us/desktop/School Banner (About Us) Desktop.png",
  tablet: "/banner/about-us/tablet/School Banner (About Us) Tablet.png",
  mobile: "/banner/about-us/mobile/School Banner (About Us) Mobile.png",
}

const aspect = {
  desktop: { width: 1440, height: 648, className: "aspect-[20/9]" },
  tablet: { width: 768, height: 500, className: "aspect-[192/125]" },
  mobile: { width: 700, height: 450, className: "aspect-[14/9]" },
} as const

export default function AboutUsHero() {
  const [device, setDevice] = useState("desktop")

  useEffect(() => {
    function handleResize() {
      setDevice(getDeviceSize())
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const currentAspect = aspect[device as keyof typeof aspect]

  return (
    <Link href="/admissions#admissions-enquiry-form" className="block w-full">
      <div className={`w-full ${currentAspect.className} relative`}>
        <Image
          src={bannerSrc[device as keyof typeof bannerSrc]}
          alt="About Us Banner"
          fill
          style={{ objectFit: "contain" }}
          sizes="100vw"
          priority
        />
      </div>
    </Link>
  )
}
