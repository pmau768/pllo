import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/features/RevealOnScroll";
import { BackgroundWrapper } from "@/components/features/BackgroundWrapper";
import { 
  Search, 
  Heart, 
  AlertTriangle, 
  MapPin, 
  ArrowRight, 
  Check, 
  Star, 
  PawPrint,
  Shield,
  Users,
  Trophy,
  Brain,
  Book,
  Home,
  Target
} from "lucide-react";
import { adoptables } from "@/data/adoptables";
import { lostDogPosts } from "@/data/lost-dogs";
import { HeroSection } from "@/components/sections/HeroSection";
import { EnrichmentSection } from "@/components/sections/EnrichmentSection";
import { FeaturedDogsSection } from "@/components/sections/FeaturedDogsSection";

// Featured dogs (prioritizing flagged ones)
const featuredDogs = adoptables
  .sort((a, b) => (a.flagged === b.flagged ? 0 : a.flagged ? -1 : 1))
  .slice(0, 3);

// Recent lost dogs
const recentLostDogs = lostDogPosts
  .filter(dog => dog.status === "lost")
  .slice(0, 2);

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <HeroSection />
      <EnrichmentSection />
      <FeaturedDogsSection />
    </>
  );
}