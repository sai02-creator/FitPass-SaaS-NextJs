import { Button } from "@/components/ui/button";


import {
  Dumbbell,
  Heart,
  Bike,
  Flame,
  Zap,
  MapPin,
  Check,
  ArrowRight,
  Sparkles,
  Badge,
  Link,
} from "lucide-react";


import {
  TIER_PRICING,
  TIER_DISPLAY_NAMES,
  TIER_DESCRIPTIONS,
  TIER_ACCESS,
  TIER_FEATURES,
  FREE_TRIAL_DAYS,
  type Tier,
} from "@/lib/constants/subscription";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";

const categories = [
  { name: "Yoga", icon: Heart, classes: "2,400+", color: "text-rose-500" },
  { name: "HIIT", icon: Flame, classes: "1,800+", color: "text-orange-500" },
  { name: "Cycling", icon: Bike, classes: "950+", color: "text-amber-500" },
  {
    name: "Strength",
    icon: Dumbbell,
    classes: "3,200+",
    color: "text-red-500",
  },
  {
    name: "Pilates",
    icon: Sparkles,
    classes: "1,100+",
    color: "text-pink-500",
  },
  { name: "Boxing", icon: Zap, classes: "720+", color: "text-orange-600" },
];

const stats = [
  { value: "10,000+", label: "Classes Available" },
  { value: "500+", label: "Partner Studios" },
  { value: "50,000+", label: "Active Members" },
  { value: "25+", label: "Cities" },
];

const steps = [
  {
    number: "01",
    title: "Choose Your Plan",
    description:
      "Select a membership that fits your lifestyle. Start with a free trial.",
  },
  {
    number: "02",
    title: "Book Any Class",
    description:
      "Browse thousands of classes and book instantly at studios near you.",
  },
  {
    number: "03",
    title: "Show Up & Sweat",
    description:
      "Check in, work out, and track your progress. It's that simple.",
  },
];

export default function Home() {
  return (
    <div className="">
      {/* Hero */}
                  <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-1.5 text-sm font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              {FREE_TRIAL_DAYS}-day free trial on all plans
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Your Fitness Journey{" "}
              <span className="text-primary">Starts Here</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              One membership. Thousands of classes. Unlimited possibilities.
              From yoga to boxing, find your perfect workout at studios near
              you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button size="lg" className="text-lg px-8 h-14 rounded-full">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button
                  size="lg"
                  className="text-lg px-8 h-14 rounded-full"
                  asChild
                >
                  <Link href="/classes">
                    Browse Classes
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </SignedIn>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}

      {/* Steps */}

      {/* Pricing */}

      {/* CTA */}

      {/* Footer */}
   
    </div>
  );
}
