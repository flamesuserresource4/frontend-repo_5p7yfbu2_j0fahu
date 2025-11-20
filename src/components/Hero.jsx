import { CheckCircle2, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32 pb-16">
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-blue-100">
            <Sparkles size={14} /> New: Smart license validation + Unlimited niches
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Niche Lead Contact Form (NLCF)
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100/90 leading-relaxed">
            Capture targeted leads. Send niche-specific email templates. Boost conversions instantly.
          </p>
          <ul className="mt-6 space-y-2 text-blue-100/80">
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-cyan-400" size={18}/> Turns a simple form into an intelligent, niche-based lead generator</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-cyan-400" size={18}/> Pre-formatted, branded HTML templates delivered instantly per niche</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-cyan-400" size={18}/> Perfect for agencies, local businesses, freelancers, and marketers</li>
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-blue-500/30 hover:opacity-95">Get NLCF Pro Now</a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10">Download Free Version</a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-cyan-400/30 text-cyan-300 px-6 py-3 font-semibold hover:bg-cyan-400/10">Try Demo Contact Form</a>
          </div>
          <p className="mt-2 text-xs text-blue-200/80">No credit card required • Works with any theme • Shortcode compatible</p>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-4 shadow-2xl">
            <div className="rounded-xl bg-white p-6">
              <div className="mb-3 text-sm font-semibold text-slate-700">Demo Contact Form</div>
              <form className="grid grid-cols-1 gap-3">
                <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Your email" />
                <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
                  <option>Select your niche</option>
                  <option>Dentist</option>
                  <option>Mechanic</option>
                  <option>Plumber</option>
                  <option>Builder</option>
                  <option>Electrician</option>
                </select>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Name (Pro)" />
                  <input className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Phone (Pro)" />
                </div>
                <textarea className="rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Message (Pro)" rows={3} />
                <div className="flex items-center justify-between rounded-lg border border-dashed border-slate-300 px-3 py-2 text-sm text-slate-500">
                  <span>Attach file (Pro)</span>
                  <span className="rounded bg-slate-800 text-white px-2 py-1 text-xs">Pro</span>
                </div>
                <button className="rounded-lg bg-slate-900 px-4 py-2 text-white font-semibold">Send</button>
              </form>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 -right-6 h-12 rounded-xl bg-gradient-to-r from-cyan-400/25 via-blue-500/20 to-purple-500/25 blur-xl" />
        </div>
      </div>
    </section>
  )
}
