import Image from "next/image";
import { motion } from "framer-motion";

export function HeroImage() {
  return (
    <div className="relative flex-1 w-full max-w-md lg:max-w-xl">
      <div className="absolute -left-6 -top-6 w-2/3 h-2/3 bg-primary/5 rounded-2xl hidden md:block"></div>
      <div className="absolute -right-6 -bottom-6 w-2/3 h-2/3 bg-muted/30 rounded-2xl hidden md:block"></div>
      
      <div className="relative shadow-2xl rounded-2xl overflow-hidden aspect-[5/4]">
        <Image 
          src="https://images.unsplash.com/photo-1601758177266-bc599de87707?auto=format&fit=crop&w=1200&q=80"
          alt="Happy dog with owner engaging in enrichment activity"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}