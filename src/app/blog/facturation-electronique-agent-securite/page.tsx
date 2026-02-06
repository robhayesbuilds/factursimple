import { Metadata } from 'next'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'

export const metadata: Metadata = {
  title: 'Facturation Électronique Agent de Sécurité 2026 | Guide Complet',
  description: 'Agent de sécurité indépendant : êtes-vous concerné par la facturation électronique 2026 ? Guide spécifique pour les agents SSIAP, surveillance, événementiel.',
  keywords: ['facturation électronique', 'agent de sécurité', 'auto-entrepreneur', '2026', 'SSIAP', 'surveillance', 'gardiennage'],
  openGraph: {
    title: 'Facturation Électronique Agent de Sécurité 2026',
    description: 'Guide complet pour les agents de sécurité indépendants face à la réforme.',
  },
}

export default function FacturationElectroniqueAgentSecurite() {
  return (
    <BlogLayout
      title="Agent de Sécurité Indépendant : Tout Savoir sur la Facturation Électronique 2026"
      description="SSIAP, surveillance, événementiel : comprenez vos obligations et préparez-vous sereinement"
      publishDate="2026-02-06"
      readTime="9 min"
      category="Métiers"
    >
      <p className="lead">
        Vous êtes agent de sécurité indépendant (APS, SSIAP, maître-chien, agent événementiel) ? 
        La réforme de la facturation électronique 2026 vous <strong>concerne directement</strong> car 
        votre clientèle est presque exclusivement composée d'entreprises. Voici tout ce que vous 
        devez savoir.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
        <h3 className="text-red-800 font-bold mb-2">⚠️ Vous êtes très probablement concerné</h3>
        <p className="text-red-700">
          Contrairement à beaucoup d'autres métiers en auto-entreprise, les agents de sécurité 
          facturent presque toujours des <strong>entreprises</strong> (sociétés de sécurité, 
          organisateurs d'événements, entreprises clientes directes). Cela signifie que vous 
          devrez émettre des factures électroniques dès septembre 2027.
        </p>
      </div>

      <h2>Comment fonctionne le métier d'agent de sécurité indépendant ?</h2>
      
      <p>
        En tant qu'agent de sécurité auto-entrepreneur, vous pouvez travailler de plusieurs façons :
      </p>

      <h3>1. Sous-traitance pour des sociétés de sécurité</h3>
      <p>
        Le modèle le plus courant : vous êtes appelé en renfort par des entreprises comme 
        Securitas, Seris, Onet Sécurité, ou des PME locales de gardiennage.
      </p>
      <ul>
        <li><strong>Surveillance de sites</strong> : entrepôts, usines, chantiers</li>
        <li><strong>Rondes de nuit</strong> : parkings, résidences, zones d'activités</li>
        <li><strong>Gardiennage</strong> : accueil, contrôle d'accès, PC sécurité</li>
      </ul>
      <p className="text-blue-600">
        → <strong>B2B</strong> : Vous facturez une entreprise = concerné par la facturation électronique
      </p>

      <h3>2. Événementiel et festivals</h3>
      <p>
        Les événements (concerts, salons, matchs sportifs, soirées) font appel à des agents 
        de sécurité via des agences événementielles ou directement.
      </p>
      <ul>
        <li>Filtrage et palpation</li>
        <li>Contrôle des billets et accréditations</li>
        <li>Gestion des flux de foule</li>
        <li>Sécurité backstage / VIP</li>
      </ul>
      <p className="text-blue-600">
        → <strong>B2B</strong> : Que vous facturiez l'organisateur ou une agence de sécurité, c'est toujours une entreprise
      </p>

      <h3>3. SSIAP - Sécurité Incendie</h3>
      <p>
        Si vous êtes certifié SSIAP 1, 2 ou 3, vous intervenez pour la prévention et la 
        lutte contre l'incendie dans les ERP (Établissements Recevant du Public) et IGH.
      </p>
      <ul>
        <li>Centres commerciaux</li>
        <li>Hôpitaux et cliniques</li>
        <li>Immeubles de bureaux</li>
        <li>Théâtres et cinémas</li>
      </ul>
      <p className="text-blue-600">
        → <strong>B2B</strong> : Les ERP sont gérés par des entreprises ou établissements publics
      </p>

      <h3>4. Maître-chien (cynophile)</h3>
      <p>
        Les agents cynophiles sont particulièrement recherchés pour la surveillance de sites 
        sensibles, les rondes nocturnes, et la détection.
      </p>
      <p className="text-blue-600">
        → <strong>B2B</strong> : Même logique, vos clients sont des entreprises
      </p>

      <h2>Le cas rare du B2C dans la sécurité</h2>
      
      <p>
        Existe-t-il des situations où un agent de sécurité facture un particulier ?
      </p>

      <div className="bg-gray-100 p-6 rounded-lg my-6">
        <h4 className="font-bold mb-3">Situations B2C possibles (rares)</h4>
        <ul className="space-y-2">
          <li>
            <strong>Garde du corps occasionnel</strong> : Protection rapprochée d'un particulier 
            pour un événement personnel (mariage, anniversaire)
          </li>
          <li>
            <strong>Surveillance de domicile privé</strong> : Gardiennage ponctuel d'une 
            villa pendant les vacances d'un particulier
          </li>
          <li>
            <strong>Escorte de biens</strong> : Convoyage d'objets de valeur pour un collectionneur privé
          </li>
        </ul>
        <p className="mt-4 text-green-700">
          → Ces prestations B2C ne sont <strong>pas concernées</strong> par la facturation électronique
        </p>
      </div>

      <p>
        <strong>En pratique</strong> : Ces cas représentent moins de 5% de l'activité des agents 
        de sécurité indépendants. L'immense majorité de vos factures sont destinées à des entreprises.
      </p>

      <h2>Calendrier 2026-2027 pour les agents de sécurité</h2>

      <table className="w-full border-collapse my-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left">Date</th>
            <th className="border p-3 text-left">Obligation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-3 font-bold">1er septembre 2026</td>
            <td className="border p-3">
              Vous devez pouvoir <strong>recevoir</strong> des factures électroniques 
              (de vos fournisseurs)
            </td>
          </tr>
          <tr>
            <td className="border p-3 font-bold">1er septembre 2027</td>
            <td className="border p-3">
              Vous devez <strong>émettre</strong> vos factures au format électronique 
              (vers vos clients B2B)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Comment vous préparer dès maintenant ?</h2>

      <h3>1. Faites l'inventaire de votre clientèle</h3>
      <p>
        Listez vos clients des 12 derniers mois :
      </p>
      <ul>
        <li>Sociétés de sécurité (sous-traitance)</li>
        <li>Agences événementielles</li>
        <li>Entreprises directes (usines, commerces, copropriétés)</li>
        <li>Collectivités (mairies, hôpitaux publics)</li>
        <li>Particuliers (rare)</li>
      </ul>
      <p>
        Si plus de 50% de votre CA vient d'entreprises (ce qui est quasi certain), 
        la facturation électronique est incontournable pour vous.
      </p>

      <h3>2. Collectez les informations clés</h3>
      <p>
        Pour chaque client B2B, vous aurez besoin de :
      </p>
      <ul>
        <li><strong>SIRET</strong> : Obligatoire sur vos factures électroniques</li>
        <li><strong>Adresse de facturation</strong> : Complète et à jour</li>
        <li><strong>Plateforme de réception</strong> : Certains grands groupes imposent déjà Chorus Pro ou une PDP spécifique</li>
      </ul>

      <h3>3. Choisissez un outil adapté</h3>
      <p>
        Votre logiciel de facturation devra être compatible avec les formats Factur-X, UBL 
        ou CII et pouvoir transmettre via une PDP (Plateforme de Dématérialisation Partenaire).
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
        <h4 className="font-bold text-blue-800 mb-2">💡 Anticipez dès maintenant</h4>
        <p className="text-blue-700">
          N'attendez pas septembre 2027. Les sociétés de sécurité avec qui vous travaillez 
          vont progressivement exiger des factures électroniques. Être prêt avant vos 
          concurrents est un avantage.
        </p>
      </div>

      <h2>Cas particulier : les collectivités et Chorus Pro</h2>

      <p>
        Si vous travaillez pour des <strong>marchés publics</strong> (mairies, hôpitaux 
        publics, musées, préfectures), vous devez déjà utiliser <strong>Chorus Pro</strong> 
        pour facturer l'État.
      </p>
      
      <p>
        C'est une bonne nouvelle : vous êtes déjà familier avec la facturation électronique ! 
        La transition vers le nouveau système sera plus simple pour vous.
      </p>

      <h2>Obligations réglementaires spécifiques aux APS</h2>

      <p>
        En plus de la facturation électronique, n'oubliez pas vos obligations sectorielles :
      </p>

      <ul>
        <li><strong>Carte professionnelle CNAPS</strong> : Valide et à jour</li>
        <li><strong>Assurance RC Pro</strong> : Obligatoire pour l'activité</li>
        <li><strong>Formation continue</strong> : MAC APS tous les 5 ans</li>
        <li>
          <strong>Certifications SSIAP</strong> : Recyclage ou remise à niveau selon le niveau
        </li>
      </ul>

      <p>
        Ces obligations sont indépendantes de la facturation électronique mais doivent 
        figurer sur vos documents (notamment le numéro de carte pro).
      </p>

      <h2>FAQ Agent de Sécurité et Facturation Électronique</h2>

      <div className="space-y-6 my-8">
        <div className="border-l-4 border-gray-300 pl-4">
          <h4 className="font-bold">Je travaille uniquement pour une seule société de sécurité. Suis-je concerné ?</h4>
          <p>
            Oui, absolument. Que vous ayez un ou dix clients, dès lors que vous facturez 
            une entreprise (ce qui est le cas d'une société de sécurité), vous devez 
            émettre des factures électroniques à partir de septembre 2027.
          </p>
        </div>

        <div className="border-l-4 border-gray-300 pl-4">
          <h4 className="font-bold">Mon donneur d'ordre me demande déjà des factures électroniques, est-ce normal ?</h4>
          <p>
            Oui, c'est légal et de plus en plus courant. Les grandes entreprises de sécurité 
            anticipent la réforme et demandent à leurs sous-traitants de passer au numérique. 
            C'est un signal que vous devez vous équiper rapidement.
          </p>
        </div>

        <div className="border-l-4 border-gray-300 pl-4">
          <h4 className="font-bold">Je fais des vacations payées en espèces, comment ça marche ?</h4>
          <p>
            Le mode de paiement (espèces, virement, chèque) n'a rien à voir avec le format 
            de la facture. Même si vous êtes payé en espèces, vous devez émettre une facture 
            — et celle-ci devra être électronique pour les clients B2B.
          </p>
        </div>

        <div className="border-l-4 border-gray-300 pl-4">
          <h4 className="font-bold">Je suis agent cynophile. Les frais de mon chien sont-ils concernés ?</h4>
          <p>
            Les frais vétérinaires et d'alimentation que vous payez restent des dépenses 
            classiques. Si vos fournisseurs sont assujettis à la TVA en France, ils vous 
            enverront des factures électroniques à partir de 2026.
          </p>
        </div>

        <div className="border-l-4 border-gray-300 pl-4">
          <h4 className="font-bold">Je fais parfois de la sécurité pour des mariages privés. C'est du B2C ?</h4>
          <p>
            Ça dépend de qui vous facturez. Si vous facturez directement les mariés 
            (particuliers), c'est du B2C, non concerné. Si vous facturez le wedding planner 
            ou le domaine (entreprises), c'est du B2B, concerné.
          </p>
        </div>

        <div className="border-l-4 border-gray-300 pl-4">
          <h4 className="font-bold">Je suis SSIAP dans un centre commercial. Qui dois-je facturer ?</h4>
          <p>
            Généralement, vous facturez soit la société de sécurité qui vous sous-traite, 
            soit directement la foncière/gestionnaire du centre commercial. Dans les deux 
            cas, ce sont des entreprises = facturation électronique obligatoire.
          </p>
        </div>

        <div className="border-l-4 border-gray-300 pl-4">
          <h4 className="font-bold">Quel logiciel pour un agent de sécurité indépendant ?</h4>
          <p>
            Privilégiez un outil simple, adapté aux auto-entrepreneurs, avec la 
            facturation électronique 2026 intégrée. Les fonctionnalités clés : 
            modèles de factures rapides, calcul automatique du CA, export pour 
            la déclaration URSSAF.
          </p>
        </div>
      </div>

      <h2>Conclusion : Anticipez pour rester compétitif</h2>

      <p>
        En tant qu'agent de sécurité indépendant, vous êtes dans la catégorie des 
        auto-entrepreneurs les plus concernés par la réforme 2026. Votre clientèle 
        est quasi-exclusivement B2B, ce qui signifie que toutes vos factures (ou presque) 
        devront passer au format électronique.
      </p>

      <p>
        La bonne nouvelle : en vous équipant dès maintenant, vous montrez à vos donneurs 
        d'ordre que vous êtes un professionnel sérieux et à jour. C'est un argument 
        commercial face à des concurrents qui traîneront les pieds.
      </p>

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg my-8">
        <h3 className="text-2xl font-bold mb-4">Prêt à anticiper 2026 ?</h3>
        <p className="mb-6">
          FacturSimple vous accompagne dans la transition vers la facturation électronique. 
          Simple, conforme, et pensé pour les agents de sécurité indépendants.
        </p>
        <Link
          href="/#waitlist"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Rejoindre la liste d'attente
        </Link>
      </div>

      <h2>Articles connexes</h2>
      <ul>
        <li>
          <Link href="/blog/guide-facture-electronique-2026">
            Guide complet de la facturation électronique 2026
          </Link>
        </li>
        <li>
          <Link href="/blog/auto-entrepreneur-facture-electronique-obligatoire">
            Auto-entrepreneur : la facture électronique devient obligatoire
          </Link>
        </li>
        <li>
          <Link href="/blog/ppf-vs-pdp">
            PPF vs PDP : quelle plateforme choisir ?
          </Link>
        </li>
      </ul>
    </BlogLayout>
  )
}
