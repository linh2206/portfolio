'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <p className="text-indigo-400 font-mono text-sm mb-4 tracking-wider">06. What&apos;s Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-slate-500 mb-10 leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a question 
            or just want to say hi, I&apos;ll try my best to get back to you!
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
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              <span className="relative z-10">Say Hello</span>
            </motion.a>
            <motion.a
              href="viber://chat?number=%2B84972645991"
              className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Chat on Viber
            </motion.a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center text-slate-600 text-sm">
            <span className="flex items-center gap-2 justify-center">
              <span>✉️</span> lehoailinh2206@gmail.com
            </span>
            <span className="flex items-center gap-2 justify-center">
              <span>📞</span> +84 97 264 5991
            </span>
            <span className="flex items-center gap-2 justify-center">
              <span>📍</span> Ho Chi Minh City
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
