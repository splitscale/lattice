import { createLazyFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-screen-xl">
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          About {siteConfig.name}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {siteConfig.company.description}
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Target className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">Our Mission</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {siteConfig.company.tagline} We are disciplined in both software and hardware, 
            seeing ourselves as the best, bright culture, transparent, and most effective 
            company at this craft.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">Our Vision</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Dominating Western Visayas and the whole Philippines, solving problems others cannot. 
            We make complex software AI cannot comprehend and build hardware where deemed impossible.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="space-y-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive software development and consulting services 
            across multiple domains and industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(siteConfig.services).map((service) => (
            <div key={service.title} className="p-6 border border-border rounded-lg space-y-3">
              <h3 className="font-semibold">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              <Button variant="outline" size="sm" asChild>
                <a href={service.href}>
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Company Stats */}
      <div className="bg-muted/50 rounded-lg p-8 mb-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">2024</div>
            <div className="text-muted-foreground">Founded</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Work With Us?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Let's discuss your project and see how we can help bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="/quote">
              Get Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/contact">
              <Users className="mr-2 h-4 w-4" />
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
