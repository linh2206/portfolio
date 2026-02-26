'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-violet-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-pink-500/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <p className="text-pink-400 font-mono text-sm mb-4 tracking-wider">What&apos;s Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:lehoailinh2206@gmail.com"
              className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 animate-gradient" />
              <span className="relative z-10">Say Hello</span>
            </motion.a>
            <motion.a
              href="viber://chat?number=%2B84972645991"
              className="px-8 py-4 border border-pink-500/30 text-pink-300 font-semibold rounded-xl hover:bg-pink-500/10 hover:border-pink-400/50 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Chat on Viber
            </motion.a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center text-sm">
            <span className="flex items-center gap-2 justify-center text-cyan-400/70">✉️ lehoailinh2206@gmail.com</span>
            <span className="flex items-center gap-2 justify-center text-violet-400/70">📞 +84 97 264 5991</span>
            <span className="flex items-center gap-2 justify-center text-pink-400/70">📍 Ho Chi Minh City</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
