const faqs = [
  {
    q: "How many niches can I create?",
    a: "Unlimited in Pro. The free version includes one starter niche template."
  },
  {
    q: "Can I customise the HTML email templates?",
    a: "Yes. Pro includes a full WYSIWYG editor and per‑niche HTML templates."
  },
  {
    q: "Does it work with page builders?",
    a: "Yes. NLCF is shortcode compatible and works with popular builders."
  },
  {
    q: "Can multiple businesses use the same site?",
    a: "Yes. Create unlimited niches, each with its own template and settings."
  },
  {
    q: "Can I export leads?",
    a: "CSV export is included in the Pro version."
  },
  {
    q: "Do I need technical knowledge to use it?",
    a: "No. It’s designed to be simple, with smart defaults and clear settings."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="relative py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">FAQ</h2>
          <p className="mt-3 text-blue-100/80">Everything you might want to know.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer list-none text-white font-semibold">
                {f.q}
                <span className="float-right text-blue-300/80 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm text-blue-100/80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
