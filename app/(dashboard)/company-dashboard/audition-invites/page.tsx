'use client';

import { AuditionInvite, AuditionInvitesContainer } from '@/components/dashboard/company-dashboard/audition-invites/AuditionInvitesContainer';
import invitesData from '@/components/dashboard/company-dashboard/audition-invites/audition-invites-data.json';

export default function AuditionInvitesPage() {
  const handleSendNewInvitation = () => {
    console.log('Open Send New Invitation modal');
  };

  const handleCancelInvite = (id: string) => {
    console.log(`Cancelled audition invite ID: ${id}`);
  };

  const handleSendReminder = (id: string) => {
    console.log(`Sent reminder for audition invite ID: ${id}`);
  };

  return (
    <div className="bg-[#f2f2f2] min-h-screen">
      <AuditionInvitesContainer
        initialInvites={invitesData.invites as AuditionInvite[]}
        onSendNewInvitation={handleSendNewInvitation}
        onCancelInvite={handleCancelInvite}
        onSendReminder={handleSendReminder}
      />
    </div>
  );
}