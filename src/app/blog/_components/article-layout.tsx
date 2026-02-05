import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { IconArrowLeft, IconClock, IconArrowRight } from "@tabler/icons-react"

interface ArticleLayoutProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  children: React.ReactNode
}

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

export function ArticleLayout({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  category, 
  children 
}: ArticleLayoutProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
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
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-3xl">
          {/* Back Link */}
          <Link 
            href="/blog" 
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-primary dark:text-slate-400"
          >
            <IconArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
              <Badge 
                variant="secondary" 
                className={`${categoryColors[category] || ''} border-0 font-medium`}
              >
                {category}
              </Badge>
              <span className="text-slate-500 dark:text-slate-400">
                {formatDate(date)}
              </span>
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <IconClock className="h-3.5 w-3.5" />
                {readTime} de lecture
              </span>
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
              {excerpt}
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert prose-headings:scroll-mt-20 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-li:leading-relaxed max-w-none">
            {children}
          </div>

          {/* CTA Box */}
          <div className="mt-16 rounded-2xl bg-primary p-8 text-center text-white">
            <h3 className="text-2xl font-bold">Prêt à simplifier votre conformité ?</h3>
            <p className="mt-2 text-primary-foreground/80">
              Rejoignez la liste d&apos;attente et soyez parmi les premiers à accéder à FacturSimple.
            </p>
            <Link 
              href="/"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
            >
              Rejoindre la liste d&apos;attente
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Back Link Bottom */}
          <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-700">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-1.5 text-primary transition-colors hover:underline"
            >
              <IconArrowLeft className="h-4 w-4" />
              Retour au blog
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="mt-16 bg-slate-900 py-8 text-slate-400">
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
