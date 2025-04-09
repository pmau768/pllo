'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/features/RevealOnScroll";
import { MapPin, ArrowRight } from "lucide-react";
import { adoptables } from "@/data/adoptables";
import { Dog } from "@/types";
import { cn } from "@/lib/utils";

// Featured dogs (prioritizing flagged ones)
const featuredDogs = adoptables
  .sort((a, b) => (a.flagged === b.flagged ? 0 : a.flagged ? -1 : 1))
  .slice(0, 3);

// Default image to use if none available
const DEFAULT_DOG_IMAGE = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80';

export function FeaturedDogsSection(): React.JSX.Element {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <Badge className="mb-4 px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
              Find Your Match
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Dogs</h2>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/dogs" className="flex items-center">
              View All Dogs
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDogs.map((dog, index) => (
            <RevealOnScroll key={dog.id} delay={index * 0.2}>
              <Card className="overflow-hidden border-none shadow-lg group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={dog.images?.[0] || DEFAULT_DOG_IMAGE}
                    alt={dog.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = DEFAULT_DOG_IMAGE;
                    }}
                  />
                  {dog.flagged && (
                    <Badge className="absolute top-4 right-4 bg-destructive/90 text-destructive-foreground">
                      Urgent
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold">{dog.name}</h3>
                    <Badge variant={dog.status === 'available' ? 'default' : 'secondary'}>
                      {dog.status}
                    </Badge>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{dog.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {dog.description}
                  </p>
                  <Button asChild className="w-full group">
                    <Link href={`/dogs/${dog.id}`} className="flex items-center justify-center">
                      Meet {dog.name}
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
} 