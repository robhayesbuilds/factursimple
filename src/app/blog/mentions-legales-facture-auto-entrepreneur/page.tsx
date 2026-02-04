import { Metadata } from 'next'
import Link from 'next/link'
import { IconArrowLeft, IconCheck, IconAlertCircle, IconFileText, IconCopy } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Mentions Légales Facture Auto-Entrepreneur 2026 : La Checklist Complète | FacturSimple',
  description: 'Toutes les mentions obligatoires sur une facture auto-entrepreneur en 2026. Checklist complète, exemples concrets et erreurs à éviter pour être conforme.',
  keywords: 'mentions légales facture, facture conforme auto-entrepreneur, mentions obligatoires facture, modèle facture auto-entrepreneur, facture micro-entreprise',
  openGraph: {
    title: 'Mentions Légales Facture Auto-Entrepreneur 2026',
    description: 'La checklist complète des mentions obligatoires sur vos factures.',
    type: 'article',
    publishedTime: '2026-02-04',
  },
}

export default function MentionsLegalesFacturePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <IconArrowLeft size={16} />
          Retour au blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>📋 Guide pratique</span>
            <span>•</span>
            <time dateTime="2026-02-04">4 février 2026</time>
            <span>•</span>
            <span>7 min de lecture</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mentions Légales Facture Auto-Entrepreneur 2026 : La Checklist Complète
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Une facture incomplète peut être rejetée par votre client ou invalide fiscalement. 
            Voici toutes les mentions obligatoires à inclure en 2026.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-10">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">📑 Sommaire</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li><a href="#mentions-obligatoires" className="hover:text-blue-600">1. Les 12 mentions obligatoires</a></li>
            <li><a href="#mentions-specifiques" className="hover:text-blue-600">2. Mentions spécifiques auto-entrepreneur</a></li>
            <li><a href="#nouvelles-mentions-2026" className="hover:text-blue-600">3. Nouvelles mentions 2026 (facturation électronique)</a></li>
            <li><a href="#erreurs-frequentes" className="hover:text-blue-600">4. Erreurs fréquentes à éviter</a></li>
            <li><a href="#checklist" className="hover:text-blue-600">5. Checklist complète à télécharger</a></li>
          </ul>
        </nav>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          
          {/* Introduction */}
          <p>
            En tant qu&apos;auto-entrepreneur, chaque facture que vous émettez est un document légal. 
            Si elle ne contient pas toutes les mentions obligatoires, vous risquez :
          </p>
          
          <ul>
            <li><strong>Une amende de 15€ par mention manquante</strong> (plafonnée à 25% du montant de la facture)</li>
            <li><strong>Le rejet de la facture</strong> par votre client (notamment les entreprises et administrations)</li>
            <li><strong>Des complications comptables</strong> en cas de contrôle fiscal</li>
          </ul>
          
          <p>
            Avec la <Link href="/blog/reforme-facturation-2026" className="text-blue-600 hover:underline">
            réforme de la facturation électronique 2026</Link>, de nouvelles mentions deviennent 
            obligatoires. Voici le guide complet.
          </p>

          {/* Section 1 */}
          <h2 id="mentions-obligatoires" className="flex items-center gap-2">
            <IconFileText className="text-blue-600" />
            Les 12 Mentions Obligatoires sur Toute Facture
          </h2>
          
          <p>
            Ces mentions sont obligatoires pour <strong>tous les professionnels</strong>, 
            y compris les auto-entrepreneurs :
          </p>

          <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mt-0">
              ✅ Les 12 mentions obligatoires
            </h3>
            <ol className="text-blue-800 dark:text-blue-200 mb-0 space-y-2">
              <li><strong>Date d&apos;émission</strong> de la facture</li>
              <li><strong>Numéro de facture</strong> (unique et chronologique)</li>
              <li><strong>Identité du vendeur</strong> : nom, prénom, adresse</li>
              <li><strong>Numéro SIREN</strong> (9 chiffres)</li>
              <li><strong>Identité de l&apos;acheteur</strong> : nom/raison sociale, adresse</li>
              <li><strong>Numéro de TVA intracommunautaire</strong> (si assujetti) ou mention d&apos;exonération</li>
              <li><strong>Date de la prestation</strong> ou de livraison</li>
              <li><strong>Désignation des produits/services</strong></li>
              <li><strong>Quantité</strong> et <strong>prix unitaire HT</strong></li>
              <li><strong>Montant total HT</strong></li>
              <li><strong>Taux de TVA applicable</strong> (ou mention d&apos;exonération)</li>
              <li><strong>Montant total TTC</strong></li>
            </ol>
          </div>

          <h3>1. Date d&apos;émission</h3>
          <p>
            La date à laquelle vous créez la facture. Elle doit être émise <strong>au plus tard 
            le 15 du mois suivant</strong> la livraison ou prestation.
          </p>
          <p><em>Exemple :</em> Prestation réalisée le 20 janvier → facture à émettre avant le 15 février.</p>

          <h3>2. Numéro de facture</h3>
          <p>
            Chaque facture doit avoir un numéro <strong>unique</strong> et suivre une 
            <strong>séquence chronologique continue</strong>. Pas de trou dans la numérotation !
          </p>
          <p><em>Formats acceptés :</em></p>
          <ul>
            <li><code>2026-001</code>, <code>2026-002</code>...</li>
            <li><code>F-2026-0001</code></li>
            <li><code>20260204-01</code> (date + numéro du jour)</li>
          </ul>
          
          <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-4 my-6 rounded-r-lg">
            <p className="flex items-start gap-2 mb-0">
              <IconAlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
              <span>
                <strong>Attention :</strong> Vous ne pouvez pas supprimer une facture. 
                En cas d&apos;erreur, créez un avoir.
              </span>
            </p>
          </div>

          <h3>3-4. Identité et SIREN du vendeur</h3>
          <p>Vos informations complètes :</p>
          <ul>
            <li>Nom et prénom (ou nom commercial)</li>
            <li>Adresse professionnelle complète</li>
            <li>Numéro SIREN (9 chiffres, trouvable sur le site de l&apos;INSEE)</li>
          </ul>

          <h3>5. Identité de l&apos;acheteur</h3>
          <p>Pour un particulier : nom et adresse. Pour une entreprise : raison sociale, adresse 
          et idéalement SIREN/SIRET.</p>

          <h3>6. Numéro de TVA intracommunautaire</h3>
          <p>
            Si vous êtes assujetti à la TVA, indiquez votre numéro. Sinon, indiquez la mention 
            d&apos;exonération (voir section suivante).
          </p>

          <h3>7-12. Détails de la prestation et montants</h3>
          <p>
            Soyez précis dans la description. &quot;Prestation de service&quot; ne suffit pas. 
            Détaillez : &quot;Création logo + charte graphique - 3 propositions, 2 révisions incluses&quot;.
          </p>

          {/* Section 2 */}
          <h2 id="mentions-specifiques" className="flex items-center gap-2">
            <IconCheck className="text-green-600" />
            Mentions Spécifiques aux Auto-Entrepreneurs
          </h2>

          <p>
            En plus des mentions générales, les auto-entrepreneurs doivent ajouter des 
            <strong>mentions spécifiques</strong> selon leur situation :
          </p>

          <h3>Mention TVA (obligatoire)</h3>
          <p>
            La plupart des auto-entrepreneurs bénéficient de la <strong>franchise en base de TVA</strong>. 
            Vous devez alors ajouter cette mention exacte :
          </p>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6 font-mono text-sm">
            <div className="flex justify-between items-start">
              <p className="mb-0">&quot;TVA non applicable, art. 293 B du CGI&quot;</p>
              <button className="text-gray-500 hover:text-gray-700" title="Copier">
                <IconCopy size={18} />
              </button>
            </div>
          </div>

          <p>
            Si vous avez dépassé les seuils et êtes devenu assujetti, vous indiquez le taux 
            de TVA (20%, 10%, 5.5%) et les montants HT/TTC.
          </p>

          <h3>Mention assurance (si applicable)</h3>
          <p>
            Pour les activités artisanales du bâtiment, indiquez <strong>obligatoirement</strong> :
          </p>
          <ul>
            <li>L&apos;assurance souscrite</li>
            <li>Les coordonnées de l&apos;assureur</li>
            <li>La couverture géographique</li>
          </ul>

          <h3>Mention RCS/RM (si applicable)</h3>
          <p>
            Si vous êtes inscrit au Registre du Commerce (RCS) ou au Répertoire des Métiers (RM), 
            mentionnez :
          </p>
          <ul>
            <li>&quot;RCS [Ville] + numéro&quot; ou</li>
            <li>&quot;RM [Ville] + numéro&quot;</li>
          </ul>

          <h3>Conditions de paiement</h3>
          <p>Vous devez indiquer :</p>
          <ul>
            <li><strong>Date d&apos;échéance</strong> ou délai de paiement (ex: &quot;Paiement à 30 jours&quot;)</li>
            <li><strong>Pénalités de retard</strong> : taux applicable (minimum 3x le taux d&apos;intérêt légal)</li>
            <li><strong>Indemnité forfaitaire</strong> pour frais de recouvrement : 40€</li>
          </ul>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6 text-sm">
            <p className="font-semibold mb-2">Exemple de mention type :</p>
            <p className="mb-0 italic">
              &quot;Paiement à 30 jours date de facture. En cas de retard, pénalités de 
              12% annuel + indemnité forfaitaire de 40€ pour frais de recouvrement.&quot;
            </p>
          </div>

          {/* Section 3 - NEW FOR 2026 */}
          <h2 id="nouvelles-mentions-2026" className="flex items-center gap-2">
            🆕 Nouvelles Mentions Obligatoires 2026
          </h2>

          <p>
            Avec la <Link href="/blog/facturation-electronique-auto-entrepreneur" className="text-blue-600 hover:underline">
            réforme de la facturation électronique</Link>, de nouvelles mentions deviennent 
            obligatoires à partir de <strong>septembre 2026</strong> :
          </p>

          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 p-6 rounded-lg my-6">
            <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mt-0 mb-4">
              📋 Nouvelles mentions 2026
            </h3>
            <ul className="text-green-800 dark:text-green-200 mb-0 space-y-3">
              <li className="flex items-start gap-2">
                <IconCheck className="text-green-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Numéro SIREN du client</strong> (pour les factures B2B)</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="text-green-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Adresse de livraison</strong> (si différente de l&apos;adresse de facturation)</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="text-green-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Catégorie de l&apos;opération</strong> : livraison de biens, prestation de services, ou mixte</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="text-green-600 flex-shrink-0 mt-1" size={18} />
                <span><strong>Option de paiement de la TVA sur les débits</strong> (si applicable)</span>
              </li>
            </ul>
          </div>

          <p>
            Ces mentions seront automatiquement gérées si vous utilisez un 
            <Link href="/blog/logiciel-facture-micro-entreprise" className="text-blue-600 hover:underline">
            {' '}logiciel de facturation conforme</Link>.
          </p>

          {/* Section 4 */}
          <h2 id="erreurs-frequentes" className="flex items-center gap-2">
            <IconAlertCircle className="text-red-600" />
            Erreurs Fréquentes à Éviter
          </h2>

          <div className="space-y-4 my-6">
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Oublier la mention TVA</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-0">
                Sans la mention &quot;TVA non applicable, art. 293 B du CGI&quot;, votre facture est invalide.
              </p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Numérotation non continue</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-0">
                Passer de F-001 à F-003 crée un &quot;trou&quot; suspect pour l&apos;administration.
              </p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Description trop vague</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-0">
                &quot;Prestation de service&quot; n&apos;est pas suffisant. Détaillez ce que vous avez fait.
              </p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Modifier une facture émise</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-0">
                Une facture émise est définitive. Pour corriger, créez un avoir puis une nouvelle facture.
              </p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-semibold text-red-700 dark:text-red-400 mb-1">❌ Oublier les conditions de paiement</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-0">
                Les délais et pénalités sont obligatoires depuis 2013.
              </p>
            </div>
          </div>

          {/* Section 5 - Checklist */}
          <h2 id="checklist" className="flex items-center gap-2">
            ✅ Checklist Complète
          </h2>

          <p>
            Avant d&apos;envoyer chaque facture, vérifiez ces points :
          </p>

          <div className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 p-6 rounded-lg my-6">
            <h3 className="text-lg font-bold mb-4 mt-0">📋 Checklist Facture Auto-Entrepreneur 2026</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Informations vendeur</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Nom/prénom ou nom commercial</li>
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Adresse complète</li>
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> SIREN (9 chiffres)</li>
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> RCS/RM si applicable</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Informations client</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Nom/raison sociale</li>
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Adresse de facturation</li>
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> SIREN client (B2B, obligatoire 2026)</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Informations facture</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Date d&apos;émission</li>
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Numéro unique et chronologique</li>
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Date de prestation/livraison</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Détails prestation</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Description détaillée</li>
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Quantité</li>
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Prix unitaire HT</li>
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Total HT</li>
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Total TTC</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Mentions légales</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Mention TVA (&quot;TVA non applicable, art. 293 B du CGI&quot;)</li>
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Conditions de paiement</li>
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Pénalités de retard</li>
                  <li className="flex items-center gap-2"><input type="checkbox" readOnly /> Indemnité recouvrement (40€)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl my-10">
            <h3 className="text-2xl font-bold text-white mt-0 mb-4">
              Factures conformes en 2 clics avec FacturSimple
            </h3>
            <p className="text-blue-100 mb-6">
              Toutes les mentions obligatoires sont automatiquement ajoutées. 
              Plus de risque d&apos;erreur ou d&apos;amende.
            </p>
            <Link 
              href="/#waitlist"
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition no-underline"
            >
              Rejoindre la liste d&apos;attente →
            </Link>
          </div>

          {/* Conclusion */}
          <h2>En Résumé</h2>
          
          <p>
            Une facture auto-entrepreneur conforme en 2026 doit contenir :
          </p>
          
          <ul>
            <li>Les <strong>12 mentions de base</strong> (identité, numérotation, montants)</li>
            <li>La <strong>mention TVA</strong> obligatoire</li>
            <li>Les <strong>conditions de paiement</strong></li>
            <li>Les <strong>nouvelles mentions 2026</strong> pour la facturation électronique</li>
          </ul>
          
          <p>
            Le plus simple ? Utilisez un logiciel qui gère tout ça automatiquement. 
            C&apos;est ce que <Link href="/" className="text-blue-600 hover:underline">
            FacturSimple</Link> fait pour vous, dès 9€/mois.
          </p>

        </div>

        {/* Related Articles */}
        <nav className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Articles connexes
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/blog/facturation-electronique-auto-entrepreneur"
              className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <p className="font-semibold text-gray-900 dark:text-white mb-1">
                Facturation Électronique Auto-Entrepreneur
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Le guide complet pour se préparer à 2026
              </p>
            </Link>
            <Link 
              href="/blog/logiciel-facture-micro-entreprise"
              className="block p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <p className="font-semibold text-gray-900 dark:text-white mb-1">
                Meilleur Logiciel de Facture Micro-Entreprise
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Comparatif des solutions en 2026
              </p>
            </Link>
          </div>
        </nav>
      </article>
    </main>
  )
}
