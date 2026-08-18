"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ContactPageClient() {
  const [role, setRole] = useState("dancer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const roleOptions = [
    { value: "dancer", label: "Dancer" },
    { value: "director", label: "Artistic Director / Company Staff" },
    { value: "choreographer", label: "Choreographer" },
    { value: "other", label: "Other" },
  ];

  const selectedRoleLabel =
    roleOptions.find((option) => option.value === role)?.label ?? "Dancer";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, role, message });
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="mt-12 md:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block font-serif text-lg lg:text-xl text-primary font-medium"
              >
                Name
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="h-11 lg:h-12.5 rounded-none border border-zinc-200 bg-white px-3 text-sm focus-visible:ring-0 placeholder:text-zinc-400 font-sans"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block font-serif text-lg lg:text-xl text-primary font-medium"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="h-11 lg:h-12.5 rounded-none border border-zinc-200 bg-white px-3 text-sm focus-visible:ring-0 placeholder:text-zinc-400 font-sans"
              />
            </div>
          </div>

          {/* I Am A */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block font-serif text-lg lg:text-xl text-primary font-medium"
            >
              I Am A
            </label>

            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <button
                    id="role"
                    type="button"
                    className="w-full h-11 lg:h-12.5 rounded-none border border-zinc-200 bg-white px-3 text-left text-sm text-zinc-700 focus-visible:outline-none font-sans flex items-center justify-between cursor-pointer"
                  >
                    <span className="truncate">{selectedRoleLabel}</span>
                    <ChevronDown className="h-4 w-4 text-zinc-500" />
                  </button>
                }
              />

              <DropdownMenuContent
                align="start"
                className="w-(--anchor-width) rounded-none border border-zinc-200 bg-white text-sm font-sans shadow-none"
              >
                {roleOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => setRole(option.value)}
                    className={`rounded-none py-2 px-3 cursor-pointer ${
                      role === option.value
                        ? "bg-zinc-100"
                        : "hover:bg-zinc-100"
                    }`}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block font-serif text-lg lg:text-xl text-primary font-medium"
            >
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type message"
              required
              className="min-h-40 resize-y rounded-none border border-zinc-200 bg-white px-3 py-3 text-sm focus-visible:border-black focus-visible:ring-0 placeholder:text-zinc-400 font-sans"
            />
          </div>

          {/* Submit Button */}
          <div className=" flex justify-end lg:justify-start">
            <Button
              type="submit"
              className="lg:h-14 w-full md:w-fit  bg-black text-white hover:bg-black/90 px-8 py-3 rounded-none font-sans font-medium tracking-widest text-xs transition-colors duration-200 uppercase cursor-pointer"
            >
              Send Message
            </Button>
          </div>
        </div>

        {/* Right: Contact info cards */}
        <div className="lg:col-span-5 space-y-6 lg:mt-9">
          {/* Dancer support */}
          <div className="bg-[#F4F3F1] px-5 py-4 ">
            <h3 className="font-serif text-xl text-primary">Dancer support</h3>
            <p className="font-sans font-bold text-[#1c1f23] text-sm tracking-wide">
              dancers@thewings.com
            </p>
            <p className="font-sans text-xs md:text-sm text-zinc-500 leading-relaxed pt-1">
              Profile, applications, stage pass and account questions
            </p>
          </div>

          {/* Company workspaces */}
          <div className="bg-[#F4F3F1] px-5 py-4">
            <h3 className="font-serif text-xl text-primary">
              Company workspaces
            </h3>
            <p className="font-sans font-bold text-[#1c1f23] text-sm tracking-wide">
              company@thewings.com
            </p>
            <p className="font-sans text-xs md:text-sm text-zinc-500 leading-relaxed pt-1">
              Verification, reviewer seats and casting workflow.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
