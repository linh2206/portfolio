export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <span className="text-cyan-400">05.</span>
          Education & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-2">
              Bachelor of Information Technology — HUTECH University
            </h3>
            <p className="text-slate-400 mb-2">Aug 2017 – Sep 2020</p>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">GPA:</span>
              <span className="text-green-400 font-semibold">3.2 / 4.0</span>
            </div>
          </div>

          <div className="glass rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-6">
              <span className="text-slate-400">
                <strong className="text-white">Communication Certificate</strong> — 2019
              </span>
              <span className="text-slate-400">
                <strong className="text-white">English B1</strong> — 2020
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
