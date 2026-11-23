import type { Metadata } from "next";
import { ExternalRedirect } from "@/components/external-redirect";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Iniciar sesión | SaaS Odontológico", robots: { index: false, follow: false } };

export default function LoginPage() {
  return <ExternalRedirect href={siteConfig.routes.login} action="iniciar sesión" />;
}
