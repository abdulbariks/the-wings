"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function UnpublishCompanyCard() {
  return (
    <Card className="border-zinc-200/80 shadow-none rounded-none bg-white">
      <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="font-serif text-base font-semibold text-zinc-900">
            Company Account Unpublish / Pause
          </h4>
          <p className="text-xs text-zinc-500">
            Temporarily unpublish your company profile, hide active audition
            notices, and pause candidate pipeline activity.
          </p>
        </div>
        <Button
          variant="outline"
          className="bg-zinc-100/80 hover:bg-zinc-200/70 border-none text-zinc-800 text-xs font-medium px-4 h-10 rounded-none whitespace-nowrap"
        >
          Pause Company profile
        </Button>
      </CardContent>
    </Card>
  );
}
