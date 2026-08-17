import settingsData from "@/components/dashboard/company-dashboard/settings/settings-data.json";
import { AccountPasswordForm } from "@/components/dashboard/company-dashboard/settings/AccountPasswordForm";
import { VisibilityPreferences } from "@/components/dashboard/company-dashboard/settings/VisibilityPreferences";
import { UnpublishCompanyCard } from "@/components/dashboard/company-dashboard/settings/UnpublishCompanyCard";
import { Badge } from "@/components/ui/badge";

export default function SettingsPage() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen space-y-5">
      {/* Top Header Banner */}
      <div className="bg-white p-6 border border-zinc-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="font-serif text-xl font-medium text-zinc-900">
            Account & Security Settings
          </h1>
          <p className="text-xs text-zinc-400">
            Manage director credentials, company directory searchability,
            audition alert feeds, and security controls.
          </p>
        </div>
        <Badge
          variant="outline"
          className="bg-zinc-100/70 border-none text-zinc-700 font-normal text-xs px-3 py-1.5 rounded-none"
        >
          Role:{" "}
          <span className="font-semibold ml-1">{settingsData.user.role}</span>
        </Badge>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        <AccountPasswordForm
          initialEmail={settingsData.user.email}
          initialAvatarUrl={settingsData.user.avatarUrl}
        />
        <VisibilityPreferences initialPreferences={settingsData.preferences} />
      </div>

      {/* Bottom Action Section */}
      <UnpublishCompanyCard />
    </div>
  );
}
