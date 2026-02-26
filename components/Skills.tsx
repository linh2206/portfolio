'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const skillCategories = [
  { title: 'Languages', icon: '⚡', items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Go'], color: 'from-cyan-400 to-blue-500', border: 'hover:border-cyan-500/30' },
  { title: 'Frontend', icon: '🎨', items: ['ReactJS', 'NextJS', 'Redux', 'Tailwind', 'Bootstrap', 'Ant Design', 'MUI'], color: 'from-violet-400 to-purple-500', border: 'hover:border-violet-500/30' },
  { title: 'Backend', icon: '⚙️', items: ['NodeJS', 'NestJS', 'Laravel', 'Express'], color: 'from-pink-400 to-rose-500', border: 'hover:border-pink-500/30' },
  { title: 'Mobile', icon: '📱', items: ['Flutter', 'React Native'], color: 'from-emerald-400 to-teal-500', border: 'hover:border-emerald-500/30' },
  { title: 'Database', icon: '🗄️', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'], color: 'from-amber-400 to-orange-500', border: 'hover:border-amber-500/30' },
  { title: 'DevOps', icon: '🚀', items: ['Docker', 'Jenkins', 'Bash', 'GitHub Actions', 'Grafana', 'AWS'], color: 'from-rose-400 to-pink-500', border: 'hover:border-rose-500/30' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="section-title">
            <span className="gradient-text">Skills</span>
            <span className="section-line" />
          </h2>
          <p className="section-subtitle">Technologies I use to build modern, scalable applications.</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass rounded-2xl overflow-hidden card-glow rainbow-border transition-all duration-500 ${cat.border}`}
            >
              <div className={`h-1.5 bg-gradient-to-r ${cat.color}`} />
              <div className="p-6">
                <h3 className={`font-semibold mb-4 flex items-center gap-2.5 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                  <span className="text-lg">{cat.icon}</span>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => <span key={skill} className="tech-tag">{skill}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
