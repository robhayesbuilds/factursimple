import { IconFileInvoice } from "@tabler/icons-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-sm">
          <Link href="/" className="flex items-center justify-center gap-2 mb-8">
            <IconFileInvoice className="h-10 w-10 text-primary" />
            <span className="text-2xl font-bold">FacturSimple</span>
          </Link>
          {children}
        </div>
      </div>

      {/* Right side - Branding */}
      <div className="hidden lg:flex lg:flex-1 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600" />
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <h2 className="text-4xl font-bold mb-4">
            Facturation électronique simplifiée
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Créez des factures conformes Factur-X en quelques clics.
            Prêt pour la réforme 2026.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <span className="text-sm font-bold">1</span>
              </div>
              <span>Inscrivez-vous gratuitement</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <span className="text-sm font-bold">2</span>
              </div>
              <span>Ajoutez vos clients</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <span className="text-sm font-bold">3</span>
              </div>
              <span>Créez vos factures conformes</span>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5" />
      </div>
    </div>
  );
}
