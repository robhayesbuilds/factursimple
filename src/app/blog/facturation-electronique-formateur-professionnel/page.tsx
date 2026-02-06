import { Metadata } from 'next'
import Link from 'next/link'
import { BlogArticle, ArticleHeader, ArticleSection, KeyPoint, InfoBox, FAQ, FAQItem, SectionAnchor } from '../_components/BlogComponents'

export const metadata: Metadata = {
  title: 'Formateur Professionnel : Facturation Électronique 2026 | FacturSimple',
  description: 'Guide facturation électronique pour formateurs indépendants auto-entrepreneurs. OPCO, Qualiopi, organismes de formation, sous-traitance et conformité 2026.',
  keywords: ['formateur', 'formation professionnelle', 'facturation électronique', 'auto-entrepreneur', '2026', 'Qualiopi', 'OPCO', 'CPF', 'BPF'],
}

export default function FormateurPage() {
  return (
    <BlogArticle>
      <ArticleHeader
        title="Formateur Professionnel : Guide Facturation Électronique 2026"
        subtitle="Guide complet pour formateurs indépendants auto-entrepreneurs : OPCO, Qualiopi, sous-traitance et conformité"
        date="2026-02-06"
        readTime="13 min"
        author="L'équipe FacturSimple"
      />

      <nav className="bg-muted/50 rounded-lg p-4 mb-8">
        <p className="font-medium mb-2">Dans cet article :</p>
        <ul className="space-y-1 text-sm">
          <li><a href="#attention" className="text-primary hover:underline">→ Pourquoi les formateurs sont particulièrement concernés</a></li>
          <li><a href="#types-clients" className="text-primary hover:underline">→ Vos clients et leur impact fiscal</a></li>
          <li><a href="#sous-traitance" className="text-primary hover:underline">→ Sous-traitance et portage salarial</a></li>
          <li><a href="#qualiopi" className="text-primary hover:underline">→ Qualiopi et financement</a></li>
          <li><a href="#exoneration-tva" className="text-primary hover:underline">→ Exonération TVA formation</a></li>
          <li><a href="#preparer" className="text-primary hover:underline">→ Comment se préparer</a></li>
          <li><a href="#faq" className="text-primary hover:underline">→ FAQ formateur</a></li>
        </ul>
      </nav>

      <ArticleSection>
        <p className="lead">
          Vous êtes <strong>formateur indépendant</strong> en auto-entreprise ? Contrairement à beaucoup d'autres métiers, 
          vous êtes probablement <strong>directement concerné</strong> par la réforme de la facturation électronique 2026. 
          La majorité de vos clients sont des entreprises, des organismes de formation ou des OPCO — tous des professionnels.
        </p>
      </ArticleSection>

      <SectionAnchor id="attention" />
      <ArticleSection title="⚠️ Pourquoi les formateurs sont particulièrement concernés">
        <KeyPoint type="warning">
          <strong>Contrairement aux autres métiers</strong>, les formateurs travaillent majoritairement en B2B. 
          Entreprises, organismes de formation, OPCO : ce sont tous des professionnels. 
          Vous aurez probablement besoin de la facturation électronique dès septembre 2026.
        </KeyPoint>

        <p>
          La réforme vise les transactions <strong>B2B</strong> (entre professionnels). Et dans le monde de la formation, 
          la majorité des flux sont B2B :
        </p>

        <div className="bg-card border rounded-lg p-6 my-6">
          <h4 className="font-semibold mb-4">Qui vous paie en tant que formateur ?</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded">
              <p className="font-medium text-amber-800 dark:text-amber-200 mb-2">⚠️ E-invoicing obligatoire (B2B)</p>
              <ul className="text-sm space-y-1">
                <li>• Entreprises clientes directes</li>
                <li>• Organismes de formation (OF)</li>
                <li>• OPCO (France Compétences)</li>
                <li>• Écoles et universités privées</li>
                <li>• Associations avec SIRET</li>
                <li>• CCI, CMA, chambres consulaires</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded">
              <p className="font-medium text-green-800 dark:text-green-200 mb-2">✓ E-reporting simple (B2C)</p>
              <ul className="text-sm space-y-1">
                <li>• Particuliers en autofinancement</li>
                <li>• Coaching personnel privé</li>
                <li>• Ateliers grand public</li>
                <li>• Formations loisirs (non pro)</li>
              </ul>
            </div>
          </div>
        </div>

        <InfoBox type="info" title="Réalité du marché">
          La plupart des formateurs indépendants réalisent 80-95% de leur CA avec des clients professionnels. 
          Les formations autofinancées par des particuliers sont rares (coût prohibitif sans prise en charge).
        </InfoBox>
      </ArticleSection>

      <SectionAnchor id="types-clients" />
      <ArticleSection title="🎯 Vos clients et leur impact fiscal">
        
        <h3 className="text-lg font-semibold mt-6 mb-3">Organismes de formation (OF)</h3>
        <p>
          Vous intervenez en sous-traitance pour un organisme certifié Qualiopi ? C'est du <strong>B2B pur</strong>. 
          L'OF vous paie, vous lui facturez : <strong>facture électronique obligatoire</strong> dès septembre 2026.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Entreprises clientes directes</h3>
        <p>
          Vous formez les équipes d'une PME ou d'un grand groupe ? L'entreprise vous règle directement 
          (ou via son OPCO) : <strong>facture électronique obligatoire</strong>.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">OPCO et financeurs publics</h3>
        <p>
          Quand l'OPCO vous paie directement (financement direct), ou quand vous facturez via 
          France Compétences / Pôle Emploi / Région : <strong>facture électronique obligatoire</strong>.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">CPF et formations financées</h3>
        <p>
          Si un stagiaire utilise son CPF pour payer votre formation, le flux financier passe par 
          la Caisse des Dépôts (CDC). C'est un circuit B2B : <strong>facture électronique obligatoire</strong>.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Particuliers autofinancés</h3>
        <p>
          Rare mais possible : un particulier paie de sa poche, sans CPF ni financement. 
          C'est du B2C : <strong>e-reporting simple</strong>, pas de facture électronique.
        </p>

        <div className="bg-card border rounded-lg overflow-hidden my-6">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3">Situation</th>
                <th className="text-left p-3">Payeur</th>
                <th className="text-left p-3">Obligation 2026</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Formation intra-entreprise</td>
                <td className="p-3">L'entreprise cliente</td>
                <td className="p-3 text-amber-600 font-medium">E-invoicing ✓</td>
              </tr>
              <tr className="border-t bg-muted/30">
                <td className="p-3">Sous-traitance OF</td>
                <td className="p-3">L'organisme de formation</td>
                <td className="p-3 text-amber-600 font-medium">E-invoicing ✓</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Formation CPF</td>
                <td className="p-3">Caisse des Dépôts</td>
                <td className="p-3 text-amber-600 font-medium">E-invoicing ✓</td>
              </tr>
              <tr className="border-t bg-muted/30">
                <td className="p-3">Formation OPCO</td>
                <td className="p-3">OPCO / France Compétences</td>
                <td className="p-3 text-amber-600 font-medium">E-invoicing ✓</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Coaching personnel privé</td>
                <td className="p-3">Le particulier</td>
                <td className="p-3 text-green-600">E-reporting simple</td>
              </tr>
              <tr className="border-t bg-muted/30">
                <td className="p-3">Atelier loisir grand public</td>
                <td className="p-3">Les participants</td>
                <td className="p-3 text-green-600">E-reporting simple</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <SectionAnchor id="sous-traitance" />
      <ArticleSection title="🤝 Sous-traitance et portage salarial">

        <h3 className="text-lg font-semibold mt-6 mb-3">Sous-traitance pour un OF</h3>
        <p>
          Configuration très courante : un organisme de formation certifié Qualiopi vous sollicite 
          comme formateur externe. L'OF signe le contrat avec le client final, vous facturez l'OF.
        </p>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 my-4">
          <h4 className="font-semibold mb-2">Vos obligations en sous-traitance :</h4>
          <ul className="space-y-1 text-sm">
            <li>• Facture électronique obligatoire (l'OF est un pro)</li>
            <li>• Mention de sous-traitance recommandée sur la facture</li>
            <li>• NDA (numéro de déclaration d'activité) à mentionner</li>
            <li>• Convention de formation ou contrat de prestation</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">Portage salarial</h3>
        <p>
          Si vous passez par une société de portage (ITG, Didaxis, Cegelem...), vous êtes salarié 
          de la société de portage. C'est elle qui facture le client final, pas vous.
        </p>

        <KeyPoint type="info">
          <strong>En portage salarial</strong>, vous n'avez pas à vous soucier de la facturation électronique — 
          c'est la société de portage qui gère. Mais attention : vous n'êtes plus auto-entrepreneur dans ce cas.
        </KeyPoint>

        <h3 className="text-lg font-semibold mt-6 mb-3">Coopératives d'activité (CAE)</h3>
        <p>
          Même logique qu'en portage : la CAE facture, vous êtes "entrepreneur-salarié". 
          La facturation électronique est gérée par la CAE.
        </p>
      </ArticleSection>

      <SectionAnchor id="qualiopi" />
      <ArticleSection title="🏆 Qualiopi et financements publics">

        <p>
          La certification <strong>Qualiopi</strong> est indispensable pour accéder aux financements publics 
          (CPF, OPCO, Pôle Emploi). En tant que micro-entrepreneur, vous pouvez vous faire certifier... 
          mais c'est coûteux et contraignant.
        </p>

        <div className="bg-card border rounded-lg p-6 my-6">
          <h4 className="font-semibold mb-3">Qualiopi pour les micro-entrepreneurs :</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span><strong>Possible</strong> : Les micro-entrepreneurs peuvent obtenir Qualiopi</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-1">⚠️</span>
              <span><strong>Coûteux</strong> : 1 500€ à 3 000€ pour la certification initiale</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-1">⚠️</span>
              <span><strong>Exigeant</strong> : Indicateurs qualité, audits, documentation...</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">→</span>
              <span><strong>Alternative</strong> : Travailler en sous-traitance d'un OF certifié</span>
            </li>
          </ul>
        </div>

        <InfoBox type="tip" title="Stratégie recommandée">
          Pour la plupart des formateurs auto-entrepreneurs, travailler en sous-traitance d'organismes certifiés Qualiopi 
          est plus rentable que d'obtenir sa propre certification. L'OF gère la conformité qualité, 
          vous vous concentrez sur votre expertise.
        </InfoBox>

        <h3 className="text-lg font-semibold mt-6 mb-3">Impact sur la facturation électronique</h3>
        <p>
          Que vous soyez certifié Qualiopi ou non ne change rien à vos obligations de facturation électronique. 
          C'est la nature du client (pro vs particulier) qui compte, pas votre statut de certification.
        </p>
      </ArticleSection>

      <SectionAnchor id="exoneration-tva" />
      <ArticleSection title="📝 Exonération TVA formation">

        <p>
          Point important : les prestations de formation professionnelle peuvent bénéficier d'une 
          <strong> exonération de TVA</strong> (article 261-4-4°a du CGI).
        </p>

        <KeyPoint type="info">
          <strong>Exonération TVA ≠ Dispense de facturation électronique</strong>. 
          Même si vous êtes exonéré de TVA sur vos formations, vous devez quand même utiliser 
          la facturation électronique pour vos clients professionnels.
        </KeyPoint>

        <div className="bg-card border rounded-lg p-6 my-6">
          <h4 className="font-semibold mb-3">Pour bénéficier de l'exonération TVA formation :</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">1.</span>
              <span>Obtenir un <strong>NDA</strong> (Numéro de Déclaration d'Activité) auprès de la DREETS</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">2.</span>
              <span>Demander l'<strong>attestation d'exonération</strong> à la DREETS</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">3.</span>
              <span>Mentionner sur vos factures : "Exonération de TVA, article 261-4-4°a du CGI"</span>
            </li>
          </ul>
        </div>

        <InfoBox type="warning" title="Double franchise possible">
          En tant que micro-entrepreneur, vous pouvez cumuler la <strong>franchise en base de TVA</strong> 
          (régime micro) ET l'<strong>exonération TVA formation</strong>. La mention sur vos factures diffère 
          selon les cas — consultez votre expert-comptable ou la DREETS.
        </InfoBox>
      </ArticleSection>

      <SectionAnchor id="preparer" />
      <ArticleSection title="📋 Comment se préparer">

        <p>
          Les formateurs sont parmi les auto-entrepreneurs les plus impactés par la réforme. Voici comment anticiper :
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-semibold mb-2">1. Auditez votre clientèle</h4>
            <p className="text-sm text-muted-foreground">
              Listez tous vos clients. Combien sont des entreprises, des OF, des OPCO ? 
              Vous verrez rapidement que la quasi-totalité nécessite l'e-invoicing.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-semibold mb-2">2. Choisissez votre outil maintenant</h4>
            <p className="text-sm text-muted-foreground">
              N'attendez pas septembre 2026. Migrez vers un logiciel compatible e-invoicing 
              dès maintenant pour vous familiariser.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-semibold mb-2">3. Vérifiez vos documents</h4>
            <p className="text-sm text-muted-foreground">
              Conventions de formation, contrats de sous-traitance, CGV : 
              tout doit être à jour avec les mentions obligatoires.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-4">
            <h4 className="font-semibold mb-2">4. Anticipez les délais de paiement</h4>
            <p className="text-sm text-muted-foreground">
              Les OPCO et organismes publics ont des délais longs. 
              La facturation électronique peut accélérer les traitements.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3">Mentions obligatoires sur vos factures formation</h3>
        <div className="bg-muted/50 rounded-lg p-4 my-4">
          <ul className="space-y-1 text-sm">
            <li>• Votre <strong>NDA</strong> (Numéro de Déclaration d'Activité)</li>
            <li>• Intitulé et durée de la formation</li>
            <li>• Période de réalisation</li>
            <li>• Nombre de stagiaires (si applicable)</li>
            <li>• Lieu de formation</li>
            <li>• Mention TVA (exonération ou franchise selon votre cas)</li>
          </ul>
        </div>
      </ArticleSection>

      <SectionAnchor id="faq" />
      <ArticleSection title="❓ FAQ Formateur et Facturation 2026">
        <FAQ>
          <FAQItem question="Je suis formateur sans Qualiopi, suis-je concerné par l'e-invoicing ?">
            Oui. La certification Qualiopi n'a aucun lien avec la facturation électronique. 
            Si vous facturez des entreprises ou des organismes (la plupart des cas), 
            vous devez utiliser l'e-invoicing.
          </FAQItem>

          <FAQItem question="Mon client utilise son CPF. Qui dois-je facturer ?">
            Vous facturez la Caisse des Dépôts (ou l'organisme gestionnaire CPF). 
            C'est du B2B : facture électronique obligatoire.
          </FAQItem>

          <FAQItem question="Je travaille uniquement en sous-traitance pour des OF. Concerné ?">
            Absolument. Vous facturez les organismes de formation, qui sont des professionnels. 
            Facture électronique obligatoire pour chaque intervention.
          </FAQItem>

          <FAQItem question="Je donne aussi des cours de guitare à des particuliers. Même règle ?">
            Non ! Les cours de musique à des particuliers (loisir, non professionnel) sont du B2C. 
            Pas d'e-invoicing, juste l'e-reporting de vos encaissements.
          </FAQItem>

          <FAQItem question="L'OPCO me paie directement. Qui est mon client ?">
            Juridiquement, l'entreprise cliente signe la convention, mais l'OPCO paie directement. 
            Vous facturez l'entité qui vous règle. Dans les deux cas, c'est du B2B : e-invoicing obligatoire.
          </FAQItem>

          <FAQItem question="Je suis exonéré de TVA sur mes formations. Impact sur l'e-invoicing ?">
            Aucun. L'exonération TVA est une question fiscale distincte. Vos factures devront 
            quand même être au format électronique pour les clients professionnels.
          </FAQItem>

          <FAQItem question="Je crée des modules e-learning vendus en ligne. Concerné ?">
            Ça dépend de l'acheteur : entreprise qui achète des licences = B2B = e-invoicing. 
            Particulier qui achète pour lui-même = B2C = e-reporting simple.
          </FAQItem>
        </FAQ>
      </ArticleSection>

      <ArticleSection title="En résumé">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">⚠️</span>
              <span><strong>Les formateurs sont très concernés</strong> : 80-95% du CA généralement en B2B</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">🏢</span>
              <span>OF, OPCO, entreprises, CPF = tous des clients <strong>professionnels</strong> = e-invoicing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">🏆</span>
              <span><strong>Qualiopi ≠ facturation</strong> : la certification n'affecte pas vos obligations fiscales</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">📝</span>
              <span>L'<strong>exonération TVA</strong> ne dispense pas de l'e-invoicing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl">⏰</span>
              <span>Anticipez : <strong>septembre 2026</strong> approche vite</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-card border rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Simplifiez votre facturation avec FacturSimple</h3>
          <p className="text-muted-foreground mb-4">
            Conçu pour les auto-entrepreneurs formateurs. E-invoicing, mentions NDA, exonération TVA — tout est géré.
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
