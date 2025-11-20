import { Menu, X, Download, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-slate-900/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 ring-1 ring-white/20 shadow-lg shadow-blue-500/20" />
            <div className="leading-tight">
              <p className="text-sm uppercase tracking-widest text-blue-300/80">WordPress Plugin</p>
              <p className="text-base font-semibold text-white">Niche Lead Contact Form</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-blue-100/80">
            <button onClick={() => scrollToId('features')} className="hover:text-white">Features</button>
            <button onClick={() => scrollToId('how-it-works')} className="hover:text-white">How it works</button>
            <button onClick={() => scrollToId('pricing')} className="hover:text-white">Pricing</button>
            <button onClick={() => scrollToId('faq')} className="hover:text-white">FAQ</button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" onClick={(e)=>{e.preventDefault();scrollToId('pricing')}} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition">
              <Download size={16} /> Download Free
            </a>
            <a href="https://yourstore.com/products/nlcf" target="_blank" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:opacity-95 transition shadow-lg shadow-blue-500/30">
              <ShoppingCart size={16} /> Buy Pro
            </a>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-2 border-t border-white/10 pt-4 text-blue-100/80">
              <button onClick={()=>{scrollToId('features');setOpen(false)}} className="block w-full text-left py-2">Features</button>
              <button onClick={()=>{scrollToId('how-it-works');setOpen(false)}} className="block w-full text-left py-2">How it works</button>
              <button onClick={()=>{scrollToId('pricing');setOpen(false)}} className="block w-full text-left py-2">Pricing</button>
              <button onClick={()=>{scrollToId('faq');setOpen(false)}} className="block w-full text-left py-2">FAQ</button>
              <div className="flex gap-2 pt-2">
                <a href="#pricing" onClick={(e)=>{e.preventDefault();scrollToId('pricing');setOpen(false)}} className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-white">Download Free</a>
                <a href="https://yourstore.com/products/nlcf" target="_blank" className="flex-1 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 px-4 py-2 text-center text-sm font-semibold text-slate-900">Buy Pro</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
