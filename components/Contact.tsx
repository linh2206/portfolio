'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-indigo-400 font-mono text-sm mb-4">06. What&apos;s Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          I&apos;m currently open to new opportunities. Whether you have a question 
          or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:lehoailinh2206@gmail.com"
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Say Hello
          </a>
          <a
            href="viber://chat?number=%2B84972645991"
            className="px-8 py-4 border border-purple-500/50 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Chat on Viber
          </a>
        </div>
        <div className="mt-14 space-y-2 text-slate-500 text-sm">
          <p>✉️ lehoailinh2206@gmail.com</p>
          <p>📞 +84 97 264 5991</p>
          <p>📍 Ho Chi Minh City, Vietnam</p>
        </div>
      </div>
    </section>
  )
}
