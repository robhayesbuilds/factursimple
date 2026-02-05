import Link from "next/link"
import { HeroSection } from "./_components/hero-section"
import { FeaturesSection } from "./_components/features-section"
import { PricingSection } from "./_components/pricing-section"
import { FAQSection } from "./_components/faq-section"
import { CTASection } from "./_components/cta-section"
import { Button } from "@/components/ui/button"
import {
  IconFileInvoice,
  IconFileDescription,
  IconCalculator,
  IconChecklist,
  IconArrowRight,
} from "@tabler/icons-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="text-xl font-bold">
            FacturSimple
          </Link>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <Link href="#fonctionnalites" className="text-muted-foreground transition-colors hover:text-foreground">
              Fonctionnalités
            </Link>
            <Link href="#tarifs" className="text-muted-foreground transition-colors hover:text-foreground">
              Tarifs
            </Link>
            <Link href="#faq" className="text-muted-foreground transition-colors hover:text-foreground">
              FAQ
            </Link>
            <Link href="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
              Blog
            </Link>
          </nav>
          <Button size="sm" className="rounded-full px-4" asChild>
            <Link href="#waitlist">
              Rejoindre
              <IconArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      <main>
        <HeroSection />

        {/* Trust indicators */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {["Conforme 2026", "Hébergé en France", "Format Factur-X", "RGPD"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Tools */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-3xl bg-gradient-to-br from-muted/80 to-muted/40 p-8 md:p-12">
                <div className="text-center">
                  <p className="text-sm font-semibold text-primary">Outils gratuits</p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    Commencez sans inscription
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    Créez vos documents conformes 2026 gratuitement
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button variant="secondary" className="rounded-full" asChild>
                    <Link href="/generateur-facture" className="gap-2">
                      <IconFileInvoice className="h-4 w-4" />
                      Factures
                    </Link>
                  </Button>
                  <Button variant="secondary" className="rounded-full" asChild>
                    <Link href="/generateur-devis" className="gap-2">
                      <IconFileDescription className="h-4 w-4" />
                      Devis
                    </Link>
                  </Button>
                  <Button variant="secondary" className="rounded-full" asChild>
                    <Link href="/calculateur-tva" className="gap-2">
                      <IconCalculator className="h-4 w-4" />
                      TVA
                    </Link>
                  </Button>
                  <Button variant="secondary" className="rounded-full" asChild>
                    <Link href="/checklist-2026" className="gap-2">
                      <IconChecklist className="h-4 w-4" />
                      Checklist
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturesSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="border-t py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <p className="text-lg font-semibold">FacturSimple</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Facturation électronique simple
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <Link href="/generateur-facture" className="transition-colors hover:text-foreground">Factures</Link>
              <Link href="/generateur-devis" className="transition-colors hover:text-foreground">Devis</Link>
              <Link href="/blog" className="transition-colors hover:text-foreground">Blog</Link>
            </nav>
            <p className="text-sm text-muted-foreground">© 2026 FacturSimple</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
