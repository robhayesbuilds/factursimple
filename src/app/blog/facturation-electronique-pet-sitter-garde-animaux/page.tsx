import { Metadata } from 'next'
import Link from 'next/link'
import { BlogArticle, ArticleHeader, ArticleSection, KeyPoint, InfoBox, FAQ, FAQItem, SectionAnchor } from '../_components/BlogComponents'

export const metadata: Metadata = {
  title: 'Pet Sitter & Garde d\'Animaux : Facturation Électronique 2026 | FacturSimple',
  description: 'Guide facturation électronique pour pet sitters, dog walkers et gardes d\'animaux auto-entrepreneurs. Clients particuliers, plateformes, cliniques vétérinaires et conformité 2026.',
  keywords: ['pet sitter', 'garde animaux', 'dog walker', 'promenade chien', 'facturation électronique', 'auto-entrepreneur', '2026', 'Rover', 'Animaute', 'Yoopies'],
}

export default function PetSitterPage() {
  return (
    <BlogArticle>
      <ArticleHeader
        title="Pet Sitter & Garde d'Animaux : Guide Facturation Électronique 2026"
        subtitle="Guide complet pour pet sitters, dog walkers et professionnels de la garde d'animaux auto-entrepreneurs"
        date="2026-02-06"
        readTime="11 min"
        author="L'équipe FacturSimple"
      />

      <nav className="bg-muted/50 rounded-lg p-4 mb-8">
        <p className="font-medium mb-2">Dans cet article :</p>
        <ul className="space-y-1 text-sm">
          <li><a href="#bonne-nouvelle" className="text-primary hover:underline">→ La bonne nouvelle pour les pet sitters</a></li>
          <li><a href="#types-services" className="text-primary hover:underline">→ Vos services et leur impact</a></li>
          <li><a href="#plateformes" className="text-primary hover:underline">→ Plateformes (Rover, Animaute, Yoopies...)</a></li>
          <li><a href="#clients-pro" className="text-primary hover:underline">→ Clients professionnels : attention</a></li>
          <li><a href="#pension" className="text-primary hover:underline">→ Pension canine et élevage</a></li>
          <li><a href="#preparer" className="text-primary hover:underline">→ Comment se préparer</a></li>
          <li><a href="#faq" className="text-primary hover:underline">→ FAQ pet sitter</a></li>
        </ul>
      </nav>

      <ArticleSection>
        <p className="lead">
          Vous êtes <strong>pet sitter, dog walker ou garde d'animaux</strong> en auto-entreprise ? La réforme de la facturation 
          électronique 2026 approche, mais bonne nouvelle : si vous travaillez essentiellement avec des <strong>particuliers</strong>, 
          vous êtes largement épargné(e). Voici ce qui vous concerne vraiment.
        </p>
      </ArticleSection>

      <SectionAnchor id="bonne-nouvelle" />
      <ArticleSection title="🎉 La bonne nouvelle pour les pet sitters">
        <KeyPoint type="success">
          <strong>95% des pet sitters ne sont PAS concernés</strong> par la facturation électronique obligatoire !
          Si tous vos clients sont des particuliers (garde à domicile, promenades, visites), 
          vous n'avez pas d'e-invoicing à faire — uniquement l'<strong>e-reporting</strong> de vos encaissements.
        </KeyPoint>

        <p>
          La réforme vise les transactions <strong>B2B</strong> (entre professionnels). Or, l'immense majorité des pet sitters 
          travaillent exclusivement avec des <strong>particuliers</strong> qui leur confient leur chien, chat, NAC ou autre animal de compagnie.
        </p>

        <div className="bg-card border rounded-lg p-6 my-6">
          <h4 className="font-semibold mb-4">Ce qui change (et ne change pas) pour vous :</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded">
              <p className="font-medium text-green-800 dark:text-green-200 mb-2">✓ Pas de changement</p>
              <ul className="text-sm space-y-1">
                <li>• Garde chez le client</li>
                <li>• Promenades de chiens</li>
                <li>• Visites à domicile</li>
                <li>• Garde chez vous (particuliers)</li>
                <li>• Cat sitting</li>
                <li>• Garde de NAC</li>
              </ul>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded">
              <p className="font-medium text-amber-800 dark:text-amber-200 mb-2">⚠️ À surveiller</p>
              <ul className="text-sm space-y-1">
                <li>• Cliniques vétérinaires</li>
                <li>• Refuges et associations</li>
                <li>• Animaleries et magasins</li>
                <li>• Éleveurs professionnels</li>
                <li>• Entreprises pour leurs locaux</li>
              </ul>
            </div>
          </div>
        </div>
      </ArticleSection>

      <SectionAnchor id="types-services" />
      <ArticleSection title="🐕 Vos services et leur impact fiscal">
        
        <h3 className="text-lg font-semibold mt-6 mb-3">Promenade de chiens (Dog Walking)</h3>
        <p>
          Vous promenez des chiens individuellement ou en groupe pour des particuliers ? 
          <strong> Pas de facturation électronique requise.</strong> Vos clients sont des particuliers, donc e-reporting simple.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Garde à domicile (House Sitting)</h3>
        <p>
          Vous gardez les animaux chez leurs propriétaires pendant leurs vacances ou déplacements ? 
          <strong> Pas de facturation électronique requise.</strong> Même logique : client particulier = pas d'e-invoicing.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Visites quotidiennes</h3>
        <p>
          Passages quotidiens pour nourrir, sortir et câliner les animaux ? 
          <strong> Pas de facturation électronique requise.</strong>
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Garde chez vous (Family Sitting)</h3>
        <p>
          L'animal vient chez vous comme en famille ? Tant que votre client est un particulier, 
          <strong> pas de facturation électronique requise.</strong>
        </p>

        <InfoBox type="info" title="Et les frais de déplacement ?">
          Si vous facturez des frais kilométriques en plus de vos prestations, c'est inclus dans la même facture 
          et suit le même traitement : client particulier = e-reporting, client pro = e-invoicing.
        </InfoBox>
      </ArticleSection>

      <SectionAnchor id="plateformes" />
      <ArticleSection title="📱 Plateformes de mise en relation">
        
        <p>
          Beaucoup de pet sitters trouvent leurs clients via des plateformes. Voici comment ça se passe fiscalement :
        </p>

        <div className="bg-card border rounded-lg overflow-hidden my-6">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3">Plateforme</th>
                <th className="text-left p-3">Modèle</th>
                <th className="text-left p-3">Impact 2026</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 font-medium">Rover</td>
                <td className="p-3">Plateforme US, commissionnée</td>
                <td className="p-3 text-green-600">Pas d'e-invoicing (client final = particulier)</td>
              </tr>
              <tr className="border-t bg-muted/30">
                <td className="p-3 font-medium">Animaute</td>
                <td className="p-3">Mise en relation française</td>
                <td className="p-3 text-green-600">Pas d'e-invoicing</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Yoopies</td>
                <td className="p-3">Mise en relation</td>
                <td className="p-3 text-green-600">Pas d'e-invoicing</td>
              </tr>
              <tr className="border-t bg-muted/30">
                <td className="p-3 font-medium">Holidog / DogBuddy</td>
                <td className="p-3">Plateforme intégrée</td>
                <td className="p-3 text-green-600">Pas d'e-invoicing</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Pawshake</td>
                <td className="p-3">Mise en relation</td>
                <td className="p-3 text-green-600">Pas d'e-invoicing</td>
              </tr>
              <tr className="border-t bg-muted/30">
                <td className="p-3 font-medium">EmmeneTonChien</td>
                <td className="p-3">Mise en relation locale</td>
                <td className="p-3 text-green-600">Pas d'e-invoicing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <KeyPoint type="info">
          <strong>Le point clé :</strong> Ces plateformes vous mettent en relation avec des particuliers. 
          Même si la plateforme prend une commission, <strong>votre client final reste un particulier</strong>. 
          C'est cette relation qui détermine vos obligations fiscales.
        </KeyPoint>

        <InfoBox type="warning" title="Commissions des plateformes">
          Si vous recevez une facture de commission de la part d'une plateforme française (exemple : 15% de frais de service), 
          cette facture devra être au format électronique à partir de 2026. Mais c'est la plateforme qui l'émet, pas vous !
        </InfoBox>
      </ArticleSection>

      <SectionAnchor id="clients-pro" />
      <ArticleSection title="🏢 Clients professionnels : quand ça change">

        <p>
          Si une partie de votre activité s'adresse à des <strong>professionnels</strong>, là, la facturation électronique s'applique :
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2">🏥 Cliniques vétérinaires</h4>
            <p className="text-sm">
              Certains vétérinaires proposent la garde post-opératoire ou des services de pension. 
              Si vous intervenez pour eux en sous-traitance : <strong>facture électronique obligatoire</strong>.
            </p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2">🏠 Refuges et associations</h4>
            <p className="text-sm">
              Les associations loi 1901 avec n° SIRET sont des professionnels au sens fiscal. 
              Si vous gardez des animaux pour un refuge ou une SPA locale : <strong>facture électronique obligatoire</strong>.
            </p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2">🏪 Animaleries et magasins</h4>
            <p className="text-sm">
              Garde temporaire d'animaux pour une animalerie, promenades pour un magasin pet-friendly : 
              <strong>facture électronique obligatoire</strong>.
            </p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2">🐕‍🦺 Éleveurs professionnels</h4>
            <p className="text-sm">
              Un éleveur vous confie la socialisation ou la garde de chiots/chatons : 
              <strong>facture électronique obligatoire</strong>.
            </p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2">🏢 Entreprises pet-friendly</h4>
            <p className="text-sm">
              Certaines entreprises proposent des services aux salariés (garde du chien pendant les réunions). 
              Si l'entreprise vous paie directement : <strong>facture électronique obligatoire</strong>.
            </p>
          </div>
        </div>

        <InfoBox type="tip" title="Astuce : identifier vos clients pro">
          Demandez systématiquement si votre client a un <strong>numéro SIRET</strong>. 
          S'il en a un et l'utilise pour la facturation : c'est un pro, e-invoicing requis. 
          S'il n'en a pas : c'est un particulier, e-reporting simple.
        </InfoBox>
      </ArticleSection>

      <SectionAnchor id="pension" />
      <ArticleSection title="🏡 Cas particulier : pension canine / féline">

        <p>
          Si vous avez développé une activité de <strong>pension</strong> (accueil d'animaux chez vous de façon régulière), 
          quelques points à considérer :
        </p>

        <KeyPoint type="info">
          <strong>Pension ≠ ICPE obligatoire</strong> : En dessous de 10 chiens de plus de 4 mois simultanément, 
          vous n'avez pas besoin de déclaration ICPE. Mais au-delà, vous sortez potentiellement du régime micro-entrepreneur.
        </KeyPoint>

        <div className="bg-card border rounded-lg p-6 my-6">
          <h4 className="font-semibold mb-3">Pension et facturation électronique :</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>Particuliers</strong> qui vous confient leur animal : pas d'e-invoicing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-1">⚠️</span>
              <span><strong>Éleveurs</strong> qui vous confient des animaux : e-invoicing obligatoire</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-1">⚠️</span>
              <span><strong>Refuges/associations</strong> : e-invoicing obligatoire</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-1">⚠️</span>
              <span><strong>Vétérinaires</strong> pour garde post-op : e-invoicing obligatoire</span>
            </li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">ACACED et conformité</h3>
        <p>
          Si vous avez l'<strong>ACACED</strong> (Attestation de Connaissances pour les Animaux de Compagnie d'Espèces Domestiques), 
          vous pouvez exercer légalement la garde d'animaux. Cette certification n'a pas d'impact sur vos obligations fiscales 2026 — 
          c'est toujours la nature du client (particulier vs pro) qui compte.
        </p>
      </ArticleSection>

      <SectionAnchor id="preparer" />
      <ArticleSection title="📋 Comment se préparer">

        <p>
          Même si vous travaillez uniquement avec des particuliers, quelques actions simples :
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-semibold mb-2">1. Identifiez vos clients</h4>
            <p className="text-sm text-muted-foreground">
              Faites la liste de vos clients réguliers. Combien sont des particuliers ? 
              Des associations ? Des professionnels ? Cela vous donnera une idée de votre exposition.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-semibold mb-2">2. Mettez à jour vos factures</h4>
            <p className="text-sm text-muted-foreground">
              Vos factures doivent déjà contenir toutes les mentions légales. 
              Vérifiez : votre SIRET, la mention "TVA non applicable, art. 293 B du CGI", etc.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-semibold mb-2">3. Choisissez un outil adapté</h4>
            <p className="text-sm text-muted-foreground">
              Même pour l'e-reporting simple, un logiciel vous simplifiera la vie. 
              FacturSimple gère automatiquement la distinction B2B/B2C.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-semibold mb-2">4. Restez informé</h4>
            <p className="text-sm text-muted-foreground">
              La réforme peut évoluer. Inscrivez-vous aux newsletters de l'URSSAF ou de votre CMA 
              pour suivre les actualités.
            </p>
          </div>
        </div>

        <InfoBox type="tip" title="Contrats de garde">
          Pensez à utiliser des contrats de garde qui précisent clairement les conditions, 
          les tarifs et vos coordonnées professionnelles. C'est plus pro, et ça clarifie la relation commerciale.
        </InfoBox>
      </ArticleSection>

      <SectionAnchor id="faq" />
      <ArticleSection title="❓ FAQ Pet Sitter et Facturation 2026">
        <FAQ>
          <FAQItem question="Je garde le chat de ma voisine contre rémunération, suis-je concerné ?">
            Si c'est occasionnel et informel, c'est plutôt du service entre voisins. Mais si vous avez un statut 
            auto-entrepreneur et facturez régulièrement, même pour des voisins : c'est du B2C, donc e-reporting simple 
            (pas de facture électronique obligatoire).
          </FAQItem>

          <FAQItem question="Je promène des chiens pour plusieurs particuliers en même temps. Une seule facture ?">
            Non, chaque client reçoit sa propre facture pour son chien. Même si vous les promenez ensemble, 
            ce sont des prestations distinctes. Toutes restent en B2C = pas d'e-invoicing.
          </FAQItem>

          <FAQItem question="Une association de protection animale me paie pour garder des chiens en attente d'adoption. E-invoicing ?">
            Oui. Une association avec SIRET est considérée comme un professionnel. 
            Vos factures devront être au format électronique à partir de septembre 2026.
          </FAQItem>

          <FAQItem question="Je vends aussi des accessoires (laisses, jouets, friandises). Changement ?">
            La vente de biens suit la même logique : vente à un particulier = e-reporting, 
            vente à un pro = e-invoicing. Si vous vendez quelques accessoires à vos clients particuliers, pas de changement.
          </FAQItem>

          <FAQItem question="Rover me verse directement l'argent. Qui est mon client ?">
            Votre client reste le propriétaire de l'animal (un particulier). Rover est un intermédiaire de paiement. 
            Pas de changement pour vous côté e-invoicing.
          </FAQItem>

          <FAQItem question="Je fais du transport d'animaux vers le vétérinaire. Concerné ?">
            Si c'est le particulier qui vous paie pour emmener son animal : B2C, pas d'e-invoicing. 
            Si c'est le vétérinaire qui vous paie comme prestataire : B2B, e-invoicing obligatoire.
          </FAQItem>

          <FAQItem question="Dois-je avoir l'ACACED pour être en règle ?">
            L'ACACED est obligatoire pour exercer certaines activités liées aux animaux de compagnie 
            (garde, élevage, vente, éducation...). C'est une obligation réglementaire distincte de la facturation. 
            Vous pouvez être conforme côté ACACED mais pas côté facturation, et inversement.
          </FAQItem>
        </FAQ>
      </ArticleSection>

      <ArticleSection title="En résumé">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">🐕</span>
              <span><strong>95% des pet sitters</strong> ne sont pas concernés par l'e-invoicing (clients particuliers)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">📊</span>
              <span>L'<strong>e-reporting</strong> de vos encaissements sera obligatoire (déclaration simple)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">🏢</span>
              <span>Seuls les clients <strong>professionnels</strong> (vétos, refuges, éleveurs) nécessitent l'e-invoicing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">📱</span>
              <span>Les <strong>plateformes</strong> (Rover, Animaute...) ne changent rien à vos obligations</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-card border rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Simplifiez votre facturation avec FacturSimple</h3>
          <p className="text-muted-foreground mb-4">
            Conçu pour les auto-entrepreneurs, prêt pour 2026. E-invoicing et e-reporting gérés automatiquement.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Découvrir FacturSimple →
          </Link>
        </div>
      </ArticleSection>
    </BlogArticle>
  )
}
