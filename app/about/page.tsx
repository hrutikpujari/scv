import Navbar from "../../navbar"
import AboutUsHero from "../../about-us-hero"
import PhotoGallerySection from "../../photo-gallery-section"
import Footer from "../../footer"
import JourneyVisionMission from "../../journey-vision-mission"
import CoreValues from "../../core-values"
import Testimonials from "../../testimonials"
import OurApproach from "../../our-approach"
import CampusInfrastructure from "../../campus-infrastructure"
import Achievements from "../../achievements"
import CommunityInvolvement from "../../community-involvement"
import JoinUsCard from "../../join-us"

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <AboutUsHero />
      {/* <Hero /> */}
      <JourneyVisionMission />
      <CoreValues />
      <Testimonials />
      <OurApproach />
      <CampusInfrastructure />
      <Achievements />
      <CommunityInvolvement />
      <JoinUsCard />
      <PhotoGallerySection />
      <Footer />
    </main>
  )
}
