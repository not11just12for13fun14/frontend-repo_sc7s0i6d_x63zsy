export default function Mission() {
  return (
    <section id="mission" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(400px_160px_at_80%_30%,rgba(14,165,233,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white tracking-tight">Mission</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Empower businesses across Nigeria and Africa with dependable technology that simplifies work, amplifies reach and accelerates growth.
            </p>
            <div className="mt-6 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-cyan-200 text-sm">
              We believe innovation should be practical—clear deliverables, measurable results, and tools your team can actually use.
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-white tracking-tight">Vision</h3>
            <p className="mt-4 text-slate-300 leading-relaxed">
              A continent where world-class digital solutions are built locally and accessible to every business—from startups to enterprises.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {['Local talent first','Security by design','User experience for all','Sustainable growth'].map((i)=> (
                <li key={i} className="rounded-lg bg-white/5 px-4 py-3 text-slate-200 border border-white/10">{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
