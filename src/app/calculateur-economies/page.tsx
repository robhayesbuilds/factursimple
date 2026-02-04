import type { Metadata } from "next";
import { IconPigMoney, IconCheck, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SavingsCalculator } from "./_components/savings-calculator";

export const metadata: Metadata = {
  title: "Calculateur d'Économies Facturation | FacturSimple vs Pennylane, Tiime",
  description:
    "Calculez combien vous pouvez économiser en passant à FacturSimple. Comparez avec Pennylane, Tiime, Indy, Freebe et d'autres solutions de facturation.",
  keywords: [
    "comparatif logiciel facturation",
    "économie facturation",
    "Pennylane vs FacturSimple",
    "Tiime vs FacturSimple",
    "facturation auto-entrepreneur pas cher",
    "logiciel facturation prix",
  ],
  openGraph: {
    title: "Calculateur d'Économies | FacturSimple",
    description:
      "Comparez le coût de votre solution actuelle avec FacturSimple",
    type: "website",
  },
};

export default function CalculateurEconomiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-900 dark:text-green-300 mb-4">
            <IconPigMoney className="h-4 w-4" />
            Calculateur gratuit
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Combien pouvez-vous{" "}
            <span className="text-green-600">économiser</span> ?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comparez votre solution de facturation actuelle avec FacturSimple
            et découvrez vos économies potentielles.
          </p>
        </div>

        {/* Calculator */}
        <div className="max-w-3xl mx-auto">
          <SavingsCalculator />
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Plus de 60 auto-entrepreneurs nous font déjà confiance
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <IconCheck className="h-4 w-4 text-green-600" />
              Conforme Sept 2026
            </div>
            <div className="flex items-center gap-2 text-sm">
              <IconCheck className="h-4 w-4 text-green-600" />
              Format Factur-X
            </div>
            <div className="flex items-center gap-2 text-sm">
              <IconCheck className="h-4 w-4 text-green-600" />
              Données hébergées en France
            </div>
          </div>
        </div>

        {/* Other tools */}
        <div className="mt-16 pt-8 border-t">
          <h2 className="text-2xl font-bold text-center mb-8">
            Nos autres outils gratuits
          </h2>
          <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
            <Link
              href="/generateur-facture"
              className="p-4 rounded-lg border hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
            >
              <h3 className="font-semibold mb-2">📄 Générateur de factures</h3>
              <p className="text-sm text-muted-foreground">
                Créez des factures conformes 2026 gratuitement
              </p>
            </Link>
            <Link
              href="/generateur-devis"
              className="p-4 rounded-lg border hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
            >
              <h3 className="font-semibold mb-2">📋 Générateur de devis</h3>
              <p className="text-sm text-muted-foreground">
                Devis professionnels avec calcul automatique
              </p>
            </Link>
            <Link
              href="/checklist-2026"
              className="p-4 rounded-lg border hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
            >
              <h3 className="font-semibold mb-2">✅ Checklist Sept 2026</h3>
              <p className="text-sm text-muted-foreground">
                Vérifiez votre conformité e-invoicing
              </p>
            </Link>
            <Link
              href="/calculateur-penalites"
              className="p-4 rounded-lg border hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
            >
              <h3 className="font-semibold mb-2">⚠️ Calculateur pénalités</h3>
              <p className="text-sm text-muted-foreground">
                Calculez les pénalités de retard de paiement
              </p>
            </Link>
            <Link
              href="/calculateur-tva"
              className="p-4 rounded-lg border hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
            >
              <h3 className="font-semibold mb-2">🧮 Calculateur TVA</h3>
              <p className="text-sm text-muted-foreground">
                Vérifiez votre statut TVA auto-entrepreneur
              </p>
            </Link>
            <Link
              href="/blog"
              className="p-4 rounded-lg border hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
            >
              <h3 className="font-semibold mb-2">📚 Blog & guides</h3>
              <p className="text-sm text-muted-foreground">
                Articles sur la facturation électronique
              </p>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">
                Comment sont calculées les économies ?
              </h3>
              <p className="text-muted-foreground">
                Nous comparons le coût annuel de votre solution actuelle avec
                l&apos;offre FacturSimple adaptée à votre volume de factures. Le gain
                de temps est valorisé à 25€/heure (tarif freelance moyen).
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                FacturSimple est-il vraiment moins cher que Pennylane ?
              </h3>
              <p className="text-muted-foreground">
                Oui. Pennylane commence à 19€/mois avec comptabilité intégrée.
                Si vous n&apos;avez besoin que de facturation, FacturSimple est plus
                adapté et moins cher (gratuit jusqu&apos;à 5 factures/mois, puis
                9€/mois).
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Est-ce que FacturSimple sera conforme à la réforme 2026 ?
              </h3>
              <p className="text-muted-foreground">
                Oui. FacturSimple génère des factures au format Factur-X,
                conforme aux exigences de la réforme de septembre 2026. Nous
                travaillons avec une Plateforme de Dématérialisation Partenaire
                (PDP) agréée.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Puis-je migrer mes données depuis un autre logiciel ?
              </h3>
              <p className="text-muted-foreground">
                Oui. Nous proposons un import de vos clients et factures depuis
                CSV, Excel, ou directement depuis Pennylane, Tiime et Freebe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
