import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ Facture Électronique 2026 - Questions Fréquentes | FacturSimple',
  description: 'Réponses à toutes vos questions sur la réforme de la facturation électronique 2026. Obligation, délais, coût, outils - tout ce que les micro-entrepreneurs doivent savoir.',
  keywords: 'FAQ facture électronique, questions facturation 2026, obligation micro-entrepreneur, PPF portail public facturation, Factur-X questions',
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            FacturSimple
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-blue-600">
            ← Retour au blog
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <p className="text-blue-600 text-sm font-medium mb-2">FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions Fréquentes : Facture Électronique 2026
          </h1>
          <p className="text-gray-500">
            Mis à jour le 4 février 2026 • 8 min de lecture
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Vous avez des questions sur la nouvelle réforme de la facturation électronique ? 
            Voici les réponses aux questions les plus fréquentes des micro-entrepreneurs et freelances.
          </p>

          {/* FAQ Section */}
          <div className="space-y-8">
            
            {/* Question 1 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                🗓️ Quand entre en vigueur l&apos;obligation de facturation électronique ?
              </h2>
              <p className="text-gray-700">
                Le calendrier est en deux phases :
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                <li><strong>1er septembre 2026</strong> : Toutes les entreprises françaises doivent pouvoir <em>recevoir</em> des factures électroniques</li>
                <li><strong>1er septembre 2027</strong> : Les micro-entreprises et PME devront <em>émettre</em> des factures électroniques (si assujetties à la TVA)</li>
              </ul>
            </div>

            {/* Question 2 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                🤔 Je suis en franchise de TVA, suis-je concerné ?
              </h2>
              <p className="text-gray-700">
                <strong>Oui, partiellement.</strong> Même en franchise de TVA (régime micro-BIC ou micro-BNC), vous devrez :
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                <li>Pouvoir <strong>recevoir</strong> des factures électroniques de vos fournisseurs dès septembre 2026</li>
                <li>Si vous facturez des professionnels (B2B), vous devrez émettre des e-factures à partir de septembre 2027</li>
              </ul>
              <p className="text-gray-700 mt-3">
                En revanche, si vous ne facturez que des particuliers (B2C), l&apos;obligation d&apos;émission ne s&apos;applique pas.
              </p>
            </div>

            {/* Question 3 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                📧 Un PDF envoyé par email, c&apos;est une facture électronique ?
              </h2>
              <p className="text-gray-700">
                <strong>Non !</strong> Au sens de la réforme, une facture électronique doit :
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                <li>Être dans un format structuré (Factur-X, UBL ou CII)</li>
                <li>Contenir des données lisibles par machine (XML intégré)</li>
                <li>Transiter par une plateforme certifiée (PDP) ou le Portail Public de Facturation (PPF)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Un simple PDF joint à un email ne répond pas à ces critères.
              </p>
            </div>

            {/* Question 4 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                💶 Qu&apos;est-ce que Factur-X ?
              </h2>
              <p className="text-gray-700">
                Factur-X est un format hybride franco-allemand qui combine :
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                <li>Un <strong>PDF lisible</strong> (pour les humains)</li>
                <li>Un <strong>fichier XML intégré</strong> (pour les systèmes informatiques)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                C&apos;est le format le plus adapté pour les petites entreprises car il reste visuellement familier tout en étant conforme.
              </p>
            </div>

            {/* Question 5 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                🏛️ C&apos;est quoi le PPF (Portail Public de Facturation) ?
              </h2>
              <p className="text-gray-700">
                Le PPF est une plateforme <strong>gratuite</strong> mise en place par l&apos;État pour permettre l&apos;échange de factures électroniques. 
                Il sera accessible à toutes les entreprises et servira d&apos;annuaire central.
              </p>
              <p className="text-gray-700 mt-3">
                <strong>Avantage</strong> : Gratuit<br/>
                <strong>Inconvénient</strong> : Fonctionnalités basiques, pas d&apos;outils de gestion
              </p>
            </div>

            {/* Question 6 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                🏢 Et les PDP (Plateformes de Dématérialisation Partenaires) ?
              </h2>
              <p className="text-gray-700">
                Les PDP sont des plateformes <strong>privées certifiées</strong> par l&apos;État qui peuvent :
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                <li>Émettre et recevoir des factures électroniques</li>
                <li>Transmettre les données à l&apos;administration fiscale</li>
                <li>Proposer des fonctionnalités avancées (tableaux de bord, relances, export comptable...)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Exemples : Pennylane, Tiime, et bientôt FacturSimple.
              </p>
            </div>

            {/* Question 7 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                💰 Combien va coûter un logiciel de facturation conforme ?
              </h2>
              <p className="text-gray-700">
                Les prix varient énormément :
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mt-3">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Pennylane</strong> : À partir de 99€/mois (comptabilité complète)</li>
                  <li><strong>Tiime</strong> : À partir de 49€/mois</li>
                  <li><strong>Indy</strong> : Gratuit avec limitations, puis payant</li>
                  <li><strong>Freebe</strong> : À partir de 14€/mois</li>
                  <li><strong>FacturSimple</strong> : 9€/mois (bientôt disponible)</li>
                </ul>
              </div>
              <p className="text-gray-700 mt-3">
                Pour un micro-entrepreneur qui fait 5-10 factures/mois, payer 50-100€ uniquement pour être conforme est souvent disproportionné.
              </p>
            </div>

            {/* Question 8 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                ⚠️ Que se passe-t-il si je ne suis pas conforme ?
              </h2>
              <p className="text-gray-700">
                Ne pas respecter l&apos;obligation de facturation électronique peut entraîner :
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                <li>Une <strong>amende de 15€ par facture</strong> non conforme (plafonnée à 15 000€/an)</li>
                <li>Des difficultés avec vos clients B2B qui ne pourront pas traiter vos factures</li>
                <li>Un retard de paiement si le format n&apos;est pas accepté</li>
              </ul>
            </div>

            {/* Question 9 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                📝 Comment me préparer dès maintenant ?
              </h2>
              <p className="text-gray-700">
                Voici une checklist simple :
              </p>
              <ol className="list-decimal pl-6 mt-2 text-gray-700 space-y-2">
                <li><strong>Identifiez vos besoins</strong> : Combien de factures émettez-vous par mois ? B2B ou B2C ?</li>
                <li><strong>Vérifiez votre outil actuel</strong> : Est-il compatible Factur-X ? Sera-t-il certifié PDP ?</li>
                <li><strong>Comparez les solutions</strong> : Prix, fonctionnalités, facilité d&apos;utilisation</li>
                <li><strong>Testez avant septembre 2026</strong> : Ne faites pas la migration au dernier moment</li>
                <li><strong>Inscrivez-vous sur une liste d&apos;attente</strong> : Pour être prêt dès le lancement</li>
              </ol>
            </div>

            {/* Question 10 */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                🔒 Mes données seront-elles sécurisées ?
              </h2>
              <p className="text-gray-700">
                Les PDP certifiées doivent respecter des normes strictes de sécurité imposées par l&apos;administration fiscale :
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                <li>Hébergement des données en France ou dans l&apos;UE</li>
                <li>Chiffrement des échanges</li>
                <li>Archivage légal pendant 10 ans</li>
                <li>Conformité RGPD</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Besoin d&apos;une solution simple et abordable ?
            </h3>
            <p className="text-gray-600 mb-6">
              FacturSimple arrive bientôt. Facturation électronique conforme à partir de 9€/mois.
            </p>
            <Link 
              href="/#waitlist" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Rejoindre la liste d&apos;attente →
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Articles connexes</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/guide-facture-electronique-2026" className="text-blue-600 hover:underline">
                  📖 Guide Complet : Facture Électronique 2026 pour les Micro-Entrepreneurs
                </Link>
              </li>
              <li>
                <Link href="/blog/comparatif-logiciels-facturation" className="text-blue-600 hover:underline">
                  📊 Comparatif : Les Meilleurs Logiciels de Facturation 2026
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500 text-sm">
          © 2026 FacturSimple. Tous droits réservés.
        </div>
      </footer>
    </div>
  )
}
