"use client";

import {
  type PenaltyCalculation,
  formatCurrency,
  formatDate,
  formatPercentage,
  FORFAIT_RECOUVREMENT,
} from "@/lib/validations/penalty";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  IconReceipt,
  IconAlertTriangle,
  IconCheck,
  IconCopy,
  IconMail,
} from "@tabler/icons-react";
import { useState } from "react";

interface PenaltyResultProps {
  result: PenaltyCalculation;
}

export function PenaltyResult({ result }: PenaltyResultProps) {
  const [copied, setCopied] = useState(false);

  const isOverdue = result.daysLate > 0;

  const copyToClipboard = () => {
    const text = `
Calcul des pénalités de retard
==============================
Montant de la facture : ${formatCurrency(result.invoiceAmount)}
Jours de retard : ${result.daysLate} jours
Taux appliqué : ${formatPercentage(result.rateUsed)} annuel

Pénalités d'intérêt : ${formatCurrency(result.interestPenalty)}
Indemnité forfaitaire : ${formatCurrency(result.recoveryFee)}
-------------------------------
Total des pénalités : ${formatCurrency(result.totalPenalty)}
Total à régler : ${formatCurrency(result.totalDue)}

Calculé le ${formatDate(result.calculationDate)}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateEmailText = () => {
    return `
Objet : Relance facture impayée - Pénalités de retard

Madame, Monsieur,

Malgré nos précédentes relances, nous constatons que la facture d'un montant de ${formatCurrency(result.invoiceAmount)} reste impayée, avec un retard de ${result.daysLate} jours.

Conformément à l'article L441-10 du Code de commerce, nous vous informons que des pénalités de retard sont désormais applicables :

- Pénalités d'intérêt (${formatPercentage(result.rateUsed)} annuel) : ${formatCurrency(result.interestPenalty)}
- Indemnité forfaitaire de recouvrement : ${formatCurrency(result.recoveryFee)}

Le montant total dû s'élève donc à ${formatCurrency(result.totalDue)}.

Nous vous remercions de procéder au règlement dans les plus brefs délais.

Cordialement,
    `.trim();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(generateEmailText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOverdue) {
    return (
      <Card className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
            <IconCheck className="h-5 w-5" />
            Aucun retard
          </CardTitle>
          <CardDescription>
            Cette facture n&apos;est pas en retard de paiement.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            La date de calcul est antérieure ou égale à la date
            d&apos;échéance.
            <br />
            Aucune pénalité n&apos;est applicable.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-orange-200 bg-orange-50 dark:border-orange-900 dark:bg-orange-950">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
          <IconAlertTriangle className="h-5 w-5" />
          Pénalités de retard
        </CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Badge variant="destructive">{result.daysLate} jours de retard</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Summary */}
        <div className="grid gap-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Montant de la facture
            </span>
            <span className="font-medium">
              {formatCurrency(result.invoiceAmount)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Taux appliqué</span>
            <span className="font-medium">
              {formatPercentage(result.rateUsed)} / an
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Taux journalier
            </span>
            <span className="font-medium">
              {(result.dailyRate * 100).toFixed(4)}%
            </span>
          </div>
        </div>

        <Separator />

        {/* Penalty Breakdown */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Détail des pénalités</h4>
          <div className="flex justify-between items-center">
            <span className="text-sm">
              Intérêts de retard
              <span className="text-xs text-muted-foreground ml-1">
                ({result.daysLate} jours)
              </span>
            </span>
            <span className="font-medium">
              {formatCurrency(result.interestPenalty)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">
              Indemnité forfaitaire
              <span className="text-xs text-muted-foreground ml-1">
                (art. D441-5)
              </span>
            </span>
            <span className="font-medium">
              {formatCurrency(result.recoveryFee)}
            </span>
          </div>
        </div>

        <Separator />

        {/* Totals */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total pénalités</span>
            <span className="font-bold text-orange-600 dark:text-orange-400">
              {formatCurrency(result.totalPenalty)}
            </span>
          </div>
          <div className="flex justify-between items-center text-lg">
            <span className="font-bold">Total à régler</span>
            <span className="font-bold text-red-600 dark:text-red-400">
              {formatCurrency(result.totalDue)}
            </span>
          </div>
        </div>

        <Separator />

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={copyToClipboard}
          >
            <IconCopy className="h-4 w-4 mr-2" />
            {copied ? "Copié !" : "Copier le résumé"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={copyEmail}
          >
            <IconMail className="h-4 w-4 mr-2" />
            Copier email de relance
          </Button>
        </div>

        {/* Legal Info */}
        <div className="text-xs text-muted-foreground bg-background/50 p-3 rounded-md">
          <p className="font-medium mb-1">Base légale :</p>
          <ul className="list-disc list-inside space-y-0.5">
            <li>Art. L441-10 Code de commerce (pénalités de retard)</li>
            <li>Art. D441-5 Code de commerce (indemnité 40€)</li>
            <li>
              Taux BCE + 10 points minimum, ou BCE × 3 si plus élevé
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export function PenaltyFormula() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <IconReceipt className="h-4 w-4" />
          Formule de calcul
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm space-y-3">
        <div className="bg-muted p-3 rounded-md font-mono text-xs">
          <p>Intérêts = Montant × (Taux / 365) × Jours de retard</p>
          <p className="mt-1">Total = Intérêts + Indemnité forfaitaire (40€)</p>
        </div>
        <p className="text-muted-foreground">
          Le taux légal est égal à 3 fois le taux directeur de la BCE, mis à
          jour chaque semestre. L&apos;indemnité forfaitaire de 40€ est due par
          facture, non par jour de retard.
        </p>
      </CardContent>
    </Card>
  );
}
