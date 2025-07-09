import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import * as React from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Custom Software",
      href: "/services/custom-software",
      description: "Tailored applications for your business needs",
    },
    {
      title: "Web Development",
      href: "/services/web-development",
      description: "Modern, responsive web applications",
    },
    {
      title: "Mobile Apps",
      href: "/services/mobile-apps",
      description: "Native and cross-platform solutions",
    },
    {
      title: "API Development",
      href: "/services/api-development",
      description: "Scalable backend services and APIs",
    },
    {
      title: "DevOps & Cloud",
      href: "/services/devops-cloud",
      description: "Infrastructure and deployment solutions",
    },
    {
      title: "Consulting",
      href: "/services/consulting",
      description: "Strategic technology guidance",
    },
  ];

  const resources = [
    {
      title: "Case Studies",
      href: "/case-studies",
      description: "Success stories from our clients",
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Latest insights and tech articles",
    },
    {
      title: "Documentation",
      href: "/docs",
      description: "Technical guides and best practices",
    },
    {
      title: "Developer Portal",
      href: "/developers",
      description: "Tools and resources for developers",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                L
              </span>
            </div>
            <span className="text-xl font-bold tracking-tight">Lattice</span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {/* Product */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] justify-start text-start">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/product"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Lattice Platform
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Complete development platform with project
                            management, CI/CD, and analytics.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/product/features" title="Features">
                      Project management, code repository, and CI/CD pipeline.
                    </ListItem>
                    <ListItem href="/product/changelog" title="Changelog">
                      Latest platform updates and feature releases.
                    </ListItem>
                    <ListItem href="/product/roadmap" title="Roadmap">
                      See what we're building next for the platform.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] justify-start text-start">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] justify-start text-start">
                    {resources.map((resource) => (
                      <ListItem
                        key={resource.title}
                        title={resource.title}
                        href={resource.href}
                      >
                        {resource.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Simple Links */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a href="/about">About</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a href="/pricing">Pricing</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <ModeToggle />
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            Client Portal
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="container px-4 py-4 space-y-3">
            <a
              href="/product"
              className="block text-sm font-medium hover:text-primary transition-colors"
            >
              Product
            </a>
            <div className="pl-4 space-y-2">
              <a
                href="/services"
                className="block text-sm font-medium hover:text-primary transition-colors"
              >
                Services
              </a>
              {services.slice(0, 3).map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors pl-2"
                >
                  {service.title}
                </a>
              ))}
            </div>
            <a
              href="/resources"
              className="block text-sm font-medium hover:text-primary transition-colors"
            >
              Resources
            </a>
            <a
              href="/about"
              className="block text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="/pricing"
              className="block text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <div className="pt-4 border-t border-border space-y-3">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-muted-foreground hover:text-foreground"
              >
                Client Portal
              </Button>
              <Button
                size="sm"
                className="w-full bg-primary hover:bg-primary/90"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
