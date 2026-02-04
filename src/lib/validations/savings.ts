import { z } from "zod";

export const savingsSchema = z.object({
  currentTool: z.enum([
    "pennylane",
    "tiime",
    "indy",
    "freebe",
    "qonto",
    "shine",
    "abby",
    "henrri",
    "excel",
    "other",
  ]),
  monthlyPrice: z.number().min(0).max(500).optional(),
  invoicesPerMonth: z.number().min(1).max(1000),
  hoursOnAdmin: z.number().min(0).max(100), // Hours spent on admin per month
});

export type SavingsInput = z.infer<typeof savingsSchema>;

// Competitor pricing data (as of Feb 2026)
export const competitorPricing: Record<
  string,
  { name: string; monthlyMin: number; monthlyMax: number; notes: string }
> = {
  pennylane: {
    name: "Pennylane",
    monthlyMin: 19,
    monthlyMax: 99,
    notes: "À partir de 19€ HT/mois, comptabilité intégrée",
  },
  tiime: {
    name: "Tiime",
    monthlyMin: 14.9,
    monthlyMax: 59,
    notes: "Business à 14,90€ HT/mois, Expert à 59€",
  },
  indy: {
    name: "Indy",
    monthlyMin: 0,
    monthlyMax: 39,
    notes: "Gratuit limité, Premium à 22€/mois",
  },
  freebe: {
    name: "Freebe",
    monthlyMin: 19,
    monthlyMax: 49,
    notes: "À partir de 19€/mois",
  },
  qonto: {
    name: "Qonto",
    monthlyMin: 9,
    monthlyMax: 99,
    notes: "Basic à 9€/mois, facturation en supplément",
  },
  shine: {
    name: "Shine",
    monthlyMin: 7.9,
    monthlyMax: 29.9,
    notes: "Plus à 14,90€/mois avec facturation",
  },
  abby: {
    name: "Abby",
    monthlyMin: 9,
    monthlyMax: 29,
    notes: "Solo à 9€ HT/mois",
  },
  henrri: {
    name: "Henrri",
    monthlyMin: 0,
    monthlyMax: 0,
    notes: "Gratuit mais limité, partenaire Pennylane pour PDP",
  },
  excel: {
    name: "Excel/Google Sheets",
    monthlyMin: 0,
    monthlyMax: 0,
    notes: "Gratuit mais non conforme 2026",
  },
  other: {
    name: "Autre",
    monthlyMin: 15,
    monthlyMax: 50,
    notes: "Prix moyen du marché",
  },
};

// FacturSimple pricing
export const factursimplePricing = {
  free: 0,
  starter: 9,
  pro: 19,
};

export interface SavingsResult {
  currentYearlyCost: number;
  factursimpleYearlyCost: number;
  yearlySavings: number;
  hoursSaved: number;
  timeSavingsValue: number;
  totalValue: number;
  competitorName: string;
  competitorNotes: string;
  recommendation: "free" | "starter" | "pro";
}

export function calculateSavings(input: SavingsInput): SavingsResult {
  const competitor = competitorPricing[input.currentTool];
  
  // Calculate current cost
  const currentMonthly = input.monthlyPrice ?? competitor.monthlyMax;
  const currentYearlyCost = currentMonthly * 12;
  
  // Determine recommended FacturSimple plan
  let recommendation: "free" | "starter" | "pro";
  let factursimpleMonthly: number;
  
  if (input.invoicesPerMonth <= 5) {
    recommendation = "free";
    factursimpleMonthly = 0;
  } else if (input.invoicesPerMonth <= 50) {
    recommendation = "starter";
    factursimpleMonthly = 9;
  } else {
    recommendation = "pro";
    factursimpleMonthly = 19;
  }
  
  const factursimpleYearlyCost = factursimpleMonthly * 12;
  const yearlySavings = currentYearlyCost - factursimpleYearlyCost;
  
  // Calculate time savings
  // Assume FacturSimple saves 50% of admin time with automation
  const hoursSaved = (input.hoursOnAdmin * 0.5) * 12;
  // Value time at €25/hour (conservative freelancer rate)
  const timeSavingsValue = hoursSaved * 25;
  
  const totalValue = yearlySavings + timeSavingsValue;
  
  return {
    currentYearlyCost,
    factursimpleYearlyCost,
    yearlySavings: Math.max(0, yearlySavings),
    hoursSaved,
    timeSavingsValue,
    totalValue: Math.max(0, totalValue),
    competitorName: competitor.name,
    competitorNotes: competitor.notes,
    recommendation,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
