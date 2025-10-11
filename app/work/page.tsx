import Link from "next/link"
import { SiteNavbar } from "@/components/site-navbar"
import { Footer } from "@/components/footer"
import { WEDDINGS } from "./data"

export default function WorkPage() {
  return (
    <main>
      <SiteNavbar />
      <header className="pt-28 pb-12 text-center container-narrow">
        <p className="meta text-[11px] tracking-[0.22em] text-muted-foreground">PORTFOLIO</p>
        <h1>Work</h1>
        <p className="mt-3 text-muted-foreground">A curated selection of editorial wedding stories.</p>
      </header>

      <section className="section">
        <div className="container-narrow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {WEDDINGS.map((w) => (
            <Link key={w.slug} href={`/work/${w.slug}`} className="group rounded-lg overflow-hidden border">
              <img
                src={w.cover || "/placeholder.svg"}
                alt={`${w.title} cover`}
                className="h-64 w-full object-cover transition-transform group-hover:scale-[1.02]"
              />
              <div className="p-4">
                <h3>{w.title}</h3>
                <p className="meta text-[10px] tracking-[0.22em] text-muted-foreground mt-1">Film + Photo</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
