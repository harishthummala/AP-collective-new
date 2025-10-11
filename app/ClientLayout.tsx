"use client"

import { ReactNode } from "react"
import { useSearchParams } from "next/navigation"
import { Analytics } from "@vercel/analytics/next"

interface ClientLayoutProps {
  children: ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {

  return (
    <>
      {children}
      <Analytics />
    </>
  )
}
