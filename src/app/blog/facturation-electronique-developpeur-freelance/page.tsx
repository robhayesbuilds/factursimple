import { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '../_components/article-layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconCode, IconWorld, IconCalendar, IconAlertTriangle, IconCheck, IconClipboardList } from "@tabler/icons-react"

export const metadata: Metadata = {
  title: 'Facturation Électronique Développeur Freelance 2026 : Guide Complet',
  description: 'Guide complet sur la facturation électronique pour les développeurs web et freelances tech. Clients internationaux, Malt, Comet, récurrence - tout ce qui change en 2026.',
  keywords: ['facturation électronique développeur', 'facture freelance tech', 'développeur web 2026', 'malt facturation', 'comet facture', 'freelance informatique facture'],
  openGraph: {
    title: 'Facturation Électronique Développeur Freelance 2026',
    description: 'Guide complet e-invoicing pour développeurs web, freelances IT et consultants tech.',
    type: 'article',
    publishedTime: '2026-02-06',
  },
}

export default function DeveloppeurFreelancePage() {
  return (
    <ArticleLayout
      title="Développeurs Freelance : Préparez la Facturation Électronique 2026"
      excerpt="Vous codez des apps, pas des factures. Mais en 2026, la facturation électronique devient obligatoire. Voici ce qui change concrètement pour les devs freelance."
      date="2026-02-06"
      readTime="10 min"
      category="Guide Pratique"
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        
        {/* TL;DR for devs */}
        <Card className="not-prose my-8 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <IconCode className="h-5 w-5 text-primary" />
              TL;DR pour les devs pressés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li><strong>Sept 2026</strong> : Vous devez pouvoir recevoir des factures électroniques de vos fournisseurs</li>
              <li><strong>Sept 2027</strong> : Vous devez émettre vos factures en format électronique</li>
              <li><strong>Clients étrangers</strong> : Pas concernés par la réforme (mais e-reporting nécessaire)</li>
              <li><strong>Plateformes (Malt, Comet)</strong> : Elles s&apos;occupent de la facturation pour vous</li>
            </ul>
          </CardContent>
        </Card>

        <h2>Pourquoi les devs freelance sont concernés ?</h2>

        <p>
          Que vous soyez développeur full-stack, front-end, back-end, DevOps, data scientist ou consultant tech, 
          si vous êtes <strong>auto-entrepreneur ou en micro-entreprise</strong>, vous êtes concerné par la 
          réforme de la facturation électronique.
        </p>

        <p>
          Et non, &quot;je facture déjà en PDF&quot; ne compte pas. La facture électronique, c&apos;est un format 
          structuré (Factur-X, UBL) qui peut être lu automatiquement par les systèmes de l&apos;administration fiscale.
        </p>

        {/* Calendar Card */}
        <Card className="not-prose my-8">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <IconCalendar className="h-5 w-5 text-primary" />
              Le calendrier en 2 phases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-4">
                <div className="font-bold text-primary">1er septembre 2026</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Obligation de <strong>recevoir</strong> des factures électroniques de vos fournisseurs B2B
                </div>
              </div>
              <div className="rounded-lg border bg-card p-4">
                <div className="font-bold text-primary">1er septembre 2027</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Obligation d&apos;<strong>émettre</strong> vos factures en format électronique
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2>Cas spécifiques des développeurs freelance</h2>

        <h3>1. Clients via plateformes (Malt, Comet, Freelance.com...)</h3>

        <p>
          Si vous passez par une plateforme comme <strong>Malt</strong>, <strong>Comet</strong>, 
          <strong> Freelance.com</strong>, <strong>Crème de la Crème</strong> ou <strong>LeHibou</strong>, 
          bonne nouvelle : <strong>la plateforme gère la facturation</strong>.
        </p>

        <p>
          Ces plateformes émettent les factures au client final et vous reversent votre part. 
          Vous ne facturez pas directement le client. Techniquement, vous facturez la plateforme, 
          et c&apos;est une relation B2B française classique.
        </p>

        <Card className="not-prose my-6 border-green-500/20 bg-green-500/5">
          <CardContent className="flex items-start gap-3 pt-4">
            <IconCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400" />
            <div>
              <strong className="text-foreground">Pour les missions via plateforme</strong>
              <p className="mt-1 text-sm text-muted-foreground">
                La plateforme (Malt, Comet...) s&apos;assurera d&apos;être conforme. Vous n&apos;avez rien à faire de spécial 
                pour ces missions, sauf recevoir leurs factures de commission au format électronique dès sept 2026.
              </p>
            </div>
          </CardContent>
        </Card>

        <h3>2. Clients directs en France</h3>

        <p>
          Si vous avez des clients directs (startups, PME, grands groupes français), vous devrez :
        </p>

        <ul>
          <li><strong>Septembre 2026</strong> : Accepter les factures de vos fournisseurs en format électronique</li>
          <li><strong>Septembre 2027</strong> : Émettre vos factures clients au format Factur-X ou UBL</li>
        </ul>

        <p>
          Pour vos missions en régie ou au forfait, le format de facturation change, mais pas le contenu. 
          Vous facturez toujours vos jours/heures ou livrables comme avant.
        </p>

        <h3>3. Clients internationaux (le cas le plus fréquent !)</h3>

        <Card className="not-prose my-6 border-blue-500/20 bg-blue-500/5">
          <CardContent className="flex items-start gap-4 pt-4">
            <IconWorld className="mt-0.5 h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div>
              <strong className="text-foreground">Clients hors France = pas concernés par la réforme !</strong>
              <p className="mt-1 text-sm text-muted-foreground">
                La facturation électronique obligatoire ne s&apos;applique qu&apos;aux transactions <strong>B2B domestiques</strong> 
                (entre entreprises françaises). Si votre client est en Allemagne, aux USA, au UK, en Suisse... 
                vous continuez à facturer normalement.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Attention</strong> : Vous devrez quand même faire de l&apos;<strong>e-reporting</strong> pour 
                déclarer ces ventes à l&apos;administration, mais pas d&apos;obligation de format Factur-X.
              </p>
            </div>
          </CardContent>
        </Card>

        <h3>4. Facturation récurrente (retainers, abonnements)</h3>

        <p>
          Beaucoup de devs freelance ont des clients en <strong>retainer mensuel</strong> : 
          X jours par mois garantis, facturés chaque mois.
        </p>

        <p>
          La bonne nouvelle : les logiciels de facturation électronique gèrent très bien la récurrence. 
          Vous configurez une fois, et la facture est générée automatiquement chaque mois au bon format.
        </p>

        <h2>Les nouvelles mentions obligatoires</h2>

        <p>
          En plus des mentions habituelles (SIREN, adresse, TVA...), les factures électroniques 
          doivent inclure de nouvelles informations :
        </p>

        <div className="my-6 overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th className="text-left">Mention</th>
                <th className="text-left">Exemple pour un dev freelance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>SIREN du client</strong></td>
                <td>Le numéro SIREN de la startup cliente</td>
              </tr>
              <tr>
                <td><strong>Adresse de livraison</strong></td>
                <td>Généralement l&apos;adresse du siège (ou &quot;prestation immatérielle&quot;)</td>
              </tr>
              <tr>
                <td><strong>Catégorie de l&apos;opération</strong></td>
                <td>Prestation de services (code service)</td>
              </tr>
              <tr>
                <td><strong>Option TVA</strong></td>
                <td>Franchise en base / Débits / Encaissements</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Factures fournisseurs : ce que vous recevez</h2>

        <p>
          Dès septembre 2026, vos fournisseurs B2B français vous enverront des factures électroniques. 
          En tant que dev, vous recevez probablement des factures de :
        </p>

        <ul>
          <li><strong>Hébergement</strong> : OVH, Scaleway, Infomaniak (FR) - mais pas AWS/GCP/Azure (US)</li>
          <li><strong>Outils SaaS français</strong> : Notion FR, Figma FR, si facturés par entité française</li>
          <li><strong>Coworking</strong> : WeWork, Morning, Startway...</li>
          <li><strong>Comptable</strong> : Si vous avez un expert-comptable</li>
          <li><strong>Téléphone / Internet pro</strong> : Free Pro, Orange Pro, SFR Pro</li>
          <li><strong>Matériel</strong> : LDLC, Materiel.net (si facture pro)</li>
        </ul>

        <Card className="not-prose my-6 border-amber-500/20 bg-amber-500/5">
          <CardContent className="flex items-start gap-3 pt-4">
            <IconAlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
            <div>
              <strong className="text-foreground">Note importante</strong>
              <p className="mt-1 text-sm text-muted-foreground">
                Les fournisseurs américains (AWS, GitHub, Vercel, Stripe...) ne sont pas concernés par 
                la réforme française. Vous continuerez à recevoir leurs factures normales.
              </p>
            </div>
          </CardContent>
        </Card>

        <h2>Chorus Pro : obligatoire pour les clients publics</h2>

        <p>
          Si vous avez des missions pour des <strong>administrations, collectivités ou établissements publics</strong> 
          (ministères, mairies, hôpitaux publics, universités...), vous utilisez déjà probablement 
          <strong> Chorus Pro</strong>.
        </p>

        <p>
          C&apos;est le portail public de facturation électronique, gratuit et obligatoire pour facturer 
          le secteur public depuis 2020. La bonne nouvelle : vous êtes déjà habitué au format électronique !
        </p>

        <h2>Quel outil choisir ?</h2>

        <p>
          Pour un développeur freelance, voici les critères clés :
        </p>

        <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-primary">Indispensable</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Émission Factur-X / UBL</li>
                <li>✓ Réception factures électroniques</li>
                <li>✓ E-reporting automatique</li>
                <li>✓ Récurrence pour retainers</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-primary">Bonus appréciés</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Multi-devises (clients US/UK)</li>
                <li>✓ API pour automatisation</li>
                <li>✓ Templates personnalisables</li>
                <li>✓ Intégration bancaire</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <p>
          <strong>FacturSimple</strong> est conçu pour les indépendants comme vous : simple à utiliser, 
          conforme 2026, et à un prix qui ne mangera pas votre marge (9€/mois au lieu de 15-30€ chez les concurrents).
        </p>

        <h2>Les 5 erreurs à éviter</h2>

        <div className="not-prose my-6 space-y-3">
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="flex items-start gap-3 pt-4">
              <span className="font-bold text-red-500">1.</span>
              <div>
                <strong className="text-foreground">Croire que &quot;PDF = facture électronique&quot;</strong>
                <p className="mt-1 text-sm text-muted-foreground">
                  Non. Un PDF envoyé par email n&apos;est pas conforme. Il faut un format structuré 
                  (Factur-X = PDF + données XML intégrées).
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="flex items-start gap-3 pt-4">
              <span className="font-bold text-red-500">2.</span>
              <div>
                <strong className="text-foreground">Attendre septembre 2027 pour s&apos;équiper</strong>
                <p className="mt-1 text-sm text-muted-foreground">
                  Dès septembre 2026, vous devez pouvoir recevoir des factures électroniques. 
                  Commencez à vous équiper maintenant.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="flex items-start gap-3 pt-4">
              <span className="font-bold text-red-500">3.</span>
              <div>
                <strong className="text-foreground">Ignorer l&apos;e-reporting pour les clients étrangers</strong>
                <p className="mt-1 text-sm text-muted-foreground">
                  Même si la facture électronique n&apos;est pas obligatoire pour les clients hors France, 
                  vous devez déclarer ces ventes via e-reporting.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="flex items-start gap-3 pt-4">
              <span className="font-bold text-red-500">4.</span>
              <div>
                <strong className="text-foreground">Oublier la conservation 6 ans</strong>
                <p className="mt-1 text-sm text-muted-foreground">
                  Les factures électroniques doivent être conservées 6 ans minimum, dans leur format d&apos;origine. 
                  Prévoyez un système d&apos;archivage.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="flex items-start gap-3 pt-4">
              <span className="font-bold text-red-500">5.</span>
              <div>
                <strong className="text-foreground">Choisir un outil juste parce qu&apos;il est gratuit</strong>
                <p className="mt-1 text-sm text-muted-foreground">
                  Les outils gratuits ont souvent des limites (nombre de factures, pas de support, 
                  fonctionnalités manquantes). Pour un indépendant, 9€/mois c&apos;est une dépense pro déductible.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2>Checklist de préparation</h2>

        <Card className="not-prose my-8">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <IconClipboardList className="h-5 w-5 text-primary" />
              À faire avant septembre 2026
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4" />
                <span>Choisir un logiciel de facturation conforme (PDP agréée)</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4" />
                <span>Vérifier que je peux recevoir des factures Factur-X/UBL</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4" />
                <span>Mettre à jour mes templates avec les nouvelles mentions</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4" />
                <span>Informer mes clients directs de ma future conformité</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4" />
                <span>Vérifier mes fournisseurs français (hébergement, coworking...)</span>
              </label>
            </div>
          </CardContent>
        </Card>

        <h2>FAQ Développeurs Freelance</h2>

        <div className="not-prose my-6 space-y-3">
          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Je suis en franchise de TVA, suis-je concerné ?</summary>
            <p className="mt-2 text-muted-foreground">
              Oui ! La réforme s&apos;applique à tous les assujettis à la TVA, y compris ceux en franchise. 
              Vous ne facturez pas de TVA, mais vous devez quand même émettre des factures électroniques 
              pour vos clients B2B français dès septembre 2027.
            </p>
          </details>

          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Je code pour une startup US depuis la France ?</summary>
            <p className="mt-2 text-muted-foreground">
              Si votre client est américain (ou tout autre pays hors France), la facture électronique 
              n&apos;est pas obligatoire pour cette transaction. Vous facturez normalement. Par contre, 
              vous devrez déclarer cette vente via e-reporting à l&apos;administration.
            </p>
          </details>

          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Malt/Comet gère déjà mes factures, que faire ?</summary>
            <p className="mt-2 text-muted-foreground">
              Pour les missions via plateforme, vous n&apos;avez rien à faire - elles s&apos;en chargent. 
              Mais si vous avez aussi des clients directs à côté, vous devez vous équiper d&apos;un 
              outil conforme pour ces factures-là.
            </p>
          </details>

          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Je facture en dollars/livres, c&apos;est compatible ?</summary>
            <p className="mt-2 text-muted-foreground">
              Pour les clients étrangers, vous continuez à facturer dans leur devise. La réforme française 
              ne s&apos;applique pas à ces transactions. Pour les clients français, les factures doivent être 
              en euros (c&apos;est déjà le cas normalement).
            </p>
          </details>

          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">J&apos;ai déjà un script qui génère mes factures PDF...</summary>
            <p className="mt-2 text-muted-foreground">
              Si vous êtes dev, vous avez peut-être automatisé votre facturation avec un script maison. 
              Malheureusement, un PDF simple ne sera plus conforme. Vous pouvez soit adapter votre script 
              pour générer du Factur-X (c&apos;est du PDF + XML), soit passer par un outil certifié. 
              Il existe des librairies open source pour générer du Factur-X.
            </p>
          </details>

          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Les factures GitHub, AWS, Vercel seront conformes ?</summary>
            <p className="mt-2 text-muted-foreground">
              Ces entreprises américaines ne sont pas soumises à la réforme française. Vous recevrez 
              toujours leurs factures au format classique. Seuls vos fournisseurs français (OVH, Scaleway, 
              votre comptable...) vous enverront des factures électroniques.
            </p>
          </details>
        </div>

        <h2>Articles liés</h2>
        
        <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
          <Link href="/blog/facturation-electronique-consultant-coach" className="block rounded-lg border p-4 no-underline transition-colors hover:border-primary">
            <h4 className="mt-0 mb-1 font-semibold">Guide Consultants & Coachs</h4>
            <p className="mb-0 text-sm text-muted-foreground">Missions longues, acomptes, formations</p>
          </Link>
          <Link href="/blog/factur-x-format" className="block rounded-lg border p-4 no-underline transition-colors hover:border-primary">
            <h4 className="mt-0 mb-1 font-semibold">Format Factur-X expliqué</h4>
            <p className="mb-0 text-sm text-muted-foreground">Le format technique pour les devs curieux</p>
          </Link>
          <Link href="/blog/e-reporting-micro-entreprise" className="block rounded-lg border p-4 no-underline transition-colors hover:border-primary">
            <h4 className="mt-0 mb-1 font-semibold">E-reporting : le guide</h4>
            <p className="mb-0 text-sm text-muted-foreground">Comprendre l&apos;e-reporting pour vos clients étrangers</p>
          </Link>
          <Link href="/blog/sanctions-facturation-electronique" className="block rounded-lg border p-4 no-underline transition-colors hover:border-primary">
            <h4 className="mt-0 mb-1 font-semibold">Sanctions en cas de non-conformité</h4>
            <p className="mb-0 text-sm text-muted-foreground">Les amendes à éviter</p>
          </Link>
        </div>

      </div>
    </ArticleLayout>
  )
}
