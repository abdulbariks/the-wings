'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Plus, X, UploadCloud } from 'lucide-react';

export interface EditCompanyProfileFormValues {
  companyName: string;
  headquartersLocation: string;
  contractDuration: string;
  openings: string;
  workingStyle: string;
  companyOverview: string;
  activeRepertoire: string[];
  productionGallery: string[];
}

interface EditCompanyProfileContainerProps {
  initialValues: EditCompanyProfileFormValues;
  onSave?: (data: EditCompanyProfileFormValues) => void;
  onCancel?: () => void;
}

export function EditCompanyProfileContainer({
  initialValues,
  onSave,
  onCancel,
}: EditCompanyProfileContainerProps) {
  const [tagInput, setTagInput] = React.useState('');

  const { register, handleSubmit, watch, setValue } =
    useForm<EditCompanyProfileFormValues>({
      defaultValues: initialValues,
    });

  // eslint-disable-next-line react-hooks/incompatible-library
  const activeRepertoire = watch('activeRepertoire') || [];
  const productionGallery = watch('productionGallery') || [];

  // Active Repertoire Tag Handlers
  const handleAddTag = () => {
    if (tagInput.trim() && !activeRepertoire.includes(tagInput.trim())) {
      setValue('activeRepertoire', [...activeRepertoire, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setValue(
      'activeRepertoire',
      activeRepertoire.filter((tag) => tag !== tagToRemove)
    );
  };

  // Production Gallery Upload Handlers
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setValue('productionGallery', [...productionGallery, ...newUrls]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setValue(
      'productionGallery',
      productionGallery.filter((_, i) => i !== index)
    );
  };

  const handleFormSubmit = (data: EditCompanyProfileFormValues) => {
    if (onSave) onSave(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-6"
    >
      <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white p-8 space-y-6">
        {/* Header Title */}
        <div className="border-b border-zinc-100 pb-2">
          <h1 className="font-serif text-xl font-medium text-zinc-900">
            Edit Company Profile
          </h1>
        </div>

        {/* Form Grid */}
        <div className="space-y-6">
          {/* Row 1: Company Name & Headquarters Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Company Name
              </label>
              <Input
                {...register('companyName')}
                className="h-11 text-xs bg-[#f4f4f4] border-none rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Headquarters Location
              </label>
              <Input
                {...register('headquartersLocation')}
                className="h-11 text-xs bg-[#f4f4f4] border-none rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
            </div>
          </div>

          {/* Row 2: Contract Duration & Openings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Contract Duration
              </label>
              <Input
                {...register('contractDuration')}
                className="h-11 text-xs bg-[#f4f4f4] border-none rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Openings
              </label>
              <Input
                {...register('openings')}
                className="h-11 text-xs bg-[#f4f4f4] border-none rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
            </div>
          </div>

          {/* Row 3: Working Style & Company Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Working Style & Company Culture
              </label>
              <Textarea
                {...register('workingStyle')}
                className="min-h-30 text-xs leading-relaxed bg-[#f4f4f4] border-none rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400 resize-y p-3"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Company Overview
              </label>
              <Textarea
                {...register('companyOverview')}
                className="min-h-30 text-xs leading-relaxed bg-[#f4f4f4] border-none rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400 resize-y p-3"
              />
            </div>
          </div>

          {/* Row 4: Active Repertoire & Production Stage Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Active Repertoire */}
            <div className="space-y-3">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Active Repertoire
              </label>

              <div className="flex items-center">
                <Input
                  placeholder="Add repertoire or choreographer..."
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                  className="h-11 text-xs bg-[#f4f4f4] border-none rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
                />
                <Button
                  type="button"
                  onClick={handleAddTag}
                  className="h-11 rounded-none bg-[#414348] hover:bg-black text-white text-xs px-5 flex items-center gap-1.5 shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Tag
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {activeRepertoire.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="bg-[#e9e9e9] hover:bg-[#e9e9e9] text-zinc-800 border-none rounded-none text-[11px] font-normal px-3 py-1.5 flex items-center gap-2"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-zinc-900 text-zinc-500 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Production & Stage Gallery */}
            <div className="space-y-3">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Production & Stage Gallery
              </label>

              <div className="flex items-start gap-3">
                {/* Drag & Drop Upload Box */}
                <label className="border border-dashed border-zinc-300 bg-[#f4f4f4] hover:bg-[#ebebeb] cursor-pointer flex flex-col items-center justify-center text-center p-4 w-44 h-28 shrink-0 transition-colors">
                  <UploadCloud className="w-5 h-5 text-zinc-500 mb-1" />
                  <span className="text-[11px] text-zinc-600 font-normal leading-tight max-w-27.5">
                    Drag & drop or click to upload
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>

                {/* Uploaded Gallery Previews */}
                <div className="flex flex-wrap gap-2 overflow-x-auto max-h-28">
                  {productionGallery.map((imgUrl, index) => (
                    <div
                      key={index}
                      className="relative w-36 h-28 border border-zinc-200 bg-zinc-900 shrink-0 group"
                    >
                      <img
                        src={imgUrl}
                        alt={`Production Stage ${index + 1}`}
                        className="w-full h-full object-cover group-hover:opacity-85 transition-opacity"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-1 right-1 bg-white hover:bg-zinc-100 text-zinc-800 p-0.5 shadow-sm transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Global Actions Footer */}
      <div className="flex items-center justify-end gap-3 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="h-10 rounded-none border border-zinc-200 bg-[#f4f4f4] hover:bg-[#e9e9e9] text-xs font-medium text-zinc-800 px-6"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="h-10 rounded-none bg-[#111315] hover:bg-black text-white text-xs font-medium px-6"
        >
          Save Changes
        </Button>
      </div>
    </form>
  );
}