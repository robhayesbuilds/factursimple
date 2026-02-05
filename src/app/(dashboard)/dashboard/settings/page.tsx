"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  IconUser,
  IconBuilding,
  IconFileInvoice,
  IconPalette,
  IconShieldCheck,
  IconCheck,
  IconAlertCircle,
} from "@tabler/icons-react";
import { ThemeToggle } from "@/components/theme-toggle";

// Mock data - will be replaced with Convex
const companyData = {
  name: "Mon Auto-Entreprise",
  siret: "123 456 789 00010",
  email: "contact@example.com",
  phone: "06 12 34 56 78",
  address: "12 rue de la Paix\n75002 Paris",
  vatNumber: "",
  isVatExempt: true,
};

const invoiceSettings = {
  prefix: "FAC-",
  nextNumber: 25,
  defaultPaymentTerms: "30",
  bankName: "Ma Banque",
  iban: "FR76 1234 5678 9012 3456 7890 123",
  bic: "BNPAFRPP",
  footer: "Dispensé d'immatriculation au registre du commerce et des sociétés (RCS) et au répertoire des métiers (RM)",
};

const complianceStatus = {
  facturXReady: true,
  eReportingReady: false,
  pdpConnected: false,
  lastCheck: "2026-02-04",
};

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Paramètres</h1>
        <p className="text-muted-foreground">
          Configurez votre compte et vos préférences de facturation
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Company Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconBuilding className="h-5 w-5" />
              Informations entreprise
            </CardTitle>
            <CardDescription>
              Ces informations apparaîtront sur vos factures
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Nom de l&apos;entreprise</Label>
              <Input
                id="companyName"
                defaultValue={companyData.name}
                placeholder="Mon Auto-Entreprise"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="siret">Numéro SIRET</Label>
              <Input
                id="siret"
                defaultValue={companyData.siret}
                placeholder="123 456 789 00010"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={companyData.email}
                  placeholder="contact@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  defaultValue={companyData.phone}
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Adresse complète</Label>
              <Textarea
                id="address"
                defaultValue={companyData.address}
                placeholder="12 rue de la Paix&#10;75002 Paris"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vatNumber">Numéro de TVA (si applicable)</Label>
              <Input
                id="vatNumber"
                defaultValue={companyData.vatNumber}
                placeholder="FR12 123456789"
              />
              <p className="text-xs text-muted-foreground">
                Laissez vide si vous êtes en franchise de TVA
              </p>
            </div>
            <Button className="w-full sm:w-auto">
              Enregistrer les modifications
            </Button>
          </CardContent>
        </Card>

        {/* Invoice Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconFileInvoice className="h-5 w-5" />
              Paramètres de facturation
            </CardTitle>
            <CardDescription>
              Personnalisez vos factures et conditions de paiement
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="prefix">Préfixe de numérotation</Label>
                <Input
                  id="prefix"
                  defaultValue={invoiceSettings.prefix}
                  placeholder="FAC-"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nextNumber">Prochain numéro</Label>
                <Input
                  id="nextNumber"
                  type="number"
                  defaultValue={invoiceSettings.nextNumber}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="paymentTerms">Délai de paiement par défaut</Label>
              <Select defaultValue={invoiceSettings.defaultPaymentTerms}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner un délai" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">À réception</SelectItem>
                  <SelectItem value="7">7 jours</SelectItem>
                  <SelectItem value="15">15 jours</SelectItem>
                  <SelectItem value="30">30 jours</SelectItem>
                  <SelectItem value="45">45 jours</SelectItem>
                  <SelectItem value="60">60 jours fin de mois</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label className="text-base font-medium">Coordonnées bancaires</Label>
              <p className="text-sm text-muted-foreground">
                Pour les paiements par virement
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bankName">Nom de la banque</Label>
              <Input
                id="bankName"
                defaultValue={invoiceSettings.bankName}
                placeholder="Ma Banque"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="iban">IBAN</Label>
              <Input
                id="iban"
                defaultValue={invoiceSettings.iban}
                placeholder="FR76 1234 5678 9012 3456 7890 123"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bic">BIC</Label>
              <Input
                id="bic"
                defaultValue={invoiceSettings.bic}
                placeholder="BNPAFRPP"
              />
            </div>
            <Button className="w-full sm:w-auto">
              Enregistrer les modifications
            </Button>
          </CardContent>
        </Card>

        {/* Compliance Status */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconShieldCheck className="h-5 w-5" />
              Conformité 2026
            </CardTitle>
            <CardDescription>
              Statut de votre conformité à la réforme de facturation électronique
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-3 rounded-lg border p-4">
                <div className={`mt-0.5 rounded-full p-1 ${complianceStatus.facturXReady ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                  {complianceStatus.facturXReady ? (
                    <IconCheck className="h-4 w-4" />
                  ) : (
                    <IconAlertCircle className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <p className="font-medium">Format Factur-X</p>
                  <p className="text-sm text-muted-foreground">
                    {complianceStatus.facturXReady
                      ? "Vos factures sont au format Factur-X"
                      : "Configuration requise"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border p-4">
                <div className={`mt-0.5 rounded-full p-1 ${complianceStatus.eReportingReady ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                  {complianceStatus.eReportingReady ? (
                    <IconCheck className="h-4 w-4" />
                  ) : (
                    <IconAlertCircle className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <p className="font-medium">E-Reporting</p>
                  <p className="text-sm text-muted-foreground">
                    {complianceStatus.eReportingReady
                      ? "E-reporting automatique activé"
                      : "À configurer avant sept. 2026"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border p-4">
                <div className={`mt-0.5 rounded-full p-1 ${complianceStatus.pdpConnected ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                  {complianceStatus.pdpConnected ? (
                    <IconCheck className="h-4 w-4" />
                  ) : (
                    <IconAlertCircle className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <p className="font-medium">Plateforme PDP</p>
                  <p className="text-sm text-muted-foreground">
                    {complianceStatus.pdpConnected
                      ? "Connecté à une plateforme agréée"
                      : "Connexion disponible bientôt"}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-muted p-4">
              <p className="text-sm">
                <span className="font-medium">Échéance :</span> À partir du 1er septembre 2026, vous devrez être en mesure de recevoir des factures électroniques. 
                FacturSimple gère automatiquement la conformité Factur-X pour toutes vos factures émises.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconPalette className="h-5 w-5" />
              Apparence
            </CardTitle>
            <CardDescription>
              Personnalisez l&apos;interface
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Thème</p>
                <p className="text-sm text-muted-foreground">
                  Choisissez entre le mode clair et sombre
                </p>
              </div>
              <ThemeToggle />
            </div>
          </CardContent>
        </Card>

        {/* Account */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconUser className="h-5 w-5" />
              Compte
            </CardTitle>
            <CardDescription>
              Gérez votre abonnement
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Plan actuel</p>
                <p className="text-sm text-muted-foreground">
                  Factures illimitées, support prioritaire
                </p>
              </div>
              <Badge className="bg-primary">Pro</Badge>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Période de facturation</p>
                <p className="text-sm text-muted-foreground">
                  Renouvellement le 1er mars 2026
                </p>
              </div>
              <p className="font-medium">19€/mois</p>
            </div>
            <Button variant="outline" className="w-full">
              Gérer l&apos;abonnement
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
