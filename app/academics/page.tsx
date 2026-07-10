import Navbar from "../../navbar"
import Footer from "../../footer"
import AcademicsHeroV2 from "../../academics-hero-v2"
import AcademicApproachV2 from "../../academic-approach-v2"
import AcademicLevelsV2 from "../../academic-levels-v2"
import JuniorCollegeSectionV2 from "../../junior-college-section-v2"
import CompetitiveAdvantageV2 from "../../competitive-advantage-v2"
import AcademicCalendarV2 from "../../academic-calendar-v2"
import AdmissionsInfoV2 from "../../admissions-info-v2"

export default function AcademicsV2Page() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <AcademicsHeroV2 />

      <div className="py-16 bg-white">
        <AcademicApproachV2 />
      </div>

      <div className="py-16 bg-white">
        <AcademicLevelsV2 />
      </div>

      <div className="py-16 bg-white">
        <JuniorCollegeSectionV2 />
      </div>

      <div className="py-16 bg-white">
        <CompetitiveAdvantageV2 />
      </div>

      <div className="py-16 bg-white">
        <AcademicCalendarV2 />
      </div>

      <div className="py-16 bg-white">
        <AdmissionsInfoV2 />
      </div>

      <Footer />
    </main>
  )
}
