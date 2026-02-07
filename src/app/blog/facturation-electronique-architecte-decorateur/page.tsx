import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Building2,
  Users,
  FileText,
  Euro,
  HelpCircle,
  Home,
  Ruler,
  Palette,
  PenTool
} from "lucide-react";

export const metadata: Metadata = {
  title: "Facturation électronique architecte & décorateur 2026 : Guide complet | FacturSimple",
  description:
    "Architectes DPLG, architectes d'intérieur, décorateurs : êtes-vous concernés par la facturation électronique obligatoire 2026 ? Guide complet selon votre clientèle.",
  keywords: [
    "facturation électronique architecte",
    "architecte auto-entrepreneur",
    "architecte intérieur facturation",
    "décorateur freelance facture électronique",
    "architecte 2026 e-invoicing",
    "honoraires architecte facturation",
    "DPLG facturation électronique"
  ],
};

export default function FacturationElectroniqueArchitectePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-70" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              <Ruler className="w-3 h-3 mr-1" />
              Architecture & Décoration
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Architecte & Décorateur :{" "}
              <span className="text-blue-600">
                Facturation Électronique 2026
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Architecte DPLG/HMONP, architecte d'intérieur, décorateur ou designer : 
              vos obligations dépendent de votre type de clientèle. Guide complet 
              pour les professionnels de la conception.
            </p>

            {/* Key Alert */}
            <Card className="bg-amber-50 border-amber-200 max-w-2xl mx-auto mb-8">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <p className="font-semibold text-amber-800">
                      Ça dépend de votre clientèle
                    </p>
                    <p className="text-amber-700 text-sm mt-1">
                      Maisons individuelles pour particuliers → pas concerné. 
                      Promoteurs, entreprises, copropriétés → concerné dès septembre 2026.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link href="/inscription">
                  Essayer FacturSimple gratuitement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link href="/outils/diagnostic-2026">Faire le diagnostic</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Êtes-vous concerné ? Ça dépend de vos clients
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* NOT Concerned */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <CheckCircle2 className="h-5 w-5" />
                    PAS concerné
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-green-900">
                  <p className="font-medium mb-3">
                    Vos factures à des particuliers :
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Home className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Maison individuelle (construction, extension, rénovation)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Palette className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Décoration d'appartement pour un particulier</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PenTool className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Conseil en aménagement intérieur pour famille</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Ruler className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Plans de permis de construire pour particulier</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-sm">
                      <strong>Pourquoi ?</strong> Les factures B2C (à des particuliers 
                      non-professionnels) ne sont pas soumises à la facturation électronique.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Concerned */}
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-800">
                    <AlertTriangle className="h-5 w-5" />
                    CONCERNÉ
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-amber-900">
                  <p className="font-medium mb-3">
                    Vos factures à des professionnels :
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Building2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Promoteurs immobiliers et constructeurs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Building2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Entreprises (bureaux, locaux commerciaux)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Syndics de copropriété</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Building2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Hôtels, restaurants, commerces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Agences d'architecture (sous-traitance)</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-amber-100 rounded-lg">
                    <p className="text-sm">
                      <strong>Pourquoi ?</strong> Toute facture à une entreprise 
                      française (B2B) devra passer par une plateforme certifiée.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Summary */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Ruler className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900 text-lg mb-2">
                      En résumé pour les architectes et décorateurs
                    </p>
                    <p className="text-blue-800">
                      <strong>Architectes DPLG/HMONP :</strong> Souvent 50%+ B2B (promoteurs, 
                      entreprises) → généralement <strong>concernés</strong>.<br />
                      <strong>Architectes d'intérieur particuliers :</strong> Si 90%+ de 
                      clients sont des particuliers → <strong>peu impactés</strong>.<br />
                      <strong>Décorateurs/designers boutique/hôtel :</strong> Clientèle 
                      pro B2B → <strong>concernés</strong>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cas Pratiques */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Cas pratiques pour votre activité
            </h2>

            <div className="space-y-6">
              {/* Cas 1: Architecte maisons individuelles */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-green-600" />
                    Architecte spécialisé maisons individuelles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-600 mb-3">
                        <strong>Profil :</strong> Vous concevez des maisons 
                        individuelles, extensions et rénovations pour des familles.
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Clients typiques :</strong> Couples, familles, 
                        particuliers souhaitant construire ou rénover.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800 mb-2">
                        ✓ PAS concerné
                      </p>
                      <p className="text-sm text-green-700">
                        100% de vos factures vont à des particuliers. Vous n'êtes 
                        pas impacté par la réforme. Vos factures classiques restent valides.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cas 2: Architecte promoteurs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-amber-600" />
                    Architecte travaillant avec promoteurs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-600 mb-3">
                        <strong>Profil :</strong> Vous concevez des immeubles 
                        résidentiels, bureaux ou locaux commerciaux pour des 
                        promoteurs immobiliers.
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Clients typiques :</strong> Bouygues Immobilier, 
                        Nexity, promoteurs locaux, foncières.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800 mb-2">
                        ⚠ CONCERNÉ
                      </p>
                      <p className="text-sm text-amber-700">
                        Tous vos clients sont des entreprises (B2B). Toutes vos 
                        factures devront être électroniques dès septembre 2026.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cas 3: Architecte mixte */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Ruler className="h-5 w-5 text-blue-600" />
                    Architecte clientèle mixte
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-600 mb-3">
                        <strong>Profil :</strong> Vous faites des maisons pour 
                        particuliers ET des projets pour entreprises ou copropriétés.
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Exemple :</strong> 60% maisons individuelles + 
                        30% syndics copro + 10% commerces.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-800 mb-2">
                        ◐ PARTIELLEMENT concerné
                      </p>
                      <p className="text-sm text-blue-700">
                        Seules vos factures B2B (syndics, entreprises) doivent 
                        être électroniques. Les factures aux particuliers restent classiques.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cas 4: Décorateur particuliers */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5 text-green-600" />
                    Décorateur d'intérieur pour particuliers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-600 mb-3">
                        <strong>Profil :</strong> Vous aidez des familles à 
                        aménager leurs appartements et maisons.
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Services :</strong> Conseil déco, shopping déco, 
                        coaching couleurs, home staging vente.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800 mb-2">
                        ✓ PAS concerné
                      </p>
                      <p className="text-sm text-green-700">
                        Vos clients sont des particuliers. Même le home staging 
                        pour une vente immobilière : si le vendeur est un particulier, 
                        pas de facture électronique.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cas 5: Décorateur hôtels/commerces */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-amber-600" />
                    Architecte d'intérieur hôtels & commerces
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-600 mb-3">
                        <strong>Profil :</strong> Vous concevez des espaces 
                        commerciaux : hôtels, restaurants, boutiques, bureaux.
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Clients :</strong> Chaînes hôtelières, restaurateurs, 
                        enseignes retail, entreprises.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800 mb-2">
                        ⚠ CONCERNÉ
                      </p>
                      <p className="text-sm text-amber-700">
                        Tous vos clients sont des professionnels. Vous devez 
                        vous équiper d'un outil de facturation électronique.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cas 6: Sous-traitance agence */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-amber-600" />
                    Sous-traitance pour une agence d'architecture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-600 mb-3">
                        <strong>Profil :</strong> Vous travaillez comme 
                        collaborateur externe ou sous-traitant pour une agence.
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Situation :</strong> L'agence facture le client 
                        final, vous facturez l'agence.
                      </p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="font-semibold text-amber-800 mb-2">
                        ⚠ CONCERNÉ
                      </p>
                      <p className="text-sm text-amber-700">
                        Votre client est une entreprise (l'agence). Vos factures 
                        de sous-traitance doivent être électroniques.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Specificités métier */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Spécificités pour architectes et décorateurs
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Euro className="h-5 w-5 text-blue-600" />
                    Honoraires et phases de projet
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  <p className="mb-3">
                    Les architectes facturent souvent par <strong>phases</strong> (esquisse, 
                    APS, APD, PRO, DCE, DET...). Chaque facture de phase suit 
                    la même règle :
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Client particulier = facture classique</li>
                    <li>Client entreprise = facture électronique</li>
                  </ul>
                  <p className="mt-3 text-slate-500">
                    Pensez à adapter vos contrats pour 2026 si vos clients 
                    sont des entreprises.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Marchés publics (déjà concernés)
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  <p className="mb-3">
                    Si vous travaillez pour des <strong>collectivités</strong> (mairies, 
                    régions, hôpitaux...), vous utilisez déjà <strong>Chorus Pro</strong> 
                    depuis 2020.
                  </p>
                  <p>
                    La réforme 2026 étend cette obligation aux clients <strong>privés</strong>. 
                    Si vous maîtrisez déjà Chorus Pro, la transition sera plus simple.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    Copropriétés et syndics
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  <p className="mb-3">
                    Une copropriété qui vous commande un audit énergétique ou 
                    un ravalement : <strong>attention au payeur !</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Syndic professionnel</strong> (Foncia, Nexity...) = B2B → concerné</li>
                    <li><strong>Syndic bénévole</strong> (copropriétaire) = peut être B2C</li>
                  </ul>
                  <p className="mt-3 text-slate-500">
                    En pratique, la plupart des syndics sont professionnels → 
                    facture électronique requise.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-blue-600" />
                    Ordre des Architectes
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  <p className="mb-3">
                    Votre cotisation à l'Ordre n'est pas une facture que vous 
                    émettez. Les obligations concernent vos <strong>factures sortantes</strong>.
                  </p>
                  <p>
                    L'Ordre communique régulièrement sur la réforme — consultez 
                    architectes.org pour les dernières infos officielles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Calendrier pour votre activité
            </h2>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2" />

              <div className="space-y-8">
                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <div className="font-bold text-blue-600">Maintenant → Août 2026</div>
                    <p className="text-slate-600">
                      Analysez votre clientèle. Si vous avez des clients entreprises, 
                      choisissez votre solution de facturation électronique.
                    </p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform md:-translate-x-1/2 -translate-y-1/2 top-4 md:top-1/2" />
                  <div className="md:w-1/2 md:pl-8 pl-10">
                    <Badge>Préparation</Badge>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right order-1 md:order-1 mb-4 md:mb-0 pl-10 md:pl-0">
                    <Badge variant="secondary">Réception obligatoire</Badge>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-amber-500 rounded-full transform md:-translate-x-1/2 -translate-y-1/2 top-4 md:top-1/2" />
                  <div className="md:w-1/2 md:pl-8 order-2 md:order-2">
                    <div className="font-bold text-amber-600">1er septembre 2026</div>
                    <p className="text-slate-600">
                      Toutes les entreprises doivent pouvoir RECEVOIR des factures 
                      électroniques. Vos clients vous enverront peut-être leurs 
                      factures par ce biais.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <div className="font-bold text-red-600">1er septembre 2026</div>
                    <p className="text-slate-600">
                      <strong>Auto-entrepreneurs et micro-entreprises</strong> : 
                      obligation d'ÉMETTRE vos factures B2B au format électronique.
                    </p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-red-500 rounded-full transform md:-translate-x-1/2 -translate-y-1/2 top-4 md:top-1/2" />
                  <div className="md:w-1/2 md:pl-8 pl-10">
                    <Badge variant="destructive">Émission obligatoire</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Questions fréquentes des architectes
            </h2>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-blue-600" />
                    Je suis architecte HMONP mais je ne facture que des particuliers. Suis-je concerné ?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  Non. Si 100% de vos clients sont des particuliers (maisons 
                  individuelles, extensions, rénovations personnelles), vous 
                  n'êtes pas concerné par la réforme e-invoicing. Le titre 
                  HMONP n'y change rien — c'est le statut de vos clients qui compte.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-blue-600" />
                    Je suis en société (SARL/SAS), pas auto-entrepreneur. Ça change quelque chose ?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  Pour la réforme 2026, toutes les entreprises françaises sont 
                  concernées, quelle que soit leur forme juridique. La différence 
                  est que les micro-entrepreneurs bénéficient parfois de 
                  simplifications. Mais l'obligation B2B s'applique à tous.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-blue-600" />
                    Mon client est une SCI familiale. Est-ce du B2B ?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  <strong>Oui.</strong> Une SCI est une société — donc une personne 
                  morale. Même si elle appartient à une famille, votre facture 
                  à la SCI est du B2B. Elle devra être électronique.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-blue-600" />
                    Je suis décorateur, je vends aussi du mobilier. Les ventes sont-elles concernées ?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  Si vous vendez du mobilier à un <strong>particulier</strong>, 
                  c'est du B2C → pas concerné. Si vous vendez à une 
                  <strong>entreprise</strong> (aménagement de bureaux par exemple), 
                  c'est du B2B → facture électronique obligatoire.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-blue-600" />
                    Je travaille pour des clients étrangers (Suisse, Belgique, Monaco). Concerné ?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  <strong>Non pour l'émission.</strong> La facturation électronique 
                  française ne concerne que les transactions avec des entreprises 
                  établies en France. Vos clients suisses, belges ou monégasques 
                  ne sont pas concernés par cette réforme.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-blue-600" />
                    Je dois envoyer des notes d'honoraires avec des acomptes. Comment ça marche ?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  Les factures d'acompte suivent les mêmes règles que les factures 
                  finales. Si votre client est une entreprise, chaque facture 
                  d'acompte devra être émise au format électronique. Un bon 
                  logiciel de facturation gère cela automatiquement.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-blue-600" />
                    Je travaille en groupement momentané avec d'autres architectes. Qui facture ?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">
                  Dans un groupement, chaque membre facture sa part au client 
                  (ou au mandataire qui refacture). Si le mandataire est une 
                  entreprise, vos factures à son égard sont du B2B → concernées. 
                  Vérifiez votre convention de groupement.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Préparez votre cabinet pour 2026
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              FacturSimple est conçu pour les indépendants : simple, conforme 
              et abordable. Créez vos factures électroniques en quelques clics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg" asChild>
                <Link href="/inscription">
                  Créer mon compte gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/fonctionnalites">Voir les fonctionnalités</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
