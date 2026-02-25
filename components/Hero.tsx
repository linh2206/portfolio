'use client'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-green-500/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-cyan-400 font-mono text-sm mb-4 animate-fade-in">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Le Hoai Linh
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Full-stack Developer
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          3+ years building scalable systems across healthcare, education, 
          e-commerce, and IoT. Passionate about creating impactful solutions.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-500 hover:text-cyan-400 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
