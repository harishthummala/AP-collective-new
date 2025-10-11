"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkBase = "meta text-[11px] tracking-[0.22em] transition-colors"
  const linkColorDesktop = scrolled ? "text-foreground hover:text-primary" : "text-white hover:opacity-80"
  const linkColorMobile = "text-foreground hover:text-primary"

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? "bg-white/90 backdrop-blur border-b" : "bg-transparent"
      }`}
      aria-label="Primary"
    >
      <nav className="container-narrow flex items-center justify-between py-4">
        <Link
          href="/"
          className={`font-serif text-lg md:text-xl tracking-wide ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Anant Parinay Collective"
        >
          Anant Parinay Collective
        </Link>

        {/* desktop */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link href="/" className={`${linkBase} ${linkColorDesktop}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/work" className={`${linkBase} ${linkColorDesktop}`}>
              Work
            </Link>
          </li>
          <li>
            <Link href="/films" className={`${linkBase} ${linkColorDesktop}`}>
              Films
            </Link>
          </li>
          <li>
            <Link href="/photography" className={`${linkBase} ${linkColorDesktop}`}>
              Photography
            </Link>
          </li>
          <li>
            <Link href="/about" className={`${linkBase} ${linkColorDesktop}`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${linkBase} ${linkColorDesktop}`}>
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className={`${linkBase} ${linkColorDesktop}`}
              aria-label="Instagram"
              title="Instagram"
            >
              IG
            </a>
          </li>
        </ul>

        {/* mobile */}
        <button
          className={`md:hidden meta text-[11px] tracking-[0.22em] px-3 py-1 border rounded ${
            scrolled ? "border-foreground text-foreground" : "border-white/70 text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t bg-white/95 backdrop-blur">
          <ul className="meta text-[12px] tracking-[0.22em] container-narrow py-4 grid gap-3">
            <li>
              <Link href="/" onClick={() => setOpen(false)} className={linkColorMobile}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/work" onClick={() => setOpen(false)} className={linkColorMobile}>
                Work
              </Link>
            </li>
            <li>
              <Link href="/films" onClick={() => setOpen(false)} className={linkColorMobile}>
                Films
              </Link>
            </li>
            <li>
              <Link href="/photography" onClick={() => setOpen(false)} className={linkColorMobile}>
                Photography
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setOpen(false)} className={linkColorMobile}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setOpen(false)} className={linkColorMobile}>
                Contact
              </Link>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className={linkColorMobile}>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
