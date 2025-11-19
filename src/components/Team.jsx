export default function Team() {
  const roles = [
    { role: 'Product & Strategy', notes: 'Discovery, roadmaps, ROI alignment' },
    { role: 'Design', notes: 'UX/UI, accessibility, brand systems' },
    { role: 'Engineering', notes: 'Frontend, Backend, Mobile, QA' },
    { role: 'DevOps & Security', notes: 'Cloud, CI/CD, observability, compliance' },
    { role: 'Client Success', notes: 'Training, documentation, support' },
  ]

  return (
    <section id="team" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-white tracking-tight">Team Structure</h2>
          <p className="mt-3 text-slate-300">Purpose-built pods with clear ownership from idea to launch.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {roles.map((r) => (
            <div key={r.role} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-white font-medium">{r.role}</div>
              <div className="mt-1 text-slate-400 text-sm">{r.notes}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
