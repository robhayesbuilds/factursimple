import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guide Expert-Comptable : Accompagner vos Clients Auto-Entrepreneurs vers la Facturation Électronique 2026 | FacturSimple',
  description: 'Guide pratique pour les experts-comptables : comment accompagner vos clients auto-entrepreneurs dans la transition vers la facturation électronique obligatoire de septembre 2026.',
  keywords: ['expert-comptable', 'auto-entrepreneur', 'facturation électronique', '2026', 'accompagnement client', 'conseil comptable'],
}

export default function GuideExpertComptablePage() {
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

      {/* Article */}
      <article className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/blog" className="text-primary-600 hover:underline text-sm mb-4 inline-block">
              ← Retour au blog
            </Link>
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-xs font-medium">
                Guide Pro
              </span>
              <span>2026-02-06</span>
              <span>•</span>
              <span>12 min de lecture</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Guide Expert-Comptable : Accompagner vos Clients Auto-Entrepreneurs vers la Facturation Électronique 2026
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Vos clients auto-entrepreneurs vous posent des questions sur la réforme ? 
              Voici comment les accompagner efficacement et renforcer votre rôle de conseil.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            
            {/* Key Stats Box */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
                📊 Chiffres clés pour votre pratique
              </h3>
              <ul className="space-y-2 text-purple-800 dark:text-purple-200">
                <li>• <strong>2,7 millions</strong> d'auto-entrepreneurs actifs en France (2025)</li>
                <li>• <strong>60%</strong> n'utilisent pas de logiciel de facturation conforme</li>
                <li>• <strong>1er septembre 2026</strong> : obligation de réception des factures électroniques</li>
                <li>• <strong>1er septembre 2027</strong> : obligation d'émission pour les micro-entreprises</li>
                <li>• <strong>15€ par facture</strong> d'amende en cas de non-conformité</li>
              </ul>
            </div>

            <h2 id="contexte">Pourquoi vos clients AE ont besoin de vous maintenant</h2>
            
            <p>
              La réforme de la facturation électronique touche <strong>tous les assujettis à la TVA</strong>, 
              y compris les auto-entrepreneurs en franchise de base. Beaucoup de vos clients ne le savent pas encore.
            </p>

            <p>
              Contrairement aux grandes entreprises qui ont des équipes dédiées, les auto-entrepreneurs 
              comptent sur <strong>vous</strong> pour les guider. C'est une opportunité de :
            </p>

            <ul>
              <li>Renforcer votre rôle de conseil stratégique</li>
              <li>Fidéliser vos clients en les accompagnant sur un sujet complexe</li>
              <li>Développer une nouvelle offre de service (audit de conformité)</li>
              <li>Éviter les urgences de dernière minute en septembre 2026</li>
            </ul>

            <h2 id="ce-que-vos-clients-doivent-savoir">Ce que vos clients auto-entrepreneurs doivent comprendre</h2>

            <h3>1. Ils sont concernés même sans TVA</h3>
            
            <p>
              C'est LA confusion majeure. Beaucoup d'AE pensent que "pas de TVA = pas concerné". 
              <strong>Faux.</strong>
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-6 not-prose">
              <p className="text-amber-800 dark:text-amber-200 font-medium">
                ⚠️ Tous les assujettis à la TVA sont concernés, même les auto-entrepreneurs 
                en franchise de base. La franchise de TVA n'est pas une exonération d'assujettissement.
              </p>
            </div>

            <h3>2. Le calendrier les concerne</h3>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Obligation</th>
                    <th className="px-4 py-2 text-left">Auto-entrepreneurs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-slate-700">
                    <td className="px-4 py-2 font-medium">1er sept. 2026</td>
                    <td className="px-4 py-2">Réception obligatoire</td>
                    <td className="px-4 py-2 text-green-600 dark:text-green-400">✓ Concernés</td>
                  </tr>
                  <tr className="border-b dark:border-slate-700">
                    <td className="px-4 py-2 font-medium">1er sept. 2026</td>
                    <td className="px-4 py-2">Émission GE + ETI</td>
                    <td className="px-4 py-2 text-slate-400">Non concernés</td>
                  </tr>
                  <tr className="border-b dark:border-slate-700">
                    <td className="px-4 py-2 font-medium">1er sept. 2027</td>
                    <td className="px-4 py-2">Émission PME + TPE</td>
                    <td className="px-4 py-2 text-green-600 dark:text-green-400">✓ Concernés</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>3. L'e-reporting les concerne aussi</h3>

            <p>
              Au-delà de la facturation B2B, les auto-entrepreneurs devront transmettre leurs données 
              de transactions B2C (ventes aux particuliers) via l'e-reporting. C'est souvent oublié.
            </p>

            <h2 id="questions-frequentes">Questions fréquentes de vos clients AE</h2>

            <div className="space-y-6 my-8">
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  "Mon logiciel actuel sera-t-il conforme ?"
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  <strong>Votre réponse :</strong> Pas nécessairement. Les logiciels doivent générer 
                  des factures au format Factur-X (PDF + XML) et être connectés à une plateforme 
                  (PPF ou PDP). Excel et Word ne seront plus suffisants.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  "Combien ça va me coûter ?"
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  <strong>Votre réponse :</strong> Les solutions adaptées aux AE démarrent à 5-15€/mois. 
                  Le PPF (Portail Public de Facturation) sera gratuit mais avec des fonctionnalités limitées. 
                  Les amendes pour non-conformité peuvent atteindre 15€ par facture.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  "Je ne facture que des particuliers, suis-je concerné ?"
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  <strong>Votre réponse :</strong> Oui, via l'e-reporting. Vous devrez déclarer vos 
                  transactions B2C à l'administration. Votre logiciel devra pouvoir transmettre ces données.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  "Puis-je continuer à faire mes factures sur Excel ?"
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  <strong>Votre réponse :</strong> Non. À partir de 2027, vous devrez émettre des factures 
                  électroniques au format Factur-X. Excel ne peut pas générer ce format ni se connecter 
                  aux plateformes obligatoires.
                </p>
              </div>
            </div>

            <h2 id="checklist-client">Checklist à partager avec vos clients</h2>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                ✅ Préparation facturation électronique 2026
              </h3>
              <div className="space-y-3">
                <label className="flex items-start gap-3 text-green-800 dark:text-green-200">
                  <input type="checkbox" className="mt-1" />
                  <span>Vérifier que votre SIREN est à jour sur le RNE</span>
                </label>
                <label className="flex items-start gap-3 text-green-800 dark:text-green-200">
                  <input type="checkbox" className="mt-1" />
                  <span>Identifier votre logiciel de facturation actuel</span>
                </label>
                <label className="flex items-start gap-3 text-green-800 dark:text-green-200">
                  <input type="checkbox" className="mt-1" />
                  <span>Vérifier s'il sera compatible Factur-X</span>
                </label>
                <label className="flex items-start gap-3 text-green-800 dark:text-green-200">
                  <input type="checkbox" className="mt-1" />
                  <span>Choisir entre PPF (gratuit) ou PDP (payant, plus de fonctionnalités)</span>
                </label>
                <label className="flex items-start gap-3 text-green-800 dark:text-green-200">
                  <input type="checkbox" className="mt-1" />
                  <span>Créer votre compte sur la plateforme choisie (disponible mi-2026)</span>
                </label>
                <label className="flex items-start gap-3 text-green-800 dark:text-green-200">
                  <input type="checkbox" className="mt-1" />
                  <span>Tester la réception d'une facture électronique</span>
                </label>
                <label className="flex items-start gap-3 text-green-800 dark:text-green-200">
                  <input type="checkbox" className="mt-1" />
                  <span>Former à l'émission de factures conformes (pour 2027)</span>
                </label>
              </div>
            </div>

            <h2 id="opportunites-cabinet">Opportunités pour votre cabinet</h2>

            <h3>1. Mission d'audit de conformité</h3>
            
            <p>
              Proposez un diagnostic personnalisé à vos clients AE :
            </p>
            
            <ul>
              <li>Analyse de leur processus de facturation actuel</li>
              <li>Évaluation de la conformité de leurs outils</li>
              <li>Recommandations personnalisées</li>
              <li>Planning de mise en conformité</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 my-6 not-prose">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                <strong>💡 Conseil :</strong> Facturez cette mission entre 150€ et 300€ selon la complexité. 
                C'est un service à forte valeur ajoutée qui justifie un honoraire distinct.
              </p>
            </div>

            <h3>2. Formation groupée</h3>
            
            <p>
              Organisez des webinaires ou ateliers pour vos clients AE :
            </p>
            
            <ul>
              <li>Économies d'échelle (un webinaire pour 20 clients)</li>
              <li>Positionnement expert sur le sujet</li>
              <li>Génération de leads pour l'accompagnement individuel</li>
            </ul>

            <h3>3. Partenariat avec un éditeur</h3>
            
            <p>
              Certains éditeurs de logiciels proposent des programmes partenaires pour les experts-comptables. 
              Vous pouvez recommander une solution et bénéficier d'une commission de parrainage.
            </p>

            <h2 id="ressources-gratuites">Ressources gratuites à partager</h2>

            <p>
              Nous avons créé plusieurs outils gratuits que vous pouvez partager avec vos clients :
            </p>

            <ul>
              <li>
                <Link href="/outils/checklist-2026" className="text-primary-600 hover:underline">
                  Checklist interactive 2026
                </Link> — Évaluation personnalisée de leur situation
              </li>
              <li>
                <Link href="/outils/calculateur-penalites" className="text-primary-600 hover:underline">
                  Calculateur de pénalités
                </Link> — Pour visualiser le risque financier
              </li>
              <li>
                <Link href="/blog/facturation-electronique-auto-entrepreneur" className="text-primary-600 hover:underline">
                  Guide complet auto-entrepreneur
                </Link> — Tout comprendre sur la réforme
              </li>
              <li>
                <Link href="/blog/ppf-vs-pdp" className="text-primary-600 hover:underline">
                  PPF vs PDP : comment choisir
                </Link> — Comparatif des plateformes
              </li>
            </ul>

            <h2 id="points-de-vigilance">Points de vigilance à communiquer</h2>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">
                🚨 Alertes importantes
              </h3>
              <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
                <li>• <strong>Attention aux arnaques</strong> : des faux courriers circulent, prétendant obliger à s'inscrire immédiatement</li>
                <li>• <strong>Pas de précipitation</strong> : les plateformes ne seront ouvertes qu'à partir de mi-2026</li>
                <li>• <strong>Vérification du RNE</strong> : l'adresse de facturation sera liée au SIREN, vérifier que les infos sont à jour</li>
                <li>• <strong>Conservation des factures</strong> : le format électronique ne dispense pas de l'obligation de conservation 10 ans</li>
              </ul>
            </div>

            <h2 id="conclusion">Conclusion : un sujet stratégique pour votre cabinet</h2>

            <p>
              La réforme de la facturation électronique est une opportunité pour les experts-comptables 
              de renforcer leur rôle de conseil auprès des auto-entrepreneurs. En prenant le sujet en main 
              dès maintenant, vous :
            </p>

            <ul>
              <li>Évitez les urgences de dernière minute</li>
              <li>Créez de la valeur ajoutée pour vos clients</li>
              <li>Développez une nouvelle source de revenus</li>
              <li>Fidélisez vos clients sur le long terme</li>
            </ul>

            <p>
              N'attendez pas septembre 2026 pour en parler à vos clients. Le moment, c'est maintenant.
            </p>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 mt-8 not-prose">
              <h3 className="text-xl font-bold text-white mb-2">
                Vous cherchez une solution à recommander ?
              </h3>
              <p className="text-primary-100 mb-4">
                FacturSimple est conçu spécifiquement pour les auto-entrepreneurs : simple, conforme 2026, 
                et accessible (dès 9€/mois). Nous proposons un programme partenaire pour les experts-comptables.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/#tarifs" 
                  className="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-primary-50 transition"
                >
                  Voir les tarifs
                </Link>
                <Link 
                  href="/contact" 
                  className="border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition"
                >
                  Devenir partenaire
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Articles complémentaires
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/blog/facturation-electronique-auto-entrepreneur" 
                className="block p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition"
              >
                <span className="text-primary-600 font-medium">Guide auto-entrepreneur</span>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Le guide complet pour les AE
                </p>
              </Link>
              <Link 
                href="/blog/ppf-vs-pdp" 
                className="block p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition"
              >
                <span className="text-primary-600 font-medium">PPF vs PDP</span>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Comparatif des plateformes
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-12">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>© 2026 FacturSimple. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  )
}
