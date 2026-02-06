import { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '../_components/article-layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconHome, IconCalendar, IconAlertTriangle, IconCheck, IconClipboardList, IconPercentage, IconReceipt, IconBuilding } from "@tabler/icons-react"

export const metadata: Metadata = {
  title: 'Facturation Électronique Agent Immobilier 2026 : Guide Complet',
  description: 'Guide complet sur la facturation électronique pour les agents immobiliers indépendants. Honoraires, mandats, commissions - tout ce qui change en 2026.',
  keywords: ['facturation électronique agent immobilier', 'facture agent immobilier 2026', 'honoraires agent immobilier', 'commission immobilière facturation', 'agent immobilier auto-entrepreneur', 'mandataire immobilier'],
  openGraph: {
    title: 'Facturation Électronique Agent Immobilier 2026',
    description: 'Guide complet e-invoicing pour agents immobiliers indépendants et mandataires.',
    type: 'article',
    publishedTime: '2026-02-06',
  },
}

export default function AgentImmobilierPage() {
  return (
    <ArticleLayout
      title="Agent Immobilier : Préparez la Facturation Électronique 2026"
      excerpt="Vous travaillez dans l'immobilier en indépendant ? Mandataire, négociateur, agent commercial immobilier - la facturation électronique arrive en 2026. Voici ce qui change."
      date="2026-02-06"
      readTime="10 min"
      category="Guide Pratique"
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        
        {/* Key points */}
        <Card className="not-prose my-8 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <IconHome className="h-5 w-5 text-primary" />
              L&apos;essentiel pour les professionnels de l&apos;immobilier
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li><strong>Sept 2026</strong> : Vous devez pouvoir recevoir des factures électroniques</li>
              <li><strong>Sept 2027</strong> : Vos factures d&apos;honoraires doivent être au format électronique</li>
              <li><strong>Commissions</strong> : Les factures au réseau immobilier passent au format Factur-X</li>
              <li><strong>Particuliers</strong> : Les factures B2C restent en PDF classique</li>
            </ul>
          </CardContent>
        </Card>

        <h2>Qui est concerné dans l&apos;immobilier ?</h2>

        <p>
          La réforme de la facturation électronique concerne tous les professionnels de l&apos;immobilier :
        </p>

        <ul>
          <li><strong>Mandataires immobiliers</strong> (agents commerciaux rattachés à un réseau)</li>
          <li><strong>Négociateurs immobiliers indépendants</strong></li>
          <li><strong>Agents immobiliers auto-entrepreneurs</strong></li>
          <li><strong>Conseillers IAD, Safti, MegAgence, Capifrance...</strong></li>
          <li><strong>Chasseurs d&apos;appartements</strong> en freelance</li>
          <li><strong>Gestionnaires locatifs indépendants</strong></li>
        </ul>

        <Card className="not-prose my-6 border-amber-500/30 bg-amber-500/10">
          <CardContent className="pt-4">
            <div className="flex items-start gap-3">
              <IconAlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <strong>Mandataires immobiliers :</strong> Vous êtes juridiquement des agents commerciaux. 
                Même si vous travaillez sous l&apos;enseigne d&apos;un réseau, vous êtes indépendant et devez 
                gérer votre propre conformité à la facturation électronique.
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calendar */}
        <Card className="not-prose my-8">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <IconCalendar className="h-5 w-5 text-primary" />
              Le calendrier pour les agents immobiliers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-4">
                <div className="font-bold text-primary">1er septembre 2026</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  <strong>Réception obligatoire</strong> : Votre réseau immobilier et vos fournisseurs vous enverront des factures électroniques
                </div>
              </div>
              <div className="rounded-lg border bg-card p-4">
                <div className="font-bold text-primary">1er septembre 2027</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  <strong>Émission obligatoire</strong> : Vos factures de commissions au réseau doivent être au format Factur-X
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2>Comment ça fonctionne pour les mandataires immobiliers ?</h2>

        <h3>Le flux classique d&apos;une vente</h3>

        <p>
          Quand vous concluez une vente immobilière, voici le flux financier typique :
        </p>

        <ol>
          <li><strong>L&apos;acheteur</strong> paie les honoraires à l&apos;agence (votre réseau)</li>
          <li><strong>Vous facturez</strong> votre commission au réseau (60 à 95% selon contrat)</li>
          <li><strong>Le réseau</strong> vous verse votre commission</li>
        </ol>

        <p>
          C&apos;est cette facture de commission (étape 2) qui devra être au format électronique dès 2027.
        </p>

        <Card className="not-prose my-6 border-green-500/30 bg-green-500/10">
          <CardContent className="pt-4">
            <div className="flex items-start gap-3">
              <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <strong>Bonne nouvelle :</strong> Vous ne facturez généralement qu&apos;à votre réseau immobilier (B2B). 
                Une seule relation de facturation à gérer, c&apos;est simple !
              </div>
            </div>
          </CardContent>
        </Card>

        <h3>Et si je facture directement des particuliers ?</h3>

        <p>
          Certains agents immobiliers facturent directement les particuliers (chasseurs d&apos;appartements, 
          agents indépendants avec carte T...). Dans ce cas :
        </p>

        <ul>
          <li><strong>Factures B2C</strong> (particuliers) : Pas d&apos;obligation de format électronique - PDF classique accepté</li>
          <li><strong>Factures B2B</strong> (entreprises, SCI, investisseurs pro) : Format électronique obligatoire dès 2027</li>
        </ul>

        <h2>Spécificités du secteur immobilier</h2>

        <h3>1. Les commissions à pourcentage variable</h3>

        <p>
          En immobilier, la commission dépend du prix de vente réalisé. Votre logiciel de facturation 
          doit pouvoir gérer :
        </p>

        <ul>
          <li><strong>Calcul automatique</strong> sur le prix de vente</li>
          <li><strong>Barèmes progressifs</strong> (ex: 70% jusqu&apos;à 5 000€, 80% au-delà)</li>
          <li><strong>Primes et bonus</strong> (parrainage, objectifs...)</li>
          <li><strong>Frais refacturés</strong> (home staging, photos...)</li>
        </ul>

        {/* Example invoice content */}
        <Card className="not-prose my-8">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <IconReceipt className="h-5 w-5 text-primary" />
              Exemple de facture de commission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm space-y-2 font-mono bg-muted/50 p-4 rounded-lg">
              <p><strong>FACTURE N° 2026-034</strong></p>
              <p>Vente appartement - Réf. 12345</p>
              <p>Adresse du bien : 42 rue des Lilas, 75011 Paris</p>
              <p>Prix de vente HT : 350 000 €</p>
              <p>Honoraires agence : 15 000 € TTC</p>
              <hr className="my-2 border-muted" />
              <p>Commission mandataire (75%) : 11 250 €</p>
              <p>Prime parrainage acquéreur : 500 €</p>
              <p className="font-bold">Total dû : 11 750 € TTC</p>
            </div>
          </CardContent>
        </Card>

        <h3>2. Les mentions légales spécifiques</h3>

        <p>
          En plus des mentions classiques d&apos;une facture, les agents immobiliers doivent inclure :
        </p>

        <ul>
          <li><strong>Numéro RSAC</strong> (Registre Spécial des Agents Commerciaux) si applicable</li>
          <li><strong>Référence du mandat</strong> ou du bien vendu</li>
          <li><strong>Nom du réseau/mandant</strong> clairement identifié</li>
          <li><strong>Pour les détenteurs carte T :</strong> numéro de carte professionnelle, garantie financière, RC Pro</li>
        </ul>

        <h3>3. La TVA dans l&apos;immobilier</h3>

        <p>
          Les commissions immobilières sont généralement soumises à TVA (20%). Attention :
        </p>

        <ul>
          <li><strong>Auto-entrepreneurs en franchise</strong> : Pas de TVA, mais la mention &quot;TVA non applicable - Art. 293 B du CGI&quot; reste obligatoire</li>
          <li><strong>Dépassement de seuil</strong> : À 36 800 € de CA prestations de services, vous devenez assujetti TVA</li>
          <li><strong>Transactions entre professionnels</strong> : L&apos;autoliquidation peut s&apos;appliquer dans certains cas</li>
        </ul>

        <h2>Votre réseau vous aide-t-il ?</h2>

        <p>
          Beaucoup de réseaux immobiliers (IAD, Safti, MegAgence, Capifrance, Propriétés Privées...) 
          proposent des outils de facturation à leurs mandataires.
        </p>

        <Card className="not-prose my-6">
          <CardContent className="pt-4">
            <div className="text-sm space-y-3">
              <div className="flex items-start gap-2">
                <IconCheck className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Vérifiez avec votre réseau</strong> s&apos;ils proposeront un outil compatible Factur-X</span>
              </div>
              <div className="flex items-start gap-2">
                <IconCheck className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Demandez le calendrier</strong> de mise à jour de leur outil interne</span>
              </div>
              <div className="flex items-start gap-2">
                <IconAlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span><strong>Attention :</strong> Même si le réseau fournit un outil, VOUS restez responsable de votre conformité fiscale</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2>Checklist de préparation pour 2026</h2>

        <Card className="not-prose my-8">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <IconClipboardList className="h-5 w-5 text-primary" />
              Actions à réaliser avant septembre 2026
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="rounded-full h-5 w-5 border-2 border-muted flex-shrink-0 mt-0.5" />
                <span>Vérifier si votre réseau proposera un outil compatible</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full h-5 w-5 border-2 border-muted flex-shrink-0 mt-0.5" />
                <span>Évaluer vos besoins : commissions simples ou multi-mandants ?</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full h-5 w-5 border-2 border-muted flex-shrink-0 mt-0.5" />
                <span>Choisir un logiciel de facturation compatible Factur-X</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full h-5 w-5 border-2 border-muted flex-shrink-0 mt-0.5" />
                <span>Mettre à jour vos modèles de facture avec les mentions légales</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full h-5 w-5 border-2 border-muted flex-shrink-0 mt-0.5" />
                <span>Tester la réception de factures électroniques</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full h-5 w-5 border-2 border-muted flex-shrink-0 mt-0.5" />
                <span>Former éventuellement votre assistant(e) administratif(ve)</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <h2>Combien ça va coûter ?</h2>

        <p>
          Pour un mandataire immobilier avec des besoins simples (facturation au réseau uniquement) :
        </p>

        <div className="not-prose my-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-green-600">0 €</div>
            <div className="text-sm text-muted-foreground mt-1">Si outil réseau compatible</div>
          </div>
          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-primary">9-15 €/mois</div>
            <div className="text-sm text-muted-foreground mt-1">Solutions simples (FacturSimple)</div>
          </div>
          <div className="rounded-lg border bg-card p-4 text-center">
            <div className="text-2xl font-bold text-amber-600">25-50 €/mois</div>
            <div className="text-sm text-muted-foreground mt-1">Logiciels comptables complets</div>
          </div>
        </div>

        <p>
          Rapporté au nombre de transactions annuelles d&apos;un mandataire (5-15 ventes en moyenne), 
          le coût est minime par rapport aux commissions générées.
        </p>

        <h2>Erreurs courantes à éviter</h2>

        <Card className="not-prose my-6 border-red-500/30 bg-red-500/10">
          <CardContent className="pt-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span><strong>&quot;Mon réseau s&apos;en occupe&quot;</strong> - Non, vous êtes indépendant et responsable de VOS factures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span><strong>&quot;Je suis auto-entrepreneur, pas concerné&quot;</strong> - Si, tous les statuts sont concernés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span><strong>&quot;J&apos;attends 2027&quot;</strong> - Dès sept 2026, vous devez pouvoir RECEVOIR des factures électroniques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span><strong>&quot;Excel suffit&quot;</strong> - Non, il faut le format Factur-X structuré</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <h2>FAQ Agents Immobiliers</h2>

        <h3>Je suis mandataire IAD/Safti, qui doit se mettre en conformité ?</h3>
        <p>
          <strong>Vous.</strong> Même si vous travaillez sous une enseigne, vous êtes juridiquement 
          agent commercial indépendant. C&apos;est VOTRE obligation fiscale, pas celle du réseau.
        </p>

        <h3>Mon réseau va-t-il me fournir un outil ?</h3>
        <p>
          Probablement. Les grands réseaux (IAD, Safti, Capifrance, MegAgence...) travaillent sur 
          des solutions pour leurs mandataires. Contactez votre animateur pour connaître leur 
          calendrier de déploiement.
        </p>

        <h3>Mes notes d&apos;honoraires aux particuliers sont concernées ?</h3>
        <p>
          Non. Les factures B2C (Business-to-Consumer) ne sont pas concernées par l&apos;obligation. 
          Seules les factures B2B doivent être au format électronique.
        </p>

        <h3>Je cumule avec une autre activité, comment gérer ?</h3>
        <p>
          Un seul logiciel de facturation peut gérer plusieurs activités. L&apos;important est que 
          TOUTES vos factures B2B soient au format Factur-X dès 2027.
        </p>

        <h2>Prêt à vous équiper ?</h2>

        <p>
          La facturation électronique peut sembler contraignante, mais c&apos;est aussi l&apos;occasion 
          de professionnaliser votre gestion administrative.
        </p>

        <p>
          <strong>FacturSimple</strong> est conçu spécifiquement pour les indépendants comme vous : 
          simple à utiliser, conforme aux normes 2026, et à un prix adapté à votre activité.
        </p>

        <div className="not-prose my-8">
          <Link 
            href="/#waitlist" 
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Rejoindre la liste d&apos;attente FacturSimple
          </Link>
        </div>

        <h2>Articles connexes</h2>

        <ul>
          <li><Link href="/blog/facturation-electronique-agent-commercial">Guide agents commerciaux</Link></li>
          <li><Link href="/blog/calendrier-reforme-facture-electronique-2026">Calendrier complet de la réforme 2026</Link></li>
          <li><Link href="/blog/factur-x-format">Comprendre le format Factur-X</Link></li>
          <li><Link href="/blog/sanctions-facturation-electronique">Sanctions en cas de non-conformité</Link></li>
        </ul>

      </div>
    </ArticleLayout>
  )
}
