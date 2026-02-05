"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  IconCurrencyEuro,
  IconClock,
  IconAlertTriangle,
  IconFileInvoice,
  IconPlus,
  IconArrowUpRight,
  IconArrowDownRight,
  IconTrendingUp,
} from "@tabler/icons-react";

// Mock data - will be replaced with Convex queries
const stats = {
  totalRevenue: 12450,
  pendingAmount: 3200,
  overdueAmount: 850,
  recentRevenue: 4500,
  totalInvoices: 24,
  paidInvoices: 18,
  pendingInvoices: 5,
  draftInvoices: 1,
};

const recentInvoices = [
  { id: "1", number: "FAC-00024", client: "Acme Corp", amount: 1200, status: "paid", date: "2026-02-04" },
  { id: "2", number: "FAC-00023", client: "Tech Solutions", amount: 850, status: "sent", date: "2026-02-03" },
  { id: "3", number: "FAC-00022", client: "Digital Agency", amount: 2100, status: "overdue", date: "2026-01-28" },
  { id: "4", number: "FAC-00021", client: "Startup Inc", amount: 650, status: "paid", date: "2026-01-25" },
];

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

function getStatusBadge(status: string) {
  switch (status) {
    case "paid":
      return <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Payée</Badge>;
    case "sent":
      return <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Envoyée</Badge>;
    case "overdue":
      return <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">En retard</Badge>;
    case "draft":
      return <Badge variant="secondary">Brouillon</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
          <p className="text-muted-foreground">
            Vue d&apos;ensemble de votre activité
          </p>
        </div>
        <Link href="/dashboard/invoices/new">
          <Button className="gap-2">
            <IconPlus className="h-4 w-4" />
            Nouvelle facture
          </Button>
        </Link>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Chiffre d&apos;affaires total
            </CardTitle>
            <IconCurrencyEuro className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats.totalRevenue)}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <IconArrowUpRight className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+12%</span> vs mois dernier
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              En attente de paiement
            </CardTitle>
            <IconClock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats.pendingAmount)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.pendingInvoices} facture{stats.pendingInvoices > 1 ? "s" : ""} en attente
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Montant en retard
            </CardTitle>
            <IconAlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{formatCurrency(stats.overdueAmount)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              À relancer rapidement
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Ce mois-ci
            </CardTitle>
            <IconTrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(stats.recentRevenue)}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <IconArrowUpRight className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+8%</span> vs mois dernier
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent invoices & Quick actions */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent invoices */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Factures récentes</CardTitle>
                <CardDescription>Vos dernières factures créées</CardDescription>
              </div>
              <Link href="/dashboard/invoices">
                <Button variant="outline" size="sm">
                  Voir tout
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentInvoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <IconFileInvoice className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{invoice.number}</p>
                      <p className="text-sm text-muted-foreground">{invoice.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-medium">{formatCurrency(invoice.amount)}</p>
                      <p className="text-xs text-muted-foreground">{invoice.date}</p>
                    </div>
                    {getStatusBadge(invoice.status)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick actions */}
        <Card>
          <CardHeader>
            <CardTitle>Actions rapides</CardTitle>
            <CardDescription>Accédez rapidement aux fonctionnalités</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/dashboard/invoices/new" className="block">
              <Button variant="outline" className="w-full justify-start gap-3">
                <IconFileInvoice className="h-4 w-4" />
                Créer une facture
              </Button>
            </Link>
            <Link href="/dashboard/quotes/new" className="block">
              <Button variant="outline" className="w-full justify-start gap-3">
                <IconFileInvoice className="h-4 w-4" />
                Créer un devis
              </Button>
            </Link>
            <Link href="/dashboard/clients/new" className="block">
              <Button variant="outline" className="w-full justify-start gap-3">
                <IconPlus className="h-4 w-4" />
                Ajouter un client
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Compliance banner */}
      <Card className="border-amber-200 bg-amber-50 dark:border-amber-900/50 dark:bg-amber-900/10">
        <CardContent className="flex items-center gap-4 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
            <IconAlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-amber-800 dark:text-amber-200">
              Préparez-vous pour septembre 2026
            </p>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              Vos factures sont conformes Factur-X. Pensez à vérifier vos paramètres avant l&apos;échéance.
            </p>
          </div>
          <Link href="/dashboard/settings">
            <Button variant="outline" size="sm" className="border-amber-300 text-amber-700 hover:bg-amber-100 dark:border-amber-700 dark:text-amber-300 dark:hover:bg-amber-900/30">
              Vérifier
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
