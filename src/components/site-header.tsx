import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Services",
      hasDropdown: true,
      items: [
        "Custom Software",
        "Business Automation",
        "Web Development",
        "Mobile Apps",
      ],
    },
    {
      name: "Solutions",
      hasDropdown: true,
      items: [
        "Digital Transformation",
        "E-commerce",
        "SaaS Development",
        "API Integration",
      ],
    },
    { name: "Portfolio", hasDropdown: false },
    { name: "About", hasDropdown: false },
    { name: "Contact", hasDropdown: false },
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
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items?.map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {subItem}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {subItem === "Custom Software" &&
                                  "Tailored solutions for your unique business needs"}
                                {subItem === "Business Automation" &&
                                  "Streamline operations and increase efficiency"}
                                {subItem === "Web Development" &&
                                  "Modern, responsive websites and web applications"}
                                {subItem === "Mobile Apps" &&
                                  "Native and cross-platform mobile solutions"}
                                {subItem === "Digital Transformation" &&
                                  "Modernize your business with digital solutions"}
                                {subItem === "E-commerce" &&
                                  "Complete online stores and marketplace solutions"}
                                {subItem === "SaaS Development" &&
                                  "Cloud-based software as a service platforms"}
                                {subItem === "API Integration" &&
                                  "Connect and synchronize your business systems"}
                              </p>
                            </a>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <a
                      href="#"
                      className="h-10 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 inline-flex items-center justify-center rounded-md"
                    >
                      {item.name}
                    </a>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <ModeToggle />
          <Button variant="ghost" size="sm">
            Get Quote
          </Button>
          <Button size="sm">Start Project</Button>
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
            {navItems.map((item) => (
              <div key={item.name} className="space-y-2">
                <a
                  href="#"
                  className="block text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
                {item.hasDropdown && item.items && (
                  <div className="pl-4 space-y-2">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                Get Quote
              </Button>
              <Button size="sm" className="w-full">
                Start Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
