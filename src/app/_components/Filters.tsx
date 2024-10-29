"use client";
import { Input } from "@/components/ui/input";
import useGlobalStore from "../store";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FiltersProps extends React.HTMLAttributes<HTMLDivElement> {}

function Filters({ className, ...props }: FiltersProps) {
  const { search, setSearch } = useGlobalStore();
  return (
    <div className={cn("relative", className)} {...props}>
      <Input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-8 h-12 text-lg bg-background/25 backdrop-blur-sm border-white/20"
      />
      <SearchIcon
        className="absolute bottom-1/2 left-8 translate-y-1/2 text-gray-500"
        size={20}
      />
    </div>
  );
}

export default Filters;
