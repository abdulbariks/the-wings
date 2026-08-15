import { Button } from "@/components/ui/button";
import React from "react";
import TestimonialsAvatars from "./TestimonialsAvatars";

const BannerLeft = () => {
  return (
    <div className="flex-1">
      <h2 className="text-[42px] md:text-6xl xl:text-7xl font-medium font-serif leading-tight">
        Where the world’s dancers meet the world’s stages.
      </h2>
      <p className="lg:text-lg text-[#4A4C56] mt-4">
        The Wings connects professional dancers, companies and choreographers
        through Green Light - a mutual, respectful signal of interest
      </p>
      <div className="mt-10 lg:mt-12 flex flex-col md:flex-row gap-4">
        <Button>JOIN AS A DANCER</Button>
        <Button variant="outline">JOIN AS A COMPANY</Button>
      </div>
      <TestimonialsAvatars/>
    </div>
  );
};

export default BannerLeft;
