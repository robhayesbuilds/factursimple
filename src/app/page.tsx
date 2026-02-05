import { HeroSection } from "./_components/hero-section"
import { TrustBadges } from "./_components/trust-badges"
import { HowItWorksSection } from "./_components/how-it-works"
import { FeaturesSection } from "./_components/features-section"
import { TestimonialsSection } from "./_components/testimonials-section"
import { PricingCalculator } from "./_components/pricing-calculator"
import { PricingSection } from "./_components/pricing-section"
import { FAQSection } from "./_components/faq-section"
import { CTASection } from "./_components/cta-section"
import { OrganizationSchema, SoftwareSchema } from "./blog/_components/article-schema"
import {
  IconFileInvoice,
  IconFileDescription,
  IconAlertTriangle,
  IconCalculator,
  IconPigMoney,
  IconBook,
  IconChecklist,
  IconX,
  IconCheck,
  IconChevronRight,
  IconGift,
} from "@tabler/icons-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Structured Data for SEO */}
      <OrganizationSchema />
      <SoftwareSchema />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-primary">FacturSimple</a>
            <div className="hidden items-center gap-6 text-sm md:flex">
              <a href="/generateur-facture" className="flex items-center gap-1.5 font-medium text-primary hover:text-primary/80">
                <IconFileInvoice className="h-4 w-4" />
                Factures
              </a>
              <a href="/generateur-devis" className="flex items-center gap-1.5 font-medium text-primary hover:text-primary/80">
                <IconFileDescription className="h-4 w-4" />
                Devis
              </a>
              <a href="/calculateur-penalites" className="flex items-center gap-1.5 font-medium text-orange-600 hover:text-orange-700">
                <IconAlertTriangle className="h-4 w-4" />
                Pénalités
              </a>
              <a href="/calculateur-tva" className="flex items-center gap-1.5 font-medium text-green-600 hover:text-green-700">
                <IconCalculator className="h-4 w-4" />
                TVA
              </a>
              <a href="/blog" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary">
                <IconBook className="h-4 w-4" />
                Blog
              </a>
              <a href="/checklist-2026" className="flex items-center gap-1.5 font-medium text-amber-600 hover:text-amber-700">
                <IconChecklist className="h-4 w-4" />
                Checklist
              </a>
            </div>
          </div>
        </div>
      </nav>

      <HeroSection />
      <TrustBadges />

      {/* Free Tools Banner */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-10">
        <div className="container mx-auto px-6">
          <div className="mb-6 text-center">
            <div className="mb-2 inline-flex items-center gap-2 text-primary-foreground/80">
              <IconGift className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Outils Gratuits</span>
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground">
              Créez vos documents conformes 2026
            </h3>
            <p className="mt-1 text-primary-foreground/80">
              Sans inscription, téléchargement instantané
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a 
              href="/generateur-facture"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-white/90 hover:shadow-md"
            >
              <IconFileInvoice className="h-4 w-4" />
              Générateur de Factures
              <IconChevronRight className="h-4 w-4" />
            </a>
            <a 
              href="/generateur-devis"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
            >
              <IconFileDescription className="h-4 w-4" />
              Générateur de Devis
              <IconChevronRight className="h-4 w-4" />
            </a>
            <a 
              href="/calculateur-penalites"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-600"
            >
              <IconAlertTriangle className="h-4 w-4" />
              Pénalités de Retard
              <IconChevronRight className="h-4 w-4" />
            </a>
            <a 
              href="/calculateur-tva"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-green-600"
            >
              <IconCalculator className="h-4 w-4" />
              Calculateur TVA
              <IconChevronRight className="h-4 w-4" />
            </a>
            <a 
              href="/calculateur-economies"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-600"
            >
              <IconPigMoney className="h-4 w-4" />
              Comparez & Économisez
              <IconChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground">
              La réforme arrive. Êtes-vous prêt ?
            </h2>
            <p className="mb-12 text-center text-lg text-muted-foreground">
              Septembre 2026 : toutes les entreprises devront émettre des factures électroniques
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  <IconX className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Ce qui ne marchera plus
                </h3>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <IconX className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    Factures PDF faites sous Word ou Excel
                  </li>
                  <li className="flex items-start gap-2">
                    <IconX className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    Envoi de factures par simple email
                  </li>
                  <li className="flex items-start gap-2">
                    <IconX className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    Logiciels non certifiés
                  </li>
                  <li className="flex items-start gap-2">
                    <IconX className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    Pas de transmission à l&apos;administration fiscale
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                  <IconCheck className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  Ce qu&apos;exige la loi
                </h3>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    Format structuré (Factur-X, UBL, CII)
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    Transmission via plateforme agréée
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    E-reporting des transactions B2C
                  </li>
                  <li className="flex items-start gap-2">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    Stockage conforme pendant 10 ans
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="mb-4 text-muted-foreground">
                Pennylane coûte <span className="font-semibold text-destructive">99€/mois</span>. Trop cher pour vos besoins simples ?
              </p>
              <a 
                href="/checklist-2026"
                className="inline-flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-6 py-3 font-semibold text-amber-700 transition-all hover:bg-amber-500/20 dark:text-amber-300"
              >
                <IconChecklist className="h-5 w-5" />
                Testez votre Préparation 2026
                <IconChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="comment-ca-marche">
        <HowItWorksSection />
      </div>

      <FeaturesSection />
      <TestimonialsSection />
      <PricingCalculator />
      <PricingSection />
      <FAQSection />
      <CTASection />

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-xl font-bold text-foreground">FacturSimple</div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <a href="/generateur-facture" className="hover:text-foreground">Factures</a>
              <a href="/generateur-devis" className="hover:text-foreground">Devis</a>
              <a href="/calculateur-penalites" className="hover:text-foreground">Pénalités</a>
              <a href="/calculateur-tva" className="hover:text-foreground">TVA</a>
              <a href="/checklist-2026" className="hover:text-foreground">Checklist</a>
              <a href="/blog" className="hover:text-foreground">Blog</a>
            </div>
            <div className="text-sm text-muted-foreground">© 2026 FacturSimple. Conçu en France 🇫🇷</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
