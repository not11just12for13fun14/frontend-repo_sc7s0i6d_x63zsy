import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // In this static site version, we just simulate success
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks! We\'ll reach out shortly.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-white tracking-tight">Contact</h2>
          <p className="mt-3 text-slate-300">Tell us about your project and we\'ll respond within 1 business day.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
          <input name="name" required placeholder="Full name" className="rounded-lg bg-white/5 px-4 py-3 text-white placeholder-slate-400 border border-white/10" />
          <input name="email" type="email" required placeholder="Email address" className="rounded-lg bg-white/5 px-4 py-3 text-white placeholder-slate-400 border border-white/10" />
          <input name="company" placeholder="Company (optional)" className="rounded-lg bg-white/5 px-4 py-3 text-white placeholder-slate-400 border border-white/10 md:col-span-2" />
          <textarea name="message" required rows="5" placeholder="What would you like to build?" className="rounded-lg bg-white/5 px-4 py-3 text-white placeholder-slate-400 border border-white/10 md:col-span-2" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-white shadow-lg shadow-blue-500/30">
              Send message
            </button>
            <span className="text-slate-300 text-sm">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
