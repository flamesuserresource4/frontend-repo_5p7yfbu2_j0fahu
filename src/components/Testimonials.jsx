const testimonials = [
  {
    quote: "We tripled our enquiry rate within the first week.",
    author: "Maya R.",
    role: "Agency Owner"
  },
  {
    quote: "Perfect plugin for agencies — fast, lightweight, and converts like crazy.",
    author: "Chris T.",
    role: "Marketing Lead"
  },
  {
    quote: "The niche templates save us hours. Our clients reply the same day.",
    author: "Liam S.",
    role: "Freelancer"
  }
]

export default function Testimonials() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Loved by marketers and agencies</h2>
          <p className="mt-3 text-blue-100/80">Real results from teams using NLCF to close more deals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-blue-100/90">“{t.quote}”</p>
              <div className="mt-4 text-sm text-blue-200/70">— {t.author}, {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
