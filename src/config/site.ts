import team from "@/assets/icons/users.svg";
import verified from "@/assets/icons/verified.svg";
import handshake from "@/assets/icons/handshake.svg";

import bteam from "@/assets/icons/users-dark.svg";
import bverified from "@/assets/icons/verified-dark.svg";
import bhandshake from "@/assets/icons/handshake-dark.svg";

export const siteConfig = {
  name: "Splitscale",
  description:
    "Full-stack partner for enterprises, SMBs, and startups. We build complex software AI cannot comprehend and hardware where deemed impossible.",
  url: "https://splitscale.com",
  company: {
    name: "Splitscale",
    description:
      "Disciplined in both software and hardware. We see us being the best, bright culture, transparent, and most effective company at this craft. Dominating western visayas and the whole Philippines solving problems others cannot.",
    founded: "2024",
    tagline:
      "Splitscale as a full-stack partner for enterprises, SMBs, and startups.",
  },
  contact: {
    email: "hello@splitscale.com",
    support: "support@splitscale.com",
    phone: "+1 (555) 123-4567",
  },
  social: {
    twitter: "",
    github: "",
    linkedin: "https://linkedin.com/company/splitscale",
    facebook: "https://facebook.com/splitscale",
    discord: "",
  },
  links: {
    github: "https://github.com/splitscale",
    docs: "https://docs.splitscale.com",
    api: "https://api.splitscale.com",
    status: "https://status.splitscale.com",
    portfolio: "https://splitscale.com/portfolio",
    services: "https://splitscale.com/services",
  },
  services: {
    uiuxDesign: {
      title: "UI/UX Design & Prototyping",
      description:
        "Human-centered design services—user research, wireframing, high-fidelity prototyping, accessibility audits—to create intuitive, brand-aligned interfaces for web and mobile.",
      href: "/services/ui-ux-design",
    },
    b2bSoftware: {
      title: "Custom B2B Software Development",
      description:
        "Build tailored enterprise systems—CRMs, ERPs, supply-chain management, and vendor portals—that streamline complex workflows and integrate with existing enterprise infrastructure.",
      href: "/services/b2b-software",
    },
    b2cSoftware: {
      title: "Custom B2C Software Development",
      description:
        "Develop consumer-facing web and mobile applications—e-commerce platforms, marketplaces, loyalty apps—optimized for high user engagement and scalability.",
      href: "/services/b2c-software",
    },
    automation: {
      title: "Automation & RPA Solutions",
      description:
        "Automate repetitive tasks and business processes through Robotic Process Automation (RPA), workflow orchestration, and custom scripting to boost efficiency and reduce manual errors.",
      href: "/services/automation",
      strategies: [
        "OSINT",
        "Web Scraping",
        "Search Dorking",
        "Search Aggregating",
      ],
    },
    aiIntegration: {
      title: "AI & Machine Learning Integration",
      description:
        "Embed predictive analytics, recommendation engines, and AI-driven agents into applications, leveraging natural language processing and computer vision models to unlock new value.",
      href: "/services/ai-integration",
    },
    qualityAssurance: {
      title: "Quality Assurance & Testing",
      description:
        "Execute full-cycle QA: manual functional testing, automated test suites, performance/load testing, and security audits to ensure robust, bug-free releases.",
      href: "/services/quality-assurance",
    },
  },

  navigation: {
    main: [
      {
        title: "Services",
        href: "/services",
        items: [
          {
            title: "UI/UX Design & Prototyping",
            href: "/services/ui-ux-design",
            description: "Human-centered design services for web and mobile",
          },
          {
            title: "B2B Software Development",
            href: "/services/b2b-software",
            description: "Enterprise systems and workflow solutions",
          },
          {
            title: "B2C Software Development",
            href: "/services/b2c-software",
            description: "Consumer-facing web and mobile applications",
          },
          {
            title: "Automation & RPA",
            href: "/services/automation",
            description: "Process automation and efficiency solutions",
          },
          {
            title: "AI & ML Integration",
            href: "/services/ai-integration",
            description: "Predictive analytics and intelligent systems",
          },
          {
            title: "Quality Assurance",
            href: "/services/quality-assurance",
            description: "Comprehensive testing and QA services",
          },
        ],
      },
      {
        title: "Home",
        href: "/home",
      },
      {
        title: "Projects",
        href: "/projects",
      },
      {
        title: "About Us",
        href: "/about-us",
      },
      {
        title: "Contact Us",
        href: "/contact-us",
      },
    ],
    footer: {
      services: [
        { name: "UI/UX Design", href: "/services/ui-ux-design" },
        { name: "B2B Software", href: "/services/b2b-software" },
        { name: "B2C Software", href: "/services/b2c-software" },
        { name: "Automation & RPA", href: "/services/automation" },
        { name: "AI & ML Integration", href: "/services/ai-integration" },
        { name: "Quality Assurance", href: "/services/quality-assurance" },
      ],
      industries: [
        { name: "Enterprise", href: "/industries/enterprise" },
        { name: "SMBs", href: "/industries/smb" },
        { name: "Startups", href: "/industries/startups" },
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Fintech", href: "/industries/fintech" },
      ],
      resources: [
        { name: "Portfolio", href: "/portfolio" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Blog", href: "/blog" },
        { name: "Community", href: "/community" },
        { name: "Support", href: "/support" },
      ],
      company: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" },
        { name: "Get Quote", href: "/quote" },
      ],
      legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Security", href: "/security" },
      ],
    },
  },
  announcement: {
    text: "New: Now serving clients across the Philippines",
    href: "/blog/philippines-expansion",
    icon: "🇵🇭",
  },
  home: {
    carousel: [
      { text: "Scalable Technology", color: "" },
      { text: "●", color: "" },
      { text: "Driving Innovation", color: "text-[#FF6E00]" },
      { text: "●", color: "" },
      { text: "Tech Startups", color: "" },
      { text: "●", color: "" },
      { text: "Empowering Industries", color: "text-[#FF6E00]" },
      { text: "●", color: "" },
    ],
    services: [
      {
        id: "01",
        title: "Web Applications",
        description:
          "Responsive, scalable websites built with modern technologies for optimal performance and user experience.",
        width: "w-[65%]",
      },
      {
        id: "02",
        title: "UI/UX Design",
        description:
          "Visually appealing, user-friendly interfaces enhancing engagement.",
        width: "w-[35%]",
      },
      {
        id: "03",
        title: "Maintenance",
        description:
          "Ongoing support ensuring safe, functional digital solutions.",
        width: "w-[35%]",
      },
      {
        id: "04",
        title: "Mobile Applications",
        description:
          "Intuitive iOS and Android apps designed for seamless functionality and brand alignment.",
        width: "w-[65%]",
      },
    ],
    choose: [
      {
        icon: {
          light: bteam,
          dark: team,
        },
        alt: "team",
        title: "Expert Team",
        description:
          "Seasoned professionals deliver innovative solutions with precision.",
      },
      {
        icon: {
          light: bverified,
          dark: verified,
        },
        alt: "verified",
        title: "Quality Assured",
        description:
          "Highest craftsmanship standards ensure exceptional results.",
      },
      {
        icon: {
          light: bhandshake,
          dark: handshake,
        },
        alt: "handshake",
        title: "Verified Results",
        description: "Proven track record with data-driven success.",
      },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;

// items: [
//       {
//         title: "Enterprise",
//         href: "/industries/enterprise",
//         description:
//           "Scale with confidence using enterprise-grade solutions",
//       },
//       {
//         title: "SMBs",
//         href: "/industries/smb",
//         description: "Efficient solutions for small and medium businesses",
//       },
//       {
//         title: "Startups",
//         href: "/industries/startups",
//         description: "Move fast with startup-friendly development",
//       },
//       {
//         title: "Healthcare",
//         href: "/industries/healthcare",
//         description: "Compliant and secure healthcare solutions",
//       },
//       {
//         title: "Fintech",
//         href: "/industries/fintech",
//         description: "Secure financial technology solutions",
//       },
//     ],
