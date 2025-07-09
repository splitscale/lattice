import { useState, forwardRef, useMemo } from "react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { Menu, ChevronDown, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ModeToggle } from "@/components/mode-toggle";

// Navigation items configuration - easily customizable
const navigationItems = [
  {
    title: "Product",
    to: "/", // Placeholder - replace with actual route when created
    hasDropdown: true,
    items: [
      {
        title: "Features",
        to: "/", // Placeholder - replace with actual route when created
        description: "Explore our key features",
      },
      {
        title: "Integrations",
        to: "/", // Placeholder - replace with actual route when created
        description: "Connect with your tools",
      },
      {
        title: "API",
        to: "/",
        description: "Developer resources",
      }, // Placeholder
    ],
  },
  {
    title: "Developers",
    to: "/", // Placeholder - replace with actual route when created
    hasDropdown: true,
    items: [
      {
        title: "Documentation",
        to: "/about", // Using existing route as placeholder
        description: "Get started with our guides",
      },
      {
        title: "API Reference",
        to: "/", // Placeholder - replace with actual route when created
        description: "Complete API documentation",
      },
      {
        title: "SDKs",
        to: "/", // Placeholder - replace with actual route when created
        description: "Official SDKs and libraries",
      },
    ],
  },
  {
    title: "Solutions",
    to: "/", // Placeholder - replace with actual route when created
    hasDropdown: true,
    items: [
      {
        title: "Enterprise",
        to: "/", // Placeholder - replace with actual route when created
        description: "Solutions for large teams",
      },
      {
        title: "Startups",
        to: "/", // Placeholder - replace with actual route when created
        description: "Perfect for growing companies",
      },
      {
        title: "Agencies",
        to: "/", // Placeholder - replace with actual route when created
        description: "Tools for client work",
      },
    ],
  },
  {
    title: "Pricing",
    to: "/", // Placeholder - replace with actual route when created
    hasDropdown: false,
  },
  {
    title: "Docs",
    to: "/about", // Using existing route as placeholder
    hasDropdown: false,
  },
  {
    title: "Blog",
    to: "/", // Placeholder - replace with actual route when created
    hasDropdown: false,
  },
] as const;

const ListItem = forwardRef<
  ElementRef<typeof Link>,
  ComponentPropsWithoutRef<typeof Link> & {
    title: string;
    description?: string;
  }
>(({ className, title, description, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none",
            "transition-colors duration-200 ease-in-out",
            "hover:bg-accent hover:text-accent-foreground",
            "focus:bg-accent focus:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {description && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {description}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Memoize the close handler for better performance
  const handleClose = useMemo(() => () => setIsOpen(false), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 transition-colors duration-200">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary transition-transform duration-200 hover:scale-105">
            {/* Placeholder for logo - replace with your actual logo */}
            <div className="h-4 w-4 rounded-sm bg-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            Lattice
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.hasDropdown ? (
                  <>
                    <NavigationMenuTrigger className="h-10 bg-transparent data-[state=open]:bg-accent/50">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.items?.map((subItem) => (
                          <ListItem
                            key={subItem.title}
                            title={subItem.title}
                            description={subItem.description}
                            to={subItem.to}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link to={item.to}>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* GitHub link - hidden on mobile */}
          <a
            href="https://github.com"
            className="hidden items-center space-x-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:flex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub"
          >
            <Github className="h-4 w-4" />
            <span>85.4K</span>
          </a>

          {/* Sign in link - hidden on mobile */}
          <Link
            to="/"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-block"
          >
            Sign in
          </Link>

          {/* Theme toggle */}
          <div className="hidden md:block">
            <ModeToggle />
          </div>

          {/* CTA Button */}
          <Button size="sm" className="hidden md:inline-flex">
            Start your project
          </Button>

          {/* Mobile menu trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                aria-label="Toggle navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    {item.hasDropdown ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            {item.title}
                          </span>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                        <div className="ml-4 space-y-2">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.to}
                              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                              onClick={handleClose}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.to}
                        className="block text-sm font-medium transition-colors hover:text-primary"
                        onClick={handleClose}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile-only actions */}
                <div className="border-t pt-4 space-y-4">
                  <a
                    href="https://github.com"
                    className="flex items-center space-x-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub (85.4K)</span>
                  </a>
                  <Link
                    to="/"
                    className="block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    onClick={handleClose}
                  >
                    Sign in
                  </Link>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Theme</span>
                    <ModeToggle />
                  </div>
                  <Button className="w-full" onClick={handleClose}>
                    Start your project
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
