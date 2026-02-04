import type { Metadata } from "next";
import { TVACalculator } from "./_components/tva-calculator";
import {
  IconReceipt,
  IconFileText,
  IconChecklist,
} from "@tabler/icons-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calculateur TVA Auto-Entrepreneur 2026 | Seuils et Franchise",
  description:
    "Calculez gratuitement si vous êtes en franchise de TVA ou assujetti. Vérifiez vos seuils TVA auto-entrepreneur 2026 et obtenez la mention à afficher sur vos factures.",
  keywords: [
    "calculateur TVA auto-entrepreneur",
    "seuil TVA 2026",
    "franchise TVA micro-entreprise",
    "TVA auto-entrepreneur",
    "seuil franchise base TVA",
    "calcul TVA freelance",
  ],
  openGraph: {
    title: "Calculateur TVA Auto-Entrepreneur | FacturSimple",
    description:
      "Vérifiez gratuitement si vous êtes en franchise de TVA ou assujetti selon votre CA.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function CalculateurTVAPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 text-sm font-medium mb-4">
            🧮 Outil 100% gratuit
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Calculateur TVA{" "}
            <span className="text-green-600">Auto-Entrepreneur</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Êtes-vous en franchise de TVA ou assujetti ? Calculez votre situation
            en fonction de votre chiffre d&apos;affaires et obtenez la mention légale
            à afficher sur vos factures.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="px-4 pb-12">
        <div className="container mx-auto max-w-4xl">
          <TVACalculator />
        </div>
      </section>

      {/* Other Free Tools */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8">
            Nos autres outils gratuits
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/generateur-facture"
              className="p-6 rounded-xl bg-background border hover:border-primary transition-colors group"
            >
              <IconReceipt className="h-8 w-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Générateur de Factures</h3>
              <p className="text-sm text-muted-foreground">
                Créez des factures conformes 2026 avec PDF téléchargeable
              </p>
            </Link>
            <Link
              href="/generateur-devis"
              className="p-6 rounded-xl bg-background border hover:border-primary transition-colors group"
            >
              <IconFileText className="h-8 w-8 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Générateur de Devis</h3>
              <p className="text-sm text-muted-foreground">
                Créez des devis professionnels avec remises et acompte
              </p>
            </Link>
            <Link
              href="/checklist-2026"
              className="p-6 rounded-xl bg-background border hover:border-primary transition-colors group"
            >
              <IconChecklist className="h-8 w-8 text-amber-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Checklist Sept 2026</h3>
              <p className="text-sm text-muted-foreground">
                Vérifiez si vous êtes prêt pour la facturation électronique
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Questions fréquentes sur la TVA
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="font-semibold mb-2">
                Qu&apos;est-ce que la franchise en base de TVA ?
              </h3>
              <p className="text-muted-foreground">
                La franchise en base de TVA est un régime qui dispense les
                auto-entrepreneurs de facturer et de déclarer la TVA, à condition
                que leur chiffre d&apos;affaires reste sous certains seuils.
                Vous ne collectez pas la TVA mais ne pouvez pas non plus la récupérer
                sur vos achats.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="font-semibold mb-2">
                Que se passe-t-il si je dépasse le seuil ?
              </h3>
              <p className="text-muted-foreground">
                Si vous dépassez le seuil de franchise (36 800 € services / 91 900 € vente)
                mais restez sous le seuil majoré, vous gardez la franchise pour l&apos;année
                en cours. Mais si vous dépassez de nouveau l&apos;année suivante, vous devenez
                assujetti. Si vous dépassez le seuil majoré, vous êtes immédiatement assujetti.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="font-semibold mb-2">
                Quelle mention mettre sur mes factures ?
              </h3>
              <p className="text-muted-foreground">
                Si vous êtes en franchise de TVA, vous devez obligatoirement mentionner
                sur toutes vos factures : <strong>&quot;TVA non applicable, art. 293 B du CGI&quot;</strong>.
                Cette mention est légalement requise et son absence peut entraîner une amende.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="font-semibold mb-2">
                Puis-je opter pour la TVA volontairement ?
              </h3>
              <p className="text-muted-foreground">
                Oui, même si vous êtes sous les seuils, vous pouvez opter pour l&apos;assujettissement
                à la TVA. C&apos;est intéressant si vos clients sont des entreprises (qui récupèrent
                la TVA) et si vous avez des achats importants. L&apos;option est valable 2 ans minimum.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="font-semibold mb-2">
                Et la facturation électronique 2026 ?
              </h3>
              <p className="text-muted-foreground">
                À partir de septembre 2026, toutes les entreprises (y compris auto-entrepreneurs)
                devront pouvoir recevoir des factures électroniques au format Factur-X.
                L&apos;émission devient obligatoire en septembre 2027 pour les micro-entreprises.
                La mention TVA reste obligatoire sur les factures électroniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Prêt pour septembre 2026 ?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Rejoignez notre liste d&apos;attente pour être notifié du lancement de
            FacturSimple, la solution de facturation électronique la plus simple
            pour les auto-entrepreneurs.
          </p>
          <Link
            href="/#waitlist"
            className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Rejoindre la liste d&apos;attente
          </Link>
        </div>
      </section>
    </main>
  );
}
