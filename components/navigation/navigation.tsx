import Link from "next/link"
import { Dog, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { cn } from "@/lib/utils"
import { useScrollPosition } from "@/hooks/use-viewport"
import { useLazyLoad } from "@/hooks/use-lazy-load"
import { NavLinks, MobileNavLinks } from "@/components/navigation"
import { navigationLinks } from "@/lib/constants/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const scrollPosition = useScrollPosition()
  const isLoaded = useLazyLoad()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-200",
          scrollPosition > 0 ? "border-b shadow-sm" : ""
        )}
      >
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-lg">
            Logo
          </Link>
          
          <Button
            variant="ghost"
            className="md:hidden tap-target"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          
          <NavLinks />
        </div>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        links={navigationLinks}
      />
      
      <MobileNavLinks />
    </>
  )
}