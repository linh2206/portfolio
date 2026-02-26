'use client'

import { useEffect, useRef, useState } from 'react'

export default function Education() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="py-28 px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-indigo-400 font-mono text-lg">05.</span>
          Education & Certifications
          <span className="hidden sm:block h-px flex-1 bg-slate-800 ml-4" />
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-8 hover:border-indigo-500/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Bachelor of Information Technology
                </h3>
                <p className="text-indigo-400 text-sm mb-2">HUTECH University</p>
                <p className="text-slate-500 text-sm font-mono">Aug 2017 – Sep 2020</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-slate-500 text-sm">GPA:</span>
                  <span className="text-indigo-300 font-semibold">3.2 / 4.0</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-xl p-8 hover:border-indigo-500/30 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                <span className="text-2xl">📜</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Certifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 text-sm">Communication Certificate</span>
                    <span className="text-slate-500 text-sm font-mono">2019</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 text-sm">English B1</span>
                    <span className="text-slate-500 text-sm font-mono">2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
