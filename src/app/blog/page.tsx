import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - FacturSimple | Actualités facturation électronique',
  description: 'Guides et actualités sur la facturation électronique en France. Tout savoir sur la réforme 2026 pour les micro-entrepreneurs.',
}

const articles = [
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

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            FacturSimple
          </Link>
          <div className="flex space-x-8 text-sm text-slate-600 dark:text-slate-300">
            <Link href="/#fonctionnalites" className="hover:text-primary-600">Fonctionnalités</Link>
            <Link href="/#tarifs" className="hover:text-primary-600">Tarifs</Link>
            <Link href="/blog" className="text-primary-600 font-medium">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Blog FacturSimple
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Guides, actualités et conseils sur la facturation électronique en France.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {articles.map((article) => (
              <Link 
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700"
              >
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime} de lecture</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 hover:text-primary-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Préparez votre conformité avec FacturSimple
          </h2>
          <p className="text-primary-100 mb-6">
            Facturation électronique simple à partir de 9€/mois
          </p>
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            Rejoindre la liste d'attente →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="text-xl font-bold text-white mb-4 md:mb-0">
              FacturSimple
            </Link>
            <div className="text-sm">
              © 2026 FacturSimple. Conçu en France 🇫🇷
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
