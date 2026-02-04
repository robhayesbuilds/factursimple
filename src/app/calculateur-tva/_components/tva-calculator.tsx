"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  IconCalculator,
  IconCheck,
  IconAlertTriangle,
  IconX,
  IconCopy,
  IconInfoCircle,
} from "@tabler/icons-react";
import { tvaFormSchema, TVAFormData, TVAResult, calculateTVAStatus, SEUILS_TVA } from "@/lib/validations/tva";
import { cn } from "@/lib/utils";

export function TVACalculator() {
  const [result, setResult] = useState<TVAResult | null>(null);
  const [copied, setCopied] = useState(false);

  const form = useForm<TVAFormData>({
    resolver: zodResolver(tvaFormSchema),
    defaultValues: {
      activityType: "service",
      chiffreAffaireVente: 0,
      chiffreAffaireService: 0,
      annee: "2026",
      moisActuel: new Date().getMonth() + 1,
    },
  });

  const activityType = form.watch("activityType");

  function onSubmit(data: TVAFormData) {
    const result = calculateTVAStatus(data);
    setResult(result);
  }

  function copyMention() {
    if (result?.mentionFacture) {
      navigator.clipboard.writeText(result.mentionFacture);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "franchise":
        return <IconCheck className="h-6 w-6 text-green-600" />;
      case "prochain":
        return <IconAlertTriangle className="h-6 w-6 text-amber-600" />;
      case "assujetti":
        return <IconX className="h-6 w-6 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "franchise":
        return "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800";
      case "prochain":
        return "bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800";
      case "assujetti":
        return "bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-8">
      {/* Thresholds Reference Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <IconInfoCircle className="h-5 w-5 text-blue-600" />
            Seuils TVA 2026
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted">
              <h4 className="font-medium mb-2">Vente de marchandises</h4>
              <p className="text-sm text-muted-foreground">
                Franchise : <span className="font-semibold">{SEUILS_TVA.vente.franchise.toLocaleString("fr-FR")} €</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Majoré : <span className="font-semibold">{SEUILS_TVA.vente.majore.toLocaleString("fr-FR")} €</span>
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <h4 className="font-medium mb-2">Prestations de services</h4>
              <p className="text-sm text-muted-foreground">
                Franchise : <span className="font-semibold">{SEUILS_TVA.service.franchise.toLocaleString("fr-FR")} €</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Majoré : <span className="font-semibold">{SEUILS_TVA.service.majore.toLocaleString("fr-FR")} €</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calculator Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IconCalculator className="h-5 w-5" />
            Calculez votre situation TVA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="activityType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type d&apos;activité</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisissez votre activité" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="service">Prestations de services</SelectItem>
                          <SelectItem value="vente">Vente de marchandises</SelectItem>
                          <SelectItem value="mixte">Activité mixte</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Le seuil varie selon votre activité principale
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="annee"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Année</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2026">2026</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {(activityType === "service" || activityType === "mixte") && (
                  <FormField
                    control={form.control}
                    name="chiffreAffaireService"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CA Prestations de services (€)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormDescription>
                          Chiffre d&apos;affaires HT depuis le début de l&apos;année
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {(activityType === "vente" || activityType === "mixte") && (
                  <FormField
                    control={form.control}
                    name="chiffreAffaireVente"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CA Vente de marchandises (€)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormDescription>
                          Chiffre d&apos;affaires HT depuis le début de l&apos;année
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>

              <FormField
                control={form.control}
                name="moisActuel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mois actuel</FormLabel>
                    <Select
                      onValueChange={(v) => field.onChange(Number(v))}
                      defaultValue={String(field.value)}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full md:w-[200px]">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[
                          "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                          "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
                        ].map((mois, i) => (
                          <SelectItem key={i + 1} value={String(i + 1)}>
                            {mois}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Pour calculer votre CA annualisé estimé
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full md:w-auto">
                <IconCalculator className="h-4 w-4 mr-2" />
                Calculer ma situation TVA
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <Card className={cn("border-2", getStatusColor(result.status))}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              {getStatusIcon(result.status)}
              {result.message}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Details */}
            <div className="space-y-2">
              {result.details.map((detail, i) => (
                <p key={i} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-muted-foreground/50">•</span>
                  {detail}
                </p>
              ))}
            </div>

            {/* Progress bar for franchise */}
            {result.status === "franchise" && result.prorataCa && result.seuilProrata && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progression vers le seuil</span>
                  <span className="font-medium">
                    {((result.prorataCa / result.seuilProrata) * 100).toFixed(0)}%
                  </span>
                </div>
                <Progress
                  value={(result.prorataCa / result.seuilProrata) * 100}
                  className="h-3"
                />
              </div>
            )}

            <Separator />

            {/* Recommendation */}
            <div className="p-4 rounded-lg bg-muted">
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <IconAlertTriangle className="h-4 w-4" />
                Recommandation
              </h4>
              <p className="text-sm text-muted-foreground">{result.recommendation}</p>
            </div>

            {/* Invoice mention */}
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <h4 className="font-medium mb-2">Mention à ajouter sur vos factures</h4>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-sm bg-background p-2 rounded border">
                  {result.mentionFacture}
                </code>
                <Button variant="outline" size="sm" onClick={copyMention}>
                  {copied ? (
                    <IconCheck className="h-4 w-4" />
                  ) : (
                    <IconCopy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex justify-center">
              <Badge
                variant={
                  result.status === "franchise"
                    ? "default"
                    : result.status === "prochain"
                    ? "secondary"
                    : "destructive"
                }
                className="text-lg px-4 py-2"
              >
                {result.status === "franchise" && "✓ Franchise TVA"}
                {result.status === "prochain" && "⚠ Seuil dépassé (1ère année)"}
                {result.status === "assujetti" && "✗ Assujetti TVA"}
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
