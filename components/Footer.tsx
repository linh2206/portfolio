export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/50 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {currentYear} Le Hoai Linh
          </p>
          <div className="flex gap-5">
            <a
              href="https://github.com/linh2206"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-indigo-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="viber://chat?number=%2B84972645991"
              className="text-slate-600 hover:text-purple-400 transition-colors duration-300"
              aria-label="Viber"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.4 0C9.473.028 5.333.344 3.243 2.262 1.663 3.842 1.08 6.16 1.017 9.006c-.063 2.846-.143 8.182 5.01 9.735h.004l-.004 2.234s-.036.904.56 1.089c.724.226 1.148-.466 1.84-1.212.378-.41.9-.998 1.293-1.455 3.56.3 6.296-.387 6.607-.49.718-.236 4.775-.753 5.436-6.147.68-5.559-.33-9.065-2.162-10.654l.002-.001C18.787 1.33 15.86.457 13.375.16c0 0-.66-.079-1.24-.1-.175-.008-.359-.02-.546-.02h-.19z"/>
              </svg>
            </a>
            <a
              href="mailto:lehoailinh2206@gmail.com"
              className="text-slate-600 hover:text-indigo-400 transition-colors duration-300"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
