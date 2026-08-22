'use client';

import { EditCompanyProfileContainer, EditCompanyProfileFormValues } from '@/components/dashboard/company-dashboard/edit-profile/EditCompanyProfileContainer';
import companyData from '@/components/dashboard/company-dashboard/edit-profile/edit-company-profile-data.json';
import { useRouter } from 'next/navigation';


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
const router = useRouter();
  const handleCancel = () => {
    console.log('Edit cancelled');
    router.push('/company-dashboard/public-profile');
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