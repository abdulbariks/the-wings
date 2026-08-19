"use client";

import { User, Settings, LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProfileDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            className=" outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer"
          >
            <div className="size-9 xl:size-13 bg-gray-300 text-gray-600 flex justify-center items-center">
              <User size={24} />
            </div>
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
  );
};

export default ProfileDropdown;
