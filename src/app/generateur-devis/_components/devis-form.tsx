'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DevisData, devisSchema, defaultDevisData } from '@/lib/validations/devis';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IconPlus, IconTrash, IconBuilding, IconUser, IconFileText, IconList } from '@tabler/icons-react';

interface DevisFormProps {
  onDataChange: (data: DevisData) => void;
}

export function DevisForm({ onDataChange }: DevisFormProps) {
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<DevisData>({
    resolver: zodResolver(devisSchema),
    defaultValues: defaultDevisData,
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'lignes',
  });

  // Watch all values and update parent
  const watchedValues = watch();
  
  // Debounced update
  const updateData = () => {
    onDataChange(watchedValues);
  };

  return (
    <form onChange={updateData} className="space-y-6">
      {/* Émetteur */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <IconBuilding className="h-5 w-5" />
            Vos informations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="emetteur.nom">Nom / Raison sociale *</Label>
              <Input
                id="emetteur.nom"
                {...register('emetteur.nom')}
                placeholder="Votre nom ou entreprise"
              />
              {errors.emetteur?.nom && (
                <p className="text-sm text-red-500 mt-1">{errors.emetteur.nom.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="emetteur.siret">SIRET *</Label>
              <Input
                id="emetteur.siret"
                {...register('emetteur.siret')}
                placeholder="12345678901234"
                maxLength={14}
              />
              {errors.emetteur?.siret && (
                <p className="text-sm text-red-500 mt-1">{errors.emetteur.siret.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <Label htmlFor="emetteur.adresse">Adresse *</Label>
            <Input
              id="emetteur.adresse"
              {...register('emetteur.adresse')}
              placeholder="123 rue de la Paix"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="emetteur.codePostal">Code postal *</Label>
              <Input
                id="emetteur.codePostal"
                {...register('emetteur.codePostal')}
                placeholder="75001"
                maxLength={5}
              />
            </div>
            <div>
              <Label htmlFor="emetteur.ville">Ville *</Label>
              <Input
                id="emetteur.ville"
                {...register('emetteur.ville')}
                placeholder="Paris"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="emetteur.email">Email</Label>
              <Input
                id="emetteur.email"
                type="email"
                {...register('emetteur.email')}
                placeholder="contact@example.com"
              />
            </div>
            <div>
              <Label htmlFor="emetteur.telephone">Téléphone</Label>
              <Input
                id="emetteur.telephone"
                {...register('emetteur.telephone')}
                placeholder="06 12 34 56 78"
              />
            </div>
          </div>
          
          <div>
            <Label>Régime TVA</Label>
            <Select
              value={watchedValues.emetteur.mentionTVA}
              onValueChange={(value: 'franchise' | 'assujetti') => {
                setValue('emetteur.mentionTVA', value);
                updateData();
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="franchise">Franchise en base (pas de TVA)</SelectItem>
                <SelectItem value="assujetti">Assujetti à la TVA</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {watchedValues.emetteur.mentionTVA === 'assujetti' && (
            <div>
              <Label htmlFor="emetteur.numeroTVA">N° TVA intracommunautaire</Label>
              <Input
                id="emetteur.numeroTVA"
                {...register('emetteur.numeroTVA')}
                placeholder="FR12345678901"
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Client */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <IconUser className="h-5 w-5" />
            Client
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="client.nom">Nom / Raison sociale *</Label>
              <Input
                id="client.nom"
                {...register('client.nom')}
                placeholder="Nom du client"
              />
            </div>
            <div>
              <Label htmlFor="client.siret">SIRET (optionnel)</Label>
              <Input
                id="client.siret"
                {...register('client.siret')}
                placeholder="12345678901234"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="client.adresse">Adresse *</Label>
            <Input
              id="client.adresse"
              {...register('client.adresse')}
              placeholder="Adresse du client"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="client.codePostal">Code postal *</Label>
              <Input
                id="client.codePostal"
                {...register('client.codePostal')}
                placeholder="75001"
              />
            </div>
            <div>
              <Label htmlFor="client.ville">Ville *</Label>
              <Input
                id="client.ville"
                {...register('client.ville')}
                placeholder="Paris"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="client.email">Email</Label>
            <Input
              id="client.email"
              type="email"
              {...register('client.email')}
              placeholder="client@example.com"
            />
          </div>
        </CardContent>
      </Card>

      {/* Devis details */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <IconFileText className="h-5 w-5" />
            Informations du devis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="devis.numero">Numéro de devis *</Label>
              <Input
                id="devis.numero"
                {...register('devis.numero')}
              />
            </div>
            <div>
              <Label htmlFor="devis.dateEmission">Date d&apos;émission *</Label>
              <Input
                id="devis.dateEmission"
                type="date"
                {...register('devis.dateEmission')}
              />
            </div>
            <div>
              <Label htmlFor="devis.dateValidite">Valide jusqu&apos;au *</Label>
              <Input
                id="devis.dateValidite"
                type="date"
                {...register('devis.dateValidite')}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="devis.objet">Objet du devis *</Label>
            <Input
              id="devis.objet"
              {...register('devis.objet')}
              placeholder="Ex: Création site web, Prestation de conseil..."
            />
          </div>
        </CardContent>
      </Card>

      {/* Line items */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <IconList className="h-5 w-5" />
            Prestations / Produits
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {fields.map((field, index) => (
            <div key={field.id} className="p-4 border rounded-lg space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm text-muted-foreground">
                  Ligne {index + 1}
                </span>
                {fields.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => remove(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <IconTrash className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              <div>
                <Label>Description *</Label>
                <Textarea
                  {...register(`lignes.${index}.description`)}
                  placeholder="Description de la prestation ou du produit"
                  rows={2}
                />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <Label>Quantité *</Label>
                  <Input
                    type="number"
                    step="0.01"
                    {...register(`lignes.${index}.quantite`, { valueAsNumber: true })}
                  />
                </div>
                <div>
                  <Label>Prix unitaire HT *</Label>
                  <Input
                    type="number"
                    step="0.01"
                    {...register(`lignes.${index}.prixUnitaire`, { valueAsNumber: true })}
                  />
                </div>
                {watchedValues.emetteur.mentionTVA === 'assujetti' && (
                  <div>
                    <Label>TVA %</Label>
                    <Input
                      type="number"
                      step="0.1"
                      {...register(`lignes.${index}.tauxTVA`, { valueAsNumber: true })}
                    />
                  </div>
                )}
                <div>
                  <Label>Remise %</Label>
                  <Input
                    type="number"
                    step="1"
                    min="0"
                    max="100"
                    {...register(`lignes.${index}.remise`, { valueAsNumber: true })}
                  />
                </div>
              </div>
            </div>
          ))}
          
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => append({ description: '', quantite: 1, prixUnitaire: 0, tauxTVA: 20, remise: 0 })}
          >
            <IconPlus className="h-4 w-4 mr-2" />
            Ajouter une ligne
          </Button>
        </CardContent>
      </Card>

      {/* Conditions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Conditions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="conditions.acompte">Acompte demandé (%)</Label>
              <Input
                id="conditions.acompte"
                type="number"
                min="0"
                max="100"
                {...register('conditions.acompte', { valueAsNumber: true })}
              />
            </div>
            <div>
              <Label htmlFor="conditions.delaiExecution">Délai d&apos;exécution</Label>
              <Input
                id="conditions.delaiExecution"
                {...register('conditions.delaiExecution')}
                placeholder="Ex: 2 semaines"
              />
            </div>
            <div>
              <Label htmlFor="conditions.garantie">Garantie</Label>
              <Input
                id="conditions.garantie"
                {...register('conditions.garantie')}
                placeholder="Ex: 1 an"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="notes">Notes particulières</Label>
            <Textarea
              id="notes"
              {...register('notes')}
              placeholder="Notes visibles sur le devis..."
              rows={2}
            />
          </div>
          
          <div>
            <Label htmlFor="conditionsGenerales">Conditions générales</Label>
            <Textarea
              id="conditionsGenerales"
              {...register('conditionsGenerales')}
              rows={4}
            />
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
