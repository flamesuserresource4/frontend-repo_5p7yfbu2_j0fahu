export default function CTA() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-cyan-400/10 to-white/5 p-10 text-center ring-1 ring-cyan-400/30">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Ready to turn forms into conversions?</h3>
          <p className="mt-3 text-blue-100/80">Join businesses using NLCF to capture targeted leads and convert faster.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://yourstore.com/products/nlcf" target="_blank" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-blue-500/30 hover:opacity-95">Get NLCF Pro Now</a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10">Download Free Version</a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-cyan-400/30 text-cyan-300 px-6 py-3 font-semibold hover:bg-cyan-400/10">Try Demo Contact Form</a>
          </div>
        </div>
      </div>
    </section>
  )
}
