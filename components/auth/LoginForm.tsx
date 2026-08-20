"use client";

import { useState } from "react";
import Link from "next/link";
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

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login Payload:", data);
  };

  return (
    <div className="w-full mx-auto space-y-8">
      {/* Brand Header */}
      <div className="text-center">
        <h1 className="font-serif tracking-[0.25em] text-3xl sm:text-4xl font-semibold text-zinc-900 uppercase">
          TILE WINGS
        </h1>
      </div>

      {/* Main Card Container */}
      <div className="bg-white p-8 sm:p-10 border border-zinc-200/80 shadow-sm space-y-6">
        <h2 className="font-serif text-center text-xl font-medium text-zinc-800 border-b border-zinc-100 pb-4">
          Sign In To Your Account
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Email Field */}
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
                      className="bg-zinc-100/70 border-none h-11 text-xs focus-visible:ring-1 focus-visible:ring-zinc-400 placeholder:text-zinc-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <FormLabel className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                      Password
                    </FormLabel>
                    <Link
                      href="/forgot-password"
                      className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 hover:text-zinc-700 transition-colors"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••••••"
                        className="bg-zinc-100/70 border-none h-11 text-xs pr-10 focus-visible:ring-1 focus-visible:ring-zinc-400 placeholder:text-zinc-400"
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

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              Sign In
            </Button>
          </form>
        </Form>

        {/* Signup Footer Link */}
        <div className="text-center pt-2">
          <p className="text-xs text-zinc-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-zinc-900 hover:underline inline-flex items-center gap-0.5"
            >
              Join The Wings &rarr;
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
