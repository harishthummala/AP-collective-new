"use client"

import { useState } from "react"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  return (
    <section id="contact" className="section bg-background">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-8">
          <p className="meta text-xs text-primary">Contact</p>
          <h3 className="font-serif text-3xl md:text-4xl">Begin the Conversation</h3>
        </div>

        {status === "sent" ? (
          <div className="border rounded-md p-6 text-center">
            <p>Thank you. We’ll be in touch shortly.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setStatus("sent")
            }}
            className="grid gap-4"
          >
            <label className="block">
              <span className="meta text-[11px]">Full Name</span>
              <input
                className="mt-2 w-full rounded-md border bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </label>
            <label className="block">
              <span className="meta text-[11px]">Email</span>
              <input
                type="email"
                className="mt-2 w-full rounded-md border bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </label>
            <label className="block">
              <span className="meta text-[11px]">Event Details</span>
              <textarea
                className="mt-2 w-full rounded-md border bg-white px-3 py-2 min-h-32 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Date, location, planner, anything you’d like to share."
              />
            </label>
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-70">Response within 48 hours</span>
              <button
                className="cta inline-flex items-center justify-center rounded-md bg-primary px-5 py-2 text-primary-foreground hover:bg-[#6b1b1b] transition-colors"
                type="submit"
              >
                Inquire
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
