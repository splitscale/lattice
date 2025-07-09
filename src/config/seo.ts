import { siteConfig } from "./site";

export const seoConfig = {
  // Default meta tags
  defaultTitle: siteConfig.name,
  titleTemplate: `%s | ${siteConfig.name}`,
  description: siteConfig.description,
  
  // Open Graph defaults
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.description}`,
      },
    ],
  },

  // Twitter Card defaults
  twitter: {
    card: "summary_large_image",
    site: "@splitscale",
    creator: "@splitscale",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/twitter-image.png`],
  },

  // Additional meta tags
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "author",
      content: siteConfig.company.name,
    },
    {
      name: "keywords",
      content: "software development, custom software, UI/UX design, automation, RPA, AI integration, machine learning, quality assurance, enterprise software, B2B software, B2C software, web development, mobile development, Philippines",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "theme-color",
      content: "#10b981", // emerald-500
    },
    {
      name: "color-scheme",
      content: "dark light",
    },
  ],

  // JSON-LD structured data
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    foundingDate: siteConfig.company.founded,
    areaServed: "Philippines",
    serviceType: [
      "Software Development",
      "UI/UX Design",
      "Automation Services",
      "AI Integration",
      "Quality Assurance"
    ],
    offers: {
      "@type": "Offer",
      description: "Custom software development services",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.company.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      sameAs: [
        siteConfig.social.twitter,
        siteConfig.social.github,
        siteConfig.social.linkedin,
        siteConfig.social.facebook,
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
      bestRating: "5",
      worstRating: "1",
    },
  },

  // Page-specific SEO configurations
  pages: {
    home: {
      title: `${siteConfig.name} - ${siteConfig.description}`,
      description: "Full-stack partner for enterprises, SMBs, and startups. We build complex software AI cannot comprehend and hardware where deemed impossible.",
      keywords: "software development, custom software, full-stack development, enterprise solutions, Philippines",
    },
    about: {
      title: "About Us",
      description: `Learn more about ${siteConfig.company.name} and our mission to dominate western Visayas and the whole Philippines solving problems others cannot.`,
      keywords: "about, company, team, mission, software development, Philippines",
    },
    services: {
      title: "Services",
      description: "Comprehensive software development services from UI/UX design to AI integration and quality assurance.",
      keywords: "services, software development, UI/UX design, automation, AI integration, quality assurance",
    },
    quote: {
      title: "Get Quote",
      description: "Get a custom quote for your software development project. We serve enterprises, SMBs, and startups across the Philippines.",
      keywords: "quote, pricing, consultation, software development, custom software",
    },
    portfolio: {
      title: "Portfolio",
      description: "Explore our latest projects and case studies showcasing our expertise in software development.",
      keywords: "portfolio, projects, case studies, software development, work samples",
    },
    blog: {
      title: "Blog",
      description: "Latest insights, tutorials, and news from the world of software development.",
      keywords: "blog, articles, tutorials, insights, software development, technology",
    },
    contact: {
      title: "Contact Us",
      description: `Get in touch with the ${siteConfig.company.name} team. We're here to help with your development needs.`,
      keywords: "contact, support, help, get in touch, customer service",
    },
  },

  // Canonical URL helpers
  getCanonicalUrl: (path: string = "") => {
    return `${siteConfig.url}${path}`;
  },

  // Generate page-specific meta tags
  generatePageMeta: (pageKey: string, customMeta?: { title?: string; description?: string; keywords?: string }) => {
    const pages = {
      home: {
        title: `${siteConfig.name} - ${siteConfig.description}`,
        description: "Ship code faster with confidence using our modern development platform. Streamline your workflow with integrated code review, CI/CD, and monitoring.",
        keywords: "development platform, DevOps, CI/CD, code review, monitoring, software development",
      },
      about: {
        title: "About Us",
        description: `Learn more about ${siteConfig.company.name} and our mission to revolutionize software development workflows.`,
        keywords: "about, company, team, mission, software development",
      },
      features: {
        title: "Features",
        description: "Discover powerful features that make development faster, safer, and more efficient.",
        keywords: "features, code review, CI/CD, monitoring, analytics, DevOps tools",
      },
      pricing: {
        title: "Pricing",
        description: "Simple, transparent pricing for teams of all sizes. Start free and scale as you grow.",
        keywords: "pricing, plans, subscription, free trial, enterprise",
      },
      docs: {
        title: "Documentation",
        description: "Comprehensive guides, tutorials, and API reference to help you get the most out of Lattice.",
        keywords: "documentation, guides, tutorials, API, reference, help",
      },
      blog: {
        title: "Blog",
        description: "Latest insights, tutorials, and news from the world of software development.",
        keywords: "blog, articles, tutorials, insights, software development, DevOps",
      },
      contact: {
        title: "Contact Us",
        description: `Get in touch with the ${siteConfig.company.name} team. We're here to help with your development needs.`,
        keywords: "contact, support, help, get in touch, customer service",
      },
    } as const;

    const pageMeta = pages[pageKey as keyof typeof pages];
    
    return {
      title: customMeta?.title || pageMeta?.title || siteConfig.name,
      description: customMeta?.description || pageMeta?.description || siteConfig.description,
      keywords: customMeta?.keywords || pageMeta?.keywords || "",
    };
  },
} as const;

export type SEOConfig = typeof seoConfig;
