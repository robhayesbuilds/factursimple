import { WaitlistForm } from "./waitlist-form"
import { Badge } from "@/components/ui/badge"
import { IconClock, IconUsers } from "@tabler/icons-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-blue-500/10 to-transparent blur-3xl" />
      
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-8 gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium">
            <IconClock className="h-3.5 w-3.5" />
            Obligatoire dès septembre 2026
          </Badge>

          <h1 className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            La facturation électronique{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text">simple</span>
          </h1>
          
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Créez des factures conformes Factur-X sans vous ruiner.
            À partir de <span className="font-semibold text-foreground">9€/mois</span>.
          </p>

          <div className="mt-12">
            <div className="mx-auto max-w-lg rounded-2xl border bg-card/80 p-6 shadow-xl shadow-primary/5 backdrop-blur-sm">
              <WaitlistForm />
              <div className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
                <IconUsers className="h-4 w-4" />
                <span>Rejoignez +500 micro-entrepreneurs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
