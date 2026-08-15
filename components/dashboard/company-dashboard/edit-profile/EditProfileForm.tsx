"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Upload } from "lucide-react";

export interface CompanyProfileData {
  companyName: string;
  headquartersLocation: string;
  contractDuration: string;
  openings: string;
  workingStyle: string;
  companyOverview: string;
  repertoireTags: string[];
  galleryImages: { id: string; url: string }[];
}

interface EditProfileFormProps {
  initialData: CompanyProfileData;
  onSave?: (data: CompanyProfileData) => void;
  onCancel?: () => void;
}

export function EditProfileForm({
  initialData,
  onSave,
  onCancel,
}: EditProfileFormProps) {
  const [formData, setFormData] =
    React.useState<CompanyProfileData>(initialData);
  const [newTagInput, setNewTagInput] = React.useState("");

  const handleInputChange = (
    field: keyof CompanyProfileData,
    value: string,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddTag = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = newTagInput.trim();
    if (trimmed && !formData.repertoireTags.includes(trimmed)) {
      setFormData((prev) => ({
        ...prev,
        repertoireTags: [...prev.repertoireTags, trimmed],
      }));
      setNewTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      repertoireTags: prev.repertoireTags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleRemoveImage = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      galleryImages: prev.galleryImages.filter((img) => img.id !== id),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSave) onSave(formData);
  };

  return (
    <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white">
      <CardHeader className="pb-4 pt-6 px-6 border-b border-zinc-100">
        <CardTitle className="font-serif text-xl font-medium text-zinc-900">
          Edit Company Profile
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Company Name & Headquarters Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                COMPANY NAME
              </label>
              <Input
                value={formData.companyName}
                onChange={(e) =>
                  handleInputChange("companyName", e.target.value)
                }
                className="h-11 text-xs bg-zinc-100/70 border-none rounded-none focus-visible:ring-1 focus-visible:ring-zinc-400 text-zinc-800"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                HEADQUARTERS LOCATION
              </label>
              <Input
                value={formData.headquartersLocation}
                onChange={(e) =>
                  handleInputChange("headquartersLocation", e.target.value)
                }
                className="h-11 text-xs bg-zinc-100/70 border-none rounded-none focus-visible:ring-1 focus-visible:ring-zinc-400 text-zinc-800"
              />
            </div>
          </div>

          {/* Row 2: Contract Duration & Openings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                CONTRACT DURATION
              </label>
              <Input
                value={formData.contractDuration}
                onChange={(e) =>
                  handleInputChange("contractDuration", e.target.value)
                }
                className="h-11 text-xs bg-zinc-100/70 border-none rounded-none focus-visible:ring-1 focus-visible:ring-zinc-400 text-zinc-800"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                OPENINGS
              </label>
              <Input
                value={formData.openings}
                onChange={(e) => handleInputChange("openings", e.target.value)}
                className="h-11 text-xs bg-zinc-100/70 border-none rounded-none focus-visible:ring-1 focus-visible:ring-zinc-400 text-zinc-800"
              />
            </div>
          </div>

          {/* Row 3: Working Style & Company Overview Textareas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                WORKING STYLE & COMPANY CULTURE
              </label>
              <Textarea
                rows={5}
                value={formData.workingStyle}
                onChange={(e) =>
                  handleInputChange("workingStyle", e.target.value)
                }
                className="bg-zinc-100/70 border-none rounded-none text-xs text-zinc-800 focus-visible:ring-1 focus-visible:ring-zinc-400 leading-relaxed resize-y"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                COMPANY OVERVIEW
              </label>
              <Textarea
                rows={5}
                value={formData.companyOverview}
                onChange={(e) =>
                  handleInputChange("companyOverview", e.target.value)
                }
                className="bg-zinc-100/70 border-none rounded-none text-xs text-zinc-800 focus-visible:ring-1 focus-visible:ring-zinc-400 leading-relaxed resize-y"
              />
            </div>
          </div>

          {/* Row 4: Active Repertoire Tags & Production Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Active Repertoire Section */}
            <div className="space-y-3">
              <label className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase block">
                ACTIVE REPERTOIRE
              </label>
              <div className="flex items-center gap-0">
                <Input
                  placeholder="Add repertoire or choreographer..."
                  value={newTagInput}
                  onChange={(e) => setNewTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                  className="h-11 text-xs bg-zinc-100/70 border-none rounded-none focus-visible:ring-1 focus-visible:ring-zinc-400 text-zinc-800 flex-1"
                />
                <Button
                  type="button"
                  onClick={() => handleAddTag()}
                  className="h-11 bg-[#434343] hover:bg-[#2e2e2e] text-white rounded-none px-4 text-xs font-normal gap-1 shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Tag
                </Button>
              </div>

              {/* Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {formData.repertoireTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-zinc-200/70 hover:bg-zinc-200 text-zinc-800 font-normal text-xs px-3 py-1.5 rounded-none flex items-center gap-1.5"
                  >
                    <span>{tag}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="text-zinc-500 hover:text-zinc-900 ml-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Production & Stage Gallery Section */}
            <div className="space-y-3">
              <label className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase block">
                PRODUCTION & STAGE GALLERY
              </label>
              <div className="flex items-center gap-3">
                {/* Upload Placeholder Area */}
                <div className="w-36 h-28 border border-dashed border-zinc-300 bg-zinc-100/50 flex flex-col items-center justify-center p-3 text-center cursor-pointer hover:bg-zinc-100 transition-colors">
                  <Upload className="w-4 h-4 text-zinc-500 mb-2" />
                  <span className="text-[11px] text-zinc-500 leading-tight">
                    Drag & drop or click to upload
                  </span>
                </div>

                {/* Uploaded Image Items */}
                {formData.galleryImages.map((img) => (
                  <div
                    key={img.id}
                    className="relative w-44 h-28 group border border-zinc-200"
                  >
                    <img
                      src={img.url}
                      alt="Production Stage"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(img.id)}
                      className="absolute top-1 right-1 bg-white/90 hover:bg-white text-zinc-800 p-0.5 shadow-xs"
                      title="Remove image"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-100 pt-5 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="bg-zinc-100/80 hover:bg-zinc-200/70 border-none text-zinc-800 text-xs font-medium px-5 h-9 rounded-none"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#1a1a1a] hover:bg-black text-white text-xs px-5 h-9 rounded-none font-medium"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
