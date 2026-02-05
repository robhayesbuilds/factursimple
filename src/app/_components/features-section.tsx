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
    <section id="fonctionnalites" className="border-t bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Tout ce qu&apos;il faut. Rien de plus.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Concentrez-vous sur votre activité. On s&apos;occupe de la conformité.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" stroke={1.5} />
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
