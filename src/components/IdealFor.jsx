import { Building2, Briefcase, Megaphone, Users, FileText, Magnet, LayoutGrid, Cloud } from 'lucide-react'

const Item = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
    <Icon size={18} className="text-cyan-300" />
    <span className="text-blue-100/90 text-sm">{label}</span>
  </div>
)

export default function IdealFor() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Built for real businesses</h2>
          <p className="mt-3 text-blue-100/80">Whether you run one site or hundreds of clients.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Item icon={Building2} label="Local service businesses" />
          <Item icon={Briefcase} label="Agencies managing clients" />
          <Item icon={Megaphone} label="Marketers" />
          <Item icon={Users} label="Freelancers" />
          <Item icon={FileText} label="Landing pages" />
          <Item icon={Magnet} label="Lead magnets" />
          <Item icon={LayoutGrid} label="Multi‑niche websites" />
          <Item icon={Cloud} label="SaaS companies" />
        </div>
      </div>
    </section>
  )
}
