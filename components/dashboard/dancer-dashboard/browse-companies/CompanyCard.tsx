"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, Send } from "lucide-react";

export interface CompanyData {
  id: string;
  companyName: string;
  location: string;
  style: string;
  openings: string;
  salaryScale: string;
  contractLength: string;
  repertoire: string[];
  isBookmarked: boolean;
  greenLightSent: boolean;
}

interface CompanyCardProps {
  company: CompanyData;
  onToggleBookmark: (id: string) => void;
  onToggleGreenLight: (id: string) => void;
  onViewProfile?: (id: string) => void;
}

export function CompanyCard({
  company,
  onToggleBookmark,
  onToggleGreenLight,
  onViewProfile,
}: CompanyCardProps) {
  return (
    <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white flex flex-col justify-between">
      <CardHeader className="p-6 pb-4 flex flex-row items-start justify-between space-y-0">
        <div className="space-y-1">
          <CardTitle className="font-serif text-lg font-semibold text-zinc-900">
            {company.companyName}
          </CardTitle>
          <p className="text-xs text-zinc-400">
            {company.location} • {company.style}
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => onToggleBookmark(company.id)}
          className="h-8 w-8 rounded-none border border-zinc-200/80 bg-zinc-50/50 text-zinc-600 hover:bg-zinc-100 shrink-0"
          title={company.isBookmarked ? "Remove Bookmark" : "Bookmark Profile"}
        >
          <Heart
            className={`w-4 h-4 ${
              company.isBookmarked
                ? "fill-zinc-900 text-zinc-900"
                : "text-zinc-700"
            }`}
          />
        </Button>
      </CardHeader>

      <CardContent className="px-6 pb-6 pt-0 space-y-5">
        {/* Details Gray Box */}
        <div className="bg-zinc-100/60 p-4 space-y-2 text-xs">
          <div className="flex justify-between items-center text-zinc-500">
            <span>Openings:</span>
            <span className="font-medium text-zinc-800 text-right">
              {company.openings}
            </span>
          </div>
          <div className="flex justify-between items-center text-zinc-500">
            <span>Salary Scale:</span>
            <span className="font-medium text-zinc-800 text-right">
              {company.salaryScale}
            </span>
          </div>
          <div className="flex justify-between items-center text-zinc-500">
            <span>Contract Length:</span>
            <span className="font-medium text-zinc-800 text-right">
              {company.contractLength}
            </span>
          </div>
        </div>

        {/* Repertoire Chips */}
        <div className="flex flex-wrap gap-2">
          {company.repertoire.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="bg-zinc-100/80 hover:bg-zinc-100 text-zinc-700 font-normal text-xs px-3 py-1 rounded-none border-none"
            >
              {item}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <Button
            type="button"
            variant="outline"
            onClick={() => onViewProfile && onViewProfile(company.id)}
            className="bg-zinc-100/80 hover:bg-zinc-200/70 border-none text-zinc-800 text-xs font-medium h-9 rounded-none gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-zinc-600" />
            View Profile
          </Button>

          <Button
            type="button"
            onClick={() => onToggleGreenLight(company.id)}
            className={`text-xs font-medium h-9 rounded-none gap-1.5 transition-colors ${
              company.greenLightSent
                ? "bg-zinc-900 hover:bg-black text-white"
                : "bg-zinc-100/80 hover:bg-zinc-200/70 border-none text-zinc-800"
            }`}
          >
            <Send
              className={`w-3.5 h-3.5 ${
                company.greenLightSent ? "text-white" : "text-zinc-600"
              }`}
            />
            Green Light Sent
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
