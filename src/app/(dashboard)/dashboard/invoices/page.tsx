"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  IconPlus,
  IconSearch,
  IconDotsVertical,
  IconEye,
  IconPencil,
  IconTrash,
  IconSend,
  IconFileInvoice,
  IconDownload,
} from "@tabler/icons-react";

// Mock data - will be replaced with Convex queries
const invoices = [
  { id: "1", number: "FAC-00024", client: "Acme Corp", clientEmail: "contact@acme.com", amount: 1200, status: "paid", issueDate: "2026-02-04", dueDate: "2026-03-04" },
  { id: "2", number: "FAC-00023", client: "Tech Solutions", clientEmail: "info@techsolutions.fr", amount: 850, status: "sent", issueDate: "2026-02-03", dueDate: "2026-03-03" },
  { id: "3", number: "FAC-00022", client: "Digital Agency", clientEmail: "hello@digital.agency", amount: 2100, status: "overdue", issueDate: "2026-01-28", dueDate: "2026-02-28" },
  { id: "4", number: "FAC-00021", client: "Startup Inc", clientEmail: "finance@startup.io", amount: 650, status: "paid", issueDate: "2026-01-25", dueDate: "2026-02-25" },
  { id: "5", number: "FAC-00020", client: "Creative Studio", clientEmail: "admin@creative.studio", amount: 3200, status: "draft", issueDate: "2026-02-05", dueDate: "2026-03-05" },
];

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
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
    case "cancelled":
      return <Badge variant="outline" className="text-muted-foreground">Annulée</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
}

export default function InvoicesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.number.toLowerCase().includes(search.toLowerCase()) ||
      invoice.client.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Factures</h1>
          <p className="text-muted-foreground">
            Gérez vos factures et suivez les paiements
          </p>
        </div>
        <Link href="/dashboard/invoices/new">
          <Button className="gap-2">
            <IconPlus className="h-4 w-4" />
            Nouvelle facture
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher par numéro ou client..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="draft">Brouillon</SelectItem>
                <SelectItem value="sent">Envoyée</SelectItem>
                <SelectItem value="paid">Payée</SelectItem>
                <SelectItem value="overdue">En retard</SelectItem>
                <SelectItem value="cancelled">Annulée</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Liste des factures</CardTitle>
          <CardDescription>
            {filteredInvoices.length} facture{filteredInvoices.length > 1 ? "s" : ""} trouvée{filteredInvoices.length > 1 ? "s" : ""}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Numéro</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Échéance</TableHead>
                <TableHead className="text-right">Montant</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvoices.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    <div className="flex flex-col items-center gap-2">
                      <IconFileInvoice className="h-12 w-12 text-muted-foreground/50" />
                      <p className="text-muted-foreground">Aucune facture trouvée</p>
                      <Link href="/dashboard/invoices/new">
                        <Button variant="outline" size="sm" className="mt-2">
                          Créer votre première facture
                        </Button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredInvoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.number}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{invoice.client}</p>
                        <p className="text-sm text-muted-foreground">{invoice.clientEmail}</p>
                      </div>
                    </TableCell>
                    <TableCell>{formatDate(invoice.issueDate)}</TableCell>
                    <TableCell>{formatDate(invoice.dueDate)}</TableCell>
                    <TableCell className="text-right font-medium">
                      {formatCurrency(invoice.amount)}
                    </TableCell>
                    <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <IconDotsVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="gap-2">
                            <IconEye className="h-4 w-4" />
                            Voir
                          </DropdownMenuItem>
                          {invoice.status === "draft" && (
                            <DropdownMenuItem className="gap-2">
                              <IconPencil className="h-4 w-4" />
                              Modifier
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="gap-2">
                            <IconDownload className="h-4 w-4" />
                            Télécharger PDF
                          </DropdownMenuItem>
                          {invoice.status === "draft" && (
                            <DropdownMenuItem className="gap-2">
                              <IconSend className="h-4 w-4" />
                              Envoyer
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          {invoice.status === "draft" && (
                            <DropdownMenuItem className="gap-2 text-destructive">
                              <IconTrash className="h-4 w-4" />
                              Supprimer
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
