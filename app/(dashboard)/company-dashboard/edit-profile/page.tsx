"use client";

import {
  CompanyProfileData,
  EditProfileForm,
} from "@/components/dashboard/company-dashboard/edit-profile/EditProfileForm";
import companyData from "@/components/dashboard/company-dashboard/edit-profile/company-profile-data.json";

export default function EditProfilePage() {
  const handleSave = (updatedData: CompanyProfileData) => {
    // Save handler logic (e.g., API mutation or state persistence)
    console.log("Saved Profile Data:", updatedData);
  };

  const handleCancel = () => {
    // Cancel navigation logic
    console.log("Action cancelled");
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <EditProfileForm
        initialData={companyData as CompanyProfileData}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
}
