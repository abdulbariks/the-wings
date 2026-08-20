"use client";
import React from "react";

import { User, Settings, LogOut, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProfileDropdownProps } from "@/types/User";

const DashboardProfileDropdown = ({ user }: ProfileDropdownProps) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <button
              type="button"
              className="h-10 md:h-12 px-1.5 border outline-none focus-visible:ring-2 bg-[#F4F4F2] focus-visible:ring-gray-400 cursor-pointer flex items-center gap-2"
            >
              <div className="size-6 md:size-8.5  bg-gray-300 flex justify-center items-center">
                <User size={24} />
              </div>
              <div className="text-left hidden md:blcok">
                <h5 className="font-serif font-medium ">{user?.name}</h5>
                <p className="text-[#A19E96] capitalize text-sm leading-tight">
                  {user?.role}
                </p>
              </div>
              <p className="px-2  hidden md:blcok">
                <ChevronDown className="size-4" />
              </p>
            </button>
          }
        />

        <DropdownMenuContent align="end" className="z-100 w-56 rounded-none ">
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="h-12 hover:bg-[#F4F3F1]! rounded-none cursor-pointer">
            <User />
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem className="h-12 hover:bg-[#F4F3F1]! rounded-none cursor-pointer">
            <Settings />
            Settings
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            variant="destructive"
            className=" hover:bg-[#F4F3F1]! rounded-none cursor-pointer"
          >
            <LogOut />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DashboardProfileDropdown;
