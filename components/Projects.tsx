'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const projects = [
  { title: 'SCTV System Manager & Dashboard', description: 'Server management, streaming control, log management. Unified dashboard for video, short-form, and live streaming.', tech: ['NestJS', 'Next.js', 'Go', 'Laravel', 'Redis', 'Grafana'], color: 'from-cyan-400 to-blue-500', hover: 'hover:border-cyan-500/30 hover:shadow-cyan-500/10' },
  { title: 'Vang Tat Mine Management', description: 'Employee & warehouse management system. Shift assignments, leave management, stock movement, reporting.', tech: ['Next.js', 'NestJS', 'MongoDB', 'Go', 'Redis'], color: 'from-violet-400 to-purple-500', hover: 'hover:border-violet-500/30 hover:shadow-violet-500/10' },
  { title: 'Media Hub Platform', description: 'Contract management, video approval workflow, broadcast scheduling for enterprise media.', tech: ['NestJS', 'Next.js', 'PostgreSQL', 'Docker'], color: 'from-pink-400 to-rose-500', hover: 'hover:border-pink-500/30 hover:shadow-pink-500/10' },
  { title: 'IoT Smart Battery', description: 'Real-time GPS data processing and integrated UI for smart battery monitoring.', tech: ['Node.js', 'NestJS', 'React', 'Python'], color: 'from-amber-400 to-orange-500', hover: 'hover:border-amber-500/30 hover:shadow-amber-500/10' },
  { title: 'Xuyen A Hospital', description: 'Healthcare REST APIs (Laravel) and ReactJS frontend for hospital management.', tech: ['Laravel', 'ReactJS', 'MySQL'], color: 'from-emerald-400 to-teal-500', hover: 'hover:border-emerald-500/30 hover:shadow-emerald-500/10' },
  { title: 'Online School Platform', description: 'Video calling with Flutter and revenue reporting apps with React Native.', tech: ['Flutter', 'React Native', 'Node.js'], color: 'from-rose-400 to-pink-500', hover: 'hover:border-rose-500/30 hover:shadow-rose-500/10' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="section-title">
            <span className="gradient-text">Projects</span>
            <span className="section-line" />
          </h2>
          <p className="section-subtitle">Projects across healthcare, education, e-commerce, media, and IoT.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } }}
              className={`glass rounded-2xl overflow-hidden cursor-default card-glow rainbow-border transition-all duration-500 hover:shadow-xl ${p.hover}`}
            >
              <div className={`h-1.5 bg-gradient-to-r ${p.color}`} />
              <div className="p-6">
                <div className="mb-4 opacity-50">
                  <svg className="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <h3 className={`text-base font-semibold mb-2 bg-gradient-to-r ${p.color} bg-clip-text text-transparent`}>{p.title}</h3>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => <span key={t} className="tech-tag text-[11px]">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
