'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const experiences = [
  { company: 'SCTV', period: 'May 2025 – Present', role: 'Full-stack Developer', color: 'from-cyan-400 to-blue-500', dot: '#38bdf8',
    items: ['System Manager: Server management, streaming control, log management, incident handling, video recording', 'Dashboard: Unified dashboard for managing and monitoring video, short-form, and live streaming content'],
    tech: ['Bash', 'Go', 'PHP', 'Python', 'NestJS', 'Next.js', 'Redis', 'MySQL', 'Laravel', 'Grafana'] },
  { company: 'Hvision', period: 'Feb 2024 – May 2025', role: 'Full-stack Developer', color: 'from-violet-400 to-purple-500', dot: '#a78bfa',
    items: ['Vang Tat Mine: Employee & warehouse management system', 'Employee records, shift assignments, leave management', 'Warehouse inventory tracking with stock movement and reporting'],
    tech: ['Next.js', 'NestJS', 'MySQL', 'MongoDB', 'Go', 'Redis', 'Tailwind', 'GitHub Actions'] },
  { company: 'WOSS Corporation', period: 'Mar 2022 – Feb 2024', role: 'Full-stack Developer', color: 'from-pink-400 to-rose-500', dot: '#f472b6',
    items: ['MHP: Contract management, video approval, broadcast scheduling', 'IoT Smart Battery: Real-time GPS data processing', 'Education Platform: Interactive learning tools and dashboards'],
    tech: ['Node.js', 'NestJS', 'React', 'Next.js', 'Python', 'Docker', 'Jenkins', 'PostgreSQL'] },
  { company: 'ROBUSTA', period: 'Jan 2021 – Jan 2022', role: 'Developer', color: 'from-orange-400 to-amber-500', dot: '#fb923c',
    items: ['Xuyen A Hospital: REST APIs (Laravel) + React frontend', 'Online School: Flutter video calling, React Native revenue app'],
    tech: ['Laravel', 'React', 'Flutter', 'React Native'] },
  { company: 'ECOMEASY', period: 'May 2020 – Dec 2020', role: 'Developer', color: 'from-emerald-400 to-teal-500', dot: '#34d399',
    items: ['Built e-commerce APIs with NodeJS and MongoDB', 'Deployed AWS services for storage and hosting'],
    tech: ['Node.js', 'MongoDB', 'AWS'] },
  { company: 'HUTECH University', period: 'Jul 2019 – Jan 2020', role: 'Intern', color: 'from-yellow-400 to-orange-500', dot: '#facc15',
    items: ['Feedback collection website (NodeJS, EJS, PostgreSQL)', 'Responsive mobile-first layout, Angular & ReactJS'],
    tech: ['Node.js', 'PostgreSQL', 'Bootstrap', 'Angular', 'ReactJS'] },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="section-title">
            <span className="gradient-text">Experience</span>
            <span className="section-line" />
          </h2>
        </AnimatedSection>

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px]" style={{ background: 'linear-gradient(to bottom, #38bdf8, #a78bfa, #f472b6, #fb923c, #34d399, #facc15, transparent)' }} />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative pl-12 md:pl-20"
              >
                <motion.div
                  className="absolute left-[10px] md:left-[26px] top-6 w-3 h-3 rounded-full"
                  style={{ background: exp.dot, boxShadow: `0 0 12px ${exp.dot}60` }}
                  whileInView={{ scale: [0, 1.15, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                />

                <motion.div
                  className="glass rounded-2xl overflow-hidden card-glow rainbow-border transition-all duration-500"
                  whileHover={{ x: 4, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } }}
                >
                  <div className={`h-1 bg-gradient-to-r ${exp.color}`} />
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className={`text-xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>{exp.company}</h3>
                        <p className="text-slate-400 text-sm font-medium mt-0.5">{exp.role}</p>
                      </div>
                      <span className="text-slate-600 font-mono text-sm shrink-0">{exp.period}</span>
                    </div>
                    <ul className="space-y-2 mb-5">
                      {exp.items.map((item) => (
                        <li key={item} className="text-slate-400 text-sm leading-relaxed flex gap-2.5">
                          <span className="text-violet-400 flex-shrink-0 mt-0.5">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
