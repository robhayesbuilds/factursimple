{/* eslint-disable react/no-unescaped-entities */}
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TVA Auto-Entrepreneur 2026 : Seuils, Franchise et Facturation Électronique",
  description:
    "Guide complet sur la TVA pour les auto-entrepreneurs en 2026. Seuils de franchise, passage à la TVA, mentions obligatoires et impact sur la facturation électronique.",
  keywords: [
    "TVA auto-entrepreneur",
    "franchise TVA 2026",
    "seuil TVA micro-entreprise",
    "TVA facturation électronique",
    "auto-entrepreneur TVA obligatoire",
    "exonération TVA",
  ],
  alternates: {
    canonical: "https://factursimple.fr/blog/tva-auto-entrepreneur-2026",
  },
  openGraph: {
    title: "TVA Auto-Entrepreneur 2026 : Seuils, Franchise et Facturation Électronique",
    description:
      "Tout comprendre sur la TVA en auto-entreprise : seuils, franchise, obligations et lien avec la réforme e-invoicing.",
    type: "article",
    publishedTime: "2026-02-04T05:00:00.000Z",
    authors: ["FacturSimple"],
  },
};

export default function TVAAutoEntrepreneurPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-primary">
          Accueil
        </Link>{" "}
        /{" "}
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>{" "}
        / TVA Auto-Entrepreneur 2026
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span>📅 4 février 2026</span>
          <span>•</span>
          <span>⏱️ 11 min de lecture</span>
          <span>•</span>
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
            Fiscalité
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          TVA Auto-Entrepreneur 2026 : Seuils, Franchise et Facturation Électronique
        </h1>
        <p className="text-xl text-muted-foreground">
          Comprendre la TVA en micro-entreprise n'est pas si compliqué. Ce guide vous explique les 
          seuils de franchise, quand vous devez facturer la TVA, et comment cela s'articule avec 
          la nouvelle obligation de facturation électronique.
        </p>
      </header>

      {/* Table of Contents */}
      <div className="bg-muted/50 rounded-lg p-6 mb-10">
        <h2 className="font-semibold text-lg mb-4">📋 Dans cet article</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#franchise-tva" className="text-primary hover:underline">
              1. La franchise en base de TVA : c'est quoi ?
            </a>
          </li>
          <li>
            <a href="#seuils-2026" className="text-primary hover:underline">
              2. Les seuils de TVA en 2026
            </a>
          </li>
          <li>
            <a href="#depassement" className="text-primary hover:underline">
              3. Que se passe-t-il si je dépasse les seuils ?
            </a>
          </li>
          <li>
            <a href="#mentions-facture" className="text-primary hover:underline">
              4. Mentions TVA sur vos factures
            </a>
          </li>
          <li>
            <a href="#tva-et-e-invoicing" className="text-primary hover:underline">
              5. TVA et facturation électronique 2026
            </a>
          </li>
          <li>
            <a href="#option-tva" className="text-primary hover:underline">
              6. Peut-on opter volontairement pour la TVA ?
            </a>
          </li>
          <li>
            <a href="#declaration" className="text-primary hover:underline">
              7. Déclarer et payer la TVA : mode d'emploi
            </a>
          </li>
          <li>
            <a href="#erreurs" className="text-primary hover:underline">
              8. Les erreurs à éviter
            </a>
          </li>
          <li>
            <a href="#checklist" className="text-primary hover:underline">
              9. Checklist TVA Auto-Entrepreneur
            </a>
          </li>
        </ul>
      </div>

      {/* Introduction */}
      <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <p>
          La TVA est souvent le sujet le plus confus pour les auto-entrepreneurs. <strong>Dois-je 
          la facturer ? Quand ? Comment ?</strong> Avec la réforme de la facturation électronique 
          en 2026, ces questions deviennent encore plus importantes.
        </p>
        <p>
          Bonne nouvelle : en tant qu'auto-entrepreneur, vous bénéficiez généralement de la 
          <strong> franchise en base de TVA</strong>. Cela signifie que vous ne facturez pas de TVA 
          à vos clients (et vous ne la récupérez pas sur vos achats). Mais cette franchise a des 
          limites, et les dépasser change tout.
        </p>
        <p>
          Ce guide vous explique tout ce que vous devez savoir sur la TVA en 2026, avec un focus 
          particulier sur l'articulation avec la nouvelle obligation de facturation électronique.
        </p>
      </section>

      {/* Section 1 */}
      <section id="franchise-tva" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">1. La franchise en base de TVA : c'est quoi ?</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            La <strong>franchise en base de TVA</strong> est un régime fiscal qui dispense les 
            petites entreprises de collecter et reverser la TVA. C'est l'un des avantages majeurs 
            du statut d'auto-entrepreneur.
          </p>
          
          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">✅ Avantages de la franchise TVA</h3>
            <ul className="space-y-2 text-green-700 dark:text-green-300">
              <li>• <strong>Prix plus compétitifs</strong> : Vous pouvez proposer des tarifs HT = TTC</li>
              <li>• <strong>Simplicité administrative</strong> : Pas de déclarations de TVA à faire</li>
              <li>• <strong>Avantage pour le B2C</strong> : Les particuliers paient moins cher</li>
              <li>• <strong>Trésorerie simplifiée</strong> : Pas de TVA à avancer ou récupérer</li>
            </ul>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-6 my-6">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">⚠️ Inconvénients de la franchise TVA</h3>
            <ul className="space-y-2 text-amber-700 dark:text-amber-300">
              <li>• <strong>Pas de récupération</strong> : La TVA sur vos achats est une charge</li>
              <li>• <strong>Moins intéressant en B2B</strong> : Vos clients pro ne récupèrent pas de TVA</li>
              <li>• <strong>Gros achats défavorisés</strong> : Matériel, formation, logiciels coûtent plus cher</li>
            </ul>
          </div>

          <p>
            <strong>Concrètement :</strong> si vous facturez 1000€ à un client, vous encaissez 1000€. 
            Pas de TVA à reverser à l'État. Mais si vous achetez un ordinateur à 1200€ TTC, vous 
            payez bien les 200€ de TVA inclus, sans pouvoir les récupérer.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="seuils-2026" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">2. Les seuils de TVA en 2026</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Pour bénéficier de la franchise en base de TVA, votre chiffre d'affaires annuel ne 
            doit pas dépasser certains seuils. Ces seuils dépendent de votre activité.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-card border rounded-lg">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Type d'activité</th>
                  <th className="px-4 py-3 text-left font-semibold">Seuil de base</th>
                  <th className="px-4 py-3 text-left font-semibold">Seuil majoré</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">
                    <strong>Vente de marchandises</strong><br />
                    <span className="text-sm text-muted-foreground">Commerce, restauration à emporter</span>
                  </td>
                  <td className="px-4 py-3 font-mono">91 900 €</td>
                  <td className="px-4 py-3 font-mono">101 000 €</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <strong>Prestations de services</strong><br />
                    <span className="text-sm text-muted-foreground">Artisans, consultants, freelances</span>
                  </td>
                  <td className="px-4 py-3 font-mono">36 800 €</td>
                  <td className="px-4 py-3 font-mono">39 100 €</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <strong>Professions libérales réglementées</strong><br />
                    <span className="text-sm text-muted-foreground">Avocats, médecins, architectes</span>
                  </td>
                  <td className="px-4 py-3 font-mono">36 800 €</td>
                  <td className="px-4 py-3 font-mono">39 100 €</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <strong>Hébergement</strong><br />
                    <span className="text-sm text-muted-foreground">Location meublée, gîtes</span>
                  </td>
                  <td className="px-4 py-3 font-mono">91 900 €</td>
                  <td className="px-4 py-3 font-mono">101 000 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">💡 Comment ça marche ?</h3>
            <ul className="space-y-2 text-blue-700 dark:text-blue-300">
              <li>• <strong>Sous le seuil de base :</strong> Vous restez en franchise l'année suivante</li>
              <li>• <strong>Entre les deux seuils :</strong> Vous restez en franchise l'année en cours, mais devenez redevable l'année suivante</li>
              <li>• <strong>Au-dessus du seuil majoré :</strong> Vous devenez redevable immédiatement (dès le dépassement)</li>
            </ul>
          </div>

          <p>
            <strong>Exemple :</strong> Marie est graphiste freelance. En 2025, elle a facturé 35 000€. 
            Elle reste en franchise en 2026. Mais si elle atteint 40 000€ en 2026 (dépassement du seuil 
            majoré de 39 100€), elle devra facturer la TVA dès le jour du dépassement.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section id="depassement" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">3. Que se passe-t-il si je dépasse les seuils ?</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Le dépassement des seuils de TVA est un moment charnière. Voici ce qui se passe selon 
            votre situation :
          </p>

          <div className="bg-card border rounded-lg p-6 my-6">
            <h3 className="font-semibold mb-4">📊 Scénario 1 : Dépassement du seuil de base (36 800€ ou 91 900€)</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>L'année du dépassement, vous restez en franchise</li>
              <li>L'année suivante, vous devenez redevable de la TVA</li>
              <li>Vous avez le temps de vous préparer</li>
            </ol>
          </div>

          <div className="bg-card border rounded-lg p-6 my-6">
            <h3 className="font-semibold mb-4">🚨 Scénario 2 : Dépassement du seuil majoré (39 100€ ou 101 000€)</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Vous devenez redevable <strong>immédiatement</strong></li>
              <li>Dès la facture qui fait dépasser le seuil, vous devez facturer la TVA</li>
              <li>Vous devez demander un numéro de TVA intracommunautaire</li>
              <li>Vos factures précédentes (de l'année) restent sans TVA</li>
            </ol>
          </div>

          <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-6 my-6">
            <h3 className="font-semibold text-red-800 dark:text-red-200 mb-3">⚠️ Attention : le piège du dépassement tardif</h3>
            <p className="text-red-700 dark:text-red-300">
              Si vous dépassez le seuil majoré en décembre, vous devez quand même facturer la TVA sur 
              la facture concernée. Beaucoup d'auto-entrepreneurs "oublient" et se retrouvent à devoir 
              régulariser avec des pénalités.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4">Démarches après dépassement du seuil majoré</h3>
          <ol className="list-decimal list-inside space-y-3">
            <li><strong>Demander un numéro de TVA</strong> : Sur impots.gouv.fr ou auprès de votre SIE</li>
            <li><strong>Modifier vos factures</strong> : Ajouter la TVA (20% en général)</li>
            <li><strong>Mettre à jour votre logiciel</strong> : Activer la gestion TVA</li>
            <li><strong>Choisir votre régime</strong> : Réel simplifié ou réel normal</li>
            <li><strong>Déclarer la TVA</strong> : Mensuellement ou trimestriellement</li>
          </ol>
        </div>
      </section>

      {/* Section 4 */}
      <section id="mentions-facture" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">4. Mentions TVA sur vos factures</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Que vous soyez en franchise ou redevable de TVA, vos factures doivent comporter des 
            mentions spécifiques. Voici ce qui change selon votre situation.
          </p>

          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">✅ En franchise de TVA (pas de TVA)</h3>
            <p className="text-green-700 dark:text-green-300 mb-2">
              <strong>Mention obligatoire :</strong>
            </p>
            <p className="font-mono bg-white dark:bg-black p-3 rounded border text-sm">
              "TVA non applicable, art. 293 B du CGI"
            </p>
            <ul className="mt-4 space-y-1 text-sm text-green-700 dark:text-green-300">
              <li>• Pas de numéro de TVA intracommunautaire</li>
              <li>• Prix HT = Prix TTC</li>
              <li>• Pas de ligne TVA sur la facture</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">📋 Redevable de TVA</h3>
            <p className="text-blue-700 dark:text-blue-300 mb-2">
              <strong>Mentions obligatoires :</strong>
            </p>
            <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <li>• Numéro de TVA intracommunautaire (FR + 11 chiffres)</li>
              <li>• Montant HT, taux de TVA, montant TVA, montant TTC</li>
              <li>• Taux de TVA par ligne si différents taux</li>
              <li>• Numéro de TVA du client (si professionnel UE)</li>
            </ul>
          </div>

          <p>
            <strong>Conseil :</strong> Utilisez un{" "}
            <Link href="/" className="text-primary hover:underline">
              logiciel de facturation conforme
            </Link>{" "}
            qui gère automatiquement ces mentions. En 2026, avec la facturation électronique, 
            ces informations sont d'autant plus importantes car elles sont vérifiées par les 
            plateformes.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section id="tva-et-e-invoicing" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">5. TVA et facturation électronique 2026</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            C'est la question que tout le monde se pose : <strong>quel est le lien entre la TVA 
            et la réforme de la facturation électronique de septembre 2026 ?</strong>
          </p>

          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-6 my-6">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">🔑 Point clé</h3>
            <p className="text-amber-700 dark:text-amber-300">
              La facturation électronique s'applique à <strong>toutes les entreprises assujetties à la TVA</strong>, 
              même celles en franchise. Un auto-entrepreneur en franchise de TVA est "assujetti non redevable" : 
              il doit quand même se conformer à la réforme.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4">Calendrier pour les auto-entrepreneurs</h3>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-card border rounded-lg">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Date</th>
                  <th className="px-4 py-3 text-left font-semibold">Obligation</th>
                  <th className="px-4 py-3 text-left font-semibold">TVA concernée ?</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3 font-mono">1er sept. 2026</td>
                  <td className="px-4 py-3">Recevoir des factures électroniques</td>
                  <td className="px-4 py-3">Oui (franchise ou pas)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono">1er sept. 2027</td>
                  <td className="px-4 py-3">Émettre des factures électroniques (B2B)</td>
                  <td className="px-4 py-3">Oui (franchise ou pas)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono">1er sept. 2027</td>
                  <td className="px-4 py-3">E-reporting (B2C + international)</td>
                  <td className="px-4 py-3">Oui (franchise ou pas)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg p-6 my-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">💡 Franchise TVA ≠ Exemption e-invoicing</h3>
            <p className="text-purple-700 dark:text-purple-300 mb-3">
              Être en franchise de TVA ne vous dispense PAS de la facturation électronique. 
              Vos factures devront quand même :
            </p>
            <ul className="space-y-1 text-sm text-purple-700 dark:text-purple-300">
              <li>• Transiter par une plateforme certifiée (PDP) ou le portail public (PPF)</li>
              <li>• Être au format Factur-X (PDF + données XML)</li>
              <li>• Mentionner "TVA non applicable, art. 293 B du CGI"</li>
            </ul>
          </div>

          <p>
            La bonne nouvelle ? Les plateformes de facturation électronique gèrent automatiquement 
            le statut TVA. Si vous êtes en franchise, le système le sait et adapte vos factures 
            en conséquence.
          </p>

          <p>
            <strong>Pour en savoir plus sur la réforme :</strong>{" "}
            <Link href="/blog/reforme-facturation-2026" className="text-primary hover:underline">
              Guide complet de la réforme facturation 2026
            </Link>
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section id="option-tva" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">6. Peut-on opter volontairement pour la TVA ?</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Oui ! Même si vous êtes sous les seuils, vous pouvez choisir de devenir redevable 
            de TVA. C'est ce qu'on appelle l'<strong>option pour le paiement de la TVA</strong>.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4">Quand c'est intéressant</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Gros investissements prévus :</strong> Vous pourrez récupérer la TVA sur 
              du matériel coûteux
            </li>
            <li>
              <strong>Clients principalement B2B :</strong> Ils récupèrent la TVA, donc votre 
              prix n'augmente pas vraiment pour eux
            </li>
            <li>
              <strong>Fournisseurs avec beaucoup de TVA :</strong> Si vos achats représentent 
              une part importante de vos charges
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-4">Quand éviter</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Clients principalement B2C :</strong> Les particuliers paient la TVA, 
              vous devenez 20% plus cher
            </li>
            <li>
              <strong>Peu d'achats déductibles :</strong> Services intellectuels, peu de frais
            </li>
            <li>
              <strong>Administratif supplémentaire :</strong> Déclarations TVA mensuelles ou 
              trimestrielles
            </li>
          </ul>

          <div className="bg-muted rounded-lg p-6 my-6">
            <h3 className="font-semibold mb-3">📝 Comment opter pour la TVA</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Envoyez un courrier à votre Service des Impôts des Entreprises (SIE)</li>
              <li>L'option prend effet au 1er jour du mois suivant</li>
              <li>Vous êtes engagé pour 2 ans minimum</li>
              <li>Vous recevez un numéro de TVA intracommunautaire</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section id="declaration" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">7. Déclarer et payer la TVA : mode d'emploi</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Si vous devenez redevable de TVA (par dépassement ou par option), voici comment 
            ça fonctionne.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4">Régime réel simplifié (le plus courant)</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>2 acomptes semestriels (en juillet et décembre)</li>
            <li>1 déclaration annuelle de régularisation (CA12)</li>
            <li>Idéal si TVA à payer &lt; 15 000€/an</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-4">Régime réel normal</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Déclaration mensuelle (CA3)</li>
            <li>Paiement mensuel de la TVA due</li>
            <li>Plus de travail mais meilleure visibilité</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">💰 Le calcul de la TVA</h3>
            <p className="text-blue-700 dark:text-blue-300">
              <strong>TVA à payer = TVA collectée - TVA déductible</strong>
            </p>
            <ul className="mt-3 space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <li>• <strong>TVA collectée :</strong> Ce que vous facturez à vos clients</li>
              <li>• <strong>TVA déductible :</strong> Ce que vous payez sur vos achats pros</li>
              <li>• Si le résultat est négatif, vous avez un crédit de TVA (remboursable)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 8 */}
      <section id="erreurs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">8. Les erreurs à éviter</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-6 my-6">
            <h3 className="font-semibold text-red-800 dark:text-red-200 mb-4">❌ Erreurs fréquentes</h3>
            <ul className="space-y-3 text-red-700 dark:text-red-300">
              <li>
                <strong>1. Ne pas surveiller ses seuils</strong><br />
                <span className="text-sm">Dépassement = facturation TVA obligatoire</span>
              </li>
              <li>
                <strong>2. Oublier la mention d'exonération</strong><br />
                <span className="text-sm">"TVA non applicable, art. 293 B du CGI" obligatoire</span>
              </li>
              <li>
                <strong>3. Facturer la TVA en franchise</strong><br />
                <span className="text-sm">Vous devriez la reverser, et c'est illégal</span>
              </li>
              <li>
                <strong>4. Ne pas facturer la TVA après dépassement</strong><br />
                <span className="text-sm">Vous devez la reverser de votre poche</span>
              </li>
              <li>
                <strong>5. Confondre seuil TVA et seuil auto-entrepreneur</strong><br />
                <span className="text-sm">Les plafonds du régime auto-entrepreneur sont différents</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4">✅ Bonnes pratiques</h3>
            <ul className="space-y-2 text-green-700 dark:text-green-300">
              <li>• Suivez votre CA en temps réel avec un logiciel de facturation</li>
              <li>• Configurez une alerte à 80% du seuil</li>
              <li>• Anticipez le passage à la TVA (préparez vos tarifs TTC)</li>
              <li>• Gardez toutes vos factures d'achat (pour la TVA déductible si option)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 9 - Checklist */}
      <section id="checklist" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">9. Checklist TVA Auto-Entrepreneur 2026</h2>
        <div className="bg-muted rounded-lg p-6">
          <h3 className="font-semibold mb-4">✅ Vérifications à faire maintenant</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <input type="checkbox" className="mt-1.5 rounded" disabled />
              <span>Je connais mon seuil de franchise TVA (36 800€ ou 91 900€ selon activité)</span>
            </li>
            <li className="flex items-start gap-3">
              <input type="checkbox" className="mt-1.5 rounded" disabled />
              <span>Je suis mon CA en temps réel</span>
            </li>
            <li className="flex items-start gap-3">
              <input type="checkbox" className="mt-1.5 rounded" disabled />
              <span>Mes factures portent la mention "TVA non applicable, art. 293 B du CGI"</span>
            </li>
            <li className="flex items-start gap-3">
              <input type="checkbox" className="mt-1.5 rounded" disabled />
              <span>J'ai un logiciel de facturation qui gère automatiquement les mentions TVA</span>
            </li>
            <li className="flex items-start gap-3">
              <input type="checkbox" className="mt-1.5 rounded" disabled />
              <span>Je sais quoi faire si je dépasse le seuil majoré</span>
            </li>
          </ul>

          <h3 className="font-semibold mt-6 mb-4">📅 Pour septembre 2026</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <input type="checkbox" className="mt-1.5 rounded" disabled />
              <span>J'utilise un logiciel compatible facturation électronique</span>
            </li>
            <li className="flex items-start gap-3">
              <input type="checkbox" className="mt-1.5 rounded" disabled />
              <span>Je peux recevoir des factures au format Factur-X</span>
            </li>
            <li className="flex items-start gap-3">
              <input type="checkbox" className="mt-1.5 rounded" disabled />
              <span>Mon statut TVA est correctement configuré dans le logiciel</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/10 rounded-lg p-8 text-center my-12">
        <h2 className="text-2xl font-bold mb-4">
          Gérez votre TVA et facturation électronique simplement
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          FacturSimple gère automatiquement vos mentions TVA et sera 100% conforme à la réforme 2026. 
          Inscrivez-vous pour être prévenu du lancement.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition"
        >
          Rejoindre la liste d'attente →
        </Link>
      </section>

      {/* Related Articles */}
      <section className="border-t pt-10">
        <h2 className="text-xl font-bold mb-6">📚 Articles connexes</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/blog/mentions-legales-facture-auto-entrepreneur"
            className="block p-4 border rounded-lg hover:border-primary transition"
          >
            <h3 className="font-semibold mb-2">Mentions Légales Obligatoires sur une Facture</h3>
            <p className="text-sm text-muted-foreground">
              La checklist complète des 12 mentions à ne pas oublier
            </p>
          </Link>
          <Link
            href="/blog/e-reporting-micro-entreprise"
            className="block p-4 border rounded-lg hover:border-primary transition"
          >
            <h3 className="font-semibold mb-2">E-Reporting 2026 pour Micro-Entreprises</h3>
            <p className="text-sm text-muted-foreground">
              Comprendre l'obligation de transmission des données B2C
            </p>
          </Link>
          <Link
            href="/blog/facturation-electronique-auto-entrepreneur"
            className="block p-4 border rounded-lg hover:border-primary transition"
          >
            <h3 className="font-semibold mb-2">Facturation Électronique Auto-Entrepreneur</h3>
            <p className="text-sm text-muted-foreground">
              Guide pratique pour se préparer à septembre 2026
            </p>
          </Link>
          <Link
            href="/blog/faq-facture-electronique"
            className="block p-4 border rounded-lg hover:border-primary transition"
          >
            <h3 className="font-semibold mb-2">FAQ Facture Électronique</h3>
            <p className="text-sm text-muted-foreground">
              Réponses aux 20 questions les plus fréquentes
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
