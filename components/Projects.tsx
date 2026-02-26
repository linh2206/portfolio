'use client'

import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    title: 'SCTV System Manager & Dashboard',
    description: 'Server management, streaming control, log management, incident handling. Unified dashboard for video, short-form, and live streaming content.',
    tech: ['NestJS', 'Next.js', 'Go', 'Laravel', 'Redis', 'Grafana'],
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'Vang Tat Mine Management',
    description: 'Employee & warehouse management system. Shift assignments, leave management, stock movement, request handling, and reporting.',
    tech: ['Next.js', 'NestJS', 'MongoDB', 'Go', 'Redis', 'Tailwind'],
    gradient: 'from-purple-500/20 to-violet-500/20',
  },
  {
    title: 'Media Hub Platform (MHP)',
    description: 'Contract management, video approval workflow, and broadcast scheduling for enterprise media management.',
    tech: ['NestJS', 'Next.js', 'PostgreSQL', 'Docker', 'Jenkins'],
    gradient: 'from-violet-500/20 to-fuchsia-500/20',
  },
  {
    title: 'IoT Smart Battery',
    description: 'Real-time GPS data processing and integrated UI for smart battery monitoring.',
    tech: ['Node.js', 'NestJS', 'React', 'Python'],
    gradient: 'from-fuchsia-500/20 to-pink-500/20',
  },
  {
    title: 'Xuyen A Hospital',
    description: 'Healthcare project with REST APIs (Laravel) and ReactJS frontend for hospital management.',
    tech: ['Laravel', 'ReactJS', 'MySQL'],
    gradient: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    title: 'Online School Platform',
    description: 'Video calling with Flutter and revenue reporting apps with React Native.',
    tech: ['Flutter', 'React Native', 'Node.js'],
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
]

export default function Projects() {
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
    <section id="projects" className="py-28 px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <span className="text-indigo-400 font-mono text-lg">03.</span>
          Projects
          <span className="hidden sm:block h-px flex-1 bg-slate-800 ml-4" />
        </h2>
        <p className="text-slate-400 mb-16 max-w-2xl">
          A selection of projects across healthcare, education, e-commerce, media, and IoT.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass rounded-xl overflow-hidden hover:border-indigo-500/40 transition-all duration-500 group hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-6">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-indigo-400 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
