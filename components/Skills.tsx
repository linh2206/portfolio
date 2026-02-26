'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const skillCategories = [
  { title: 'Languages', icon: '⚡', items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Go'], color: 'from-indigo-500/20 to-blue-500/20' },
  { title: 'Frontend', icon: '🎨', items: ['ReactJS', 'NextJS', 'Redux', 'Tailwind', 'Bootstrap', 'Ant Design', 'MUI'], color: 'from-purple-500/20 to-indigo-500/20' },
  { title: 'Backend', icon: '⚙️', items: ['NodeJS', 'NestJS', 'Laravel', 'Express'], color: 'from-pink-500/20 to-purple-500/20' },
  { title: 'Mobile', icon: '📱', items: ['Flutter', 'React Native'], color: 'from-cyan-500/20 to-blue-500/20' },
  { title: 'Database', icon: '🗄️', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'], color: 'from-emerald-500/20 to-cyan-500/20' },
  { title: 'DevOps', icon: '🚀', items: ['Docker', 'Jenkins', 'Bash', 'GitHub Actions', 'Grafana', 'AWS'], color: 'from-orange-500/20 to-pink-500/20' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="section-title">
            <span className="text-indigo-400 font-mono text-lg">04.</span>
            Skills
            <span className="section-line" />
          </h2>
          <p className="text-slate-500 mb-16 max-w-2xl">
            Technologies I work with to build modern, scalable applications.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="glass rounded-2xl overflow-hidden hover:border-indigo-500/20 transition-all duration-500 group hover:glow-sm"
            >
              <div className={`h-1 bg-gradient-to-r ${category.color}`} />
              <div className="p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2.5">
                  <span className="text-lg">{category.icon}</span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span key={skill} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
