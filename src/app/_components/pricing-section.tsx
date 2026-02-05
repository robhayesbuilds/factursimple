import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { IconCheck, IconSparkles } from "@tabler/icons-react"

const plans = [
  {
    name: "Solo",
    description: "Pour les auto-entrepreneurs",
    price: "9",
    popular: false,
    features: [
      "Jusqu'à 30 factures/mois",
      "Format Factur-X conforme",
      "E-reporting automatique",
      "Réception illimitée",
      "Support par email",
    ],
  },
  {
    name: "Pro",
    description: "Pour les micro-entreprises actives",
    price: "19",
    popular: true,
    features: [
      "Factures illimitées",
      "Tout du plan Solo",
      "Devis et avoirs",
      "Suivi des paiements",
      "Support prioritaire",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="tarifs" className="bg-muted/30 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground">
            Un prix juste pour les micro-entrepreneurs
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Pas de frais cachés. Pas de prix qui explose avec la croissance.
          </p>

          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={cn(
                  "relative overflow-hidden transition-all",
                  plan.popular 
                    ? "border-2 border-primary bg-primary text-primary-foreground shadow-xl" 
                    : "border border-border hover:border-primary/50 hover:shadow-lg"
                )}
              >
                {plan.popular && (
                  <div className="absolute -right-8 top-6 rotate-45 bg-amber-400 px-10 py-1 text-xs font-bold text-amber-900">
                    <IconSparkles className="mr-1 inline h-3 w-3" />
                    POPULAIRE
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription
                    className={cn(plan.popular && "text-primary-foreground/80")}
                  >
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-2xl font-semibold">€</span>
                    <span
                      className={cn(
                        "text-muted-foreground",
                        plan.popular && "text-primary-foreground/70"
                      )}
                    >
                      /mois
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <IconCheck 
                          className={cn(
                            "h-5 w-5 shrink-0",
                            plan.popular ? "text-primary-foreground" : "text-green-500"
                          )} 
                          stroke={2}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    size="lg"
                    variant={plan.popular ? "secondary" : "outline"}
                  >
                    {plan.popular ? "Rejoindre la liste d'attente" : "Bientôt disponible"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Comparez : Pennylane = <span className="text-destructive font-medium">99€/mois</span> • Tiime = <span className="text-orange-500 font-medium">39€/mois</span> • FacturSimple = <span className="text-green-600 font-semibold">9€/mois</span>
          </p>
        </div>
      </div>
    </section>
  )
}
