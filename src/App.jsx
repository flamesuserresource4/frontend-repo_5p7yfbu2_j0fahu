import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import IdealFor from './components/IdealFor'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <IdealFor />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} NLCF — Niche Lead Contact Form</p>
          <div className="text-sm text-blue-200/60">Made for modern WordPress sites • Shortcode compatible</div>
        </div>
      </footer>
    </div>
  )
}

export default App
