'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const highlights = [
  { label: '4+', desc: 'Years', color: 'from-cyan-400 to-blue-500' },
  { label: '6+', desc: 'Companies', color: 'from-violet-400 to-purple-500' },
  { label: '5+', desc: 'Industries', color: 'from-pink-400 to-rose-500' },
  { label: '10+', desc: 'Technologies', color: 'from-amber-400 to-orange-500' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="section-title">
            <span className="gradient-text-cool">About Me</span>
            <span className="section-line" />
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-12 mt-12">
          <AnimatedSection className="md:col-span-3 space-y-5" delay={0.1}>
            <p className="text-slate-200 leading-relaxed text-lg">
              Full-stack Developer with <span className="gradient-text-warm font-semibold">4+ years of experience</span> across 
              healthcare, education, e-commerce, media, and IoT.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Proficient in <span className="text-cyan-300">Node.js</span>, <span className="text-violet-300">Go</span>, <span className="text-pink-300">Laravel</span>, <span className="text-blue-300">React.js</span>, <span className="text-purple-300">NestJS</span>, <span className="text-orange-300">Next.js</span>. 
              Passionate about building scalable systems and learning new technologies.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me on the soccer field ⚽ or enjoying music 🎵
            </p>
          </AnimatedSection>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.desc}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="glass rounded-2xl p-5 text-center card-glow rainbow-border cursor-default"
                >
                  <p className={`text-3xl font-bold bg-gradient-to-r ${h.color} bg-clip-text text-transparent mb-1`}>{h.label}</p>
                  <p className="text-slate-500 text-sm">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
