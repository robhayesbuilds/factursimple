"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  penaltyFormSchema,
  type PenaltyFormValues,
  LEGAL_PENALTY_RATE,
  BCE_RATE,
} from "@/lib/validations/penalty";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconInfoCircle, IconCalculator } from "@tabler/icons-react";

interface PenaltyFormProps {
  onCalculate: (values: PenaltyFormValues) => void;
}

export function PenaltyForm({ onCalculate }: PenaltyFormProps) {
  const form = useForm<PenaltyFormValues>({
    resolver: zodResolver(penaltyFormSchema),
    defaultValues: {
      invoiceAmount: 0,
      invoiceDate: "",
      dueDate: "",
      paymentDate: new Date().toISOString().split("T")[0],
      customRate: undefined,
      includeRecoveryFee: true,
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const watchInvoiceDate = watch("invoiceDate");
  const watchCustomRate = watch("customRate");
  const watchIncludeRecoveryFee = watch("includeRecoveryFee");

  // Auto-calculate due date (30 days from invoice date)
  const handleInvoiceDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const invoiceDate = e.target.value;
    if (invoiceDate) {
      const date = new Date(invoiceDate);
      date.setDate(date.getDate() + 30);
      setValue("dueDate", date.toISOString().split("T")[0]);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <IconCalculator className="h-5 w-5" />
          Calcul des pénalités
        </CardTitle>
        <CardDescription>
          Renseignez les informations de votre facture impayée
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onCalculate)} className="space-y-4">
          {/* Invoice Amount */}
          <div className="space-y-2">
            <Label htmlFor="invoiceAmount">Montant TTC de la facture (€)</Label>
            <Input
              id="invoiceAmount"
              type="number"
              step="0.01"
              min="0"
              placeholder="1500.00"
              {...register("invoiceAmount", { valueAsNumber: true })}
            />
            {errors.invoiceAmount && (
              <p className="text-sm text-red-500">
                {errors.invoiceAmount.message}
              </p>
            )}
          </div>

          {/* Invoice Date */}
          <div className="space-y-2">
            <Label htmlFor="invoiceDate">Date de la facture</Label>
            <Input
              id="invoiceDate"
              type="date"
              {...register("invoiceDate")}
              onChange={(e) => {
                register("invoiceDate").onChange(e);
                handleInvoiceDateChange(e);
              }}
            />
            {errors.invoiceDate && (
              <p className="text-sm text-red-500">
                {errors.invoiceDate.message}
              </p>
            )}
          </div>

          {/* Due Date */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="dueDate">Date d&apos;échéance</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <IconInfoCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Par défaut : 30 jours après la date de facture.
                      <br />
                      Modifiable selon vos CGV.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input id="dueDate" type="date" {...register("dueDate")} />
            {errors.dueDate && (
              <p className="text-sm text-red-500">{errors.dueDate.message}</p>
            )}
          </div>

          {/* Payment/Calculation Date */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="paymentDate">
                Date de calcul / paiement effectif
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <IconInfoCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Date à laquelle vous calculez les pénalités.
                      <br />
                      Par défaut : aujourd&apos;hui.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input id="paymentDate" type="date" {...register("paymentDate")} />
          </div>

          {/* Custom Rate */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="customRate">
                Taux personnalisé (%) - Optionnel
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <IconInfoCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>
                      Taux légal actuel : <strong>{LEGAL_PENALTY_RATE}%</strong>
                      <br />
                      (BCE {BCE_RATE}% × 3)
                      <br />
                      <br />
                      Vous pouvez spécifier un taux supérieur
                      <br />
                      si mentionné dans vos CGV.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="customRate"
              type="number"
              step="0.01"
              min="0"
              max="100"
              placeholder={`${LEGAL_PENALTY_RATE} (taux légal)`}
              {...register("customRate", { valueAsNumber: true })}
            />
            {watchCustomRate === undefined && (
              <p className="text-xs text-muted-foreground">
                Taux légal appliqué : {LEGAL_PENALTY_RATE}% (BCE × 3)
              </p>
            )}
          </div>

          {/* Recovery Fee Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="includeRecoveryFee"
              checked={watchIncludeRecoveryFee}
              onCheckedChange={(checked) =>
                setValue("includeRecoveryFee", checked === true)
              }
            />
            <div className="flex items-center gap-2">
              <Label htmlFor="includeRecoveryFee" className="cursor-pointer">
                Inclure l&apos;indemnité forfaitaire de recouvrement (40€)
              </Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <IconInfoCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>
                      Obligatoire entre professionnels (B2B).
                      <br />
                      40€ par facture impayée (art. D441-5 Code commerce).
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <Button type="submit" className="w-full">
            <IconCalculator className="h-4 w-4 mr-2" />
            Calculer les pénalités
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
