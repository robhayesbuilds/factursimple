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
    title: "Factures Factur-X",
    description:
      "Créez des factures conformes en quelques clics. PDF lisible + données structurées.",
  },
  {
    icon: IconCloudUpload,
    title: "E-reporting automatique",
    description:
      "Vos données transmises automatiquement à l'administration. Zéro action requise.",
  },
  {
    icon: IconDeviceMobile,
    title: "Mobile-first",
    description:
      "Créez et envoyez vos factures depuis votre téléphone, où que vous soyez.",
  },
  {
    icon: IconBolt,
    title: "Réception incluse",
    description:
      "Recevez les factures électroniques de vos fournisseurs dès sept 2026.",
  },
  {
    icon: IconShieldLock,
    title: "Stockage sécurisé",
    description:
      "Vos factures archivées 10 ans conformément à la loi. Hébergement en France.",
  },
  {
    icon: IconTargetArrow,
    title: "Sans comptable",
    description:
      "Interface simple pour gérer seul. Pas besoin de formation ni d'expert.",
  },
]

export function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground">
          Tout ce dont vous avez besoin. Rien de plus.
        </h2>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Pas de fonctions inutiles. Juste la conformité, simplement.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="group border border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" stroke={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
