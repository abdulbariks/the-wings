"use client";

import {
  ContentModerationContainer,
  ModerationItem,
} from "@/components/dashboard/admin-dashboard/content-moderation/ContentModerationContainer";
import moderationData from "@/components/dashboard/admin-dashboard/content-moderation/content-moderation-data.json";

export default function ContentModerationPage() {
  const handleRemove = (id: string) => {
    console.log("Removed content item:", id);
  };

  const handleWarn = (id: string) => {
    console.log("Warned author for item:", id);
  };

  const handleApprove = (id: string) => {
    console.log("Approved/Kept content item:", id);
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <ContentModerationContainer
        initialItems={moderationData.moderationItems as ModerationItem[]}
        onRemove={handleRemove}
        onWarn={handleWarn}
        onApprove={handleApprove}
      />
    </div>
  );
}
