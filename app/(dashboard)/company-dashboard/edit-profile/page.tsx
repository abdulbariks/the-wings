'use client';

import { EditCompanyProfileContainer, EditCompanyProfileFormValues } from '@/components/dashboard/company-dashboard/edit-profile/EditCompanyProfileContainer';
import companyData from '@/components/dashboard/company-dashboard/edit-profile/edit-company-profile-data.json';


export default function EditCompanyProfilePage() {
  const initialValues: EditCompanyProfileFormValues = {
    companyName: companyData.companyProfile.companyName,
    headquartersLocation: companyData.companyProfile.headquartersLocation,
    contractDuration: companyData.companyProfile.contractDuration,
    openings: companyData.companyProfile.openings,
    workingStyle: companyData.companyProfile.workingStyle,
    companyOverview: companyData.companyProfile.companyOverview,
    activeRepertoire: companyData.companyProfile.activeRepertoire,
    productionGallery: companyData.companyProfile.productionGallery,
  };

  const handleSave = (data: EditCompanyProfileFormValues) => {
    console.log('Saved Company Profile Data:', data);
  };

  const handleCancel = () => {
    console.log('Edit cancelled');
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <EditCompanyProfileContainer
        initialValues={initialValues}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
}