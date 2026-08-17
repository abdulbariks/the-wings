"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, Trash2 } from "lucide-react";

interface AccountPasswordFormProps {
  initialEmail: string;
  initialAvatarUrl: string;
}

export function AccountPasswordForm({
  initialEmail,
  initialAvatarUrl,
}: AccountPasswordFormProps) {
  const [email, setEmail] = React.useState(initialEmail);
  const [currentPassword, setCurrentPassword] = React.useState("••••••••••••");
  const [newPassword, setNewPassword] = React.useState("••••••••••••");
  const [confirmPassword, setConfirmPassword] = React.useState("••••••••••••");

  const [avatarUrl, setAvatarUrl] = React.useState(initialAvatarUrl);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setAvatarUrl(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteClick = () => {
    setAvatarUrl("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password/email update logic here
  };

  return (
    <Card className="border-zinc-200/80 shadow-none rounded-none bg-white h-full">
      <CardHeader className="pb-4 pt-5 px-6 border-b border-zinc-100">
        <CardTitle className="font-serif text-base font-semibold text-zinc-900">
          Account & Password
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-5">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Profile Picture Section */}
          <div className="space-y-2">
            <label className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
              PROFILE PICTURE
            </label>
            <div className="flex items-center gap-2">
              <Avatar className="h-12 w-12 rounded-none border border-zinc-200">
                <AvatarImage src={avatarUrl} alt="User Avatar" />
                <AvatarFallback className="rounded-none">AL</AvatarFallback>
              </Avatar>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="flex flex-col gap-1">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handleUploadClick}
                  className="h-6 w-6 rounded-none border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100"
                >
                  <Upload className="w-3 h-3" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handleDeleteClick}
                  className="h-6 w-6 rounded-none border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100"
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
              COMPANY / DIRECTOR EMAIL
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 text-xs bg-zinc-100/70 border-none rounded-none focus-visible:ring-1 focus-visible:ring-zinc-400 text-zinc-800"
            />
          </div>

          {/* Current Password */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
              CURRENT PASSWORD
            </label>
            <Input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="h-10 text-xs bg-zinc-100/70 border-none rounded-none focus-visible:ring-1 focus-visible:ring-zinc-400 text-zinc-800"
            />
          </div>

          {/* New Password Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                NEW PASSWORD
              </label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="h-10 text-xs bg-zinc-100/70 border-none rounded-none focus-visible:ring-1 focus-visible:ring-zinc-400 text-zinc-800"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">
                CONFIRM PASSWORD
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-10 text-xs bg-zinc-100/70 border-none rounded-none focus-visible:ring-1 focus-visible:ring-zinc-400 text-zinc-800"
              />
            </div>
          </div>

          {/* Submit Action */}
          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              className="bg-[#1a1a1a] hover:bg-black text-white text-xs px-6 py-2 rounded-none h-9 font-medium"
            >
              Save
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
