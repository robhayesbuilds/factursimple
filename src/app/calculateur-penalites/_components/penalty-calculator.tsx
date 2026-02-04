"use client";

import { useState } from "react";
import { PenaltyForm } from "./penalty-form";
import { PenaltyResult, PenaltyFormula } from "./penalty-result";
import {
  type PenaltyFormValues,
  type PenaltyCalculation,
  calculatePenalty,
} from "@/lib/validations/penalty";

export function PenaltyCalculator() {
  const [result, setResult] = useState<PenaltyCalculation | null>(null);

  const handleCalculate = (values: PenaltyFormValues) => {
    const calculation = calculatePenalty(values);
    setResult(calculation);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <PenaltyForm onCalculate={handleCalculate} />
        <PenaltyFormula />
      </div>
      <div>
        {result ? (
          <PenaltyResult result={result} />
        ) : (
          <div className="h-full flex items-center justify-center bg-muted/30 rounded-lg p-8 border-2 border-dashed">
            <div className="text-center text-muted-foreground">
              <p className="text-lg font-medium">Résultat du calcul</p>
              <p className="text-sm mt-1">
                Remplissez le formulaire pour calculer les pénalités
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
