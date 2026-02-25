const experiences = [
  {
    company: 'SCTV',
    period: 'May 2025 – Present',
    role: 'Full-stack Developer',
    items: [
      'System Manager: Server management, streaming control, log management, incident handling, video recording',
      'Dashboard: Unified dashboard for managing and monitoring video, short-form, and live streaming content',
    ],
    tech: 'Bash · Go · PHP · Python · NestJS · Next.js · Redis · MySQL · Laravel · Grafana · Multivisor',
  },
  {
    company: 'Hvision',
    period: 'Feb 2024 – May 2025',
    role: 'Full-stack Developer',
    items: [
      'Vang Tat Mine Management System: Designed and developed internal system for managing employee information and warehouse inventory',
      'Implemented modules for employee records, shift assignments, and leave management',
      'Built warehouse inventory tracking with stock movement, request handling, and reporting',
    ],
    tech: 'Next.js · NestJS · MySQL · MongoDB · Go · Redis · Tailwind CSS · GitHub Actions · Ubuntu · VMware ESXi',
  },
  {
    company: 'WOSS Corporation',
    period: 'Mar 2022 – Feb 2024',
    role: 'Full-stack Developer',
    items: [
      'Media Hub Platform (MHP): Developed contract management system, video approval workflow, and broadcast scheduling using NestJS and Next.js',
      'Education Platform: Developed interactive learning tools and data dashboards',
    ],
    tech: 'NodeJS · NestJS · ReactJS · NextJS · Python · Docker · Jenkins · PostgreSQL · MySQL · Ant Design · MUI',
  },
  {
    company: 'ROBUSTA',
    period: 'Jan 2021 – Jan 2022',
    role: 'Developer',
    items: [
      'Xuyen A Hospital Project: REST APIs (Laravel) + Frontend (ReactJS)',
      'Online School Platform: Video calling (Flutter), revenue reporting app (React Native)',
      'Learned and experimented with mobile app technologies and cross-platform solutions',
    ],
  },
  {
    company: 'ECOMEASY',
    period: 'May 2020 – Dec 2020',
    role: 'Developer',
    items: [
      'Built APIs for e-commerce platform with NodeJS and MongoDB',
      'Deployed AWS services for storage and hosting',
    ],
  },
  {
    company: 'HUTECH University',
    period: 'Jul 2019 – Jan 2020',
    role: 'Intern',
    items: [
      'Developed feedback collection website (NodeJS, EJS, PostgreSQL)',
      'Designed responsive mobile-first layout (Bootstrap)',
      'Studied Angular and ReactJS during internship',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-2">
          <span className="text-cyan-400">02.</span>
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="glass rounded-lg p-6 md:p-8 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                  <p className="text-cyan-400">{exp.role}</p>
                </div>
                <p className="text-slate-500 font-mono text-sm">{exp.period}</p>
              </div>
              <ul className="space-y-2">
                {exp.items.map((item) => (
                  <li
                    key={item}
                    className="text-slate-400 text-sm leading-relaxed flex gap-2"
                  >
                    <span className="text-cyan-400 flex-shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
              {exp.tech && (
                <p className="text-slate-500 text-xs mt-4 font-mono">{exp.tech}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
