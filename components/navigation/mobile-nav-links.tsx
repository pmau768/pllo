import Link from "next/link";
import { mobileNavLinks } from "@/lib/constants/navigation";
import { Home, Search, Dog, ChevronUp } from "lucide-react";

const iconMap = {
  Home,
  Search,
  Dog,
  ChevronUp,
};

export function MobileNavLinks() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t z-40 mobile-safe-bottom">
      <div className="grid grid-cols-4 gap-1">
        {mobileNavLinks.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center py-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="mb-1 transition-colors group-hover:text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}