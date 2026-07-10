"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ContactHero() {
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
    desktop: "/banner/contact-us/desktop/School-Banner-(Contact-us).jpg",
    tablet: "/banner/contact-us/tablet/School Banner (Contact us) Tablet.jpg",
    mobile: "/banner/contact-us/mobile/School Banner (Contact us) Phone.jpg",
  }
  const aspect = {
    desktop: { width: 1440, height: 648, className: "aspect-[20/9]" },
    tablet: { width: 768, height: 500, className: "aspect-[192/125]" },
    mobile: { width: 700, height: 450, className: "aspect-[14/9]" },
  } as const
  const currentAspect = aspect[device as keyof typeof aspect]

  return (
    <section className="w-full">
      <Link href="/admissions#admissions-enquiry-form" className="block w-full">
        <div className={`relative w-full overflow-hidden ${currentAspect.className}`}>
          <Image
            src={bannerSrc[device as keyof typeof bannerSrc]}
            alt="Shankarrao Chavan Vidyalaya & Junior College - Contact Us Banner"
            fill
            style={{ objectFit: "contain" }}
            sizes="100vw"
            priority
          />
        </div>
      </Link>
    </section>
  )
}
