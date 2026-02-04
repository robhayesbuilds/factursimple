"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IconCurrencyEuro,
  IconClock,
  IconArrowRight,
  IconCheck,
  IconX,
  IconCalculator,
  IconPigMoney,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  savingsSchema,
  type SavingsInput,
  type SavingsResult,
  calculateSavings,
  formatCurrency,
  competitorPricing,
  factursimplePricing,
} from "@/lib/validations/savings";

export function SavingsCalculator() {
  const [result, setResult] = useState<SavingsResult | null>(null);

  const form = useForm<SavingsInput>({
    resolver: zodResolver(savingsSchema),
    defaultValues: {
      currentTool: "pennylane",
      invoicesPerMonth: 10,
      hoursOnAdmin: 4,
    },
  });

  const currentTool = form.watch("currentTool");
  const competitor = currentTool ? competitorPricing[currentTool] : null;

  function onSubmit(data: SavingsInput) {
    const savings = calculateSavings(data);
    setResult(savings);
  }

  return (
    <div className="space-y-8">
      {/* Calculator Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconCalculator className="h-5 w-5" />
            Vos informations
          </CardTitle>
          <CardDescription>
            Comparez votre solution actuelle avec FacturSimple
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Current Tool Selection */}
              <FormField
                control={form.control}
                name="currentTool"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Outil actuel de facturation</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre outil" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.entries(competitorPricing).map(([key, value]) => (
                          <SelectItem key={key} value={key}>
                            {value.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {competitor && (
                      <FormDescription>{competitor.notes}</FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Monthly Price */}
              <FormField
                control={form.control}
                name="monthlyPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre tarif mensuel actuel (€)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <IconCurrencyEuro className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          type="number"
                          placeholder={
                            competitor
                              ? `${competitor.monthlyMin}-${competitor.monthlyMax}€`
                              : "Ex: 20"
                          }
                          className="pl-10"
                          {...field}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value ? Number(e.target.value) : undefined
                            )
                          }
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Laissez vide pour utiliser le prix moyen
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Invoices per month */}
              <FormField
                control={form.control}
                name="invoicesPerMonth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Factures par mois</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={1}
                        max={1000}
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription>
                      Nombre moyen de factures émises par mois
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Hours on admin */}
              <FormField
                control={form.control}
                name="hoursOnAdmin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <IconClock className="h-4 w-4" />
                      Heures d&apos;admin/mois
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        max={100}
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription>
                      Temps passé sur la facturation et relances
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" size="lg">
                Calculer mes économies
                <IconArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Main savings card */}
          <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                <IconPigMoney className="h-6 w-6" />
                Vos économies potentielles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Total savings highlight */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Économie totale annuelle (argent + temps)
                </p>
                <p className="text-5xl font-bold text-green-600 dark:text-green-400">
                  {formatCurrency(result.totalValue)}
                </p>
              </div>

              <Separator />

              {/* Breakdown */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Économie sur l&apos;abonnement</p>
                  <p className="text-2xl font-semibold">
                    {formatCurrency(result.yearlySavings)}/an
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {result.competitorName}: {formatCurrency(result.currentYearlyCost)}/an
                    <br />
                    FacturSimple: {formatCurrency(result.factursimpleYearlyCost)}/an
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Temps gagné</p>
                  <p className="text-2xl font-semibold">
                    {result.hoursSaved.toFixed(0)} heures/an
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Valeur estimée à 25€/h = {formatCurrency(result.timeSavingsValue)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommended plan */}
          <Card>
            <CardHeader>
              <CardTitle>Plan recommandé</CardTitle>
              <CardDescription>
                Basé sur {form.getValues("invoicesPerMonth")} factures/mois
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {/* Free plan */}
                <div
                  className={`rounded-lg border p-4 ${
                    result.recommendation === "free"
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : "opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Gratuit</h4>
                    {result.recommendation === "free" && (
                      <Badge variant="default" className="bg-green-600">
                        Recommandé
                      </Badge>
                    )}
                  </div>
                  <p className="text-2xl font-bold mb-2">0€</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-1">
                      <IconCheck className="h-3 w-3 text-green-600" />
                      5 factures/mois
                    </li>
                    <li className="flex items-center gap-1">
                      <IconCheck className="h-3 w-3 text-green-600" />
                      Conforme 2026
                    </li>
                    <li className="flex items-center gap-1">
                      <IconX className="h-3 w-3 text-red-600" />
                      Relances auto
                    </li>
                  </ul>
                </div>

                {/* Starter plan */}
                <div
                  className={`rounded-lg border p-4 ${
                    result.recommendation === "starter"
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : "opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Starter</h4>
                    {result.recommendation === "starter" && (
                      <Badge variant="default" className="bg-green-600">
                        Recommandé
                      </Badge>
                    )}
                  </div>
                  <p className="text-2xl font-bold mb-2">9€/mois</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-1">
                      <IconCheck className="h-3 w-3 text-green-600" />
                      50 factures/mois
                    </li>
                    <li className="flex items-center gap-1">
                      <IconCheck className="h-3 w-3 text-green-600" />
                      Conforme 2026
                    </li>
                    <li className="flex items-center gap-1">
                      <IconCheck className="h-3 w-3 text-green-600" />
                      Relances auto
                    </li>
                  </ul>
                </div>

                {/* Pro plan */}
                <div
                  className={`rounded-lg border p-4 ${
                    result.recommendation === "pro"
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : "opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Pro</h4>
                    {result.recommendation === "pro" && (
                      <Badge variant="default" className="bg-green-600">
                        Recommandé
                      </Badge>
                    )}
                  </div>
                  <p className="text-2xl font-bold mb-2">19€/mois</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-1">
                      <IconCheck className="h-3 w-3 text-green-600" />
                      Factures illimitées
                    </li>
                    <li className="flex items-center gap-1">
                      <IconCheck className="h-3 w-3 text-green-600" />
                      Conforme 2026
                    </li>
                    <li className="flex items-center gap-1">
                      <IconCheck className="h-3 w-3 text-green-600" />
                      Relances + API
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparison table */}
          <Card>
            <CardHeader>
              <CardTitle>Comparatif détaillé</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left">Critère</th>
                      <th className="py-3 text-center">{result.competitorName}</th>
                      <th className="py-3 text-center bg-blue-50 dark:bg-blue-950">
                        FacturSimple
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3">Prix mensuel</td>
                      <td className="py-3 text-center">
                        {formatCurrency(result.currentYearlyCost / 12)}
                      </td>
                      <td className="py-3 text-center bg-blue-50 dark:bg-blue-950 font-semibold text-green-600">
                        {formatCurrency(result.factursimpleYearlyCost / 12)}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">Conforme Sept 2026</td>
                      <td className="py-3 text-center">
                        <IconCheck className="h-4 w-4 text-green-600 mx-auto" />
                      </td>
                      <td className="py-3 text-center bg-blue-50 dark:bg-blue-950">
                        <IconCheck className="h-4 w-4 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">Format Factur-X</td>
                      <td className="py-3 text-center">
                        {currentTool === "excel" ? (
                          <IconX className="h-4 w-4 text-red-600 mx-auto" />
                        ) : (
                          <IconCheck className="h-4 w-4 text-green-600 mx-auto" />
                        )}
                      </td>
                      <td className="py-3 text-center bg-blue-50 dark:bg-blue-950">
                        <IconCheck className="h-4 w-4 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">Simplicité</td>
                      <td className="py-3 text-center">⭐⭐⭐</td>
                      <td className="py-3 text-center bg-blue-50 dark:bg-blue-950">
                        ⭐⭐⭐⭐⭐
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3">Support francophone</td>
                      <td className="py-3 text-center">
                        <IconCheck className="h-4 w-4 text-green-600 mx-auto" />
                      </td>
                      <td className="py-3 text-center bg-blue-50 dark:bg-blue-950">
                        <IconCheck className="h-4 w-4 text-green-600 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center space-y-4">
            <p className="text-lg">
              Prêt à économiser <span className="font-bold text-green-600">{formatCurrency(result.totalValue)}</span> par an ?
            </p>
            <Button size="lg" asChild>
              <a href="/#waitlist">
                Rejoindre la liste d&apos;attente
                <IconArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
