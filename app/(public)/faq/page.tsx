import type { Metadata } from "next";
import FAQPageClient from "@/components/client/FAQ/FAQPageClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | The Wings",
  description:
    "Find answers to frequently asked questions about The Wings platform, memberships, privacy, pricing, green lights, and how private auditions work for professional dancers and companies.",
};

export default function FAQPage() {
  return <FAQPageClient />;
}
