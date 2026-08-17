import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface NoResultFoundProps {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
}

const NoResultFound = ({
  title = "No results found",
  description = "We couldn't find anything matching your search.",
  icon: Icon = Search,
  className,
}: NoResultFoundProps) => {
  return (
    <div
      className={cn(
        "container flex flex-col items-center border border-[#0F0D0B]/5 bg-[#F4F3F1] py-20 text-center text-[#0F0D0B]",
        className,
      )}
    >
      <Icon className="mb-4 text-gray-500" />

      <h3 className="font-serif text-2xl">{title}</h3>

      <p className="mt-2 max-w-md font-sans text-sm text-neutral-500">
        {description}
      </p>
    </div>
  );
};

export default NoResultFound;
