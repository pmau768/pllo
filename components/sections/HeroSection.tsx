'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Default image to use if hero image fails to load
const DEFAULT_HERO_IMAGE = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80';

export function HeroSection(): React.JSX.Element {
  const [imgSrc, setImgSrc] = useState('/images/hero-dog.jpg');

  // Handle image load error
  const handleImageError = () => {
    setImgSrc(DEFAULT_HERO_IMAGE);
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
        <div className="flex-1 text-center lg:text-left max-w-3xl">
          <Badge className="mb-6 px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20 uppercase tracking-wider">
            End Pet Abandonment
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1]">
            <span className="block">Your Dog Deserves</span>
            <span className="text-primary">More Than Basic Care</span>
          </h1>
          
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
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">1,200+</p>
              <p className="text-sm text-muted-foreground">Dogs Protected</p>
            </div>
            <div className="h-10 border-l border-border"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground">Placement Success</p>
            </div>
            <div className="h-10 border-l border-border"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5,000+</p>
              <p className="text-sm text-muted-foreground">Owners Educated</p>
            </div>
          </div>
        </div>
        
        <div className="relative flex-1 w-full max-w-md lg:max-w-xl">
          <div className="absolute -left-6 -top-6 w-2/3 h-2/3 bg-primary/5 rounded-2xl hidden md:block"></div>
          <div className="absolute -right-6 -bottom-6 w-2/3 h-2/3 bg-muted/30 rounded-2xl hidden md:block"></div>
          
          <div className="relative shadow-2xl rounded-2xl overflow-hidden aspect-[5/4]">
            <Image
              src={imgSrc}
              alt="Happy dog looking at camera"
              fill
              priority
              className="object-cover"
              sizes="100vw"
              onError={handleImageError}
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground" />
      </div>
    </section>
  );
} 