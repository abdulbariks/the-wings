"use client";

import {
  EditProfileContainer,
  EditProfileFormValues,
} from "@/components/dashboard/dancer-dashboard/edit-profile/EditProfileContainer";
import editProfileData from "@/components/dashboard/dancer-dashboard/edit-profile/edit-profile-data.json";

export default function EditProfilePage() {
  const initialValues = {
    fullName: editProfileData.profile.fullName,
    rank: editProfileData.profile.rank,
    height: editProfileData.profile.height,
    primaryLocation: editProfileData.profile.primaryLocation,
    workVisa: editProfileData.profile.workVisa,
    dateOfBirth: editProfileData.profile.dateOfBirth,
    email: editProfileData.profile.email,
    phone: editProfileData.profile.phone,
    nationality: editProfileData.profile.nationality,
    languages: editProfileData.profile.languages,
    visaStatus: editProfileData.profile.visaStatus,
    aboutYou: editProfileData.profile.aboutYou,
    availableFrom: editProfileData.profile.availability.availableFrom,
    revocation: editProfileData.profile.availability.revocation,
    skills: editProfileData.profile.skills,
    employmentHistory: editProfileData.profile.employmentHistory,
    interviewQuestions: editProfileData.profile.interviewQuestions,
  };

  const initialGalleryImages = [
    editProfileData.profile.galleryImage,
    "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=400&auto=format&fit=crop",
  ];

  const initialDanceVideos = [editProfileData.profile.danceVideo];

  const handleSave = (data: EditProfileFormValues) => {
    console.log("Saved Profile Data:", data);
  };

  const handleCancel = () => {
    console.log("Editing cancelled");
  };

  return (
    <div className=" bg-[#f8f8f8] min-h-screen">
      <EditProfileContainer
        initialValues={initialValues}
        currentCompany={editProfileData.profile.currentCompany}
        initialGalleryImages={initialGalleryImages}
        initialDanceVideos={initialDanceVideos}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
}
