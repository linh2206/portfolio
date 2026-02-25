const skillCategories = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Go'],
  },
  {
    title: 'Frontend',
    items: ['ReactJS', 'NextJS', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Ant Design', 'MUI'],
  },
  {
    title: 'Backend',
    items: ['NodeJS', 'NestJS', 'Laravel', 'Express'],
  },
  {
    title: 'Mobile',
    items: ['Flutter', 'React Native'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'Jenkins', 'Bash', 'GitHub Actions', 'VMware ESXi', 'Grafana', 'Multivisor', 'Git', 'Ubuntu', 'AWS'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <span className="text-cyan-400">04.</span>
          Skills
        </h2>
        <p className="text-slate-400 mb-16 max-w-2xl">
          Technologies I work with to build modern, scalable applications.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass rounded-lg p-6">
              <h3 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-cyan-500/50 transition-colors"
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
