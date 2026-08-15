"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export interface PreferencesState {
  profileVisibility: boolean;
  industryDigest: boolean;
  greenLightSignals: boolean;
  auditionInvitations: boolean;
  directMessages: boolean;
}

interface VisibilityPreferencesProps {
  initialPreferences: PreferencesState;
}

export function VisibilityPreferences({
  initialPreferences,
}: VisibilityPreferencesProps) {
  const [prefs, setPrefs] =
    React.useState<PreferencesState>(initialPreferences);

  const togglePreference = (key: keyof PreferencesState) => {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Card className="border-zinc-200/80 shadow-none rounded-none bg-white h-full">
      <CardHeader className="pb-4 pt-5 px-6 border-b border-zinc-100">
        <CardTitle className="font-serif text-base font-semibold text-zinc-900">
          Profile Visibility & Notification Preferences
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {/* Top 2 Rows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-5 bg-zinc-100/60 rounded-sm">
            <span className="font-serif text-sm font-medium text-zinc-900">
              Profile Visibility
            </span>
            <Switch
              checked={prefs.profileVisibility}
              onCheckedChange={() => togglePreference("profileVisibility")}
              className="data-[state=checked]:bg-zinc-900"
            />
          </div>

          <div className="flex items-center justify-between p-5 bg-zinc-100/60 rounded-sm">
            <span className="font-serif text-sm font-medium text-zinc-900">
              Industry Digest
            </span>
            <Switch
              checked={prefs.industryDigest}
              onCheckedChange={() => togglePreference("industryDigest")}
              className="data-[state=checked]:bg-zinc-900"
            />
          </div>

          <div className="flex items-center justify-between p-5 bg-zinc-100/60 rounded-sm">
            <span className="font-serif text-sm font-medium text-zinc-900">
              Green Light Signals
            </span>
            <Switch
              checked={prefs.greenLightSignals}
              onCheckedChange={() => togglePreference("greenLightSignals")}
              className="data-[state=checked]:bg-zinc-900"
            />
          </div>

          <div className="flex items-center justify-between p-5 bg-zinc-100/60 rounded-sm">
            <span className="font-serif text-sm font-medium text-zinc-900">
              Audition Invitations
            </span>
            <Switch
              checked={prefs.auditionInvitations}
              onCheckedChange={() => togglePreference("auditionInvitations")}
              className="data-[state=checked]:bg-zinc-900"
            />
          </div>
        </div>

        {/* Full Width Direct Messages */}
        <div className="flex items-center justify-between p-6 bg-zinc-100/60 rounded-sm">
          <span className="font-serif text-sm font-medium text-zinc-900">
            Direct Messages
          </span>
          <Switch
            checked={prefs.directMessages}
            onCheckedChange={() => togglePreference("directMessages")}
            className="data-[state=checked]:bg-zinc-900"
          />
        </div>
      </CardContent>
    </Card>
  );
}
