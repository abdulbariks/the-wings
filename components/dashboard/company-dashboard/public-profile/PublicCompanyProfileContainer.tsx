'use client';

import * as React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  MapPin,
  Tag,
  Pencil,
  Eye,
} from 'lucide-react';
import Image from 'next/image';

export interface CompanyProfileData {
  name: string;
  isVerified: boolean;
  director: string;
  location: string;
  code: string;
  logoLetter: string;
  headerTags: string[];
  companyOverview: string;
  contractSpecifications: {
    openings: string;
    salaryScale: string;
    duration: string;
    directorTitle: string;
    directEmail: string;
  };
  workingStyle: string;
  activeRepertoire: string[];
  productionGallery: string[];
}

interface PublicCompanyProfileContainerProps {
  data: CompanyProfileData;
  onEditClick?: () => void;
  onPreviewClick?: () => void;
}

export function PublicCompanyProfileContainer({
  data,
  onEditClick,
  onPreviewClick,
}: PublicCompanyProfileContainerProps) {
  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <Card className="border border-zinc-200/80 shadow-none rounded-none bg-[#f8f8f8] p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex items-start gap-6">
            {/* Logo Square */}
            <div className="w-28 h-28 bg-[#f0f0f0] border border-zinc-200/60 flex items-center justify-center shrink-0">
              <span className="font-serif text-4xl font-bold text-zinc-900">
                {data.logoLetter}
              </span>
            </div>

            {/* Profile Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl font-bold text-zinc-900 leading-none">
                  {data.name}
                </h1>
                {data.isVerified && (
                  <CheckCircle2 className="w-4 h-4 fill-zinc-900 text-white shrink-0" />
                )}
              </div>

              <p className="text-xs text-zinc-500 font-normal">
                {data.director}
              </p>

              <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  {data.location}
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5 text-zinc-400" />
                  {data.code}
                </span>
              </div>

              {/* Header Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {data.headerTags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-[#ededed] text-zinc-700 border-none rounded-none text-[11px] font-normal px-2.5 py-0.5"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-2 self-start md:self-auto shrink-0">
            <Button
              type="button"
              variant="outline"
              onClick={onEditClick}
              className="h-9 rounded-none border border-zinc-200 bg-[#f0f0f0] hover:bg-[#e4e4e4] text-xs text-zinc-800 px-4 flex items-center gap-1.5"
            >
              <Pencil className="w-3.5 h-3.5" /> Edit Profile
            </Button>
            <Button
              type="button"
              onClick={onPreviewClick}
              className="h-9 rounded-none bg-[#1a1c1e] hover:bg-black text-white text-xs px-4 flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" /> Preview Profile Pop-up
            </Button>
          </div>
        </div>
      </Card>

      {/* Main Body Section */}
      <Card className="border border-zinc-200/80 shadow-none rounded-none bg-[#f8f8f8] p-6 space-y-6">
        {/* Company Overview & Contract Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Company Overview */}
          <div className="bg-[#f0f0f0] p-5 space-y-3">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-800">
              Company Overview
            </h2>
            <p className="text-xs text-zinc-600 leading-relaxed">
              {data.companyOverview}
            </p>
          </div>

          {/* Contract Specifications */}
          <div className="bg-[#f0f0f0] p-5 space-y-3">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-800">
              Contract Specifications
            </h2>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-500 font-mono">Openings:</span>
                <span className="font-medium text-zinc-900">
                  {data.contractSpecifications.openings}
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-500 font-mono">Salary Scale:</span>
                <span className="font-medium text-zinc-900">
                  {data.contractSpecifications.salaryScale}
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-500 font-mono">Duration:</span>
                <span className="font-medium text-zinc-900">
                  {data.contractSpecifications.duration}
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-500 font-mono">Director:</span>
                <span className="text-zinc-500 text-[11px]">
                  {data.contractSpecifications.directorTitle}
                </span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-500 font-mono">Direct Email:</span>
                <Link
                  href={`mailto:${data.contractSpecifications.directEmail}`}
                  className="font-mono text-zinc-900 hover:underline"
                >
                  {data.contractSpecifications.directEmail}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Working Style & Company Culture */}
        <div className="space-y-2">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
            Working Style & Company Culture
          </h2>
          <div className="bg-[#f0f0f0] p-5">
            <p className="text-xs text-zinc-600 leading-relaxed">
              {data.workingStyle}
            </p>
          </div>
        </div>

        {/* Active Repertoire */}
        <div className="space-y-2">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
            Active Repertoire
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.activeRepertoire.map((item, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-[#e9e9e9] text-zinc-800 border-none rounded-none text-xs font-normal px-3 py-1.5"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>

        {/* Production & Stage Gallery */}
        <div className="space-y-2 pt-2">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
            Production & Stage Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {data.productionGallery.map((imgUrl, index) => (
              <div
                key={index}
                className="aspect-square bg-zinc-900 overflow-hidden border border-zinc-200/60 relative"
              >
                <Image
                  src={imgUrl}
                  alt={`Production Stage ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}