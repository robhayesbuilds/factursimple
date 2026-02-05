"use client"

import { Button } from "@/components/ui/button"
import { IconArrowUp } from "@tabler/icons-react"

export function CTASection() {
  return (
    <section id="waitlist" className="relative overflow-hidden bg-muted/30 py-24">
      {/* Gradient orb */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
      
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">Lancement été 2026</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Prêt pour septembre 2026 ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Rejoignez la liste d&apos;attente et soyez parmi les premiers.
          </p>
          <Button
            size="lg"
            className="mt-8 rounded-full px-8"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Rejoindre maintenant
            <IconArrowUp className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
