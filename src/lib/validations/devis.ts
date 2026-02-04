import { z } from 'zod';

// Line item schema for quote
const ligneDevisSchema = z.object({
  description: z.string().min(1, 'Description requise'),
  quantite: z.number().min(0.01, 'Quantité invalide'),
  prixUnitaire: z.number().min(0, 'Prix invalide'),
  tauxTVA: z.number().min(0).max(100),
  remise: z.number().min(0).max(100).optional(),
});

// Validation schema for quote form
export const devisSchema = z.object({
  // Émetteur (Your info)
  emetteur: z.object({
    nom: z.string().min(1, 'Nom requis'),
    siret: z.string().regex(/^\d{14}$/, 'SIRET doit contenir 14 chiffres'),
    adresse: z.string().min(1, 'Adresse requise'),
    codePostal: z.string().regex(/^\d{5}$/, 'Code postal invalide'),
    ville: z.string().min(1, 'Ville requise'),
    email: z.string().email('Email invalide').optional().or(z.literal('')),
    telephone: z.string().optional(),
    mentionTVA: z.enum(['franchise', 'assujetti']),
    numeroTVA: z.string().optional(),
  }),
  
  // Client
  client: z.object({
    nom: z.string().min(1, 'Nom du client requis'),
    siret: z.string().optional(),
    adresse: z.string().min(1, 'Adresse requise'),
    codePostal: z.string().regex(/^\d{5}$/, 'Code postal invalide'),
    ville: z.string().min(1, 'Ville requise'),
    email: z.string().email('Email invalide').optional().or(z.literal('')),
  }),
  
  // Quote details
  devis: z.object({
    numero: z.string().min(1, 'Numéro de devis requis'),
    dateEmission: z.string().min(1, 'Date d\'émission requise'),
    dateValidite: z.string().min(1, 'Date de validité requise'),
    objet: z.string().min(1, 'Objet du devis requis'),
    dureeValidite: z.number().min(1).max(365),
  }),
  
  // Line items
  lignes: z.array(ligneDevisSchema).min(1, 'Au moins une ligne requise'),
  
  // Options (for multi-option quotes)
  options: z.array(z.object({
    nom: z.string(),
    description: z.string(),
    prix: z.number(),
  })).optional(),
  
  // Conditions and notes
  conditions: z.object({
    acompte: z.number().min(0).max(100),
    delaiExecution: z.string().optional(),
    garantie: z.string().optional(),
  }),
  
  // Notes
  notes: z.string().optional(),
  conditionsGenerales: z.string().optional(),
});

export type DevisData = z.infer<typeof devisSchema>;

// Default values
export const defaultDevisData: DevisData = {
  emetteur: {
    nom: '',
    siret: '',
    adresse: '',
    codePostal: '',
    ville: '',
    email: '',
    telephone: '',
    mentionTVA: 'franchise',
    numeroTVA: '',
  },
  client: {
    nom: '',
    siret: '',
    adresse: '',
    codePostal: '',
    ville: '',
    email: '',
  },
  devis: {
    numero: `D-${new Date().getFullYear()}-001`,
    dateEmission: new Date().toISOString().split('T')[0],
    dateValidite: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    objet: '',
    dureeValidite: 30,
  },
  lignes: [
    {
      description: '',
      quantite: 1,
      prixUnitaire: 0,
      tauxTVA: 0,
      remise: 0,
    },
  ],
  options: [],
  conditions: {
    acompte: 30,
    delaiExecution: '',
    garantie: '',
  },
  notes: '',
  conditionsGenerales: `Ce devis est valable pour une durée de 30 jours à compter de sa date d'émission.
    
Un acompte de 30% sera demandé à la signature du devis.

Le solde sera facturé à la livraison/fin de prestation.`,
};

// Calculate totals with optional discounts
export function calculateDevisTotals(
  lignes: DevisData['lignes'], 
  mentionTVA: 'franchise' | 'assujetti',
  options?: DevisData['options']
) {
  let totalHT = 0;
  let totalTVA = 0;
  let totalRemise = 0;
  
  for (const ligne of lignes) {
    const ligneHTBrut = ligne.quantite * ligne.prixUnitaire;
    const remise = ligne.remise ? ligneHTBrut * (ligne.remise / 100) : 0;
    const ligneHT = ligneHTBrut - remise;
    
    totalHT += ligneHT;
    totalRemise += remise;
    
    if (mentionTVA === 'assujetti') {
      totalTVA += ligneHT * (ligne.tauxTVA / 100);
    }
  }
  
  // Add options
  let totalOptions = 0;
  if (options) {
    for (const option of options) {
      totalOptions += option.prix;
    }
  }
  
  return {
    totalHTBrut: Math.round((totalHT + totalRemise) * 100) / 100,
    totalRemise: Math.round(totalRemise * 100) / 100,
    totalHT: Math.round(totalHT * 100) / 100,
    totalTVA: Math.round(totalTVA * 100) / 100,
    totalTTC: Math.round((totalHT + totalTVA) * 100) / 100,
    totalOptions: Math.round(totalOptions * 100) / 100,
    totalAvecOptions: Math.round((totalHT + totalTVA + totalOptions) * 100) / 100,
  };
}

// Format currency
export function formatEuros(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

// Format date in French
export function formatDateFR(dateStr: string): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
