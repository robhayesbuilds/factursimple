import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://factursimple.fr'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/outils`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/generateur-facture`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/generateur-devis`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/checklist-2026`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculateur-penalites`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculateur-tva`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculateur-economies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/generateur-cgv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/recapitulatif-annuel`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // New articles (Feb 6, 2026)
    {
      url: `${baseUrl}/blog/facturation-electronique-professions-sante`,
      lastModified: new Date('2026-02-06'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/facturation-electronique-ecommerce-marketplace`,
      lastModified: new Date('2026-02-06'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/facturation-electronique-photographe-graphiste`,
      lastModified: new Date('2026-02-06'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/facturation-electronique-vtc-chauffeur-prive`,
      lastModified: new Date('2026-02-06'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/facturation-electronique-livreur-uber-deliveroo`,
      lastModified: new Date('2026-02-06'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/facturation-electronique-consultant-coach`,
      lastModified: new Date('2026-02-06'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/facturation-electronique-artisan-btp`,
      lastModified: new Date('2026-02-06'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/pilote-dgfip-facturation-electronique`,
      lastModified: new Date('2026-02-06'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/facturation-electronique-professeur-particulier`,
      lastModified: new Date('2026-02-06'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // SEO-optimized articles (Feb 4-5, 2026)
    {
      url: `${baseUrl}/blog/factur-x-format`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/delais-paiement-facture`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/devis-auto-entrepreneur`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/tva-auto-entrepreneur-2026`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/e-reporting-micro-entreprise`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/mentions-legales-facture-auto-entrepreneur`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/facturation-electronique-auto-entrepreneur`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/reforme-facturation-2026`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/logiciel-facture-micro-entreprise`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Existing articles
    {
      url: `${baseUrl}/blog/guide-facture-electronique-2026`,
      lastModified: new Date('2026-02-03'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/comparatif-logiciels-facturation`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/faq-facture-electronique`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ppf-vs-pdp`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/cgv-auto-entrepreneur`,
      lastModified: new Date('2026-02-05'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/alternative-pennylane-pas-cher`,
      lastModified: new Date('2026-02-05'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/calendrier-reforme-facture-electronique-2026`,
      lastModified: new Date('2026-02-05'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/reformes-auto-entrepreneur-2026`,
      lastModified: new Date('2026-02-05'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Article #18 - Feb 6, 2026
    {
      url: `${baseUrl}/blog/sanctions-facturation-electronique`,
      lastModified: new Date('2026-02-06'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Article #19 - Feb 6, 2026
    {
      url: `${baseUrl}/blog/facture-proforma-auto-entrepreneur`,
      lastModified: new Date('2026-02-06'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Article #21 - Feb 6, 2026
    {
      url: `${baseUrl}/blog/facturation-electronique-artisan-btp`,
      lastModified: new Date('2026-02-06'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Article #24 - Feb 6, 2026
    {
      url: `${baseUrl}/blog/facturation-electronique-vtc-chauffeur-prive`,
      lastModified: new Date('2026-02-06'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
