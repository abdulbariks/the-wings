"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  debounceDelay?: number;
  className?: string;
}

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search...",
  debounceDelay = 300,
  className,
}: SearchInputProps) => {
  const [localValue, setLocalValue] = useState(value);

  // Keep local value in sync with prop if it changes externally
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // Debounce the parent onChange callback
  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(localValue);
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [localValue, onChange, debounceDelay]);

  return (
    <div className={cn("relative w-full", className)}>
      <input
        type="text"
        placeholder={placeholder}
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        className="w-full h-14 pl-5 pr-12 bg-white border border-[#0F0D0B]/10 rounded-none focus:outline-none font-sans text-[#0F0D0B] placeholder-neutral-400 transition-colors"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none">
        <Search size={16} />
      </div>
    </div>
  );
};

export default SearchInput;
