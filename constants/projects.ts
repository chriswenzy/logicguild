export interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  contribution: string;
  outcome: string;
  image: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "QuickBasket Mobile & Web Commerce",
    client: "QuickBasket",
    category: "High-Throughput E-Commerce",
    description:
      "A fast, high-concurrency mobile shopping and instant-delivery platform engineered for seamless checkout and real-time inventory synchronization.",
    challenge:
      "Handling sudden traffic surges during flash sales while maintaining sub-second catalog search and instant cart synchronization across web and mobile.",
    solution:
      "Architected a distributed Next.js frontend with Redis caching and microservices for inventory and payment processing.",
    contribution:
      "End-to-end full-stack engineering, performance optimization, and payment gateway integration.",
    outcome:
      "Zero downtime during peak shopping hours and a 38% increase in mobile checkout completion.",
    image: "/projects/quickbasket.png",
    tags: ["E-Commerce", "Next.js", "Redis", "Mobile API"],
    link: "https://www.quickbasket.com.ng/",
  },
  {
    id: 4,
    title: "C9X Automotive Marketplace",
    client: "C9X Group",
    category: "Marketplace & Transactions",
    description:
      "Nigeria's modern automotive marketplace ecosystem connecting verified buyers, dealers, and vehicle inspection networks.",
    challenge:
      "Building a trustworthy multi-sided marketplace with rich vehicle filtering, verified VIN tracking, and lead routing.",
    solution:
      "Engineered an intuitive listing portal with dynamic search indexing, automated image compression, and dealer CRM sync.",
    contribution:
      "Frontend architecture, responsive design system, and seller-buyer communication pipelines.",
    outcome:
      "Trusted ecosystem handling thousands of vehicle listings with instant search response times.",
    image: "/projects/c9x.png",
    tags: ["Marketplace", "React", "Node.js", "Search Indexing"],
    link: "https://c9x.thec9group.com/",
  },
  {
    id: 3,
    title: "Flybird Logistics & Travel Architecture",
    client: "Flybird",
    category: "Travel & Fleet Management",
    description:
      "Modern frontend architecture and booking engine for a high-traffic regional logistics and travel network.",
    challenge:
      "Complex seat allocation algorithms, route mapping, and multi-currency passenger ticketing with strict concurrency.",
    solution:
      "Engineered a resilient booking funnel with state machines preventing double-booking and dynamic manifest generation.",
    contribution:
      "System architecture, interactive seat selector, and high-reliability API integration.",
    outcome:
      "Simplified customer booking journey from 7 steps to 3, cutting drop-off rates by 42%.",
    image: "/projects/flybird.png",
    tags: ["Logistics", "Booking Engine", "TypeScript", "Real-time"],
    link: "https://flybird-fe.vercel.app/",
  },
  {
    id: 2,
    title: "STIH Institute Educational Platform",
    client: "STIH Institute",
    category: "EdTech & Accreditation",
    description:
      "An educational and professional certification platform engineered for student career milestone tracking and curriculum delivery.",
    challenge:
      "Delivering interactive course modules, automated grading assessments, and verified digital certificate generation.",
    solution:
      "Architected a modular learning management portal with video streaming, student dashboards, and verifiable digital badges.",
    contribution:
      "Platform engineering, LMS integration, and administrative reporting dashboards.",
    outcome:
      "Empowered hundreds of professionals to complete self-paced technical certifications seamlessly.",
    image: "/projects/stih.png",
    tags: ["EdTech", "LMS Portal", "Full-Stack", "Auth & Security"],
    link: "https://stiheinstitute.com/",
  },
  {
    id: 7,
    title: "Skillahead Digital Talent Platform",
    client: "Skillahead",
    category: "Talent & EdTech",
    description:
      "Pan-African talent accelerator platform empowering emerging professionals with market-ready digital skills and global placement.",
    challenge:
      "Managing student cohorts, assignment submissions, mentor reviews, and career matching at scale.",
    solution:
      "Built a collaborative learning portal with cohort tracking, real-time code reviews, and recruitment dashboards.",
    contribution:
      "Product engineering, database architecture, and responsive web app development.",
    outcome:
      "Successfully scaled cohort onboarding with positive student completion rates.",
    image: "/projects/skillahead.png",
    tags: ["Talent Platform", "Cohort LMS", "Next.js", "PostgreSQL"],
    link: "https://skillahead.vercel.app/",
  },
  {
    id: 8,
    title: "Rokswood Corporate Property Ecosystem",
    client: "Rokswood Group",
    category: "Real Estate & Development",
    description:
      "Corporate web presence and property portfolio platform for a prominent real estate and land development group.",
    challenge:
      "Presenting high-value commercial properties with immersive virtual walkthroughs and verified investment data.",
    solution:
      "Designed and developed an ultra-clean corporate platform featuring interactive property masterplans and investor inquiries.",
    contribution:
      "Brand-aligned UI/UX design, frontend engineering, and interactive portfolio filtering.",
    outcome:
      "Significantly elevated corporate brand perception and inbound institutional investor inquiries.",
    image: "/projects/rokswood.png",
    tags: ["Real Estate", "Corporate Portal", "UI/UX", "High Performance"],
    link: "https://www.rokswood.com/",
  },
  {
    id: 9,
    title: "Rokswood Energy Distribution Management",
    client: "Rokswood Energy",
    category: "Smart Energy & IoT Infrastructure",
    description:
      "Energy management and monitoring platform for optimizing electrical distribution across master-planned smart communities.",
    challenge:
      "Visualizing live power consumption metrics, smart meter telemetry, and grid failover alerts in real time.",
    solution:
      "Architected an IoT telemetry dashboard with time-series data visualization and automated threshold notifications.",
    contribution:
      "Dashboard engineering, data visualization components, and API integration with smart meter endpoints.",
    outcome:
      "Enabled facility managers to identify power inefficiencies and reduce community energy waste by 19%.",
    image: "/projects/rokswoodenergy.png",
    tags: ["Smart Energy", "IoT Dashboards", "Telemetry", "Data Viz"],
    link: "https://www.rokswoodenergy.com/",
  },
  {
    id: 6,
    title: "Nexgen High-Durability Paint Commerce",
    client: "Nexgen Paint",
    category: "Consumer Manufacturing & D2C",
    description:
      "D2C commercial portal for an innovative architectural coatings manufacturer with coverage calculators and instant dealer dispatch.",
    challenge:
      "Educating consumers on technical product benefits while facilitating bulk contractor orders and regional delivery.",
    solution:
      "Engineered an interactive paint quantity estimator, swatch visualizer, and streamlined merchant checkout.",
    contribution:
      "Full-stack web development, custom calculator logic, and inventory fulfillment workflows.",
    outcome:
      "Direct contractor inquiries grew by 65% in the first quarter post-launch.",
    image: "/projects/nexgen.png",
    tags: ["Manufacturing", "D2C Commerce", "Interactive Calculators"],
    link: "https://www.nexgenpaint.com/",
  },
];
