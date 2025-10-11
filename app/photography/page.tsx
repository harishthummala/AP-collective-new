import { SiteNavbar } from "@/components/site-navbar"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export default function PhotographyPage() {
  const images = Array.from({ length: 18 }).map((_, i) => {
    const n = i + 1
    return `/placeholder.svg?height=900&width=675&query=Editorial%20photo%20${n}`
  })

  return (
    <main>
      <SiteNavbar />
      <header className="pt-28 pb-12 text-center container-narrow">
        <p className="meta text-[11px] tracking-[0.22em] text-muted-foreground">GALLERY</p>
        <h1>Photography</h1>
        <p className="mt-3 text-muted-foreground">Refined frames that honor the moment.</p>
      </header>

      <section className="section">
        <div className="container-narrow">
          <Gallery images={images} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
