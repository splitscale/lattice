import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoSvg from "/logo.svg";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config";
import * as React from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable page scrolling when mobile menu is open, but allow internal menu scrolling
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent page scroll but preserve menu internal scroll
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Get navigation data from site config
  // const { main: mainNav } = siteConfig.navigation;
  // const servicesNav =
  //   mainNav.find((item) => item.title === "Services")?.items || [];
  // const industriesNav =
  //   mainNav.find((item) => item.title === "Industries")?.items || [];
  // const resourcesNav =
  //   mainNav.find((item) => item.title === "Resources")?.items || [];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center border-b border-border">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <div className="  flex items-center  ">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img src={logoSvg} alt={siteConfig.name} className="h-8 w-8" />
            <span className="text-lg font-bold tracking-tight font-glancyr">
              {siteConfig.name.toUpperCase()}
            </span>
          </a>
        </div>
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex w-full justify-center items-center">
          <NavigationMenuList>
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground cursor-pointer">
                <a href="/"> Home </a>
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            {/* Projects */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground cursor-pointer">
                <a href="/projects"> Projects </a>
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            {/* About Us */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground cursor-pointer">
                <a href="/about"> About Us </a>
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground cursor-pointer">
                <a href="/contact"> Contact Us </a>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 lg:hidden">
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
        <div className="fixed inset-x-0 top-16 z-40 lg:hidden bg-background border-t border-border">
          <div className="h-[calc(100dvh-4rem)] flex flex-col">
            {/* Navigation Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-6 pb-[env(safe-area-inset-bottom)]">
              <Accordion type="single" collapsible className="w-full space-y-0">
                {/* Services */}
                <AccordionItem value="home" className="border-0">
                  <AccordionTrigger className="py-4 text-base font-medium hover:no-underline hover:text-primary text-start">
                    Home
                  </AccordionTrigger>
                </AccordionItem>

                {/* Projects */}
                <AccordionItem value="projects" className="border-0">
                  <AccordionTrigger className="py-4 text-base font-medium hover:no-underline hover:text-primary text-start">
                    Projects
                  </AccordionTrigger>
                </AccordionItem>

                {/* About Us */}
                <AccordionItem value="about" className="border-0">
                  <AccordionTrigger className="py-4 text-base font-medium hover:no-underline hover:text-primary text-start">
                    About Us
                  </AccordionTrigger>
                </AccordionItem>

                {/* Contact Us*/}
                <AccordionItem value="contact" className="border-0">
                  <AccordionTrigger className="py-4 text-base font-medium hover:no-underline hover:text-primary text-start">
                    Contact Us
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>

              {/* Simple Links */}
              <div className="space-y-0">
                <a
                  href="/about"
                  className="block py-4 text-base font-medium hover:text-primary transition-colors text-start"
                >
                  About
                </a>
              </div>
            </div>

            {/* CTA Buttons - Fixed at bottom with safe area */}
            <div className="px-4 py-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] border-t border-border/30 bg-background">
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 justify-center text-foreground border-border/50 hover:bg-accent/50"
                >
                  Sign in
                </Button>
                <Button
                  size="lg"
                  className="flex-1 justify-center bg-primary hover:bg-primary/90 font-medium"
                >
                  Let's discover
                </Button>
              </div>
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
