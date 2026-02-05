"use client"

import { Button } from "@/components/ui/button"
import { IconArrowUp, IconRocket } from "@tabler/icons-react"

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-primary-foreground">
            <IconRocket className="h-4 w-4" />
            Lancement prévu : été 2026
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Prêt à simplifier votre conformité ?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            Rejoignez la liste d&apos;attente et soyez parmi les premiers à
            accéder à FacturSimple avant la date limite de septembre 2026.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="gap-2 text-base"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Rejoindre la liste d&apos;attente
            <IconArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
