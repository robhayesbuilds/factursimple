import { Button } from "@/components/ui/button"
import { IconCheck } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Solo",
    price: "9",
    description: "Pour les auto-entrepreneurs",
    features: [
      "30 factures/mois",
      "Format Factur-X",
      "E-reporting auto",
      "Support email",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "19",
    description: "Pour les micro-entreprises actives",
    features: [
      "Factures illimitées",
      "Devis et avoirs",
      "Suivi des paiements",
      "Support prioritaire",
    ],
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section id="tarifs" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Tarifs simples
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pas de frais cachés. Pennylane = 99€. Nous = 9€.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-2xl border p-8",
                plan.popular && "border-primary bg-primary/5"
              )}
            >
              {plan.popular && (
                <p className="text-sm font-medium text-primary">Populaire</p>
              )}
              <h3 className="mt-2 text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              <p className="mt-6">
                <span className="text-4xl font-bold">{plan.price}€</span>
                <span className="text-muted-foreground">/mois</span>
              </p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <IconCheck className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                Rejoindre la liste
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
