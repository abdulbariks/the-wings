import React from "react";

const stats = [
  {
    value: "12,400",
    label: "VERIFIED DANCERS",
  },
  {
    value: "480",
    label: "PARTNER COMPANIES",
  },
  {
    value: "62",
    label: "COUNTRIES",
  },
  {
    value: "94%",
    label: "MATCH RATE",
  },
];

const TrustedBy = () => {
  return (
    <section className="bg-[#E9E9EA] text-primary margin-default-bottom">
      <div className="container mx-auto">
        <div className="flex min-h-30 items-center flex-col lg:flex-row py-10">
          {/* Trusted By */}
          <div className="flex shrink-0 items-center lg:pr-12 pb-4 lg:pb-0 border-b lg:border-b-0 border-white/70  w-full lg:w-fit">
            <h3 className="font-serif text-2xl font-semibold w-full text-center">
              Trusted By
            </h3>
          </div>

          {/* Stats */}
          <div className="grid flex-1 grid-cols-2 md:grid-cols-4 lg:border-l border-white/70">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  p-4
                  text-center
                "
              >
                <span
                  className="
                    font-serif
                    text-3xl
                    font-medium
                    leading-none
                  "
                >
                  {stat.value}
                </span>

                <span
                  className="
                    mt-3
                    text-xs
                    md:text-sm
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-[#777980]
                  "
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
