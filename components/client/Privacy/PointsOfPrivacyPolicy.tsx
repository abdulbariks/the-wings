import React from "react";

export const privacySections = [
  {
    id: "privacy-collect",
    label: "Information we collect",
    number: "01",
    title: "Information we collect",
    text: "We collect the information you provide when registering name, email, role, and profile details along with media you upload and activity on the platform such as Green Lights and messages."
  },
  {
    id: "privacy-use",
    label: "How we use your information",
    number: "02",
    title: "How we use your information",
    text: "To operate the platform, enable discovery and the Green Light system, verify identity, provide customer support, and improve our services. We never sell your personal data."
  },
  {
    id: "privacy-visibility",
    label: "Visibility of your profile",
    number: "03",
    title: "Visibility of your profile",
    text: "Your professional profile is visible to other members for the purpose of discovery. Private notes, personal shortlists, and Green Lights you send are never visible to other members."
  },
  {
    id: "privacy-sharing",
    label: "Data sharing",
    number: "04",
    title: "Data sharing",
    text: "We share data only as necessary to provide the service, comply with the law, or protect the rights and safety of members. Aggregate, anonymized data may be used for analytics."
  },
  {
    id: "privacy-retention",
    label: "Data retention",
    number: "05",
    title: "Data retention",
    text: "We retain your information while your account is active and for a limited period after closure to meet legal obligations. You may request deletion at any time."
  },
  {
    id: "privacy-security",
    label: "Security",
    number: "06",
    title: "Security",
    text: "We use appropriate technical and organizational measures to protect your data. No method of transmission is fully secure, but we work to protect your information."
  },
  {
    id: "privacy-rights",
    label: "Your rights",
    number: "07",
    title: "Your rights",
    text: "You have the right to access, update, or delete your personal data. You can exercise these rights at any time through your account settings or by contacting us."
  },
  {
    id: "privacy-transfers",
    label: "international transfers",
    number: "08",
    title: "International transfers",
    text: "As a global platform, your data may be processed in countries with different data protection laws. We apply appropriate safeguards where required."
  },
  {
    id: "privacy-contact",
    label: "Contact",
    number: "09",
    title: "Contact",
    text: "Questions about privacy? Reach us at privacy@thewings.dance."
  }
];

interface PointsOfPrivacyPolicyProps {
  sectionRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
}

export default function PointsOfPrivacyPolicy({ sectionRefs }: PointsOfPrivacyPolicyProps) {
  return (
    <div className="space-y-0 divide-y divide-[#0F0D0B]/10">
      {privacySections.map((sec) => (
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
