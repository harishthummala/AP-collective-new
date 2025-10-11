"use client"

import { SiteNavbar } from "@/components/site-navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main>
      <SiteNavbar />
      <header className="relative pt-28">
        <div className="absolute inset-0 -z-10">
          <img src="/classical-garden-fountain.jpg" className="h-full w-full object-cover" alt="" />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
        <div className="container-narrow text-center text-white py-28">
          <p className="meta text-[11px] tracking-[0.22em] text-white/85">GET IN TOUCH</p>
          <h1 className="text-white">Begin Your Anant Parinay</h1>
          <p className="meta mt-3 text-white/85">For Couples • For Planners</p>
        </div>
      </header>

      <section className="section">
        <div className="container-narrow grid gap-10 md:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-10">
            {submitted ? (
              <div className="rounded border p-6 bg-secondary">
                <h3>Thank you</h3>
                <p className="mt-2">We’ll be in touch shortly.</p>
              </div>
            ) : (
              <>
                {/* Couples Form */}
                <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  <div className="md:col-span-2">
                    <h3>For Couples</h3>
                  </div>

                  <div className="grid gap-2">
                    <label className="meta text-xs">YOUR NAME</label>
                    <input className="border rounded px-3 py-2" required placeholder="Your full name" />
                  </div>
                  <div className="grid gap-2">
                    <label className="meta text-xs">PARTNER&apos;S NAME</label>
                    <input className="border rounded px-3 py-2" required placeholder="Partner's full name" />
                  </div>
                  <div className="grid gap-2">
                    <label className="meta text-xs">EMAIL</label>
                    <input type="email" className="border rounded px-3 py-2" required placeholder="you@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <label className="meta text-xs">PHONE</label>
                    <input type="tel" className="border rounded px-3 py-2" required placeholder="+91 ..." />
                  </div>
                  <div className="grid gap-2">
                    <label className="meta text-xs">WEDDING DATE</label>
                    <input type="date" className="border rounded px-3 py-2" />
                  </div>
                  <div className="grid gap-2">
                    <label className="meta text-xs">LOCATION</label>
                    <input className="border rounded px-3 py-2" placeholder="City, Country" />
                  </div>
                  <div className="grid gap-2 md:col-span-2">
                    <label className="meta text-xs">TELL US YOUR STORY</label>
                    <textarea
                      className="border rounded px-3 py-2 min-h-32"
                      placeholder="Share more about your day..."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button className="cta inline-flex items-center px-6 py-3 rounded bg-primary text-primary-foreground hover:opacity-90">
                      Send Enquiry
                    </button>
                  </div>
                </form>

                {/* Planners Form */}
                <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  <div className="md:col-span-2">
                    <h3>For Planners</h3>
                  </div>

                  <div className="grid gap-2">
                    <label className="meta text-xs">AGENCY/PLANNER NAME</label>
                    <input className="border rounded px-3 py-2" required placeholder="Agency or planner name" />
                  </div>
                  <div className="grid gap-2">
                    <label className="meta text-xs">CONTACT PERSON</label>
                    <input className="border rounded px-3 py-2" required placeholder="Contact person name" />
                  </div>
                  <div className="grid gap-2">
                    <label className="meta text-xs">EMAIL</label>
                    <input type="email" className="border rounded px-3 py-2" required placeholder="you@agency.com" />
                  </div>
                  <div className="grid gap-2">
                    <label className="meta text-xs">PHONE</label>
                    <input type="tel" className="border rounded px-3 py-2" required placeholder="+91 ..." />
                  </div>
                  <div className="grid gap-2">
                    <label className="meta text-xs">EVENT DATES</label>
                    <input className="border rounded px-3 py-2" placeholder="e.g., 12–14 Nov 2026" />
                  </div>
                  <div className="grid gap-2">
                    <label className="meta text-xs">DESTINATION</label>
                    <input className="border rounded px-3 py-2" placeholder="City, Country" />
                  </div>
                  <div className="grid gap-2 md:col-span-2">
                    <label className="meta text-xs">PROJECT DETAILS</label>
                    <textarea className="border rounded px-3 py-2 min-h-32" placeholder="Share Brief" />
                  </div>
                  <div className="md:col-span-2">
                    <button className="cta inline-flex items-center px-6 py-3 rounded bg-primary text-primary-foreground hover:opacity-90">
                      Share Brief
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Contact Details */}
          <aside className="space-y-4">
            <div className="rounded border p-4">
              <div className="meta text-[12px] tracking-[0.22em] text-muted-foreground">CONTACT</div>
              <ul className="mt-2 space-y-2 text-sm">
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
            <div className="rounded border p-4">
              <div className="meta text-[12px] tracking-[0.22em] text-muted-foreground">OFFICE</div>
              <p className="mt-2 text-sm">
                Studio APC, 4th Floor, Fort Precinct,
                <br />
                Mumbai, MH 400001
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  )
}
