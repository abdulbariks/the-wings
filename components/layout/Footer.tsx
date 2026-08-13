"use client";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Button } from "../ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    platform: [
      { name: "How it works", href: "/" },
      { name: "Browse dancers", href: "/" },
      { name: "Browse companies", href: "/" },
      { name: "Pricing", href: "/" },
    ],
    company: [
      { name: "About", href: "/" },
      { name: "Careers", href: "/" },
      { name: "Journal", href: "/" },
      { name: "Contact", href: "/" },
    ],
    support: [
      { name: "FAQ", href: "/" },
      { name: "Help center", href: "/" },
      { name: "Privacy", href: "/" },
      { name: "Terms", href: "/" },
    ],
  };

  const socialLinks = [
    {
      name: "Twitter",
      icon: FaXTwitter,
      href: "https://twitter.com",
      color: "#000000",
    },
    {
      name: "Instagram",
      icon: AiFillInstagram,
      href: "https://instagram.com",
      color: "#E4405F",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      href: "https://facebook.com",
      color: "#1877F2",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com",
      color: "#0A66C2",
    },
  ];

  return (
    <footer className="relative bg-[#070707] text-white">
      {/* Animated Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-br from-primary via-secondary to-primary animate-gradient-x" />

      <div className="relative container px-4 sm:px-6 lg:px-8 pb-12 pt-20 md:pt-28 lg:pt-36 xl:pt-40">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 w-4/5">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                {/* <Image src="/logo.webp" alt="Logo" width={90} height={74} /> */}
                <h5 className="text-4xl lg:text-5xl font-bold font-serif">
                  The Wings
                </h5>
              </div>
            </Link>
            <p className="text-[#D2D2D5] mt-4 font-normal leading-relaxed">
              A private network connecting the world’s leading dancers,
              companies and choreographers through, respectful matching
            </p>
            {/* Contact Info */}
            <div className="text-[#D2D2D5] mt-10 space-y-4">
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex size-9 items-center justify-center bg-white/10 transition-all duration-300 hover:bg-white text-white hover:text-black"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 font-serif uppercase">
              Platform
            </h3>
            <ul className="space-y-4">
              {navigation.platform.map((item) => (
                <li
                  key={item.name}
                  className="hover:translate-x-1 transition-all duration-200 font-normal text-[#A5A5AB]"
                >
                  <Link href={item.href}>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/*  company */}
          <div className="w-fit lg:justify-self-center">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 font-serif uppercase">
              Company
            </h3>
            <ul className="space-y-4">
              {navigation.company.map((item, idx) => (
                <li
                  key={item.name}
                  className="hover:translate-x-1 transition-all duration-200 font-normal text-[#A5A5AB]"
                >
                  <Link href={item.href}>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* support */}
          <div className="w-fit lg:justify-self-end">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 font-serif uppercase">
              Support
            </h3>
            <ul className="space-y-4">
              {navigation.support.map((item) => (
                <li
                  key={item.name}
                  className="hover:translate-x-1 transition-all duration-200 font-normal text-[#A5A5AB]"
                >
                  <Link href={item.href}>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white/12 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h6 className="text-3xl lg:text-[40px] font-bold font-serif">Notes <i>from backstage.</i> </h6>
            <p className="text-[#D2D2D5] text-sm lg:text-base mt-2.5">Casting calls, season news and quiet advice - once a month.</p>
          </div>
          <form className="flex flex-col md:flex-row items-center gap-4">
            <input className="h-13 outline outline-white px-4 md:px-6 lg:px-8" placeholder="Enter your email" type="email" name="email" />
            <Button className="uppercase text-black hover:bg-white/95" variant="outline">Subscribe</Button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-[#A5A5AB]">
              © {currentYear} The Wings. All rights reserved.
            </p>
            <div>{/* right side */}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
