'use client';

import { useState, useCallback } from 'react';
import { DevisData, defaultDevisData } from '@/lib/validations/devis';
import { DevisForm } from './_components/devis-form';
import { DevisPreview } from './_components/devis-preview';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IconDownload, IconFileText, IconEdit, IconEye, IconArrowLeft, IconFileInvoice } from '@tabler/icons-react';
import Link from 'next/link';

export default function GenerateurDevisPage() {
  const [devisData, setDevisData] = useState<DevisData>(defaultDevisData);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDataChange = useCallback((data: DevisData) => {
    setDevisData(data);
  }, []);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      // Dynamic import for PDF libraries
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).default;
      
      const element = document.getElementById('devis-preview');
      if (!element) {
        throw new Error('Preview element not found');
      }

      // Capture the preview as canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      });

      // Create PDF (A4 format)
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
      // Download
      const filename = `devis-${devisData.devis.numero || 'draft'}.pdf`;
      pdf.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Erreur lors de la génération du PDF. Veuillez réessayer.');
    } finally {
      setIsGenerating(false);
    }
  };

  const saveAsJSON = () => {
    const dataStr = JSON.stringify(devisData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `devis-${devisData.devis.numero || 'draft'}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                <IconArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Générateur de Devis Gratuit</h1>
                <p className="text-sm text-gray-500">Créez vos devis conformes en quelques clics</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={saveAsJSON}>
                <IconFileText className="h-4 w-4 mr-2" />
                Sauvegarder
              </Button>
              <Button onClick={generatePDF} disabled={isGenerating} className="bg-blue-600 hover:bg-blue-700">
                <IconDownload className="h-4 w-4 mr-2" />
                {isGenerating ? 'Génération...' : 'Télécharger PDF'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Mobile tabs */}
        <div className="lg:hidden">
          <Tabs defaultValue="form" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="form" className="flex items-center gap-2">
                <IconEdit className="h-4 w-4" />
                Formulaire
              </TabsTrigger>
              <TabsTrigger value="preview" className="flex items-center gap-2">
                <IconEye className="h-4 w-4" />
                Aperçu
              </TabsTrigger>
            </TabsList>
            <TabsContent value="form">
              <DevisForm onDataChange={handleDataChange} />
            </TabsContent>
            <TabsContent value="preview">
              <DevisPreview data={devisData} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Desktop side-by-side */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
          <div className="space-y-4">
            <DevisForm onDataChange={handleDataChange} />
          </div>
          <div className="sticky top-24 h-fit">
            <DevisPreview data={devisData} />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Besoin de plus de fonctionnalités ?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Avec FacturSimple Pro, transformez vos devis en factures en 1 clic, gérez vos clients,
            et restez conforme à la réforme 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#pricing">
              <Button size="lg" variant="secondary" className="text-blue-600">
                Voir les tarifs
              </Button>
            </Link>
            <Link href="/generateur-facture">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <IconFileInvoice className="h-5 w-5 mr-2" />
                Essayer le générateur de factures
              </Button>
            </Link>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-12 prose prose-gray max-w-none">
          <h2>Générateur de devis gratuit pour auto-entrepreneur</h2>
          <p>
            Notre outil gratuit vous permet de créer des devis professionnels et conformes à la
            législation française. Remplissez simplement le formulaire, prévisualisez en temps réel,
            et téléchargez votre devis au format PDF.
          </p>
          
          <h3>Mentions obligatoires sur un devis</h3>
          <p>Pour être valable, un devis doit contenir les informations suivantes :</p>
          <ul>
            <li><strong>Date du devis</strong> et durée de validité</li>
            <li><strong>Identité de l&apos;émetteur</strong> : nom, adresse, SIRET</li>
            <li><strong>Identité du client</strong> : nom et adresse</li>
            <li><strong>Description détaillée</strong> des prestations ou produits</li>
            <li><strong>Prix unitaires HT</strong> et quantités</li>
            <li><strong>Total HT et TTC</strong></li>
            <li>Mention de franchise de TVA si applicable</li>
          </ul>

          <h3>Quand un devis est-il obligatoire ?</h3>
          <p>
            Un devis est obligatoire dans certains secteurs (déménagement, travaux de plus de 150€,
            services à la personne...) mais reste une bonne pratique dans tous les cas.
            Il protège à la fois le professionnel et le client.
          </p>

          <h3>Pourquoi choisir notre générateur de devis ?</h3>
          <ul>
            <li>✅ 100% gratuit, sans inscription</li>
            <li>✅ Conforme à la législation française</li>
            <li>✅ Export PDF professionnel</li>
            <li>✅ Sauvegarde de vos données en JSON</li>
            <li>✅ Support de la franchise TVA</li>
            <li>✅ Calcul automatique des remises</li>
            <li>✅ Zone de signature client</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} FacturSimple - La facturation électronique simple pour les micro-entrepreneurs
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white">Accueil</Link>
            <Link href="/generateur-facture" className="text-gray-400 hover:text-white">Générateur de factures</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
