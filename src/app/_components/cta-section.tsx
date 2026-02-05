"use client"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="waitlist" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Prêt pour 2026 ?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Rejoignez la liste d&apos;attente. Lancement prévu été 2026.
          </p>
          <Button
            size="lg"
            className="mt-8"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Rejoindre la liste
          </Button>
        </div>
      </div>
    </section>
  )
}
