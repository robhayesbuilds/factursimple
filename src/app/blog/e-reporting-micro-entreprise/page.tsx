import { Metadata } from 'next'
import Link from 'next/link'
import { IconArrowLeft, IconAlertCircle, IconCheck, IconCalendar, IconUsers, IconFileInvoice, IconBuildingStore } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'E-Reporting 2026 : Ce Que les Micro-Entreprises Doivent Savoir | FacturSimple',
  description: 'Guide complet sur l\'e-reporting pour les micro-entrepreneurs : qui est concerné, calendrier, obligations B2C, et comment se préparer avant septembre 2026.',
  keywords: 'e-reporting entreprise, e-reporting 2026, déclaration e-reporting, micro-entreprise e-reporting, B2C facturation électronique',
  openGraph: {
    title: 'E-Reporting 2026 : Ce Que les Micro-Entreprises Doivent Savoir',
    description: 'Vous vendez aux particuliers ? Découvrez vos obligations d\'e-reporting à partir de 2026.',
    type: 'article',
    publishedTime: '2026-02-04',
  },
}

export default function EReportingArticle() {
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

      <article className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Back link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 mb-8"
        >
          <IconArrowLeft className="w-4 h-4 mr-2" />
          Retour au blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-medium">
              E-Reporting
            </span>
            <span>4 février 2026</span>
            <span>•</span>
            <span>9 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            E-Reporting 2026 : Ce Que les Micro-Entreprises Doivent Savoir
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Vous vendez aux particuliers ? Vous pensez ne pas être concerné par la réforme de la facturation électronique ? 
            Détrompez-vous : l'e-reporting vous concerne. Voici tout ce qu'il faut savoir.
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Alert box */}
          <div className="not-prose bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-lg my-8">
            <div className="flex items-start gap-4">
              <IconAlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Point clé à retenir</h3>
                <p className="text-orange-700 dark:text-orange-300 text-base">
                  Même si vous ne facturez qu'à des particuliers (B2C), vous devrez transmettre vos données de facturation 
                  à l'administration fiscale via l'e-reporting. C'est obligatoire à partir du 1er septembre 2026.
                </p>
              </div>
            </div>
          </div>

          <h2 className="flex items-center gap-3">
            <IconFileInvoice className="w-8 h-8 text-primary-600" />
            E-Invoicing vs E-Reporting : Quelle Différence ?
          </h2>

          <p>
            La réforme 2026 comprend deux volets distincts qu'il ne faut pas confondre :
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                🏢 E-Invoicing (B2B)
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-4">
                Concerne les factures entre entreprises françaises assujetties à la TVA.
              </p>
              <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <li>• Factures au format électronique (Factur-X, UBL, CII)</li>
                <li>• Transitent par une plateforme (PDP ou PPF)</li>
                <li>• Émission et réception obligatoires</li>
              </ul>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
              <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-3">
                👥 E-Reporting (B2C)
              </h3>
              <p className="text-orange-800 dark:text-orange-200 text-sm mb-4">
                Concerne les transactions avec les particuliers ou entreprises étrangères.
              </p>
              <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
                <li>• Déclaration des données de facturation</li>
                <li>• Pas de transmission de facture, juste les données</li>
                <li>• Permet à l'État de lutter contre la fraude TVA</li>
              </ul>
            </div>
          </div>

          <p>
            <strong>En résumé :</strong> L'e-invoicing concerne les transactions B2B en France. L'e-reporting concerne 
            tout le reste : ventes aux particuliers, exports, ventes à des entreprises non assujetties...
          </p>

          <h2 className="flex items-center gap-3">
            <IconUsers className="w-8 h-8 text-primary-600" />
            Qui Est Concerné par l'E-Reporting ?
          </h2>

          <p>
            Si vous êtes auto-entrepreneur ou micro-entreprise et que vous réalisez l'une de ces opérations, 
            l'e-reporting vous concerne :
          </p>

          <div className="not-prose bg-slate-50 dark:bg-slate-800 p-6 rounded-xl my-8">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              ✅ Vous êtes concerné si vous :
            </h3>
            <ul className="space-y-3">
              {[
                { icon: IconBuildingStore, text: 'Vendez à des particuliers (artisan, commerçant, thérapeute, formateur...)' },
                { icon: IconUsers, text: 'Facturez des clients hors de France (export UE ou hors UE)' },
                { icon: IconFileInvoice, text: 'Travaillez avec des associations ou collectivités non assujetties à la TVA' },
                { icon: IconCheck, text: 'Êtes en franchise de base de TVA (la majorité des auto-entrepreneurs)' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <item.icon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            En pratique, cela signifie que la <strong>quasi-totalité des auto-entrepreneurs</strong> sera concernée 
            par l'e-reporting, même ceux qui n'ont que des clients particuliers.
          </p>

          <h2 className="flex items-center gap-3">
            <IconCalendar className="w-8 h-8 text-primary-600" />
            Calendrier : Quand l'E-Reporting Devient Obligatoire ?
          </h2>

          <p>
            Le calendrier de déploiement est le même que pour l'e-invoicing :
          </p>

          <div className="not-prose overflow-x-auto my-8">
            <table className="w-full border-collapse bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">Qui est concerné ?</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">Obligation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-primary-600">1er sept. 2026</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Toutes les entreprises</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">
                      Réception e-invoicing + E-reporting
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-primary-600">1er sept. 2026</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Grandes entreprises & ETI</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Émission e-invoicing</td>
                </tr>
                <tr className="bg-orange-50 dark:bg-orange-900/10">
                  <td className="px-6 py-4 text-sm font-medium text-orange-600">1er sept. 2027</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">PME, TPE, Micro-entreprises</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">Émission e-invoicing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="not-prose bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-xl my-8">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              ⚠️ Attention : septembre 2026, pas 2027 !
            </h3>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              L'obligation d'e-reporting démarre dès septembre 2026 pour tout le monde, y compris les micro-entreprises. 
              Le délai jusqu'à 2027 ne concerne que l'émission des factures électroniques B2B.
            </p>
          </div>

          <h2>Quelles Données Faut-il Transmettre ?</h2>

          <p>
            L'e-reporting ne consiste pas à envoyer vos factures, mais à <strong>transmettre certaines données</strong> 
            sur vos transactions B2C ou internationales. Voici ce qui doit être déclaré :
          </p>

          <h3>Données obligatoires pour l'e-reporting</h3>

          <ul>
            <li><strong>Date de l'opération</strong> – Quand la vente a eu lieu</li>
            <li><strong>Montant HT et TTC</strong> – Le montant de la transaction</li>
            <li><strong>Taux de TVA appliqué</strong> – Ou mention de franchise</li>
            <li><strong>Nature de l'opération</strong> – Vente de bien ou service</li>
            <li><strong>Catégorie</strong> – B2C France, export UE, export hors UE...</li>
          </ul>

          <p>
            Vous n'avez pas besoin de transmettre l'identité de vos clients particuliers. 
            Il s'agit d'une déclaration agrégée ou transaction par transaction, selon votre choix.
          </p>

          <h3>Fréquence de transmission</h3>

          <p>
            Deux options s'offrent à vous :
          </p>

          <ol>
            <li><strong>Transaction par transaction</strong> – Chaque vente est déclarée individuellement (recommandé si vous avez peu de transactions)</li>
            <li><strong>Récapitulatif périodique</strong> – Déclaration globale mensuelle ou trimestrielle</li>
          </ol>

          <p>
            Le délai maximum est de 10 jours après la fin du mois pour les encaissements du mois écoulé.
          </p>

          <h2>Comment Se Préparer à l'E-Reporting ?</h2>

          <p>
            Bonne nouvelle : si vous utilisez un logiciel de facturation conforme à la réforme 2026, 
            il s'occupera automatiquement de l'e-reporting pour vous. Voici les étapes :
          </p>

          <div className="not-prose my-8">
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Choisir un logiciel compatible',
                  description: 'Optez pour une solution qui gère à la fois l\'e-invoicing et l\'e-reporting. Vérifiez que l\'éditeur est immatriculé comme PDP ou connecté au PPF.',
                },
                {
                  step: '2',
                  title: 'Catégoriser vos clients',
                  description: 'Distinguez vos clients B2B français, B2C, et internationaux. Le logiciel doit savoir quelle déclaration faire.',
                },
                {
                  step: '3',
                  title: 'Automatiser la transmission',
                  description: 'Le logiciel transmettra automatiquement les données à l\'administration via la plateforme choisie.',
                },
                {
                  step: '4',
                  title: 'Conserver les preuves',
                  description: 'Gardez une trace de vos déclarations. Votre logiciel doit vous fournir un historique consultable.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2>Cas Pratiques : Êtes-vous Concerné ?</h2>

          <div className="not-prose space-y-4 my-8">
            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
              <p className="font-semibold text-green-800 dark:text-green-200 mb-2">
                ✅ Développeur freelance facturant des PME françaises
              </p>
              <p className="text-sm text-green-700 dark:text-green-300">
                → E-invoicing uniquement (B2B). Pas d'e-reporting pour ces factures.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-lg border border-orange-200 dark:border-orange-800">
              <p className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                ⚠️ Photographe avec 50% particuliers, 50% entreprises
              </p>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                → E-invoicing pour les clients entreprises + E-reporting pour les particuliers.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-lg border border-orange-200 dark:border-orange-800">
              <p className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                ⚠️ Coach sportif avec uniquement des clients particuliers
              </p>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                → E-reporting uniquement. Vous n'émettez pas de factures électroniques, mais vous déclarez vos ventes.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-lg border border-orange-200 dark:border-orange-800">
              <p className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                ⚠️ Consultant travaillant avec une startup américaine
              </p>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                → E-reporting pour les exports. La facture n'est pas électronique au sens de la réforme, mais vous déclarez la transaction.
              </p>
            </div>
          </div>

          <h2>Sanctions en Cas de Non-Respect</h2>

          <p>
            Le non-respect des obligations d'e-reporting expose à des sanctions financières :
          </p>

          <ul>
            <li><strong>15 € par facture</strong> pour défaut ou retard de transmission</li>
            <li>Plafond de <strong>15 000 € par an</strong></li>
            <li>Sanctions applicables à partir de 2028 (période de tolérance initiale)</li>
          </ul>

          <p>
            L'administration a annoncé une période de tolérance pour les premiers mois, mais il est préférable 
            de se mettre en conformité dès septembre 2026 pour éviter tout risque.
          </p>

          <h2>E-Reporting et Franchise de TVA</h2>

          <p>
            Si vous êtes en franchise de base de TVA (ce qui est le cas de la plupart des auto-entrepreneurs 
            en dessous des seuils), vous êtes <strong>quand même concerné</strong> par l'e-reporting.
          </p>

          <p>
            La franchise de TVA vous dispense de facturer et déclarer la TVA, mais pas de déclarer vos transactions. 
            L'objectif de l'État est d'avoir une vision complète de l'activité économique, franchise ou pas.
          </p>

          <div className="not-prose bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 p-6 rounded-xl my-8">
            <h3 className="font-semibold text-primary-800 dark:text-primary-200 mb-2">
              💡 Conseil FacturSimple
            </h3>
            <p className="text-primary-700 dark:text-primary-300 text-sm">
              Choisissez un logiciel qui gère automatiquement le statut de franchise de TVA et adapte 
              les déclarations en conséquence. Vous n'aurez rien de plus à faire.
            </p>
          </div>

          <h2>Checklist de Préparation à l'E-Reporting</h2>

          <div className="not-prose bg-slate-50 dark:bg-slate-800 p-6 rounded-xl my-8">
            <ul className="space-y-3">
              {[
                'Identifier la nature de vos clients (B2B France, B2C, export)',
                'Choisir un logiciel compatible e-invoicing ET e-reporting',
                'Vérifier que l\'éditeur est immatriculé PDP ou connecté au PPF',
                'Configurer votre statut TVA (franchise ou assujetti)',
                'Tester la génération de déclarations avant sept. 2026',
                'Former vous-même sur l\'interface (5-10 min suffisent généralement)',
                'Prévoir un budget (9-30€/mois selon les solutions)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <input type="checkbox" className="mt-1 rounded border-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2>Conclusion</h2>

          <p>
            L'e-reporting est le pendant "B2C et international" de la réforme de facturation électronique. 
            Si vous travaillez avec des particuliers, des associations non assujetties, ou des clients étrangers, 
            vous êtes concerné dès septembre 2026.
          </p>

          <p>
            La bonne nouvelle : avec un logiciel adapté, tout se fait automatiquement. Vous n'avez qu'à 
            continuer à créer vos factures normalement, le logiciel se charge de la déclaration.
          </p>

          <p>
            Ne vous laissez pas surprendre par la date butoir. <strong>Préparez-vous maintenant</strong> pour être 
            serein en septembre 2026.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Prêt à Simplifier Votre Conformité ?
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            FacturSimple gère l'e-invoicing ET l'e-reporting automatiquement. 
            Créez vos factures, on s'occupe du reste.
          </p>
          <Link 
            href="/"
            className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            Rejoindre la liste d'attente →
          </Link>
        </div>

        {/* Related articles */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
            Articles liés
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/blog/reforme-facturation-2026"
              className="block p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              <span className="text-xs text-primary-600 font-medium">Réglementation</span>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mt-2">
                Réforme Facturation 2026 : Tout Ce Qui Change
              </h4>
            </Link>
            <Link 
              href="/blog/facturation-electronique-auto-entrepreneur"
              className="block p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              <span className="text-xs text-primary-600 font-medium">Guide</span>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mt-2">
                Facturation Électronique Auto-Entrepreneur : Le Guide
              </h4>
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
