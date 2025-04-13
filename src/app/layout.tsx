import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/common/Header";
import PageTransition from "@/components/transition/PageTransition";
import StairTransition from "@/components/transition/StairTransition";
import { umamiAnalytics } from "@/lib/constant";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="google-site-verification"
          content="k8c1urPW2-SpBEy5I7SSQ9jzIuFiIc0xJNJpLPAZYTs"
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={umamiAnalytics.dataWebsiteId}
        ></script>
      </head>
      <body className={spaceGrotesk.variable}>
        <Header />

        {/* Page Transition */}
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
