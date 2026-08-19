"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarIcon, Send } from "lucide-react";

export interface CurrentCompanyFormValues {
  companyName: string;
  location: string;
  from: string;
  to: string;

  isCurrentlyWorking: boolean;
}

interface CurrentCompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CurrentCompanyFormValues) => void;
}

export function CurrentCompanyModal({
  isOpen,
  onClose,
  onSubmit,
}: CurrentCompanyModalProps) {
  const { register, handleSubmit, setValue, watch, reset } =
    useForm<CurrentCompanyFormValues>({
      defaultValues: {
        companyName: "Corps de Ballet",
        location: "New York City Ballet",
        from: "2026-08-20",
        to: "2026-08-20",
        isCurrentlyWorking: true,
      },
    });

  // eslint-disable-next-line react-hooks/incompatible-library
  const isCurrentlyWorking = watch("isCurrentlyWorking");

  const handleFormSubmit = (data: CurrentCompanyFormValues) => {
    onSubmit(data);
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl p-6 bg-[#f8f8f8] border border-zinc-200/80 rounded-none shadow-lg gap-6">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b border-zinc-200/60">
          <DialogTitle className="font-mono text-base font-bold uppercase tracking-wider text-zinc-900">
            Current Company
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Company Name Select / Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Company Name
              </label>
              <Select
                defaultValue="Corps de Ballet"
                onValueChange={(val) => setValue("companyName", val as string)}
              >
                <SelectTrigger className="h-10! text-xs bg-white border-zinc-200/80 rounded-none text-zinc-900 focus:ring-1 focus:ring-zinc-400">
                  <SelectValue placeholder="Select Role / Company" />
                </SelectTrigger>
                <SelectContent className="rounded-none text-xs">
                  <SelectItem value="Corps de Ballet">
                    Corps de Ballet
                  </SelectItem>
                  <SelectItem value="Royal Danish Ballet">
                    Royal Danish Ballet
                  </SelectItem>
                  <SelectItem value="Paris Opéra Ballet">
                    Paris Opéra Ballet
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                Location
              </label>
              <Input
                {...register("location")}
                placeholder="e.g. New York City Ballet"
                className="h-10 text-xs bg-white border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* From Date */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                From
              </label>
              <div className="relative">
                <Input
                  type="date"
                  {...register("from")}
                  className="h-10 text-xs bg-white border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400 pr-9"
                />
                <CalendarIcon className="w-4 h-4 text-zinc-500 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* To Date */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-medium block">
                To
              </label>
              <div className="relative">
                <Input
                  type="date"
                  {...register("to")}
                  disabled={isCurrentlyWorking}
                  className="h-10 text-xs bg-white border-zinc-200/80 rounded-none text-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-400 pr-9 disabled:opacity-50"
                />
                <CalendarIcon className="w-4 h-4 text-zinc-500 absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Present Working Checkbox */}
          <div className="flex items-center space-x-2 pt-1">
            <Checkbox
              id="currentlyWorking"
              checked={isCurrentlyWorking}
              onCheckedChange={(checked) =>
                setValue("isCurrentlyWorking", !!checked)
              }
              className="rounded-none border-zinc-400 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-white"
            />
            <label
              htmlFor="currentlyWorking"
              className="text-xs text-zinc-600 cursor-pointer font-mono"
            >
              Presently Working Here (08/20/2026)
            </label>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3 pt-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="h-10 rounded-none border-zinc-300 bg-white hover:bg-zinc-100 text-xs font-medium text-zinc-800"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="h-10 rounded-none bg-[#2a2c30] hover:bg-black text-white text-xs font-medium flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
