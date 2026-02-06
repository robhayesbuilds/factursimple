import { Metadata } from "next";
import Link from "next/link";
import { IconAlertTriangle, IconCalendar, IconChecklist, IconFileInvoice, IconTool, IconArrowRight, IconBuildingStore, IconCertificate } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Facturation Électronique Artisan BTP 2026 : Guide Complet | FacturSimple",
  description: "Artisans du bâtiment, préparez-vous à la facturation électronique obligatoire 2026. Guide spécial plombiers, électriciens, maçons, peintres. Devis, factures de situation, conformité.",
  keywords: [
    "facturation électronique artisan",
    "facture électronique btp 2026",
    "logiciel facturation artisan",
    "devis facture plombier",
    "facture électricien 2026",
    "réforme facturation artisan bâtiment",
    "factur-x artisan",
    "auto-entrepreneur btp facturation"
  ],
  openGraph: {
    title: "Facturation Électronique Artisan BTP 2026 : Guide Complet",
    description: "Tout ce que les artisans du bâtiment doivent savoir sur la réforme de facturation électronique 2026.",
    type: "article",
    publishedTime: "2026-02-06T00:00:00.000Z",
  },
};

export default function FacturationElectroniqueArtisanBTPPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span>Métiers</span>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 rounded-full">
              Guide Métier
            </span>
            <span className="text-sm text-muted-foreground">
              Mis à jour le 6 février 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Facturation Électronique <span className="text-primary">Artisan BTP</span> 2026 : Le Guide Complet
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Plombiers, électriciens, maçons, peintres, menuisiers... Vous êtes artisan du bâtiment ? 
            Voici tout ce que vous devez savoir sur la réforme de facturation électronique qui arrive en septembre 2026.
          </p>
        </div>
      </section>

      {/* Alert Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <IconAlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                  Attention : Échéance imminente pour les artisans
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  <strong>Septembre 2026</strong> : Vous devez pouvoir <strong>recevoir</strong> les factures électroniques de vos fournisseurs.
                  <br />
                  <strong>Septembre 2027</strong> : Vous devez <strong>émettre</strong> vos factures au format électronique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-muted/50 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <IconChecklist className="w-5 h-5" />
              Sommaire
            </h2>
            <nav className="space-y-2">
              <a href="#concerne" className="block text-muted-foreground hover:text-primary transition-colors">
                1. Quels artisans sont concernés ?
              </a>
              <a href="#calendrier" className="block text-muted-foreground hover:text-primary transition-colors">
                2. Calendrier 2026-2027 pour les artisans
              </a>
              <a href="#devis-situation" className="block text-muted-foreground hover:text-primary transition-colors">
                3. Cas particuliers : devis, factures de situation, acomptes
              </a>
              <a href="#format" className="block text-muted-foreground hover:text-primary transition-colors">
                4. Format Factur-X : ce qui change pour vos factures
              </a>
              <a href="#outils" className="block text-muted-foreground hover:text-primary transition-colors">
                5. Choisir le bon outil de facturation
              </a>
              <a href="#eviter" className="block text-muted-foreground hover:text-primary transition-colors">
                6. Erreurs courantes à éviter
              </a>
              <a href="#etapes" className="block text-muted-foreground hover:text-primary transition-colors">
                7. Les 5 étapes pour être prêt
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-8">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg dark:prose-invert">
          
          <section id="concerne">
            <h2 className="flex items-center gap-3">
              <IconBuildingStore className="w-7 h-7 text-primary" />
              1. Quels artisans sont concernés ?
            </h2>
            
            <p>
              <strong>Tous les artisans assujettis à la TVA</strong> sont concernés par la réforme, quel que soit leur statut juridique :
            </p>
            
            <ul>
              <li><strong>Auto-entrepreneurs / micro-entrepreneurs</strong> du bâtiment</li>
              <li><strong>Entreprises individuelles</strong> (EI, EIRL)</li>
              <li><strong>SARL, SAS, EURL</strong> artisanales</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 not-prose my-6">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                📌 Cas des auto-entrepreneurs en franchise de TVA
              </h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                Même si vous ne facturez pas la TVA (franchise en base), vous êtes <strong>quand même concerné</strong> par la réforme. 
                Vous devrez pouvoir recevoir les factures électroniques de vos fournisseurs dès septembre 2026.
              </p>
            </div>

            <h3>Métiers du bâtiment concernés</h3>
            
            <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <IconTool className="w-5 h-5 text-primary" />
                  Gros œuvre
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>Maçons</li>
                  <li>Charpentiers</li>
                  <li>Couvreurs</li>
                  <li>Terrassiers</li>
                </ul>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <IconTool className="w-5 h-5 text-primary" />
                  Second œuvre
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>Plombiers / Chauffagistes</li>
                  <li>Électriciens</li>
                  <li>Menuisiers</li>
                  <li>Peintres / Plaquistes</li>
                  <li>Carreleurs</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="calendrier">
            <h2 className="flex items-center gap-3">
              <IconCalendar className="w-7 h-7 text-primary" />
              2. Calendrier 2026-2027 pour les artisans
            </h2>

            <div className="not-prose my-8">
              <div className="relative border-l-2 border-primary/30 pl-6 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[31px] w-4 h-4 bg-orange-500 rounded-full" />
                  <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-4">
                    <p className="text-sm font-medium text-orange-600 dark:text-orange-400">1er septembre 2026</p>
                    <h4 className="font-semibold text-lg mb-2">Réception obligatoire</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ Recevoir les factures électroniques de vos fournisseurs</li>
                      <li>✓ Choisir une plateforme de réception (PPF ou PDP)</li>
                      <li>✓ Configurer votre adresse de réception</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[31px] w-4 h-4 bg-primary rounded-full" />
                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-sm font-medium text-primary">1er septembre 2027</p>
                    <h4 className="font-semibold text-lg mb-2">Émission obligatoire (TPE/PME)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ Émettre toutes vos factures au format électronique</li>
                      <li>✓ Transmettre les données à l&apos;administration (e-reporting)</li>
                      <li>✓ Utiliser le format Factur-X</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="devis-situation">
            <h2 className="flex items-center gap-3">
              <IconFileInvoice className="w-7 h-7 text-primary" />
              3. Cas particuliers : devis, factures de situation, acomptes
            </h2>

            <h3>Les devis sont-ils concernés ?</h3>
            <p>
              <strong>Non, les devis ne sont pas concernés</strong> par la réforme de facturation électronique. 
              Seules les <strong>factures</strong> doivent être émises au format électronique.
            </p>
            <p>
              Cependant, il est recommandé d&apos;utiliser un logiciel qui permet de transformer facilement un devis accepté en facture conforme.
            </p>

            <h3>Factures de situation (marchés de travaux)</h3>
            <p>
              Les <strong>factures de situation</strong> ou factures intermédiaires, courantes sur les chantiers, 
              <strong>doivent être émises au format électronique</strong> comme toute autre facture.
            </p>
            <p>
              Chaque situation doit comporter :
            </p>
            <ul>
              <li>Le numéro de la situation (1/3, 2/3, etc.)</li>
              <li>Le montant cumulé des travaux réalisés</li>
              <li>Le montant déjà facturé</li>
              <li>Le montant de la situation en cours</li>
              <li>Toutes les mentions obligatoires d&apos;une facture standard</li>
            </ul>

            <h3>Acomptes et avances</h3>
            <p>
              Les <strong>factures d&apos;acompte</strong> sont également soumises à la facturation électronique. 
              Elles doivent mentionner :
            </p>
            <ul>
              <li>La mention &quot;Facture d&apos;acompte&quot;</li>
              <li>La référence du devis ou du contrat</li>
              <li>Le pourcentage ou montant de l&apos;acompte</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 not-prose my-6">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                ⚠️ Retenue de garantie (5%)
              </h4>
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                La retenue de garantie de 5% (courante dans le BTP) doit être clairement mentionnée sur la facture finale. 
                Votre logiciel de facturation doit pouvoir gérer ce cas spécifique.
              </p>
            </div>
          </section>

          <section id="format">
            <h2 className="flex items-center gap-3">
              <IconCertificate className="w-7 h-7 text-primary" />
              4. Format Factur-X : ce qui change pour vos factures
            </h2>

            <p>
              Le format <strong>Factur-X</strong> est le standard français pour la facturation électronique. 
              C&apos;est un fichier PDF avec des données structurées intégrées (XML).
            </p>

            <h3>Nouvelles mentions obligatoires</h3>
            <p>En plus des mentions habituelles, vos factures devront inclure :</p>
            <ul>
              <li><strong>SIREN du client</strong> (pour les clients professionnels)</li>
              <li><strong>Adresse de livraison</strong> (si différente de l&apos;adresse de facturation)</li>
              <li><strong>Type d&apos;opération</strong> (livraison de bien, prestation de service, mixte)</li>
              <li><strong>Option TVA</strong> (encaissement ou débit)</li>
            </ul>

            <h3>Ce que ça change concrètement</h3>
            <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-4">
                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Avant (plus valable)</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>Facture Word ou Excel</li>
                  <li>PDF simple envoyé par email</li>
                  <li>Facture papier</li>
                  <li>Carnet de factures à souche</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">✓ Après (obligatoire)</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>Format Factur-X (PDF + XML)</li>
                  <li>Transmission via plateforme</li>
                  <li>Données structurées</li>
                  <li>Archivage électronique 6 ans</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="outils">
            <h2 className="flex items-center gap-3">
              <IconTool className="w-7 h-7 text-primary" />
              5. Choisir le bon outil de facturation
            </h2>

            <p>
              Pour être conforme en 2026, votre logiciel de facturation doit :
            </p>
            <ul>
              <li>✓ Générer des factures au format <strong>Factur-X</strong></li>
              <li>✓ Se connecter à une plateforme (PPF ou PDP agréée)</li>
              <li>✓ Gérer les <strong>factures de situation</strong> et acomptes</li>
              <li>✓ Archiver vos factures pendant 6 ans</li>
              <li>✓ Permettre le <strong>e-reporting</strong> de vos transactions B2C</li>
            </ul>

            <h3>Critères spécifiques pour artisans BTP</h3>
            <p>Au-delà de la conformité 2026, un bon outil pour artisan doit :</p>
            <ul>
              <li>Permettre de créer des <strong>devis détaillés</strong> (main d&apos;œuvre, fournitures, déplacements)</li>
              <li>Gérer les <strong>situations de chantier</strong> (facturation progressive)</li>
              <li>Calculer automatiquement la <strong>retenue de garantie</strong></li>
              <li>Inclure des <strong>bibliothèques de prix</strong> (optionnel mais pratique)</li>
              <li>Être <strong>simple et rapide</strong> (vous êtes sur chantier, pas au bureau)</li>
            </ul>

            <div className="not-prose my-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
              <h4 className="font-semibold text-lg mb-3">FacturSimple pour artisans</h4>
              <p className="text-muted-foreground mb-4">
                Conçu pour les auto-entrepreneurs et TPE, FacturSimple sera conforme à la réforme 2026 avec :
              </p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <IconChecklist className="w-4 h-4 text-primary" />
                  <span>Export Factur-X inclus</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconChecklist className="w-4 h-4 text-primary" />
                  <span>Devis → Facture en 1 clic</span>
                </li>
                <li className="flex items-center gap-2">
                  <IconChecklist className="w-4 h-4 text-primary" />
                  <span>À partir de 9€/mois</span>
                </li>
              </ul>
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Essayer gratuitement
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          <section id="eviter">
            <h2>6. Erreurs courantes à éviter</h2>

            <div className="not-prose space-y-4 my-6">
              <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Attendre le dernier moment</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Ne pas anticiper = risque de non-conformité et amendes. Commencez maintenant à tester les outils.
                </p>
              </div>
              
              <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Croire que le papier reste valable</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Les factures papier et PDF simples ne seront plus conformes pour les transactions B2B.
                </p>
              </div>
              
              <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Choisir un outil non compatible</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Vérifiez que votre logiciel actuel sera compatible Factur-X. Sinon, changez maintenant.
                </p>
              </div>
              
              <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-4 border-l-4 border-red-500">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Négliger l&apos;archivage</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  L&apos;archivage électronique pendant 6 ans est obligatoire. Votre outil doit le gérer.
                </p>
              </div>
            </div>
          </section>

          <section id="etapes">
            <h2>7. Les 5 étapes pour être prêt</h2>

            <div className="not-prose space-y-4 my-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold">Faites l&apos;état des lieux (maintenant)</h4>
                  <p className="text-sm text-muted-foreground">Comment facturez-vous aujourd&apos;hui ? Excel, logiciel, papier ? Identifiez vos besoins.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold">Choisissez un logiciel conforme (avant juin 2026)</h4>
                  <p className="text-sm text-muted-foreground">Testez plusieurs solutions. Privilégiez la simplicité et la conformité Factur-X.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold">Configurez votre plateforme (été 2026)</h4>
                  <p className="text-sm text-muted-foreground">Inscrivez-vous sur le PPF ou choisissez une PDP. Configurez votre adresse de réception.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h4 className="font-semibold">Informez vos clients et fournisseurs (été 2026)</h4>
                  <p className="text-sm text-muted-foreground">Prévenez vos contacts professionnels de votre nouvelle adresse de facturation.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h4 className="font-semibold">Passez à l&apos;émission électronique (avant sept. 2027)</h4>
                  <p className="text-sm text-muted-foreground">Commencez à émettre vos factures au format électronique. Testez d&apos;abord sur quelques clients.</p>
                </div>
              </div>
            </div>
          </section>

          <h2>Conclusion</h2>
          <p>
            La réforme de facturation électronique 2026 concerne <strong>tous les artisans du bâtiment</strong>, 
            qu&apos;ils soient auto-entrepreneurs, en entreprise individuelle ou en société.
          </p>
          <p>
            Le plus important est de <strong>ne pas attendre septembre 2026</strong> pour s&apos;y préparer. 
            Choisissez dès maintenant un logiciel conforme, testez-le sur quelques factures, 
            et vous serez serein le jour J.
          </p>
          <p>
            Les amendes pour non-conformité peuvent atteindre <strong>15€ par facture</strong> (plafonné à 15 000€/an), 
            sans compter les complications avec vos clients professionnels qui exigeront des factures électroniques.
          </p>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à simplifier votre facturation ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              FacturSimple vous accompagne vers la conformité 2026 avec des outils simples, 
              pensés pour les artisans et auto-entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/generateur-facture"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <IconFileInvoice className="w-5 h-5" />
                Créer une facture gratuite
              </Link>
              <Link
                href="/checklist-2026"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                <IconChecklist className="w-5 h-5" />
                Checklist 2026
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">Articles connexes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blog/facture-proforma-auto-entrepreneur"
              className="group p-6 border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                Facture proforma auto-entrepreneur
              </h3>
              <p className="text-sm text-muted-foreground">
                Quand et comment utiliser une facture proforma dans votre activité.
              </p>
            </Link>
            <Link
              href="/blog/devis-auto-entrepreneur"
              className="group p-6 border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                Devis auto-entrepreneur : le guide complet
              </h3>
              <p className="text-sm text-muted-foreground">
                Tout ce qu&apos;il faut savoir sur les devis obligatoires et leurs mentions.
              </p>
            </Link>
            <Link
              href="/blog/sanctions-facturation-electronique"
              className="group p-6 border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                Sanctions et amendes 2026
              </h3>
              <p className="text-sm text-muted-foreground">
                Ce que vous risquez en cas de non-conformité à la réforme.
              </p>
            </Link>
            <Link
              href="/blog/calendrier-reforme-facture-electronique-2026"
              className="group p-6 border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                Calendrier complet de la réforme
              </h3>
              <p className="text-sm text-muted-foreground">
                Toutes les dates clés de la réforme de facturation électronique.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
