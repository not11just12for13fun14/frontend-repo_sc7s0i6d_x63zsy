import { Code2, Network, Building2, ShieldCheck, Cpu, Rocket } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Software Development',
    desc: 'Custom applications, automation, APIs and integrations tailored to your business goals.'
  },
  {
    icon: Network,
    title: 'Web & Intranet Solutions',
    desc: 'Fast, accessible websites, portals and secure intranet systems for internal collaboration.'
  },
  {
    icon: Building2,
    title: 'SME Digital Support',
    desc: 'Affordable digital packages—branding, websites, marketing ops—built for small businesses.'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'Best practices in auth, monitoring and data protection to keep your systems resilient.'
  },
  {
    icon: Cpu,
    title: 'Cloud & DevOps',
    desc: 'Deployments, CI/CD and infrastructure on AWS, Azure and modern container platforms.'
  },
  {
    icon: Rocket,
    title: 'Product Acceleration',
    desc: 'MVPs, prototyping and growth support to validate and scale ideas quickly.'
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-white tracking-tight">Services</h2>
          <p className="mt-3 text-slate-300">Clear, human language. No jargon. We deliver outcomes your team can use.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-cyan-400/30 transition-colors">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30">
                <Icon />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
