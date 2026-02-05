import { Metadata } from 'next'
import { ArticleLayout } from '../_components/article-layout'
import { IconAlertTriangle, IconCheck, IconX, IconCalendar, IconCurrencyEuro, IconFileDescription, IconRocket } from "@tabler/icons-react"

export const metadata: Metadata = {
  title: 'Facture Électronique 2026 : Le Guide Complet pour les Micro-Entrepreneurs | FacturSimple',
  description: 'Tout savoir sur la réforme de la facturation électronique 2026. Calendrier, obligations, formats acceptés et comment vous préparer en tant que micro-entrepreneur.',
  keywords: 'facture électronique, micro-entrepreneur, auto-entrepreneur, 2026, Factur-X, réforme, obligation, facturation',
}

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Facture Électronique 2026 : Le Guide Complet pour les Micro-Entrepreneurs"
      excerpt="Êtes-vous prêt pour septembre 2026 ? Voici tout ce que vous devez savoir sur la nouvelle obligation de facturation électronique."
      date="2026-02-03"
      readTime="8 min"
      category="Guide"
    >
      {/* Alert Box */}
      <div className="not-prose mb-10 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-900/20">
        <div className="flex items-start gap-3">
          <IconAlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-amber-600" />
          <div>
            <h2 className="text-lg font-semibold text-amber-800 dark:text-amber-200">
              Septembre 2026 : Êtes-vous prêt pour la facturation électronique ?
            </h2>
            <p className="mt-1 text-amber-700 dark:text-amber-300">
              Si vous êtes micro-entrepreneur ou auto-entrepreneur en France, une nouvelle obligation arrive bientôt. Voici ce que vous devez savoir.
            </p>
          </div>
        </div>
      </div>

      <h2 className="flex items-center gap-2">
        <IconCalendar className="h-6 w-6 text-primary" />
        Le calendrier officiel
      </h2>
      <ul>
        <li><strong>1er septembre 2026 :</strong> Toutes les entreprises doivent pouvoir <strong>RECEVOIR</strong> des factures électroniques</li>
        <li><strong>1er septembre 2027 :</strong> Les micro-entreprises devront <strong>ÉMETTRE</strong> des factures électroniques (si assujetties à la TVA)</li>
      </ul>

      <h2>Qu&apos;est-ce qui change concrètement ?</h2>
      <p>
        Fini les PDF envoyés par email. Une &quot;facture électronique&quot; au sens de la réforme, c&apos;est :
      </p>
      <ul>
        <li>Un format structuré (<strong>Factur-X</strong>, UBL, ou CII)</li>
        <li>Transitant par une plateforme de dématérialisation certifiée (PDP) ou le Portail Public de Facturation (PPF)</li>
        <li>Contenant des données lisibles par machine</li>
      </ul>

      {/* Info Box */}
      <div className="not-prose my-8 rounded-xl bg-blue-50 p-6 dark:bg-blue-900/20">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">
          &quot;Je suis en franchise de TVA, suis-je concerné ?&quot;
        </h3>
        <p className="mt-2 text-blue-700 dark:text-blue-300">
          <strong>OUI.</strong> Même en franchise de TVA, vous devez être capable de :
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-blue-700 dark:text-blue-300">
          <li>Recevoir des factures électroniques de vos fournisseurs (sept. 2026)</li>
          <li>Potentiellement émettre si vous facturez des entreprises B2B (sept. 2027)</li>
        </ul>
      </div>

      <h2 className="flex items-center gap-2">
        <IconCurrencyEuro className="h-6 w-6 text-primary" />
        Combien ça va coûter ?
      </h2>
      <p>
        C&apos;est là que ça fait mal. Les solutions actuelles :
      </p>
      <ul>
        <li><strong>Pennylane</strong> : 99€/mois (overkill pour une micro)</li>
        <li><strong>Tiime</strong> : 49€/mois et plus</li>
        <li><strong>Indy</strong> : Gratuit mais limité, transition vers payant</li>
      </ul>
      <p>
        Pour une micro qui fait 3-5 factures par mois, payer 50-100€/mois juste pour être conforme, c&apos;est difficile à justifier.
      </p>

      <h2 className="flex items-center gap-2">
        <IconFileDescription className="h-6 w-6 text-primary" />
        C&apos;est quoi le format Factur-X ?
      </h2>
      <p>
        Factur-X est le format standard français pour la facturation électronique. C&apos;est un format <strong>hybride</strong> :
      </p>
      <ul>
        <li><strong>Un PDF</strong> — lisible par l&apos;humain, comme une facture classique</li>
        <li><strong>+ des données XML</strong> — intégrées dans le PDF, lisibles par les logiciels</li>
      </ul>
      <p>
        Cela permet à votre client de lire la facture normalement, tout en permettant à son logiciel comptable d&apos;importer automatiquement les données.
      </p>

      <h2 className="flex items-center gap-2">
        <IconCheck className="h-6 w-6 text-green-600" />
        Que faire maintenant ?
      </h2>
      
      <div className="not-prose my-8 rounded-xl bg-green-50 p-6 dark:bg-green-900/20">
        <ol className="list-inside list-decimal space-y-3 text-green-700 dark:text-green-300">
          <li>Renseignez-vous sur les obligations exactes pour votre activité</li>
          <li>Vérifiez si votre logiciel actuel sera compatible Factur-X</li>
          <li>Prévoyez un budget ou cherchez des alternatives abordables</li>
          <li>Ne paniquez pas : vous avez 7 mois pour la réception, 19 mois pour l&apos;émission</li>
        </ol>
      </div>

      <h2>Récapitulatif : Ce qui marchera / Ce qui ne marchera plus</h2>
      
      <div className="not-prose my-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-red-50 p-6 dark:bg-red-900/20">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-red-800 dark:text-red-200">
            <IconX className="h-5 w-5" />
            Ne marchera plus
          </h3>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-red-700 dark:text-red-300">
            <li>Factures PDF faites sous Word ou Excel</li>
            <li>Envoi de factures par simple email</li>
            <li>Logiciels non certifiés</li>
            <li>Pas de transmission à l&apos;administration</li>
          </ul>
        </div>
        <div className="rounded-xl bg-green-50 p-6 dark:bg-green-900/20">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-green-800 dark:text-green-200">
            <IconCheck className="h-5 w-5" />
            Ce qu&apos;exige la loi
          </h3>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-green-700 dark:text-green-300">
            <li>Format structuré (Factur-X, UBL, CII)</li>
            <li>Transmission via plateforme agréée</li>
            <li>E-reporting des transactions B2C</li>
            <li>Stockage conforme pendant 10 ans</li>
          </ul>
        </div>
      </div>

      <h2 className="flex items-center gap-2">
        <IconRocket className="h-6 w-6 text-primary" />
        La solution FacturSimple
      </h2>
      <p>
        C&apos;est pour ça que nous créons <strong>FacturSimple</strong> : une solution de facturation électronique conçue spécifiquement pour les micro-entrepreneurs. Simple, conforme, et à un prix juste : <strong>à partir de 9€/mois</strong>.
      </p>
    </ArticleLayout>
  )
}
