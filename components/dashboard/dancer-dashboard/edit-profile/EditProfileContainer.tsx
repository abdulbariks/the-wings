"use client";

import * as React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  CurrentCompanyModal,
  CurrentCompanyFormValues,
} from "./CurrentCompanyModal";
import { Plus, Trash2, X, UploadCloud, ChevronDown, Film } from "lucide-react";

export interface EmploymentItem {
  id: string;
  role: string;
  company: string;
  period: string;
}

export interface InterviewQuestionItem {
  id: string;
  question: string;
  answer: string;
}

export interface EditProfileFormValues {
  fullName: string;
  rank: string;
  height: string;
  primaryLocation: string;
  workVisa: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  nationality: string;
  languages: string;
  visaStatus: string;
  aboutYou: string;
  availableFrom: string;
  revocation: string;
  skills: string[];
  employmentHistory: EmploymentItem[];
  interviewQuestions: InterviewQuestionItem[];
  galleryImages: string[];
  danceVideos: string[];
}

interface EditProfileContainerProps {
  initialValues: Omit<EditProfileFormValues, "galleryImages" | "danceVideos">;
  currentCompany: { name: string; since: string };
  initialGalleryImages?: string[];
  initialDanceVideos?: string[];
  onSave?: (data: EditProfileFormValues) => void;
  onCancel?: () => void;
}

