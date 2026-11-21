import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), title: `${siteConfig.name} | Software para clínicas odontológicas`, description: siteConfig.description,
  keywords: ["software odontológico", "sistema para clínicas dentales", "agenda para odontólogos", "historia clínica dental", "odontograma digital", "gestión de consultorio dental"],
  applicationName: siteConfig.name, authors: [{ name: siteConfig.name }], creator: siteConfig.name, alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "es_BO", url: "/", siteName: siteConfig.name, title: `${siteConfig.name} | Software para clínicas odontológicas`, description: siteConfig.description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name}, software para clínicas odontológicas` }] },
  twitter: { card: "summary_large_image", title: `${siteConfig.name} | Software para clínicas odontológicas`, description: siteConfig.description, images: ["/opengraph-image"] }, robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0f766e", colorScheme: "light" };
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="es" className="scroll-smooth antialiased"><body>{children}</body></html>; }
