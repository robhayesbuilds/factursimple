import { z } from "zod";

// BCE (Banque Centrale Européenne) refinancing rate as of Jan 2026: 3.15%
// Legal penalty rate = BCE × 3 = 9.45% (updated semi-annually)
export const BCE_RATE = 3.15;
export const LEGAL_PENALTY_RATE = BCE_RATE * 3; // 9.45%
export const FORFAIT_RECOUVREMENT = 40; // €40 per invoice

export const penaltyFormSchema = z.object({
  invoiceAmount: z.number().min(0.01, "Le montant doit être positif"),
  invoiceDate: z.string().min(1, "Date de facture requise"),
  dueDate: z.string().min(1, "Date d'échéance requise"),
  paymentDate: z.string().optional(),
  customRate: z.number().min(0).max(100).optional(),
  includeRecoveryFee: z.boolean(),
});

export type PenaltyFormValues = z.infer<typeof penaltyFormSchema>;

export interface PenaltyCalculation {
  invoiceAmount: number;
  daysLate: number;
  dailyRate: number;
  interestPenalty: number;
  recoveryFee: number;
  totalPenalty: number;
  totalDue: number;
  rateUsed: number;
  calculationDate: Date;
}

export function calculatePenalty(values: PenaltyFormValues): PenaltyCalculation {
  const invoiceAmount = values.invoiceAmount;
  const dueDate = new Date(values.dueDate);
  const paymentDate = values.paymentDate ? new Date(values.paymentDate) : new Date();
  
  // Calculate days late
  const daysLate = Math.max(0, Math.floor((paymentDate.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24)));
  
  // Use custom rate or legal rate
  const rateUsed = values.customRate ?? LEGAL_PENALTY_RATE;
  
  // Daily rate = annual rate / 365
  const dailyRate = rateUsed / 365 / 100;
  
  // Interest penalty = amount × daily rate × days late
  const interestPenalty = invoiceAmount * dailyRate * daysLate;
  
  // Recovery fee (forfait de recouvrement)
  const recoveryFee = values.includeRecoveryFee && daysLate > 0 ? FORFAIT_RECOUVREMENT : 0;
  
  // Total penalty
  const totalPenalty = interestPenalty + recoveryFee;
  
  return {
    invoiceAmount,
    daysLate,
    dailyRate,
    interestPenalty: Math.round(interestPenalty * 100) / 100,
    recoveryFee,
    totalPenalty: Math.round(totalPenalty * 100) / 100,
    totalDue: Math.round((invoiceAmount + totalPenalty) * 100) / 100,
    rateUsed,
    calculationDate: paymentDate,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatPercentage(rate: number): string {
  return `${rate.toFixed(2)}%`;
}
