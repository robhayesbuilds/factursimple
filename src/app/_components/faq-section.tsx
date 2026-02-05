import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Suis-je concerné même en franchise de TVA ?",
    answer:
      "Oui. Tous les assujettis à la TVA sont concernés, y compris ceux en franchise en base. « Assujetti » signifie potentiellement redevable.",
  },
  {
    question: "Quand dois-je être prêt ?",
    answer:
      "1er septembre 2026 : vous devez pouvoir recevoir des e-factures. 1er septembre 2027 : vous devez émettre vos factures au format électronique.",
  },
  {
    question: "Qu'est-ce que Factur-X ?",
    answer:
      "C'est un format hybride français : un PDF lisible par l'humain + des données XML structurées lisibles par les logiciels.",
  },
  {
    question: "Puis-je continuer avec Word ou Excel ?",
    answer:
      "Non. À partir de 2027, les factures PDF simples envoyées par email ne seront plus conformes. Vous devez utiliser un format structuré.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                <AccordionTrigger className="rounded-xl px-4 py-4 text-left hover:bg-muted/50 hover:no-underline [&[data-state=open]]:bg-muted/50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
