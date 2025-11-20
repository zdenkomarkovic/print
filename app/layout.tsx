import type { Metadata } from "next";
import { CartProvider } from "@/contexts/CartContext";
import ConditionalLayout from "@/components/ConditionalLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DESIGNER 02 STORE - Vaša destinacija za jedinstvene dizajnerske proizvode",
    template: "%s | DESIGNER 02 STORE",
  },
  description:
    "Otkrijte pažljivo odabrane dizajnerske proizvode koji spajaju funkcionalnost, estetiku i kvalitet. DESIGNER 02 STORE - gde stil susreće kvalitet. Besplatna dostava.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "designer 02",
    "dizajnerski proizvodi",
    "online prodavnica",
    "kvalitetni proizvodi",
    "ekskluzivni proizvodi",
    "design store",
    "designer products",
    "premium quality",
    "unique products",
    "style",
    "fashion",
    "lifestyle",
  ],
  authors: [{ name: "DESIGNER 02 STORE" }],
  creator: "DESIGNER 02 STORE",
  publisher: "DESIGNER 02 STORE",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "DESIGNER 02 STORE",
    title: "DESIGNER 02 STORE - Vaša destinacija za jedinstvene dizajnerske proizvode",
    description:
      "Otkrijte pažljivo odabrane dizajnerske proizvode koji spajaju funkcionalnost, estetiku i kvalitet.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className="antialiased text-gray-900 bg-white text-base font-sans"
      >
        <CartProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </CartProvider>
      </body>
    </html>
  );
}
