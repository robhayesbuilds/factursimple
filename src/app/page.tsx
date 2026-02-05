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
} from "@tabler/icons-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-6">
          <Link href="/" className="font-bold">
            FacturSimple
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link href="#fonctionnalites" className="text-muted-foreground hover:text-foreground">
              Fonctionnalités
            </Link>
            <Link href="#tarifs" className="text-muted-foreground hover:text-foreground">
              Tarifs
            </Link>
            <Link href="#faq" className="text-muted-foreground hover:text-foreground">
              FAQ
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
          </nav>
          <Button size="sm" asChild>
            <Link href="#waitlist">Rejoindre</Link>
          </Button>
        </div>
      </header>

      <main>
        <HeroSection />

        {/* Trust indicators */}
        <section className="border-y bg-muted/20 py-6">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm text-muted-foreground">
              <span>Conforme 2026</span>
              <span>Hébergé en France</span>
              <span>Format Factur-X</span>
              <span>RGPD</span>
            </div>
          </div>
        </section>

        {/* Free Tools */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium text-primary">Outils gratuits</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                Commencez sans inscription
              </h2>
            </div>
            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/generateur-facture" className="gap-2">
                  <IconFileInvoice className="h-4 w-4" />
                  Factures
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/generateur-devis" className="gap-2">
                  <IconFileDescription className="h-4 w-4" />
                  Devis
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/calculateur-tva" className="gap-2">
                  <IconCalculator className="h-4 w-4" />
                  TVA
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/checklist-2026" className="gap-2">
                  <IconChecklist className="h-4 w-4" />
                  Checklist 2026
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <FeaturesSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="font-semibold">FacturSimple</p>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/generateur-facture" className="hover:text-foreground">Factures</Link>
              <Link href="/generateur-devis" className="hover:text-foreground">Devis</Link>
              <Link href="/blog" className="hover:text-foreground">Blog</Link>
            </nav>
            <p className="text-sm text-muted-foreground">© 2026 FacturSimple</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
