import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 pt-20 pb-32 max-w-screen-xl">
      <div className="text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm">
          <span className="mr-2">{siteConfig.announcement.icon}</span>
          {siteConfig.announcement.text}
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            We build complex
            <br />
            software AI cannot
            <br />
            comprehend
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {siteConfig.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-base px-8">
            Get Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8">
            <MessageSquare className="mr-2 h-4 w-4" />
            Contact Us
          </Button>
        </div>

        {/* Social Proof */}
        <div className="pt-12">
          <p className="text-sm text-muted-foreground mb-6">
            Serving enterprises, SMBs, and startups across Western Visayas and
            the Philippines
          </p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            {["Enterprise", "Healthcare", "Fintech", "Startups", "SMBs"].map(
              (industry) => (
                <div key={industry} className="text-lg font-semibold">
                  {industry}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
