import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RevealOnScroll } from '@/components/features/RevealOnScroll';
import { Brain, Target, Home, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function EnrichmentSection(): React.JSX.Element {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
            Why Dogs Need More
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prevent Abandonment Through Enrichment
          </h2>
          <p className="text-muted-foreground text-lg">
            Most behavioral problems stem from unmet needs. Dogs are intelligent creatures with natural drives that require fulfillment—neglecting these leads to problems that often result in abandonment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <RevealOnScroll>
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48 bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Brain className="h-16 w-16 text-white" aria-label="Mental Stimulation Icon" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Mental Stimulation</h3>
                <p className="text-muted-foreground mb-6">
                  Dogs need mental challenges as much as physical exercise. Boredom and frustration lead to destructive behaviors that often result in surrender or abandonment.
                </p>
                <Button asChild variant="outline" className="w-full group">
                  <Link href="/about" className="flex items-center justify-between">
                    Enrichment Ideas
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" aria-label="View Enrichment Ideas" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48 bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                <Target className="h-16 w-16 text-white" aria-label="Purpose and Drive Icon" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Purpose & Drive</h3>
                <p className="text-muted-foreground mb-6">
                  Every dog has natural drives and instincts. Channeling these into appropriate activities fulfills their needs and prevents problematic behaviors that lead to rehoming.
                </p>
                <Button asChild variant="outline" className="w-full group">
                  <Link href="/rehoming" className="flex items-center justify-between">
                    Finding Their Purpose
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" aria-label="Learn About Finding Purpose" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-48 bg-gradient-to-br from-destructive to-destructive/60 flex items-center justify-center">
                <Home className="h-16 w-16 text-white" aria-label="Family Integration Icon" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Family Integration</h3>
                <p className="text-muted-foreground mb-6">
                  Dogs aren&apos;t meant to live isolated in backyards or kennels. They&apos;re social animals who need to be properly integrated into family life with consistent boundaries.
                </p>
                <Button asChild variant="outline" className="w-full group">
                  <Link href="/about" className="flex items-center justify-between">
                    Integration Strategies
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" aria-label="View Integration Strategies" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
} 