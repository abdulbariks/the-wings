import React from "react";

export const termsSections = [
  {
    id: "terms-acceptance",
    label: "Acceptance of terms",
    number: "01",
    title: "Acceptance of terms",
    text: "By creating an account or using The Wings, you agree to these Terms of Service. If you do not agree, you may not use the platform."
  },
  {
    id: "terms-eligibility",
    label: "Eligibility",
    number: "02",
    title: "Eligibility",
    text: "The Wings is for dance professionals and organizations. Members must provide accurate information about their professional identity and may be asked to verify it."
  },
  {
    id: "terms-verification",
    label: "Accounts & verification",
    number: "03",
    title: "Accounts verification",
    text: "You are responsible for your account and password. We may verify member identities to maintain the trust and integrity of the network. Misrepresentation may result in removal."
  },
  {
    id: "terms-greenlight",
    label: "The Green Light System",
    number: "04",
    title: "The Green Light system",
    text: "Green Light is an expression of professional interest. Sending one does not guarantee a response. Communication is enabled only when interest is mutual. Members must communicate respectfully; harassment may lead to account termination."
  },
  {
    id: "terms-content",
    label: "Content & Media",
    number: "05",
    title: "Content media",
    text: "You retain ownership of content and media you upload. You grant The Wings a license to display it within the platform. You are responsible for ensuring you hold the rights to all media you upload."
  },
  {
    id: "terms-billing",
    label: "Subscriptions & billing",
    number: "06",
    title: "Subscriptions billing",
    text: "Company and creative plans are billed on a recurring basis. Fees are non-refundable except where required by law. You may cancel at any time, with access continuing until the end of the billing period."
  },
  {
    id: "terms-acceptable",
    label: "Acceptable Use",
    number: "07",
    title: "Acceptable use",
    text: "Members may not scrape, redistribute, or misuse member data; impersonate others; or use The Wings for purposes outside professional networking and casting. We may suspend accounts that violate these terms."
  },
  {
    id: "terms-termination",
    label: "Termination",
    number: "08",
    title: "Termination",
    text: "You may close your account at any time. We may suspend or terminate accounts that breach these terms or threaten the integrity of the platform."
  },
  {
    id: "terms-disclaimer",
    label: "Disclaimer",
    number: "09",
    title: "Disclaimer",
    text: "The Wings is a networking and casting platform. We do not guarantee employment, auditions, or matches. We are not a party to any agreement reached between members."
  },
  {
    id: "terms-changes",
    label: "Changes to these terms",
    number: "10",
    title: "Changes to these terms",
    text: "We may update these terms from time to time. Material changes will be communicated to members in advance."
  }
];

interface PointsOfTermsOfServiceProps {
  sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
}

export default function PointsOfTermsOfService({ sectionRefs }: PointsOfTermsOfServiceProps) {
  return (
    <div className="space-y-0 divide-y divide-[#0F0D0B]/10">
      {termsSections.map((sec) => (
        <section
          key={sec.id}
          id={sec.id}
          ref={(el) => {
            sectionRefs.current[sec.id] = el;
          }}
          className="scroll-mt-36 py-8 first:pt-0 last:pb-0"
        >
          <div className="flex gap-6 md:gap-8 items-start">
            <span className="font-sans text-sm md:text-base text-[#9EA1AB]/60 font-semibold tracking-wider w-8 pt-1 text-left">
              {sec.number}
            </span>
            <div className="flex-1">
              <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-[#1d1f2c] font-bold mb-3 leading-snug">
                {sec.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-[#4A4C56] leading-relaxed">
                {sec.text}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
