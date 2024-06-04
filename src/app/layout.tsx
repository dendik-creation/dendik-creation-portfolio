import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/common/Header";
import PageTransition from "@/components/transition/PageTransition";
import StairTransition from "@/components/transition/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Dendi' Creation",
  description: "My Portfolio & Personal Website",
  authors: {
    name: "Dendi' Setiawan",
    url: "https://github.com/dendik-creation",
  },
  keywords: "Portfolio, Personal Website",
  creator: "Dendi' Setiawan",
  publisher: "Vercel",
  generator: "Next Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="k8c1urPW2-SpBEy5I7SSQ9jzIuFiIc0xJNJpLPAZYTs"
        />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />

        {/* Page Transition */}
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
