export default function CulturalPillar() {
  return (
    <section className="container mx-auto px-4 md:px-6 max-w-7xl relative">
      <div className="mb-2">
        <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">PILLAR THREE</span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-12">Cultural Enrichment</h2>

      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <h3 className="text-2xl font-medium text-blue-500 mb-6">Creative Expression</h3>
          <p className="text-gray-700 mb-8">
            The cultural pillar of SCV nurtures artistic talents, builds confidence, and preserves cultural heritage
            while encouraging creative expression and appreciation for the arts.
          </p>

          <div className="bg-blue-100 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-medium text-gray-800 mb-4">Cultural Programs</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800">Performing Arts</h5>
                <p className="text-gray-700">
                  Regular classes in dance (classical and contemporary), music (vocal and instrumental), and drama
                  develop artistic skills and stage presence.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Visual Arts</h5>
                <p className="text-gray-700">
                  Drawing, painting, craft, and other visual art forms encourage creative thinking and aesthetic
                  appreciation.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Literary Arts</h5>
                <p className="text-gray-700">
                  Elocution, debate, creative writing, and public speaking activities enhance communication skills and
                  self-expression.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800">Heritage Celebration</h5>
                <p className="text-gray-700">
                  Traditional art forms and cultural celebrations help students connect with their cultural roots while
                  developing respect for diversity.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-blue-50 p-8 rounded-lg h-full">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-medium text-blue-500">Cultural Platforms</h3>
            </div>
            <p className="text-gray-700 mb-4 text-center">
              We provide multiple opportunities for students to showcase their artistic talents and cultural
              appreciation.
            </p>

            <div className="mt-6 border-t border-blue-100 pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Annual Cultural Festival</h4>
                  <p className="text-gray-700">
                    Our yearly celebration showcases student talents across various art forms, giving every child an
                    opportunity to perform on stage.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Inter-House Competitions</h4>
                  <p className="text-gray-700">
                    Regular contests in arts, music, dance, and literary events foster healthy competition and skill
                    development.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Community Performances</h4>
                  <p className="text-gray-700">
                    Selected students represent the school at community events, gaining confidence through public
                    performances.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Arts Exhibition</h4>
                  <p className="text-gray-700">
                    Annual display of student artwork and creative projects celebrates visual and design achievements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h4 className="text-xl font-medium text-gray-800 mb-4">Cultural Impact</h4>
        <p className="text-gray-700 mb-4">Our cultural programs have:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Helped students discover and develop their artistic talents</li>
          <li>Built confidence and presentation skills</li>
          <li>Provided wholesome recreational outlets</li>
          <li>Created appreciation for India's rich cultural heritage</li>
          <li>Fostered creativity and innovative thinking</li>
        </ul>
        <p className="text-gray-700 mt-4">
          All basic cultural programs are included within our standard fee structure, making artistic education
          accessible to every student regardless of their background.
        </p>
      </div>
    </section>
  )
}
