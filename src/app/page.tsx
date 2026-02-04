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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Structured Data for SEO */}
      <OrganizationSchema />
      <SoftwareSchema />
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">FacturSimple</div>
          <div className="hidden space-x-8 text-sm text-muted-foreground md:flex">
            <a href="/generateur-facture" className="text-primary font-medium hover:text-primary/80">
              🧾 Factures
            </a>
            <a href="/generateur-devis" className="text-primary font-medium hover:text-primary/80">
              📋 Devis
            </a>
            <a href="/calculateur-penalites" className="text-orange-600 font-medium hover:text-orange-700">
              ⚠️ Pénalités
            </a>
            <a href="/calculateur-tva" className="text-green-600 font-medium hover:text-green-700">
              🧮 TVA
            </a>
            <a href="/blog" className="hover:text-primary">
              📚 Blog
            </a>
            <a href="/checklist-2026" className="text-amber-600 font-medium hover:text-amber-700">
              ✅ Checklist 2026
            </a>
            <a href="#comment-ca-marche" className="hover:text-primary">
              Comment ça marche
            </a>
            <a href="#tarifs" className="hover:text-primary">
              Tarifs
            </a>
            <a href="#faq" className="hover:text-primary">
              FAQ
            </a>
          </div>
        </div>
      </nav>

      <HeroSection />
      
      {/* Trust badges below hero */}
      <TrustBadges />

      {/* Free Tools Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-white">
              🎁 Outils Gratuits - Sans Inscription
            </h3>
            <p className="text-blue-100 mt-1">
              Créez vos documents conformes 2026 en quelques clics
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <a 
              href="/generateur-facture"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50 whitespace-nowrap"
            >
              🧾 Générateur de Factures
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="/generateur-devis"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white/20 whitespace-nowrap"
            >
              📋 Générateur de Devis
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="/calculateur-penalites"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600 whitespace-nowrap"
            >
              ⚠️ Calcul Pénalités Retard
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="/calculateur-tva"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-600 whitespace-nowrap"
            >
              🧮 Calculateur TVA
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
              La réforme arrive. Êtes-vous prêt ?
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-card p-6 shadow-sm">
                <div className="mb-4 text-2xl text-destructive">❌</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Ce qui ne marchera plus
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Factures PDF faites sous Word ou Excel</li>
                  <li>• Envoi de factures par simple email</li>
                  <li>• Logiciels non certifiés</li>
                  <li>• Pas de transmission à l&apos;administration fiscale</li>
                </ul>
              </div>

              <div className="rounded-xl bg-card p-6 shadow-sm">
                <div className="mb-4 text-2xl text-green-500">✓</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Ce qu&apos;exige la loi
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Format structuré (Factur-X, UBL, CII)</li>
                  <li>• Transmission via plateforme agréée</li>
                  <li>• E-reporting des transactions B2C</li>
                  <li>• Stockage conforme pendant 10 ans</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center space-y-4">
              <p className="text-muted-foreground">
                Pennylane coûte{" "}
                <strong className="text-destructive">99€/mois</strong>. Trop cher
                pour vos besoins simples ?
              </p>
              <a 
                href="/checklist-2026"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-6 py-3 font-semibold transition-colors hover:bg-amber-200 dark:hover:bg-amber-900/50"
              >
                ✅ Testez votre Préparation 2026
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - 3 steps */}
      <div id="comment-ca-marche">
        <HowItWorksSection />
      </div>

      <FeaturesSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Pricing Calculator */}
      <PricingCalculator />
      
      <PricingSection />
      <FAQSection />
      <CTASection />

      {/* Footer */}
      <footer className="bg-foreground py-12 text-muted">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-xl font-bold text-background md:mb-0">
              FacturSimple
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/generateur-facture" className="hover:text-background">Factures</a>
              <a href="/generateur-devis" className="hover:text-background">Devis</a>
              <a href="/calculateur-penalites" className="hover:text-background">Pénalités</a>
              <a href="/calculateur-tva" className="hover:text-background">TVA</a>
              <a href="/checklist-2026" className="hover:text-background">Checklist 2026</a>
              <a href="/blog" className="hover:text-background">Blog</a>
              <a href="#" className="hover:text-background">Mentions légales</a>
              <a href="#" className="hover:text-background">CGV</a>
            </div>
            <div className="mt-4 text-sm md:mt-0">© 2026 FacturSimple. Conçu en France 🇫🇷</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
