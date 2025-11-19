export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(14,165,233,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_90%_20%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold text-white tracking-tight">About Us</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              TechBoost NG HUB is a digital innovation company focused on building reliable, scalable solutions for African businesses. We partner with startups, SMEs and enterprises to deliver modern software, high-performance websites, secure intranets and automation that unlocks growth.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Our team blends strategy, design and engineering to make technology approachable for non-technical teams while meeting rigorous enterprise standards.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{title:'Projects Delivered',value:'120+'},{title:'Clients Served',value:'80+'},{title:'Industries',value:'12+'},{title:'Avg. Uptime',value:'99.9%'}].map((s)=>(
              <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-slate-400 text-sm">{s.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
