import { Infinity, Mail, Inbox, Pencil, Image, Upload, User, Phone, MessageSquare, Database, CheckCircle2, MousePointer2, FileSpreadsheet, Webhook, ShieldCheck, Crown } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, desc, badge }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition">
    <div className="mb-4 flex items-center gap-2">
      <div className="rounded-lg bg-gradient-to-br from-cyan-400/30 to-blue-500/30 p-2 ring-1 ring-white/20">
        <Icon className="text-cyan-300" size={20} />
      </div>
      {badge && (
        <span className="text-[10px] uppercase tracking-widest rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 text-slate-900 px-2 py-0.5 font-bold">Pro</span>
      )}
    </div>
    <h3 className="text-white font-semibold">{title}</h3>
    <p className="text-sm text-blue-100/80 mt-1">{desc}</p>
  </div>
)

export default function Features() {
  return (
    <section id="features" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Everything you need to convert more leads</h2>
          <p className="mt-3 text-blue-100/80">Free to start. Unlock power features with a Pro license.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Free */}
          <FeatureCard icon={Inbox} title="5 Leads per day" desc="Get started free with a daily send limit of 5 leads." />
          <FeatureCard icon={Mail} title="Email + Niche field" desc="Clean, simple form with email input and niche dropdown." />
          <FeatureCard icon={Crown} title="Modern HTML template" desc="Beautiful branded HTML email for one niche to start." />
          <FeatureCard icon={CheckCircle2} title="Basic branding" desc="Looks great out-of-the-box with minimal setup." />

          {/* Pro */}
          <FeatureCard icon={Infinity} title="Unlimited leads" desc="Remove all limits and scale without friction." badge />
          <FeatureCard icon={Pencil} title="Per‑niche templates" desc="Fully customised HTML templates for every niche." badge />
          <FeatureCard icon={Image} title="Rich media editor" desc="Add images, logos, and even videos to your emails." badge />
          <FeatureCard icon={Upload} title="File attachments" desc="Users can attach files, auto‑attached to emails." badge />
          <FeatureCard icon={User} title="Name field" desc="Collect names for better personalisation." badge />
          <FeatureCard icon={Phone} title="Phone field" desc="Capture phone numbers for faster follow‑ups." badge />
          <FeatureCard icon={MessageSquare} title="Message field" desc="Let visitors add context with a message box." badge />
          <FeatureCard icon={Database} title="Lead Management" desc="Mini‑CRM stores leads as custom post types." badge />
          <FeatureCard icon={CheckCircle2} title="Lead Status" desc="Track New / Contacted / Closed stages." badge />
          <FeatureCard icon={MousePointer2} title="CTA click tracking" desc="Counts clicks on “View This Lead” inside emails." badge />
          <FeatureCard icon={FileSpreadsheet} title="CSV export" desc="Export all leads to Excel or Google Sheets." badge />
          <FeatureCard icon={Webhook} title="Webhooks & API" desc="Send JSON payloads to Zapier, Make, CRMs and more." badge />
          <FeatureCard icon={ShieldCheck} title="Smart license" desc="Validates remotely via your WooCommerce store." badge />
        </div>
      </div>
    </section>
  )
}
