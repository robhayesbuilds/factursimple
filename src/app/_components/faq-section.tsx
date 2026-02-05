const faqs = [
  {
    question: "Suis-je concerné même en franchise de TVA ?",
    answer:
      "Oui. Tous les assujettis à la TVA sont concernés, y compris ceux en franchise en base.",
  },
  {
    question: "Quand dois-je être prêt ?",
    answer:
      "1er sept. 2026 : recevoir des e-factures. 1er sept. 2027 : émettre des e-factures.",
  },
  {
    question: "Qu'est-ce que Factur-X ?",
    answer:
      "Un format hybride : PDF lisible + données XML structurées. Le standard français.",
  },
  {
    question: "Puis-je continuer avec Word/Excel ?",
    answer:
      "Non. Les PDF simples ne seront plus conformes à partir de 2027.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="border-t bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Questions fréquentes
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold">{faq.question}</dt>
                <dd className="mt-2 text-muted-foreground">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
