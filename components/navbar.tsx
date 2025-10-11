"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/films", label: "Films" },
  { href: "/photography", label: "Photography" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="nav-blur border-b border-brand/30">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-serif text-xl tracking-wide text-brand">Anant Parinay Collective</span>
            </Link>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-md border border-brand/40 px-3 py-1 text-sm font-mono text-[12px] uppercase tracking-wider text-brand"
              aria-label="Toggle Menu"
              onClick={() => setOpen((v) => !v)}
            >
              Menu
            </button>

            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`font-mono text-[12px] uppercase tracking-wider hover:text-brand transition-colors ${
                    pathname === l.href ? "text-brand" : "text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {open && (
          <nav className="md:hidden border-t border-brand/20">
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 font-mono text-[12px] uppercase tracking-wider hover:text-brand"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
