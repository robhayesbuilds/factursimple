import Link from 'next/link'
import { Metadata } from 'next'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { IconArrowRight, IconClock, IconBook } from "@tabler/icons-react"

export const metadata: Metadata = {
  title: 'Blog - FacturSimple | Actualités facturation électronique',
  description: 'Guides et actualités sur la facturation électronique en France. Tout savoir sur la réforme 2026 pour les micro-entrepreneurs.',
}

const articles = [
  {
    slug: 'alternative-pennylane-pas-cher',
    title: 'Alternative Pennylane Pas Cher 2026 : Comparatif pour Auto-Entrepreneurs',
    excerpt: 'Pennylane à 99€/mois ? Découvrez les alternatives moins chères pour les auto-entrepreneurs. Comparatif complet : Tiime, Henrri, Freebe, FacturSimple.',
    date: '2026-02-05',
    readTime: '10 min',
    category: 'Comparatif',
  },
  {
    slug: 'cgv-auto-entrepreneur',
    title: 'CGV Auto-Entrepreneur : Guide Complet 2026',
    excerpt: 'Tout savoir sur les Conditions Générales de Vente (CGV) pour les auto-entrepreneurs. Obligations légales, mentions obligatoires et générateur gratuit.',
    date: '2026-02-05',
    readTime: '8 min',
    category: 'Guide Pratique',
  },
  {
    slug: 'factur-x-format',
    title: 'Factur-X : Le Format de Facture Électronique Expliqué Simplement',
    excerpt: 'Découvrez Factur-X, le format hybride PDF/XML au cœur de la facturation électronique 2026. Guide complet : niveaux de conformité, avantages, et comment l\'adopter.',
    date: '2026-02-04',
    readTime: '8 min',
    category: 'Technique',
  },
  {
    slug: 'delais-paiement-facture',
    title: 'Délais de Paiement Facture 2026 : Vos Droits et Recours',
    excerpt: 'Un client qui ne paie pas ? Découvrez vos droits : délais légaux, pénalités de retard, indemnité forfaitaire, stratégies de relance et procédures de recouvrement.',
    date: '2026-02-04',
    readTime: '8 min',
    category: 'Guide Pratique',
  },
  {
    slug: 'devis-auto-entrepreneur',
    title: 'Créer un Devis Conforme Auto-Entrepreneur 2026 : Guide Complet',
    excerpt: 'Comment créer un devis professionnel et conforme en auto-entrepreneur. Mentions obligatoires, modèle gratuit et bonnes pratiques.',
    date: '2026-02-04',
    readTime: '8 min',
    category: 'Guide Pratique',
  },
  {
    slug: 'tva-auto-entrepreneur-2026',
    title: 'TVA Auto-Entrepreneur 2026 : Seuils, Franchise et Facturation Électronique',
    excerpt: 'Guide complet sur la TVA pour les auto-entrepreneurs : seuils de franchise, passage à la TVA, mentions obligatoires et lien avec la réforme e-invoicing.',
    date: '2026-02-04',
    readTime: '11 min',
    category: 'Fiscalité',
  },
  {
    slug: 'e-reporting-micro-entreprise',
    title: 'E-Reporting 2026 : Ce Que les Micro-Entreprises Doivent Savoir',
    excerpt: 'Vous vendez aux particuliers ? Découvrez vos obligations d\'e-reporting : qui est concerné, calendrier, obligations B2C, et comment se préparer.',
    date: '2026-02-04',
    readTime: '9 min',
    category: 'E-Reporting',
  },
  {
    slug: 'mentions-legales-facture-auto-entrepreneur',
    title: 'Mentions Légales Facture Auto-Entrepreneur 2026 : La Checklist Complète',
    excerpt: 'Toutes les mentions obligatoires sur une facture auto-entrepreneur en 2026. Checklist complète, exemples concrets et erreurs à éviter.',
    date: '2026-02-04',
    readTime: '7 min',
    category: 'Guide Pratique',
  },
  {
    slug: 'facturation-electronique-auto-entrepreneur',
    title: 'Facturation Électronique Auto-Entrepreneur : Le Guide Pratique 2026',
    excerpt: 'Vous êtes auto-entrepreneur ? Découvrez toutes vos obligations pour la facturation électronique : calendrier, solutions abordables, et checklist de préparation.',
    date: '2026-02-04',
    readTime: '10 min',
    category: 'Guide',
  },
  {
    slug: 'reforme-facturation-2026',
    title: 'Réforme Facturation 2026 : Tout Ce Qui Change pour les Entreprises',
    excerpt: 'La réforme expliquée simplement : calendrier officiel, obligations, sanctions et comment vous préparer. Guide complet pour TPE et micro-entreprises.',
    date: '2026-02-04',
    readTime: '12 min',
    category: 'Réglementation',
  },
  {
    slug: 'logiciel-facture-micro-entreprise',
    title: 'Logiciel de Facture pour Micro-Entreprise : Comment Bien Choisir en 2026',
    excerpt: 'Critères essentiels, comparatif des solutions et conseils pratiques pour choisir le bon logiciel de facturation sans se ruiner.',
    date: '2026-02-04',
    readTime: '11 min',
    category: 'Guide Pratique',
  },
  {
    slug: 'ppf-vs-pdp',
    title: 'PPF vs PDP : Quelle Plateforme Choisir pour Votre Facturation Électronique ?',
    excerpt: 'Portail Public de Facturation ou Plateforme de Dématérialisation Partenaire ? On vous explique les différences et comment faire le bon choix.',
    date: '2026-02-04',
    readTime: '9 min',
    category: 'Comparatif',
  },
  {
    slug: 'faq-facture-electronique',
    title: 'FAQ Facture Électronique 2026 : Toutes les Réponses à Vos Questions',
    excerpt: 'Suis-je concerné ? C\'est quoi Factur-X ? Combien ça coûte ? Réponses claires aux 10 questions les plus fréquentes des micro-entrepreneurs.',
    date: '2026-02-04',
    readTime: '8 min',
    category: 'FAQ',
  },
  {
    slug: 'comparatif-logiciels-facturation',
    title: 'Comparatif Logiciels de Facturation 2026 : Lequel Choisir ?',
    excerpt: 'Pennylane, Tiime, Indy, Freebe... On compare tout pour vous aider à choisir le bon outil avant septembre 2026.',
    date: '2026-02-04',
    readTime: '10 min',
    category: 'Comparatif',
  },
  {
    slug: 'guide-facture-electronique-2026',
    title: 'Facture Électronique 2026 : Le Guide Complet pour les Micro-Entrepreneurs',
    excerpt: 'Tout ce que vous devez savoir sur la réforme de la facturation électronique. Calendrier, obligations, et comment vous préparer.',
    date: '2026-02-03',
    readTime: '8 min',
    category: 'Guide',
  },
]

