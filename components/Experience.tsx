'use client'

import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    company: 'SCTV',
    period: 'May 2025 – Present',
    role: 'Full-stack Developer',
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
    items: [
      'Vang Tat Mine: Designed employee & warehouse management system',
      'Implemented employee records, shift assignments, and leave management',
      'Built warehouse inventory tracking with stock movement, request handling, and reporting',
    ],
    tech: ['Next.js', 'NestJS', 'MySQL', 'MongoDB', 'Go', 'Redis', 'Tailwind', 'GitHub Actions'],
  },
  {
    company: 'WOSS Corporation',
    period: 'Mar 2022 – Feb 2024',
    role: 'Full-stack Developer',
    items: [
      'MHP: Contract management, video approval workflow, broadcast scheduling',
      'IoT Smart Battery: Real-time GPS data processing and UI',
      'Education Platform: Interactive learning tools and data dashboards',
    ],
    tech: ['Node.js', 'NestJS', 'React', 'Next.js', 'Python', 'Docker', 'Jenkins', 'PostgreSQL'],
  },
  {
    company: 'ROBUSTA',
    period: 'Jan 2021 – Jan 2022',
    role: 'Developer',
    items: [
      'Xuyen A Hospital: REST APIs (Laravel) + Frontend (ReactJS)',
      'Online School: Video calling (Flutter), revenue reporting (React Native)',
    ],
    tech: ['Laravel', 'React', 'Flutter', 'React Native'],
  },
  {
    company: 'ECOMEASY',
    period: 'May 2020 – Dec 2020',
    role: 'Developer',
    items: [
      'Built APIs for e-commerce platform with NodeJS and MongoDB',
      'Deployed AWS services for storage and hosting',
    ],
    tech: ['Node.js', 'MongoDB', 'AWS'],
  },
  {
    company: 'HUTECH University',
    period: 'Jul 2019 – Jan 2020',
    role: 'Intern',
    items: [
      'Developed feedback collection website (NodeJS, EJS, PostgreSQL)',
      'Designed responsive mobile-first layout with Bootstrap',
    ],
    tech: ['Node.js', 'PostgreSQL', 'Bootstrap', 'Angular', 'ReactJS'],
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-28 px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
          <span className="text-indigo-400 font-mono text-lg">02.</span>
          Experience
          <span className="hidden sm:block h-px flex-1 bg-slate-800 ml-4" />
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="relative pl-8 md:pl-20"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute left-[-4px] md:left-[28px] top-2 w-[9px] h-[9px] rounded-full bg-indigo-400 border-2 border-indigo-400/50 shadow-lg shadow-indigo-400/30" />

                <div className="glass rounded-xl p-6 md:p-8 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                      <p className="text-indigo-400 text-sm font-medium">{exp.role}</p>
                    </div>
                    <span className="text-slate-500 font-mono text-sm shrink-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.items.map((item) => (
                      <li key={item} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-indigo-400 flex-shrink-0 mt-1">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
