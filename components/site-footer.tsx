export function SiteFooter() {
  return (
    <footer className="py-10 border-t">
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="meta text-[11px]">© {new Date().getFullYear()} Anant Parinay Collective</p>
        <nav className="meta text-[11px] flex flex-wrap items-center gap-4 md:gap-6">
          <a href="/" className="hover:text-primary">
            Home
          </a>
          <a href="/work" className="hover:text-primary">
            Work
          </a>
          <a href="/films" className="hover:text-primary">
            Films
          </a>
          <a href="/photography" className="hover:text-primary">
            Photography
          </a>
          <a href="/journal" className="hover:text-primary">
            Journal
          </a>
          <a href="/experience" className="hover:text-primary">
            Experience
          </a>
          <a href="/about" className="hover:text-primary">
            About
          </a>
          <a href="/contact" className="hover:text-primary">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
