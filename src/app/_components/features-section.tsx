import { Card, CardContent } from "@/components/ui/card"
import {
  IconFileInvoice,
  IconCloudUpload,
  IconDeviceMobile,
  IconBolt,
  IconShieldLock,
  IconTargetArrow,
} from "@tabler/icons-react"

const features = [
  {
    icon: IconFileInvoice,
    title: "Factur-X natif",
    description: "PDF + données structurées. Conforme à la réforme.",
  },
  {
    icon: IconCloudUpload,
    title: "E-reporting auto",
    description: "Transmission automatique à l'administration.",
  },
  {
    icon: IconDeviceMobile,
    title: "Mobile-first",
    description: "Créez vos factures depuis votre téléphone.",
  },
  {
    icon: IconBolt,
    title: "Réception 2026",
    description: "Prêt pour recevoir les e-factures fournisseurs.",
  },
  {
    icon: IconShieldLock,
    title: "Stockage 10 ans",
    description: "Archivage conforme. Hébergé en France.",
  },
  {
    icon: IconTargetArrow,
    title: "Sans comptable",
    description: "Interface simple. Pas besoin d'expert.",
  },
]

export function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">Fonctionnalités</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Tout ce qu&apos;il faut
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Concentrez-vous sur votre activité. On gère la conformité.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card 
                key={feature.title} 
                className="group relative overflow-hidden rounded-3xl border-0 bg-gradient-to-b from-muted/50 to-muted/20 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                    <feature.icon className="h-6 w-6 text-primary" stroke={1.5} />
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
