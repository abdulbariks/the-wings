"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Eye, EyeOff } from "lucide-react";

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
import { Checkbox } from "@/components/ui/checkbox";

const registerSchema = z
  .object({
    fullName: z.string().min(2, { message: "Full name is required." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z.string(),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the Terms of Service and Privacy Policy.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log("Registration Payload:", data);
    router.push("/email-verify");
  };

  return (
    <div className="w-full mx-auto space-y-6">
      {/* Brand Header */}
      <div className="text-center">
        <h1 className="font-serif tracking-[0.25em] text-3xl sm:text-4xl font-semibold text-zinc-900 uppercase">
          TILE WINGS
        </h1>
      </div>

      {/* Form Card */}
      <div className="bg-white w-full p-6 sm:p-8 border border-zinc-200/80 shadow-sm space-y-5">
        <h2 className="font-serif text-center text-xl font-medium text-zinc-800 border-b border-zinc-100 pb-3">
          Create Dancer Account
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" font-semibold uppercase tracking-wider text-zinc-500">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. Astrid Lindholm"
                      className="bg-zinc-100/70 border-none h-12 text-xs focus-visible:ring-1 focus-visible:ring-zinc-400 placeholder:text-zinc-400 mt-1"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />

            {/* Email Address */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" font-semibold uppercase tracking-wider text-zinc-500">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="a.lindholm@ballet.dk"
                      type="email"
                      className="bg-zinc-100/70 border-none h-12 text-xs focus-visible:ring-1 focus-visible:ring-zinc-400 placeholder:text-zinc-400 mt-1"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" font-semibold uppercase tracking-wider text-zinc-500">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••••••"
                        className="bg-zinc-100/70 border-none h-12 text-xs pr-10 focus-visible:ring-1 focus-visible:ring-zinc-400 placeholder:text-zinc-400 mt-1"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" font-semibold uppercase tracking-wider text-zinc-500">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••••••"
                        className="bg-zinc-100/70 border-none h-12 text-xs pr-10 focus-visible:ring-1 focus-visible:ring-zinc-400 placeholder:text-zinc-400 mt-1"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />

            {/* Terms and Conditions Checkbox */}
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="space-y-1 pt-1">
                  <div className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="h-3.5 w-3.5 border-zinc-300"
                      />
                    </FormControl>
                    <label className="text-[10px] text-zinc-500 leading-none">
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="font-semibold text-zinc-800 underline underline-offset-2"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="font-semibold text-zinc-800 underline underline-offset-2"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full capitalize"
            >
              Create Dancer Account
            </Button>
          </form>
        </Form>

        {/* Sign In Link */}
        <div className="text-center pt-1">
          <p className="text-xs text-zinc-500">
            Already have an account?{" "}
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
