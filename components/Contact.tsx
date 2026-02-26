export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-cyan-400 font-mono text-sm mb-4">06. What&apos;s Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
        <p className="text-slate-400 mb-12">
          I&apos;m currently open to new opportunities. Whether you have a question 
          or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:lehoailinh2206@gmail.com"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Say Hello
          </a>
          <a
            href="viber://chat?number=%2B84972645991"
            className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-purple-500 hover:text-purple-400 transition-colors"
          >
            Chat on Viber
          </a>
        </div>
        <div className="mt-12 text-slate-500 text-sm">
          <p>✉ lehoailinh2206@gmail.com</p>
          <p className="mt-1">📱 +84 97 264 5991</p>
          <p className="mt-1">📍 Ho Chi Minh City, Vietnam</p>
        </div>
      </div>
    </section>
  )
}
