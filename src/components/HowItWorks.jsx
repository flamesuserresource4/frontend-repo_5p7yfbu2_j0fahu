import { MousePointerClick, MailCheck, TrendingUp } from 'lucide-react'

const Step = ({ icon: Icon, title, desc, number }) => (
  <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
    <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 text-slate-900 text-sm font-bold shadow-lg shadow-blue-500/30">{number}</div>
    <div className="mb-3 rounded-lg bg-gradient-to-br from-cyan-400/30 to-blue-500/30 p-2 ring-1 ring-white/20 w-max">
      <Icon className="text-cyan-300" size={20} />
    </div>
    <h3 className="text-white font-semibold">{title}</h3>
    <p className="text-sm text-blue-100/80 mt-1">{desc}</p>
  </div>
)

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">How it works</h2>
          <p className="mt-3 text-blue-100/80">A simple 3‑step flow that turns forms into conversions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Step number={1} icon={MousePointerClick} title="User submits the form" desc="They choose a niche and fill in email, name, phone, message, and attachments." />
          <Step number={2} icon={MailCheck} title="Instant niche template" desc="A perfectly written, branded HTML email tailored to the niche is sent immediately." />
          <Step number={3} icon={TrendingUp} title="Faster follow‑ups" desc="More context, fewer back‑and‑forths, and higher conversion rates for the business." />
        </div>
      </div>
    </section>
  )
}
