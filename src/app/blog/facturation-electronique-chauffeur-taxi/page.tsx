import Link from 'next/link'
import { Metadata } from 'next'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { IconCar, IconReceipt, IconAlertTriangle, IconCheck, IconArrowRight, IconArrowLeft, IconClock, IconCalculator } from "@tabler/icons-react"

export const metadata: Metadata = {
  title: 'Chauffeur de Taxi : Facturation Électronique 2026 | Guide Complet',
  description: 'Guide complet facturation électronique pour chauffeurs de taxi artisans et locataires. Notes de course, clients particuliers vs entreprises, G7/Uber et conformité 2026.',
}

export default function TaxiGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">
              FacturSimple
            </Link>
            <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
              <Link href="/#fonctionnalites" className="hover:text-primary transition-colors">Fonctionnalités</Link>
              <Link href="/#tarifs" className="hover:text-primary transition-colors">Tarifs</Link>
              <Link href="/blog" className="text-primary font-medium">Blog</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <Link 
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors"
          >
            <IconArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 border-0">
                Guide Métier
              </Badge>
              <span className="text-slate-500 flex items-center gap-1">
                <IconClock className="h-3.5 w-3.5" />
                12 min de lecture
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Chauffeur de Taxi : Facturation Électronique 2026
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Guide complet pour les chauffeurs de taxi artisans et locataires. Notes de course, tickets de caisse, clients entreprise et conformité septembre 2026.
            </p>
          </header>

          {/* Key Message */}
          <Card className="mb-12 border-yellow-200 bg-yellow-50 dark:border-yellow-900/50 dark:bg-yellow-900/20">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <IconCar className="h-8 w-8 text-yellow-600 dark:text-yellow-400 shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    🚕 Taxis : une situation particulière
                  </h3>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    <strong>90%+ de vos courses</strong> concernent des particuliers → vous n&apos;êtes <strong>PAS concerné</strong> par l&apos;e-invoicing B2B.
                    En revanche, vous aurez des obligations d&apos;<strong>e-reporting</strong> pour déclarer vos ventes B2C, et devrez recevoir les factures électroniques de vos fournisseurs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profession specifics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Comprendre votre situation de taxi
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Le métier de chauffeur de taxi a des spécificités importantes pour la facturation électronique :
            </p>
            
            <div className="grid gap-4 mb-8">
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    🎫 La note de course (ticket)
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Pour les particuliers, le ticket taximètre fait office de justificatif. Ce n&apos;est <strong>pas une facture</strong> au sens fiscal - donc pas concerné par l&apos;e-invoicing.
                    L&apos;équipement (taximètre, imprimante) reste inchangé.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    🏢 Les courses entreprise
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Quand une <strong>entreprise française</strong> demande une facture (hôtels, entreprises clientes régulières), 
                    vous entrez dans le champ de l&apos;e-invoicing B2B et devrez émettre des factures électroniques au format Factur-X.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    📱 Centrales et applications (G7, Taxis Bleus, Uber)
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Les centrales de réservation peuvent avoir des <strong>mandats de facturation</strong> pour vos courses.
                    Dans ce cas, c&apos;est elles qui gèrent la facturation aux entreprises clientes. Vérifiez votre contrat.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What's affected what's not */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Ce qui change vs ce qui ne change PAS
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* NOT affected */}
              <Card className="border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-900/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
                    <IconCheck className="h-5 w-5" />
                    PAS concerné (B2C)
                  </h3>
                  <ul className="space-y-3 text-sm text-green-700 dark:text-green-300">
                    <li className="flex items-start gap-2">
                      <IconCheck className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>Courses particuliers (90%+ de l&apos;activité)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>Notes de course / tickets taximètre</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>Courses touristes étrangers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>Paiements CB/espèces directement au client</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconCheck className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>Forfaits aéroport particuliers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Affected */}
              <Card className="border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-900/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-4 flex items-center gap-2">
                    <IconAlertTriangle className="h-5 w-5" />
                    CONCERNÉ (B2B)
                  </h3>
                  <ul className="space-y-3 text-sm text-amber-700 dark:text-amber-300">
                    <li className="flex items-start gap-2">
                      <IconAlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>Factures aux entreprises françaises</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconAlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>Comptes clients entreprise (mensuels)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconAlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>Contrats hôtels / agences de voyage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconAlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>Conventions avec établissements de santé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <IconAlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>Réception factures fournisseurs (essence, entretien...)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Taxi-specific scenarios */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Cas pratiques taxi
            </h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    🏨 Vous avez un contrat avec un hôtel
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                    L&apos;hôtel vous envoie régulièrement des clients et vous facturez mensuellement.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded p-3 text-sm">
                    <strong className="text-amber-800 dark:text-amber-200">→ CONCERNÉ :</strong>
                    <span className="text-amber-700 dark:text-amber-300"> Vos factures mensuelles à l&apos;hôtel devront être au format électronique Factur-X.</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    🏥 Transport de patients (CPAM)
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                    Vous êtes conventionné pour le transport sanitaire léger (TSL).
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3 text-sm">
                    <strong className="text-blue-800 dark:text-blue-200">→ CAS PARTICULIER :</strong>
                    <span className="text-blue-700 dark:text-blue-300"> La CPAM utilise déjà des circuits de facturation dématérialisés (Sesam-Vitale). Vérifiez avec votre CPAM les évolutions prévues.</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    📱 Vous travaillez via G7 / Taxis Bleus
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                    Les centrales gèrent la relation client entreprise pour vous.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded p-3 text-sm">
                    <strong className="text-green-800 dark:text-green-200">→ SOUVENT SIMPLIFIÉ :</strong>
                    <span className="text-green-700 dark:text-green-300"> La centrale peut avoir un mandat de facturation. Vérifiez votre contrat - ils pourraient gérer l&apos;e-invoicing B2B pour vous.</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    🚖 Taxi artisan classique (courses à la volée)
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                    90%+ de particuliers, ticket taximètre, paiement immédiat.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded p-3 text-sm">
                    <strong className="text-green-800 dark:text-green-200">→ IMPACT MINIMAL :</strong>
                    <span className="text-green-700 dark:text-green-300"> Vos courses quotidiennes ne changent pas. Seule obligation : e-reporting mensuel de votre CA B2C (automatique avec un bon logiciel).</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    ⛽ Vos factures fournisseurs (essence, garage, assurance)
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                    Carburant, entretien véhicule, assurance taxi, comptable...
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded p-3 text-sm">
                    <strong className="text-amber-800 dark:text-amber-200">→ RÉCEPTION OBLIGATOIRE :</strong>
                    <span className="text-amber-700 dark:text-amber-300"> Dès sept. 2026, vos fournisseurs vous enverront des factures électroniques. Vous devrez pouvoir les recevoir (via PPF ou outil compatible).</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* E-reporting section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              L&apos;e-reporting : votre vraie obligation
            </h2>
            
            <Card className="mb-6 border-blue-200 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-900/20">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <IconReceipt className="h-8 w-8 text-blue-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Qu&apos;est-ce que l&apos;e-reporting ?
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      L&apos;e-reporting consiste à transmettre à l&apos;administration fiscale un <strong>récapitulatif de vos ventes B2C</strong> (particuliers).
                      Ce n&apos;est pas une facture électronique individuelle, mais une déclaration synthétique de votre chiffre d&apos;affaires.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                📊 Concrètement pour un taxi :
              </h4>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm shrink-0">1</span>
                  <span>Vos courses particuliers sont enregistrées dans votre comptabilité quotidienne</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm shrink-0">2</span>
                  <span>Votre logiciel de facturation/compta génère automatiquement le rapport e-reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm shrink-0">3</span>
                  <span>Le rapport est transmis mensuellement à l&apos;administration (automatique)</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                💡 Avec un bon outil, l&apos;e-reporting est <strong>totalement automatique</strong>. Vous continuez à travailler normalement.
              </p>
            </div>
          </section>

          {/* Artisan vs locataire */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Taxi artisan vs taxi locataire
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                    🚕 Artisan taxi (propriétaire de licence)
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li>• Vous êtes responsable de votre comptabilité</li>
                    <li>• E-reporting de votre CA B2C</li>
                    <li>• E-invoicing si factures B2B (entreprises)</li>
                    <li>• Réception factures électroniques fournisseurs</li>
                    <li>• Statut : auto-entrepreneur ou société</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                    🔑 Locataire / salarié
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li>• La société propriétaire gère la facturation</li>
                    <li>• Vous êtes souvent peu concerné directement</li>
                    <li>• Vérifiez votre contrat de location</li>
                    <li>• La société doit être conforme</li>
                    <li>• Vous pourriez recevoir des factures de location électroniques</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Calendrier pour les taxis
            </h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-amber-500">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      1er septembre 2026
                    </h4>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700">Prochaine étape</Badge>
                  </div>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>✓ Réception obligatoire des factures électroniques (fournisseurs)</li>
                    <li>✓ E-reporting de vos ventes B2C (courses particuliers)</li>
                    <li>✓ Si vous facturez des entreprises : e-invoicing B2B obligatoire</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Questions fréquentes des taxis
            </h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Mon taximètre/imprimante va-t-il changer ?
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    <strong>Non.</strong> Le ticket de caisse (note de course) pour les particuliers n&apos;est pas une facture électronique.
                    Votre équipement taximètre reste identique. Seule votre comptabilité en arrière-plan devra intégrer l&apos;e-reporting.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Je ne facture jamais d&apos;entreprises, suis-je concerné ?
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    <strong>Partiellement.</strong> Vous n&apos;avez pas besoin d&apos;émettre de factures électroniques, mais :
                    <br/>1. Vous devrez faire l&apos;e-reporting de vos ventes B2C
                    <br/>2. Vous devrez recevoir les factures électroniques de vos fournisseurs (garage, essence si facture)
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Je suis micro-entrepreneur / auto-entrepreneur taxi, même calendrier ?
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    <strong>Oui.</strong> Quelle que soit votre forme juridique, le calendrier est identique : 1er septembre 2026.
                    L&apos;avantage en micro : votre comptabilité est simplifiée, donc l&apos;e-reporting sera très simple.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Ma centrale (G7, Taxis Bleus) va-t-elle tout gérer ?
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    <strong>Vérifiez votre contrat.</strong> Certaines centrales ont des mandats de facturation pour les courses entreprises.
                    Dans ce cas, elles gèrent l&apos;e-invoicing B2B pour vous. Mais votre comptabilité personnelle (e-reporting) reste votre responsabilité.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Je paye mon essence en CB à la pompe, ça compte ?
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    <strong>Oui.</strong> Si vous recevez une facture professionnelle de la station (avec votre SIRET), 
                    elle devra être au format électronique. Beaucoup de stations proposent déjà des factures dématérialisées (Total, Shell...).
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Je fais du transport sanitaire (CPAM), ça change quoi ?
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    La CPAM a déjà des circuits de facturation dématérialisés (télétransmission Sesam-Vitale).
                    L&apos;administration adaptera probablement ces circuits pour la réforme. Contactez votre CPAM pour les détails.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Quel outil utiliser pour être conforme ?
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Vous avez besoin d&apos;un logiciel qui gère :
                    <br/>• L&apos;e-reporting automatique de vos ventes B2C
                    <br/>• La réception des factures fournisseurs électroniques
                    <br/>• Optionnel : émission de factures électroniques B2B si vous facturez des entreprises
                    <br/><br/>
                    <strong>FacturSimple</strong> est conçu pour ça, à partir de 9€/mois.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Checklist */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              ✅ Checklist taxi avant septembre 2026
            </h2>
            
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-slate-300 rounded flex-shrink-0 mt-0.5"></div>
                    <div>
                      <span className="font-medium text-slate-900 dark:text-white">Faire le point sur vos clients B2B</span>
                      <p className="text-sm text-slate-500">Listez les entreprises à qui vous facturez (hôtels, agences, etc.)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-slate-300 rounded flex-shrink-0 mt-0.5"></div>
                    <div>
                      <span className="font-medium text-slate-900 dark:text-white">Vérifier votre contrat de centrale</span>
                      <p className="text-sm text-slate-500">Ont-ils un mandat de facturation ? Gèrent-ils l&apos;e-invoicing ?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-slate-300 rounded flex-shrink-0 mt-0.5"></div>
                    <div>
                      <span className="font-medium text-slate-900 dark:text-white">Choisir un outil compatible</span>
                      <p className="text-sm text-slate-500">E-reporting B2C + réception factures + émission B2B si besoin</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-slate-300 rounded flex-shrink-0 mt-0.5"></div>
                    <div>
                      <span className="font-medium text-slate-900 dark:text-white">Prévenir vos fournisseurs réguliers</span>
                      <p className="text-sm text-slate-500">Garage, assurance... Demandez comment recevoir leurs factures électroniques</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-slate-300 rounded flex-shrink-0 mt-0.5"></div>
                    <div>
                      <span className="font-medium text-slate-900 dark:text-white">Informer votre comptable</span>
                      <p className="text-sm text-slate-500">Si vous en avez un, coordonnez la transition ensemble</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-primary to-primary/80 text-white">
              <CardContent className="p-8 text-center">
                <IconCar className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-3">
                  Simplifiez votre conformité 2026
                </h3>
                <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
                  FacturSimple gère l&apos;e-reporting et la réception des factures électroniques. 
                  Vous continuez à travailler normalement.
                </p>
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
                >
                  Rejoindre la liste d&apos;attente
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </section>

          {/* Related */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Articles connexes
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/facturation-electronique-vtc-chauffeur-prive">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                      VTC et Chauffeur Privé : Guide 2026
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Guide pour chauffeurs Uber, Bolt, Kapten...
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/blog/e-reporting-micro-entreprise">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                      E-Reporting 2026 : Le Guide Complet
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Tout savoir sur l&apos;e-reporting B2C obligatoire.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 text-slate-400">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Link href="/" className="text-xl font-bold text-white">
              FacturSimple
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/#tarifs" className="hover:text-white transition-colors">Tarifs</Link>
            </div>
            <div className="text-sm">
              © 2026 FacturSimple. Conçu en France 🇫🇷
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
