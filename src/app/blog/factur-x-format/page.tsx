import { Metadata } from "next";
import Link from "next/link";
import { IconArrowLeft, IconFileText, IconCode, IconCheck, IconAlertTriangle, IconFileTypeXml, IconFileTypePdf } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Factur-X : Le Format de Facture Électronique Expliqué Simplement | FacturSimple",
  description: "Découvrez Factur-X, le format hybride PDF/XML pour la facturation électronique 2026. Guide complet : niveaux de conformité, avantages, et comment l'adopter facilement.",
  keywords: ["Factur-X", "format facture électronique", "PDF XML facture", "norme Factur-X", "facture hybride", "ZUGFeRD", "facturation électronique 2026"],
  openGraph: {
    title: "Factur-X : Le Format de Facture Électronique Expliqué Simplement",
    description: "Guide complet sur Factur-X, le format hybride PDF/XML obligatoire pour la facturation électronique 2026.",
    type: "article",
    publishedTime: "2026-02-04T00:00:00Z",
    authors: ["FacturSimple"],
  },
};

export default function FacturXFormatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <IconArrowLeft className="w-4 h-4 mr-2" />
          Retour au blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <time dateTime="2026-02-04">4 février 2026</time>
            <span>•</span>
            <span>8 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Factur-X : Le Format de Facture Électronique Expliqué Simplement
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Factur-X vous semble complexe ? Ce guide démystifie ce format hybride PDF/XML qui sera au cœur de la facturation électronique en 2026. Découvrez comment il fonctionne et pourquoi il simplifie votre vie.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-12 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">📑 Sommaire</h2>
          <ol className="space-y-2 text-gray-600 dark:text-gray-300">
            <li><a href="#quest-ce-que-factur-x" className="hover:text-blue-600">1. Qu&apos;est-ce que Factur-X ?</a></li>
            <li><a href="#comment-ca-marche" className="hover:text-blue-600">2. Comment ça marche concrètement ?</a></li>
            <li><a href="#niveaux-conformite" className="hover:text-blue-600">3. Les 5 niveaux de conformité</a></li>
            <li><a href="#avantages" className="hover:text-blue-600">4. Pourquoi Factur-X est génial ?</a></li>
            <li><a href="#factur-x-vs-autres" className="hover:text-blue-600">5. Factur-X vs autres formats</a></li>
            <li><a href="#adoption" className="hover:text-blue-600">6. Comment adopter Factur-X ?</a></li>
            <li><a href="#erreurs-courantes" className="hover:text-blue-600">7. Erreurs courantes à éviter</a></li>
            <li><a href="#faq" className="hover:text-blue-600">8. FAQ</a></li>
          </ol>
        </nav>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          
          {/* Section 1 */}
          <section id="quest-ce-que-factur-x" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <IconFileText className="w-8 h-8 text-blue-600" />
              1. Qu&apos;est-ce que Factur-X ?
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Factur-X</strong> est un format de facture électronique <strong>hybride</strong> qui combine le meilleur des deux mondes :
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-3 mb-3">
                  <IconFileTypePdf className="w-8 h-8 text-red-600" />
                  <h3 className="font-semibold text-gray-900 dark:text-white m-0">Le PDF visible</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm m-0">
                  La facture classique que vous pouvez lire, imprimer et archiver. Identique visuellement à vos factures actuelles.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-3">
                  <IconFileTypeXml className="w-8 h-8 text-green-600" />
                  <h3 className="font-semibold text-gray-900 dark:text-white m-0">Le XML intégré</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm m-0">
                  Les données structurées, cachées dans le PDF, lisibles par les logiciels pour un traitement automatique.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
              <p className="text-gray-700 dark:text-gray-300 m-0">
                <strong>💡 En résumé :</strong> Factur-X = 1 fichier PDF qui contient à la fois l&apos;image de la facture ET les données structurées. Vous ouvrez le PDF normalement, mais les logiciels peuvent aussi extraire les données automatiquement.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">📜 Un peu d&apos;histoire</h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Factur-X est né d&apos;une collaboration franco-allemande :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>2017</strong> : Lancement officiel par le FNFE-MPE (France) et le FeRD (Allemagne)</li>
              <li><strong>ZUGFeRD</strong> : La version allemande, techniquement identique</li>
              <li><strong>Norme EN 16931</strong> : Factur-X respecte la norme européenne de facturation électronique</li>
              <li><strong>2026</strong> : Devient le format de référence pour la facturation B2B en France</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section id="comment-ca-marche" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <IconCode className="w-8 h-8 text-blue-600" />
              2. Comment ça marche concrètement ?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Imaginez que votre facture PDF a une &quot;poche secrète&quot; dans laquelle sont rangées toutes les données de la facture en format XML.
            </p>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg my-8">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">🔍 Anatomie d&apos;une facture Factur-X</h3>
              <pre className="text-sm overflow-x-auto text-gray-700 dark:text-gray-300">
{`┌─────────────────────────────────────────┐
│           FACTURE PDF/A-3               │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │  Contenu visuel (ce que vous     │  │
│  │  voyez quand vous ouvrez le PDF)  │  │
│  │                                   │  │
│  │  🏢 Mon Entreprise               │  │
│  │  📍 123 rue Example, 75001 Paris │  │
│  │  Facture N° F-2026-001           │  │
│  │  Date: 04/02/2026                │  │
│  │  Total TTC: 1 200,00 €           │  │
│  └───────────────────────────────────┘  │
│                                         │
│  📎 Pièce jointe intégrée:              │
│  ┌───────────────────────────────────┐  │
│  │  factur-x.xml                     │  │
│  │  <Invoice>                       │  │
│  │    <ID>F-2026-001</ID>           │  │
│  │    <IssueDate>2026-02-04</...>   │  │
│  │    <TotalAmount>1200.00</...>    │  │
│  │  </Invoice>                      │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">🔄 Le flux de données</h3>
            
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
              <li><strong>Vous créez la facture</strong> dans votre logiciel de facturation</li>
              <li><strong>Le logiciel génère</strong> un PDF contenant le XML intégré</li>
              <li><strong>Vous envoyez</strong> ce PDF unique à votre client</li>
              <li><strong>Le client reçoit</strong> un PDF lisible normalement</li>
              <li><strong>Son logiciel comptable</strong> extrait automatiquement les données du XML</li>
              <li><strong>Import automatique</strong> : fournisseur, montants, TVA, tout est rempli !</li>
            </ol>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-6">
              <p className="text-gray-700 dark:text-gray-300 m-0">
                <strong>✅ Le gros avantage :</strong> Fini la double saisie ! Votre client n&apos;a plus besoin de recopier manuellement les informations de vos factures.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="niveaux-conformite" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              3. Les 5 niveaux de conformité Factur-X
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Factur-X propose 5 &quot;profils&quot; avec différents niveaux de détail dans les données XML :
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 my-6">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Profil</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Données incluses</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Usage typique</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold text-gray-500">Minimum</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Infos essentielles (n°, date, totaux)</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Archivage simple</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold text-blue-600">Basic WL</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">+ Lignes sans détail</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">PME, micro-entreprises</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold text-green-600">Basic</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">+ Lignes avec prix unitaires</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">⭐ Recommandé pour la réforme</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold text-purple-600">EN 16931</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Conforme norme européenne</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Marchés publics, B2G</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold text-orange-600">Extended</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Tout + données additionnelles</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Grandes entreprises, EDI</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-6">
              <p className="text-gray-700 dark:text-gray-300 m-0">
                <strong>💡 Pour les auto-entrepreneurs :</strong> Le profil <strong>Basic</strong> est largement suffisant. Il contient toutes les informations requises par la réforme 2026 sans complexité inutile.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="avantages" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <IconCheck className="w-8 h-8 text-green-600" />
              4. Pourquoi Factur-X est génial ?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🤝 Compatibilité universelle</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Tout le monde peut ouvrir un PDF. Pas besoin de logiciel spécial pour lire vos factures. Votre client sans logiciel comptable ? Il lit le PDF. Votre client avec Sage/EBP ? Son logiciel importe le XML.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">⚡ Zéro double saisie</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Les données XML permettent l&apos;import automatique. Fini les erreurs de recopie, fini les heures passées à saisir les factures fournisseurs manuellement.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">📁 Un seul fichier</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Pas de PDF + XML séparés à gérer. Un seul fichier contient tout. Archivage simplifié, envoi simplifié.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">✅ Conforme 2026</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Factur-X est explicitement reconnu comme format valide pour la réforme. Vous êtes prêt pour l&apos;obligation sans vous poser de questions.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🌍 Standard européen</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Basé sur la norme EN 16931, Factur-X est interopérable avec ZUGFeRD (Allemagne) et d&apos;autres formats européens.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">🔒 Archivage légal</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Le format PDF/A-3 utilisé garantit la conservation à long terme. Vos factures restent lisibles pendant les 10 ans d&apos;obligation de conservation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="factur-x-vs-autres" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              5. Factur-X vs autres formats
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 my-6">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Format</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Type</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Lisibilité humaine</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Traitement auto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Factur-X</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Hybride PDF+XML</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">✅ Parfait</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">✅ Parfait</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">PDF simple</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Image</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">✅ Parfait</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">❌ Impossible*</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">XML pur (UBL)</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Données</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">❌ Illisible</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">✅ Parfait</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">EDI</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Données</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">❌ Illisible</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">✅ Parfait</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              *Les PDF simples nécessitent une OCR (reconnaissance de caractères) pour extraire les données, avec un taux d&apos;erreur non négligeable.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">🇩🇪 Factur-X vs ZUGFeRD</h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Ce sont les mêmes !</strong> ZUGFeRD est la version allemande, Factur-X la version française. Techniquement identiques depuis ZUGFeRD 2.0, ils sont totalement interopérables.
            </p>
          </section>

          {/* Section 6 */}
          <section id="adoption" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              6. Comment adopter Factur-X ?
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">✅ La solution simple : utilisez un logiciel compatible</h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              La façon la plus simple d&apos;adopter Factur-X est d&apos;utiliser un logiciel de facturation qui génère automatiquement ce format. Vous n&apos;avez rien à faire de technique.
            </p>

            <div className="bg-blue-600 text-white p-6 rounded-lg my-8">
              <h3 className="font-semibold mb-3">🚀 FacturSimple génère du Factur-X automatiquement</h3>
              <p className="text-sm opacity-90 mb-4">
                Créez vos factures comme d&apos;habitude, exportez en un clic. Le format Factur-X est généré automatiquement, conforme à la réforme 2026.
              </p>
              <Link 
                href="/#waitlist" 
                className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Rejoindre la liste d&apos;attente →
              </Link>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">🛠️ Pour les développeurs : créer du Factur-X</h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Si vous développez votre propre solution, voici les bibliothèques disponibles :
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Python</strong> : <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">factur-x</code> (PyPI)</li>
              <li><strong>Java</strong> : <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Mustang</code> par Konik</li>
              <li><strong>PHP</strong> : <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Factur-X PHP</code></li>
              <li><strong>.NET</strong> : <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">ZUGFeRD-csharp</code></li>
              <li><strong>JavaScript</strong> : Plusieurs bibliothèques PDF + XML disponibles</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">📋 Checklist de conformité</h3>
            
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <IconCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                PDF au format PDF/A-3 (archivage long terme)
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                Fichier XML intégré nommé <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">factur-x.xml</code>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                XML conforme au schéma Factur-X (profil Basic minimum)
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                Métadonnées XMP correctement renseignées
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                Cohérence entre le visuel PDF et les données XML
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="erreurs-courantes" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <IconAlertTriangle className="w-8 h-8 text-amber-500" />
              7. Erreurs courantes à éviter
            </h2>

            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Incohérence PDF/XML</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Le total dans le PDF dit 1 000 € mais le XML dit 1 001 € → Rejet possible. Vérifiez toujours la cohérence.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Mauvais format PDF</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Utiliser PDF classique au lieu de PDF/A-3. Le fichier XML ne peut pas être correctement intégré.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ XML non valide</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Un XML mal formé ou non conforme au schéma rend le Factur-X inutilisable. Utilisez un validateur.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Profil insuffisant</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Le profil &quot;Minimum&quot; ne contient pas assez d&apos;infos pour la réforme 2026. Utilisez au moins &quot;Basic&quot;.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 - FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              8. FAQ Factur-X
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Dois-je obligatoirement utiliser Factur-X pour la réforme 2026 ?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Non, Factur-X n&apos;est pas le seul format accepté. UBL et CII sont également conformes. Mais Factur-X est le plus pratique car il reste lisible visuellement.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Comment vérifier si ma facture est bien au format Factur-X ?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Utilisez un validateur en ligne comme <strong>fnfe-mpe.org</strong> ou le validateur de votre PDP. Le fichier doit contenir une pièce jointe <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">factur-x.xml</code>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Mes clients non équipés peuvent-ils recevoir mes Factur-X ?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Oui ! C&apos;est tout l&apos;intérêt du format hybride. Ils ouvrent le PDF normalement. Le XML intégré ne gêne pas la lecture.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Factur-X fonctionne-t-il avec les PDP et le PPF ?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Oui, Factur-X est un format d&apos;échange reconnu. Les plateformes de dématérialisation (PDP) et le Portail Public de Facturation (PPF) l&apos;acceptent.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Puis-je convertir mes anciens PDF en Factur-X ?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Techniquement oui, mais c&apos;est complexe et source d&apos;erreurs. Mieux vaut générer directement en Factur-X pour les nouvelles factures.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              📝 En résumé
            </h2>

            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>Factur-X</strong> = PDF + XML dans un seul fichier</li>
                <li><strong>Lisible</strong> par les humains ET les logiciels</li>
                <li><strong>Conforme</strong> à la réforme 2026</li>
                <li><strong>Profil Basic</strong> = suffisant pour 99% des besoins</li>
                <li><strong>Solution simple</strong> : utilisez un logiciel compatible</li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">
              🚀 Prêt pour la facturation électronique ?
            </h2>
            <p className="mb-6 opacity-90">
              FacturSimple génère automatiquement des factures au format Factur-X. Conforme 2026, simple à utiliser, et conçu pour les auto-entrepreneurs.
            </p>
            <Link 
              href="/#waitlist" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Rejoindre la liste d&apos;attente gratuite →
            </Link>
          </section>

          {/* Related Articles */}
          <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              📚 Articles connexes
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/blog/guide-facture-electronique-2026" 
                className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Guide Facture Électronique 2026</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tout savoir sur la réforme</p>
              </Link>
              <Link 
                href="/blog/ppf-vs-pdp" 
                className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">PPF vs PDP</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Quelle plateforme choisir ?</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
