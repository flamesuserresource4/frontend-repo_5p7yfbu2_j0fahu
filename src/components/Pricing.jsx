import { Check, Crown, Download } from 'lucide-react'

const Row = ({ label, free, pro }) => (
  <div className="grid grid-cols-12 items-center border-b border-white/10 py-3 text-sm">
    <div className="col-span-6 text-blue-100/90">{label}</div>
    <div className="col-span-3 text-center">{free ? <Check className="mx-auto text-cyan-300" size={18}/> : <span className="text-blue-200/50">—</span>}</div>
    <div className="col-span-3 text-center">{pro ? <Check className="mx-auto text-cyan-300" size={18}/> : <span className="text-blue-200/50">—</span>}</div>
  </div>
)

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Simple, flexible pricing</h2>
          <p className="mt-3 text-blue-100/80">Start free. Upgrade when you’re ready for unlimited power.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white/10 px-3 py-1 text-xs text-blue-100">Free</div>
            </div>
            <p className="mt-4 text-4xl font-extrabold text-white">$0</p>
            <p className="text-blue-100/70">5 leads/day • Basic form • 1 niche</p>
            <a href="#" className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/20 transition"><Download size={18}/> Download Free</a>
          </div>

          <div className="relative rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-cyan-400/10 to-white/5 p-6 ring-2 ring-cyan-400/40">
            <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 px-2 py-1 text-[10px] font-bold text-slate-900">Most Popular</div>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 p-1.5 text-slate-900"><Crown size={16}/></div>
              <div className="text-blue-100">Pro License</div>
            </div>
            <p className="mt-4 text-4xl font-extrabold text-white">$49</p>
            <p className="text-blue-100/70">Unlimited leads • Unlimited niches • CRM & webhooks</p>
            <a href="https://yourstore.com/products/nlcf" target="_blank" className="mt-5 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-blue-500/30 hover:opacity-95 transition"><Crown size={18}/> Buy License</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">What’s included (Pro)</h3>
            <ul className="mt-3 space-y-2 text-blue-100/90 text-sm">
              <li>• Full plugin file</li>
              <li>• Automatic license validation</li>
              <li>• Updates & priority support</li>
              <li>• Documentation</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5">
          <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs uppercase tracking-widest text-blue-200/60">
            <div className="col-span-6">Feature</div>
            <div className="col-span-3 text-center">Free</div>
            <div className="col-span-3 text-center">Pro</div>
          </div>
          <div className="px-6">
            <Row label="Leads per day" free pro />
            <Row label="Unlimited niches" free={false} pro />
            <Row label="Per‑niche HTML templates" free={false} pro />
            <Row label="WYSIWYG editor" free={false} pro />
            <Row label="File attachments" free={false} pro />
            <Row label="Additional fields (Name, Phone, Message)" free={false} pro />
            <Row label="Lead management (Mini CRM)" free={false} pro />
            <Row label="Lead status tracking" free={false} pro />
            <Row label="CTA click tracking" free={false} pro />
            <Row label="CSV export" free={false} pro />
            <Row label="Webhooks/API (Zapier, Make, CRMs)" free={false} pro />
            <Row label="Smart license validation" free={false} pro />
          </div>
        </div>
      </div>
    </section>
  )
}
