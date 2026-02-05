import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Check, X, AlertCircle, Euro, Users, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Alternative Pennylane Pas Cher 2026 : Comparatif pour Auto-Entrepreneurs | FacturSimple',
  description: 'Pennylane à 99€/mois ? Découvrez les alternatives moins chères pour les auto-entrepreneurs. Comparatif complet : Tiime, Henrri, Freebe, FacturSimple. Conforme 2026.',
  keywords: 'alternative pennylane, pennylane pas cher, logiciel facturation pas cher, facturation auto-entrepreneur gratuit, pennylane prix, tiime vs pennylane',
  openGraph: {
    title: 'Alternative Pennylane Pas Cher 2026 : Comparatif pour Auto-Entrepreneurs',
    description: 'Pennylane à 99€/mois ? Découvrez les alternatives moins chères pour les auto-entrepreneurs.',
    type: 'article',
  },
};

export default function AlternativePennylanePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au blog
          </Link>
          <Badge className="bg-white/20 text-white mb-4">Comparatif</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Alternative Pennylane Pas Cher 2026
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            99€/mois pour de la facturation ? Vous pouvez faire mieux. Comparatif des solutions 
            adaptées aux auto-entrepreneurs.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-blue-100">
            <span>📅 Mis à jour : Février 2026</span>
            <span>⏱️ 10 min de lecture</span>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-muted-foreground mb-6">
            Vous avez entendu parler de Pennylane, le logiciel de comptabilité "nouvelle génération". 
            Mais quand vous avez vu le prix — <strong>99€/mois minimum</strong> — vous vous êtes dit : 
            "Il doit y avoir autre chose."
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Et vous avez raison. Avec la <Link href="/blog/reforme-facturation-2026" className="text-blue-600 hover:underline">
            réforme de facturation électronique 2026</Link>, tous les auto-entrepreneurs devront 
            être équipés. Mais pas nécessairement avec la solution la plus chère du marché.
          </p>

          <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-amber-900 dark:text-amber-100">Le calcul qui fait mal</p>
                  <p className="text-amber-800 dark:text-amber-200 mt-1">
                    Un auto-entrepreneur gagne en moyenne 30 000€/an. 99€/mois = 1 188€/an, 
                    soit <strong>4% de son chiffre d'affaires</strong> juste pour la facturation. 
                    C'est énorme.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Pennylane is expensive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            💰 Pourquoi Pennylane coûte si cher ?
          </h2>
          <p className="text-muted-foreground mb-4">
            Soyons clairs : Pennylane n'est pas un mauvais produit. C'est juste un produit 
            qui n'est <strong>pas fait pour vous</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ce que Pennylane offre</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Comptabilité complète (bilan, compte de résultat)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Collaboration expert-comptable</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Synchronisation bancaire</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Gestion multi-sociétés</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ce dont vous avez besoin</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600" />
                  <span>Créer des factures conformes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600" />
                  <span>Format Factur-X (obligatoire 2026)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600" />
                  <span>Envoyer à vos clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-600" />
                  <span>E-reporting automatique</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-muted-foreground">
            En tant qu'auto-entrepreneur, vous avez une <strong>comptabilité simplifiée</strong>. 
            Pas de bilan, pas de TVA (pour la plupart), pas besoin d'expert-comptable. 
            Vous payez pour des fonctionnalités dont vous n'avez pas besoin.
          </p>
        </section>

        {/* Comparison table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            📊 Comparatif des alternatives (Février 2026)
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="text-left p-4 font-semibold">Solution</th>
                  <th className="text-center p-4 font-semibold">Prix/mois</th>
                  <th className="text-center p-4 font-semibold">Factur-X</th>
                  <th className="text-center p-4 font-semibold">E-reporting</th>
                  <th className="text-center p-4 font-semibold">Pour qui ?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Pennylane</td>
                  <td className="p-4 text-center text-red-600 font-semibold">99€</td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center text-sm">PME, comptables</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Tiime</td>
                  <td className="p-4 text-center text-orange-600 font-semibold">49€</td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center text-sm">Indépendants, TPE</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Henrri</td>
                  <td className="p-4 text-center text-green-600 font-semibold">Gratuit*</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-red-600 mx-auto" /></td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-red-600 mx-auto" /></td>
                  <td className="p-4 text-center text-sm">Très petits volumes</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Freebe</td>
                  <td className="p-4 text-center text-orange-600 font-semibold">29€</td>
                  <td className="p-4 text-center"><AlertCircle className="h-5 w-5 text-yellow-600 mx-auto" /></td>
                  <td className="p-4 text-center"><AlertCircle className="h-5 w-5 text-yellow-600 mx-auto" /></td>
                  <td className="p-4 text-center text-sm">Freelances</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Indy</td>
                  <td className="p-4 text-center text-green-600 font-semibold">Gratuit*</td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><AlertCircle className="h-5 w-5 text-yellow-600 mx-auto" /></td>
                  <td className="p-4 text-center text-sm">Auto-entrepreneurs</td>
                </tr>
                <tr className="border-b bg-blue-50 dark:bg-blue-950/30">
                  <td className="p-4 font-bold text-blue-600">FacturSimple</td>
                  <td className="p-4 text-center text-green-600 font-bold">9€</td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                  <td className="p-4 text-center text-sm">Auto-entrepreneurs</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            * Les offres "gratuites" ont souvent des limites (nombre de factures, fonctionnalités) 
            ou ne sont pas conformes à la réforme 2026.
          </p>
        </section>

        {/* Analysis of each alternative */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            🔍 Analyse détaillée des alternatives
          </h2>

          <div className="space-y-8">
            {/* Tiime */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Tiime</CardTitle>
                  <Badge variant="secondary">49€/mois</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-green-600 mb-2">✅ Points forts</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Interface moderne et intuitive</li>
                      <li>• Conforme Factur-X et 2026</li>
                      <li>• Bon support client</li>
                      <li>• Synchronisation bancaire</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-red-600 mb-2">❌ Points faibles</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Reste cher pour un micro-entrepreneur</li>
                      <li>• Fonctionnalités avancées inutiles</li>
                      <li>• Engagement annuel souvent requis</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  <strong>Verdict :</strong> Bonne option si vous êtes prêt à investir 50€/mois 
                  et que vous voulez des fonctionnalités avancées. Mais beaucoup d'auto-entrepreneurs 
                  n'ont pas besoin de tout ça.
                </p>
              </CardContent>
            </Card>

            {/* Henrri */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Henrri (par Rivalis)</CardTitle>
                  <Badge variant="secondary">Gratuit</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-green-600 mb-2">✅ Points forts</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Vraiment gratuit</li>
                      <li>• Simple d'utilisation</li>
                      <li>• Factures PDF propres</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-red-600 mb-2">❌ Points faibles</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• PAS de Factur-X</li>
                      <li>• PAS conforme 2026</li>
                      <li>• Fonctionnalités très limitées</li>
                      <li>• Devra changer en septembre 2026</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  <strong>Verdict :</strong> OK pour dépanner aujourd'hui, mais vous devrez 
                  changer de solution avant septembre 2026. Pas de conformité Factur-X = 
                  pas adapté à la réforme.
                </p>
              </CardContent>
            </Card>

            {/* Freebe */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Freebe</CardTitle>
                  <Badge variant="secondary">29€/mois</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-green-600 mb-2">✅ Points forts</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Conçu pour les freelances</li>
                      <li>• Gestion complète (devis, factures, charges)</li>
                      <li>• Bonne communauté</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-red-600 mb-2">❌ Points faibles</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Conformité 2026 en cours</li>
                      <li>• 29€/mois reste élevé</li>
                      <li>• Focus gestion, pas facturation pure</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  <strong>Verdict :</strong> Bon outil complet mais plus orienté "gestion freelance" 
                  que pure facturation. Vérifiez leur conformité 2026 avant de vous engager.
                </p>
              </CardContent>
            </Card>

            {/* Indy */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Indy (ex Georges.tech)</CardTitle>
                  <Badge variant="secondary">Gratuit*</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-green-600 mb-2">✅ Points forts</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Gratuit pour les auto-entrepreneurs</li>
                      <li>• Interface très simple</li>
                      <li>• Génère des Factur-X</li>
                      <li>• Déclarations URSSAF intégrées</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-red-600 mb-2">❌ Points faibles</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Modèle économique flou (jusqu'à quand gratuit ?)</li>
                      <li>• E-reporting non garanti</li>
                      <li>• Dépendance à un outil gratuit</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  <strong>Verdict :</strong> Excellente option gratuite pour l'instant. Mais méfiez-vous : 
                  quand un produit est gratuit, vous êtes le produit. Que se passera-t-il si Indy 
                  devient payant en 2027 ?
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FacturSimple pitch */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            🎯 Et FacturSimple dans tout ça ?
          </h2>
          
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <p className="text-lg mb-6">
                On a créé FacturSimple pour combler le vide entre les solutions gratuites 
                (limitées ou non conformes) et les solutions pro à 50-100€/mois.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Euro className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold">9-19€/mois</p>
                    <p className="text-sm text-muted-foreground">90% moins cher que Pennylane</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold">Factur-X natif</p>
                    <p className="text-sm text-muted-foreground">Conforme réforme 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold">Pour auto-entrepreneurs</p>
                    <p className="text-sm text-muted-foreground">Pas de superflu</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/#waitlist">Rejoindre la liste d'attente</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/calculateur-economies">Calculer vos économies</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">❓ Questions fréquentes</h2>
          
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Puis-je rester sur une solution gratuite après 2026 ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seulement si elle est conforme à la réforme (Factur-X, e-reporting). 
                  Henrri ne l'est pas. Indy semble l'être mais vérifiez les conditions. 
                  Les solutions gratuites ont tendance à devenir payantes une fois que 
                  vous êtes dépendant.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Pennylane vaut-il vraiment 99€/mois ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pour une PME avec expert-comptable, plusieurs employés, et besoins 
                  comptables complexes : oui. Pour un auto-entrepreneur qui fait 
                  5-10 factures/mois : non. C'est comme acheter un camion pour 
                  aller au supermarché.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Combien de temps ai-je pour me mettre en conformité ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  La date butoir est le <strong>1er septembre 2026</strong> pour la réception 
                  des factures électroniques. L'émission obligatoire arrive en 2027. 
                  Utilisez notre <Link href="/checklist-conformite" className="text-blue-600 hover:underline">
                  checklist de conformité</Link> pour voir où vous en êtes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">📝 En résumé</h2>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Pennylane</strong> est trop cher pour les auto-entrepreneurs (99€/mois)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Les solutions gratuites</strong> (Henrri) ne seront pas conformes 2026</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Tiime/Freebe</strong> sont corrects mais restent chers (29-49€/mois)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Indy</strong> est gratuit mais son modèle long-terme est incertain</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>FacturSimple</strong> propose l'essentiel à 9€/mois, conforme 2026</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-blue-600 text-white p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">
            Prêt pour septembre 2026 ?
          </h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">
            Rejoignez +500 auto-entrepreneurs qui se préparent sereinement à la réforme.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/#waitlist">Rejoindre la liste d'attente</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/checklist-conformite">Vérifier ma conformité</Link>
            </Button>
          </div>
        </section>
      </article>
    </main>
  );
}
