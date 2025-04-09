import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteStats } from "@/lib/constants/stats";

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.2
    }
  }
};

export function HeroContent() {
  return (
    <div className="flex-1 text-center lg:text-left max-w-3xl">
      <Badge className="mb-6 px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20 uppercase tracking-wider">
        End Pet Abandonment
      </Badge>
      
      <motion.h1 
        initial="hidden"
        animate="visible" 
        variants={contentVariants}
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1]"
      >
        <span className="block">Your Dog Deserves</span>
        <span className="text-primary">More Than Basic Care</span>
      </motion.h1>
      
      <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
        Dogs aren't just pets—they're family members with needs beyond food and shelter.
        They need purpose, enrichment, and to be integrated into family life.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
        <Button asChild size="lg" className="rounded-full px-8">
          <Link href="/dogs">Find Your Companion</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-full px-8">
          <Link href="/about">Stop Pet Abandonment</Link>
        </Button>
      </div>
      
      <div className="flex items-center justify-center lg:justify-start mt-10 gap-8">
        {siteStats.slice(0, 3).map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-3xl font-bold text-primary">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}