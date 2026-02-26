'use client'

import { useEffect, useState } from 'react'

const roles = ['Full-stack Developer', 'Backend Engineer', 'Frontend Developer', 'System Builder']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = isDeleting ? 40 : 80

    if (!isDeleting && displayed === current) {
      setTimeout(() => setIsDeleting(true), 2000)
      return
    }
    if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-violet-500/8 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-indigo-400 font-mono text-sm mb-6 animate-fade-in tracking-wider uppercase">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="gradient-text">Le Hoai Linh</span>
        </h1>
        <div className="h-12 md:h-14 flex items-center justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-2xl md:text-4xl font-semibold text-slate-400">
            {displayed}
            <span className="inline-block w-[3px] h-8 md:h-10 bg-indigo-400 ml-1 animate-pulse align-middle" />
          </span>
        </div>
        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mt-6 mb-12 animate-slide-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
          4+ years building scalable systems across healthcare, education, 
          e-commerce, media, and IoT.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#experience"
            className="px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-indigo-500/50 text-indigo-300 font-semibold rounded-xl hover:bg-indigo-500/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-600 hover:text-indigo-400 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
