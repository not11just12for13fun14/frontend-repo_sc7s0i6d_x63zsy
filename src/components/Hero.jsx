import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Innovation-driven Digital Solutions
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            TechBoost NG HUB
          </h1>
          <p className="mt-4 text-slate-300 text-lg sm:text-xl">
            We help Nigerian businesses build, launch and scale with expert software development, web & intranet solutions, and SME digital support.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#services" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-white shadow-lg shadow-blue-500/30">
              Explore Services
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 text-slate-200 hover:bg-white/20">
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
