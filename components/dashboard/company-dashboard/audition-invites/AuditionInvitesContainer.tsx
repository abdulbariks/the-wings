'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Send, XCircle, CheckCircle2, Clock, SendHorizontal } from 'lucide-react';

export type InviteStatus = 'Accepted' | 'Pending' | 'Declined';

export interface AuditionInvite {
  id: string;
  initial: string;
  name: string;
  location: string;
  status: InviteStatus;
  proposedDate: string;
  venue: string;
  notes: string;
}

interface AuditionInvitesContainerProps {
  initialInvites: AuditionInvite[];
  onSendNewInvitation?: () => void;
  onCancelInvite?: (id: string) => void;
  onSendReminder?: (id: string) => void;
}

export function AuditionInvitesContainer({
  initialInvites,
  onSendNewInvitation,
  onCancelInvite,
  onSendReminder,
}: AuditionInvitesContainerProps) {
  const [invites, setInvites] = React.useState<AuditionInvite[]>(initialInvites);

  const handleCancel = (id: string) => {
    setInvites((prev) => prev.filter((item) => item.id !== id));
    if (onCancelInvite) {
      onCancelInvite(id);
    }
  };

  const getStatusBadge = (status: InviteStatus) => {
    switch (status) {
      case 'Accepted':
        return (
          <Badge
            variant="outline"
            className="bg-[#ebebeb] text-zinc-800 border-none rounded-none text-xs font-normal px-2.5 py-1 flex items-center gap-1 shrink-0"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-zinc-800" />
            Accepted
          </Badge>
        );
      case 'Pending':
        return (
          <Badge
            variant="outline"
            className="bg-[#ebebeb] text-zinc-800 border-none rounded-none text-xs font-normal px-2.5 py-1 flex items-center gap-1 shrink-0"
          >
            <Clock className="w-3.5 h-3.5 text-zinc-800" />
            Pending
          </Badge>
        );
      case 'Declined':
        return (
          <Badge
            variant="outline"
            className="bg-[#ebebeb] text-zinc-800 border-none rounded-none text-xs font-normal px-2.5 py-1 flex items-center gap-1 shrink-0"
          >
            <XCircle className="w-3.5 h-3.5 text-zinc-800" />
            Declined
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Header */}
      <Card className="border border-zinc-200/80 shadow-none rounded-none bg-[#f8f8f8] p-4 flex md:flex-row items-center justify-between gap-4">
        <h1 className="font-serif text-lg font-normal text-zinc-900">
          My Saved Talent Shortlist
        </h1>
        <Button
          type="button"
          onClick={onSendNewInvitation}
          className="h-9 rounded-none bg-[#1c1e22] hover:bg-black text-white text-xs px-4 flex items-center gap-2"
        >
          <SendHorizontal className="w-3.5 h-3.5" />
          Send New Invitation
        </Button>
      </Card>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {invites.map((item) => (
          <Card
            key={item.id}
            className="border border-zinc-200/80 shadow-none rounded-none bg-[#f8f8f8] p-5 flex flex-col justify-between space-y-4"
          >
            {/* Header Info */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#ececec] border border-zinc-200/60 flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg font-bold text-zinc-900">
                    {item.initial}
                  </span>
                </div>
                <div className="space-y-0.5">
                  <h2 className="font-serif text-base font-semibold text-zinc-900 leading-tight">
                    {item.name}
                  </h2>
                  <p className="text-xs text-zinc-400 font-normal">
                    {item.location}
                  </p>
                </div>
              </div>

              {getStatusBadge(item.status)}
            </div>

            {/* Details Box */}
            <div className="bg-[#f0f0f0] border border-zinc-200/60 p-3.5 text-xs space-y-2.5">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 font-normal">Proposed Date:</span>
                <span className="text-zinc-800 font-mono">{item.proposedDate}</span>
              </div>
              <div className="flex justify-between items-start gap-2">
                <span className="text-zinc-400 font-normal shrink-0">Location:</span>
                <span className="text-right text-zinc-800 font-normal">{item.venue}</span>
              </div>
              <div className="pt-2 border-t border-zinc-200/60 space-y-1">
                <span className="block text-[10px] tracking-wider uppercase font-semibold text-zinc-400">
                  NOTES:
                </span>
                <p className="text-zinc-700 leading-relaxed font-normal">
                  {item.notes}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleCancel(item.id)}
                className="h-9 rounded-none bg-[#f0f0f0] hover:bg-[#e4e4e4] border-none text-xs text-zinc-800 flex items-center justify-center gap-1.5"
              >
                <XCircle className="w-3.5 h-3.5 text-zinc-600" />
                Cancel Invite
              </Button>
              <Button
                type="button"
                onClick={() => onSendReminder?.(item.id)}
                className="h-9 rounded-none bg-[#1c1e22] hover:bg-black text-white text-xs flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                Send Reminder
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {invites.length === 0 && (
        <div className="bg-[#f8f8f8] border border-zinc-200/80 p-12 text-center text-xs text-zinc-400 font-mono">
          No audition invitations found.
        </div>
      )}
    </div>
  );
}