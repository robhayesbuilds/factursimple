import { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '../_components/article-layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconBriefcase, IconCalendar, IconAlertTriangle, IconCheck, IconClipboardList, IconPercentage, IconReceipt } from "@tabler/icons-react"

export const metadata: Metadata = {
  title: 'Facturation Électronique Agent Commercial 2026 : Guide Complet',
  description: 'Guide complet sur la facturation électronique pour les agents commerciaux indépendants. Commissions, mandants, VRP multicartes - tout ce qui change en 2026.',
  keywords: ['facturation électronique agent commercial', 'facture agent commercial 2026', 'commission agent commercial', 'VRP multicarte facturation', 'agent commercial auto-entrepreneur'],
  openGraph: {
    title: 'Facturation Électronique Agent Commercial 2026',
    description: 'Guide complet e-invoicing pour agents commerciaux indépendants et VRP multicartes.',
    type: 'article',
    publishedTime: '2026-02-06',
  },
}

export default function AgentCommercialPage() {
  return (
    <ArticleLayout
      title="Agent Commercial : Préparez la Facturation Électronique 2026"
      excerpt="Vous négociez des contrats pour le compte de mandants ? La facturation électronique arrive en 2026. Voici ce qui change pour les agents commerciaux indépendants."
      date="2026-02-06"
      readTime="9 min"
      category="Guide Pratique"
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        
        {/* Key points */}
        <Card className="not-prose my-8 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <IconBriefcase className="h-5 w-5 text-primary" />
              L&apos;essentiel pour les agents commerciaux
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li><strong>Sept 2026</strong> : Vous devez pouvoir recevoir des factures électroniques de vos mandants et fournisseurs</li>
              <li><strong>Sept 2027</strong> : Vos factures de commissions doivent être au format électronique</li>
              <li><strong>Commissions</strong> : Vous facturez vos mandants comme avant, mais au format Factur-X</li>
              <li><strong>Mandants étrangers</strong> : Pas concernés par la réforme française</li>
            </ul>
          </CardContent>
        </Card>

        <h2>Qui est concerné ?</h2>

        <p>
          Tous les agents commerciaux indépendants sont concernés par la réforme, quel que soit leur statut :
        </p>

        <ul>
          <li><strong>Agents commerciaux en micro-entreprise</strong> (auto-entrepreneurs)</li>
          <li><strong>VRP multicartes</strong> (représentants exclusifs ou non)</li>
          <li><strong>Courtiers</strong> en assurance, immobilier, etc.</li>
          <li><strong>Agents commerciaux en société</strong> (EIRL, EURL, SASU)</li>
        </ul>

        <p>
          Si vous êtes <strong>assujetti à la TVA</strong> (même en franchise), vous êtes concerné. 
          Et oui, la franchise en base de TVA n&apos;exempte pas de la facturation électronique !
        </p>

        {/* Calendar */}
        <Card className="not-prose my-8">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <IconCalendar className="h-5 w-5 text-primary" />
              Le calendrier pour les agents commerciaux
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-4">
                <div className="font-bold text-primary">1er septembre 2026</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  <strong>Réception obligatoire</strong> : Vos mandants et fournisseurs vous enverront des factures électroniques
                </div>
              </div>
              <div className="rounded-lg border bg-card p-4">
                <div className="font-bold text-primary">1er septembre 2027</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  <strong>Émission obligatoire</strong> : Vos factures de commissions doivent être au format Factur-X
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2>Spécificités des agents commerciaux</h2>

        <h3>1. Facturation des commissions</h3>

        <p>
          En tant qu&apos;agent commercial, vous facturez des <strong>commissions</strong> à vos mandants 
          en fonction des ventes réalisées. Le montant varie selon le contrat d&apos;agence.
        </p>

        <p>
          Avec la réforme, le principe reste le même, mais le format change :
        </p>

        <ul>
          <li>Vous calculez votre commission comme d&apos;habitude</li>
          <li>Vous émettez une facture au format <strong>Factur-X</strong> (PDF + données XML)</li>
          <li>La facture transite par une <strong>PDP</strong> (plateforme de dématérialisation) ou le <strong>PPF</strong></li>
          <li>L&apos;administration fiscale reçoit automatiquement les données</li>
        </ul>

        <Card className="not-prose my-6 border-green-500/20 bg-green-500/5">
          <CardContent className="flex items-start gap-3 pt-4">
            <IconCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400" />
            <div>
              <strong className="text-foreground">Bonne nouvelle</strong>
              <p className="mt-1 text-sm text-muted-foreground">
                Le contenu de vos factures ne change pas fondamentalement. C&apos;est le format technique 
                qui évolue. Un bon logiciel de facturation gère tout ça automatiquement.
              </p>
            </div>
          </CardContent>
        </Card>

        <h3>2. Mandants multiples</h3>

        <p>
          Beaucoup d&apos;agents commerciaux travaillent avec <strong>plusieurs mandants</strong> simultanément. 
          La réforme ne change rien à cette organisation :
        </p>

        <ul>
          <li>Vous continuez à facturer chaque mandant séparément</li>
          <li>Chaque facture de commission est au format électronique</li>
          <li>Votre logiciel doit pouvoir gérer plusieurs clients/mandants</li>
        </ul>

        <h3>3. Mandants étrangers</h3>

        <Card className="not-prose my-6 border-blue-500/20 bg-blue-500/5">
          <CardContent className="flex items-start gap-4 pt-4">
            <IconPercentage className="mt-0.5 h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div>
              <strong className="text-foreground">Mandants hors France = pas concernés !</strong>
              <p className="mt-1 text-sm text-muted-foreground">
                Si votre mandant est une entreprise étrangère (Allemagne, Italie, Espagne...), 
                vous continuez à facturer normalement. La facturation électronique obligatoire 
                ne s&apos;applique qu&apos;aux transactions <strong>B2B domestiques</strong> (France-France).
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Attention</strong> : Vous devrez quand même faire de l&apos;<strong>e-reporting</strong> 
                pour déclarer ces commissions à l&apos;administration.
              </p>
            </div>
          </CardContent>
        </Card>

        <h3>4. Avances et acomptes sur commissions</h3>

        <p>
          Certains contrats d&apos;agence prévoient des <strong>avances sur commissions</strong> ou des 
          <strong>minimums garantis</strong>. Ces avances doivent également être facturées au format électronique.
        </p>

        <p>
          Points d&apos;attention :
        </p>

        <ul>
          <li>Facturez l&apos;avance avec la mention &quot;Avance sur commission&quot;</li>
          <li>Régularisez ensuite lors de la facture de commission finale</li>
          <li>Chaque document (avance et régularisation) doit être au format Factur-X</li>
        </ul>

        <h2>Ce que vous recevez de vos mandants</h2>

        <p>
          Dès septembre 2026, vos mandants français vous enverront des documents au format électronique :
        </p>

        <ul>
          <li><strong>États de commissions</strong> détaillant les ventes réalisées</li>
          <li><strong>Factures de produits</strong> si vous achetez du stock (rare pour un agent)</li>
          <li><strong>Notes de débit/crédit</strong> pour régularisations</li>
        </ul>

        <p>
          Vous devez pouvoir <strong>recevoir et archiver</strong> ces documents électroniques. 
          Votre logiciel de facturation doit être compatible.
        </p>

        <h2>Factures de fournisseurs</h2>

        <p>
          En tant qu&apos;agent commercial, vous avez aussi des fournisseurs :
        </p>

        <ul>
          <li><strong>Téléphone et internet</strong> : Free, Orange, SFR...</li>
          <li><strong>Véhicule</strong> : Carburant, location longue durée, assurance</li>
          <li><strong>Comptable</strong> : Si vous en avez un</li>
          <li><strong>Logiciels</strong> : CRM, facturation, email...</li>
          <li><strong>Frais de déplacement</strong> : Hôtels, restaurants, péages</li>
        </ul>

        <Card className="not-prose my-6 border-amber-500/20 bg-amber-500/5">
          <CardContent className="flex items-start gap-3 pt-4">
            <IconAlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
            <div>
              <strong className="text-foreground">Important</strong>
              <p className="mt-1 text-sm text-muted-foreground">
                Dès septembre 2026, vos fournisseurs B2B français vous enverront des factures électroniques. 
                Assurez-vous de pouvoir les recevoir et les conserver pendant 6 ans minimum.
              </p>
            </div>
          </CardContent>
        </Card>

        <h2>Agent commercial vs agent immobilier</h2>

        <p>
          Attention à ne pas confondre :
        </p>

        <ul>
          <li><strong>Agent commercial</strong> : Vous négociez des contrats de vente de produits/services pour le compte de mandants. Vous êtes pleinement concerné par la réforme.</li>
          <li><strong>Agent immobilier</strong> : Si vous êtes titulaire de la carte professionnelle, vous êtes également concerné, avec des spécificités propres à l&apos;immobilier.</li>
        </ul>

        <p>
          Dans les deux cas, l&apos;obligation de facturation électronique s&apos;applique dès lors que 
          vous êtes assujetti à la TVA.
        </p>

        <h2>Les nouvelles mentions obligatoires</h2>

        <p>
          Vos factures de commissions devront inclure ces nouvelles informations :
        </p>

        <div className="my-6 overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th className="text-left">Mention</th>
                <th className="text-left">Exemple</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>SIREN du mandant</strong></td>
                <td>Le numéro SIREN de votre mandant</td>
              </tr>
              <tr>
                <td><strong>Adresse de livraison</strong></td>
                <td>&quot;Prestation de services&quot; ou adresse du siège</td>
              </tr>
              <tr>
                <td><strong>Catégorie de l&apos;opération</strong></td>
                <td>Prestation de services (code S)</td>
              </tr>
              <tr>
                <td><strong>Option TVA</strong></td>
                <td>Franchise en base / Débits / Encaissements</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Quel outil choisir ?</h2>

        <p>
          Pour un agent commercial, voici les critères essentiels :
        </p>

        <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-primary">Indispensable</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Émission Factur-X pour vos commissions</li>
                <li>✓ Réception factures électroniques</li>
                <li>✓ Gestion multi-mandants</li>
                <li>✓ Calcul automatique des commissions</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-primary">Bonus appréciés</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Modèles de factures personnalisables</li>
                <li>✓ Suivi des paiements</li>
                <li>✓ Export comptable</li>
                <li>✓ Archivage 6 ans inclus</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <p>
          <strong>FacturSimple</strong> répond à ces besoins : simple, conforme 2026, et à 9€/mois 
          seulement (contre 15-30€ chez les concurrents).
        </p>

        <h2>Les erreurs à éviter</h2>

        <div className="not-prose my-6 space-y-3">
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="flex items-start gap-3 pt-4">
              <span className="font-bold text-red-500">1.</span>
              <div>
                <strong className="text-foreground">Penser que la franchise TVA exempte de la réforme</strong>
                <p className="mt-1 text-sm text-muted-foreground">
                  Non ! Même sans facturer de TVA, vous devez émettre des factures électroniques 
                  pour vos clients B2B français.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="flex items-start gap-3 pt-4">
              <span className="font-bold text-red-500">2.</span>
              <div>
                <strong className="text-foreground">Confondre état de commissions et facture</strong>
                <p className="mt-1 text-sm text-muted-foreground">
                  L&apos;état de commissions que vous recevez de votre mandant n&apos;est pas une facture. 
                  C&apos;est vous qui devez émettre la facture de commission.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="flex items-start gap-3 pt-4">
              <span className="font-bold text-red-500">3.</span>
              <div>
                <strong className="text-foreground">Attendre septembre 2027</strong>
                <p className="mt-1 text-sm text-muted-foreground">
                  Dès septembre 2026, vous devez pouvoir recevoir des factures électroniques. 
                  Équipez-vous dès maintenant.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-red-500/20 bg-red-500/5">
            <CardContent className="flex items-start gap-3 pt-4">
              <span className="font-bold text-red-500">4.</span>
              <div>
                <strong className="text-foreground">Oublier l&apos;archivage 6 ans</strong>
                <p className="mt-1 text-sm text-muted-foreground">
                  Les factures électroniques doivent être conservées 6 ans dans leur format d&apos;origine. 
                  Prévoyez une solution d&apos;archivage.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2>Checklist agent commercial</h2>

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
                <span>Choisir un logiciel de facturation conforme</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4" />
                <span>Vérifier que je peux recevoir des factures Factur-X</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4" />
                <span>Informer mes mandants de ma conformité 2026</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4" />
                <span>Mettre à jour mes modèles de factures avec nouvelles mentions</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input type="checkbox" className="mt-1.5 h-4 w-4" />
                <span>Prévoir l&apos;archivage numérique (6 ans)</span>
              </label>
            </div>
          </CardContent>
        </Card>

        <h2>FAQ Agents Commerciaux</h2>

        <div className="not-prose my-6 space-y-3">
          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Je suis VRP multicarte, suis-je concerné ?</summary>
            <p className="mt-2 text-muted-foreground">
              Oui ! Les VRP multicartes qui facturent leurs commissions directement aux entreprises 
              sont concernés par la réforme. Si vous êtes salarié et ne facturez pas, vous n&apos;êtes pas concerné.
            </p>
          </details>

          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Mon mandant peut-il refuser ma facture PDF ?</summary>
            <p className="mt-2 text-muted-foreground">
              À partir de septembre 2027, votre mandant français pourra légitimement vous demander 
              une facture au format électronique (Factur-X). Une facture PDF simple ne sera plus conforme.
            </p>
          </details>

          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Je travaille pour un mandant italien, que faire ?</summary>
            <p className="mt-2 text-muted-foreground">
              La réforme française ne s&apos;applique pas aux transactions avec des entreprises étrangères. 
              Vous facturez normalement. Par contre, vous devrez déclarer ces commissions via 
              e-reporting à l&apos;administration française.
            </p>
          </details>

          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Comment facturer les frais de déplacement remboursés ?</summary>
            <p className="mt-2 text-muted-foreground">
              Si vos frais sont remboursés par le mandant, vous pouvez soit les inclure sur votre 
              facture de commission, soit émettre une note de frais séparée. Dans tous les cas, 
              le format électronique s&apos;applique pour les transactions B2B France.
            </p>
          </details>

          <details className="group rounded-lg border bg-card p-4">
            <summary className="cursor-pointer font-semibold">Chorus Pro est-il obligatoire ?</summary>
            <p className="mt-2 text-muted-foreground">
              Chorus Pro est obligatoire uniquement pour facturer le secteur public (administrations, 
              mairies, hôpitaux publics...). Pour les mandants privés, vous pouvez utiliser une 
              PDP (plateforme de dématérialisation partenaire) ou passer par le PPF.
            </p>
          </details>
        </div>

        <h2>Articles liés</h2>
        
        <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
          <Link href="/blog/facturation-electronique-consultant-coach" className="block rounded-lg border p-4 no-underline transition-colors hover:border-primary">
            <h4 className="mt-0 mb-1 font-semibold">Guide Consultants & Coachs</h4>
            <p className="mb-0 text-sm text-muted-foreground">Autre profil de prestataire de services</p>
          </Link>
          <Link href="/blog/e-reporting-micro-entreprise" className="block rounded-lg border p-4 no-underline transition-colors hover:border-primary">
            <h4 className="mt-0 mb-1 font-semibold">E-reporting : le guide</h4>
            <p className="mb-0 text-sm text-muted-foreground">Pour vos mandants étrangers</p>
          </Link>
          <Link href="/blog/sanctions-facturation-electronique" className="block rounded-lg border p-4 no-underline transition-colors hover:border-primary">
            <h4 className="mt-0 mb-1 font-semibold">Sanctions non-conformité</h4>
            <p className="mb-0 text-sm text-muted-foreground">Les amendes à éviter</p>
          </Link>
          <Link href="/blog/factur-x-format" className="block rounded-lg border p-4 no-underline transition-colors hover:border-primary">
            <h4 className="mt-0 mb-1 font-semibold">Format Factur-X expliqué</h4>
            <p className="mb-0 text-sm text-muted-foreground">Le format technique en détail</p>
          </Link>
        </div>

      </div>
    </ArticleLayout>
  )
}