export function EditProfileContainer({
  initialValues,
  currentCompany: initialCurrentCompany,
  initialGalleryImages = [],
  initialDanceVideos = [],
  onSave,
  onCancel,
}: EditProfileContainerProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentCompany, setCurrentCompany] = React.useState(
    initialCurrentCompany,
  );
  const [tagInput, setTagInput] = React.useState("");

  const { register, handleSubmit, control, watch, setValue } =
    useForm<EditProfileFormValues>({
      defaultValues: {
        ...initialValues,
        galleryImages: initialGalleryImages,
        danceVideos: initialDanceVideos,
      },
    });

  const skills = watch("skills") || [];
  const galleryImages = watch("galleryImages") || [];
  const danceVideos = watch("danceVideos") || [];

  const { fields: employmentFields, remove: removeEmployment } = useFieldArray({
    control,
    name: "employmentHistory",
  });

  const { fields: questionFields, append: appendQuestion } = useFieldArray({
    control,
    name: "interviewQuestions",
  });

  // Tag Management
  const handleAddTag = () => {
    if (tagInput.trim() && !skills.includes(tagInput.trim())) {
      setValue("skills", [...skills, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setValue(
      "skills",
      skills.filter((tag) => tag !== tagToRemove),
    );
  };

  // Multiple File Upload Handlers
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setValue("galleryImages", [...galleryImages, ...newUrls]);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setValue("danceVideos", [...danceVideos, ...newUrls]);
    }
  };

  const removeImage = (index: number) => {
    setValue(
      "galleryImages",
      galleryImages.filter((_, i) => i !== index),
    );
  };

  const removeVideo = (index: number) => {
    setValue(
      "danceVideos",
      danceVideos.filter((_, i) => i !== index),
    );
  };

  const handleCompanyModalSubmit = (data: CurrentCompanyFormValues) => {
    setCurrentCompany({
      name: `${data.companyName} (${data.location})`,
      since: data.from.split("-")[0] || "2026",
    });
  };

  const handleFormSubmit = (data: EditProfileFormValues) => {
    if (onSave) onSave(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* Upper Section: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Edit Dancer Profile Form */}
        <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white p-6 space-y-4">
          <div className="border-b border-zinc-100 pb-3">
            <h1 className="font-serif text-lg font-bold text-zinc-900">
              Edit Dancer Profile
            </h1>
            <p className="text-xs text-zinc-400 font-normal">
              Keep your profile up to date so companies can find you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Full Name
              </label>
              <Input
                {...register("fullName")}
                className="h-9 text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Your Rank
              </label>
              <Input
                {...register("rank")}
                className="h-9 text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Height
              </label>
              <Input
                {...register("height")}
                className="h-9 text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Primary Location
              </label>
              <Input
                {...register("primaryLocation")}
                className="h-9 text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Work Visa
              </label>
              <Input
                {...register("workVisa")}
                className="h-9 text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Date of Birth
              </label>
              <Input
                {...register("dateOfBirth")}
                className="h-9 text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Email
              </label>
              <Input
                {...register("email")}
                className="h-9 text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Phone
              </label>
              <Input
                {...register("phone")}
                className="h-9 text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Nationality
              </label>
              <Input
                {...register("nationality")}
                className="h-9 text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Languages
              </label>
              <Input
                {...register("languages")}
                className="h-9 text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
            </div>
          </div>

          <div className="space-y-1.5 pt-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
              Visa Status
            </label>
            <Input
              {...register("visaStatus")}
              className="h-9 text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
            />
          </div>

          <div className="space-y-1.5 pt-1">
            <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
              About You
            </label>
            <Textarea
              {...register("aboutYou")}
              className="min-h-[100px] text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400 resize-y"
            />
          </div>
        </Card>

        {/* Right Column: Company, Skills, Availability */}
        <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white p-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
                Current Company
              </h2>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(true)}
                className="h-7 text-[11px] rounded-none border-zinc-200/80 bg-zinc-100/60 hover:bg-zinc-100 text-zinc-800 px-3 flex items-center gap-1"
              >
                <Plus className="w-3 h-3" /> Add Company
              </Button>
            </div>

            <div className="bg-zinc-100/60 p-3 text-xs flex items-center justify-between">
              <span className="font-semibold text-zinc-900">
                {currentCompany.name}
              </span>
              <span className="text-zinc-400 text-[11px]">
                Since {currentCompany.since}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline justify-between">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
                Employment History
              </h2>
              <span className="text-[10px] text-zinc-400 font-mono">
                (LAST 3 COMPANIES)
              </span>
            </div>

            <div className="space-y-2">
              {employmentFields.map((field, index) => (
                <div
                  key={field.id}
                  className="bg-zinc-100/60 p-3 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-0.5">
                    <span className="font-semibold text-zinc-900 block">
                      {field.role}
                    </span>
                    <span className="text-[11px] text-zinc-400 block">
                      {field.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-[11px] font-mono text-zinc-500">
                      {field.period}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeEmployment(index)}
                      className="text-zinc-400 hover:text-zinc-900 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
              Your Skills & Repertoire
            </h2>

            <div className="flex items-center gap-0">
              <Input
                placeholder="Add repertoire or choreographer..."
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddTag();
                  }
                }}
                className="h-9 text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
              <Button
                type="button"
                onClick={handleAddTag}
                className="h-9 rounded-none bg-[#3f4147] hover:bg-black text-white text-xs px-4 flex items-center gap-1 shrink-0"
              >
                <Plus className="w-3.5 h-3.5" /> Add Tag
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {skills.map((skill, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="bg-zinc-100/80 text-zinc-800 border-none rounded-none text-[11px] font-normal px-2.5 py-1 flex items-center gap-1.5"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(skill)}
                    className="hover:text-zinc-900 text-zinc-500"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
              Availability
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                  Available, From
                </label>
                <Input
                  {...register("availableFrom")}
                  className="h-9 text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                  Revocation
                </label>
                <Input
                  {...register("revocation")}
                  className="h-9 text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Middle Section: Multiple Upload Image & Video */}
      <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white p-6 space-y-6">
        <div className="border-b border-zinc-100 pb-3">
          <h2 className="font-serif text-base font-bold text-zinc-900">
            Upload Images & Videos
          </h2>
          <p className="text-xs text-zinc-400 font-normal">
            Upload multiple photos and video reels to showcase your work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {/* MULTIPLE GALLERY IMAGES UPLOAD */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Gallery Images ({galleryImages.length})
              </label>
              <span className="text-[10px] text-zinc-400">PNG, JPG, WEBP</span>
            </div>

            <label className="border border-dashed border-zinc-300 bg-zinc-50/50 hover:bg-zinc-100/60 cursor-pointer flex flex-col items-center justify-center text-center p-5 transition-colors">
              <UploadCloud className="w-5 h-5 text-zinc-400 mb-1.5" />
              <span className="text-xs font-medium text-zinc-800">
                Drag & drop or click to upload
              </span>
              <span className="text-[10px] text-zinc-400 pt-0.5">
                Select multiple image files
              </span>
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>

            {/* Gallery Images Previews */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 pt-1">
              {galleryImages.map((imgUrl, index) => (
                <div
                  key={index}
                  className="relative aspect-square border border-zinc-200 bg-zinc-900 overflow-hidden group"
                >
                  <img
                    src={imgUrl}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-black/80 hover:bg-black text-white p-1 rounded-none transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* MULTIPLE DANCE VIDEOS UPLOAD */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Dance Videos ({danceVideos.length})
              </label>
              <span className="text-[10px] text-zinc-400">MP4, MOV, WEBM</span>
            </div>

            <label className="border border-dashed border-zinc-300 bg-zinc-50/50 hover:bg-zinc-100/60 cursor-pointer flex flex-col items-center justify-center text-center p-5 transition-colors">
              <Film className="w-5 h-5 text-zinc-400 mb-1.5" />
              <span className="text-xs font-medium text-zinc-800">
                Drag & drop or click to upload
              </span>
              <span className="text-[10px] text-zinc-400 pt-0.5">
                Select multiple video files
              </span>
              <input
                type="file"
                accept="video/*"
                multiple
                className="hidden"
                onChange={handleVideoUpload}
              />
            </label>

            {/* Dance Videos Previews */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {danceVideos.map((videoUrl, index) => (
                <div
                  key={index}
                  className="relative aspect-video border border-zinc-200 bg-zinc-900 overflow-hidden group flex items-center justify-center"
                >
                  <video
                    src={videoUrl}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <button
                    type="button"
                    onClick={() => removeVideo(index)}
                    className="absolute top-1 right-1 bg-black/80 hover:bg-black text-white p-1 rounded-none transition-colors z-10"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Bottom Section: Interview Questions */}
      <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white p-6 space-y-4">
        <div>
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
            Interview Questions
          </h2>
          <p className="text-xs text-zinc-400 font-normal">
            Select questions from the list and answer up to 2 questions-
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questionFields.map((q, index) => (
            <div key={q.id} className="space-y-3">
              <div className="bg-zinc-100/80 p-3 flex items-center justify-between text-xs font-medium text-zinc-900 border border-zinc-200/60">
                <span>{q.question}</span>
                <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-medium block">
                  Your Answer{" "}
                  <span className="text-zinc-400 font-normal">
                    (2-3 SENTENCES)
                  </span>
                </label>
                <Textarea
                  {...register(`interviewQuestions.${index}.answer`)}
                  className="min-h-[90px] text-xs bg-zinc-100/60 border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400 resize-y"
                />
              </div>
            </div>
          ))}
        </div>

        {/* {questionFields.length < 2 && ( */}
        <Button
          type="button"
          variant="outline"
          onClick={() =>
            appendQuestion({
              id: `q-${Date.now()}`,
              question: "What is your dream role or choreographic piece?",
              answer: "",
            })
          }
          className="w-full h-10 rounded-none border border-zinc-200 bg-zinc-100/50 hover:bg-zinc-100 text-xs font-medium text-zinc-800 flex items-center justify-center gap-1.5 mt-2"
        >
          <Plus className="w-3.5 h-3.5" /> Add Another Question
        </Button>
        {/* )} */}

        {/* Global Save / Cancel Bar */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-100">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="h-10 rounded-none border-zinc-200 bg-zinc-100/60 hover:bg-zinc-100 text-xs font-medium text-zinc-800 px-6"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="h-10 rounded-none bg-zinc-900 hover:bg-black text-white text-xs font-medium px-6"
          >
            Save Changes
          </Button>
        </div>
      </Card>

      {/* Modal Dialog */}
      <CurrentCompanyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCompanyModalSubmit}
      />
    </form>
  );
}
