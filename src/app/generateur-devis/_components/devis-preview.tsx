'use client';

import { DevisData, calculateDevisTotals, formatEuros, formatDateFR } from '@/lib/validations/devis';

interface DevisPreviewProps {
  data: DevisData;
}

export function DevisPreview({ data }: DevisPreviewProps) {
  const totals = calculateDevisTotals(data.lignes, data.emetteur.mentionTVA);

  return (
    <div id="devis-preview" className="bg-white p-8 shadow-lg rounded-lg text-gray-900 min-h-[800px]">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-blue-600 mb-1">DEVIS</h1>
          <p className="text-lg font-medium">{data.devis.numero || 'D-XXXX'}</p>
        </div>
        <div className="text-right text-sm">
          <p><span className="text-gray-500">Date :</span> {formatDateFR(data.devis.dateEmission)}</p>
          <p><span className="text-gray-500">Validité :</span> {formatDateFR(data.devis.dateValidite)}</p>
        </div>
      </div>

      {/* Émetteur and Client */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Émetteur */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">De</h3>
          <div className="text-sm space-y-1">
            <p className="font-semibold text-base">{data.emetteur.nom || 'Votre nom'}</p>
            <p>{data.emetteur.adresse || 'Adresse'}</p>
            <p>{data.emetteur.codePostal || 'CP'} {data.emetteur.ville || 'Ville'}</p>
            {data.emetteur.telephone && <p>Tél : {data.emetteur.telephone}</p>}
            {data.emetteur.email && <p>{data.emetteur.email}</p>}
            <p className="text-gray-600">SIRET : {data.emetteur.siret || '00000000000000'}</p>
            {data.emetteur.mentionTVA === 'assujetti' && data.emetteur.numeroTVA && (
              <p className="text-gray-600">TVA : {data.emetteur.numeroTVA}</p>
            )}
          </div>
        </div>

        {/* Client */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">À</h3>
          <div className="text-sm space-y-1">
            <p className="font-semibold text-base">{data.client.nom || 'Nom du client'}</p>
            <p>{data.client.adresse || 'Adresse'}</p>
            <p>{data.client.codePostal || 'CP'} {data.client.ville || 'Ville'}</p>
            {data.client.email && <p>{data.client.email}</p>}
            {data.client.siret && <p className="text-gray-600">SIRET : {data.client.siret}</p>}
          </div>
        </div>
      </div>

      {/* Object */}
      {data.devis.objet && (
        <div className="mb-6 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Objet :</p>
          <p className="font-medium">{data.devis.objet}</p>
        </div>
      )}

      {/* Line items table */}
      <table className="w-full mb-6">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left py-2 text-xs font-semibold text-gray-500 uppercase">Description</th>
            <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase w-20">Qté</th>
            <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase w-24">Prix HT</th>
            {data.emetteur.mentionTVA === 'assujetti' && (
              <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase w-16">TVA</th>
            )}
            <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase w-16">Remise</th>
            <th className="text-right py-2 text-xs font-semibold text-gray-500 uppercase w-24">Total HT</th>
          </tr>
        </thead>
        <tbody>
          {data.lignes.map((ligne, index) => {
            const totalLigneBrut = ligne.quantite * ligne.prixUnitaire;
            const remise = ligne.remise ? totalLigneBrut * (ligne.remise / 100) : 0;
            const totalLigne = totalLigneBrut - remise;
            
            return (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-3 pr-4 text-sm">
                  {ligne.description || <span className="text-gray-400">Description...</span>}
                </td>
                <td className="text-right py-3 text-sm">{ligne.quantite}</td>
                <td className="text-right py-3 text-sm">{formatEuros(ligne.prixUnitaire)}</td>
                {data.emetteur.mentionTVA === 'assujetti' && (
                  <td className="text-right py-3 text-sm">{ligne.tauxTVA}%</td>
                )}
                <td className="text-right py-3 text-sm">
                  {ligne.remise ? `${ligne.remise}%` : '-'}
                </td>
                <td className="text-right py-3 text-sm font-medium">{formatEuros(totalLigne)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Totals */}
      <div className="flex justify-end mb-6">
        <div className="w-64 space-y-1">
          {totals.totalRemise > 0 && (
            <>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Total brut HT</span>
                <span>{formatEuros(totals.totalHTBrut)}</span>
              </div>
              <div className="flex justify-between text-sm text-green-600">
                <span>Remise totale</span>
                <span>-{formatEuros(totals.totalRemise)}</span>
              </div>
            </>
          )}
          <div className="flex justify-between text-sm">
            <span>Total HT</span>
            <span>{formatEuros(totals.totalHT)}</span>
          </div>
          {data.emetteur.mentionTVA === 'assujetti' && (
            <div className="flex justify-between text-sm">
              <span>TVA</span>
              <span>{formatEuros(totals.totalTVA)}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-lg pt-2 border-t-2 border-gray-900">
            <span>Total TTC</span>
            <span>{formatEuros(totals.totalTTC)}</span>
          </div>
          {data.conditions.acompte > 0 && (
            <div className="flex justify-between text-sm text-blue-600 pt-1">
              <span>Acompte ({data.conditions.acompte}%)</span>
              <span>{formatEuros(totals.totalTTC * (data.conditions.acompte / 100))}</span>
            </div>
          )}
        </div>
      </div>

      {/* Conditions */}
      <div className="mb-6 space-y-2">
        {data.conditions.delaiExecution && (
          <p className="text-sm">
            <span className="font-medium">Délai d&apos;exécution :</span> {data.conditions.delaiExecution}
          </p>
        )}
        {data.conditions.garantie && (
          <p className="text-sm">
            <span className="font-medium">Garantie :</span> {data.conditions.garantie}
          </p>
        )}
      </div>

      {/* Notes */}
      {data.notes && (
        <div className="mb-6 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm whitespace-pre-wrap">{data.notes}</p>
        </div>
      )}

      {/* Conditions générales */}
      {data.conditionsGenerales && (
        <div className="mb-6 pt-4 border-t border-gray-200">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Conditions générales
          </h4>
          <p className="text-xs text-gray-600 whitespace-pre-wrap">{data.conditionsGenerales}</p>
        </div>
      )}

      {/* Signature block */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-8">
          <div className="text-sm">
            <p className="font-medium mb-16">Bon pour accord,</p>
            <p className="border-t border-gray-300 pt-1 text-gray-500">
              Signature du client
            </p>
          </div>
          <div className="text-sm">
            <p className="font-medium mb-16">Date :</p>
            <p className="border-t border-gray-300 pt-1 text-gray-500">
              Lu et approuvé
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      {data.emetteur.mentionTVA === 'franchise' && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            TVA non applicable, art. 293 B du CGI
          </p>
        </div>
      )}
    </div>
  );
}
