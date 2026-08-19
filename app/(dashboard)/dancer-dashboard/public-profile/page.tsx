"use client";

import {
  PublicProfileContainer,
  ProfileHeader,
  Experience,
  Details,
  VideoItem,
} from "@/components/dashboard/dancer-dashboard/public-profile/PublicProfileContainer";
import profileData from "@/components/dashboard/dancer-dashboard/public-profile/public-profile-data.json";

export default function PublicProfilePage() {
  const handleEditProfile = () => {
    console.log("Edit profile requested");
  };

  const handleDownloadResume = () => {
    console.log("Downloading resume PDF...");
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <PublicProfileContainer
        profile={profileData.profile as ProfileHeader}
        skills={profileData.skillsAndRepertoire as string[]}
        experience={profileData.experience as Experience[]}
        details={profileData.details as Details}
        gallery={profileData.gallery as string[]}
        videos={profileData.videos as VideoItem[]}
        onEditProfile={handleEditProfile}
        onDownloadResume={handleDownloadResume}
      />
    </div>
  );
}
