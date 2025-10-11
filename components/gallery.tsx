"use client"

import { useState } from "react"

export function Gallery({ images }: { images: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setOpenIndex(i)}
            className="group relative overflow-hidden rounded-md"
            aria-label={`Open image ${i + 1}`}
          >
            <img
              src={src || "/placeholder.svg?height=400&width=300&query=gallery"}
              alt={`Gallery ${i + 1}`}
              className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setOpenIndex(null)}
        >
          <div className="relative max-w-5xl w-full">
            <img
              src={images[openIndex] || "/placeholder.svg?height=800&width=1200&query=gallery-large"}
              alt={`Large view ${openIndex + 1}`}
              className="w-full h-auto rounded-md"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                className="bg-primary text-primary-foreground px-3 py-1 rounded"
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenIndex((prev) => (prev! - 1 + images.length) % images.length)
                }}
              >
                Prev
              </button>
              <button
                className="bg-primary text-primary-foreground px-3 py-1 rounded"
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenIndex((prev) => (prev! + 1) % images.length)
                }}
              >
                Next
              </button>
              <button
                className="bg-white text-black px-3 py-1 rounded"
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenIndex(null)
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
