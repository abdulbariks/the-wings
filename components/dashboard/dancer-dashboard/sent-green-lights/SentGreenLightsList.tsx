"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Trash2 } from "lucide-react";

export interface CompanyInterestItem {
  id: string;
  name: string;
  subtitle: string;
  status: string;
}

interface SentGreenLightsListProps {
  initialItems: CompanyInterestItem[];
  onView?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function SentGreenLightsList({
  initialItems,
  onView,
  onDelete,
}: SentGreenLightsListProps) {
  const [items, setItems] = React.useState<CompanyInterestItem[]>(initialItems);

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    if (onDelete) onDelete(id);
  };

  return (
    <Card className="border border-color-border shadow-none rounded-none ">
      {/* Header Banner */}
      <CardHeader className="pb-4 pt-6 px-6 border-b border-color-border flex flex-row items-center justify-between space-y-0">
        <CardTitle className="font-serif text-xl font-medium text-zinc-900">
          Companies I Expressed Interest In
        </CardTitle>
        <span className="text-xs text-zinc-400 font-medium">
          {items.length} Pending
        </span>
      </CardHeader>

      {/* List Container */}
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-[#F2F2F0] hover:bg-[#F2F2F0]/80 transition-colors gap-4"
          >
            {/* Left Info */}
            <div className="space-y-1 min-w-0">
              <h3 className="font-serif text-base font-semibold text-zinc-900 truncate">
                {item.name}
              </h3>
              <p className="text-xs text-zinc-500 truncate">{item.subtitle}</p>
            </div>

            {/* Right Status & Action Buttons */}
            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
              <Badge
                variant="outline"
                className="bg-white border-none text-zinc-600 font-normal text-xs px-4 py-2 rounded-none h-9 whitespace-nowrap"
              >
                {item.status}
              </Badge>

              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => onView && onView(item.id)}
                className="h-9 w-9 rounded-none border-none bg-white text-zinc-600 hover:bg-zinc-50"
                title="View details"
              >
                <Eye className="w-4 h-4 text-zinc-700" />
              </Button>

              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => handleDelete(item.id)}
                className="h-9 w-9 rounded-none border-none bg-white text-zinc-600 hover:bg-zinc-50 hover:text-red-600"
                title="Remove interest"
              >
                <Trash2 className="w-4 h-4 text-zinc-700 hover:text-red-600" />
              </Button>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-center py-12 text-xs text-zinc-400">
            No pending expressions of interest.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
