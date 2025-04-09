import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navigationLinks } from "@/lib/constants/navigation";
import { Search, Home, Dog, ChevronDown, ChevronUp } from "lucide-react";

const iconMap = {
  Search,
  Home,
  Dog,
  ChevronDown,
  ChevronUp,
};

export function NavLinks() {
  return (
    <nav className="hidden md:flex md:items-center md:space-x-8">
      {navigationLinks.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap];
        return (
          <Link
            key={link.href}
            href={link.href}
            className="relative transition-colors hover:text-primary text-sm font-medium py-2 px-3 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            {link.label}
          </Link>
        );
      })}
      <Button asChild size="sm" className="rounded-full ml-4 px-6">
        <Link href="/dogs">Find a Dog</Link>
      </Button>
    </nav>
  );
}