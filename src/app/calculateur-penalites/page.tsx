import { Metadata } from "next";
import { PenaltyCalculator } from "./_components/penalty-calculator";

export const metadata: Metadata = {
  title: "Calculateur de Pénalités de Retard | FacturSimple",
  description:
    "Calculez gratuitement les pénalités de retard sur vos factures impayées. Taux légal 2026, indemnité forfaitaire 40€, et modèle d'email de relance inclus.",
  keywords: [
    "calculateur pénalités retard",
    "pénalités facture impayée",
    "indemnité forfaitaire 40€",
    "taux intérêt retard paiement",
    "relance facture impayée",
    "calcul pénalités retard facture",
  ],
  openGraph: {
    title: "Calculateur de Pénalités de Retard | FacturSimple",
    description:
      "Calculez les pénalités légales sur vos factures impayées : intérêts de retard + indemnité forfaitaire 40€.",
    type: "website",
  },
};

export default function PenaltyCalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <section className="container max-w-4xl mx-auto px-4 pt-12 pb-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Calculateur de{" "}
            <span className="text-orange-600">Pénalités de Retard</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculez automatiquement les intérêts de retard et l&apos;indemnité
            forfaitaire de recouvrement sur vos factures impayées.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="container max-w-4xl mx-auto px-4 pb-12">
        <PenaltyCalculator />
      </section>

      {/* Info Section */}
      <section className="bg-muted/30 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">
            Comprendre les pénalités de retard
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">
                📊 Taux d&apos;intérêt légal
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Le taux légal pour les pénalités de retard B2B est égal à{" "}
                <strong>3 fois le taux directeur de la BCE</strong>.
              </p>
              <p className="text-sm text-muted-foreground">
                En janvier 2026, avec un taux BCE de 3,15%, le taux légal est de{" "}
                <strong>9,45%</strong> annuel.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Vous pouvez appliquer un taux supérieur si prévu dans vos CGV
                (minimum : BCE + 10 points).
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">
                💰 Indemnité forfaitaire
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Depuis 2013, toute facture B2B en retard donne droit à une{" "}
                <strong>indemnité forfaitaire de 40€</strong> pour frais de
                recouvrement.
              </p>
              <p className="text-sm text-muted-foreground">
                Cette indemnité est due{" "}
                <strong>par facture</strong>, pas par jour de retard.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Base légale : Art. D441-5 du Code de commerce.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">
                📅 Délai de paiement légal
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Par défaut, le délai de paiement est de{" "}
                <strong>30 jours</strong> à compter de la date de réception de
                la facture.
              </p>
              <p className="text-sm text-muted-foreground">
                Des délais dérogatoires existent (45 jours fin de mois, 60 jours
                max) selon votre secteur.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Les pénalités courent dès le lendemain de la date d&apos;échéance.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">
                ✉️ Obligation de mention
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Depuis 2013, vos factures doivent{" "}
                <strong>obligatoirement mentionner</strong> le taux de pénalités
                applicable et l&apos;indemnité forfaitaire.
              </p>
              <p className="text-sm text-muted-foreground">
                L&apos;absence de mention peut entraîner une amende de{" "}
                <strong>75 000€</strong> pour une personne physique.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 bg-primary/5 rounded-lg p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">
              Évitez les retards de paiement
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Avec FacturSimple, créez des factures conformes avec mentions
              légales automatiques et suivez vos paiements en temps réel.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/generateur-facture"
                className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Créer une facture gratuite
              </a>
              <a
                href="/#waitlist"
                className="inline-flex items-center justify-center px-6 py-2 border border-primary text-primary rounded-md font-medium hover:bg-primary/5 transition-colors"
              >
                Rejoindre la liste d&apos;attente
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
        <div className="space-y-4">
          <details className="bg-background rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer">
              Puis-je appliquer des pénalités à un particulier (B2C) ?
            </summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Non, l&apos;indemnité forfaitaire de 40€ et les pénalités légales
              s&apos;appliquent uniquement aux transactions entre
              professionnels (B2B). Pour les particuliers, vous pouvez prévoir
              des pénalités dans vos conditions générales de vente, mais
              l&apos;indemnité forfaitaire n&apos;est pas applicable.
            </p>
          </details>

          <details className="bg-background rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer">
              Dois-je envoyer une mise en demeure avant d&apos;appliquer les
              pénalités ?
            </summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Non, les pénalités de retard sont exigibles de plein droit, sans
              qu&apos;un rappel soit nécessaire. Cependant, en pratique, il est
              recommandé d&apos;envoyer des relances (J+1, J+7, J+15) avant
              d&apos;appliquer formellement les pénalités, pour préserver la
              relation commerciale.
            </p>
          </details>

          <details className="bg-background rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer">
              Mon client refuse de payer les pénalités, que faire ?
            </summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Vous pouvez : (1) envoyer une mise en demeure par LRAR, (2)
              utiliser une procédure d&apos;injonction de payer (simple et
              rapide pour les montants inférieurs à 5 000€), (3) faire appel à
              une société de recouvrement, ou (4) saisir le tribunal de
              commerce. Les pénalités sont légalement dues, vous avez le droit
              de les réclamer.
            </p>
          </details>

          <details className="bg-background rounded-lg p-4 shadow-sm">
            <summary className="font-medium cursor-pointer">
              L&apos;indemnité de 40€ est-elle cumulable ?
            </summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Oui, l&apos;indemnité forfaitaire de 40€ est due pour{" "}
              <strong>chaque facture</strong> en retard. Si vous avez 3 factures
              impayées du même client, vous pouvez réclamer 3 × 40€ = 120€
              d&apos;indemnités forfaitaires, en plus des intérêts de retard sur
              chaque facture.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
