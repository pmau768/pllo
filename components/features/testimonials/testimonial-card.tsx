import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  image: string;
  location: string;
}

export function TestimonialCard({ quote, author, image, location }: TestimonialCardProps) {
  return (
    <Card className="relative">
      <CardContent className="pt-12 pb-8">
        <div className="absolute top-0 left-6 -translate-y-1/2 h-12 w-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Quote className="h-6 w-6" />
        </div>
        <blockquote className="mb-6">
          <p className="text-lg">{quote}</p>
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <cite className="not-italic font-semibold">
              {author}
            </cite>
            <p className="text-sm text-muted-foreground">
              {location}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}