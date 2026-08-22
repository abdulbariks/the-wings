'use client';

import { useRouter } from 'next/navigation';
import publicCompanyData from '@/components/dashboard/company-dashboard/public-profile/public-company-profile-data.json';
import { PublicCompanyProfileContainer } from '@/components/dashboard/company-dashboard/public-profile/PublicCompanyProfileContainer';


export default function PublicCompanyProfilePage() {
  const router = useRouter();

  const handleEditClick = () => {
    router.push('/company-dashboard/edit-profile');
  };

  const handlePreviewClick = () => {
    console.log('Open Preview Profile Pop-up Modal');
  };

  return (
    <div className="bg-[#f2f2f2] min-h-screen">
      <PublicCompanyProfileContainer
        data={publicCompanyData.company}
        onEditClick={handleEditClick}
        onPreviewClick={handlePreviewClick}
      />
    </div>
  );
}