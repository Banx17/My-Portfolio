export interface Project {
  id: string;
  title: string;
  category: "Design" | "Backend Development";
  tag: string;
  description: string;
  longDescription: string;
  image: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Afeez Tomisin",
    role: "Product Designer & Backend Engineer",
    email: "afeezakinwunmi@gmail.com",
    location: "Lagos, Nigeria",
    availableForWork: true,
    bio: "I'm a Product Designer specializing in intuitive UI/UX design and a Backend Engineer focused on building scalable, efficient, and reliable systems.",
    aboutParagraphs: [
      "Hi, Afeez Tomisin (Akinwunmi) — a Product Designer and Backend Developer passionate about creating meaningful digital experiences, solving problems and building the systems behind them.",
      "My interest in technology grew from seeing how everyday inventions, even something as simple as a bicycle, are created to solve problems. That curiosity eventually led me into tech, where I combine design and engineering using Figma, JavaScript, Node.js, Express and MongoDB to bring ideas to life.",
      "Outside work, I enjoy listening to music, reading, exploring fashion and personal styling, and keeping up with the ever-evolving world of technology. I'm always eager to discover new ideas, learn new things and find inspiration in the world around me."
    ],
    socials: [
      { name: "GitHub", url: "https://github.com/Banx17", icon: "Github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/afeez-tomisin-38140b21a", icon: "Linkedin" },
      { name: "Twitter / X", url: "https://x.com/r_banx", icon: "Twitter" },
      { name: "Behance", url: "https://www.behance.net/afeez-tomisin", icon: "Behance" },
    ]
  },
  projects: [
    {
      id: "various-project",
      title: "Various Project",
      category: "Design",
      tag: "Website Design",
      description: "Interactive AI product platform with fluid animations, dynamic typography, and responsive bento architecture.",
      longDescription: "A comprehensive brand and website design for an AI-powered SaaS product. Designed with focus on dark mode aesthetics, glow effects, clear typographic hierarchy, and responsive fluid grids.",
      image: "/images/proj-various.jpg",
      highlights: [
        "Modern dark mode layout with custom radial glow gradients",
        "Interactive product demo states and conversion-focused CTAs",
        "Mobile-first responsive layout tested across multiple viewports",
        "Performance-optimized SVG graphics and micro-interactions"
      ],
      techStack: ["Figma", "UI/UX Research", "Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com/various",
      githubUrl: "https://github.com/Banx17"
    },
    {
      id: "kizzy-mobile",
      title: "Kizzy Mobile",
      category: "Design",
      tag: "Product Design",
      description: "Next-gen crypto and fintech mobile wallet app experience with seamless asset management and biometric security.",
      longDescription: "An end-to-end mobile design project addressing common UX friction points in decentralized finance. Designed with dark aesthetic, accessible contrast ratios, and clear multi-currency transaction flows.",
      image: "/images/proj-kizzy.jpg",
      highlights: [
        "Comprehensive design system with over 80+ reusable Figma components",
        "Streamlined onboarding and instant asset swap user flows",
        "Haptic feedback triggers and animated balance state transitions",
        "Biometric authorization and transaction security guardrails"
      ],
      techStack: ["Figma", "Mobile UI Design", "Prototyping", "Design System"],
      liveUrl: "https://example.com/kizzy",
      githubUrl: "https://github.com/Banx17"
    },
    {
      id: "nim-games",
      title: "Nim Games",
      category: "Design",
      tag: "Full Stack",
      description: "Gamified NFT platform and community reward ecosystem with vibrant collectible cards and interactive quests.",
      longDescription: "A playful yet high-utility Web3 gaming marketplace. Blends arcade-style visuals with Web3 wallet connection, NFT staking, and reward claiming leaderboards.",
      image: "/images/proj-nim.jpg",
      highlights: [
        "Playful illustration style aligned with high-conversion e-commerce flows",
        "Real-time quest tracking and leaderboard micro-interactions",
        "Custom 3D-inspired badge and collectible reward assets",
        "Integrated multi-chain wallet connecting flow"
      ],
      techStack: ["UI/UX Design", "Figma", "Web3 UX", "React"],
      liveUrl: "https://example.com/nim",
      githubUrl: "https://github.com/Banx17"
    },
    {
      id: "backend-apis",
      title: "Backend APIs",
      category: "Backend Development",
      tag: "Backend",
      description: "High-throughput microservices architecture with Redis caching, resilient rate limiting, and third-party integrations.",
      longDescription: "A robust backend system built to support real-time user workloads. Features automated database migrations, distributed Redis caching, webhook listeners, and zero-downtime CI/CD deployment pipelines.",
      image: "/images/proj-backend-apis.jpg",
      highlights: [
        "Sub-30ms p95 latency on read-heavy public endpoints with Redis caching",
        "Token bucket rate limiting to prevent API abuse and DDoS attacks",
        "Automated Docker containerization and orchestrated cloud deployment",
        "Comprehensive test suite with unit, integration, and load testing"
      ],
      techStack: ["Node.js", "Express", "MongoDB", "Redis", "REST / APIs"],
      liveUrl: "https://example.com/backend-api-docs",
      githubUrl: "https://github.com/Banx17"
    },
    {
      id: "teamwork",
      title: "Enable Efficient Teamwork",
      category: "Design",
      tag: "Web Platform",
      description: "Create a culture of clarity, creativity, and connection across every project.",
      longDescription: "A comprehensive collaboration platform design featuring high-contrast dark mode aesthetics, warm radial gradients, and partner ecosystem integrations.",
      image: "/images/showcase-1-teamwork.jpg",
      highlights: [
        "Custom radiant sun gradient background and typography system",
        "Seamless real-time collaboration workflows and handoff pipelines",
        "Partner integrations with PayPal, NVIDIA, Lafarge, Dangote, and Access"
      ],
      techStack: ["Figma", "UI/UX Design", "Design System"],
      liveUrl: "https://example.com/teamwork",
      githubUrl: "https://github.com/Banx17"
    },
    {
      id: "ai-pilot",
      title: "Your AI Pilot for Online Products",
      category: "Design",
      tag: "AI SaaS",
      description: "Kortex is the all-in-one AI workspace to research, create, and grow automatically.",
      longDescription: "Modern AI workspace landing page and application architecture designed for founders and creators scaling online products.",
      image: "/images/showcase-2-aipilot.jpg",
      highlights: [
        "Futuristic 3D robotics asset rendering and minimal dark/light interface",
        "Conversion-optimized CTA pathways with demo booking flows",
        "Integrated agent workflow indicators and status monitors"
      ],
      techStack: ["Figma", "Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com/aipilot",
      githubUrl: "https://github.com/Banx17"
    },
    {
      id: "music-app",
      title: "Music Streaming App Redesign",
      category: "Design",
      tag: "Mobile App",
      description: "Immersive mobile music experience with dynamic player and artist profiling.",
      longDescription: "An end-to-end mobile design concept exploring vibrant color palettes, immersive full-screen media players, and personalized music discovery mixes.",
      image: "/images/showcase-3-music.jpg",
      highlights: [
        "Fluid audio player transitions with custom album art glow",
        "Adaptive artist profiles featuring Travis Scott, Rihanna, and African sounds",
        "Streamlined playlist management and social sharing micro-interactions"
      ],
      techStack: ["Figma", "Mobile UI Design", "iOS Design Guidelines"],
      liveUrl: "https://example.com/music-app",
      githubUrl: "https://github.com/Banx17"
    },
    {
      id: "ximx-crypto",
      title: "XiMX — Cryptocurrency Exchange",
      category: "Design",
      tag: "Fintech & Web3",
      description: "Predict market changes and algorithmic signals to buy and sell digital assets.",
      longDescription: "A high-performance crypto exchange trading interface focused on predictive signals, real-time market data, and multi-asset wallet integration.",
      image: "/images/showcase-4-ximx.jpg",
      highlights: [
        "Real-time candlestick and algorithmic wave price forecasting charts",
        "Instant market swap interface for Bitcoin, Ethereum, Solana, and Monad",
        "High-contrast dark mode theme optimized for long trading sessions"
      ],
      techStack: ["Figma", "UI/UX", "Crypto Trading UX", "Web3"],
      liveUrl: "https://example.com/ximx",
      githubUrl: "https://github.com/Banx17"
    }
  ] as Project[],
  services: [
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "Wireframing, user journey mapping, and designing intuitive interfaces that delight users and drive engagement.",
      iconName: "PenTool",
      skills: ["User Research", "Wireframing", "Information Architecture", "Usability Testing"]
    },
    {
      id: "web-mobile",
      title: "Web & Mobile App Design",
      description: "Cross-platform mobile and web applications crafted for seamless responsiveness and natural user experience.",
      iconName: "Smartphone",
      skills: ["Responsive Web", "iOS / Android UI", "Micro-interactions", "App Store Guidelines"]
    },
    {
      id: "design-systems",
      title: "Design Systems & Prototyping",
      description: "Building scalable Figma component libraries, tokens, and clickable interactive prototypes for rapid testing.",
      iconName: "Layers",
      skills: ["Figma Tokens", "Component Libraries", "Interactive Prototypes", "Developer Handoff"]
    },
    {
      id: "api-microservices",
      title: "API & Microservices",
      description: "Designing and implementing scalable RESTful and gRPC APIs engineered for high reliability and throughput.",
      iconName: "Cpu",
      skills: ["RESTful APIs", "Express", "Node.js", "Authentication & JWT"]
    },
    {
      id: "database-design",
      title: "Database Design & Management",
      description: "Architecting database schemas, indexing strategies, and data stores optimized for fast querying.",
      iconName: "Database",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Schema Modeling"]
    },
    {
      id: "performance-integration",
      title: "Performance & Integration",
      description: "Optimizing server response times, configuring third-party webhooks, and securing payment gateway pipelines.",
      iconName: "Zap",
      skills: ["Caching Strategies", "Stripe / Paystack Integration", "Security Auditing", "CI/CD Pipelines"]
    }
  ] as Service[]
};
