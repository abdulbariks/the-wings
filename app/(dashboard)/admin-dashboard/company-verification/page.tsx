"use client";

import {
  CompanyVerificationContainer,
  VerificationCompany,
} from "@/components/dashboard/admin-dashboard/company-verification/CompanyVerificationContainer";
import companyData from "@/components/dashboard/admin-dashboard/company-verification/company-verification-data.json";

export default function CompanyVerificationPage() {
  const handleApprove = (id: string) => {
    console.log("Approved company:", id);
  };

  const handleReject = (id: string) => {
    console.log("Rejected company:", id);
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <CompanyVerificationContainer
        initialCompanies={companyData.companies as VerificationCompany[]}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
}
