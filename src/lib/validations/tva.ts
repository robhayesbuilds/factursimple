import { z } from "zod";

export const tvaFormSchema = z.object({
  activityType: z.enum(["vente", "service", "mixte"]),
  chiffreAffaireVente: z.number().min(0).optional(),
  chiffreAffaireService: z.number().min(0).optional(),
  annee: z.enum(["2024", "2025", "2026"]),
  moisActuel: z.number().min(1).max(12),
});

export type TVAFormData = z.infer<typeof tvaFormSchema>;

// 2024-2026 thresholds (same for these years)
export const SEUILS_TVA = {
  vente: {
    franchise: 91900,      // Seuil de franchise en base
    majore: 101000,        // Seuil majoré
  },
  service: {
    franchise: 36800,      // Seuil de franchise en base
    majore: 39100,         // Seuil majoré
  },
};

export interface TVAResult {
  status: "franchise" | "prochain" | "assujetti";
  message: string;
  details: string[];
  recommendation: string;
  mentionFacture: string;
  prorataCa?: number;
  seuilProrata?: number;
}

export function calculateTVAStatus(data: TVAFormData): TVAResult {
  const caVente = data.chiffreAffaireVente || 0;
  const caService = data.chiffreAffaireService || 0;

  if (data.activityType === "vente" || (data.activityType === "mixte" && caVente > 0)) {
    // Check vente threshold
    const seuil = SEUILS_TVA.vente;
    
    if (caVente > seuil.majore) {
      return {
        status: "assujetti",
        message: "Vous êtes assujetti à la TVA",
        details: [
          `Votre CA ventes (${formatCurrency(caVente)}) dépasse le seuil majoré de ${formatCurrency(seuil.majore)}`,
          "Vous devez facturer la TVA dès le 1er jour du mois de dépassement",
          "Déclaration et paiement de TVA obligatoires",
        ],
        recommendation: "Contactez votre centre des impôts pour régulariser votre situation TVA.",
        mentionFacture: "TVA 20% (ou taux réduit selon activité)",
      };
    }

    if (caVente > seuil.franchise) {
      return {
        status: "prochain",
        message: "Attention : Seuil de franchise dépassé",
        details: [
          `Votre CA ventes (${formatCurrency(caVente)}) dépasse le seuil de franchise (${formatCurrency(seuil.franchise)})`,
          "Vous restez en franchise pour cette année",
          `Si vous dépassez de nouveau ${formatCurrency(seuil.franchise)} l'année prochaine, vous serez assujetti`,
        ],
        recommendation: "Surveillez votre CA. Un second dépassement l'année prochaine vous rendra assujetti.",
        mentionFacture: "TVA non applicable, art. 293 B du CGI",
        prorataCa: caVente,
        seuilProrata: seuil.franchise,
      };
    }

    // Calculate prorata for current year
    const prorataCa = (caVente / data.moisActuel) * 12;
    const percentOfSeuil = (prorataCa / seuil.franchise) * 100;

    return {
      status: "franchise",
      message: "Vous bénéficiez de la franchise en base de TVA",
      details: [
        `Votre CA ventes (${formatCurrency(caVente)}) est sous le seuil de ${formatCurrency(seuil.franchise)}`,
        `CA annualisé estimé : ${formatCurrency(prorataCa)} (${percentOfSeuil.toFixed(0)}% du seuil)`,
        "Pas de TVA à facturer ni à déclarer",
      ],
      recommendation: percentOfSeuil > 80 
        ? "Vous approchez du seuil ! Surveillez votre CA dans les prochains mois."
        : "Situation normale. Vous pouvez continuer à facturer sans TVA.",
      mentionFacture: "TVA non applicable, art. 293 B du CGI",
      prorataCa,
      seuilProrata: seuil.franchise,
    };
  }

  // Service or mixed (service dominant)
  const ca = data.activityType === "service" ? caService : Math.max(caService, caVente);
  const seuil = SEUILS_TVA.service;

  if (ca > seuil.majore) {
    return {
      status: "assujetti",
      message: "Vous êtes assujetti à la TVA",
      details: [
        `Votre CA prestations (${formatCurrency(ca)}) dépasse le seuil majoré de ${formatCurrency(seuil.majore)}`,
        "Vous devez facturer la TVA dès le 1er jour du mois de dépassement",
        "Déclaration et paiement de TVA obligatoires",
      ],
      recommendation: "Contactez votre centre des impôts pour régulariser votre situation TVA.",
      mentionFacture: "TVA 20% (ou taux réduit selon activité)",
    };
  }

  if (ca > seuil.franchise) {
    return {
      status: "prochain",
      message: "Attention : Seuil de franchise dépassé",
      details: [
        `Votre CA prestations (${formatCurrency(ca)}) dépasse le seuil de franchise (${formatCurrency(seuil.franchise)})`,
        "Vous restez en franchise pour cette année",
        `Si vous dépassez de nouveau ${formatCurrency(seuil.franchise)} l'année prochaine, vous serez assujetti`,
      ],
      recommendation: "Surveillez votre CA. Un second dépassement l'année prochaine vous rendra assujetti.",
      mentionFacture: "TVA non applicable, art. 293 B du CGI",
      prorataCa: ca,
      seuilProrata: seuil.franchise,
    };
  }

  // Calculate prorata
  const prorataCa = (ca / data.moisActuel) * 12;
  const percentOfSeuil = (prorataCa / seuil.franchise) * 100;

  return {
    status: "franchise",
    message: "Vous bénéficiez de la franchise en base de TVA",
    details: [
      `Votre CA prestations (${formatCurrency(ca)}) est sous le seuil de ${formatCurrency(seuil.franchise)}`,
      `CA annualisé estimé : ${formatCurrency(prorataCa)} (${percentOfSeuil.toFixed(0)}% du seuil)`,
      "Pas de TVA à facturer ni à déclarer",
    ],
    recommendation: percentOfSeuil > 80 
      ? "Vous approchez du seuil ! Surveillez votre CA dans les prochains mois."
      : "Situation normale. Vous pouvez continuer à facturer sans TVA.",
    mentionFacture: "TVA non applicable, art. 293 B du CGI",
    prorataCa,
    seuilProrata: seuil.franchise,
  };
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
