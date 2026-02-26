'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const roles = ['Full-stack Developer', 'Backend Engineer', 'Frontend Developer', 'System Architect']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = isDeleting ? 35 : 70
    if (!isDeleting && displayed === current) { setTimeout(() => setIsDeleting(true), 2200); return }
    if (isDeleting && displayed === '') { setIsDeleting(false); setRoleIndex((p) => (p + 1) % roles.length); return }
    const t = setTimeout(() => setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)), speed)
    return () => clearTimeout(t)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Colorful animated orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.2), transparent 70%)', top: '5%', left: '10%' }}
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.18), transparent 70%)', top: '30%', right: '5%' }}
          animate={{ x: [0, -30, 25, 0], y: [0, 35, -20, 0], scale: [1, 0.85, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.15), transparent 70%)', bottom: '10%', left: '25%' }}
          animate={{ x: [0, 25, -35, 0], y: [0, -25, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.12), transparent 70%)', top: '60%', right: '25%' }}
          animate={{ x: [0, -20, 30, 0], y: [0, 20, -25, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: ['#38bdf8', '#818cf8', '#c084fc', '#f472b6', '#fb923c', '#facc15'][i],
            top: `${15 + i * 14}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          className="text-cyan-400 font-mono text-sm mb-6 tracking-[0.25em] uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="gradient-text">Le Hoai Linh</span>
        </motion.h1>

        <motion.div
          className="h-10 md:h-12 flex items-center justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="text-xl md:text-2xl font-medium text-violet-300 font-mono">
            {displayed}
            <motion.span
              className="inline-block w-[2px] h-6 md:h-7 bg-pink-400 ml-0.5 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            />
          </span>
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          4+ years building scalable systems across healthcare, education, 
          e-commerce, media, and IoT.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="#experience"
            className="group relative px-8 py-3.5 rounded-xl font-semibold text-white overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 animate-gradient transition-all duration-500" />
            <span className="absolute inset-[1px] bg-[#0a0a1a] rounded-[10px] group-hover:bg-transparent transition-all duration-500" />
            <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent group-hover:text-white transition-all duration-500">View Experience</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-violet-500/40 text-violet-300 font-semibold rounded-xl hover:border-pink-400/50 hover:text-pink-300 hover:bg-pink-500/5 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <a href="#about" className="text-violet-600 hover:text-cyan-400 transition-colors duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
