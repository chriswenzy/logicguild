import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LogicGuild | Engineering Better Digital Experiences",
  description:
    "LogicGuild is a premier software engineering and digital solutions partner. We design, build, and scale high-performance web systems, cloud architectures, and mobile products for ambitious businesses.",
  keywords: [
    "software engineering",
    "cloud architecture",
    "digital product development",
    "Next.js engineering",
    "mobile app development",
    "enterprise software",
    "LogicGuild",
  ],
  authors: [{ name: "LOGIC GUILD LIMITED" }],
  openGraph: {
    title: "LogicGuild | Engineering Better Digital Experiences",
    description:
      "Delivering Technology That Moves Businesses Forward. Exceptional Engineering. Exceptional People. Exceptional Delivery.",
    url: "https://logicguild.vercel.app",
    siteName: "LogicGuild",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LogicGuild | Engineering Better Digital Experiences",
    description:
      "Exceptional Engineering. Exceptional People. Exceptional Delivery.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F2744",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-text-primary selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
