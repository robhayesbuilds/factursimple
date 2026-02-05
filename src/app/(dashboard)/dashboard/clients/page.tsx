"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
  IconPencil,
  IconTrash,
  IconFileInvoice,
  IconUsers,
  IconMail,
  IconPhone,
  IconBuilding,
} from "@tabler/icons-react";

// Mock data - will be replaced with Convex queries
const clients = [
  {
    id: "1",
    name: "Acme Corp",
    email: "contact@acme.com",
    phone: "+33 1 23 45 67 89",
    companyName: "Acme Corporation",
    siret: "123 456 789 00012",
    address: "123 Rue de Paris, 75001 Paris",
    totalInvoices: 5,
    totalRevenue: 12500,
  },
  {
    id: "2",
    name: "Tech Solutions",
    email: "info@techsolutions.fr",
    phone: "+33 6 12 34 56 78",
    companyName: "Tech Solutions SAS",
    siret: "987 654 321 00034",
    address: "45 Avenue des Champs-Élysées, 75008 Paris",
    totalInvoices: 3,
    totalRevenue: 8500,
  },
  {
    id: "3",
    name: "Digital Agency",
    email: "hello@digital.agency",
    phone: "+33 1 98 76 54 32",
    companyName: "Digital Agency SARL",
    siret: "456 789 123 00056",
    address: "78 Rue du Commerce, 69001 Lyon",
    totalInvoices: 8,
    totalRevenue: 24000,
  },
];

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function ClientsPage() {
  const [search, setSearch] = useState("");

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(search.toLowerCase()) ||
      client.email.toLowerCase().includes(search.toLowerCase()) ||
      client.companyName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
          <p className="text-muted-foreground">
            Gérez votre carnet de clients
          </p>
        </div>
        <Link href="/dashboard/clients/new">
          <Button className="gap-2">
            <IconPlus className="h-4 w-4" />
            Nouveau client
          </Button>
        </Link>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Rechercher par nom, email ou entreprise..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Clients grid */}
      {filteredClients.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <IconUsers className="h-12 w-12 text-muted-foreground/50" />
            <p className="mt-4 text-muted-foreground">Aucun client trouvé</p>
            <Link href="/dashboard/clients/new">
              <Button variant="outline" className="mt-4">
                Ajouter votre premier client
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredClients.map((client) => (
            <Card key={client.id} className="transition-all hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {getInitials(client.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{client.name}</CardTitle>
                      {client.companyName && (
                        <CardDescription className="flex items-center gap-1">
                          <IconBuilding className="h-3 w-3" />
                          {client.companyName}
                        </CardDescription>
                      )}
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <IconDotsVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2">
                        <IconFileInvoice className="h-4 w-4" />
                        Créer une facture
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <IconPencil className="h-4 w-4" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="gap-2 text-destructive">
                        <IconTrash className="h-4 w-4" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <IconMail className="h-4 w-4" />
                    <span>{client.email}</span>
                  </div>
                  {client.phone && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <IconPhone className="h-4 w-4" />
                      <span>{client.phone}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{client.totalInvoices}</p>
                    <p className="text-xs text-muted-foreground">factures</p>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-center">
                    <p className="text-lg font-semibold">{formatCurrency(client.totalRevenue)}</p>
                    <p className="text-xs text-muted-foreground">CA total</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
