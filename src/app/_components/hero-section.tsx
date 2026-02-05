import { WaitlistForm } from "./waitlist-form"
import { IconAlertTriangle, IconUsers } from "@tabler/icons-react"

export function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Urgency Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-700 dark:text-amber-300">
          <IconAlertTriangle className="h-4 w-4" />
          Obligatoire dès septembre 2026
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          La facturation électronique
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> enfin simple</span>
          <br />
          pour les micro-entrepreneurs
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Soyez conforme à la réforme 2026 sans vous ruiner. Créez des factures
          Factur-X en quelques clics, à partir de <span className="font-semibold text-foreground">9€/mois</span>.
        </p>

        <div className="mx-auto mb-8 max-w-md">
          <WaitlistForm />
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <IconUsers className="h-4 w-4" />
          <span>Rejoignez +500 micro-entrepreneurs qui préparent déjà leur conformité</span>
        </div>
      </div>
    </section>
  )
}
