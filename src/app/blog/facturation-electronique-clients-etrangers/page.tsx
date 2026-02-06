import { Metadata } from "next";
import Link from "next/link";
import { IconWorld, IconBuilding, IconReceipt, IconAlertTriangle, IconCheck, IconArrowRight, IconQuestionMark, IconFileInvoice } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Clients Étrangers et Facturation Électronique 2026 : Êtes-vous Concerné ?",
  description: "Vous travaillez avec des clients internationaux ? Découvrez si la réforme e-invoicing 2026 vous concerne : export, UE, plateformes étrangères, e-reporting.",
  keywords: ["facturation électronique clients étrangers", "export auto-entrepreneur 2026", "facture client UE", "freelance international France", "e-invoicing export"],
  openGraph: {
    title: "Clients Étrangers et Facturation Électronique 2026",
    description: "Freelance avec clients internationaux ? Comprenez vos obligations réelles.",
    type: "article",
    publishedTime: "2026-02-06",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">International</span>
              <span>•</span>
              <span>6 février 2026</span>
              <span>•</span>
              <span>10 min de lecture</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Clients Étrangers et Facturation Électronique 2026 : Êtes-vous Vraiment Concerné ?
            </h1>
            <p className="text-xl text-muted-foreground">
              Vous facturez des clients aux USA, en Allemagne ou via des plateformes internationales ? 
              <strong className="text-foreground"> Bonne nouvelle : vous n'êtes probablement PAS concerné par l'e-invoicing obligatoire.</strong> Explications claires.
            </p>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-12">
            <h2 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
              <IconCheck className="h-5 w-5" />
              TL;DR - Ce Que Vous Devez Retenir
            </h2>
            <ul className="space-y-2 text-green-700 dark:text-green-300">
              <li>✅ <strong>Clients hors France ?</strong> L'e-invoicing obligatoire ne vous concerne PAS</li>
              <li>✅ <strong>Plateformes étrangères (Upwork, Fiverr, etc.) ?</strong> Elles facturent à votre place, pas d'e-invoicing pour vous</li>
              <li>⚠️ <strong>Mais attention :</strong> L'e-reporting peut quand même s'appliquer (déclaration des transactions)</li>
              <li>⚠️ <strong>Factures fournisseurs FR :</strong> Vous devrez les recevoir en format électronique dès sept. 2026</li>
            </ul>
          </div>

          {/* Table of Contents */}
          <div className="bg-muted/30 rounded-xl p-6 mb-12">
            <h2 className="font-semibold mb-4">Sommaire</h2>
            <ol className="space-y-2 text-muted-foreground">
              <li><a href="#regle-base" className="hover:text-primary">1. La règle de base : territorialité</a></li>
              <li><a href="#scenarios" className="hover:text-primary">2. Êtes-vous concerné ? (5 scénarios courants)</a></li>
              <li><a href="#plateformes" className="hover:text-primary">3. Cas des plateformes internationales</a></li>
              <li><a href="#e-reporting" className="hover:text-primary">4. E-reporting : ce qui s'applique quand même</a></li>
              <li><a href="#fournisseurs" className="hover:text-primary">5. Vos factures fournisseurs (France vs étranger)</a></li>
              <li><a href="#checklist" className="hover:text-primary">6. Checklist selon votre situation</a></li>
              <li><a href="#faq" className="hover:text-primary">7. FAQ</a></li>
            </ol>
          </div>

          {/* Section 1 */}
          <section id="regle-base" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconWorld className="h-7 w-7 text-primary" />
              1. La Règle de Base : La Territorialité
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                La réforme de facturation électronique 2026 ne s'applique qu'aux <strong>transactions entre entreprises françaises</strong> (B2B domestique).
              </p>
              <p>
                Si votre client est situé hors de France (particulier ou entreprise), <strong>l'e-invoicing obligatoire ne s'applique pas</strong>.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg my-6">
                <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📌 Définition simple :</p>
                <ul className="text-blue-700 dark:text-blue-300 text-base">
                  <li><strong>E-invoicing</strong> = Émettre/recevoir des factures via plateforme agréée (Factur-X, etc.)</li>
                  <li><strong>E-reporting</strong> = Déclarer les transactions à l'administration (même sans e-facture)</li>
                </ul>
              </div>

              <p>
                Les freelances travaillant à l'international sont souvent dans la confusion car ils entendent "facturation électronique obligatoire" sans comprendre que ça ne les concerne pas (ou peu).
              </p>
            </div>
          </section>

          {/* Section 2 - Scenarios */}
          <section id="scenarios" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconBuilding className="h-7 w-7 text-primary" />
              2. Êtes-vous Concerné ? (5 Scénarios Courants)
            </h2>
            
            <div className="space-y-6">
              {/* Scenario 1 */}
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  ✅ Scénario 1 : Freelance 100% export (clients hors France)
                </h3>
                <p className="text-green-700 dark:text-green-300 mb-2">
                  <em>Ex : Développeur web avec clients aux USA, designer pour agences allemandes</em>
                </p>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• E-invoicing obligatoire : <strong>NON</strong></li>
                  <li>• E-reporting : <strong>OUI</strong> (déclaration des transactions à l'administration)</li>
                  <li>• Vous continuez à facturer comme avant (PDF classique accepté)</li>
                </ul>
              </div>

              {/* Scenario 2 */}
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  ✅ Scénario 2 : Travail via plateforme étrangère (Upwork, Fiverr, Malt...)
                </h3>
                <p className="text-green-700 dark:text-green-300 mb-2">
                  <em>Ex : La plateforme facture le client final et vous verse votre part</em>
                </p>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• E-invoicing obligatoire : <strong>NON</strong> (la plateforme facture à votre place)</li>
                  <li>• E-reporting : <strong>OUI</strong> (vous devez déclarer vos revenus)</li>
                  <li>• Gardez bien vos relevés de la plateforme pour justifier votre CA</li>
                </ul>
              </div>

              {/* Scenario 3 */}
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                  ⚠️ Scénario 3 : Mix clients France + international
                </h3>
                <p className="text-amber-700 dark:text-amber-300 mb-2">
                  <em>Ex : 60% clients français entreprises, 40% clients étrangers</em>
                </p>
                <ul className="text-amber-700 dark:text-amber-300 text-sm space-y-1">
                  <li>• E-invoicing : <strong>OUI pour les clients B2B français</strong> (dès sept. 2027)</li>
                  <li>• E-invoicing : NON pour les clients étrangers</li>
                  <li>• E-reporting : OUI pour tout</li>
                  <li>• Vous aurez besoin d'un logiciel qui gère les deux</li>
                </ul>
              </div>

              {/* Scenario 4 */}
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  ✅ Scénario 4 : Clients particuliers (B2C) uniquement
                </h3>
                <p className="text-green-700 dark:text-green-300 mb-2">
                  <em>Ex : Prof de yoga, coach personnel, artisan pour particuliers</em>
                </p>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• E-invoicing obligatoire : <strong>NON</strong> (B2C = hors scope)</li>
                  <li>• E-reporting : <strong>OUI</strong> (déclarer les ventes B2C)</li>
                  <li>• Pas besoin de format Factur-X pour les particuliers</li>
                </ul>
              </div>

              {/* Scenario 5 */}
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                  ❌ Scénario 5 : Clients entreprises françaises (B2B France)
                </h3>
                <p className="text-red-700 dark:text-red-300 mb-2">
                  <em>Ex : Consultant pour PME françaises, prestataire pour agences parisiennes</em>
                </p>
                <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                  <li>• E-invoicing obligatoire : <strong>OUI</strong></li>
                  <li>• Réception : dès septembre 2026</li>
                  <li>• Émission : dès septembre 2027 (micro-entreprises)</li>
                  <li>• Vous devez vous équiper d'un logiciel compatible</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 - Plateformes */}
          <section id="plateformes" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconFileInvoice className="h-7 w-7 text-primary" />
              3. Cas des Plateformes Internationales
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Si vous travaillez via une <strong>plateforme étrangère</strong> (Upwork, Fiverr, Toptal, 99designs, etc.), 
                vous n'émettez généralement <strong>aucune facture directe</strong> à vos clients.
              </p>
              <p>
                La plateforme facture le client final, prélève sa commission, et vous verse le reste. 
                <strong> Vous n'êtes pas concerné par l'e-invoicing obligatoire</strong> pour ces revenus.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Plateformes françaises (Malt, Comet...)</h3>
              <p>
                Pour les plateformes françaises comme <strong>Malt</strong> ou <strong>Comet</strong>, c'est différent :
              </p>
              <ul>
                <li>Si elles émettent les factures pour vous → vous n'émettez rien (pas d'e-invoicing direct)</li>
                <li>Si vous facturez directement le client via la plateforme → e-invoicing obligatoire s'applique pour clients FR B2B</li>
                <li>Vérifiez les CGU de votre plateforme pour comprendre qui facture quoi</li>
              </ul>

              <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg my-6">
                <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ Attention aux justificatifs</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  Même sans facture, vous devez pouvoir justifier votre chiffre d'affaires auprès de l'URSSAF. 
                  Gardez tous vos relevés de plateforme, paiements reçus, et confirmations de mission.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 - E-reporting */}
          <section id="e-reporting" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconReceipt className="h-7 w-7 text-primary" />
              4. E-Reporting : Ce Qui S'Applique Quand Même
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Même si vous n'êtes pas concerné par l'e-invoicing, vous serez probablement concerné par <strong>l'e-reporting</strong>.
              </p>
              <p>
                L'e-reporting consiste à <strong>déclarer les données de vos transactions</strong> à l'administration, 
                même quand la facture elle-même n'est pas au format électronique.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Qui est concerné par l'e-reporting ?</h3>
              <ul>
                <li><strong>Ventes B2C</strong> (à des particuliers) → e-reporting obligatoire</li>
                <li><strong>Ventes à l'export</strong> (clients hors France) → e-reporting obligatoire</li>
                <li><strong>Prestations pour particuliers étrangers</strong> → e-reporting obligatoire</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Calendrier de l'e-reporting</h3>
              <ul>
                <li><strong>Septembre 2027 :</strong> Obligation pour les micro-entreprises et TPE</li>
                <li>Déclaration via plateforme agréée (PDP) ou portail public (PPF)</li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg my-6">
                <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 En pratique</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Un bon logiciel de facturation gérera automatiquement l'e-reporting pour vous. 
                  Vous n'aurez pas à faire de déclaration manuelle supplémentaire.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 - Fournisseurs */}
          <section id="fournisseurs" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconAlertTriangle className="h-7 w-7 text-primary" />
              5. Vos Factures Fournisseurs (Ce Qui Change Vraiment)
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Voici ce qui vous concerne <strong>vraiment</strong> dès septembre 2026, même avec des clients 100% internationaux :
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Fournisseurs français = réception électronique obligatoire</h3>
              <p>
                Si vous avez des fournisseurs français (hébergement web, comptable, assurance, coworking, etc.), 
                ils vous enverront leurs factures au format électronique dès septembre 2026.
              </p>
              <p>
                <strong>Vous devez être en mesure de les recevoir</strong> via une plateforme agréée ou votre logiciel de facturation.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Fournisseurs étrangers = pas de changement</h3>
              <p>
                AWS, GitHub, Vercel, Adobe, Notion... Ces factures resteront en PDF classique. 
                La réforme française ne s'applique pas aux entreprises étrangères.
              </p>

              <div className="bg-muted/50 rounded-lg p-6 my-6">
                <h4 className="font-semibold mb-4">Exemples concrets :</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-green-600 dark:text-green-400 mb-2">Fournisseurs étrangers (pas de changement)</p>
                    <ul className="text-sm space-y-1">
                      <li>• AWS, Google Cloud, Azure</li>
                      <li>• GitHub, Vercel, Netlify</li>
                      <li>• Adobe Creative Cloud</li>
                      <li>• Notion, Figma, Slack</li>
                      <li>• Upwork, Fiverr (commissions)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-amber-600 dark:text-amber-400 mb-2">Fournisseurs français (e-facture dès 2026)</p>
                    <ul className="text-sm space-y-1">
                      <li>• OVH, Scaleway, Infomaniak</li>
                      <li>• Expert-comptable français</li>
                      <li>• Assurance pro</li>
                      <li>• Coworking, téléphonie FR</li>
                      <li>• Matériel acheté en France</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 - Checklist */}
          <section id="checklist" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconCheck className="h-7 w-7 text-primary" />
              6. Checklist Selon Votre Situation
            </h2>
            
            <div className="space-y-6">
              {/* 100% international */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Si vous êtes 100% international (aucun client B2B français) :</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Continuez à facturer normalement (PDF classique OK)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">☐</span>
                    <span>Préparez-vous pour l'e-reporting (septembre 2027)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">☐</span>
                    <span>Vérifiez que vous pouvez recevoir des e-factures de fournisseurs FR (septembre 2026)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Gardez vos justificatifs (relevés plateformes, confirmations)</span>
                  </li>
                </ul>
              </div>

              {/* Mix FR + international */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Si vous avez des clients B2B français ET internationaux :</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">☐</span>
                    <span>Choisissez un logiciel qui gère e-invoicing ET facturation classique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">☐</span>
                    <span>Réception e-factures : prêt pour septembre 2026</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">☐</span>
                    <span>Émission e-factures (clients FR B2B) : prêt pour septembre 2027</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">☐</span>
                    <span>E-reporting (clients étrangers + B2C) : prêt pour septembre 2027</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IconQuestionMark className="h-7 w-7 text-primary" />
              7. FAQ - Questions Fréquentes
            </h2>
            
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="font-semibold mb-2">Je travaille via Upwork avec des clients américains. Suis-je concerné ?</h3>
                <p className="text-muted-foreground">
                  <strong>Non, pas pour l'e-invoicing.</strong> Upwork facture vos clients à votre place. 
                  Vous devrez faire de l'e-reporting (déclarer ces revenus) à partir de septembre 2027, 
                  mais vous n'avez pas besoin d'émettre de factures au format Factur-X.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-semibold mb-2">J'ai des clients en Allemagne, Belgique, Suisse. Est-ce différent de l'export hors UE ?</h3>
                <p className="text-muted-foreground">
                  <strong>Non, c'est pareil.</strong> Que vos clients soient en UE ou hors UE, s'ils ne sont pas en France, 
                  l'e-invoicing français ne s'applique pas. Attention cependant aux règles de TVA intracommunautaire 
                  (autoliquidation, déclaration européenne de services, etc.).
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-semibold mb-2">Je reçois des factures d'AWS (Irlande). Dois-je les recevoir en Factur-X ?</h3>
                <p className="text-muted-foreground">
                  <strong>Non.</strong> AWS est une entreprise irlandaise, pas française. La réforme française 
                  ne s'applique pas aux fournisseurs étrangers. Vous continuerez à recevoir des PDF classiques.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-semibold mb-2">J'ai un comptable français. Comment va-t-il m'envoyer ses factures ?</h3>
                <p className="text-muted-foreground">
                  À partir de septembre 2026, votre comptable devra vous envoyer ses factures au format électronique 
                  (Factur-X ou via plateforme). Vous devrez être capable de les recevoir, soit via un logiciel, 
                  soit via le portail public gratuit (PPF).
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-semibold mb-2">Qu'est-ce que l'e-reporting exactement ?</h3>
                <p className="text-muted-foreground">
                  L'e-reporting consiste à déclarer les données de vos transactions (montant, date, type) 
                  à l'administration fiscale, même quand la facture elle-même n'est pas au format électronique. 
                  Cela concerne les ventes B2C et les ventes à l'export. Un bon logiciel de facturation 
                  le fera automatiquement pour vous.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-semibold mb-2">Dois-je m'équiper d'un logiciel maintenant si je suis 100% export ?</h3>
                <p className="text-muted-foreground">
                  <strong>Pas urgent, mais recommandé.</strong> Vous aurez besoin d'un outil pour l'e-reporting en 2027, 
                  et pour recevoir les e-factures de vos fournisseurs français dès 2026. Autant vous équiper 
                  d'un outil simple maintenant plutôt que de courir en dernière minute.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Prêt à Simplifier Votre Facturation ?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              FacturSimple gère tout : clients français (e-invoicing), clients internationaux (PDF classique), 
              e-reporting automatique. Un seul outil, toutes vos situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/outils/generateur-facture"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Créer une facture gratuite
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                href="/blog/facturation-electronique-auto-entrepreneur"
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Guide complet AE 2026
              </Link>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-16">
            <h2 className="text-xl font-bold mb-6">Articles Connexes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/e-reporting-micro-entreprise" className="group block p-6 border rounded-xl hover:border-primary transition-colors">
                <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">E-Reporting 2026 : Ce Que les Micro-Entreprises Doivent Savoir</h3>
                <p className="text-sm text-muted-foreground">Tout sur l'e-reporting pour les ventes B2C et à l'export.</p>
              </Link>
              <Link href="/blog/facturation-electronique-developpeur-freelance" className="group block p-6 border rounded-xl hover:border-primary transition-colors">
                <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">Guide Développeur Freelance 2026</h3>
                <p className="text-sm text-muted-foreground">Clients via plateformes, international, AWS... tout ce qu'un dev doit savoir.</p>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
