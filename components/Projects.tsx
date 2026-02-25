const projects = [
  {
    title: 'SCTV System Manager & Dashboard',
    description: 'Server management, streaming control, log management, incident handling, video recording. Unified dashboard for managing and monitoring video, short-form, and live streaming content.',
    tech: ['NestJS', 'Next.js', 'Go', 'Laravel', 'Redis', 'MySQL', 'Grafana', 'Multivisor'],
  },
  {
    title: 'Vang Tat Mine Management System',
    description: 'Internal system for employee info, warehouse inventory, shift assignments, leave management. Stock movement, request handling, and reporting.',
    tech: ['Next.js', 'NestJS', 'MySQL', 'MongoDB', 'Go', 'Redis', 'Tailwind CSS', 'GitHub Actions'],
  },
  {
    title: 'Media Hub Platform (MHP)',
    description: 'Contract management system, video approval workflow, and broadcast scheduling for enterprise media management.',
    tech: ['NestJS', 'Next.js', 'PostgreSQL', 'MySQL', 'Docker', 'Jenkins'],
  },
  {
    title: 'Education Platform',
    description: 'Interactive learning tools and data dashboards for education.',
    tech: ['NodeJS', 'NestJS', 'ReactJS', 'Ant Design', 'MUI'],
  },
  {
    title: 'Xuyen A Hospital',
    description: 'Healthcare project with REST APIs (Laravel) and ReactJS frontend for hospital management.',
    tech: ['Laravel', 'ReactJS', 'MySQL'],
  },
  {
    title: 'Online School Platform',
    description: 'Video calling feature with Flutter and revenue reporting apps with React Native.',
    tech: ['Flutter', 'React Native', 'Node.js'],
  },
  {
    title: 'E-commerce Platform',
    description: 'APIs for e-commerce with NodeJS and MongoDB. Deployed on AWS for storage and hosting.',
    tech: ['Node.js', 'MongoDB', 'AWS'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <span className="text-cyan-400">03.</span>
          Featured Projects
        </h2>
        <p className="text-slate-400 mb-16 max-w-2xl">
          A selection of projects across healthcare, education, e-commerce, media, and IoT.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-lg p-6 hover:border-cyan-500/50 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <svg
                  className="w-10 h-10 text-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded bg-slate-800 text-cyan-400 font-mono"
                  >
                    {t}
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
