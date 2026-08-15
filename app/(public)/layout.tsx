"use client";

import { ReactLenis } from "lenis/react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root>
      <div className="min-h-screen flex flex-col bg-background ">
        <nav>
          <Navbar />
        </nav>
        <main className="flex-1">{children}</main>
        <div>
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
};

export default PublicLayout;
