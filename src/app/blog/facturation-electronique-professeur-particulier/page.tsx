import { Metadata } from 'next'
import Link from 'next/link'
import { IconChevronRight, IconCheck, IconAlertTriangle, IconCalendar, IconSchool, IconDeviceLaptop, IconUsers, IconReceipt, IconClipboardList, IconCoin, IconQuestionMark, IconExternalLink, IconArrowRight } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Facturation Électronique Professeur Particulier 2026 | Guide Complet',
  description: 'Guide complet sur la facturation électronique pour les professeurs particuliers et formateurs auto-entrepreneurs. CESU, plateformes (Superprof, Preply), cours en entreprise : tout comprendre pour 2026.',
  keywords: ['facturation électronique professeur particulier', 'facture prof particulier 2026', 'superprof facturation', 'auto-entrepreneur cours particuliers', 'CESU facturation électronique', 'formateur micro-entreprise'],
  alternates: {
    canonical: 'https://factursimple.fr/blog/facturation-electronique-professeur-particulier'
  },
  openGraph: {
    title: 'Facturation Électronique Professeur Particulier 2026 | Guide Complet',
    description: 'Tout ce que les professeurs particuliers auto-entrepreneurs doivent savoir sur la réforme de la facturation électronique : CESU, plateformes, cours en entreprise.',
    type: 'article',
    publishedTime: '2026-02-06',
    authors: ['FacturSimple'],
  }
}

