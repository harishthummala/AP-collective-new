import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-primary/20 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <div className="font-serif text-2xl text-primary">Anant Parinay Collective</div>
          <p className="text-sm text-muted-foreground">
            Timeless wedding films and photography with an editorial sensibility.
          </p>
        </div>

        <div>
          <div className="meta text-[12px] tracking-[0.22em] text-muted-foreground mb-3">Navigation</div>
          <ul className="space-y-2">
            <li>
              <Link href="/work" className="hover:text-primary">
                Work
              </Link>
            </li>
            <li>
              <Link href="/films" className="hover:text-primary">
                Films
              </Link>
            </li>
            <li>
              <Link href="/photography" className="hover:text-primary">
                Photography
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="meta text-[12px] tracking-[0.22em] text-muted-foreground mb-3">Contact</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-primary" href="mailto:hello@anantparinay.com">
                hello@anantparinay.com
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="tel:+10000000000">
                +1 (000) 000-0000
              </a>
            </li>
            <li className="text-muted-foreground">Mumbai • Delhi • Destination</li>
          </ul>
        </div>

        <div>
          <div className="meta text-[12px] tracking-[0.22em] text-muted-foreground mb-3">Follow</div>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-primary" href="#" aria-label="Instagram">
                Instagram
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#" aria-label="YouTube">
                YouTube
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#" aria-label="Pinterest">
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Anant Parinay Collective. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
