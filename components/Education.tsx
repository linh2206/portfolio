'use client'

import AnimatedSection from './AnimatedSection'

export default function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="section-title">
            <span className="text-indigo-400 font-mono text-lg">05.</span>
            Education & Certifications
            <span className="section-line" />
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-2xl p-7 hover:border-indigo-500/20 transition-all duration-500 h-full hover:glow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <span className="text-xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Bachelor of Information Technology</h3>
                  <p className="text-indigo-400 text-sm font-medium mb-1">HUTECH University</p>
                  <p className="text-slate-600 text-sm font-mono mb-3">Aug 2017 – Sep 2020</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                    <span className="text-slate-500 text-xs">GPA</span>
                    <span className="text-indigo-300 font-semibold text-sm">3.2 / 4.0</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass rounded-2xl p-7 hover:border-purple-500/20 transition-all duration-500 h-full hover:glow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <span className="text-xl">📜</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Certifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-slate-300 text-sm">Communication Certificate</span>
                      <span className="text-slate-600 text-sm font-mono">2019</span>
                    </div>
                    <div className="h-px bg-slate-800" />
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-slate-300 text-sm">English B1</span>
                      <span className="text-slate-600 text-sm font-mono">2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
