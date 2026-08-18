import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import ContactPageClient from "@/components/client/Contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | The Wings",
  description:
    "Write to us from the wings. A small team of dancers, directors and builders reads every message. Get support for dancer profiles or company workspaces.",
};

export default function ContactPage() {
  return (
    <section>
      <div className="container padding-default">
        <Heading>
          <Heading.Badge>Contact</Heading.Badge>
          <Heading.Title>Write to us from the wings</Heading.Title>
          <Heading.Subtitle>
            A small team of dancers, directors and builders reads every message.
            No ticket numbers, no chat rebots - usually a reply within two
            working days.
          </Heading.Subtitle>
        </Heading>

        <ContactPageClient />
      </div>
    </section>
  );
}
