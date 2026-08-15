"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageHeader,
} from "@/components/ui/message";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Copy, CalendarPlus, Paperclip, Send } from "lucide-react";

export interface ChatMessage {
  id: string;
  sender: string;
  timestamp: string;
  content: string;
  isOutgoing: boolean;
}

export interface SelectedMatch {
  id: string;
  name: string;
  role: string;
  location: string;
  initialLetter: string;
  email: string;
  messages: ChatMessage[];
}

interface ChatWindowProps {
  match: SelectedMatch;
  onSendMessage: (text: string) => void;
}

export function ChatWindow({ match, onSendMessage }: ChatWindowProps) {
  const [inputText, setInputText] = React.useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText);
    setInputText("");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(match.email);
  };

  return (
    <div className="flex-1 bg-white border border-zinc-200 flex flex-col justify-between min-h-150 shadow-xs">
      {/* Header */}
      <div className="p-4 bg-zinc-100/50 border-b border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 rounded-none bg-white border border-zinc-200 shrink-0">
            <AvatarFallback className="rounded-none font-serif text-lg font-bold text-zinc-900">
              {match.initialLetter}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-serif text-base font-semibold text-zinc-900">
              {match.name}
            </h3>
            <p className="text-xs text-zinc-500">
              {match.role} • {match.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <div className="flex items-center bg-white border border-zinc-200 text-xs text-zinc-600 px-2.5 py-1 font-mono">
            <span className="truncate max-w-45">{match.email}</span>
            <button
              onClick={copyEmail}
              className="ml-2 text-zinc-400 hover:text-zinc-700"
              title="Copy Email"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
          <Button className="bg-zinc-900 hover:bg-black text-white text-xs px-3 h-8 rounded-none gap-1.5 font-medium">
            <CalendarPlus className="w-3.5 h-3.5" />
            Propose Audition
          </Button>
        </div>
      </div>

      {/* Message Feed using Shadcn Message + Bubble */}
      <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-zinc-50/30">
        {match.messages.map((msg) => {
          const align = msg.isOutgoing ? "end" : "start";

          return (
            <Message key={msg.id} align={align} className="gap-3">
              {!msg.isOutgoing && (
                <MessageAvatar>
                  <Avatar className="h-8 w-8 rounded-none bg-white border border-zinc-200">
                    <AvatarFallback className="rounded-none text-xs font-serif font-bold text-zinc-900">
                      {match.initialLetter}
                    </AvatarFallback>
                  </Avatar>
                </MessageAvatar>
              )}

              <MessageContent className="max-w-[80%]">
                <MessageHeader className="text-[11px] text-zinc-400">
                  {msg.sender} • {msg.timestamp}
                </MessageHeader>
                <Bubble
                  variant={msg.isOutgoing ? "secondary" : "default"}
                  className="rounded-none shadow-none border-none p-0"
                >
                  <BubbleContent
                    className={`p-4 text-xs leading-relaxed rounded-none ${
                      msg.isOutgoing
                        ? "bg-zinc-600 text-white"
                        : "bg-zinc-100/90 text-zinc-800 border border-zinc-200/60"
                    }`}
                  >
                    {msg.content}
                  </BubbleContent>
                </Bubble>
              </MessageContent>
            </Message>
          );
        })}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSend}
        className="p-3 bg-zinc-100/50 border-t border-zinc-200 flex items-center gap-2"
      >
        <button
          type="button"
          className="text-zinc-400 hover:text-zinc-600 p-1.5"
          title="Attach file"
        >
          <Paperclip className="w-4 h-4" />
        </button>
        <Input
          placeholder="Type message to Artistic Director..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 border-none bg-transparent text-xs text-zinc-800 focus-visible:ring-0 placeholder:text-zinc-400"
        />
        <Button
          type="submit"
          className="bg-zinc-900 hover:bg-black text-white text-xs px-4 h-8 rounded-none gap-1.5 font-medium"
        >
          Sent <Send className="w-3 h-3" />
        </Button>
      </form>
    </div>
  );
}
