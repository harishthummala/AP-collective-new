import { notFound } from "next/navigation"
import { SiteNavbar } from "@/components/site-navbar"
import { Footer } from "@/components/footer"
import { Gallery } from "@/components/gallery"
import { WEDDINGS } from "../data"

export default function WeddingCollectionPage({ params }: { params: { slug: string } }) {
  const w = WEDDINGS.find((x) => x.slug === params.slug)
  if (!w) return notFound()

  return (
    <main>
      <SiteNavbar />
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-12">
        <h1 className="font-serif text-3xl mb-6">{w.title}</h1>

        {w.video && (
          <div className="mb-8">
            <div className="relative aspect-video overflow-hidden rounded-md border border-primary/20">
              <video className="h-full w-full object-cover" src={w.video} autoPlay muted loop playsInline controls />
            </div>
          </div>
        )}

        <Gallery images={w.images} />
      </section>
      <Footer />
    </main>
  )
}
