'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
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
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="text-indigo-400 font-mono text-lg">01.</span>
          About Me
          <span className="hidden sm:block h-px flex-1 bg-slate-800 ml-4" />
        </h2>
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-4">
            <p className="text-slate-300 leading-relaxed text-lg">
              Full-stack Developer with <strong className="text-indigo-300">4+ years of experience</strong> across 
              healthcare, education, e-commerce, media, and IoT.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Proficient in <span className="text-slate-300">Node.js, Go, Laravel, React.js, NestJS, Next.js</span>. 
              Passionate about building scalable systems and learning new technologies such as Flutter and React Native.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me on the soccer field or enjoying music.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="relative group">
              <div className="aspect-square max-w-[280px] mx-auto rounded-2xl overflow-hidden border-2 border-indigo-500/30 group-hover:border-indigo-500/60 transition-colors duration-500">
                <div className="w-full h-full bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-violet-600/20 flex items-center justify-center">
                  <span className="text-7xl font-bold gradient-text">LHL</span>
                </div>
              </div>
              <div className="absolute -inset-3 border border-indigo-500/10 rounded-2xl -z-10 group-hover:border-indigo-500/20 transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
