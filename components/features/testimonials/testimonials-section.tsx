import { TestimonialCard } from "./testimonial-card";
import { testimonials } from "@/lib/constants/testimonials";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Happy Tails
        </h2>
        <p className="text-muted-foreground max-w-[800px] mx-auto px-4 sm:px-0">
          Hear from families who found their perfect adventure companions through Trek Snout.
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 w-24 h-24 -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full rounded-full bg-primary/5 flex items-center justify-center">
            <Star className="h-10 w-10 text-primary/20" />
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="absolute bottom-0 right-0 w-24 h-24 translate-x-1/2 translate-y-1/2">
          <div className="w-full h-full rounded-full bg-primary/5 flex items-center justify-center">
            <Star className="h-10 w-10 text-primary/20" />
          </div>
        </div>
      </div>
    </section>
  );
}