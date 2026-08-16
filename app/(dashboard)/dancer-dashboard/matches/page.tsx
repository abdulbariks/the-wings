"use client";
import matchesData from "@/components/dashboard/company-dashboard/matches/matches-data.json";
import {
  ChatWindow,
  SelectedMatch,
} from "@/components/dashboard/company-dashboard/matches/ChatWindow";
import * as React from "react";
import {
  MatchItem,
  MatchSidebar,
} from "@/components/dashboard/company-dashboard/matches/MatchSidebar";

export default function MatchesPage() {
  const [matches, setMatches] = React.useState<SelectedMatch[]>(
    matchesData.matches as SelectedMatch[],
  );
  const [selectedMatchId, setSelectedMatchId] = React.useState<string>(
    matchesData.matches[0].id,
  );

  const selectedMatch =
    matches.find((m) => m.id === selectedMatchId) || matches[0];

  const handleSendMessage = (content: string) => {
    const newMessage = {
      id: `msg-${Date.now()}`,
      sender: "Astrid Lindholm",
      timestamp: "Just now",
      content,
      isOutgoing: true,
    };

    setMatches((prevMatches) =>
      prevMatches.map((m) =>
        m.id === selectedMatchId
          ? { ...m, messages: [...m.messages, newMessage] }
          : m,
      ),
    );
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <div className="flex flex-col lg:flex-row items-start gap-5">
        <MatchSidebar
          matches={matches as MatchItem[]}
          selectedMatchId={selectedMatchId}
          onSelectMatch={(id) => setSelectedMatchId(id)}
        />
        <ChatWindow match={selectedMatch} onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
