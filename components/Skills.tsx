'use client'

import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Go'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    items: ['ReactJS', 'NextJS', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Ant Design', 'MUI'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    items: ['NodeJS', 'NestJS', 'Laravel', 'Express'],
  },
  {
    title: 'Mobile',
    icon: '📱',
    items: ['Flutter', 'React Native'],
  },
  {
    title: 'Database',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'DevOps',
    icon: '🚀',
    items: ['Docker', 'Jenkins', 'Bash', 'GitHub Actions', 'VMware ESXi', 'Grafana', 'AWS'],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-28 px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
          <span className="text-indigo-400 font-mono text-lg">04.</span>
          Skills
          <span className="hidden sm:block h-px flex-1 bg-slate-800 ml-4" />
        </h2>
        <p className="text-slate-400 mb-16 max-w-2xl">
          Technologies I work with to build modern, scalable applications.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className="glass rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-0.5"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <h3 className="text-indigo-300 font-semibold mb-4 flex items-center gap-2.5">
                <span className="text-lg">{category.icon}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-indigo-500/40 hover:text-indigo-200 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
