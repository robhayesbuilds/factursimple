import { Metadata } from 'next'
import Link from 'next/link'
import { IconArrowLeft, IconCalendar, IconCamera, IconAlertTriangle, IconChecklist, IconClock, IconFileInvoice, IconInfoCircle, IconReceipt, IconPalette, IconCurrencyEuro, IconQuestionMark } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Facturation électronique photographe et graphiste 2026 | Guide complet',
  description: 'Guide complet facturation électronique pour photographes et graphistes auto-entrepreneurs. Obligations 2026, cession de droits d\'auteur, forfaits et packages.',
  keywords: [
    'facturation électronique photographe',
    'facture graphiste 2026',
    'photographe auto-entrepreneur facturation',
    'graphiste freelance facture électronique',
    'cession droits auteur facture',
    'photographe micro-entreprise 2026',
    'designer freelance facturation 2026'
  ],
  openGraph: {
    title: 'Facturation électronique photographe et graphiste 2026 | Guide complet',
    description: 'Tout ce que les photographes et graphistes auto-entrepreneurs doivent savoir sur la facturation électronique obligatoire.',
    type: 'article',
    publishedTime: '2026-02-06',
  },
}

export default function FacturationPhotographeGraphiste() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <IconArrowLeft className="w-4 h-4 mr-2" />
          Retour aux articles
        </Link>

        <article className="prose prose-lg max-w-none">
          <header className="mb-8 not-prose">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <IconCalendar className="w-4 h-4" />
                6 février 2026
              </span>
              <span className="flex items-center gap-1">
                <IconClock className="w-4 h-4" />
                9 min de lecture
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Facturation électronique pour photographes et graphistes : le guide 2026
            </h1>
            <p className="text-xl text-gray-600">
              Vous êtes photographe, graphiste, illustrateur ou designer indépendant ? Voici comment vous préparer 
              à la facturation électronique obligatoire, avec les spécificités de vos métiers créatifs.
            </p>
          </header>

          {/* Quick Summary Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8 not-prose">
            <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <IconInfoCircle className="w-5 h-5" />
              En résumé
            </h2>
            <ul className="space-y-2 text-blue-800">
              <li>✅ <strong>1er septembre 2026</strong> : Obligation de recevoir des factures électroniques</li>
              <li>✅ <strong>1er septembre 2027</strong> : Obligation d'émettre des factures électroniques</li>
              <li>✅ <strong>Cession de droits</strong> : Doit apparaître distinctement sur vos factures</li>
              <li>✅ <strong>Forfaits et packages</strong> : Détaillez chaque prestation séparément</li>
            </ul>
          </div>

          <h2 className="flex items-center gap-2">
            <IconCamera className="w-6 h-6 text-blue-600" />
            Êtes-vous concerné ?
          </h2>
          
          <p>
            <strong>Oui, tous les créatifs auto-entrepreneurs sont concernés</strong> par la réforme, 
            quelle que soit votre spécialité :
          </p>

          <ul>
            <li><strong>Photographes</strong> : mariage, portrait, corporate, événementiel, produit...</li>
            <li><strong>Graphistes</strong> et designers graphiques</li>
            <li><strong>Illustrateurs</strong> et dessinateurs</li>
            <li><strong>Webdesigners</strong> et UI/UX designers</li>
            <li><strong>Vidéastes</strong> et motion designers</li>
            <li><strong>Directeurs artistiques</strong> freelance</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6 not-prose">
            <h3 className="font-semibold text-amber-900 flex items-center gap-2">
              <IconAlertTriangle className="w-5 h-5" />
              Attention : Régime spécial des auteurs
            </h3>
            <p className="text-amber-800 mt-2">
              Si vous êtes affilié à l'AGESSA ou la Maison des Artistes (MdA) pour vos revenus de droits d'auteur, 
              vous avez un régime fiscal différent. La facturation électronique s'applique quand même à vos 
              prestations de services (shooting, création graphique), mais les royalties sur droits d'auteur 
              peuvent suivre des règles spécifiques. Consultez votre organisme de gestion collective si besoin.
            </p>
          </div>

          <h2 className="flex items-center gap-2">
            <IconCalendar className="w-6 h-6 text-blue-600" />
            Le calendrier pour les créatifs
          </h2>

          <div className="overflow-x-auto my-6 not-prose">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Obligation</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Exemple concret</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-blue-600">1er sept. 2026</td>
                  <td className="px-4 py-3 text-sm">Recevoir des factures électroniques</td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    Votre labo photo vous envoie une facture → format Factur-X obligatoire
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-blue-600">1er sept. 2027</td>
                  <td className="px-4 py-3 text-sm">Émettre des factures électroniques</td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    Vous facturez un shooting entreprise → format Factur-X obligatoire
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="flex items-center gap-2">
            <IconPalette className="w-6 h-6 text-blue-600" />
            Spécificités des métiers créatifs
          </h2>

          <h3>1. La cession de droits d'auteur</h3>
          
          <p>
            En tant que créatif, vous cédez souvent des droits d'exploitation sur vos créations. 
            <strong>Cette cession doit apparaître clairement sur vos factures :</strong>
          </p>

          <ul>
            <li><strong>Prestation de création</strong> : le temps de travail (shooting, création graphique)</li>
            <li><strong>Cession de droits</strong> : ligne séparée avec détail des droits cédés</li>
            <li><strong>Supports autorisés</strong> : print, web, réseaux sociaux, etc.</li>
            <li><strong>Durée</strong> : 1 an, 5 ans, illimitée...</li>
            <li><strong>Territoire</strong> : France, Europe, monde...</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-6 not-prose">
            <h3 className="font-semibold text-green-900">💡 Exemple de facturation photographe</h3>
            <div className="mt-3 bg-white p-4 rounded border border-green-200 text-sm font-mono">
              <p className="text-gray-700">Shooting portrait corporate (3h) .......... 450,00 €</p>
              <p className="text-gray-700">Retouche et post-production (15 photos) ... 150,00 €</p>
              <p className="text-gray-700">Cession de droits (web + print, France, 2 ans) ... 200,00 €</p>
              <p className="text-gray-700 border-t border-green-200 pt-2 mt-2">
                <strong>Total HT ................................. 800,00 €</strong>
              </p>
            </div>
          </div>

          <h3>2. Les forfaits et packages</h3>

          <p>
            Vous proposez peut-être des forfaits mariage, des packages identité visuelle, 
            ou des abonnements réseaux sociaux. <strong>Bonne pratique pour la facturation électronique :</strong>
          </p>

          <ul>
            <li>Détaillez chaque composante du forfait (même si le prix global est fixe)</li>
            <li>Séparez les prestations de services des cessions de droits</li>
            <li>Indiquez la valeur unitaire de chaque élément si possible</li>
            <li>Précisez les livrables inclus (nombre de photos, formats, etc.)</li>
          </ul>

          <h3>3. Les acomptes et soldes</h3>

          <p>
            Pour les gros projets (mariage, refonte identité visuelle), vous demandez souvent un acompte :
          </p>

          <ul>
            <li><strong>Facture d'acompte</strong> : à émettre dès réception du paiement</li>
            <li><strong>Facture de solde</strong> : mentionne l'acompte déjà versé</li>
            <li><strong>Les deux doivent être au format électronique</strong> dès septembre 2027</li>
          </ul>

          <h3>4. Les tirages et produits physiques</h3>

          <p>
            Si vous vendez des tirages, albums, ou produits dérivés de vos créations :
          </p>

          <ul>
            <li><strong>Ventes B2B</strong> (à une entreprise) : facture électronique obligatoire</li>
            <li><strong>Ventes B2C</strong> (à un particulier) : pas de facture électronique, mais e-reporting obligatoire</li>
            <li>Distinguez bien la vente du produit physique de la prestation créative</li>
          </ul>

          <h2 className="flex items-center gap-2">
            <IconCurrencyEuro className="w-6 h-6 text-blue-600" />
            Vos fournisseurs habituels
          </h2>

          <p>
            Dès septembre 2026, vous devrez recevoir les factures de vos fournisseurs au format électronique :
          </p>

          <ul>
            <li><strong>Labo photo</strong> (tirages, albums) - Picto, CEWE, Zno...</li>
            <li><strong>Matériel photo/vidéo</strong> - Canon, Nikon, Sony, revendeurs</li>
            <li><strong>Logiciels</strong> - Adobe, Affinity, Capture One...</li>
            <li><strong>Hébergement web</strong> - OVH, Infomaniak, O2Switch...</li>
            <li><strong>Imprimeurs</strong> - cartes de visite, flyers, packaging</li>
            <li><strong>Locations</strong> - studio, matériel, décors</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-6 not-prose">
            <h3 className="font-semibold text-blue-900">🎯 Action immédiate</h3>
            <p className="text-blue-800 mt-2">
              Vérifiez que vos principaux fournisseurs sont prêts pour la facturation électronique. 
              Les grands acteurs (Adobe, OVH) le seront certainement, mais les petits labos locaux 
              pourraient avoir besoin de temps pour s'adapter.
            </p>
          </div>

          <h2 className="flex items-center gap-2">
            <IconQuestionMark className="w-6 h-6 text-blue-600" />
            FAQ photographes et graphistes
          </h2>

          <div className="space-y-6 my-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Je facture surtout des particuliers (mariages, portraits). Suis-je concerné ?
              </h3>
              <p className="text-gray-700">
                <strong>Oui, mais différemment.</strong> Pour vos clients particuliers (B2C), vous n'avez pas 
                à émettre de factures électroniques au format Factur-X. En revanche, vous devrez faire du 
                <strong> e-reporting</strong> : transmettre les données de ces ventes à l'administration. 
                Un bon logiciel de facturation le fera automatiquement pour vous.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Et si je travaille pour des agences étrangères ?
              </h3>
              <p className="text-gray-700">
                Les factures vers des clients étrangers (hors France) ne sont pas concernées par la 
                facturation électronique française. Cependant, ces opérations devront être déclarées 
                via l'<strong>e-reporting</strong> pour les transactions internationales.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Je suis en franchise de TVA. Est-ce que ça change quelque chose ?
              </h3>
              <p className="text-gray-700">
                <strong>Non, vous êtes quand même concerné.</strong> La franchise TVA vous dispense de 
                facturer la TVA, mais vous restez assujetti. Vous devrez recevoir des factures électroniques 
                dès 2026 et en émettre dès 2027 (avec la mention "TVA non applicable, art. 293 B du CGI").
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Dois-je garder mes factures PDF en plus du format Factur-X ?
              </h3>
              <p className="text-gray-700">
                <strong>Bonne nouvelle :</strong> Le format Factur-X est un PDF enrichi avec des données 
                structurées. Vous aurez donc toujours un PDF lisible, plus les données machine. 
                Conservez vos factures pendant <strong>10 ans</strong> (délai légal en France).
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Puis-je utiliser Chorus Pro gratuitement ?
              </h3>
              <p className="text-gray-700">
                <strong>Oui, mais c'est limité.</strong> Chorus Pro, le Portail Public de Facturation, 
                est gratuit et permet d'émettre et recevoir des factures électroniques. Cependant, 
                l'interface est basique et peu adaptée aux créatifs. Un logiciel spécialisé vous fera 
                gagner beaucoup de temps (modèles, cessions de droits, suivi clients).
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Je fais des photos de stock (Shutterstock, Adobe Stock). C'est concerné ?
              </h3>
              <p className="text-gray-700">
                Les plateformes de stock sont généralement basées à l'étranger et gèrent la facturation 
                pour vous. Vos revenus de stock photos sont plutôt des royalties que des factures classiques. 
                Cependant, si vous facturez directement des entreprises françaises pour des photos, 
                la facturation électronique s'applique.
              </p>
            </div>
          </div>

          <h2 className="flex items-center gap-2">
            <IconChecklist className="w-6 h-6 text-blue-600" />
            Checklist de préparation
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg my-6 not-prose">
            <h3 className="font-semibold text-gray-900 mb-4">5 étapes pour être prêt</h3>
            <div className="space-y-3">
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span><strong>Avant juin 2026 :</strong> Choisir un logiciel de facturation compatible Factur-X</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span><strong>Vérifier vos modèles de facture :</strong> Cession de droits bien détaillée, mentions légales à jour</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span><strong>Contacter vos fournisseurs :</strong> Labo photo, imprimeur, loueur de matériel - sont-ils prêts ?</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span><strong>Organiser vos archives :</strong> Conservation 10 ans des factures électroniques</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span><strong>Former vos clients :</strong> Expliquez-leur que vos factures seront au nouveau format</span>
              </label>
            </div>
          </div>

          <h2 className="flex items-center gap-2">
            <IconFileInvoice className="w-6 h-6 text-blue-600" />
            La solution FacturSimple
          </h2>

          <p>
            FacturSimple est conçu pour les auto-entrepreneurs créatifs :
          </p>

          <ul>
            <li>✅ <strong>Modèles pour créatifs</strong> : cession de droits pré-configurée</li>
            <li>✅ <strong>Forfaits et packages</strong> : détaillez facilement vos prestations</li>
            <li>✅ <strong>Acomptes automatiques</strong> : gérez les paiements échelonnés</li>
            <li>✅ <strong>Format Factur-X natif</strong> : 100% conforme à la réforme 2026</li>
            <li>✅ <strong>E-reporting intégré</strong> : vos ventes B2C déclarées automatiquement</li>
            <li>✅ <strong>À partir de 9€/mois</strong> : le moins cher du marché pour les indépendants</li>
          </ul>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl my-8 not-prose">
            <h3 className="text-2xl font-bold mb-4">Prêt à simplifier votre facturation ?</h3>
            <p className="text-blue-100 mb-6">
              Rejoignez la liste d'attente et soyez parmi les premiers à découvrir FacturSimple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/#waitlist" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Rejoindre la liste d'attente
              </Link>
              <Link 
                href="/generateur-facture" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors"
              >
                Essayer le générateur gratuit
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="border-t border-gray-200 pt-8 mt-8 not-prose">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Articles connexes</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link 
                href="/blog/guide-facture-electronique-2026" 
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <h4 className="font-medium text-gray-900">Guide complet de la facture électronique 2026</h4>
                <p className="text-sm text-gray-600 mt-1">Tout comprendre sur la réforme en 10 minutes</p>
              </Link>
              <Link 
                href="/blog/cgv-auto-entrepreneur" 
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <h4 className="font-medium text-gray-900">CGV pour auto-entrepreneurs</h4>
                <p className="text-sm text-gray-600 mt-1">Protégez-vous avec des conditions générales adaptées</p>
              </Link>
              <Link 
                href="/blog/mentions-legales-facture-auto-entrepreneur" 
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <h4 className="font-medium text-gray-900">Mentions légales obligatoires</h4>
                <p className="text-sm text-gray-600 mt-1">Les 12 mentions à ne jamais oublier</p>
              </Link>
              <Link 
                href="/checklist-2026" 
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <h4 className="font-medium text-gray-900">Checklist 2026 interactive</h4>
                <p className="text-sm text-gray-600 mt-1">Vérifiez votre conformité en 5 minutes</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
