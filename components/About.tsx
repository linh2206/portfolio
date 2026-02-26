'use client'

import AnimatedSection from './AnimatedSection'

const highlights = [
  { label: '4+', desc: 'Years Experience' },
  { label: '6+', desc: 'Companies' },
  { label: '5+', desc: 'Industries' },
  { label: '10+', desc: 'Technologies' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="section-title">
            <span className="text-indigo-400 font-mono text-lg">01.</span>
            About Me
            <span className="section-line" />
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-12 mt-12">
          <AnimatedSection className="md:col-span-3 space-y-5" delay={0.1}>
            <p className="text-slate-300 leading-relaxed text-lg">
              Full-stack Developer with <span className="text-indigo-300 font-semibold">4+ years of experience</span> across 
              healthcare, education, e-commerce, media, and IoT.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Proficient in <span className="text-slate-300">Node.js, Go, Laravel, React.js, NestJS, Next.js</span>. 
              Passionate about building scalable systems and learning new technologies such as Flutter and React Native.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me on the soccer field ⚽ or enjoying music 🎵.
            </p>
          </AnimatedSection>

          <AnimatedSection className="md:col-span-2" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h.desc} className="glass rounded-xl p-5 text-center hover:border-indigo-500/30 transition-all duration-300 group hover:glow-sm">
                  <p className="text-3xl font-bold gradient-text mb-1">{h.label}</p>
                  <p className="text-slate-500 text-sm">{h.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
