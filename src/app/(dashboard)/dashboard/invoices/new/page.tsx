"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  IconArrowLeft,
  IconPlus,
  IconTrash,
  IconLoader2,
  IconFileInvoice,
} from "@tabler/icons-react";
import Link from "next/link";

const invoiceItemSchema = z.object({
  description: z.string().min(1, "Description requise"),
  quantity: z.number().min(0.01, "Quantité invalide"),
  unitPrice: z.number().min(0, "Prix invalide"),
  tvaRate: z.number().min(0).max(100),
});

const invoiceSchema = z.object({
  clientId: z.string().min(1, "Client requis"),
  issueDate: z.string().min(1, "Date d'émission requise"),
  dueDate: z.string().min(1, "Date d'échéance requise"),
  paymentTerms: z.string().optional(),
  notes: z.string().optional(),
  items: z.array(invoiceItemSchema).min(1, "Au moins une ligne requise"),
});

type InvoiceForm = z.infer<typeof invoiceSchema>;

// Mock clients - will be replaced with Convex query
const clients = [
  { id: "1", name: "Acme Corp", email: "contact@acme.com" },
  { id: "2", name: "Tech Solutions", email: "info@techsolutions.fr" },
  { id: "3", name: "Digital Agency", email: "hello@digital.agency" },
  { id: "4", name: "Startup Inc", email: "finance@startup.io" },
];

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

export default function NewInvoicePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const today = new Date().toISOString().split("T")[0];
  const defaultDueDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<InvoiceForm>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      issueDate: today,
      dueDate: defaultDueDate,
      paymentTerms: "30 jours",
      items: [{ description: "", quantity: 1, unitPrice: 0, tvaRate: 20 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const items = watch("items");

  // Calculate totals
  const subtotal = items.reduce((sum, item) => {
    return sum + (item.quantity || 0) * (item.unitPrice || 0);
  }, 0);

  const tvaAmount = items.reduce((sum, item) => {
    const lineTotal = (item.quantity || 0) * (item.unitPrice || 0);
    return sum + lineTotal * ((item.tvaRate || 0) / 100);
  }, 0);

  const total = subtotal + tvaAmount;

  const onSubmit = async (data: InvoiceForm) => {
    setIsSubmitting(true);
    try {
      // TODO: Call Convex mutation
      console.log("Creating invoice:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/dashboard/invoices");
    } catch (error) {
      console.error("Error creating invoice:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard/invoices">
          <Button variant="ghost" size="icon">
            <IconArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nouvelle facture</h1>
          <p className="text-muted-foreground">
            Créez une facture conforme Factur-X
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Client selection */}
            <Card>
              <CardHeader>
                <CardTitle>Client</CardTitle>
                <CardDescription>Sélectionnez le client à facturer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="clientId">Client *</Label>
                    <Select
                      onValueChange={(value) => setValue("clientId", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un client" />
                      </SelectTrigger>
                      <SelectContent>
                        {clients.map((client) => (
                          <SelectItem key={client.id} value={client.id}>
                            <div className="flex flex-col">
                              <span>{client.name}</span>
                              <span className="text-xs text-muted-foreground">
                                {client.email}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.clientId && (
                      <p className="text-sm text-destructive">{errors.clientId.message}</p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="issueDate">Date d&apos;émission *</Label>
                      <Input
                        id="issueDate"
                        type="date"
                        {...register("issueDate")}
                      />
                      {errors.issueDate && (
                        <p className="text-sm text-destructive">{errors.issueDate.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dueDate">Date d&apos;échéance *</Label>
                      <Input
                        id="dueDate"
                        type="date"
                        {...register("dueDate")}
                      />
                      {errors.dueDate && (
                        <p className="text-sm text-destructive">{errors.dueDate.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Invoice items */}
            <Card>
              <CardHeader>
                <CardTitle>Lignes de facture</CardTitle>
                <CardDescription>Détaillez les prestations ou produits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {fields.map((field, index) => (
                  <div key={field.id} className="space-y-4 rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        Ligne {index + 1}
                      </span>
                      {fields.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive"
                          onClick={() => remove(index)}
                        >
                          <IconTrash className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>Description *</Label>
                      <Input
                        placeholder="Ex: Développement site web"
                        {...register(`items.${index}.description`)}
                      />
                      {errors.items?.[index]?.description && (
                        <p className="text-sm text-destructive">
                          {errors.items[index]?.description?.message}
                        </p>
                      )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-2">
                        <Label>Quantité *</Label>
                        <Input
                          type="number"
                          step="0.01"
                          min="0"
                          {...register(`items.${index}.quantity`, {
                            valueAsNumber: true,
                          })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Prix unitaire HT (€) *</Label>
                        <Input
                          type="number"
                          step="0.01"
                          min="0"
                          {...register(`items.${index}.unitPrice`, {
                            valueAsNumber: true,
                          })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>TVA (%)</Label>
                        <Select
                          defaultValue="20"
                          onValueChange={(value) =>
                            setValue(`items.${index}.tvaRate`, parseInt(value))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">0% (Exonéré)</SelectItem>
                            <SelectItem value="5.5">5,5%</SelectItem>
                            <SelectItem value="10">10%</SelectItem>
                            <SelectItem value="20">20% (Normal)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="text-right text-sm">
                      <span className="text-muted-foreground">Total ligne HT: </span>
                      <span className="font-medium">
                        {formatCurrency((items[index]?.quantity || 0) * (items[index]?.unitPrice || 0))}
                      </span>
                    </div>
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  className="w-full gap-2"
                  onClick={() =>
                    append({ description: "", quantity: 1, unitPrice: 0, tvaRate: 20 })
                  }
                >
                  <IconPlus className="h-4 w-4" />
                  Ajouter une ligne
                </Button>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Informations complémentaires</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="paymentTerms">Conditions de paiement</Label>
                  <Input
                    id="paymentTerms"
                    placeholder="Ex: 30 jours"
                    {...register("paymentTerms")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes (apparaît sur la facture)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Notes ou conditions particulières..."
                    rows={3}
                    {...register("notes")}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <IconFileInvoice className="h-5 w-5" />
                  Récapitulatif
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sous-total HT</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">TVA</span>
                  <span>{formatCurrency(tvaAmount)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium text-lg">
                  <span>Total TTC</span>
                  <span>{formatCurrency(total)}</span>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <IconLoader2 className="h-4 w-4 animate-spin" />
                        Création en cours...
                      </>
                    ) : (
                      "Créer la facture"
                    )}
                  </Button>
                  <Button type="button" variant="outline" className="w-full">
                    Enregistrer comme brouillon
                  </Button>
                </div>

                <p className="text-xs text-center text-muted-foreground">
                  La facture sera générée au format Factur-X conforme
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
