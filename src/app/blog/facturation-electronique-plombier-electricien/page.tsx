import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Building2, Home, Wrench, Users, AlertTriangle, CheckCircle, Calculator, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Facturation Électronique Plombier & Électricien 2026 | Guide Complet Auto-Entrepreneur',
  description: 'Plombier ou électricien auto-entrepreneur ? Découvrez si vous êtes concerné par la facturation électronique 2026 : dépannage, rénovation, syndic, copropriétés.',
  keywords: ['facturation électronique plombier', 'facture électronique électricien', 'auto-entrepreneur BTP 2026', 'syndic facturation', 'artisan dépannage facture'],
  alternates: {
    canonical: 'https://factursimple.fr/blog/facturation-electronique-plombier-electricien'
  }
}

export default function PlombierElectricienPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour au blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
              Guide Métier
            </span>
            <span>•</span>
            <time dateTime="2026-02-06">6 février 2026</time>
            <span>•</span>
            <span>12 min de lecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Facturation Électronique Plombier & Électricien 2026 : Guide Complet
          </h1>
          <p className="text-xl text-gray-600">
            Dépannage chez les particuliers, chantiers de rénovation, contrats avec les syndics... 
            Quel impact pour votre activité d'artisan ? Tout ce qu'il faut savoir.
          </p>
        </header>

        {/* Points clés */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-12 border border-yellow-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Wrench className="w-7 h-7 text-yellow-600" />
            Points clés pour les artisans du bâtiment
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Home className="w-6 h-6 text-green-600" />
                <span className="font-semibold text-gray-900">Dépannage particuliers</span>
              </div>
              <p className="text-gray-600 text-sm">
                <span className="text-green-600 font-bold">NON concerné.</span> Le dépannage et travaux 
                chez les particuliers (B2C) n'est pas soumis à la facturation électronique.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-6 h-6 text-orange-600" />
                <span className="font-semibold text-gray-900">Syndics & copropriétés</span>
              </div>
              <p className="text-gray-600 text-sm">
                <span className="text-orange-600 font-bold">CONCERNÉ.</span> Les syndics professionnels 
                sont des entreprises : vos factures doivent être électroniques.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-orange-600" />
                <span className="font-semibold text-gray-900">Sous-traitance entreprises</span>
              </div>
              <p className="text-gray-600 text-sm">
                <span className="text-orange-600 font-bold">CONCERNÉ.</span> Travaux pour d'autres 
                entreprises du BTP, agences immobilières, bailleurs sociaux.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Calculator className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-gray-900">Estimation</span>
              </div>
              <p className="text-gray-600 text-sm">
                Pour la plupart des artisans : <strong>30-50% du CA</strong> en B2B 
                (syndics, entreprises, bailleurs) → facturation électronique obligatoire.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none mb-12">
          <p>
            En tant que <strong>plombier ou électricien auto-entrepreneur</strong>, vous intervenez 
            auprès de clients très variés : particuliers pour des dépannages, syndics de copropriété 
            pour l'entretien des parties communes, entreprises du BTP en sous-traitance, agences 
            immobilières pour des états des lieux...
          </p>
          <p>
            Cette diversité de clientèle est précisément ce qui rend la réforme de 2026 un peu 
            complexe pour votre métier. <strong>Tous vos clients ne sont pas concernés de la même 
            façon</strong>, et il est essentiel de bien comprendre lesquels nécessiteront une 
            facture électronique.
          </p>
        </section>

        {/* Types de clients */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Vos clients : qui est concerné ?
          </h2>

          {/* Particuliers */}
          <div className="bg-green-50 rounded-2xl p-8 mb-6 border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Particuliers (B2C) - NON concernés
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                La grande majorité de votre activité auprès des particuliers n'est <strong>pas 
                concernée</strong> par la facturation électronique :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dépannage d'urgence</strong> : fuite d'eau, panne électrique, chauffe-eau</li>
                <li><strong>Rénovation de salle de bain</strong> : particulier propriétaire ou locataire</li>
                <li><strong>Installation électrique</strong> : mise aux normes, tableau électrique</li>
                <li><strong>Entretien chaudière</strong> : contrats annuels avec particuliers</li>
                <li><strong>Travaux neufs</strong> : maison individuelle, appartement</li>
              </ul>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="text-sm">
                  <strong>Obligation :</strong> E-reporting uniquement (transmission des données de 
                  transaction à l'administration), pas de facture électronique structurée.
                </p>
              </div>
            </div>
          </div>

          {/* Syndics et copropriétés */}
          <div className="bg-orange-50 rounded-2xl p-8 mb-6 border border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              Syndics de copropriété - CONCERNÉS
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Les <strong>syndics professionnels</strong> (Nexity, Citya, Foncia, cabinets 
                indépendants) sont des entreprises assujetties à la TVA. Toutes vos factures 
                pour des travaux dans les parties communes doivent être électroniques :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dépannage parties communes</strong> : colonnes d'eau, éclairage commun</li>
                <li><strong>Contrats d'entretien</strong> : VMC, chaufferie collective, ascenseurs</li>
                <li><strong>Travaux votés en AG</strong> : rénovation électrique, plomberie générale</li>
                <li><strong>Urgences</strong> : dégât des eaux, panne électrique immeuble</li>
              </ul>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="text-sm">
                  <strong>⚠️ Attention :</strong> Même si vous intervenez dans un immeuble, 
                  vérifiez toujours qui vous paye. Si c'est le syndic (personne morale) → 
                  facture électronique. Si c'est le copropriétaire directement (particulier) → 
                  facture classique.
                </p>
              </div>
            </div>
          </div>

          {/* Bailleurs et agences */}
          <div className="bg-orange-50 rounded-2xl p-8 mb-6 border border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-orange-600" />
              Bailleurs sociaux & agences immobilières - CONCERNÉS
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Ces structures sont des <strong>professionnels assujettis à la TVA</strong> :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Bailleurs sociaux</strong> : HLM, OPH, ESH (réparations locatives, rénovation)</li>
                <li><strong>Agences immobilières</strong> : travaux avant relocation, mise en conformité</li>
                <li><strong>SCI soumises à l'IS</strong> : sociétés civiles immobilières professionnelles</li>
                <li><strong>Foncières</strong> : grands propriétaires institutionnels</li>
              </ul>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="text-sm">
                  <strong>💡 Conseil :</strong> Ces clients représentent souvent des volumes 
                  importants et réguliers. Préparez-vous tôt pour ne pas perdre ces marchés !
                </p>
              </div>
            </div>
          </div>

          {/* Sous-traitance BTP */}
          <div className="bg-orange-50 rounded-2xl p-8 mb-6 border border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Users className="w-6 h-6 text-orange-600" />
              Sous-traitance & entreprises générales - CONCERNÉS
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Si vous travaillez <strong>en sous-traitance</strong> pour d'autres entreprises 
                du BTP, toutes ces factures sont concernées :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Entreprises générales</strong> : chantiers de rénovation, construction neuve</li>
                <li><strong>Autres artisans</strong> : plombier faisant appel à un électricien et vice versa</li>
                <li><strong>Maîtres d'œuvre</strong> : architectes, bureaux d'études</li>
                <li><strong>Promoteurs immobiliers</strong> : logements neufs, programmes immobiliers</li>
              </ul>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="text-sm">
                  <strong>⚠️ Autoliquidation TVA :</strong> En sous-traitance BTP, la TVA est 
                  souvent autoliquidée. Cela ne change rien : la facture électronique reste 
                  obligatoire, avec les mentions spécifiques d'autoliquidation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cas pratiques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Cas pratiques du quotidien
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">
                🔧 Cas 1 : Dépannage fuite d'eau chez un particulier
              </h4>
              <p className="text-gray-700 mb-3">
                Mme Martin vous appelle pour une fuite sous l'évier. Intervention d'1h, facture 120€.
              </p>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg inline-block">
                ✅ Facture classique (B2C) → E-reporting uniquement
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">
                🏢 Cas 2 : Réparation colonne d'eau pour un syndic
              </h4>
              <p className="text-gray-700 mb-3">
                Le syndic Foncia vous demande de réparer une fuite sur la colonne montante. 
                Facture adressée à Foncia Gestion Immo SARL.
              </p>
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg inline-block">
                ⚡ Facture électronique obligatoire (B2B)
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">
                ⚡ Cas 3 : Mise aux normes électriques dans un HLM
              </h4>
              <p className="text-gray-700 mb-3">
                Paris Habitat vous confie la mise aux normes de 5 appartements. Marché public, 
                facture 8 500€ HT.
              </p>
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg inline-block">
                ⚡ Facture électronique obligatoire (B2B) + Chorus Pro possible
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">
                🏗️ Cas 4 : Sous-traitance pour une entreprise générale
              </h4>
              <p className="text-gray-700 mb-3">
                L'entreprise Martin BTP vous sous-traite l'électricité d'un chantier de 
                rénovation. Facture avec autoliquidation TVA.
              </p>
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg inline-block">
                ⚡ Facture électronique obligatoire (B2B) + Mentions autoliquidation
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">
                🏠 Cas 5 : Travaux pour un propriétaire via son agence
              </h4>
              <p className="text-gray-700 mb-3">
                L'agence Century 21 vous demande de refaire la plomberie d'un appartement 
                avant relocation. L'agence vous paye directement.
              </p>
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg inline-block">
                ⚡ Facture électronique obligatoire (client = l'agence, B2B)
              </div>
            </div>
          </div>
        </section>

        {/* Spécificités BTP */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Spécificités du secteur BTP
          </h2>

          <div className="prose prose-lg max-w-none">
            <h3>Autoliquidation de TVA</h3>
            <p>
              En sous-traitance BTP, la <strong>TVA est autoliquidée</strong> par le donneur 
              d'ordre. Votre facture doit porter la mention : <em>"Autoliquidation de la TVA 
              - Article 283-2 nonies du CGI"</em>.
            </p>
            <p>
              <strong>Bonne nouvelle :</strong> cette particularité est compatible avec la 
              facturation électronique. Les formats Factur-X et UBL prévoient des champs 
              spécifiques pour l'autoliquidation.
            </p>

            <h3>Retenue de garantie</h3>
            <p>
              Sur les chantiers importants, une <strong>retenue de garantie de 5%</strong> 
              peut être appliquée pendant 1 an. La facture électronique doit mentionner cette 
              retenue et le montant sera libéré à l'échéance.
            </p>

            <h3>Situations de travaux</h3>
            <p>
              Pour les chantiers longs, vous émettez des <strong>situations mensuelles</strong> 
              (factures d'avancement). Chaque situation doit être une facture électronique 
              conforme, avec les cumuls et le détail des travaux réalisés.
            </p>

            <h3>Assurance décennale</h3>
            <p>
              Vos factures doivent toujours mentionner votre <strong>assurance décennale</strong> 
              (nom de l'assureur, numéro de contrat, zone géographique). Cette obligation 
              reste inchangée avec la facturation électronique.
            </p>
          </div>
        </section>

        {/* Marchés publics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Cas particulier : marchés publics
          </h2>

          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Chorus Pro : déjà obligatoire !
                </h3>
                <p className="text-gray-700 mb-4">
                  Si vous travaillez pour des <strong>collectivités locales, établissements 
                  publics, ou bailleurs sociaux publics</strong>, vous utilisez probablement 
                  déjà Chorus Pro pour déposer vos factures.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Mairies</strong> : travaux dans les écoles, bâtiments municipaux</li>
                  <li><strong>Offices HLM publics</strong> : OPH, OPAC</li>
                  <li><strong>Hôpitaux, EHPAD publics</strong> : maintenance, rénovation</li>
                  <li><strong>Régions, départements</strong> : lycées, collèges, routes</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Chorus Pro reste le portail pour les marchés publics après 2026. La réforme 
                  harmonise le privé avec ce qui existe déjà pour le public.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">
                Je suis plombier, 80% de mes clients sont des particuliers. Suis-je vraiment concerné ?
              </h3>
              <p className="text-gray-700">
                Oui, mais uniquement pour les 20% restants (syndics, entreprises, bailleurs). 
                Vos factures aux particuliers continuent normalement, avec juste le e-reporting 
                des données de transaction. Pour vos clients professionnels, préparez-vous à 
                émettre des factures électroniques au format Factur-X.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">
                Comment savoir si mon client est un professionnel ou un particulier ?
              </h3>
              <p className="text-gray-700">
                Demandez toujours le <strong>numéro SIRET</strong>. S'il en a un et qu'il 
                demande une facture à ce nom, c'est un professionnel → facture électronique. 
                S'il n'a pas de SIRET ou commande à titre personnel → facture classique.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">
                Mon syndic m'envoie des bons de commande par email. C'est suffisant ?
              </h3>
              <p className="text-gray-700">
                Le bon de commande peut rester par email, mais <strong>votre facture</strong> 
                doit être électronique au format Factur-X (ou transmise via une PDP). Le 
                syndic devra la recevoir sur sa plateforme de dématérialisation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">
                Je travaille surtout en sous-traitance. Est-ce que l'autoliquidation change quelque chose ?
              </h3>
              <p className="text-gray-700">
                Non, l'autoliquidation est une modalité de TVA, pas de facturation. Votre 
                facture doit être électronique ET mentionner l'autoliquidation. Les logiciels 
                conformes gèrent automatiquement ces deux aspects.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">
                Mon logiciel actuel gère-t-il la facturation électronique ?
              </h3>
              <p className="text-gray-700">
                Vérifiez auprès de votre éditeur. Les logiciels spécialisés BTP (EBP Bâtiment, 
                Sage Batigest, Batappli) annoncent des mises à jour pour 2026. Si votre 
                logiciel n'est pas compatible, envisagez de migrer avant l'échéance.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">
                Dois-je facturer électroniquement les copropriétaires directement ?
              </h3>
              <p className="text-gray-700">
                Non. Les copropriétaires sont des <strong>particuliers</strong>. Si vous 
                intervenez chez eux directement (pas via le syndic), c'est une facture 
                classique B2C. Seules les factures au syndic (personne morale) sont concernées.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">
                Les devis aussi doivent être électroniques ?
              </h3>
              <p className="text-gray-700">
                Non, seules les <strong>factures</strong> sont concernées. Vos devis, bons 
                de commande, situations de travaux intermédiaires (hors facturation) peuvent 
                rester au format habituel.
              </p>
            </div>
          </div>
        </section>

        {/* Calendrier */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Calendrier pour les artisans
          </h2>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  1er septembre 2026
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Réception obligatoire
                </h3>
                <p className="text-gray-600 text-sm">
                  Vous devez pouvoir <strong>recevoir</strong> les factures électroniques 
                  de vos fournisseurs (distributeurs, grossistes, loueurs de matériel).
                </p>
              </div>
              <div className="p-6">
                <div className="text-sm text-orange-600 font-semibold mb-2">
                  1er septembre 2027
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Émission obligatoire
                </h3>
                <p className="text-gray-600 text-sm">
                  Vous devez <strong>émettre</strong> des factures électroniques pour 
                  tous vos clients professionnels (syndics, entreprises, bailleurs).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Préparez votre activité dès maintenant
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            FacturSimple gère la facturation électronique, l'autoliquidation BTP, 
            et les mentions obligatoires artisan. Simple, conforme, abordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#pricing"
              className="bg-white text-yellow-600 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-50 transition-colors"
            >
              Voir les tarifs
            </Link>
            <Link
              href="/outils/verifier-tva"
              className="bg-yellow-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-colors"
            >
              Vérifier un numéro SIRET
            </Link>
          </div>
        </section>

        {/* Articles connexes */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Articles connexes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/facturation-electronique-artisan-btp" className="block group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Guide artisan BTP général
                </h3>
                <p className="text-sm text-gray-600">
                  Vue d'ensemble pour tous les métiers du bâtiment
                </p>
              </div>
            </Link>
            <Link href="/blog/facturation-electronique-auto-entrepreneur" className="block group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Guide auto-entrepreneur complet
                </h3>
                <p className="text-sm text-gray-600">
                  Tout savoir sur la réforme 2026
                </p>
              </div>
            </Link>
            <Link href="/blog/calendrier-reforme-facture-electronique-2026" className="block group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Calendrier 2026-2027
                </h3>
                <p className="text-sm text-gray-600">
                  Toutes les dates clés de la réforme
                </p>
              </div>
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
