"use client"

import type React from "react"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/next"

export default function ClientLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const searchParams = useSearchParams()

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      <Analytics />
    </>
  )
}
