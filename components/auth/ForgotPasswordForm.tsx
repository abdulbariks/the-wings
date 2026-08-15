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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export const ForgotPasswordForm = () => {
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    console.log("Forgot Password Payload:", data);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h1 className="font-serif tracking-[0.25em] text-3xl sm:text-4xl font-semibold text-zinc-900 uppercase">
          TILE WINGS
        </h1>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-lg border border-zinc-200/80 shadow-sm space-y-5">
        <h2 className="font-serif text-center text-xl font-medium text-zinc-800 border-b border-zinc-100 pb-3">
          Reset Your Password
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="a.lindholm@ballet.dk"
                      type="email"
                      className="bg-zinc-100/70 border-none h-10 text-xs focus-visible:ring-1 focus-visible:ring-zinc-400 placeholder:text-zinc-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full h-10 bg-[#111111] hover:bg-zinc-800 text-white font-medium text-xs tracking-wide rounded transition-colors mt-2"
            >
              Send Reset Link
            </Button>
          </form>
        </Form>

        <div className="text-center pt-1">
          <p className="text-xs text-zinc-500">
            Remember your password?{" "}
            <Link
              href="/login"
              className="font-semibold text-zinc-900 underline underline-offset-2"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
