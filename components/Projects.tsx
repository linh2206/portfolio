'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const projects = [
  {
    title: 'SCTV System Manager & Dashboard',
    description: 'Server management, streaming control, log management. Unified dashboard for video, short-form, and live streaming content.',
    tech: ['NestJS', 'Next.js', 'Go', 'Laravel', 'Redis', 'Grafana'],
    accent: 'group-hover:border-indigo-500/40 group-hover:shadow-indigo-500/10',
  },
  {
    title: 'Vang Tat Mine Management',
    description: 'Employee & warehouse management system. Shift assignments, leave management, stock movement, and reporting.',
    tech: ['Next.js', 'NestJS', 'MongoDB', 'Go', 'Redis'],
    accent: 'group-hover:border-purple-500/40 group-hover:shadow-purple-500/10',
  },
  {
    title: 'Media Hub Platform (MHP)',
    description: 'Contract management, video approval workflow, broadcast scheduling for enterprise media.',
    tech: ['NestJS', 'Next.js', 'PostgreSQL', 'Docker'],
    accent: 'group-hover:border-pink-500/40 group-hover:shadow-pink-500/10',
  },
  {
    title: 'IoT Smart Battery',
    description: 'Real-time GPS data processing and integrated UI for smart battery monitoring.',
    tech: ['Node.js', 'NestJS', 'React', 'Python'],
    accent: 'group-hover:border-rose-500/40 group-hover:shadow-rose-500/10',
  },
  {
    title: 'Xuyen A Hospital',
    description: 'Healthcare REST APIs (Laravel) and ReactJS frontend for hospital management.',
    tech: ['Laravel', 'ReactJS', 'MySQL'],
    accent: 'group-hover:border-orange-500/40 group-hover:shadow-orange-500/10',
  },
  {
    title: 'Online School Platform',
    description: 'Video calling with Flutter and revenue reporting apps with React Native.',
    tech: ['Flutter', 'React Native', 'Node.js'],
    accent: 'group-hover:border-cyan-500/40 group-hover:shadow-cyan-500/10',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="section-title">
            Projects
            <span className="section-line" />
          </h2>
          <p className="text-slate-500 mb-16 max-w-2xl">
            A selection of projects across healthcare, education, e-commerce, media, and IoT.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`glass rounded-2xl p-6 group transition-all duration-500 cursor-default hover:shadow-xl ${project.accent}`}
            >
              <div className="mb-4 opacity-40 group-hover:opacity-80 transition-opacity">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag text-[11px]">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
