import { Suspense } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ProblemSolution } from "@/components/problem-solution";
import { FeaturesGrid } from "@/components/features-grid";
import { FeatureShowcase } from "@/components/feature-showcase";
import { MultiBranchSection } from "@/components/multi-branch-section";
import { HowItWorks } from "@/components/how-it-works";
import { PricingSection, PricingSkeleton } from "@/components/pricing-section";
import { RoleBenefits } from "@/components/role-benefits";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";

export default function Home() {
  const jsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: siteConfig.name, applicationCategory: "BusinessApplication", operatingSystem: "Web", description: siteConfig.description, url: siteConfig.url, offers: { "@type": "Offer", price: "0", priceCurrency: siteConfig.currency, description: "Prueba gratuita de 14 días" }, audience: { "@type": "Audience", audienceType: "Clínicas y consultorios odontológicos" } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><a href="#contenido" className="skip-link">Saltar al contenido</a><Header /><main id="contenido"><Hero /><TrustBar /><ProblemSolution /><FeaturesGrid /><FeatureShowcase /><MultiBranchSection /><HowItWorks /><Suspense fallback={<PricingSkeleton />}><PricingSection /></Suspense><RoleBenefits /><FAQ /><FinalCTA /></main><Footer /></>;
}
