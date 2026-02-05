'use client';

import { ArticleLayout } from '../_components/article-layout';
import { ArticleSchema } from '../_components/article-schema';
import Link from 'next/link';

export default function CGVAutoEntrepreneurPage() {
  const publishedDate = '2026-02-05';

  return (
    <>
      <ArticleSchema
        title="CGV Auto-Entrepreneur : Guide Complet 2026"
        description="Tout savoir sur les Conditions Générales de Vente (CGV) pour les auto-entrepreneurs en 2026. Obligations légales, mentions obligatoires et modèle gratuit."
        datePublished={publishedDate}
        dateModified={publishedDate}
        slug="cgv-auto-entrepreneur"
        readingTime={8}
        category="Guide Pratique"
      />

      <ArticleLayout
        title="CGV Auto-Entrepreneur : Guide Complet 2026"
        excerpt="Vos CGV sont-elles conformes ? Découvrez les mentions obligatoires et générez vos conditions en quelques clics."
        date={publishedDate}
        readTime="8 min"
        category="Guide Pratique"
      >
        <p className="lead">
          En tant qu'auto-entrepreneur, vous vous demandez si les <strong>Conditions Générales de Vente (CGV)</strong> sont obligatoires pour votre activité ? 
          La réponse dépend de votre clientèle. Ce guide vous explique tout ce que vous devez savoir en 2026, 
          avec les mentions légales à inclure et un générateur gratuit.
        </p>

        <div className="my-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
          <p className="font-semibold text-lg mb-2">🛠️ Outil gratuit disponible</p>
          <p className="text-muted-foreground mb-4">
            Générez vos CGV conformes en 2 minutes avec notre générateur gratuit.
          </p>
          <Link
            href="/generateur-cgv"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Générer mes CGV →
          </Link>
        </div>

        <h2>Qu'est-ce que les CGV ?</h2>
        
        <p>
          Les <strong>Conditions Générales de Vente</strong> sont un document contractuel qui définit les règles 
          applicables à vos ventes de produits ou prestations de services. Elles encadrent :
        </p>

        <ul>
          <li>Les modalités de commande et de paiement</li>
          <li>Les délais de livraison ou d'exécution</li>
          <li>Les conditions de retour ou d'annulation</li>
          <li>Les pénalités en cas de retard de paiement</li>
          <li>Les garanties et responsabilités</li>
        </ul>

        <h2>Les CGV sont-elles obligatoires en auto-entreprise ?</h2>

        <p>
          La réponse est nuancée et dépend de votre type de clientèle :
        </p>

        <h3>Vente aux professionnels (B2B)</h3>
        
        <p>
          <strong>Oui, les CGV sont obligatoires</strong> pour les ventes entre professionnels. 
          L'article L441-1 du Code de commerce impose de communiquer vos CGV à tout acheteur professionnel qui en fait la demande.
        </p>

        <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg my-4">
          <p className="font-medium text-amber-800 dark:text-amber-200">⚠️ Attention</p>
          <p className="text-amber-700 dark:text-amber-300 text-sm mt-1">
            Ne pas fournir vos CGV à un professionnel qui les demande vous expose à une amende pouvant aller jusqu'à 15 000 € 
            pour une personne physique.
          </p>
        </div>

        <h3>Vente aux particuliers (B2C)</h3>
        
        <p>
          Les CGV ne sont <strong>pas obligatoires</strong> mais fortement recommandées. 
          En revanche, vous avez l'obligation de fournir certaines informations précontractuelles 
          (caractéristiques du produit/service, prix, délais, droit de rétractation...).
        </p>

        <h2>Les mentions obligatoires dans vos CGV</h2>

        <p>
          Voici les éléments qui doivent figurer dans vos Conditions Générales de Vente :
        </p>

        <h3>1. Identification du vendeur</h3>
        <ul>
          <li>Nom et prénom (ou raison sociale)</li>
          <li>Adresse du siège/domiciliation</li>
          <li>Numéro SIRET</li>
          <li>Contact (email, téléphone)</li>
          <li>Mention « Dispensé d'immatriculation au RCS » si applicable</li>
        </ul>

        <h3>2. Conditions de vente</h3>
        <ul>
          <li>Barème des prix unitaires</li>
          <li>Réductions de prix (remises, rabais)</li>
          <li>Conditions de paiement</li>
          <li>Délais de paiement (max 60 jours ou 45 jours fin de mois)</li>
        </ul>

        <h3>3. Pénalités de retard</h3>
        
        <p>
          En cas de retard de paiement, vous devez prévoir des pénalités. 
          Le taux minimum légal est de <strong>3 fois le taux d'intérêt légal</strong> (environ 12,47% en 2026), 
          mais vous pouvez appliquer un taux supérieur.
        </p>

        <p>
          Vous devez également mentionner l'<strong>indemnité forfaitaire de 40 €</strong> pour frais de recouvrement, 
          obligatoire pour les transactions B2B.
        </p>

        <h3>4. Livraison et exécution</h3>
        <ul>
          <li>Délais de livraison ou d'exécution</li>
          <li>Modalités de livraison</li>
          <li>Transfert des risques</li>
          <li>Clause de réserve de propriété (si applicable)</li>
        </ul>

        <h3>5. Droit de rétractation (vente à distance aux particuliers)</h3>
        
        <p>
          Si vous vendez à distance à des consommateurs, vous devez informer sur le 
          <strong>droit de rétractation de 14 jours</strong> et fournir un formulaire de rétractation.
        </p>

        <h3>6. Garanties</h3>
        <ul>
          <li>Garantie légale de conformité (2 ans)</li>
          <li>Garantie des vices cachés</li>
          <li>Garantie commerciale (si vous en proposez une)</li>
        </ul>

        <h3>7. Protection des données (RGPD)</h3>
        
        <p>
          Mentionnez comment vous collectez et traitez les données personnelles de vos clients, 
          conformément au Règlement Général sur la Protection des Données.
        </p>

        <h2>CGV et facturation électronique 2026</h2>

        <div className="p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg my-4">
          <p className="font-medium text-blue-800 dark:text-blue-200">📋 Nouvelle obligation 2026</p>
          <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">
            À partir du 1er septembre 2026, toutes les entreprises assujetties à la TVA devront pouvoir 
            recevoir des factures électroniques au format structuré (Factur-X, UBL, CII).
          </p>
        </div>

        <p>
          Si vous facturez des professionnels, vos CGV devraient mentionner vos modalités de facturation électronique :
        </p>

        <ul>
          <li>Format de facture accepté (Factur-X, PDF...)</li>
          <li>Plateforme de dématérialisation utilisée</li>
          <li>Délai de transmission des factures</li>
        </ul>

        <p>
          <Link href="/verification-conformite" className="text-primary hover:underline">
            → Vérifiez votre conformité à la réforme 2026
          </Link>
        </p>

        <h2>Modèle de CGV pour auto-entrepreneur</h2>

        <p>
          Nous avons créé un <strong>générateur de CGV gratuit</strong> qui vous permet de créer 
          vos Conditions Générales de Vente en quelques minutes. Il inclut :
        </p>

        <ul>
          <li>✅ Toutes les mentions légales obligatoires</li>
          <li>✅ Adaptation services / produits / mixte</li>
          <li>✅ Clauses de paiement et pénalités conformes</li>
          <li>✅ Droit de rétractation (vente à distance)</li>
          <li>✅ Clause RGPD</li>
          <li>✅ Export en format texte</li>
        </ul>

        <div className="my-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20 text-center">
          <p className="font-semibold text-xl mb-2">Générez vos CGV en 2 minutes</p>
          <p className="text-muted-foreground mb-4">
            Gratuit, sans inscription, conforme à la réglementation 2026.
          </p>
          <Link
            href="/generateur-cgv"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            Accéder au générateur →
          </Link>
        </div>

        <h2>Comment communiquer vos CGV ?</h2>

        <p>
          Pour que vos CGV soient opposables à vos clients, elles doivent être :
        </p>

        <ul>
          <li><strong>Accessibles</strong> - Sur votre site web, en pied de page ou dans une section dédiée</li>
          <li><strong>Communiquées avant la vente</strong> - Jointes aux devis ou disponibles sur demande</li>
          <li><strong>Acceptées par le client</strong> - Signature du devis mentionnant l'acceptation des CGV, ou case à cocher en ligne</li>
        </ul>

        <h3>Où afficher vos CGV ?</h3>

        <ul>
          <li>Page dédiée sur votre site internet</li>
          <li>Lien dans vos devis et factures</li>
          <li>Annexe à vos contrats de prestation</li>
          <li>Affichage dans votre local (si clientèle physique)</li>
        </ul>

        <h2>FAQ - Questions fréquentes sur les CGV</h2>

        <h3>Puis-je copier les CGV d'un concurrent ?</h3>
        
        <p>
          Non, c'est fortement déconseillé. Chaque activité a ses spécificités et les CGV doivent refléter 
          votre situation réelle. De plus, copier des CGV peut constituer une contrefaçon. 
          Utilisez plutôt <Link href="/generateur-cgv" className="text-primary hover:underline">notre générateur</Link> pour créer des CGV personnalisées.
        </p>

        <h3>Dois-je faire valider mes CGV par un avocat ?</h3>
        
        <p>
          Pour un auto-entrepreneur avec une activité simple, ce n'est pas obligatoire mais recommandé 
          si vous avez des prestations complexes ou des enjeux financiers importants.
        </p>

        <h3>Comment mettre à jour mes CGV ?</h3>
        
        <p>
          Vous pouvez modifier vos CGV à tout moment, mais les nouvelles conditions ne s'appliquent 
          qu'aux ventes futures. Informez vos clients réguliers des changements majeurs et 
          mettez à jour la date de dernière modification.
        </p>

        <h3>CGV et CGU, quelle différence ?</h3>
        
        <p>
          Les <strong>CGV</strong> encadrent les ventes de produits/services. 
          Les <strong>CGU</strong> (Conditions Générales d'Utilisation) régissent l'utilisation de votre site web ou application. 
          Ce sont deux documents distincts mais complémentaires.
        </p>

        <h2>Conclusion</h2>

        <p>
          Les CGV sont un document essentiel pour sécuriser votre activité d'auto-entrepreneur, 
          surtout si vous travaillez avec des professionnels. Elles clarifient les règles du jeu 
          et vous protègent en cas de litige.
        </p>

        <p>
          Avec la réforme de la facturation électronique 2026, c'est aussi le moment idéal pour 
          mettre à jour vos documents et vous assurer de votre conformité.
        </p>

        <div className="mt-8 p-6 bg-muted rounded-lg">
          <p className="font-semibold mb-2">📌 À retenir</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• CGV obligatoires pour les ventes B2B, recommandées pour B2C</li>
            <li>• Incluez les mentions sur les pénalités de retard et l'indemnité de 40 €</li>
            <li>• Informez sur le droit de rétractation pour les ventes à distance</li>
            <li>• Mettez à jour vos CGV avec les modalités de facturation électronique</li>
            <li>• Utilisez notre générateur gratuit pour créer des CGV conformes</li>
          </ul>
        </div>
      </ArticleLayout>
    </>
  );
}
