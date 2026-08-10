import * as Icons from "lucide-react";

export const IconRenderer = ({
  name,
  className = "w-4 h-4",
}: {
  name: string;
  className?: string;
}) => {
  const LucideIcon =
    (Icons as unknown as Record<string, React.ElementType>)[name] ||
    Icons.HelpCircle;
  return <LucideIcon className={className} />;
};
