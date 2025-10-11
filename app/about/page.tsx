import { SiteNavbar } from "@/components/site-navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main>
      <SiteNavbar />
      <header className="relative pt-28">
        <div className="container-narrow text-center">
          <h1>About Anant Parinay Collective</h1>
          <p className="meta mt-3">Welcome to our film house</p>
        </div>
        {/* <div className="mt-10 container-narrow rounded-lg overflow-hidden">
          <img src="/lush-garden-header.jpg" alt="Lush garden header" className="w-full object-cover" />
        </div> */}
      </header>

      <section className="section">
        <div className="container-narrow grid md:grid-cols-[1fr,1.2fr] gap-10 items-start">
          <img src="/studio-portrait.png" alt="Studio portrait" className="rounded-lg border" />
          <div>
            <h3>Welcome</h3>
            <p className="mt-4">
              Founded with a simple ethos: craft editorial, story-first wedding films for discerning couples and
              planners. We believe in restraint, in listening first, and in elevating the smallest gestures into lasting
              memories.
            </p>
            <p className="mt-4">
              Our approach is collaborative and unobtrusive—guiding when it serves the story, and stepping back when it
              preserves authenticity. The result is work that feels considered, elegant, and deeply personal.
            </p>
            <p className="mt-4">
              We serve celebrations across India and destinations worldwide, partnering closely with planners and design
              teams to harmonize coverage with the rhythm of your event.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container-narrow">
          <h3 className="text-center">Our Philosophy</h3>
          <div className="mt-6 max-w-3xl mx-auto text-center">
            <p>
              Quality • Restraint • Artistry • Care. Every frame is held to a high standard—composition, light, and
              story in balance—so your film and photographs age gracefully.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <h3 className="text-primary-foreground">Work with Us</h3>
          <p className="mt-4 max-w-2xl mx-auto">We accept a limited number of commissions per season.</p>
          <a
            href="/contact"
            className="cta inline-flex items-center mt-8 px-6 py-3 rounded border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Connect Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
