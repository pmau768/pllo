import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({ 
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/60" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 hidden lg:block" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30 hidden lg:block" />
        <div className="absolute top-0 left-0 right-0 h-full md:w-full bg-[radial-gradient(circle_at_40%_40%,rgba(0,0,0,0),rgba(0,0,0,0.2)_60%)]" />
      </div>
      
      <div className="container relative z-10 px-4 md:px-6 flex flex-col lg:flex-row items-center gap-8 md:gap-12 py-16 md:py-24">
        <HeroContent />
        <HeroImage />
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white hover:bg-white/10 animate-bounce"
        onClick={scrollToContent}
      >
        <ChevronDown className="h-6 w-6" />
        <span className="sr-only">Scroll down</span>
      </Button>
    </section>
  );
}