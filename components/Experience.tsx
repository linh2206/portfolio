'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const experiences = [
  {
    company: 'SCTV',
    period: 'May 2025 – Present',
    role: 'Full-stack Developer',
    color: 'from-indigo-500 to-purple-500',
    items: [
      'System Manager: Server management, streaming control, log management, incident handling, video recording',
      'Dashboard: Unified dashboard for managing and monitoring video, short-form, and live streaming content',
    ],
    tech: ['Bash', 'Go', 'PHP', 'Python', 'NestJS', 'Next.js', 'Redis', 'MySQL', 'Laravel', 'Grafana'],
  },
  {
    company: 'Hvision',
    period: 'Feb 2024 – May 2025',
    role: 'Full-stack Developer',
    color: 'from-purple-500 to-pink-500',
    items: [
      'Vang Tat Mine: Employee & warehouse management system',
      'Employee records, shift assignments, leave management',
      'Warehouse inventory tracking with stock movement and reporting',
    ],
    tech: ['Next.js', 'NestJS', 'MySQL', 'MongoDB', 'Go', 'Redis', 'Tailwind', 'GitHub Actions'],
  },
  {
    company: 'WOSS Corporation',
    period: 'Mar 2022 – Feb 2024',
    role: 'Full-stack Developer',
    color: 'from-pink-500 to-rose-500',
    items: [
      'MHP: Contract management, video approval, broadcast scheduling',
      'IoT Smart Battery: Real-time GPS data processing',
      'Education Platform: Interactive learning tools and dashboards',
    ],
    tech: ['Node.js', 'NestJS', 'React', 'Next.js', 'Python', 'Docker', 'Jenkins', 'PostgreSQL'],
  },
  {
    company: 'ROBUSTA',
    period: 'Jan 2021 – Jan 2022',
    role: 'Developer',
    color: 'from-rose-500 to-orange-500',
    items: [
      'Xuyen A Hospital: REST APIs (Laravel) + React frontend',
      'Online School: Flutter video calling, React Native revenue app',
    ],
    tech: ['Laravel', 'React', 'Flutter', 'React Native'],
  },
  {
    company: 'ECOMEASY',
    period: 'May 2020 – Dec 2020',
    role: 'Developer',
    color: 'from-orange-500 to-amber-500',
    items: [
      'Built e-commerce APIs with NodeJS and MongoDB',
      'Deployed AWS services for storage and hosting',
    ],
    tech: ['Node.js', 'MongoDB', 'AWS'],
  },
  {
    company: 'HUTECH University',
    period: 'Jul 2019 – Jan 2020',
    role: 'Intern',
    color: 'from-amber-500 to-yellow-500',
    items: [
      'Feedback collection website (NodeJS, EJS, PostgreSQL)',
      'Responsive mobile-first layout, Angular & ReactJS',
    ],
    tech: ['Node.js', 'PostgreSQL', 'Bootstrap', 'Angular', 'ReactJS'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="section-title">
            Experience
            <span className="section-line" />
          </h2>
        </AnimatedSection>

        <div className="mt-16 space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="glass rounded-2xl overflow-hidden hover:border-indigo-500/20 transition-all duration-500 group hover:glow-sm">
                <div className={`h-1 bg-gradient-to-r ${exp.color}`} />
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">{exp.company}</h3>
                      <p className="text-indigo-400 text-sm font-medium mt-0.5">{exp.role}</p>
                    </div>
                    <span className="text-slate-600 font-mono text-sm shrink-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {exp.items.map((item) => (
                      <li key={item} className="text-slate-400 text-sm leading-relaxed flex gap-2.5">
                        <span className="text-indigo-500 flex-shrink-0 mt-0.5">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
