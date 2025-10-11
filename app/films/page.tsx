import Link from "next/link"
import { SiteNavbar } from "@/components/site-navbar"
import { Footer } from "@/components/footer"

export default function FilmsPage() {
  return (
    <main>
      <SiteNavbar />
      <header className="pt-28 pb-12 text-center container-narrow">
        <p className="meta text-[11px] tracking-[0.22em] text-muted-foreground">FEATURED</p>
        <h1>Films</h1>
        <p className="mt-3 text-muted-foreground">Editorial films with timeless restraint.</p>
      </header>

      <section className="section">
        <div className="container-narrow grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <article key={i} className="rounded-lg overflow-hidden border bg-secondary">
              <div className="aspect-[16/9] relative">
                <video className="h-full w-full object-cover" src="/videos/hero.mp4" autoPlay muted loop playsInline />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3>Editorial Celebration {i + 1}</h3>
                  <p className="meta text-[10px] tracking-[0.22em] text-muted-foreground mt-1">Destination</p>
                </div>
                <Link href="/contact" className="cta text-xs hover:opacity-80">
                  Inquire
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
