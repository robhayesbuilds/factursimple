import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    <section id="tarifs" className="bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">Tarifs</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple et transparent
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Pennylane = 99€. Nous = 9€. Sans surprise.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 lg:grid-cols-2">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative rounded-3xl transition-all duration-300",
                plan.popular 
                  ? "border-2 border-primary bg-gradient-to-b from-primary/5 to-transparent shadow-xl shadow-primary/10" 
                  : "hover:shadow-lg"
              )}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4">
                  Populaire
                </Badge>
              )}
              <CardHeader className="pb-4 pt-8">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-2xl font-semibold text-muted-foreground">€</span>
                  <span className="ml-1 text-muted-foreground">/mois</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                        <IconCheck className="h-3 w-3 text-primary" stroke={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  className={cn(
                    "w-full rounded-xl",
                    plan.popular && "shadow-lg shadow-primary/20"
                  )}
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Rejoindre la liste
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
