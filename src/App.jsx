import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Mission from './components/Mission'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Mission />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} TechBoost NG HUB. All rights reserved.</p>
          <div className="text-sm text-slate-400">Built with a focus on clarity, speed and security.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
