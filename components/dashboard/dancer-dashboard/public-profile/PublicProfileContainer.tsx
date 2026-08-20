"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CheckCircle2,
  MapPin,
  Calendar,
  Ruler,
  Pencil,
  Download,
  Play,
} from "lucide-react";
import Image from "next/image";

export interface ProfileHeader {
  name: string;
  verified: boolean;
  role: string;
  status: string;
  location: string;
  age: string;
  height: string;
  avatar: string;
  specialties: string[];
  bio: string;
}

export interface Experience {
  id: string;
  initial: string;
  title: string;
  company: string;
  period: string;
}

export interface Details {
  rank: string;
  height: string;
  workVisa: string;
  email: string;
  phone: string;
  nationality: string;
  languages: string;
  visaStatus: string;
  availability: string;
  relocation: string;
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
}

interface PublicProfileContainerProps {
  profile: ProfileHeader;
  skills: string[];
  experience: Experience[];
  details: Details;
  gallery: string[];
  videos: VideoItem[];
  onEditProfile?: () => void;
  onDownloadResume?: () => void;
}

export function PublicProfileContainer({
  profile,
  skills,
  experience,
  details,
  gallery,
  videos,
  onEditProfile,
  onDownloadResume,
}: PublicProfileContainerProps) {
  const [privateNote, setPrivateNote] = React.useState("");

  return (
    <div className="space-y-6">
      {/* 1. Header Banner */}
      <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white p-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="relative shrink-0">
              <Avatar className="w-28 h-28 rounded-none border border-zinc-200 object-cover">
                <AvatarImage
                  src={profile.avatar}
                  alt={profile.name}
                  className="object-cover"
                />
                <AvatarFallback className="rounded-none bg-zinc-100 text-zinc-700 font-serif text-2xl font-bold">
                  {profile.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <Badge className="absolute bottom-1 right-1 bg-white text-zinc-800 border border-zinc-300 rounded-none text-[9px] px-1.5 py-0.5 font-medium shadow-none">
                • {profile.status}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl font-bold text-zinc-900 leading-none">
                  {profile.name}
                </h1>
                {profile.verified && (
                  <CheckCircle2 className="w-4 h-4 text-zinc-900 fill-zinc-900 stroke-white" />
                )}
              </div>

              <p className="text-xs font-semibold text-zinc-600">
                {profile.role}
              </p>

              <div className="flex items-center gap-4 text-xs text-zinc-500 pt-1 flex-wrap">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  {profile.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  {profile.age}
                </span>
                <span className="flex items-center gap-1">
                  <Ruler className="w-3.5 h-3.5 text-zinc-400" />
                  {profile.height}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-2 flex-wrap">
                {profile.specialties.map((spec, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="bg-zinc-100/70 text-zinc-800 border border-zinc-200/80 rounded-none text-[11px] font-normal px-2.5 py-0.5"
                  >
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-end md:self-auto w-full md:w-auto">
            <Button
              type="button"
              variant="outline"
              onClick={onEditProfile}
              className="h-9 rounded-none border-zinc-200/80 bg-zinc-100/60 hover:bg-zinc-100 text-xs font-medium text-zinc-800 px-4 flex-1 md:flex-initial gap-1.5"
            >
              <Pencil className="w-3.5 h-3.5 text-zinc-600" />
              Edit Profile
            </Button>
            <Button
              type="button"
              onClick={onDownloadResume}
              className="h-9 rounded-none bg-zinc-900 hover:bg-black text-white text-xs font-medium px-4 flex-1 md:flex-initial gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume PDF
            </Button>
          </div>
        </div>
      </Card>

      {/* 2. Main Content Grid (Left Details + Right Sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section (2 Cols): Bio, Skills, Experience */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white p-6 space-y-6">
            {/* About Me */}
            <div className="space-y-2">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
                About Me
              </h2>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                {profile.bio}
              </p>
            </div>

            {/* My Skills & Repertoire */}
            <div className="space-y-3 pt-2">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
                My Skills & Repertoire
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="bg-zinc-100/60 text-zinc-800 border border-zinc-200/80 rounded-none text-[11px] font-normal px-2.5 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* My Experience */}
            <div className="space-y-3 pt-2">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
                My Experience
              </h2>
              <div className="space-y-2">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-zinc-100/60 p-4 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white border border-zinc-200/80 flex items-center justify-center text-xs font-serif font-bold text-zinc-900 shrink-0">
                        {exp.initial}
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-zinc-900 font-sans">
                          {exp.title}
                        </h3>
                        <p className="text-[11px] text-zinc-400 font-normal">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {exp.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Right Section (1 Col): My Details & Notes */}
        <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white p-6 space-y-6">
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
              My Details
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Rank:</span>
                <span className="font-medium text-zinc-900">
                  {details.rank}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Height:</span>
                <span className="font-medium text-zinc-900">
                  {details.height}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Work Visa:</span>
                <span className="font-medium text-zinc-900">
                  {details.workVisa}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Email:</span>
                <span className="font-medium text-zinc-900 truncate max-w-45">
                  {details.email}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Phone:</span>
                <span className="font-medium text-zinc-900">
                  {details.phone}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Nationality:</span>
                <span className="font-medium text-zinc-900">
                  {details.nationality}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Languages:</span>
                <span className="font-medium text-zinc-900">
                  {details.languages}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Visa Status:</span>
                <span className="font-medium text-zinc-900">
                  {details.visaStatus}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
              Availability
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-zinc-100">
                <span className="text-zinc-400">Available, From:</span>
                <span className="font-medium text-zinc-900">
                  {details.availability}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">Relocation:</span>
                <span className="font-medium text-zinc-900">
                  {details.relocation}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
              Notes
            </h2>
            <Textarea
              placeholder="Add a private note..."
              value={privateNote}
              onChange={(e) => setPrivateNote(e.target.value)}
              className="min-h-22.5 text-xs bg-zinc-50 border-zinc-200/80 rounded-none text-zinc-800 placeholder:text-zinc-400 focus-visible:ring-1 focus-visible:ring-zinc-400 resize-y"
            />
          </div>
        </Card>
      </div>

      {/* 3. My Dance Gallery Section */}
      <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white p-6 space-y-4">
        <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
          My Dance Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {gallery.map((imgUrl, i) => (
            <div
              key={i}
              className="aspect-square bg-zinc-100 border border-zinc-200/60 overflow-hidden group cursor-pointer relative"
            >
              <Image
                src={imgUrl}
                alt={`Dance gallery item ${i + 1}`}
                fill
                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Card>

      {/* 4. My Dance Videos Section */}
      <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
            My Dance Videos
          </h2>
          <Button
            type="button"
            variant="ghost"
            className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 hover:text-zinc-900 p-0 h-auto"
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((vid) => (
            <div
              key={vid.id}
              className="relative aspect-video bg-zinc-900 border border-zinc-200/60 overflow-hidden group cursor-pointer"
            >
              <Image
                src={vid.thumbnail}
                alt={vid.title}
                fill
                className="object-cover filter grayscale group-hover:grayscale-0 opacity-85 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3">
                <div className="bg-white/95 backdrop-blur-xs py-2 px-3 flex items-center justify-between border border-zinc-200/80">
                  <span className="text-xs font-medium text-zinc-900 truncate">
                    {vid.title}
                  </span>
                  <div className="w-5 h-5 rounded-full border border-zinc-900 flex items-center justify-center shrink-0">
                    <Play className="w-2.5 h-2.5 text-zinc-900 fill-zinc-900 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
