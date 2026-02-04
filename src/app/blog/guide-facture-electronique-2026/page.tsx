import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Facture Électronique 2026 : Le Guide Complet pour les Micro-Entrepreneurs | FacturSimple',
  description: 'Tout savoir sur la réforme de la facturation électronique 2026. Calendrier, obligations, formats acceptés et comment vous préparer en tant que micro-entrepreneur.',
  keywords: 'facture électronique, micro-entrepreneur, auto-entrepreneur, 2026, Factur-X, réforme, obligation, facturation',
}

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            FacturSimple
          </Link>
          <div className="flex space-x-8 text-sm text-slate-600 dark:text-slate-300">
            <Link href="/#fonctionnalites" className="hover:text-primary-600">Fonctionnalités</Link>
            <Link href="/#tarifs" className="hover:text-primary-600">Tarifs</Link>
            <Link href="/blog" className="hover:text-primary-600">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
            <Link href="/blog" className="hover:text-primary-600">Blog</Link>
            <span>›</span>
            <span>Guide</span>
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded text-xs font-medium">
                Guide
              </span>
              <span>3 février 2026</span>
              <span>•</span>
              <span>8 min de lecture</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Facture Électronique 2026 : Le Guide Complet pour les Micro-Entrepreneurs
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Êtes-vous prêt pour septembre 2026 ? Voici tout ce que vous devez savoir sur la nouvelle obligation de facturation électronique.
            </p>
          </header>

          {/* Alert Box */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚨</span>
              <div>
                <h2 className="font-semibold text-amber-800 dark:text-amber-200 mb-1">
                  Septembre 2026 : Êtes-vous prêt pour la facturation électronique ?
                </h2>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  Si vous êtes micro-entrepreneur ou auto-entrepreneur en France, une nouvelle obligation arrive bientôt. Voici ce que vous devez savoir.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              📅 Le calendrier officiel
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
              <li><strong>1er septembre 2026 :</strong> Toutes les entreprises doivent pouvoir <strong>RECEVOIR</strong> des factures électroniques</li>
              <li><strong>1er septembre 2027 :</strong> Les micro-entreprises devront <strong>ÉMETTRE</strong> des factures électroniques (si assujetties à la TVA)</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              ❓ Qu'est-ce qui change concrètement ?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Fini les PDF envoyés par email. Une "facture électronique" au sens de la réforme, c'est :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
              <li>Un format structuré (<strong>Factur-X</strong>, UBL, ou CII)</li>
              <li>Transitant par une plateforme de dématérialisation certifiée (PDP) ou le Portail Public de Facturation (PPF)</li>
              <li>Contenant des données lisibles par machine</li>
            </ul>

            {/* Info Box */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                🤔 "Je suis en franchise de TVA, suis-je concerné ?"
              </h3>
              <p className="text-blue-700 dark:text-blue-300">
                <strong>OUI.</strong> Même en franchise de TVA, vous devez être capable de :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-blue-700 dark:text-blue-300">
                <li>Recevoir des factures électroniques de vos fournisseurs (sept. 2026)</li>
                <li>Potentiellement émettre si vous facturez des entreprises B2B (sept. 2027)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              💰 Combien ça va coûter ?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              C'est là que ça fait mal. Les solutions actuelles :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-4">
              <li><strong>Pennylane</strong> : 99€/mois (overkill pour une micro)</li>
              <li><strong>Tiime</strong> : 49€/mois et plus</li>
              <li><strong>Indy</strong> : Gratuit mais limité, transition vers payant</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Pour une micro qui fait 3-5 factures par mois, payer 50-100€/mois juste pour être conforme, c'est difficile à justifier.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              🔍 C'est quoi le format Factur-X ?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Factur-X est le format standard français pour la facturation électronique. C'est un format <strong>hybride</strong> :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300 mb-6">
              <li><strong>Un PDF</strong> — lisible par l'humain, comme une facture classique</li>
              <li><strong>+ des données XML</strong> — intégrées dans le PDF, lisibles par les logiciels</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Cela permet à votre client de lire la facture normalement, tout en permettant à son logiciel comptable d'importer automatiquement les données.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              ✅ Que faire maintenant ?
            </h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-8">
              <ol className="list-decimal pl-6 space-y-2 text-green-700 dark:text-green-300">
                <li>Renseignez-vous sur les obligations exactes pour votre activité</li>
                <li>Vérifiez si votre logiciel actuel sera compatible Factur-X</li>
                <li>Prévoyez un budget ou cherchez des alternatives abordables</li>
                <li>Ne paniquez pas : vous avez 7 mois pour la réception, 19 mois pour l'émission</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              📋 Récapitulatif : Ce qui marchera / Ce qui ne marchera plus
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-3">❌ Ne marchera plus</h3>
                <ul className="list-disc pl-4 space-y-2 text-red-700 dark:text-red-300 text-sm">
                  <li>Factures PDF faites sous Word ou Excel</li>
                  <li>Envoi de factures par simple email</li>
                  <li>Logiciels non certifiés</li>
                  <li>Pas de transmission à l'administration</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">✅ Ce qu'exige la loi</h3>
                <ul className="list-disc pl-4 space-y-2 text-green-700 dark:text-green-300 text-sm">
                  <li>Format structuré (Factur-X, UBL, CII)</li>
                  <li>Transmission via plateforme agréée</li>
                  <li>E-reporting des transactions B2C</li>
                  <li>Stockage conforme pendant 10 ans</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              🚀 La solution FacturSimple
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              C'est pour ça que nous créons <strong>FacturSimple</strong> : une solution de facturation électronique conçue spécifiquement pour les micro-entrepreneurs. Simple, conforme, et à un prix juste : <strong>à partir de 9€/mois</strong>.
            </p>
          </div>

          {/* CTA Box */}
          <div className="bg-primary-600 text-white p-8 rounded-xl mt-12 text-center">
            <h3 className="text-xl font-bold mb-2">Prêt à simplifier votre conformité ?</h3>
            <p className="text-primary-100 mb-4">
              Rejoignez la liste d'attente et soyez parmi les premiers à accéder à FacturSimple.
            </p>
            <Link 
              href="/"
              className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Rejoindre la liste d'attente →
            </Link>
          </div>

          {/* Share / Back */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <Link href="/blog" className="text-primary-600 hover:underline">
              ← Retour au blog
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-16">
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
