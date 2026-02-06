import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Facture Électronique Jardinier Paysagiste 2026 : Guide Auto-Entrepreneur',
  description: 'Guide complet sur la facturation électronique pour les jardiniers et paysagistes auto-entrepreneurs. Particuliers vs copropriétés, services à la personne, obligations 2026.',
  keywords: ['facture électronique jardinier', 'jardinier auto-entrepreneur 2026', 'paysagiste facturation', 'entretien jardin facturation électronique'],
  alternates: {
    canonical: 'https://factursimple.fr/blog/facturation-electronique-jardinier-paysagiste'
  }
}

export default function FacturationJardinierPaysagiste() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Link href="/blog" className="hover:text-black">Blog</Link>
          <span>/</span>
          <span>Guides Métiers</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Facture Électronique pour Jardinier-Paysagiste : Guide 2026
        </h1>
        <p className="text-xl text-gray-600">
          Vous êtes jardinier ou paysagiste en auto-entreprise ? Découvrez comment la réforme 
          de la facturation électronique 2026 impacte votre activité selon votre clientèle.
        </p>
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            🌿 Bonne nouvelle : Si vous travaillez principalement avec des particuliers 
            pour l'entretien de leurs jardins, vous n'êtes <strong>majoritairement pas concerné</strong> 
            par la facturation électronique obligatoire.
          </p>
        </div>
      </header>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-10">
        <h2 className="text-lg font-semibold text-amber-900 mb-3">📋 En résumé pour les jardiniers-paysagistes</h2>
        <ul className="space-y-2 text-amber-800">
          <li>✅ <strong>Particuliers (maisons, jardins privés)</strong> → Pas de facture électronique obligatoire</li>
          <li>⚠️ <strong>Copropriétés, syndics</strong> → Facturation électronique obligatoire</li>
          <li>⚠️ <strong>Mairies, collectivités</strong> → Facturation électronique obligatoire</li>
          <li>⚠️ <strong>Entreprises (bureaux, restaurants...)</strong> → Facturation électronique obligatoire</li>
          <li>📅 Obligation à partir du <strong>1er septembre 2026</strong></li>
        </ul>
      </div>

      <nav className="bg-gray-50 rounded-lg p-6 mb-10">
        <h2 className="font-semibold mb-4">Sommaire</h2>
        <ul className="space-y-2 text-blue-600">
          <li><a href="#qui-concerne" className="hover:underline">1. Qui est vraiment concerné ?</a></li>
          <li><a href="#types-clients" className="hover:underline">2. Vos différents types de clients</a></li>
          <li><a href="#cas-pratiques" className="hover:underline">3. Cas pratiques jardinier</a></li>
          <li><a href="#services-personne" className="hover:underline">4. Services à la personne (SAP)</a></li>
          <li><a href="#vente-vegetaux" className="hover:underline">5. Vente de végétaux et fournitures</a></li>
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
              <li>• Entretien de jardin chez un particulier</li>
              <li>• Tonte, taille de haies pour un propriétaire</li>
              <li>• Création de jardin pour une maison</li>
              <li>• Petits travaux de jardinage (SAP)</li>
              <li>• Vente de plantes à des particuliers</li>
            </ul>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
            <h3 className="font-semibold text-orange-800 mb-3">⚠️ Concernés (B2B)</h3>
            <ul className="space-y-2 text-orange-700 text-sm">
              <li>• Entretien espaces verts copropriété</li>
              <li>• Contrat avec un syndic</li>
              <li>• Travaux pour mairies/collectivités</li>
              <li>• Espaces verts d'entreprises</li>
              <li>• Sous-traitance pour paysagistes</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>💡 Le critère décisif :</strong> Qui paie la facture ? Si c'est M. ou Mme Dupont 
            pour leur jardin personnel, c'est du B2C. Si c'est une copropriété, une entreprise ou une 
            mairie, c'est du B2B.
          </p>
        </div>
      </section>

      <section id="types-clients" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">2. Vos différents types de clients</h2>

        <h3 className="text-xl font-semibold mb-4">Particuliers propriétaires (majorité des cas)</h3>
        <p className="mb-4">
          C'est le cœur de métier du jardinier indépendant : entretien de jardins de maisons individuelles, 
          tonte de pelouse, taille de haies, débroussaillage, petits aménagements...
        </p>
        <p className="mb-6">
          <strong>→ Aucune obligation de facture électronique.</strong> Vous pouvez continuer avec 
          vos factures classiques (papier ou PDF).
        </p>

        <h3 className="text-xl font-semibold mb-4">Copropriétés et syndics</h3>
        <p className="mb-4">
          Beaucoup de jardiniers ont des contrats réguliers avec des copropriétés pour l'entretien 
          des espaces verts communs (pelouses, haies, massifs...).
        </p>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <p className="text-orange-800">
            <strong>⚠️ Attention :</strong> La copropriété (via le syndic) est une personne morale. 
            Même si les copropriétaires sont des particuliers, la <strong>facture à la copropriété 
            est du B2B</strong> et nécessite une facturation électronique.
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Collectivités locales</h3>
        <p className="mb-4">
          Vous entretenez des espaces verts pour la mairie, le département, des établissements 
          publics (écoles, médiathèques...) ?
        </p>
        <p className="mb-6">
          <strong>→ B2B = facture électronique obligatoire.</strong> Les collectivités sont déjà 
          habituées à Chorus Pro depuis des années.
        </p>

        <h3 className="text-xl font-semibold mb-4">Entreprises et commerces</h3>
        <p className="mb-4">
          Entretien des espaces verts d'entreprises, restaurants avec terrasse végétalisée, 
          hôtels, campings, résidences de tourisme...
        </p>
        <p className="mb-6">
          <strong>→ B2B = facture électronique obligatoire.</strong>
        </p>

        <h3 className="text-xl font-semibold mb-4">Sous-traitance pour paysagistes</h3>
        <p className="mb-4">
          Vous intervenez en renfort pour des entreprises de paysage plus importantes ?
        </p>
        <p className="mb-6">
          <strong>→ Facturation à l'entreprise de paysage = B2B = facture électronique obligatoire.</strong>
        </p>
      </section>

      <section id="cas-pratiques" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">3. Cas pratiques jardinier-paysagiste</h2>

        <div className="space-y-6">
          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">🏠 Cas 1 : Pierre, jardinier 100% particuliers</h3>
            <p className="text-gray-600 mb-3">
              Pierre ne travaille qu'avec des particuliers. Il entretient une vingtaine de jardins 
              de maisons individuelles dans sa commune et les environs.
            </p>
            <p className="text-green-700 font-medium">
              → Pierre n'est PAS concerné par la réforme. Il peut continuer exactement comme avant.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">🏢 Cas 2 : Marie, particuliers + copropriétés</h3>
            <p className="text-gray-600 mb-3">
              Marie a une clientèle mixte : des particuliers (60%) et 3 copropriétés (40% de son CA) 
              pour lesquelles elle entretient les espaces verts communs.
            </p>
            <div className="bg-amber-50 p-3 rounded mb-3">
              <p className="text-amber-800 text-sm">
                • Factures particuliers → Pas d'obligation<br/>
                • Factures copropriétés → Électronique obligatoire
              </p>
            </div>
            <p className="text-amber-700 font-medium">
              → Marie devra s'équiper pour ses factures aux copropriétés.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">🏛️ Cas 3 : Thomas, contrats avec la mairie</h3>
            <p className="text-gray-600 mb-3">
              Thomas a décroché un marché avec sa commune pour l'entretien des ronds-points 
              et des espaces verts municipaux. Il facture la mairie mensuellement.
            </p>
            <p className="text-orange-700 font-medium">
              → Thomas EST concerné : toutes ses factures à la mairie sont B2B. Il peut déjà 
              utiliser Chorus Pro (gratuit) pour ses factures aux collectivités.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">🌳 Cas 4 : Sophie, création de jardins</h3>
            <p className="text-gray-600 mb-3">
              Sophie est paysagiste conceptrice. Elle crée des jardins pour des particuliers : 
              étude, conception, plantation, aménagement.
            </p>
            <p className="text-green-700 font-medium">
              → Sophie n'est PAS concernée si ses clients sont uniquement des particuliers, 
              même pour des projets importants (plusieurs milliers d'euros).
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold mb-3">🏨 Cas 5 : Lucas, espaces verts d'hôtels</h3>
            <p className="text-gray-600 mb-3">
              Lucas a plusieurs clients hôteliers. Il entretient les jardins, terrasses et 
              espaces verts de 4 hôtels-restaurants de sa région.
            </p>
            <p className="text-orange-700 font-medium">
              → Lucas EST concerné : les hôtels sont des entreprises (B2B), 
              toutes ses factures devront être électroniques.
            </p>
          </div>
        </div>
      </section>

      <section id="services-personne" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">4. Services à la personne (SAP)</h2>

        <p className="mb-4">
          De nombreux jardiniers sont agréés "Services à la personne" (SAP), ce qui permet à 
          leurs clients particuliers de bénéficier du crédit d'impôt de 50%.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-green-800 mb-3">✅ Bon à savoir</h3>
          <p className="text-green-700 mb-3">
            L'agrément SAP ne change rien à la facturation électronique : vos clients SAP 
            sont des particuliers, donc vos prestations restent du B2C.
          </p>
          <p className="text-green-700">
            <strong>Vous n'avez PAS besoin de facture électronique pour vos prestations SAP.</strong>
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Prestations éligibles SAP (jardinage)</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>Petits travaux de jardinage (tonte, taille...)</li>
          <li>Travaux limités à 5 000 € TTC/an par foyer</li>
          <li>Exclusion : création de jardin, élagage, abattage</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>💡 Astuce :</strong> Pour vos clients SAP, vous pouvez utiliser l'avance 
            immédiate URSSAF qui simplifie les paiements. Ce système est compatible avec la 
            réforme 2026 car il concerne des prestations B2C.
          </p>
        </div>
      </section>

      <section id="vente-vegetaux" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">5. Vente de végétaux et fournitures</h2>

        <p className="mb-4">
          En plus de vos prestations de service, vous vendez peut-être des végétaux, du terreau, 
          du paillage, des outils...
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold mb-3">Qui achète vos fournitures ?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-green-700 mb-2">Particuliers</p>
              <p className="text-sm text-gray-600">
                M. Martin achète des plantes que vous lui fournissez lors de l'aménagement 
                de son jardin → B2C, pas d'obligation.
              </p>
            </div>
            <div>
              <p className="font-medium text-orange-700 mb-2">Professionnels</p>
              <p className="text-sm text-gray-600">
                Vous revendez des fournitures à un autre jardinier ou une entreprise 
                → B2B, facture électronique obligatoire.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Facturation des fournitures aux particuliers</h3>
        <p className="mb-4">
          Quand vous facturez à un particulier des végétaux + votre prestation de plantation, 
          le tout reste du B2C. Vous pouvez faire une seule facture incluant main d'œuvre 
          et fournitures.
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
                <td className="border border-gray-300 px-4 py-3">Copropriétés/syndics</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-700">
                  ⚠️ Factures électroniques obligatoires
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Collectivités (mairies...)</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-700">
                  ⚠️ Factures électroniques obligatoires (Chorus Pro)
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Entreprises/commerces</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-700">
                  ⚠️ Factures électroniques obligatoires
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Sous-traitance</td>
                <td className="border border-gray-300 px-4 py-3 text-orange-700">
                  ⚠️ Factures électroniques obligatoires
                </td>
              </tr>
              <tr className="bg-gray-50">
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
            Même avec uniquement des particuliers, vous devrez transmettre un récapitulatif de 
            vos ventes B2C (e-reporting). Ce n'est pas de la facturation électronique, mais 
            une simple déclaration de chiffre d'affaires.
          </p>
        </div>
      </section>

      <section id="preparer" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">7. Comment vous préparer</h2>

        <h3 className="text-xl font-semibold mb-4">Si vous n'avez que des particuliers</h3>
        <div className="bg-green-50 border border-green-200 rounded-lg p-5 mb-6">
          <ul className="space-y-2 text-green-800">
            <li>✅ Continuez vos factures classiques</li>
            <li>✅ Préparez-vous à l'e-reporting (déclaration de CA)</li>
            <li>✅ Un logiciel simple suffira pour la déclaration</li>
            <li>✅ Pas d'urgence à changer vos habitudes</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-4">Si vous travaillez déjà avec des collectivités</h3>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
          <ul className="space-y-2 text-blue-800">
            <li>💡 Vous utilisez probablement déjà Chorus Pro</li>
            <li>💡 La transition sera naturelle pour vous</li>
            <li>💡 Chorus Pro reste utilisable après 2026</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-4">Si vous avez des clients professionnels divers</h3>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
          <ol className="space-y-3 text-amber-800">
            <li><strong>1. Identifiez vos clients B2B :</strong> Copropriétés, entreprises, commerces...</li>
            <li><strong>2. Estimez le volume :</strong> Combien de factures B2B par mois ?</li>
            <li><strong>3. Choisissez un outil adapté :</strong> Logiciel compatible Factur-X ou PPF</li>
            <li><strong>4. Testez avant septembre 2026 :</strong> Familiarisez-vous avec le processus</li>
          </ol>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3">FacturSimple : la solution pour jardiniers</h3>
          <p className="mb-4 text-blue-100">
            Gérez facilement vos factures particuliers ET professionnels. FacturSimple s'occupe 
            automatiquement de la facturation électronique pour vos clients B2B.
          </p>
          <ul className="space-y-2 mb-4 text-blue-100">
            <li>✓ Factures classiques pour particuliers et SAP</li>
            <li>✓ Factures électroniques pour copropriétés et entreprises</li>
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
        <h2 className="text-2xl font-bold mb-6">Questions fréquentes des jardiniers</h2>
        
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Je fais du débroussaillage obligatoire (OLD), c'est concerné ?
            </summary>
            <p className="mt-3 text-gray-600">
              Si le client est un particulier qui vous paie pour son terrain, c'est du B2C, 
              pas de facture électronique obligatoire. Si c'est une collectivité qui vous mandate, 
              c'est du B2B.
            </p>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              La copropriété me paie via le syndic, le syndic n'est pas mon client ?
            </summary>
            <p className="mt-3 text-gray-600">
              Le syndic agit au nom de la copropriété qui est votre client (la personne morale). 
              Votre facture est adressée à la copropriété, pas au syndic en propre. C'est bien 
              du B2B.
            </p>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Un particulier me demande une facture pour sa résidence secondaire louée, c'est B2B ?
            </summary>
            <p className="mt-3 text-gray-600">
              Non, si c'est un particulier propriétaire qui vous paie pour l'entretien de son 
              bien (même locatif), c'est du B2C. Ce serait du B2B si c'était une SCI ou une 
              société qui possède le bien.
            </p>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              J'ai le CESU, ça change quelque chose pour 2026 ?
            </summary>
            <p className="mt-3 text-gray-600">
              Non, le CESU (Chèque Emploi Service Universel) concerne des prestations aux 
              particuliers (B2C). Ces prestations ne sont pas concernées par la facturation 
              électronique obligatoire.
            </p>
          </details>

          <details className="border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">
              Je n'ai qu'une copropriété, dois-je vraiment m'équiper ?
            </summary>
            <p className="mt-3 text-gray-600">
              Oui, même pour une seule facture B2B par mois, vous devrez utiliser un outil 
              compatible. La bonne nouvelle : des solutions comme FacturSimple permettent de 
              gérer quelques factures B2B sans difficulté ni surcoût important.
            </p>
          </details>
        </div>
      </section>

      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">À retenir</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Pour les jardiniers 100% particuliers</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✅ Pas de facture électronique obligatoire</li>
              <li>✅ SAP et CESU non concernés</li>
              <li>✅ E-reporting de votre CA uniquement</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Pour ceux avec des clients pro</h3>
            <ul className="space-y-2 text-gray-600">
              <li>⚠️ Copropriétés = B2B = e-facture</li>
              <li>⚠️ Collectivités = B2B (Chorus Pro)</li>
              <li>⚠️ Anticipez avec un outil adapté</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-xl font-bold mb-4">Articles connexes</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link 
            href="/blog/facturation-electronique-artisan-btp" 
            className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold">Artisans BTP</h3>
            <p className="text-sm text-gray-600">Guide pour les artisans du bâtiment</p>
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
