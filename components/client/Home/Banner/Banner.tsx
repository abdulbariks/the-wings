import React from "react";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";

const Banner = () => {
  return (
    <section className="container padding-default flex flex-col-reverse lg:flex-row items-center justify-center gap-10 xl:gap-20">
      <BannerLeft />
      <BannerRight />
    </section>
  );
};

export default Banner;
