import Navbar from "../../navbar"
import Footer from "../../footer"
import PhotoGallerySection from "../../photo-gallery-section"
import PillarsHero from "../../pillars-hero"
import PillarsApproach from "../../pillars-approach"
import EducationalPillar from "../../educational-pillar"
import SportsPillar from "../../sports-pillar"
import CulturalPillar from "../../cultural-pillar"
import PillarsIntegration from "../../pillars-integration"
import PillarsCta from "../../pillars-cta"

export default function PillarsPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <PillarsHero />

      <div className="py-16 bg-white">
        <PillarsApproach />
      </div>

      <div id="academic" className="py-16 bg-gray-50">
        <EducationalPillar />
      </div>

      <div id="sports" className="py-16 bg-white">
        <SportsPillar />
      </div>

      <div id="creative" className="py-16 bg-gray-50">
        <CulturalPillar />
      </div>

      <div className="py-16 bg-white">
        <PillarsIntegration />
      </div>

      <div className="py-16 bg-gray-50">
        <PillarsCta />
      </div>

      <PhotoGallerySection />
      <Footer />
    </main>
  )
}
