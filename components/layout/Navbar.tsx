"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import ProfileDropdown from "./ProfileDropdown";
import Sidebar from "./Sidebar";
import { useState } from "react";
// import AuthModal from "@/app/(auth)/_components/AuthModal";
// import LogOutModal from "@/app/(auth)/_components/LogOutModal";

const Navbar = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [logOutModalOpen, setLogOutModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const user = {
    name: "Jacob Jones",
    email: "exhibitors@industryexpo2027.com",
    image: "/logo.webp",
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
  ];

  return (
    <section className="bg-[#F4F3F1]">
      <div className="container flex justify-between items-center h-20 xl:h-22">
        <div>
          <Link href="/">
            {/* <Image
              src="/logo.webp"
              alt="ITBA EXPO The Next 100"
              width={68}
              height={56}
            /> */}
            <p className="text-xl md:text-3xl font-serif font-bold">The Wings</p>
          </Link>
        </div>

        <ul className="hidden xl:flex gap-8 items-center font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors ${
                    isActive
                      ? "text-primary border-b border-primary"
                      : "text-[#777980] border-b border-[#F4F3F1]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/sign-in">
            <Button variant="outline" className="px-10 hidden md:block">
              Sign In
            </Button>
          </Link>
          <Button>Join The Wings</Button>
          <div className="hidden md:block">
            <ProfileDropdown />
          </div>
          <Button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className=" px-0 size-8 xl:hidden "
            variant="outline"
          >
            <HiOutlineMenuAlt3 className="size-6" />
          </Button>
        </div>
        {/* user dropdown */}
      </div>

      {/* sidebar */}
      <Sidebar
        user={user}
        links={links}
        setIsOpen={setSidebarOpen}
        isOpen={sidebarOpen}
      />
      {/* <AuthModal open={isOpen} setOpen={setIsOpen} />
      <LogOutModal
        isOpen={logOutModalOpen}
        onClose={() => setLogOutModalOpen(false)}
      /> */}
    </section>
  );
};

export default Navbar;