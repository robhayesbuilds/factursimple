import { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout } from '../_components/article-layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconAlertTriangle, IconBuildingHospital, IconReceipt, IconClock, IconCheck, IconX, IconHeartbeat, IconStethoscope, IconFileInvoice, IconArrowRight } from "@tabler/icons-react"

export const metadata: Metadata = {
  title: 'Facturation Électronique pour Infirmiers, Kinés et Professions de Santé (2026)',
  description: 'Guide complet de la facturation électronique pour les professions de santé libérales : infirmiers (IDEL), kinésithérapeutes, médecins, orthophonistes. Obligations 2026, CPAM et tiers payant.',
  keywords: ['facturation électronique infirmier', 'facturation IDEL 2026', 'kiné facturation électronique', 'profession santé auto-entrepreneur', 'CPAM facturation 2026', 'tiers payant facturation électronique'],
  openGraph: {
    title: 'Facturation Électronique pour Infirmiers, Kinés et Professions de Santé (2026)',
    description: 'Guide complet pour les professions de santé libérales face à la réforme de la facturation électronique.',
    type: 'article',
    publishedTime: '2026-02-06',
  },
}

export default function FacturationSantePage() {
  return (
    <ArticleLayout
      title="Facturation Électronique pour Infirmiers, Kinés et Professions de Santé (2026)"
      excerpt="Vous êtes infirmier libéral (IDEL), kinésithérapeute, orthophoniste ou médecin ? Ce guide vous explique comment la réforme de septembre 2026 s'applique à votre situation, avec les spécificités CPAM et tiers payant."
      date="2026-02-06"
      readTime="11 min"
      category="Guide Pratique"
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        
        {/* Introduction */}
        <p className="lead text-lg text-slate-600 dark:text-slate-300">
          Les professions de santé libérales ont une situation particulière face à la facturation électronique : 
          vous facturez à la fois des <strong>particuliers</strong> (patients), des <strong>organismes publics</strong> (CPAM, mutuelles) 
          et parfois des <strong>entreprises</strong> (médecine du travail, EHPAD). Chaque cas a ses propres règles. 
          Ce guide vous aide à y voir clair avant septembre 2026.
        </p>

        {/* Alert Box */}
        <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-900/50 dark:bg-amber-950/20 my-8">
          <CardContent className="flex gap-4 p-6">
            <IconAlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Attention : CPAM ≠ Facturation électronique</p>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                La télétransmission SESAM-Vitale vers la CPAM est un système <strong>distinct</strong> de la nouvelle réforme. 
                Vos feuilles de soins électroniques (FSE) ne sont pas concernées par cette réforme. 
                Ce qui change, ce sont les factures à vos <strong>autres clients</strong> (entreprises, dépassements d'honoraires, etc.).
              </p>
            </div>
          </CardContent>
        </Card>

        {/* TOC */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 dark:border-slate-700 dark:bg-slate-800/50 my-8">
          <h2 className="mt-0 mb-4 text-lg font-semibold">Sommaire</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 dark:text-slate-300">
            <li><a href="#professions-concernees" className="hover:text-primary">Quelles professions de santé sont concernées ?</a></li>
            <li><a href="#types-facturation" className="hover:text-primary">Vos 3 types de facturation</a></li>
            <li><a href="#calendrier-2026" className="hover:text-primary">Calendrier 2026-2027 pour les libéraux de santé</a></li>
            <li><a href="#cpam-tiers-payant" className="hover:text-primary">CPAM et tiers payant : qu'est-ce qui change ?</a></li>
            <li><a href="#factures-fournisseurs" className="hover:text-primary">Vos factures fournisseurs</a></li>
            <li><a href="#logiciel-sante" className="hover:text-primary">Quel logiciel choisir ?</a></li>
            <li><a href="#erreurs-eviter" className="hover:text-primary">5 erreurs à éviter</a></li>
            <li><a href="#checklist" className="hover:text-primary">Checklist de préparation</a></li>
            <li><a href="#faq" className="hover:text-primary">FAQ professions de santé</a></li>
          </ol>
        </div>

        {/* Section 1: Professions concernées */}
        <h2 id="professions-concernees" className="flex items-center gap-3 scroll-mt-24">
          <IconStethoscope className="h-7 w-7 text-primary" />
          Quelles professions de santé sont concernées ?
        </h2>

        <p>
          <strong>Toutes les professions de santé libérales</strong> établies en France et assujetties à la TVA 
          (même en franchise) sont concernées par la réforme :
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <IconHeartbeat className="h-5 w-5 text-primary" />
                Soins médicaux et paramédicaux
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 dark:text-slate-300">
              <ul className="list-disc list-inside space-y-1">
                <li>Médecins généralistes et spécialistes</li>
                <li>Infirmiers libéraux (IDEL)</li>
                <li>Kinésithérapeutes</li>
                <li>Orthophonistes</li>
                <li>Podologues / Pédicures</li>
                <li>Sages-femmes</li>
                <li>Ergothérapeutes</li>
                <li>Psychomotriciens</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <IconBuildingHospital className="h-5 w-5 text-primary" />
                Autres professions libérales de santé
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 dark:text-slate-300">
              <ul className="list-disc list-inside space-y-1">
                <li>Chirurgiens-dentistes</li>
                <li>Opticiens</li>
                <li>Pharmaciens (officines)</li>
                <li>Laboratoires d'analyses</li>
                <li>Diététiciens</li>
                <li>Psychologues</li>
                <li>Ostéopathes</li>
                <li>Sophrologues, naturopathes...</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg bg-blue-50 dark:bg-blue-950/30 p-4 my-6">
          <p className="text-sm text-blue-900 dark:text-blue-100 mb-0">
            <strong>💡 Bon à savoir :</strong> Les soins médicaux à la personne sont exonérés de TVA (art. 261-4-1° CGI), 
            mais vous restez "assujetti" au sens fiscal. La réforme s'applique donc à vous.
          </p>
        </div>

        {/* Section 2: Types de facturation */}
        <h2 id="types-facturation" className="flex items-center gap-3 scroll-mt-24">
          <IconReceipt className="h-7 w-7 text-primary" />
          Vos 3 types de facturation
        </h2>

        <p>
          En tant que professionnel de santé libéral, vous avez généralement <strong>3 types de flux</strong> :
        </p>

        <div className="space-y-4 my-6">
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-4">
              <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">
                1. Télétransmission SESAM-Vitale (FSE)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                Vos feuilles de soins électroniques envoyées à la CPAM via votre logiciel métier (Visiodent, Doctolib Pro, etc.).
              </p>
              <div className="flex items-center gap-2 text-sm">
                <IconCheck className="h-4 w-4 text-green-600" />
                <span className="text-green-700 dark:text-green-400 font-medium">Pas concerné par la réforme 2026</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardContent className="p-4">
              <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">
                2. Factures aux particuliers (B2C)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                Dépassements d'honoraires, actes non remboursés, esthétique, etc. facturés directement aux patients.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <IconArrowRight className="h-4 w-4 text-amber-600" />
                <span className="text-amber-700 dark:text-amber-400 font-medium">E-reporting obligatoire (données transmises à l'admin)</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardContent className="p-4">
              <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                3. Factures aux entreprises (B2B)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                Médecine du travail, interventions en EHPAD/maisons de retraite, formations, expertises médicales, etc.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <IconArrowRight className="h-4 w-4 text-red-600" />
                <span className="text-red-700 dark:text-red-400 font-medium">E-invoicing obligatoire (format Factur-X)</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section 3: Calendrier */}
        <h2 id="calendrier-2026" className="flex items-center gap-3 scroll-mt-24">
          <IconClock className="h-7 w-7 text-primary" />
          Calendrier 2026-2027 pour les libéraux de santé
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Obligation</th>
                <th className="text-left py-3 px-4">Ce que ça signifie</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium text-red-600">1er sept. 2026</td>
                <td className="py-3 px-4">Réception obligatoire</td>
                <td className="py-3 px-4">Vous devez pouvoir recevoir les factures de vos fournisseurs au format électronique</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium text-amber-600">1er sept. 2027</td>
                <td className="py-3 px-4">Émission obligatoire</td>
                <td className="py-3 px-4">Vous devez émettre vos factures B2B au format électronique + e-reporting B2C</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-4 my-6">
          <p className="text-sm mb-0">
            <strong>En résumé :</strong> D'ici septembre 2026, vous devez être équipé d'un logiciel capable de 
            <strong>recevoir</strong> des factures électroniques. D'ici septembre 2027, vous devez pouvoir en <strong>émettre</strong>.
          </p>
        </div>

        {/* Section 4: CPAM et tiers payant */}
        <h2 id="cpam-tiers-payant" className="flex items-center gap-3 scroll-mt-24">
          <IconBuildingHospital className="h-7 w-7 text-primary" />
          CPAM et tiers payant : qu'est-ce qui change ?
        </h2>

        <p>
          C'est LA question que se posent tous les professionnels de santé. Voici la réponse claire :
        </p>

        <Card className="border-green-200 bg-green-50/50 dark:border-green-900/50 dark:bg-green-950/20 my-6">
          <CardContent className="p-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">
              ✅ Ce qui NE change PAS
            </h4>
            <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
              <li className="flex items-start gap-2">
                <IconCheck className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>La télétransmission SESAM-Vitale continue normalement</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Vos feuilles de soins électroniques (FSE) restent identiques</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Le tiers payant avec les caisses et mutuelles continue comme avant</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Votre logiciel métier actuel (Doctolib, Visiodent, etc.) gère déjà ce flux</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-900/50 dark:bg-amber-950/20 my-6">
          <CardContent className="p-6">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">
              ⚠️ Ce qui CHANGE
            </h4>
            <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
              <li className="flex items-start gap-2">
                <IconArrowRight className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>Les factures à vos <strong>fournisseurs professionnels</strong> (matériel médical, pharmacie, maintenance) devront être reçues en format électronique</span>
              </li>
              <li className="flex items-start gap-2">
                <IconArrowRight className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>Les factures aux <strong>entreprises</strong> (médecine du travail, EHPAD, expertises) devront être émises en format électronique</span>
              </li>
              <li className="flex items-start gap-2">
                <IconArrowRight className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>Les <strong>dépassements d'honoraires</strong> et actes non remboursés devront faire l'objet d'un e-reporting</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Section 5: Factures fournisseurs */}
        <h2 id="factures-fournisseurs" className="flex items-center gap-3 scroll-mt-24">
          <IconFileInvoice className="h-7 w-7 text-primary" />
          Vos factures fournisseurs
        </h2>

        <p>
          Dès septembre 2026, vous devez pouvoir <strong>recevoir</strong> les factures de vos fournisseurs au format électronique. 
          Voici les types de factures concernées :
        </p>

        <ul className="space-y-2 my-6">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Matériel médical :</strong> tensiomètres, aiguilles, compresses, gants, masques</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Logiciels métier :</strong> abonnement Doctolib Pro, Maiia, logiciel de gestion cabinet</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Téléphone/Internet :</strong> forfaits professionnels Orange, SFR, Bouygues</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Location cabinet :</strong> si bail professionnel avec une société</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Véhicule :</strong> leasing, carburant (factures professionnelles)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Assurances :</strong> RCP, mutuelle cabinet</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Formation continue :</strong> DPC, formations métier</span>
          </li>
        </ul>

        <div className="rounded-lg bg-blue-50 dark:bg-blue-950/30 p-4 my-6">
          <p className="text-sm text-blue-900 dark:text-blue-100 mb-0">
            <strong>💡 Astuce :</strong> Choisissez un logiciel de facturation qui vous permet de 
            <strong>centraliser</strong> la réception de ces factures fournisseurs, en plus de votre logiciel métier 
            qui gère la partie soins.
          </p>
        </div>

        {/* Section 6: Quel logiciel choisir */}
        <h2 id="logiciel-sante" className="flex items-center gap-3 scroll-mt-24">
          Quel logiciel choisir ?
        </h2>

        <p>
          En tant que professionnel de santé, vous avez généralement <strong>2 logiciels</strong> :
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Logiciel métier</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 dark:text-slate-300">
              <p className="mb-2">Pour la gestion des soins et la télétransmission CPAM :</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Doctolib Pro</li>
                <li>Maiia</li>
                <li>Visiodent (dentistes)</li>
                <li>Kinémax (kinés)</li>
                <li>Logiral (infirmiers)</li>
              </ul>
              <p className="mt-2 text-xs text-slate-500">→ Continuez à l'utiliser, il gère la partie CPAM</p>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-primary">Logiciel de facturation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-600 dark:text-slate-300">
              <p className="mb-2">Pour les factures hors CPAM et fournisseurs :</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Factures B2B (entreprises)</li>
                <li>Réception factures fournisseurs</li>
                <li>E-reporting B2C</li>
                <li>Archivage légal</li>
              </ul>
              <p className="mt-2 text-xs text-primary font-medium">→ C'est là que FacturSimple intervient</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary bg-primary/5 my-8">
          <CardContent className="p-6">
            <h4 className="font-semibold text-primary mb-3">Pourquoi FacturSimple pour les professions de santé ?</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <IconCheck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>9€/mois</strong> - Beaucoup moins cher que les modules des logiciels métier</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Conçu pour les auto-entrepreneurs</strong> - Simple et adapté à votre statut</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Format Factur-X</strong> - Conforme aux exigences 2026</span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Centralise les factures fournisseurs</strong> - Un seul endroit pour tout</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link 
                href="/#waitlist"
                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Rejoindre la liste d'attente
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Erreurs à éviter */}
        <h2 id="erreurs-eviter" className="flex items-center gap-3 scroll-mt-24">
          5 erreurs à éviter
        </h2>

        <div className="space-y-4 my-6">
          {[
            {
              error: "Croire que SESAM-Vitale suffit",
              reality: "La télétransmission CPAM est un circuit distinct. Vous avez aussi des factures hors CPAM à gérer."
            },
            {
              error: "Attendre septembre 2027 pour s'équiper",
              reality: "Dès septembre 2026, vous devez pouvoir RECEVOIR des factures électroniques de vos fournisseurs."
            },
            {
              error: "Penser qu'en franchise TVA, on n'est pas concerné",
              reality: "Être exonéré de TVA ne change rien. Vous restez assujetti au sens fiscal."
            },
            {
              error: "Utiliser uniquement son logiciel métier",
              reality: "Vérifiez s'il gère aussi la facturation B2B et la réception fournisseurs. Souvent, non."
            },
            {
              error: "Ignorer l'e-reporting pour les dépassements",
              reality: "Les dépassements d'honoraires (B2C) nécessitent un e-reporting à l'administration."
            }
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <IconX className="h-3 w-3 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium text-red-700 dark:text-red-400 mb-1">❌ {item.error}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">✅ {item.reality}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section 8: Checklist */}
        <h2 id="checklist" className="flex items-center gap-3 scroll-mt-24">
          Checklist de préparation
        </h2>

        <Card className="my-6">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-4">À faire avant septembre 2026 :</h4>
            <div className="space-y-3">
              {[
                "Vérifier que mon logiciel métier gère la réception de factures électroniques",
                "Identifier mes factures hors CPAM (B2B, dépassements, actes non remboursés)",
                "Choisir un logiciel de facturation conforme 2026 (si nécessaire)",
                "Informer mes fournisseurs de mon adresse de réception électronique",
                "Former mon secrétariat / collaborateurs aux nouvelles procédures",
                "Tester la réception et l'archivage des factures au format Factur-X"
              ].map((item, index) => (
                <label key={index} className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="my-6">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-4">À faire avant septembre 2027 :</h4>
            <div className="space-y-3">
              {[
                "Paramétrer l'émission de factures B2B au format électronique",
                "Configurer l'e-reporting pour les factures B2C (dépassements, actes non remboursés)",
                "Vérifier les mentions obligatoires sur mes factures (SIREN client, etc.)",
                "Mettre en place l'archivage 10 ans (légal pour les données de santé)"
              ].map((item, index) => (
                <label key={index} className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 9: FAQ */}
        <h2 id="faq" className="scroll-mt-24">FAQ professions de santé</h2>

        <div className="space-y-6 my-6">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
              Les feuilles de soins électroniques (FSE) sont-elles concernées ?
            </h4>
            <p className="text-slate-600 dark:text-slate-300">
              Non. La télétransmission SESAM-Vitale vers la CPAM est un système distinct et préexistant. 
              Elle n'est pas modifiée par la réforme 2026 de la facturation électronique.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
              Je suis infirmier libéral en franchise TVA, suis-je concerné ?
            </h4>
            <p className="text-slate-600 dark:text-slate-300">
              Oui. Les soins infirmiers sont exonérés de TVA, mais vous restez assujetti au sens fiscal. 
              Vous devez recevoir les factures électroniques de vos fournisseurs dès septembre 2026.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
              Mon logiciel Doctolib/Maiia suffit-il ?
            </h4>
            <p className="text-slate-600 dark:text-slate-300">
              Ces logiciels gèrent principalement la prise de rendez-vous et la télétransmission CPAM. 
              Vérifiez auprès de votre éditeur s'il propose un module de facturation électronique 
              conforme Factur-X. Sinon, un logiciel complémentaire comme FacturSimple sera nécessaire.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
              Les dépassements d'honoraires sont-ils concernés ?
            </h4>
            <p className="text-slate-600 dark:text-slate-300">
              Oui. Les dépassements facturés directement au patient (B2C) nécessitent un e-reporting 
              à l'administration fiscale dès septembre 2027. Votre logiciel de facturation doit 
              pouvoir transmettre ces données.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
              Combien de temps conserver les factures électroniques ?
            </h4>
            <p className="text-slate-600 dark:text-slate-300">
              Le délai légal est de 10 ans pour les données à caractère médical. Pour les factures 
              commerciales classiques, c'est 6 ans. Choisissez un logiciel avec archivage sécurisé.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
              Je fais des remplacements, ça change quelque chose ?
            </h4>
            <p className="text-slate-600 dark:text-slate-300">
              Les remplaçants facturent généralement au praticien titulaire (B2B). Ces factures 
              devront être au format électronique dès septembre 2027. Si vous facturez directement 
              les patients, l'e-reporting s'applique aussi.
            </p>
          </div>
        </div>

        {/* CTA Final */}
        <Card className="border-primary bg-gradient-to-br from-primary/10 to-primary/5 my-10">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Préparez votre cabinet pour 2026
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-xl mx-auto">
              FacturSimple vous accompagne dans la transition vers la facturation électronique, 
              en complément de votre logiciel métier. Simple, conforme et abordable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/checklist-2026"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
              >
                Checklist 2026 gratuite
              </Link>
              <Link 
                href="/#waitlist"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Rejoindre la liste d'attente
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Related Articles */}
        <div className="border-t border-slate-200 dark:border-slate-700 pt-8 mt-10">
          <h3 className="text-lg font-semibold mb-4">Articles connexes</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/blog/facturation-electronique-auto-entrepreneur"
              className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors group"
            >
              <h4 className="font-medium group-hover:text-primary transition-colors">
                Facturation électronique : guide complet auto-entrepreneur
              </h4>
              <p className="text-sm text-slate-500 mt-1">Les bases de la réforme 2026</p>
            </Link>
            <Link 
              href="/blog/e-reporting-micro-entreprise"
              className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors group"
            >
              <h4 className="font-medium group-hover:text-primary transition-colors">
                E-reporting : ce que les micro-entreprises doivent savoir
              </h4>
              <p className="text-sm text-slate-500 mt-1">Comprendre l'e-reporting B2C</p>
            </Link>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