export default function ProfesseurParticulierPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <IconChevronRight className="h-4 w-4" />
            <span>Professeur Particulier</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Facturation Électronique pour Professeurs Particuliers : Guide 2026
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            Professeur particulier, formateur en ligne, coach scolaire ? Découvrez comment la réforme 
            de la facturation électronique vous concerne, avec ou sans CESU.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <IconCalendar className="h-4 w-4" />
              Mis à jour : Février 2026
            </span>
            <span>·</span>
            <span>12 min de lecture</span>
          </div>
        </div>
      </section>

      {/* Alerte */}
      <section className="py-8">
        <div className="container max-w-4xl mx-auto px-4">
          <Card className="border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="flex gap-4 p-6">
              <IconAlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                  Bonne nouvelle pour les profs particuliers !
                </h3>
                <p className="text-amber-700 dark:text-amber-300">
                  Si vous donnez uniquement des cours à des <strong>particuliers</strong> (pas d&apos;entreprises), 
                  vous êtes concerné par l&apos;e-reporting (plus simple) et non par l&apos;e-invoicing. 
                  Mais vous devez quand même vous équiper d&apos;un outil conforme.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sommaire */}
      <section className="py-8">
        <div className="container max-w-4xl mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <IconClipboardList className="h-5 w-5 text-primary" />
                Dans cet article
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-2">
                {[
                  'Êtes-vous concerné ?',
                  'CESU et facturation électronique',
                  'Plateformes (Superprof, Preply...)',
                  'Cours en entreprise (B2B)',
                  'Cours à domicile vs en ligne',
                  'Factures fournisseurs',
                  'Quel outil choisir ?',
                  'FAQ du professeur particulier',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <IconCheck className="h-4 w-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Concerné ? */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <IconSchool className="h-8 w-8 text-primary" />
            Professeur particulier : êtes-vous concerné ?
          </h2>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p>
              En tant que professeur particulier auto-entrepreneur, votre situation dépend de 
              <strong> qui sont vos clients</strong> :
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-500/50">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">
                  🧑‍🎓 Clients particuliers (B2C)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Parents, étudiants, adultes en formation personnelle...
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-green-600 mt-0.5" />
                    <span><strong>E-reporting</strong> obligatoire (transmettre les données de vente à l&apos;administration)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Pas besoin d&apos;envoyer de facture électronique structurée au client</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Obligation à partir du <strong>1er septembre 2027</strong></span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-500/50">
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-blue-400">
                  🏢 Clients professionnels (B2B)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Entreprises, organismes de formation, écoles privées...
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span><strong>E-invoicing</strong> obligatoire (facture électronique au format Factur-X)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span>Émission obligatoire à partir du <strong>1er septembre 2027</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span>Réception dès le <strong>1er septembre 2026</strong> (factures de vos fournisseurs)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">💡 Le cas le plus courant</h3>
              <p className="text-muted-foreground">
                La majorité des professeurs particuliers travaillent avec des <strong>particuliers</strong> (parents, étudiants). 
                Dans ce cas, vous n&apos;avez pas besoin d&apos;émettre de factures électroniques structurées, 
                mais vous devrez transmettre vos données de vente via e-reporting. 
                Un logiciel de facturation adapté fera tout ça automatiquement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CESU */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            CESU et facturation électronique
          </h2>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p>
              Le <strong>CESU (Chèque Emploi Service Universel)</strong> est très utilisé pour les cours à domicile. 
              Mais attention : CESU ≠ auto-entrepreneur !
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>CESU préfinancé / déclaratif</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Si vous êtes payé en CESU comme <strong>salarié du particulier employeur</strong> :
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Vous n&apos;êtes <strong>pas concerné</strong> par la réforme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Vous n&apos;émettez pas de factures (c&apos;est du salariat)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Le particulier gère les déclarations URSSAF</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle>Auto-entrepreneur</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Si vous facturez sous statut <strong>micro-entreprise</strong> (même si le client paie en CESU) :
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <IconAlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span>Vous <strong>êtes concerné</strong> par la réforme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconAlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span>Vous devez émettre des factures (et les transmettre via e-reporting)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconAlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span>Le mode de paiement (CESU, virement, espèces) ne change rien</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-500/50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">
                ⚠️ Confusion fréquente
              </h3>
              <p className="text-amber-700 dark:text-amber-300">
                Beaucoup de professeurs particuliers pensent qu&apos;être payé en CESU les exonère de facturer. 
                <strong> C&apos;est faux si vous êtes auto-entrepreneur.</strong> Le CESU est juste un moyen de paiement, 
                comme un virement ou un chèque. Vous devez toujours émettre une facture.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Plateformes */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <IconDeviceLaptop className="h-8 w-8 text-primary" />
            Cours via plateformes (Superprof, Preply, Italki...)
          </h2>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p>
              De nombreux professeurs utilisent des plateformes de mise en relation. 
              Comment fonctionne la facturation électronique dans ce cas ?
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Superprof, Kelprof, Apprentus...</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Ces plateformes sont des <strong>sites de mise en relation</strong>. Elles vous connectent 
                  avec des élèves, mais ne facturent pas à votre place.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <IconArrowRight className="h-4 w-4 text-primary mt-0.5" />
                    <span>Vous facturez <strong>directement</strong> l&apos;élève ou ses parents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconArrowRight className="h-4 w-4 text-primary mt-0.5" />
                    <span>Vous êtes responsable de l&apos;e-reporting de vos ventes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconArrowRight className="h-4 w-4 text-primary mt-0.5" />
                    <span>La commission Superprof = facture fournisseur que vous recevez</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preply, Italki, Verbling, Cambly...</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Ces plateformes gèrent le paiement et <strong>facturent à votre place</strong> (mandat de facturation).
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>La plateforme émet la facture pour l&apos;élève</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Vous recevez un relevé/paiement de la plateforme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconAlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span>Vérifiez que la plateforme sera conforme e-invoicing 2026</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconArrowRight className="h-4 w-4 text-primary mt-0.5" />
                    <span>Vous devrez peut-être déclarer ces revenus séparément via e-reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">💡 Conseil</h3>
              <p className="text-muted-foreground">
                Contactez vos plateformes pour savoir comment elles gèrent la facturation électronique 2026. 
                Certaines (comme Preply) sont des entreprises étrangères — leur conformité n&apos;est pas garantie.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* B2B */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <IconUsers className="h-8 w-8 text-primary" />
            Cours en entreprise (B2B)
          </h2>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p>
              Si vous donnez des cours de langues ou des formations à des <strong>entreprises</strong>, 
              vous êtes en B2B et devez émettre des factures électroniques.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Exemples de clients B2B</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-2">
                  {[
                    'Entreprises (cours de langues pour salariés)',
                    'Organismes de formation (sous-traitance)',
                    'Écoles privées / instituts',
                    'Associations employeurs',
                    'Collectivités locales',
                    'Centres de loisirs (cours collectifs)',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <IconCheck className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-500/50">
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-blue-400">
                  Vos obligations B2B
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <IconCalendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">1er septembre 2026</p>
                    <p className="text-sm text-muted-foreground">
                      Recevoir les factures électroniques de vos fournisseurs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <IconCalendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">1er septembre 2027</p>
                    <p className="text-sm text-muted-foreground">
                      Émettre des factures électroniques au format Factur-X vers vos clients pro
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">📋 Mentions obligatoires supplémentaires</h3>
              <p className="text-muted-foreground mb-3">
                Pour les factures B2B, vous devrez ajouter des mentions spécifiques :
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Numéro SIREN du client</li>
                <li>• Adresse de livraison (si différente)</li>
                <li>• Type d&apos;opération (prestation de service)</li>
                <li>• Option TVA (franchise en base le cas échéant)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Factures fournisseurs */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <IconReceipt className="h-8 w-8 text-primary" />
            Factures de vos fournisseurs
          </h2>

          <div className="prose dark:prose-invert max-w-none mb-6">
            <p>
              Dès le <strong>1er septembre 2026</strong>, vous devez être capable de recevoir 
              des factures électroniques de vos fournisseurs professionnels.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Factures que vous recevrez en format électronique</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  'Abonnement téléphone/internet',
                  'Logiciels (Zoom, Canva, etc.)',
                  'Matériel pédagogique',
                  'Commission plateforme (Superprof...)',
                  'Assurance RC Pro',
                  'Mutuelle / prévoyance',
                  'Abonnement transports',
                  'Fournitures de bureau',
                  'Frais bancaires professionnels',
                  'Comptable / expert-comptable',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <IconCheck className="h-4 w-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">🎯 Action concrète</h3>
              <p className="text-muted-foreground">
                Choisissez un logiciel de facturation qui peut <strong>recevoir et stocker</strong> 
                les factures électroniques de vos fournisseurs. FacturSimple vous permet de 
                centraliser toutes vos factures (émises et reçues) en un seul endroit.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Domicile vs En ligne */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Cours à domicile vs cours en ligne
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>🏠 Cours à domicile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Vous vous déplacez chez l&apos;élève.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Prestation de service classique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>E-reporting si client particulier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Frais de déplacement = à facturer séparément ou inclus</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>💻 Cours en ligne</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Via Zoom, Skype, Google Meet...
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Même régime de facturation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>E-reporting si client particulier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <IconAlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span>Élèves étrangers : attention aux règles TVA internationales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-500/50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">
                ⚠️ Élèves hors France
              </h3>
              <p className="text-amber-700 dark:text-amber-300">
                Si vous donnez des cours en ligne à des élèves <strong>hors de France</strong> (via Preply, Italki...), 
                les règles de facturation peuvent être différentes. Les ventes B2C hors UE 
                ne sont généralement pas soumises à l&apos;e-reporting français. Consultez un expert-comptable si c&apos;est une part importante de votre activité.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Outil */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <IconCoin className="h-8 w-8 text-primary" />
            Quel outil choisir ?
          </h2>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p>
              Pour être conforme en 2026, vous avez besoin d&apos;un logiciel de facturation qui :
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {[
                  'Génère des factures conformes (mentions légales auto-entrepreneur)',
                  'Transmet automatiquement vos données de vente via e-reporting',
                  'Reçoit et stocke les factures électroniques de vos fournisseurs',
                  'Est adapté aux petits volumes (quelques factures/mois)',
                  'A un prix adapté aux auto-entrepreneurs (pas les outils pour PME)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">FacturSimple : conçu pour les auto-entrepreneurs</h3>
                  <p className="text-muted-foreground mb-4">
                    Factures conformes, e-reporting automatique, à partir de 9€/mois. 
                    Idéal pour les professeurs particuliers qui veulent rester concentrés sur l&apos;enseignement.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded">✓ Conforme 2026</span>
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded">✓ E-reporting inclus</span>
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded">✓ Prix auto-entrepreneur</span>
                  </div>
                </div>
                <Button size="lg" asChild>
                  <Link href="/#waitlist">
                    Rejoindre la liste d&apos;attente
                    <IconArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <IconQuestionMark className="h-8 w-8 text-primary" />
            FAQ du professeur particulier
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Je suis en franchise de TVA, suis-je concerné ?",
                a: "Oui ! La franchise en base de TVA ne vous exonère pas de la réforme. Vous devez transmettre vos données de vente (e-reporting) et recevoir les factures électroniques de vos fournisseurs. Vous ne facturez simplement pas la TVA à vos clients."
              },
              {
                q: "Puis-je utiliser Chorus Pro gratuitement ?",
                a: "Chorus Pro est le portail public gratuit, mais il est conçu pour les factures vers l'État. Pour les factures B2C (particuliers), il n'est pas adapté. Un logiciel de facturation privé sera plus pratique pour le e-reporting."
              },
              {
                q: "Je donne seulement quelques heures par semaine, dois-je m'équiper ?",
                a: "Si vous êtes déclaré en micro-entreprise, oui. Le nombre d'heures ne change pas vos obligations. Mais les outils comme FacturSimple ont des tarifs adaptés aux petits volumes."
              },
              {
                q: "Mes élèves me paient en espèces, comment faire ?",
                a: "Le mode de paiement ne change rien à l'obligation de facturer. Vous devez émettre une facture et transmettre les données via e-reporting, que le paiement soit en espèces, CESU, virement ou autre."
              },
              {
                q: "Je vends aussi des supports de cours (PDF, vidéos), que faire ?",
                a: "La vente de supports pédagogiques numériques est une vente de biens dématérialisés. Elle est soumise aux mêmes règles : e-reporting pour les ventes B2C, e-invoicing pour les ventes B2B."
              },
              {
                q: "Je travaille pour Superprof et aussi en direct, comment gérer ?",
                a: "Utilisez le même logiciel de facturation pour tout. Facturez vos cours directs normalement. Pour les cours via Superprof, vérifiez comment la plateforme gère la facturation (elle ne facture pas à votre place, vous devez le faire vous-même)."
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            ✅ Checklist du professeur particulier pour 2026
          </h2>

          <Card>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {[
                  { text: "Identifier votre type de clients (particuliers vs entreprises)", urgent: false },
                  { text: "Si CESU : confirmer que vous êtes bien auto-entrepreneur (pas salarié)", urgent: false },
                  { text: "Choisir un logiciel de facturation conforme e-invoicing/e-reporting", urgent: true },
                  { text: "Configurer la réception des factures fournisseurs (obligatoire sept 2026)", urgent: true },
                  { text: "Préparer vos modèles de factures avec toutes les mentions légales", urgent: false },
                  { text: "Contacter vos plateformes (Superprof, Preply...) pour connaître leur politique 2026", urgent: false },
                  { text: "Si clients B2B : préparer l'émission de factures Factur-X (obligatoire sept 2027)", urgent: false },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded border-2 flex-shrink-0 ${item.urgent ? 'border-amber-500 bg-amber-100 dark:bg-amber-900/30' : 'border-muted-foreground/30'}`} />
                    <span className={item.urgent ? 'font-medium' : 'text-muted-foreground'}>
                      {item.text}
                      {item.urgent && <span className="text-amber-600 ml-2 text-sm">(prioritaire)</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à simplifier votre facturation ?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Rejoignez les professeurs particuliers qui préparent sereinement la réforme 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/generateur-facture">
                Générer une facture gratuite
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10" asChild>
              <Link href="/checklist-2026">
                Voir la checklist complète
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Articles liés */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Articles connexes</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Facturation électronique 2026 : le guide complet", href: "/blog/guide-facture-electronique-2026" },
              { title: "E-reporting : ce que les auto-entrepreneurs doivent savoir", href: "/blog/e-reporting-micro-entreprise" },
              { title: "Consultants et coachs : guide 2026", href: "/blog/facturation-electronique-consultant-coach" },
            ].map((article) => (
              <Link 
                key={article.href} 
                href={article.href}
                className="p-4 border rounded-lg hover:border-primary transition-colors"
              >
                <h3 className="font-medium mb-2">{article.title}</h3>
                <span className="text-sm text-primary flex items-center gap-1">
                  Lire l&apos;article
                  <IconExternalLink className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
