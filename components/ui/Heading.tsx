import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

interface HeadingBadgeProps {
  children: React.ReactNode;
  className?: string;
}

interface HeadingTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface HeadingSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ children, className = "" }: HeadingBadgeProps) => {
  return (
    <div
      className={cn(
        "mb-3 flex w-fit items-center bg-white border border-dashed border-[#9EA1AB] px-5 py-2 font-medium text-primary text-sm md:text-base",
        className,
      )}
    >
      {children}
    </div>
  );
};

const Title = ({ children, className = "" }: HeadingTitleProps) => {
  return (
    <h2
      className={cn(
        "w-full font-serif font-bold leading-tight text-text-primary text-3xl md:text-4xl lg:text-[3.5rem]",
        className,
      )}
    >
      {children}
    </h2>
  );
};

const Subtitle = ({ children, className = "" }: HeadingSubtitleProps) => {
  return (
    <p
      className={cn(
        "w-full mt-4 leading-7 text-[#4A4C56] text-sm md:text-base lg:text-lg",
        className,
      )}
    >
      {children}
    </p>
  );
};

const Heading = Object.assign(
  ({ children, className = "" }: HeadingProps) => {
    return (
      <div
        className={cn(
          "flex flex-col items-center text-center mx-auto max-w-2xl pb-8 md:pb-10 lg:pb-12",
          className,
        )}
      >
        {children}
      </div>
    );
  },
  {
    Badge,
    Title,
    Subtitle,
  },
);

export { Badge, Title, Subtitle };
export default Heading;
