import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Facture Électronique Coiffeur à Domicile 2026 : Guide Complet Auto-Entrepreneur',
  description: 'Guide complet sur la facturation électronique pour les coiffeurs à domicile auto-entrepreneurs. Clientèle particulière vs EHPAD, produits revendus, obligations 2026.',
  keywords: ['facture électronique coiffeur domicile', 'coiffeur auto-entrepreneur 2026', 'facturation EHPAD coiffure', 'coiffeur mobile facturation'],
  alternates: {
    canonical: 'https://factursimple.fr/blog/facturation-electronique-coiffeur-domicile'
  }
}

export default function FacturationCoiffeurDomicile() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Link href="/blog" className="hover:text-black">Blog</Link>
          <span>/</span>
          <span>Guides Métiers</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Facture Électronique pour Coiffeur à Domicile : Guide 2026
        </h1>
        <p className="text-xl text-gray-600">
          Vous êtes coiffeur ou coiffeuse à domicile en auto-entreprise ? Découvrez comment la réforme 
          de la facturation électronique 2026 impacte (ou non) votre activité selon votre clientèle.
        </p>
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            💇 Bonne nouvelle : Si vous travaillez uniquement avec des particuliers à leur domicile, 
            vous n'êtes <strong>PAS concerné</strong> par la facturation électronique obligatoire.
          </p>
        </div>
      </header>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-10">
        <h2 className="text-lg font-semibold text-amber-900 mb-3">📋 En résumé pour les coiffeurs à domicile</h2>
        <ul className="space-y-2 text-amber-800">
          <li>✅ <strong>Particuliers à domicile</strong> → Pas de facture électronique obligatoire</li>
          <li>⚠️ <strong>EHPAD, maisons de retraite</strong> → Facturation électronique obligatoire</li>
          <li>⚠️ <strong>Salons de coiffure (remplacement)</strong> → Facturation électronique obligatoire</li>
          <li>⚠️ <strong>Entreprises (events, photos, films)</strong> → Facturation électronique obligatoire</li>
          <li>📅 Obligation à partir du <strong>1er septembre 2026</strong></li>
        </ul>
      </div>

      <nav className="bg-gray-50 rounded-lg p-6 mb-10">
        <h2 className="font-semibold mb-4">Sommaire</h2>
        <ul className="space-y-2 text-blue-600">
          <li><a href="#qui-concerne" className="hover:underline">1. Qui est vraiment concerné ?</a></li>
          <li><a href="#types-clients" className="hover:underline">2. Vos différents types de clients</a></li>
          <li><a href="#cas-pratiques" className="hover:underline">3. Cas pratiques coiffure à domicile</a></li>
          <li><a href="#produits-revente" className="hover:underline">4. Vente de produits capillaires</a></li>
          <li><a href="#notes-frais" className="hover:underline">5. Notes de frais et tickets</a></li>
          <li><a href="#obligations" className="hover:underline">6. Vos obligations réelles en 2026</a></li>
          <li><a href="#preparer" className="hover:underline">7. Comment vous préparer</a></li>
        </ul>
      </nav>

      <section id="qui-concerne" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">1. Qui est vraiment concerné par la réforme ?</h2>
        
        <p className="mb-4">
          La facturation électronique obligatoire ne concerne que les transactions <strong>B2B</strong> 
          (business-to-business), c'est-à-dire entre professionnels. Les prestations aux particuliers 
          (B2C) restent en dehors du dispositif.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-green-800 mb-3">✅ NON concernés (B2C)</h3>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>• Coupes, colorations chez le particulier</li>
              <li>• Coiffure de mariée à domicile</li>
              <li>• Soins capillaires pour particuliers</li>
              <li>• Cours de coiffure à un particulier</li>
              <li>• Produits vendus à des particuliers</li>
            </ul>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
            <h3 className="font-semibold text-orange-800 mb-3">⚠️ Concernés (B2B)</h3>
            <ul className="space-y-2 text-orange-700 text-sm">
              <li>• Prestations en EHPAD ou maison de retraite</li>
              <li>• Remplacement dans un salon de coiffure</li>
              <li>• Coiffure pour shootings pro (agences)</li>
              <li>• Prestations pour tournages (production)</li>
              <li>• Coiffure événementiel (entreprises)</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>💡 Le critère décisif :</strong> Qui paie la facture ? Si c'est une personne physique 
            pour elle-même, c'est du B2C. Si c'est une entreprise, association, ou établissement, c'est du B2B.
          </p>
        </div>
      </section>

      <section id="types-clients" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">2. Vos différents types de clients</h2>

        <h3 className="text-xl font-semibold mb-4">Particuliers à leur domicile (majorité des cas)</h3>
        <p className="mb-4">
          C'est le cœur de métier du coiffeur à domicile : vous vous déplacez chez Mme Dupont pour 
          une coupe, chez M. Martin pour une taille de barbe, chez une future mariée pour son brushing...
        </p>
        <p className="mb-6">
          <strong>→ Aucune obligation de facture électronique.</strong> Vous pouvez continuer avec 
          vos tickets de caisse, reçus papier ou factures PDF classiques.
        </p>

        <h3 className="text-xl font-semibold mb-4">EHPAD et maisons de retraite</h3>
        <p className="mb-4">
          Beaucoup de coiffeurs à domicile ont des contrats avec des établissements pour personnes âgées. 
          Vous intervenez régulièrement pour coiffer les résidents.
        </p>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <p className="text-orange-800">
            <strong>⚠️ Attention :</strong> Même si le bénéficiaire est un particulier (le résident), 
            si la <strong>facture est adressée à l'EHPAD</strong> (personne morale), c'est du B2B 
            et la facturation électronique s'applique.
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Salons de coiffure (remplacement, extra)</h3>
        <p className="mb-4">
          Vous remplacez parfois un(e) collègue dans son salon ? Vous êtes appelé(e) en renfort 
          pour les périodes chargées (fêtes, mariages) ?
        </p>
        <p className="mb-6">
          <strong>→ Facturation au salon (entreprise) = B2B = facture électronique obligatoire.</strong>
        </p>

        <h3 className="text-xl font-semibold mb-4">Productions et agences</h3>
        <p className="mb-4">
          Coiffure pour un shooting photo, un tournage publicitaire, un clip vidéo, un défilé de mode...
        </p>
        <p className="mb-6">
          <strong>→ Facturation à l'agence ou la production = B2B = facture électronique obligatoire.</strong>
        </p>
      </section>

      <section id="cas-pratiques" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">3. Cas pratiques coiffure à domicile</h2>

        <div className="space-y-6">
          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">🏠 Cas 1 : Sophie, coiffeuse 100% particuliers</h3>
            <p className="text-gray-600 mb-3">
              Sophie ne travaille qu'avec des particuliers à leur domicile. Coupes, colorations, 
              brushings pour des femmes, hommes et enfants dans leur salon.
            </p>
            <p className="text-green-700 font-medium">
              → Sophie n'est PAS concernée par la réforme. Elle peut continuer exactement comme avant.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">🏥 Cas 2 : Marc, contrat EHPAD + particuliers</h3>
            <p className="text-gray-600 mb-3">
              Marc intervient 2 jours par semaine dans un EHPAD (facturé à l'établissement) et 
              le reste du temps chez des particuliers.
            </p>
            <div className="bg-amber-50 p-3 rounded mb-3">
              <p className="text-amber-800 text-sm">
                • Factures EHPAD → Électronique obligatoire<br/>
                • Particuliers → Pas d'obligation
              </p>
            </div>
            <p className="text-amber-700 font-medium">
              → Marc devra s'équiper pour ses factures à l'EHPAD uniquement.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">💒 Cas 3 : Julie, spécialisée mariages</h3>
            <p className="text-gray-600 mb-3">
              Julie fait principalement de la coiffure de mariée. Elle facture directement la 
              mariée (particulier) pour ses prestations.
            </p>
            <p className="text-green-700 font-medium">
              → Julie n'est PAS concernée : la mariée est une particulière, même pour un événement important.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">🎬 Cas 4 : Thomas, coiffure pour shootings</h3>
            <p className="text-gray-600 mb-3">
              Thomas travaille régulièrement pour des agences de mannequins et des productions 
              audiovisuelles. Il facture les entreprises, pas les modèles.
            </p>
            <p className="text-orange-700 font-medium">
              → Thomas EST concerné : toutes ses factures sont B2B et devront être électroniques.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">💈 Cas 5 : Émilie, remplacement en salon</h3>
            <p className="text-gray-600 mb-3">
              Émilie fait du domicile à 80% mais remplace aussi dans des salons quand ils sont 
              débordés. Elle facture le salon, pas les clients du salon.
            </p>
            <div className="bg-amber-50 p-3 rounded mb-3">
              <p className="text-amber-800 text-sm">
                • Factures aux salons → Électronique obligatoire<br/>
                • Particuliers à domicile → Pas d'obligation
              </p>
            </div>
            <p className="text-amber-700 font-medium">
              → Émilie devra s'équiper pour ses factures aux salons.
            </p>
          </div>
        </div>
      </section>

      <section id="produits-revente" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">4. Vente de produits capillaires</h2>

        <p className="mb-4">
          Beaucoup de coiffeurs à domicile vendent aussi des produits : shampoings professionnels, 
          soins, colorations, accessoires...
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold mb-3">Qui achète vos produits ?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-green-700 mb-2">Particuliers</p>
              <p className="text-sm text-gray-600">
                Mme Dupont achète un shampoing après sa coupe → B2C, pas d'obligation.
              </p>
            </div>
            <div>
              <p className="font-medium text-orange-700 mb-2">Professionnels</p>
              <p className="text-sm text-gray-600">
                Un autre coiffeur vous achète des produits → B2B, facture électronique obligatoire.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>💡 Conseil :</strong> Si vous vendez occasionnellement des produits à d'autres 
            professionnels, ces ventes devront être facturées électroniquement à partir de septembre 2026.
          </p>
        </div>
      </section>

      <section id="notes-frais" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">5. Notes de frais et tickets de caisse</h2>

        <p className="mb-4">
          En tant que coiffeur à domicile, vous avez des frais : produits professionnels, matériel, 
          déplacements... Comment sont-ils impactés ?
        </p>

        <h3 className="text-xl font-semibold mb-4">Vos achats professionnels</h3>
        <p className="mb-4">
          Quand vous achetez vos produits chez un grossiste (B2B), vous recevrez des factures 
          électroniques de leur part à partir de janvier 2026 (grandes entreprises) ou septembre 2026 
          (toutes entreprises).
        </p>
        <p className="mb-6">
          <strong>Bonne nouvelle :</strong> Vous devrez simplement être capable de les recevoir, 
          ce qui sera automatique avec la plupart des logiciels de comptabilité.
        </p>

        <h3 className="text-xl font-semibold mb-4">Tickets pour les déplacements</h3>
        <p className="mb-4">
          Essence, péages, parking... Ces achats à des particuliers ou en B2C ne sont pas concernés 
          par la réforme. Gardez vos tickets comme d'habitude.
        </p>
      </section>

      <section id="obligations" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">6. Vos obligations réelles en 2026</h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left">Situation</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Obligation 2026</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">100% particuliers</td>
                <td className="border border-gray-300 px-4 py-3 text-green-700">
                  ✅ Aucune obligation de facture électronique
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">EHPAD/maisons de retraite</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-700">
                  ⚠️ Factures électroniques obligatoires pour ces clients
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Remplacement en salon</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-700">
                  ⚠️ Factures électroniques obligatoires pour ces clients
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Agences/productions</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-700">
                  ⚠️ Factures électroniques obligatoires pour ces clients
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">E-reporting (déclaration CA)</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-700">
                  ⚠️ Obligatoire pour toute l'activité (B2C inclus)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="font-semibold text-purple-800 mb-2">📊 E-reporting : une obligation pour tous</h3>
          <p className="text-purple-700 text-sm">
            Même si vous n'avez que des clients particuliers, vous devrez transmettre un 
            récapitulatif de vos ventes B2C à l'administration (e-reporting). Mais ce n'est 
            pas une facturation électronique : c'est une simple déclaration de chiffre d'affaires.
          </p>
        </div>
      </section>

      <section id="preparer" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">7. Comment vous préparer</h2>

        <h3 className="text-xl font-semibold mb-4">Si vous n'avez que des particuliers</h3>
        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
          <ul className="space-y-2 text-green-800">
            <li>✅ Continuez comme d'habitude pour vos factures</li>
            <li>✅ Préparez-vous à l'e-reporting (déclaration de CA)</li>
            <li>✅ Un logiciel simple suffira pour la déclaration</li>
            <li>✅ Attendez sereinement septembre 2026</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-4">Si vous avez aussi des clients professionnels</h3>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
          <ol className="space-y-3 text-amber-800">
            <li><strong>1. Identifiez vos clients B2B :</strong> EHPAD, salons, agences, entreprises...</li>
            <li><strong>2. Estimez le volume :</strong> Combien de factures B2B par mois ?</li>
            <li><strong>3. Choisissez un outil adapté :</strong> Logiciel compatible Factur-X ou PPF</li>
            <li><strong>4. Testez avant septembre 2026 :</strong> Familiarisez-vous avec le processus</li>
          </ol>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3">FacturSimple : la solution adaptée aux coiffeurs</h3>
          <p className="mb-4 text-blue-100">
            Gérez facilement vos factures particuliers ET professionnels. FacturSimple s'occupe 
            automatiquement de la facturation électronique pour vos clients B2B.
          </p>
          <ul className="space-y-2 mb-4 text-blue-100">
            <li>✓ Factures classiques pour vos particuliers</li>
            <li>✓ Factures électroniques pour EHPAD et salons</li>
            <li>✓ E-reporting automatique de votre CA</li>
            <li>✓ Conçu pour les auto-entrepreneurs</li>
          </ul>
          <Link 
            href="/#pricing" 
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Découvrir FacturSimple
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Questions fréquentes des coiffeurs à domicile</h2>
        
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Je coiffe une mariée chez elle, c'est du B2B ?
            </summary>
            <p className="mt-3 text-gray-600">
              Non, c'est du B2C. La mariée est une particulière qui paie pour elle-même. 
              En revanche, si un wedding planner (entreprise) vous facture pour plusieurs prestations 
              qu'il revend, là ce serait du B2B.
            </p>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              L'EHPAD me paie en espèces, ça change quelque chose ?
            </summary>
            <p className="mt-3 text-gray-600">
              Non, le mode de paiement n'a aucun impact. Ce qui compte, c'est la nature du client : 
              un EHPAD est une personne morale, donc B2B. La facture devra être électronique 
              quel que soit le mode de règlement.
            </p>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Je fais des chèques cadeaux coiffure, c'est concerné ?
            </summary>
            <p className="mt-3 text-gray-600">
              Si le chèque cadeau est acheté par un particulier pour offrir → B2C, pas concerné.
              Si une entreprise achète des chèques cadeaux pour ses employés → B2B, facture électronique.
            </p>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Un particulier me demande une facture pour son CE, que faire ?
            </summary>
            <p className="mt-3 text-gray-600">
              Attention au vrai payeur ! Si c'est le CE (Comité d'Entreprise) qui rembourse 
              et qui demande la facture, c'est du B2B. Si le particulier paie de sa poche 
              et se fait rembourser, c'est du B2C (vous facturez le particulier).
            </p>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Je n'ai qu'un ou deux clients pro par an, je dois quand même m'équiper ?
            </summary>
            <p className="mt-3 text-gray-600">
              Oui, mais pas de panique. Même pour quelques factures par an, vous devrez utiliser 
              un outil compatible. La bonne nouvelle : les solutions comme FacturSimple permettent 
              de gérer facilement quelques factures B2B sans surcoût important.
            </p>
          </details>
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">À retenir</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Pour les coiffeurs 100% particuliers</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✅ Pas de facture électronique obligatoire</li>
              <li>✅ E-reporting de votre CA uniquement</li>
              <li>✅ Pas d'urgence à changer vos outils</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Pour ceux avec des clients pro</h3>
            <ul className="space-y-2 text-gray-600">
              <li>⚠️ Factures B2B électroniques dès septembre 2026</li>
              <li>⚠️ EHPAD, salons, agences = clients B2B</li>
              <li>⚠️ Anticipez en choisissant un outil adapté</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-xl font-bold mb-4">Articles connexes</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link 
            href="/blog/facturation-electronique-therapeute-bien-etre" 
            className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold">Thérapeutes et bien-être</h3>
            <p className="text-sm text-gray-600">Guide pour les praticiens du bien-être</p>
          </Link>
          <Link 
            href="/blog/facturation-electronique-auto-entrepreneur" 
            className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold">Guide général auto-entrepreneur</h3>
            <p className="text-sm text-gray-600">Tout savoir sur la réforme 2026</p>
          </Link>
          <Link 
            href="/blog/e-reporting-micro-entreprise" 
            className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold">E-reporting expliqué</h3>
            <p className="text-sm text-gray-600">Comprendre la déclaration de CA</p>
          </Link>
          <Link 
            href="/outils" 
            className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold">Outils gratuits</h3>
            <p className="text-sm text-gray-600">Vérifiez si vous êtes concerné</p>
          </Link>
        </div>
      </section>
    </article>
  )
}