const categoryColors: Record<string, string> = {
  'Technique': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  'Guide Pratique': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  'Guide': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  'Fiscalité': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  'E-Reporting': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  'Réglementation': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  'Comparatif': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  'FAQ': 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  })
}

export default function BlogPage() {
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

      {/* Header */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 gap-1.5 rounded-full px-4 py-1.5">
            <IconBook className="h-3.5 w-3.5" />
            {articles.length} articles
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Le blog FacturSimple
          </h1>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
            Guides pratiques et actualités sur la facturation électronique en France
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="container mx-auto px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6">
            {articles.map((article) => (
              <Link 
                key={article.slug}
                href={`/blog/${article.slug}`}
              >
                <Card className="group transition-all duration-200 hover:shadow-lg hover:border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <Badge 
                        variant="secondary" 
                        className={`${categoryColors[article.category] || ''} border-0 font-medium`}
                      >
                        {article.category}
                      </Badge>
                      <span className="text-slate-500 dark:text-slate-400">
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <IconClock className="h-3.5 w-3.5" />
                        {article.readTime}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-3">
                      {article.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Lire l&apos;article</span>
                      <IconArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Préparez votre conformité avec FacturSimple
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            Facturation électronique simple à partir de 9€/mois
          </p>
          <Link 
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
          >
            Rejoindre la liste d&apos;attente
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 text-slate-400">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Link href="/" className="text-xl font-bold text-white">
              FacturSimple
            </Link>
            <div className="text-sm">
              © 2026 FacturSimple. Conçu en France
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
