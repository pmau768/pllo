import { Shield, Heart, Users, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { siteStats } from "@/lib/constants/stats";

const iconMap = {
  Shield,
  Heart,
  Users,
  Trophy,
};

export function StatsDisplay() {
  return (
    <div className="section-grid md:grid-cols-2 lg:grid-cols-4">
      {siteStats.map((stat, index) => {
        const Icon = iconMap[stat.icon as keyof typeof iconMap];
        return (
          <Card key={index} className="text-center card-hover">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}