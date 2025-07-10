import { siteConfig } from "@/config";
import logoSvg from "/logo.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Simple Icons SVG components (following the recommendation from https://simpleicons.org)
const TwitterIcon = () => (
  <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GitHubIcon = () => (
  <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
  </svg>
);

const Footer = () => {
  const { footer } = siteConfig.navigation;
  const footerSections = [
    { title: "Company", links: footer.company },
    { title: "Services", links: footer.services },
    { title: "Industries", links: footer.industries },
    { title: "Resources", links: footer.resources },
  ];

  return (
    <footer className="border-t bg-background ">
      <div className="container mx-auto px-6 py-16 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
          {/* Brand Column - Takes 3 columns on large screens for more space */}
          <div className="lg:col-span-3 space-y-4 text-left">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src={logoSvg} alt={siteConfig.name} className="h-8 w-8" />
              <span className="text-lg font-bold tracking-tight font-glancyr">
                {siteConfig.name.toUpperCase()}
              </span>
            </a>

            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              {siteConfig.company.tagline}
            </p>
          </div>

          {/* Empty column for spacing on desktop */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links Columns - Desktop: Normal layout, Mobile: Accordion */}
          <div className="lg:col-span-4 lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Desktop Links - Hidden on mobile */}
            <div className="hidden lg:contents">
              {footerSections.map((section) => (
                <div key={section.title} className="space-y-4 text-left">
                  <h4 className="text-sm font-semibold text-foreground">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile Accordion - Hidden on desktop */}
            <div className="lg:hidden">
              <Accordion type="multiple" className="w-full space-y-0">
                {footerSections.map((section) => (
                  <AccordionItem
                    key={section.title}
                    value={section.title.toLowerCase()}
                    className="border-0"
                  >
                    <AccordionTrigger className="py-4 text-sm font-semibold hover:no-underline hover:text-primary text-start">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pb-4 px-4">
                        {section.links.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and social links */}
        <div className="mt-16 pt-8 border-t border-border flex flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {siteConfig.social.twitter && (
              <a
                href={siteConfig.social.twitter}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
            )}
            {siteConfig.social.github && (
              <a
                href={siteConfig.social.github}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            )}
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
