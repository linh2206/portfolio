export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <span className="text-cyan-400">01.</span>
          Professional Summary
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Full-stack Developer with <strong className="text-slate-300">4+ years of experience</strong> across 
              healthcare, education, e-commerce, media, and IoT. Proficient in Node.js, Laravel, React.js, NestJS, Next.js. 
              Passionate about building scalable systems and learning new technologies such as Flutter and React Native.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me on the soccer field or enjoying music.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square max-w-sm mx-auto rounded-lg overflow-hidden border-2 border-cyan-500/50">
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-green-500/20 flex items-center justify-center">
                <span className="text-6xl font-bold gradient-text">LH</span>
              </div>
            </div>
            <div className="absolute -inset-4 border border-cyan-500/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
