import { WaitlistForm } from "./waitlist-form"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 blur-[100px]" />
      
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6">
            Obligatoire dès septembre 2026
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            La facturation électronique{" "}
            <span className="text-primary">simple</span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Créez des factures conformes Factur-X sans vous ruiner.
            <br className="hidden sm:block" />
            À partir de <span className="font-semibold text-foreground">9€/mois</span>.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="w-full max-w-sm">
              <WaitlistForm />
            </div>
            <p className="text-sm text-muted-foreground">
              +500 micro-entrepreneurs inscrits
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
