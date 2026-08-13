"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

const verifySchema = z.object({
  pin: z
    .string()
    .length(6, { message: "Verification security code must be 6 digits." }),
});

type VerifyFormValues = z.infer<typeof verifySchema>;

interface EmailVerifyFormProps {
  email?: string;
  onResend?: () => void;
}

export const EmailVerifyForm = ({
  email = "a.lindholm@ballet.dk",
  onResend,
}: EmailVerifyFormProps) => {
  const form = useForm<VerifyFormValues>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = (data: VerifyFormValues) => {
    console.log("OTP Verification Code:", data.pin);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Brand Header */}
      <div className="text-center">
        <h1 className="font-serif tracking-[0.25em] text-3xl sm:text-4xl font-semibold text-zinc-900 uppercase">
          TILE WINGS
        </h1>
      </div>

      {/* Main Card Container */}
      <div className="bg-white p-6 sm:p-8 rounded-lg border border-zinc-200/80 shadow-sm space-y-6">
        {/* Header Message */}
        <div className="text-center space-y-2 border-b border-zinc-100 pb-4">
          <h2 className="font-serif text-xl font-medium text-zinc-900">
            Verify Your Email Address
          </h2>
          <p className="text-xs text-zinc-500 leading-relaxed max-w-xs mx-auto">
            We transmitted an official security verification link and code to:{" "}
            <span className="font-semibold text-zinc-800 underline underline-offset-2">
              {email}
            </span>
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* 6-Digit OTP Security Code */}
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem className="space-y-3 text-center">
                  <FormLabel className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 block text-left">
                    6-Digit Verification Security Code
                  </FormLabel>
                  <FormControl>
                    <InputOTP
                      maxLength={6}
                      {...field}
                      className="gap-2 justify-between"
                    >
                      <InputOTPGroup className="w-full grid grid-cols-6 gap-2">
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                          <InputOTPSlot
                            key={index}
                            index={index}
                            className="w-full h-12 bg-zinc-100/80 border-none rounded text-sm text-center font-medium text-zinc-800 focus-visible:ring-1 focus-visible:ring-zinc-400"
                          />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage className="text-[10px] text-left" />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full h-11 bg-[#111111] hover:bg-zinc-800 text-white font-medium text-xs tracking-wide rounded transition-colors"
            >
              Verify & Continue to Onboarding
            </Button>
          </form>
        </Form>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
          <button
            type="button"
            onClick={onResend}
            className="text-xs text-zinc-500 hover:text-zinc-800 underline underline-offset-2 transition-colors font-medium"
          >
            Resend Email
          </button>
          <Link
            href="/register"
            className="text-xs text-zinc-500 hover:text-zinc-800 underline underline-offset-2 transition-colors font-medium"
          >
            Change Email
          </Link>
        </div>
      </div>
    </div>
  );
};
